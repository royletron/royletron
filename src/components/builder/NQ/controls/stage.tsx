import { useFormContext } from "react-hook-form";
import { AnimatedMountedTexture, AnimatedTexture } from "../../Textures";
import { PickguardTexture } from "../../Textures/guards";
import AnimatedTextureContainer from "../../Textures/animated";

export default function Stage() {
  const { watch } = useFormContext();
  const pickguard = watch("pickguard");

  return (
    <g id="STAGE_2">
      <g id="STAGE_3">
        <g id="INSIDE">
          <mask
            id="mask12_9_7"
            width="70"
            height="219"
            x="342"
            y="1155"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
          >
            <path
              id="Vector 5"
              fill="#D9D9D9"
              d="m406.163 1361.06-55.443 12.12c-4.612 1.01-8.906-2.68-8.602-7.39l13.131-203.72c.298-4.62 4.858-7.72 9.26-6.3l36.102 11.61a7.1 7.1 0 0 1 4.921 6.52l6.209 179.98a7.11 7.11 0 0 1-5.578 7.18"
            ></path>
          </mask>
          <g mask="url(#mask12_9_7)">
            <AnimatedTextureContainer texture={pickguard} fill="white">
              <rect x="40" y="400" width="2000" height="2000" />
            </AnimatedTextureContainer>
            <g id="SCREW_29" stroke="#000" strokeWidth="0.5">
              <circle
                id="Ellipse 22_18"
                cx="350.412"
                cy="1365.02"
                r="4.245"
                fill="#D0D0D0"
                transform="rotate(.062 350.412 1365.02)"
              ></circle>
              <path
                id="Vector_28"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="m349.074 1364.54.64-.16.32-.64m-.96.8-.001.96m.001-.96h-.959v.48l-.001.48h.959m.961-1.76.001-1.12h.859l-.061 1.12m-.799 0h.799m0 0 .319.64.639.16m0 0h.959l-.001.96h-.959m.001-.96-.001.96m0 0-.64.16-.32.64m-.799 0-.319-.64-.639-.16m.958.8-.001 1.12h.799l.001-1.12m-.799 0h.799"
              ></path>
            </g>
            <g id="SCREW_30" stroke="#000" strokeWidth="0.5">
              <circle
                id="Ellipse 22_19"
                cx="403.462"
                cy="1353.09"
                r="4.245"
                fill="#D0D0D0"
                transform="rotate(.062 403.462 1353.09)"
              ></circle>
              <path
                id="Vector_29"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="m402.125 1352.61.639-.16.32-.64m-.959.8-.002.96m.002-.96h-.959l-.001.48-.001.48h.959m.961-1.76.001-1.12h.859l-.061 1.12m-.799 0h.799m0 0 .319.64.639.16m0 0h.959l-.001.96h-.959m.001-.96-.001.96m0 0-.64.16-.32.64m-.799 0-.319-.64-.639-.16m.958.8-.001 1.12h.799l.001-1.12m-.799 0h.799"
              ></path>
            </g>
            <g id="SCREW_31" stroke="#000" strokeWidth="0.5">
              <circle
                id="Ellipse 22_20"
                cx="397.263"
                cy="1174.89"
                r="4.245"
                fill="#D0D0D0"
                transform="rotate(.062 397.263 1174.89)"
              ></circle>
              <path
                id="Vector_30"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="m395.925 1174.41.639-.16.321-.63m-.96.79-.002.96m.002-.96h-.959l-.001.48-.001.48h.959m.962-1.75.001-1.12h.859l-.061 1.12m-.799 0h.799m0 0 .319.64.639.16m0 0h.958l-.001.96h-.959m.002-.96-.002.96m0 0-.639.15-.321.64m-.799 0-.319-.64-.639-.16m.958.8v1.12h.798l.001-1.12m-.799 0h.799"
              ></path>
            </g>
            <g id="SCREW_32" stroke="#000" strokeWidth="0.5">
              <circle
                id="Ellipse 22_21"
                cx="363.315"
                cy="1164.17"
                r="4.245"
                fill="#D0D0D0"
                transform="rotate(.062 363.315 1164.17)"
              ></circle>
              <path
                id="Vector_31"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                d="m361.977 1163.69.639-.16.32-.64m-.959.8-.002.96m.002-.96h-.959l-.001.48-.001.48h.959m.961-1.76.002-1.12h.858l-.061 1.12m-.799 0h.799m0 0 .319.64.639.16m0 0h.959l-.001.96h-.959m.001-.96-.001.96m0 0-.64.16-.32.64m-.799 0-.319-.64-.639-.16m.958.8-.001 1.12h.799l.001-1.12m-.799 0h.799"
              ></path>
            </g>
            <g id="POT_3">
              <g id="g462_3">
                <path
                  id="path464_3"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="0.5"
                  d="m369.247 1189.21 11.694 16.31"
                ></path>
              </g>
              <g id="g466_3">
                <path
                  id="path468_3"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="0.5"
                  d="m369.247 1189.21-.68.51-.679.51"
                ></path>
              </g>
              <g id="g470_3">
                <path
                  id="path472_3"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="0.5"
                  d="m379.582 1206.54-11.694-16.31"
                ></path>
              </g>
              <g id="g474_3">
                <path
                  id="path476_3"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="0.5"
                  d="m379.582 1206.54.339.34h.509l.34-.17.34-.34v-.51l-.169-.34"
                ></path>
              </g>
              <g id="g478_3">
                <path
                  id="path480_3"
                  fill="#231F20"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.333"
                  d="m380.285 1184.64-2.886.17-2.886.67-2.717.85-2.548 1.35-2.548 1.7-2.039 2.03-1.869 2.21-1.531 2.54-1.191 2.72-.682 2.71-.512 2.89-.003 3.05.506 2.89.676 2.71 1.185 2.72 1.525 2.55 1.865 2.21 2.034 2.04 2.545 1.7 2.544 1.36 2.715.85 2.885.68 2.885.17 2.886-.16 2.886-.68 2.717-.84 2.548-1.36 2.548-1.69 2.039-2.04 1.869-2.2 1.531-2.55 1.191-2.71.682-2.72.512-2.88.003-3.06-.506-2.88-.676-2.72-1.185-2.72-1.525-2.55-1.865-2.2-2.034-2.04-2.545-1.7-2.544-1.36-2.715-.86-2.885-.68z"
                ></path>
              </g>
              <g id="g482_3">
                <path
                  id="path484_3"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="0.5"
                  d="m367.888 1190.23-2.039 2.03-1.869 2.04-1.531 2.54-1.021 2.55-.852 2.71-.342 2.72-.003 2.88.506 2.72.846 2.72 1.185 2.54 1.525 2.38 1.865 2.21 2.035 1.87 2.375 1.36 2.545 1.19 2.715.85 2.885.51 2.715.01 2.886-.34 2.717-.84 2.548-1.19 2.377-1.36 2.209-1.86 1.869-2.03 1.531-2.38 1.36-2.54.852-2.72.342-2.71.173-2.89-.336-2.72-.676-2.71-1.016-2.72-1.525-2.38-1.695-2.21-2.035-1.87-2.374-1.7-2.545-1.36-2.545-.85-2.885-.51-2.716-.17-2.886.33-2.716.51-2.547 1.02-2.548 1.35"
                ></path>
              </g>
              <path
                id="Vector_32"
                fill="#fff"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="0.5"
                d="m367.888 1190.23 11.694 16.31.339.34h.509l.34-.17.34-.34v-.51l-.169-.34-11.695-16.31z"
              ></path>
            </g>
            <g id="POT_4">
              <g id="g462_4">
                <path
                  id="path464_4"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="0.5"
                  d="m368.119 1308.07 11.694 16.31"
                ></path>
              </g>
              <g id="g466_4">
                <path
                  id="path468_4"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="0.5"
                  d="m368.119 1308.07-.679.51-.68.51"
                ></path>
              </g>
              <g id="g470_4">
                <path
                  id="path472_4"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="0.5"
                  d="m378.455 1325.39-11.695-16.3"
                ></path>
              </g>
              <g id="g474_4">
                <path
                  id="path476_4"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="0.5"
                  d="m378.455 1325.39.339.34h.509l.34-.16.339-.34.001-.51-.169-.34"
                ></path>
              </g>
              <g id="g478_4">
                <path
                  id="path480_4"
                  fill="#231F20"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.333"
                  d="m379.157 1303.5-2.886.17-2.886.67-2.717.85-2.547 1.35-2.548 1.7-2.039 2.03-1.87 2.21-1.53 2.54-1.191 2.71-.682 2.72-.512 2.88-.004 3.06.506 2.89.676 2.71 1.186 2.72 1.525 2.55 1.864 2.21 2.035 2.04 2.544 1.7 2.545 1.36 2.715.85 2.885.68 2.885.17 2.886-.16 2.886-.68 2.717-.85 2.547-1.35 2.548-1.7 2.039-2.03 1.87-2.2 1.53-2.55 1.191-2.71.682-2.72.513-2.88.003-3.06-.506-2.88-.676-2.72-1.186-2.72-1.524-2.55-1.865-2.21-2.035-2.03-2.544-1.7-2.545-1.36-2.715-.86-2.884-.68z"
                ></path>
              </g>
              <g id="g482_4">
                <path
                  id="path484_4"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="0.5"
                  d="m366.761 1309.09-2.039 2.03-1.87 2.04-1.53 2.54-1.021 2.55-.852 2.71-.342 2.72-.004 2.88.507 2.72.846 2.71 1.185 2.55 1.525 2.38 1.865 2.21 2.035 1.87 2.374 1.36 2.545 1.19 2.715.85 2.885.51 2.716.01 2.886-.34 2.717-.85 2.547-1.18 2.378-1.36 2.209-1.86 1.869-2.04 1.53-2.37 1.361-2.55.851-2.71.343-2.72.173-2.88-.337-2.72-.676-2.71-1.015-2.72-1.525-2.38-1.695-2.21-2.035-1.87-2.375-1.7-2.544-1.36-2.546-.85-2.885-.51-2.715-.17-2.886.33-2.717.51-2.547 1.01-2.547 1.36"
                ></path>
              </g>
              <path
                id="Vector_33"
                fill="#fff"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="0.5"
                d="m366.76 1309.09 11.695 16.3.339.34h.509l.339-.16.34-.34.001-.51-.17-.34-11.694-16.31z"
              ></path>
            </g>
            <g id="KILL SWITCH_2">
              <g id="g518_2">
                <path
                  id="path520_2"
                  fill="#D9D9D9"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="0.5"
                  d="m370.392 1264.12-.144 1.77.2 1.67.703 1.59.888 1.46 1.26 1.19 1.287 1.04 1.687.62 1.583.27 1.796-.01 1.721-.52 1.431-.73 1.328-1.07 1.197-1.26.749-1.5.461-1.72.144-1.76-.2-1.67-.703-1.59-.888-1.46-1.102-1.17-1.446-1.06-1.686-.62-1.583-.28-1.796.02-1.563.54-1.589.7-1.328 1.08-1.197 1.26-.75 1.5z"
                ></path>
              </g>
              <g id="g526_2">
                <path
                  id="path528_2"
                  fill="#D9D9D9"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="0.5"
                  d="m377.354 1257.83 7.166 2.87 1.111 7.7-6.186 4.63-7.166-2.87-.952-7.67z"
                ></path>
              </g>
              <g id="g522_2">
                <path
                  id="path524_2"
                  fill="#D9D9D9"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="0.5"
                  d="m374.349 1264.81-.034 1.14.283 1.19.627 1.08.84.8 1.053.51 1.266.22 1.163-.12 1.06-.47.956-.82.668-1.02.35-1.08.034-1.14-.282-1.19-.627-1.08-.84-.8-1.053-.51-1.267-.22-1.163.12-1.06.47-.956.81-.667 1.03z"
                ></path>
              </g>
            </g>
          </g>
        </g>
        <path
          id="OUTLINE"
          stroke="#000"
          d="m406.163 1361.06-55.443 12.12c-4.612 1.01-8.906-2.68-8.602-7.39l13.131-203.72c.298-4.62 4.858-7.72 9.26-6.3l36.102 11.61a7.1 7.1 0 0 1 4.921 6.52l6.209 179.98a7.11 7.11 0 0 1-5.578 7.18Z"
        ></path>
      </g>
    </g>
  );
}
