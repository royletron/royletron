import { useFormContext } from "react-hook-form";
import { AnimatedMountedTexture, AnimatedTexture } from "../../Textures";
import { PickguardTexture } from "../../Textures/guards";
import Toggle from "../../components/Toggle";

export default function Stage() {
  const { watch } = useFormContext();
  const pickguard = watch("pickguard");
  const tremolo = watch("tremolo");
  return (
    <g id="STAGE">
      <Toggle on={tremolo === false}>
        <g id="NO TREM_2">
          <mask
            id="mask5_9_7"
            width="187"
            height="296"
            x="175"
            y="949"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
          >
            <path
              id="Vector 4"
              fill="#D9D9D9"
              d="m321.957 1244.09-4.457.21-.089-46.51a5.6 5.6 0 0 0-5.6-5.59h-86.11c-3.093 0-5.6 2.51-5.6 5.6v46.2s-6.101 1-7.601-3l-36.723-265.502a3 3 0 0 1 1.47-3.008l38.081-22.023a7.2 7.2 0 0 1 3.604-.967h12.469v11.003a6.2 6.2 0 0 0 6.2 6.2h62.9a6.4 6.4 0 0 0 6.4-6.4V949.5h13.008a4.1 4.1 0 0 1 2.039.543l38.303 21.954a3 3 0 0 1 1.482 3.001l-35.535 265.192a4.51 4.51 0 0 1-4.241 3.9"
            ></path>
          </mask>
          <g mask="url(#mask5_9_7)">
            <path
              id="Rectangle 46_3"
              fill="#FF9797"
              d="M138 911h273v415H138z"
            ></path>
            <path
              id="Vector 3"
              stroke="#000"
              d="m321.957 1244.09-4.456.21-.09-46.51a5.6 5.6 0 0 0-5.6-5.59h-86.11c-3.093 0-5.6 2.51-5.6 5.6v46.2s-6.1 1-7.6-3l-36.724-265.502a3 3 0 0 1 1.47-3.008l38.081-22.023a7.2 7.2 0 0 1 3.605-.967h12.468v11.003a6.2 6.2 0 0 0 6.2 6.2h62.9a6.4 6.4 0 0 0 6.4-6.4V949.5h13.008a4.1 4.1 0 0 1 2.039.543l38.303 21.954a3 3 0 0 1 1.482 3.001l-35.535 265.192a4.51 4.51 0 0 1-4.241 3.9Z"
            ></path>
          </g>
        </g>
      </Toggle>
      <Toggle on={tremolo === true}>
        <g id="TREM_2">
          <mask
            id="mask6_9_7"
            width="187"
            height="260"
            x="175"
            y="949"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
          >
            <path
              id="Vector 4_2"
              fill="#D9D9D9"
              d="m361.73 975.001-31.616 233.659c-.015.11-.201.11-.218 0-1.344-9.12-9.407-15.4-18.594-10.61-.87.45-1.817.77-2.798.81L242 1201.5l-15.5 1.5c-1.478-2.46-11.215-8.33-18.197 2.33-.103.15-.353.11-.379-.08L175.78 975.501a3 3 0 0 1 1.47-3.013l38.078-22.021a7.2 7.2 0 0 1 3.604-.967h12.469v11.003a6.2 6.2 0 0 0 6.2 6.2h62.9a6.4 6.4 0 0 0 6.4-6.4V949.5h13.008a4.1 4.1 0 0 1 2.039.543l38.301 21.953a3 3 0 0 1 1.481 3.005"
            ></path>
          </mask>
          <g mask="url(#mask6_9_7)">
            <path
              id="Rectangle 46_4"
              fill="#FF9797"
              d="M138 911h273v415H138z"
            ></path>
            <path
              id="Vector 3_2"
              stroke="#000"
              d="m361.73 975.001-31.615 233.659c-.016.11-.202.11-.219 0-1.344-9.12-9.407-15.4-18.594-10.61-.87.45-1.817.77-2.797.81l-66.504 2.64-15.5 1.5c-1.479-2.46-11.216-8.33-18.198 2.33-.103.15-.353.11-.379-.08L175.78 975.501a3 3 0 0 1 1.47-3.013l38.078-22.021a7.2 7.2 0 0 1 3.605-.967h12.468v11.003a6.2 6.2 0 0 0 6.2 6.2h62.9a6.4 6.4 0 0 0 6.4-6.4V949.5h13.008a4.1 4.1 0 0 1 2.039.543l38.301 21.953a3 3 0 0 1 1.481 3.005Z"
            ></path>
          </g>
        </g>
      </Toggle>
      <g id="SCREWS_2" stroke="#000" strokeWidth="0.5">
        <g id="SCREW_12">
          <circle
            id="Ellipse 22"
            cx="214.101"
            cy="1187.9"
            r="4.25"
            fill="#D0D0D0"
          ></circle>
          <path
            id="Vector_7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="m212.761 1187.42.64-.16.32-.64m-.96.8-.001.96m.001-.96h-.96v.48l-.001.48h.96m.961-1.76v-1.12h.86l-.06 1.12m-.8 0h.8m0 0 .32.64.64.16m0 0h.96l-.001.96h-.96m.001-.96-.001.96m0 0-.64.16-.32.64m-.8 0-.32-.64-.64-.16m.96.8.001 1.12h.799v-1.12m-.8 0h.8"
          ></path>
        </g>
        <g id="SCREW_13">
          <circle
            id="Ellipse 22_2"
            cx="325.101"
            cy="1187.9"
            r="4.25"
            fill="#D0D0D0"
          ></circle>
          <path
            id="Vector_8"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="m323.761 1187.42.64-.16.32-.64m-.96.8-.001.96m.001-.96h-.96v.48l-.001.48h.96m.961-1.76v-1.12h.86l-.06 1.12m-.8 0h.8m0 0 .32.64.64.16m0 0h.96l-.001.96h-.96m.001-.96-.001.96m0 0-.64.16-.32.64m-.8 0-.32-.64-.64-.16m.96.8.001 1.12h.799v-1.12m-.8 0h.8"
          ></path>
        </g>
        <g id="SCREW_14">
          <circle
            id="Ellipse 22_3"
            cx="187.4"
            cy="977.9"
            r="4.25"
            fill="#D0D0D0"
          ></circle>
          <path
            id="Vector_9"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="m186.061 977.42.64-.16.32-.64m-.96.8-.001.96m.001-.96h-.96v.48l-.001.48h.96m.961-1.76v-1.12h.86l-.06 1.12m-.8 0h.8m0 0 .32.64.64.16m0 0h.96l-.001.96h-.96m.001-.96-.001.96m0 0-.64.16-.32.64m-.8 0-.32-.64-.64-.16m.96.8.001 1.12h.799v-1.12m-.8 0h.8"
          ></path>
        </g>
        <g id="SCREW_15">
          <circle
            id="Ellipse 22_4"
            cx="350.2"
            cy="977.9"
            r="4.25"
            fill="#D0D0D0"
          ></circle>
          <path
            id="Vector_10"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="m348.86 977.42.64-.16.32-.64m-.96.8v.96m0-.96h-.96v.96h.96m.96-1.76v-1.12h.86l-.06 1.12m-.8 0h.8m0 0 .32.64.64.16m0 0h.96v.96h-.96m0-.96v.96m0 0-.64.16-.32.64m-.8 0-.32-.64-.64-.16m.96.8v1.12h.8v-1.12m-.8 0h.8"
          ></path>
        </g>
      </g>
    </g>
  );
}
