import "~/styles/global.css";

import { FormProvider, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import Options, {
  NQFormSchema,
  NQType,
  PickupType,
  type NQProps,
} from "./NQ/options";
import Raw, { defaultProps } from "./NQ/raw";
import {
  BodyWoodTextures,
  FretboardWoodTextures,
  NeckWoodTextures,
} from "./Textures/woods";
import { PickguardTexture } from "./Textures/guards";

export default function Builder() {
  const methods = useForm<NQProps>({
    resolver: zodResolver(NQFormSchema),
    defaultValues: {
      type: NQType.STAGE,
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

  const onSubmit = (data) => console.log(data);
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex w-full max-w-8xl m-auto h-full"
      >
        <div className="w-1/3 bg-slate-500 overflow-hidden max-h-full flex items-center justify-center">
          <Raw {...defaultProps} />
        </div>
        <div className="w-2/3 bg-slate-400">
          <form className="max-w-2xl p-4 flex gap-4 flex-col">
            <Options />
            {/* {Object.keys(choices).map((key, idx) => {
            const choice = choices[key];
            return (
              <div key={`choice_${idx}`}>
                <label className="w-full select">
                  <span className="label">{choice.name}</span>
                  <select
                    defaultValue={selectedChoices[key]}
                    onChange={(e) => {
                      setSelectedChoices((prev) => ({
                        ...prev,
                        [key]: e.target.value,
                      }));
                    }}
                  >
                    {choice.placeholder && (
                      <option disabled={true}>{choice.placeholder}</option>
                    )}
                    {choice.options.map((option, idx) => (
                      <option key={`option_${idx}`} value={option.value}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            );
          })} */}
          </form>
          <pre></pre>
        </div>
      </form>
    </FormProvider>
  );
}
