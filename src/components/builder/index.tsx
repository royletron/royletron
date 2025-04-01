import { useCallback, useEffect, useState } from "react";

import "~/styles/global.css";

import { FormProvider, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  TransformWrapper,
  TransformComponent,
  getMatrixTransformStyles,
} from "react-zoom-pan-pinch";

import Options, {
  NQFormSchema,
  NQType,
  OrientationType,
  PickupType,
  Tabs,
  type NQProps,
} from "./NQ/options";
import Raw from "./NQ/raw";
import {
  BodyWoodTextures,
  FretboardWoodTextures,
  NeckWoodTextures,
} from "./Textures/woods";
import { PickguardTexture } from "./Textures/guards";
import Controls from "./Controls";

import bg from "~/assets/images/guitar/bg.avif";

export default function Builder() {
  const methods = useForm<NQProps>({
    resolver: zodResolver(NQFormSchema),
    defaultValues: {
      type: NQType.STAGE,
      orientation: OrientationType.RIGHT,
      neckLength: 24.5,
      bodyWood: BodyWoodTextures.KORINA,
      neckWood: NeckWoodTextures.MAPLE,
      fretboardWood: FretboardWoodTextures.MAPLE,
      pickupA: PickupType.DOUBLE,
      pickupC: PickupType.DOUBLE,
      hollowBody: false,
      germanCarve: false,
      pickguard: PickguardTexture.RED_TORTOISESHELL,
    },
  });

  const onSubmit = (data: NQProps) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <TransformWrapper minScale={0.3}>
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
              wrapperStyle={{ width: "100%", height: "100%" }}
            >
              <Raw />
            </TransformComponent>
            <Controls />
          </div>
          <div className="w-full border-t border-neutral-300">
            <Tabs />
          </div>
        </form>
      </TransformWrapper>
    </FormProvider>
  );
}
