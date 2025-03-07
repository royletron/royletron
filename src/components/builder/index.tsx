import NQImage from "./NQ/image";
import { choices } from "./NQ/options";
import type { ChoiceWithStyle } from "./NQ/options";

import { useState } from "react";

type ChoiceKey = keyof typeof choices;

export default function Builder() {
  const [selectedChoices, setSelectedChoices] = useState<
    Record<ChoiceKey, string | number | undefined>
  >(
    Object.fromEntries(
      Object.keys(choices).map((key) => [key, choices[key].defaultValue])
    )
  );

  const selectedStyles = Object.fromEntries(
    Object.keys(selectedChoices).map((key) => {
      const choice = choices[key];
      const selectedChoice = choice.options.find(
        (option) => option.value === selectedChoices[key]
      );
      return [
        key,
        //@ts-ignore
        selectedChoice?.style,
      ];
    })
  );

  console.log(selectedStyles);

  return (
    <div className="flex w-full max-w-8xl m-auto h-full">
      <div className="w-1/3 bg-slate-500 overflow-hidden max-h-full flex items-center justify-center">
        <NQImage
          body={selectedStyles.bodyColour}
          fretboardWood={selectedStyles.fretboardWood}
          neckWood={selectedStyles.neckWood}
          pickGuard={selectedStyles.pickGuard}
        />
      </div>
      <div className="w-2/3 bg-slate-400">
        <form className="max-w-2xl p-4 flex gap-4 flex-col">
          {Object.keys(choices).map((key, idx) => {
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
          })}
        </form>
        <pre>
          <code>{JSON.stringify(selectedChoices, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
}
