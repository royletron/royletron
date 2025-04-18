import "~/styles/global.css";

import { FormProvider, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import { NQFormSchema, Tabs, type NQProps } from "./NQ/options";
import Raw, { defaultValues } from "./NQ/raw";
import Controls from "./Controls";

import bg from "~/assets/images/guitar/bg.avif";
import { createContext, useContext, useRef, useState } from "react";
import { PricingProvider } from "./components/Pricing";

const context = createContext<{
  rotation: number;
  setRotation: React.Dispatch<React.SetStateAction<number>>;
}>({ rotation: 0, setRotation: () => {} });

export const useRotation = () => {
  const { rotation, setRotation } = useContext(context);
  return { rotation, setRotation };
};

export default function Builder() {
  const [rotation, setRotation] = useState(0);
  const methods = useForm<NQProps>({
    resolver: zodResolver(NQFormSchema),
    defaultValues,
  });

  const onSubmit = (data: NQProps) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <PricingProvider>
        <TransformWrapper minScale={0.5} maxScale={5} smooth>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col w-full max-h-full h-full"
            style={{
              backgroundImage: `url(${bg.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top center",
            }}
          >
            <div className="w-full overflow-hidden relative flex-1 bg-neutral-400/10">
              <TransformComponent
                wrapperStyle={{
                  width: "100%",
                  height: "100%",
                }}
                contentStyle={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <div className="w-full h-full">
                  <Raw og />
                </div>
              </TransformComponent>
              <context.Provider value={{ rotation, setRotation }}>
                <Controls />
              </context.Provider>
            </div>
            <div className="w-full border-t border-neutral-300 bg-white">
              <Tabs />
            </div>
          </form>
        </TransformWrapper>
      </PricingProvider>
    </FormProvider>
  );
}
