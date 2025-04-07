import { useFormContext } from "react-hook-form";
import Rocket from "./rocket";
import Stage from "./stage";
import { NQType } from "../options";

import Standard from "./standard";
import Toggle from "../../components/Toggle";

export default function Pickguards() {
  const { watch } = useFormContext();
  const type = watch("type");

  return (
    <g>
      <Toggle on={type === NQType.ROCKET}>
        <Rocket />
      </Toggle>
      <Toggle on={type === NQType.STAGE}>
        <Stage />
      </Toggle>
      <Toggle on={type === NQType.STANDARD}>
        <Standard />
      </Toggle>
    </g>
  );
}
