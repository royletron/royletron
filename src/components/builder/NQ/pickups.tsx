import react, { useMemo } from "react";

export enum PickupType {
  "SINGLEA" = "single-a",
  "DOUBLEA" = "double-a",
  "WIDERANGEHUMBUCKER" = "wide-range-humbucker",
  "FILTERTRON" = "filtertron",
  "STAPLEP90" = "staple-p90",
  "STRAT" = "strat",
  "P90HUMBUCKER" = "p90-humbucker",
  "GOLDFOIL" = "gold-foil",
  "MINIHUMBUCKER" = "mini-humbucker",
  "P90" = "p90",
  "HUMBUCKER" = "humbucker",
  "HCOVER" = "h-cover",
}

export const PickupTypeMap: Record<
  PickupType,
  { name: string; price: number }
> = {
  [PickupType.SINGLEA]: {
    name: "Single A",
    price: 0,
  },
  [PickupType.DOUBLEA]: {
    name: "Double A",
    price: 0,
  },
  [PickupType.WIDERANGEHUMBUCKER]: {
    name: "Wide Range Humbucker",
    price: 0,
  },
  [PickupType.FILTERTRON]: {
    name: "Filtertron",
    price: 0,
  },
  [PickupType.STAPLEP90]: {
    name: "Staple P90",
    price: 0,
  },
  [PickupType.STRAT]: {
    name: "Strat",
    price: 0,
  },
  [PickupType.P90HUMBUCKER]: {
    name: "P90 Humbucker",
    price: 0,
  },
  [PickupType.GOLDFOIL]: {
    name: "Gold Foil Humbucker",
    price: 0,
  },
  [PickupType.MINIHUMBUCKER]: {
    name: "Mini Humbucker",
    price: 0,
  },
  [PickupType.P90]: {
    name: "P90",
    price: 0,
  },
  [PickupType.HUMBUCKER]: {
    name: "Humbucker",
    price: 0,
  },
  [PickupType.HCOVER]: {
    name: "H Cover",
    price: 0,
  },
};

const DoubleAPickup = () => (
  <g>
    <rect
      x="8.10059"
      y="54.5469"
      width="26.75"
      height="94.3"
      rx="12.7"
      transform="rotate(-90 8.10059 54.5469)"
      fill="#F7F7F7"
      stroke="black"
    />
    <rect
      x="17.3999"
      y="42.5454"
      width="3"
      height="75"
      transform="rotate(-90 17.3999 42.5454)"
      fill="#D0D0D0"
      stroke="black"
    />
    <rect
      x="8.1001"
      y="27.75"
      width="26.75"
      height="94.3"
      rx="12.7"
      transform="rotate(-90 8.1001 27.75)"
      fill="#F7F7F7"
      stroke="black"
    />
    <rect
      x="17.3999"
      y="15.7485"
      width="3"
      height="75"
      transform="rotate(-90 17.3999 15.7485)"
      fill="#D0D0D0"
      stroke="black"
    />
    <circle
      cx="3.59961"
      cy="29.1001"
      r="2.75"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
    />
    <line
      x1="3.59932"
      y1="27.5999"
      x2="3.59932"
      y2="30.5999"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="4.99951"
      y1="29.1997"
      x2="1.99951"
      y2="29.1997"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="4.84841"
      y1="30.3723"
      x2="2.37354"
      y2="27.8974"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="2.42703"
      y1="30.3487"
      x2="4.9019"
      y2="27.8738"
      stroke="black"
      strokeWidth="0.6"
    />
    <circle
      cx="107.199"
      cy="28.2002"
      r="2.75"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
    />
    <line
      x1="107.199"
      y1="26.7"
      x2="107.199"
      y2="29.7"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="108.599"
      y1="28.2998"
      x2="105.599"
      y2="28.2998"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="108.448"
      y1="29.4724"
      x2="105.973"
      y2="26.9975"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="106.027"
      y1="29.4488"
      x2="108.502"
      y2="26.9739"
      stroke="black"
      strokeWidth="0.6"
    />
  </g>
);

const SingleAPickup = () => (
  <g>
    <rect
      x="8.40039"
      y="27.75"
      width="26.75"
      height="94.3"
      rx="12.7"
      transform="rotate(-90 8.40039 27.75)"
      fill="#F7F7F7"
      stroke="black"
    />
    <rect
      x="17.7002"
      y="15.7485"
      width="3"
      height="75"
      transform="rotate(-90 17.7002 15.7485)"
      fill="#D0D0D0"
      stroke="black"
    />
    <circle
      cx="3.8999"
      cy="14.0947"
      r="2.75"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
    />
    <line
      x1="3.89961"
      y1="12.5945"
      x2="3.89961"
      y2="15.5945"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="5.2998"
      y1="14.1943"
      x2="2.2998"
      y2="14.1943"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="5.14871"
      y1="15.3669"
      x2="2.67383"
      y2="12.892"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="2.72732"
      y1="15.3433"
      x2="5.20219"
      y2="12.8684"
      stroke="black"
      strokeWidth="0.6"
    />
    <circle
      cx="107"
      cy="13.9946"
      r="2.75"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
    />
    <line
      x1="107"
      y1="12.4944"
      x2="107"
      y2="15.4944"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="108.4"
      y1="14.0942"
      x2="105.4"
      y2="14.0942"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="108.249"
      y1="15.2668"
      x2="105.774"
      y2="12.7919"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="105.827"
      y1="15.2432"
      x2="108.302"
      y2="12.7683"
      stroke="black"
      strokeWidth="0.6"
    />
  </g>
);

const WideRangePickup = () => (
  <g style={{ translate: "-3px 0px" }}>
    <path
      d="M105.172 58.5498H11.3425C9.82114 58.5498 8.57715 57.3045 8.57715 55.7845V3.78447C8.57715 2.26313 9.82114 1.01781 11.3425 1.01781H105.172C106.693 1.01781 107.937 2.26313 107.937 3.78447V55.7845C107.937 57.3045 106.693 58.5498 105.172 58.5498Z"
      fill="url(#paint0_linear_76_6493)"
      stroke="black"
      strokeMiterlimit="10"
    />
    <path
      d="M28.7841 14.3584C28.7841 16.2144 27.2787 17.7197 25.4227 17.7197C23.5654 17.7197 22.0601 16.2144 22.0601 14.3584C22.0601 12.5024 23.5654 10.9971 25.4227 10.9971C27.2787 10.9971 28.7841 12.5024 28.7841 14.3584Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M42.2943 14.3584C42.2943 16.2144 40.789 17.7197 38.933 17.7197C37.0756 17.7197 35.5703 16.2144 35.5703 14.3584C35.5703 12.5024 37.0756 10.9971 38.933 10.9971C40.789 10.9971 42.2943 12.5024 42.2943 14.3584Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M55.4188 14.3584C55.4188 16.2144 53.9135 17.7197 52.0575 17.7197C50.2002 17.7197 48.6948 16.2144 48.6948 14.3584C48.6948 12.5024 50.2002 10.9971 52.0575 10.9971C53.9135 10.9971 55.4188 12.5024 55.4188 14.3584Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M22.8896 12.1701L27.8003 16.7341"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <path
      d="M36.3896 12.1701L41.311 16.7341"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <path
      d="M49.8755 11.82L54.4355 16.7346"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <path
      d="M68.1224 46.5962C68.1224 48.4522 66.6171 49.9575 64.7611 49.9575C62.9038 49.9575 61.3984 48.4522 61.3984 46.5962C61.3984 44.7402 62.9038 43.2349 64.7611 43.2349C66.6171 43.2349 68.1224 44.7402 68.1224 46.5962Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M81.2245 46.5962C81.2245 48.4522 79.7192 49.9575 77.8632 49.9575C76.0058 49.9575 74.5005 48.4522 74.5005 46.5962C74.5005 44.7402 76.0058 43.2349 77.8632 43.2349C79.7192 43.2349 81.2245 44.7402 81.2245 46.5962Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M94.3485 46.5962C94.3485 48.4522 92.8432 49.9575 90.9872 49.9575C89.1298 49.9575 87.6245 48.4522 87.6245 46.5962C87.6245 44.7402 89.1298 43.2349 90.9872 43.2349C92.8432 43.2349 94.3485 44.7402 94.3485 46.5962Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M62.228 44.4079L67.1387 48.9719"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <path
      d="M75.3193 44.4079L80.2407 48.9719"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <path
      d="M88.8057 44.0575L93.3657 48.9722"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <circle
      cx="3.40039"
      cy="29.5005"
      r="2.75"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
    />
    <line
      x1="3.4001"
      y1="28.0002"
      x2="3.4001"
      y2="31.0002"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="4.80029"
      y1="29.6"
      x2="1.80029"
      y2="29.6"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="4.6492"
      y1="30.7727"
      x2="2.17432"
      y2="28.2978"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="2.22781"
      y1="30.749"
      x2="4.70268"
      y2="28.2742"
      stroke="black"
      strokeWidth="0.6"
    />
    <circle
      cx="113.8"
      cy="30"
      r="2.75"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
    />
    <line
      x1="113.8"
      y1="28.4998"
      x2="113.8"
      y2="31.4998"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="115.2"
      y1="30.0996"
      x2="112.2"
      y2="30.0996"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="115.049"
      y1="31.2722"
      x2="112.574"
      y2="28.7973"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="112.627"
      y1="31.2486"
      x2="115.102"
      y2="28.7737"
      stroke="black"
      strokeWidth="0.6"
    />
    <defs>
      <linearGradient
        id="paint0_linear_76_6493"
        x1="58.2571"
        y1="1.01781"
        x2="58.2571"
        y2="58.5498"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F3F3F3" />
        <stop offset="1" stopColor="#EFEFEF" />
      </linearGradient>
    </defs>
  </g>
);

const FiltertronPickup = () => (
  <g>
    <path
      d="M93.8822 44.6201H17.0288C12.5555 44.6201 8.89551 40.9601 8.89551 36.4868V8.81212C8.89551 4.33879 12.5555 0.678785 17.0288 0.678785H93.8822C98.3555 0.678785 102.016 4.33879 102.016 8.81212V36.4868C102.016 40.9601 98.3555 44.6201 93.8822 44.6201Z"
      fill="url(#paint0_linear_76_6465)"
      stroke="black"
      strokeMiterlimit="10"
    />
    <path
      d="M73.6004 15.7026L73.5957 15.7026L73.594 15.7026H73.5917H59.5327C58.4554 15.7026 57.5754 16.5825 57.5754 17.6586V27.6386C57.5754 28.716 58.4553 29.596 59.5327 29.596H73.5896L73.5972 29.5961L73.5972 29.5962H73.606H88.1613C90.6594 29.5962 92.708 31.665 92.708 34.1975V34.7615C92.708 37.2927 90.6594 39.3615 88.1613 39.3615H21.9093C19.4099 39.3615 17.3613 37.2927 17.3613 34.7615V34.1975C17.3613 31.665 19.4099 29.5962 21.9093 29.5962H37.2899C37.297 29.5962 37.3041 29.596 37.3112 29.5957H51.3701C52.4462 29.5957 53.3261 28.7158 53.3261 27.6397V17.6597C53.3261 16.5824 52.4462 15.7024 51.3701 15.7024L21.9623 15.7026C19.4331 15.7026 17.3623 13.6319 17.3623 11.1013V10.5373C17.3623 8.00797 19.433 5.93726 21.9623 5.93726H88.1076C90.637 5.93726 92.709 8.00803 92.709 10.5373V11.1013C92.709 13.6318 90.637 15.7026 88.1076 15.7026L73.6004 15.7026Z"
      fill="#231F20"
      stroke="black"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25.7162 10.7378C25.7162 12.5938 24.2109 14.0991 22.3549 14.0991C20.4975 14.0991 18.9922 12.5938 18.9922 10.7378C18.9922 8.88179 20.4975 7.37646 22.3549 7.37646C24.2109 7.37646 25.7162 8.88179 25.7162 10.7378Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M38.8793 10.9009C38.8793 12.7569 37.3739 14.2622 35.5179 14.2622C33.6606 14.2622 32.1553 12.7569 32.1553 10.9009C32.1553 9.04487 33.6606 7.53954 35.5179 7.53954C37.3739 7.53954 38.8793 9.04487 38.8793 10.9009Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M52.0424 10.9009C52.0424 12.7569 50.537 14.2622 48.681 14.2622C46.8237 14.2622 45.3184 12.7569 45.3184 10.9009C45.3184 9.04487 46.8237 7.53954 48.681 7.53954C50.537 7.53954 52.0424 9.04487 52.0424 10.9009Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M65.2054 10.8074C65.2054 12.6634 63.7001 14.1687 61.8441 14.1687C59.9868 14.1687 58.4814 12.6634 58.4814 10.8074C58.4814 8.95137 59.9868 7.44604 61.8441 7.44604C63.7001 7.44604 65.2054 8.95137 65.2054 10.8074Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M77.9315 10.8074C77.9315 12.6634 76.4262 14.1687 74.5702 14.1687C72.7129 14.1687 71.2075 12.6634 71.2075 10.8074C71.2075 8.95137 72.7129 7.44604 74.5702 7.44604C76.4262 7.44604 77.9315 8.95137 77.9315 10.8074Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M91.0775 10.8193C91.0775 12.6753 89.5722 14.1807 87.7162 14.1807C85.8588 14.1807 84.3535 12.6753 84.3535 10.8193C84.3535 8.96333 85.8588 7.458 87.7162 7.458C89.5722 7.458 91.0775 8.96333 91.0775 10.8193Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M19.8218 8.54953L24.7324 13.1135"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <path
      d="M32.9741 8.71261L37.8955 13.2766"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <path
      d="M46.4995 8.36219L51.0595 13.2769"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <path
      d="M59.6626 8.26868L64.2226 13.1833"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <path
      d="M72.3848 8.26868L76.9488 13.1833"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <path
      d="M85.5303 8.28089L90.0943 13.1956"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <path
      d="M84.0684 34.3975C84.0684 36.2535 85.5737 37.7588 87.4297 37.7588C89.287 37.7588 90.7924 36.2535 90.7924 34.3975C90.7924 32.5415 89.287 31.0361 87.4297 31.0361C85.5737 31.0361 84.0684 32.5415 84.0684 34.3975Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M70.9053 34.5605C70.9053 36.4165 72.4106 37.9219 74.2666 37.9219C76.1239 37.9219 77.6293 36.4165 77.6293 34.5605C77.6293 32.7045 76.1239 31.1992 74.2666 31.1992C72.4106 31.1992 70.9053 32.7045 70.9053 34.5605Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M57.7422 34.5605C57.7422 36.4165 59.2475 37.9219 61.1035 37.9219C62.9609 37.9219 64.4662 36.4165 64.4662 34.5605C64.4662 32.7045 62.9609 31.1992 61.1035 31.1992C59.2475 31.1992 57.7422 32.7045 57.7422 34.5605Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M44.5791 34.4668C44.5791 36.3228 46.0844 37.8281 47.9404 37.8281C49.7978 37.8281 51.3031 36.3228 51.3031 34.4668C51.3031 32.6108 49.7978 31.1055 47.9404 31.1055C46.0844 31.1055 44.5791 32.6108 44.5791 34.4668Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M31.853 34.4668C31.853 36.3228 33.3584 37.8281 35.2144 37.8281C37.0717 37.8281 38.577 36.3228 38.577 34.4668C38.577 32.6108 37.0717 31.1055 35.2144 31.1055C33.3584 31.1055 31.853 32.6108 31.853 34.4668Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M18.7065 34.479C18.7065 36.335 20.2119 37.8403 22.0679 37.8403C23.9252 37.8403 25.4305 36.335 25.4305 34.479C25.4305 32.623 23.9252 31.1177 22.0679 31.1177C20.2119 31.1177 18.7065 32.623 18.7065 34.479Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M89.9629 32.2089L85.0522 36.7729"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <path
      d="M76.81 32.372L71.8887 36.936"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <path
      d="M63.2851 32.0219L58.7251 36.9365"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <path
      d="M50.122 31.9284L45.562 36.843"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <path
      d="M37.3999 31.9284L32.8359 36.843"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <path
      d="M24.2539 31.9403L19.6899 36.855"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <circle
      cx="107.5"
      cy="22.4004"
      r="2.75"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
    />
    <line
      x1="107.499"
      y1="20.9001"
      x2="107.499"
      y2="23.9001"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="108.899"
      y1="22.5"
      x2="105.899"
      y2="22.5"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="108.748"
      y1="23.6726"
      x2="106.273"
      y2="21.1977"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="106.327"
      y1="23.649"
      x2="108.802"
      y2="21.1741"
      stroke="black"
      strokeWidth="0.6"
    />
    <circle
      cx="3.30029"
      cy="22.7998"
      r="2.75"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
    />
    <line
      x1="3.3"
      y1="21.2996"
      x2="3.3"
      y2="24.2996"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="4.7002"
      y1="22.8994"
      x2="1.7002"
      y2="22.8994"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="4.5491"
      y1="24.072"
      x2="2.07422"
      y2="21.5971"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="2.12771"
      y1="24.0484"
      x2="4.60259"
      y2="21.5735"
      stroke="black"
      strokeWidth="0.6"
    />
    <defs>
      <linearGradient
        id="paint0_linear_76_6465"
        x1="55.4555"
        y1="0.678783"
        x2="55.4555"
        y2="44.6201"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F3F3F3" />
        <stop offset="1" stop-color="#EFEFEF" />
      </linearGradient>
    </defs>
  </g>
);

export const StaplePickup = () => (
  <g style={{ transform: "translate(-8px, 0)" }}>
    <path
      d="M120.275 51.7219H6.4028C3.68813 51.7219 1.4668 49.5006 1.4668 46.7859V6.27526C1.4668 3.56059 3.68813 1.33926 6.4028 1.33926H120.275C122.989 1.33926 125.211 3.56059 125.211 6.27526V46.7859C125.211 49.5006 122.989 51.7219 120.275 51.7219Z"
      fill="#231F20"
      stroke="#231F20"
      strokeMiterlimit="10"
    />
    <path
      d="M33.0398 32.5906H28.2744V20.1652H33.0398V32.5906Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.666667"
      strokeMiterlimit="10"
    />
    <path
      d="M46.2038 32.5906H41.4385V20.1652H46.2038V32.5906Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.666667"
      strokeMiterlimit="10"
    />
    <path
      d="M59.3669 32.5906H54.6016V20.1652H59.3669V32.5906Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.666667"
      strokeMiterlimit="10"
    />
    <path
      d="M72.5295 32.5906H67.7642V20.1652H72.5295V32.5906Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.666667"
      strokeMiterlimit="10"
    />
    <path
      d="M85.2815 32.5906H80.5161V20.1652H85.2815V32.5906Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.666667"
      strokeMiterlimit="10"
    />
    <path
      d="M98.4025 32.5906H93.6372V20.1652H98.4025V32.5906Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.666667"
      strokeMiterlimit="10"
    />
    <circle
      cx="50.4004"
      cy="26"
      r="2.75"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
    />
    <line
      x1="50.4001"
      y1="24.4998"
      x2="50.4001"
      y2="27.4998"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="51.8003"
      y1="26.0996"
      x2="48.8003"
      y2="26.0996"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="51.6492"
      y1="27.2722"
      x2="49.1743"
      y2="24.7973"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="49.2278"
      y1="27.2486"
      x2="51.7027"
      y2="24.7737"
      stroke="black"
      strokeWidth="0.6"
    />
    <circle
      cx="76.5996"
      cy="26.3994"
      r="2.75"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
    />
    <line
      x1="76.5993"
      y1="24.8992"
      x2="76.5993"
      y2="27.8992"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="77.9995"
      y1="26.499"
      x2="74.9995"
      y2="26.499"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="77.8484"
      y1="27.6716"
      x2="75.3735"
      y2="25.1967"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="75.427"
      y1="27.648"
      x2="77.9019"
      y2="25.1731"
      stroke="black"
      strokeWidth="0.6"
    />
  </g>
);

export const Strat = () => (
  <g style={{ translate: "-2px 0px" }}>
    <path
      d="M89.177 26.7803H22.2143C15.081 26.7803 9.29834 20.9976 9.29834 13.8643V13.4629C9.29834 6.32961 15.081 0.546943 22.2143 0.546943H89.177C96.3103 0.546943 102.093 6.32961 102.093 13.4629V13.8643C102.093 20.9976 96.3103 26.7803 89.177 26.7803Z"
      fill="#F7F7F7"
      stroke="black"
      strokeMiterlimit="10"
    />
    <path
      d="M27.631 13.9913C27.631 16.074 25.943 17.762 23.8604 17.762C21.7777 17.762 20.0884 16.074 20.0884 13.9913C20.0884 11.9086 21.7777 10.2206 23.8604 10.2206C25.943 10.2206 27.631 11.9086 27.631 13.9913Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M40.7941 13.9937C40.7941 16.0764 39.1061 17.7644 37.0235 17.7644C34.9408 17.7644 33.2515 16.0764 33.2515 13.9937C33.2515 11.9111 34.9408 10.2231 37.0235 10.2231C39.1061 10.2231 40.7941 11.9111 40.7941 13.9937Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M54.1232 13.9115C54.1232 15.9941 52.4352 17.6821 50.3526 17.6821C48.2699 17.6821 46.5806 15.9941 46.5806 13.9115C46.5806 11.8288 48.2699 10.1408 50.3526 10.1408C52.4352 10.1408 54.1232 11.8288 54.1232 13.9115Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M67.2863 14.149C67.2863 16.2317 65.5983 17.9197 63.5157 17.9197C61.433 17.9197 59.7437 16.2317 59.7437 14.149C59.7437 12.0663 61.433 10.3783 63.5157 10.3783C65.5983 10.3783 67.2863 12.0663 67.2863 14.149Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M79.8142 13.9925C79.8142 16.0752 78.1262 17.7632 76.0435 17.7632C73.9608 17.7632 72.2715 16.0752 72.2715 13.9925C72.2715 11.9099 73.9608 10.2219 76.0435 10.2219C78.1262 10.2219 79.8142 11.9099 79.8142 13.9925Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M92.9772 13.9947C92.9772 16.0774 91.2892 17.7654 89.2066 17.7654C87.1239 17.7654 85.4346 16.0774 85.4346 13.9947C85.4346 11.912 87.1239 10.224 89.2066 10.224C91.2892 10.224 92.9772 11.912 92.9772 13.9947Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <circle
      cx="3.59961"
      cy="13.5996"
      r="2.75"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
    />
    <line
      x1="3.59932"
      y1="12.0994"
      x2="3.59932"
      y2="15.0994"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="4.99951"
      y1="13.6992"
      x2="1.99951"
      y2="13.6992"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="4.84841"
      y1="14.8718"
      x2="2.37354"
      y2="12.3969"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="2.42703"
      y1="14.8482"
      x2="4.9019"
      y2="12.3733"
      stroke="black"
      strokeWidth="0.6"
    />
    <circle
      cx="107.6"
      cy="14.2002"
      r="2.75"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
    />
    <line
      x1="107.599"
      y1="12.7"
      x2="107.599"
      y2="15.7"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="109"
      y1="14.2998"
      x2="106"
      y2="14.2998"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="108.848"
      y1="15.4724"
      x2="106.374"
      y2="12.9975"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="106.427"
      y1="15.4488"
      x2="108.902"
      y2="12.9739"
      stroke="black"
      strokeWidth="0.6"
    />
  </g>
);

export const P90Humbucker = () => (
  <g style={{ translate: "7px 0px" }}>
    <path
      d="M91.655 52.1138H4.05231C2.53097 52.1138 1.28564 50.8684 1.28564 49.3484V3.53244C1.28564 2.0111 2.53097 0.76577 4.05231 0.76577H91.655C93.1763 0.76577 94.4203 2.0111 94.4203 3.53244V49.3484C94.4203 50.8684 93.1763 52.1138 91.655 52.1138Z"
      fill="url(#paint0_linear_76_6814)"
      stroke="black"
      strokeMiterlimit="10"
    />
    <path
      d="M17.6592 23.8488C19.0098 25.1221 19.0725 27.2501 17.7992 28.6008C16.5258 29.9514 14.3978 30.0141 13.0472 28.7408C11.6965 27.4674 11.6338 25.3394 12.9072 23.9888C14.1805 22.6381 16.3085 22.5754 17.6592 23.8488Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M12.0063 26.1437L18.713 26.1943Z"
      fill="url(#paint1_linear_76_6814)"
    />
    <path
      d="M12.0063 26.1437L18.713 26.1943"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <path
      d="M30.8223 23.7152C32.1729 24.9886 32.2356 27.1166 30.9623 28.4672C29.6889 29.8179 27.5609 29.8806 26.2103 28.6072C24.8596 27.3339 24.7969 25.2059 26.0703 23.8552C27.3436 22.5046 29.4716 22.4419 30.8223 23.7152Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M25.1699 26.0104L31.8766 26.061Z"
      fill="url(#paint2_linear_76_6814)"
    />
    <path
      d="M25.1699 26.0104L31.8766 26.061"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <path
      d="M57.1484 23.7152C58.4991 24.9886 58.5618 27.1166 57.2884 28.4672C56.0151 29.8179 53.8871 29.8806 52.5364 28.6072C51.1858 27.3339 51.1231 25.2059 52.3964 23.8552C53.6698 22.5046 55.7978 22.4419 57.1484 23.7152Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M51.4961 26.0104L58.2028 26.061Z"
      fill="url(#paint3_linear_76_6814)"
    />
    <path
      d="M51.4961 26.0104L58.2028 26.061"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <path
      d="M69.8994 23.6518C71.2501 24.9251 71.3127 27.0531 70.0394 28.4038C68.7661 29.7544 66.6381 29.8171 65.2874 28.5438C63.9367 27.2704 63.8741 25.1424 65.1474 23.7918C66.4207 22.4411 68.5487 22.3784 69.8994 23.6518Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M64.2466 25.9469L70.9532 25.9976Z"
      fill="url(#paint4_linear_76_6814)"
    />
    <path
      d="M64.2466 25.9469L70.9532 25.9976"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <path
      d="M43.9853 23.4989C45.336 24.7723 45.3987 26.9003 44.1253 28.2509C42.852 29.6016 40.724 29.6643 39.3733 28.3909C38.0227 27.1176 37.96 24.9896 39.2333 23.6389C40.5067 22.2883 42.6347 22.2256 43.9853 23.4989Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M38.333 25.7938L45.0397 25.8445Z"
      fill="url(#paint5_linear_76_6814)"
    />
    <path
      d="M38.333 25.7938L45.0397 25.8445"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <path
      d="M82.6597 23.7047C84.0103 24.9781 84.073 27.1061 82.7997 28.4567C81.5263 29.8074 79.3983 29.8701 78.0477 28.5967C76.697 27.3234 76.6343 25.1954 77.9077 23.8447C79.181 22.4941 81.309 22.4314 82.6597 23.7047Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M77.0073 25.9999L83.714 26.0505Z"
      fill="url(#paint6_linear_76_6814)"
    />
    <path
      d="M77.0073 25.9999L83.714 26.0505"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <circle
      cx="35.1006"
      cy="26.1006"
      r="2.25"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
    />
    <line
      x1="35.1501"
      y1="24.8503"
      x2="35.1501"
      y2="27.3503"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="36.2671"
      y1="26.2336"
      x2="33.7671"
      y2="26.2336"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="36.1057"
      y1="27.196"
      x2="34.0433"
      y2="25.1336"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="34.0877"
      y1="27.1057"
      x2="36.1501"
      y2="25.0433"
      stroke="black"
      strokeWidth="0.6"
    />
    <circle
      cx="61.1997"
      cy="26.1006"
      r="2.25"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
    />
    <line
      x1="61.2492"
      y1="24.8503"
      x2="61.2492"
      y2="27.3503"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="62.3662"
      y1="26.2336"
      x2="59.8662"
      y2="26.2336"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="62.2049"
      y1="27.196"
      x2="60.1425"
      y2="25.1336"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="60.1873"
      y1="27.1057"
      x2="62.2497"
      y2="25.0433"
      stroke="black"
      strokeWidth="0.6"
    />
    <defs>
      <linearGradient
        id="paint0_linear_76_6814"
        x1="47.853"
        y1="0.76577"
        x2="47.853"
        y2="52.1138"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F3F3F3" />
        <stop offset="1" stopColor="#EFEFEF" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_76_6814"
        x1="15.3597"
        y1="26.1437"
        x2="15.3597"
        y2="26.1943"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F3F3F3" />
        <stop offset="1" stopColor="#EFEFEF" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_76_6814"
        x1="28.5233"
        y1="26.0104"
        x2="28.5233"
        y2="26.061"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F3F3F3" />
        <stop offset="1" stopColor="#EFEFEF" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_76_6814"
        x1="54.8494"
        y1="26.0104"
        x2="54.8494"
        y2="26.061"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F3F3F3" />
        <stop offset="1" stopColor="#EFEFEF" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_76_6814"
        x1="67.5999"
        y1="25.9469"
        x2="67.5999"
        y2="25.9976"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F3F3F3" />
        <stop offset="1" stopColor="#EFEFEF" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_76_6814"
        x1="41.6863"
        y1="25.7938"
        x2="41.6863"
        y2="25.8445"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F3F3F3" />
        <stop offset="1" stopColor="#EFEFEF" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_76_6814"
        x1="80.3607"
        y1="25.9999"
        x2="80.3607"
        y2="26.0505"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F3F3F3" />
        <stop offset="1" stopColor="#EFEFEF" />
      </linearGradient>
    </defs>
  </g>
);

const GoldFoil = () => (
  <g style={{ transform: "translate(-2px, 0)" }}>
    <path
      d="M99.6701 52.4014H12.0674C10.5461 52.4014 9.30078 51.156 9.30078 49.636V3.82004C9.30078 2.2987 10.5461 1.05337 12.0674 1.05337H99.6701C101.191 1.05337 102.435 2.2987 102.435 3.82004V49.636C102.435 51.156 101.191 52.4014 99.6701 52.4014Z"
      fill="url(#paint0_linear_76_6836)"
      stroke="black"
      strokeMiterlimit="10"
    />
    <path
      d="M89.8896 44.2485H21.8576C18.5336 44.2485 15.8149 41.5285 15.8149 38.2045V15.7952C15.8149 12.4712 18.5336 9.75254 21.8576 9.75254H89.8896C93.2136 9.75254 95.9336 12.4712 95.9336 15.7952V38.2045C95.9336 41.5285 93.2136 44.2485 89.8896 44.2485Z"
      fill="#FFC70D"
      stroke="#231F20"
      strokeWidth="0.666667"
      strokeMiterlimit="10"
    />
    <path
      d="M15.6362 37.8524L20.2816 44.0671C20.5829 44.1404 20.8962 44.1764 21.2136 44.2004L15.6362 36.7378V37.8524Z"
      fill="black"
    />
    <path
      d="M15.6362 37.8524L20.2816 44.0671C20.5829 44.1404 20.8962 44.1764 21.2136 44.2004L15.6362 36.7378V37.8524Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M15.6362 30.963L25.5656 44.2483H26.3989L15.6362 29.8483V30.963Z"
      fill="black"
    />
    <path
      d="M15.6362 30.963L25.5656 44.2483H26.3989L15.6362 29.8483V30.963Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M15.6362 23.9928L30.7749 44.2488H31.6082L15.6362 22.8781V23.9928Z"
      fill="black"
    />
    <path
      d="M15.6362 23.9928L30.7749 44.2488H31.6082L15.6362 22.8781V23.9928Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M15.6362 17.1637L35.8789 44.249H36.7122L15.6362 16.049V17.1637Z"
      fill="black"
    />
    <path
      d="M15.6362 17.1637L35.8789 44.249H36.7122L15.6362 16.049V17.1637Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M17.0083 12.0154L41.099 44.2488H41.9323L17.451 11.4941C17.2883 11.6541 17.1523 11.8381 17.0083 12.0154Z"
      fill="black"
    />
    <path
      d="M17.0083 12.0154L41.099 44.2488H41.9323L17.451 11.4941C17.2883 11.6541 17.1523 11.8381 17.0083 12.0154Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M20.5527 9.86647L46.2487 44.2478H47.0821L21.3261 9.7878C21.0661 9.8038 20.8047 9.81847 20.5527 9.86647Z"
      fill="black"
    />
    <path
      d="M20.5527 9.86647L46.2487 44.2478H47.0821L21.3261 9.7878C21.0661 9.8038 20.8047 9.81847 20.5527 9.86647Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M25.687 9.75205L51.4697 44.248H52.3017L26.519 9.75205H25.687Z"
      fill="black"
    />
    <path
      d="M25.687 9.75205L51.4697 44.248H52.3017L26.519 9.75205H25.687Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M30.6719 9.75205L56.4545 44.248H57.2865L31.5039 9.75205H30.6719Z"
      fill="black"
    />
    <path
      d="M30.6719 9.75205L56.4545 44.248H57.2865L31.5039 9.75205H30.6719Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M35.8916 9.75205L61.6743 44.248H62.5063L36.7249 9.75205H35.8916Z"
      fill="black"
    />
    <path
      d="M35.8916 9.75205L61.6743 44.248H62.5063L36.7249 9.75205H35.8916Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M41.042 9.75205L66.8233 44.248H67.6567L41.874 9.75205H41.042Z"
      fill="black"
    />
    <path
      d="M41.042 9.75205L66.8233 44.248H67.6567L41.874 9.75205H41.042Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M46.3208 9.75205L72.1021 44.248H72.9355L47.1528 9.75205H46.3208Z"
      fill="black"
    />
    <path
      d="M46.3208 9.75205L72.1021 44.248H72.9355L47.1528 9.75205H46.3208Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M51.4253 9.75205L77.208 44.248H78.04L52.2573 9.75205H51.4253Z"
      fill="black"
    />
    <path
      d="M51.4253 9.75205L77.208 44.248H78.04L52.2573 9.75205H51.4253Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M57.478 9.75205H56.646L82.4273 44.248H83.2607L57.478 9.75205Z"
      fill="black"
    />
    <path
      d="M57.478 9.75205H56.646L82.4273 44.248H83.2607L57.478 9.75205Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M62.6274 9.75205H61.7954L87.5767 44.248H88.4101L62.6274 9.75205Z"
      fill="black"
    />
    <path
      d="M62.6274 9.75205H61.7954L87.5767 44.248H88.4101L62.6274 9.75205Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M91.0152 9.90345L65.3472 44.2488H66.1792L91.6898 10.1141C91.4685 10.0368 91.2472 9.95545 91.0152 9.90345Z"
      fill="black"
    />
    <path
      d="M91.0152 9.90345L65.3472 44.2488H66.1792L91.6898 10.1141C91.4685 10.0368 91.2472 9.95545 91.0152 9.90345Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M85.9083 9.75205L60.127 44.248H60.959L86.7403 9.75205H85.9083Z"
      fill="black"
    />
    <path
      d="M85.9083 9.75205L60.127 44.248H60.959L86.7403 9.75205H85.9083Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M80.7589 9.75205L54.9775 44.248H55.8095L81.5909 9.75205H80.7589Z"
      fill="black"
    />
    <path
      d="M80.7589 9.75205L54.9775 44.248H55.8095L81.5909 9.75205H80.7589Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M75.5502 9.75205L49.7676 44.248H50.6009L76.3822 9.75205H75.5502Z"
      fill="black"
    />
    <path
      d="M75.5502 9.75205L49.7676 44.248H50.6009L76.3822 9.75205H75.5502Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M70.4454 9.75205L44.6641 44.248H45.4961L71.2774 9.75205H70.4454Z"
      fill="black"
    />
    <path
      d="M70.4454 9.75205L44.6641 44.248H45.4961L71.2774 9.75205H70.4454Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M65.2252 9.75205L39.4438 44.248H40.2758L66.0572 9.75205H65.2252Z"
      fill="black"
    />
    <path
      d="M65.2252 9.75205L39.4438 44.248H40.2758L66.0572 9.75205H65.2252Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M60.0758 9.75205L34.2944 44.248H35.1264L60.9078 9.75205H60.0758Z"
      fill="black"
    />
    <path
      d="M60.0758 9.75205L34.2944 44.248H35.1264L60.9078 9.75205H60.0758Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M54.8559 9.75205L29.0732 44.248H29.9066L55.6879 9.75205H54.8559Z"
      fill="black"
    />
    <path
      d="M54.8559 9.75205L29.0732 44.248H29.9066L55.6879 9.75205H54.8559Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M49.8702 9.75205L24.0889 44.248H24.9209L50.7035 9.75205H49.8702Z"
      fill="black"
    />
    <path
      d="M49.8702 9.75205L24.0889 44.248H24.9209L50.7035 9.75205H49.8702Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M44.6502 9.75192L19.2568 43.7293C19.4688 43.8239 19.6955 43.8853 19.9208 43.9546L45.4822 9.75192H44.6502Z"
      fill="black"
    />
    <path
      d="M44.6502 9.75192L19.2568 43.7293C19.4688 43.8239 19.6955 43.8853 19.9208 43.9546L45.4822 9.75192H44.6502Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M39.501 9.75211L16.269 40.8374C16.377 41.0574 16.4864 41.2774 16.6197 41.4814L40.333 9.75211H39.501Z"
      fill="black"
    />
    <path
      d="M39.501 9.75211L16.269 40.8374C16.377 41.0574 16.4864 41.2774 16.6197 41.4814L40.333 9.75211H39.501Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M34.2221 9.75195L15.6367 34.62V35.7346L35.0541 9.75195H34.2221Z"
      fill="black"
    />
    <path
      d="M34.2221 9.75195L15.6367 34.62V35.7346L35.0541 9.75195H34.2221Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M29.1176 9.75205L15.6362 27.7894V28.9041L29.9496 9.75205H29.1176Z"
      fill="black"
    />
    <path
      d="M29.1176 9.75205L15.6362 27.7894V28.9041L29.9496 9.75205H29.1176Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M23.8976 9.75192L15.6362 20.8053V21.9199L24.7296 9.75192H23.8976Z"
      fill="black"
    />
    <path
      d="M23.8976 9.75192L15.6362 20.8053V21.9199L24.7296 9.75192H23.8976Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M17.4372 11.506L16.4572 12.818C16.0919 13.454 15.8386 14.1567 15.7266 14.9087L19.1492 10.3287C18.5132 10.626 17.9306 11.018 17.4372 11.506Z"
      fill="black"
    />
    <path
      d="M17.4372 11.506L16.4572 12.818C16.0919 13.454 15.8386 14.1567 15.7266 14.9087L19.1492 10.3287C18.5132 10.626 17.9306 11.018 17.4372 11.506Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M95.7548 17.4088L75.6948 44.2488H76.5282L95.7548 18.5234V17.4088Z"
      fill="black"
    />
    <path
      d="M95.7548 17.4088L75.6948 44.2488H76.5282L95.7548 18.5234V17.4088Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M94.4786 12.1317L70.4746 44.249H71.3079L94.8773 12.713C94.7546 12.5104 94.6226 12.3184 94.4786 12.1317Z"
      fill="black"
    />
    <path
      d="M94.4786 12.1317L70.4746 44.249H71.3079L94.8773 12.713C94.7546 12.5104 94.6226 12.3184 94.4786 12.1317Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M95.7548 31.252L86.0415 44.248H86.8735L95.7548 32.3667V31.252Z"
      fill="black"
    />
    <path
      d="M95.7548 31.252L86.0415 44.248H86.8735L95.7548 32.3667V31.252Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M95.7551 24.2674L80.8218 44.2488H81.6538L95.7551 25.3821V24.2674Z"
      fill="black"
    />
    <path
      d="M95.7551 24.2674L80.8218 44.2488H81.6538L95.7551 25.3821V24.2674Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M95.7551 38.2049V38.1155L91.3657 43.9875C91.7884 43.8662 92.1884 43.7009 92.5671 43.4942L95.6351 39.3902C95.7124 39.0062 95.7551 38.6102 95.7551 38.2049Z"
      fill="black"
    />
    <path
      d="M95.7551 38.2049V38.1155L91.3657 43.9875C91.7884 43.8662 92.1884 43.7009 92.5671 43.4942L95.6351 39.3902C95.7124 39.0062 95.7551 38.6102 95.7551 38.2049Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M67.9604 9.75208H67.1284L92.4098 43.5801C92.6111 43.4787 92.8138 43.3801 93.0018 43.2574L67.9604 9.75208Z"
      fill="black"
    />
    <path
      d="M67.9604 9.75208H67.1284L92.4098 43.5801C92.6111 43.4787 92.8138 43.3801 93.0018 43.2574L67.9604 9.75208Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M73.1806 9.75202H72.3486L95.3046 40.468C95.4073 40.216 95.4806 39.9494 95.55 39.6827L73.1806 9.75202Z"
      fill="black"
    />
    <path
      d="M73.1806 9.75202H72.3486L95.3046 40.468C95.4073 40.216 95.4806 39.9494 95.55 39.6827L73.1806 9.75202Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M78.4004 9.75201H77.5684L95.755 34.0867V32.972L78.4004 9.75201Z"
      fill="black"
    />
    <path
      d="M78.4004 9.75201H77.5684L95.755 34.0867V32.972L78.4004 9.75201Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M83.5501 9.75204H82.7168L95.7555 27.196V26.0814L83.5501 9.75204Z"
      fill="black"
    />
    <path
      d="M83.5501 9.75204H82.7168L95.7555 27.196V26.0814L83.5501 9.75204Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M88.7592 9.7519H87.9272L95.7552 20.2266V19.1119L88.7592 9.7519Z"
      fill="black"
    />
    <path
      d="M88.7592 9.7519H87.9272L95.7552 20.2266V19.1119L88.7592 9.7519Z"
      stroke="white"
      strokeWidth="0.1"
      strokeMiterlimit="10"
    />
    <path
      d="M89.8896 44.2485H21.8576C18.5336 44.2485 15.8149 41.5285 15.8149 38.2045V15.7952C15.8149 12.4712 18.5336 9.75254 21.8576 9.75254H89.8896C93.2136 9.75254 95.9336 12.4712 95.9336 15.7952V38.2045C95.9336 41.5285 93.2136 44.2485 89.8896 44.2485Z"
      stroke="#231F20"
      strokeWidth="0.666667"
      strokeMiterlimit="10"
    />
    <circle
      cx="3.69922"
      cy="26.8008"
      r="2.75"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
    />
    <line
      x1="3.69893"
      y1="25.3005"
      x2="3.69893"
      y2="28.3005"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="5.09912"
      y1="26.9003"
      x2="2.09912"
      y2="26.9003"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="4.94802"
      y1="28.073"
      x2="2.47315"
      y2="25.5981"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="2.52664"
      y1="28.0493"
      x2="5.00151"
      y2="25.5745"
      stroke="black"
      strokeWidth="0.6"
    />
    <circle
      cx="107.9"
      cy="27"
      r="2.75"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
    />
    <line
      x1="107.9"
      y1="25.4998"
      x2="107.9"
      y2="28.4998"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="109.3"
      y1="27.0996"
      x2="106.3"
      y2="27.0996"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="109.149"
      y1="28.2722"
      x2="106.674"
      y2="25.7973"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="106.727"
      y1="28.2486"
      x2="109.202"
      y2="25.7737"
      stroke="black"
      strokeWidth="0.6"
    />
    <circle
      cx="107.9"
      cy="27"
      r="2.75"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
    />
    <line
      x1="107.9"
      y1="25.4998"
      x2="107.9"
      y2="28.4998"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="109.3"
      y1="27.0996"
      x2="106.3"
      y2="27.0996"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="109.149"
      y1="28.2722"
      x2="106.674"
      y2="25.7973"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="106.727"
      y1="28.2486"
      x2="109.202"
      y2="25.7737"
      stroke="black"
      strokeWidth="0.6"
    />
    <defs>
      <linearGradient
        id="paint0_linear_76_6836"
        x1="55.8681"
        y1="1.05337"
        x2="55.8681"
        y2="52.4014"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F3F3F3" />
        <stop offset="1" stopColor="#EFEFEF" />
      </linearGradient>
    </defs>
  </g>
);

const MiniHum = () => (
  <g style={{ transform: "translate(-1px, 0)" }}>
    <path
      d="M100.067 46.9429H11.294C9.77267 46.9429 8.52734 45.6975 8.52734 44.1775V3.63754C8.52734 2.11621 9.77267 0.872205 11.294 0.872205H100.067C101.589 0.872205 102.833 2.11621 102.833 3.63754V44.1775C102.833 45.6975 101.589 46.9429 100.067 46.9429Z"
      fill="url(#paint0_linear_76_5355)"
      stroke="black"
      strokeMiterlimit="10"
    />
    <circle
      cx="3.6001"
      cy="24.3003"
      r="2.75"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
    />
    <line
      x1="3.5998"
      y1="22.8"
      x2="3.5998"
      y2="25.8"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="5"
      y1="24.3999"
      x2="2"
      y2="24.3999"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="4.8489"
      y1="25.5725"
      x2="2.37403"
      y2="23.0976"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="2.42752"
      y1="25.5489"
      x2="4.90239"
      y2="23.074"
      stroke="black"
      strokeWidth="0.6"
    />
    <circle
      cx="107.604"
      cy="24.3003"
      r="2.75"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
    />
    <line
      x1="107.604"
      y1="22.8"
      x2="107.604"
      y2="25.8"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="109.004"
      y1="24.3999"
      x2="106.004"
      y2="24.3999"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="108.853"
      y1="25.5725"
      x2="106.378"
      y2="23.0976"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="106.431"
      y1="25.5489"
      x2="108.906"
      y2="23.074"
      stroke="black"
      strokeWidth="0.6"
    />
    <defs>
      <linearGradient
        id="paint0_linear_76_5355"
        x1="55.68"
        y1="0.872204"
        x2="55.68"
        y2="46.9429"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F3F3F3" />
        <stop offset="1" stopColor="#EFEFEF" />
      </linearGradient>
    </defs>
  </g>
);

const P90 = () => (
  <g style={{ transform: "translate(-7.5px, 0)" }}>
    <path
      d="M120.115 51.7476H6.24264C3.52798 51.7476 1.30664 49.5262 1.30664 46.8116V6.3009C1.30664 3.58623 3.52798 1.3649 6.24264 1.3649H120.115C122.829 1.3649 125.051 3.58623 125.051 6.3009V46.8116C125.051 49.5262 122.829 51.7476 120.115 51.7476Z"
      fill="#231F20"
      stroke="#231F20"
      strokeMiterlimit="10"
    />
    <path
      d="M32.105 24.0924C33.4556 25.3658 33.5183 27.4938 32.245 28.8444C30.9716 30.1951 28.8436 30.2578 27.493 28.9844C26.1423 27.7111 26.0796 25.5831 27.353 24.2324C28.6263 22.8818 30.7543 22.8191 32.105 24.0924Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M26.4521 26.3876L33.1588 26.4382"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <path
      d="M45.2681 23.9589C46.6187 25.2322 46.6814 27.3602 45.4081 28.7109C44.1347 30.0616 42.0067 30.1242 40.6561 28.8509C39.3054 27.5776 39.2427 25.4496 40.5161 24.0989C41.7894 22.7482 43.9174 22.6856 45.2681 23.9589Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M39.6152 26.254L46.3219 26.3047"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <path
      d="M71.5942 23.9589C72.9449 25.2322 73.0076 27.3602 71.7342 28.7109C70.4609 30.0616 68.3329 30.1242 66.9822 28.8509C65.6316 27.5776 65.5689 25.4496 66.8422 24.0989C68.1156 22.7482 70.2436 22.6856 71.5942 23.9589Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M65.9419 26.254L72.6486 26.3047"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <path
      d="M84.3452 23.8954C85.6959 25.1687 85.7585 27.2967 84.4852 28.6474C83.2119 29.9981 81.0839 30.0607 79.7332 28.7874C78.3825 27.5141 78.3199 25.3861 79.5932 24.0354C80.8665 22.6847 82.9945 22.6221 84.3452 23.8954Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M78.6924 26.1905L85.399 26.2412"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <path
      d="M58.4311 23.7426C59.7818 25.0159 59.8445 27.1439 58.5711 28.4946C57.2978 29.8452 55.1698 29.9079 53.8191 28.6346C52.4685 27.3612 52.4058 25.2332 53.6791 23.8826C54.9525 22.5319 57.0805 22.4692 58.4311 23.7426Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M52.7783 26.0377L59.485 26.0884"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <path
      d="M97.1055 23.9484C98.4561 25.2217 98.5188 27.3497 97.2455 28.7004C95.9721 30.0511 93.8441 30.1137 92.4935 28.8404C91.1428 27.5671 91.0801 25.4391 92.3535 24.0884C93.6268 22.7377 95.7548 22.6751 97.1055 23.9484Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M91.4531 26.2435L98.1598 26.2942"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <circle
      cx="49.5"
      cy="26.1997"
      r="2.25"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
    />
    <line
      x1="49.5495"
      y1="24.9495"
      x2="49.5495"
      y2="27.4495"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="50.6665"
      y1="26.3327"
      x2="48.1665"
      y2="26.3327"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="50.5052"
      y1="27.2951"
      x2="48.4428"
      y2="25.2327"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="48.4871"
      y1="27.2049"
      x2="50.5495"
      y2="25.1425"
      stroke="black"
      strokeWidth="0.6"
    />
    <circle
      cx="75.6001"
      cy="26.5"
      r="2.25"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
    />
    <line
      x1="75.6496"
      y1="25.2498"
      x2="75.6496"
      y2="27.7498"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="76.7666"
      y1="26.633"
      x2="74.2666"
      y2="26.633"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="76.6053"
      y1="27.5954"
      x2="74.5429"
      y2="25.533"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="74.5877"
      y1="27.5052"
      x2="76.6501"
      y2="25.4428"
      stroke="black"
      strokeWidth="0.6"
    />
  </g>
);

const Humbucker = () => (
  <g style={{ transform: "translate(-1px, 0)" }}>
    <circle
      cx="3.7998"
      cy="26.4004"
      r="2.75"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
    />
    <line
      x1="3.79951"
      y1="24.9001"
      x2="3.79951"
      y2="27.9001"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="5.19971"
      y1="26.5"
      x2="2.19971"
      y2="26.5"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="5.04861"
      y1="27.6726"
      x2="2.57374"
      y2="25.1977"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="2.62722"
      y1="27.649"
      x2="5.1021"
      y2="25.1741"
      stroke="black"
      strokeWidth="0.6"
    />
    <circle
      cx="107.8"
      cy="26.3994"
      r="2.75"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
    />
    <line
      x1="107.8"
      y1="24.8992"
      x2="107.8"
      y2="27.8992"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="109.2"
      y1="26.499"
      x2="106.2"
      y2="26.499"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="109.049"
      y1="27.6716"
      x2="106.574"
      y2="25.1967"
      stroke="black"
      strokeWidth="0.6"
    />
    <line
      x1="106.627"
      y1="27.648"
      x2="109.102"
      y2="25.1731"
      stroke="black"
      strokeWidth="0.6"
    />
    <path
      d="M99.6369 51.9548H12.0342C10.5129 51.9548 9.26758 50.7095 9.26758 49.1895V3.3735C9.26758 1.85217 10.5129 0.606835 12.0342 0.606835H99.6369C101.158 0.606835 102.402 1.85217 102.402 3.3735V49.1895C102.402 50.7095 101.158 51.9548 99.6369 51.9548Z"
      fill="url(#paint0_linear_76_6894)"
      stroke="black"
      strokeMiterlimit="10"
    />
    <path
      d="M26.6888 16.4954C26.6888 18.3514 25.1835 19.8567 23.3275 19.8567C21.4702 19.8567 19.9648 18.3514 19.9648 16.4954C19.9648 14.6394 21.4702 13.134 23.3275 13.134C25.1835 13.134 26.6888 14.6394 26.6888 16.4954Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M39.8519 16.6584C39.8519 18.5144 38.3466 20.0198 36.4906 20.0198C34.6333 20.0198 33.1279 18.5144 33.1279 16.6584C33.1279 14.8024 34.6333 13.2971 36.4906 13.2971C38.3466 13.2971 39.8519 14.8024 39.8519 16.6584Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M53.015 16.6584C53.015 18.5144 51.5097 20.0198 49.6537 20.0198C47.7963 20.0198 46.291 18.5144 46.291 16.6584C46.291 14.8024 47.7963 13.2971 49.6537 13.2971C51.5097 13.2971 53.015 14.8024 53.015 16.6584Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M66.1781 16.5647C66.1781 18.4207 64.6728 19.926 62.8168 19.926C60.9594 19.926 59.4541 18.4207 59.4541 16.5647C59.4541 14.7087 60.9594 13.2034 62.8168 13.2034C64.6728 13.2034 66.1781 14.7087 66.1781 16.5647Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M78.9042 16.5647C78.9042 18.4207 77.3988 19.926 75.5428 19.926C73.6855 19.926 72.1802 18.4207 72.1802 16.5647C72.1802 14.7087 73.6855 13.2034 75.5428 13.2034C77.3988 13.2034 78.9042 14.7087 78.9042 16.5647Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M92.0507 16.5769C92.0507 18.4329 90.5453 19.9382 88.6893 19.9382C86.832 19.9382 85.3267 18.4329 85.3267 16.5769C85.3267 14.7209 86.832 13.2156 88.6893 13.2156C90.5453 13.2156 92.0507 14.7209 92.0507 16.5769Z"
      fill="#D0D0D0"
      stroke="black"
      strokeWidth="0.5"
      strokeMiterlimit="10"
    />
    <path
      d="M20.7944 14.3068L25.7051 18.8708"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <path
      d="M33.9473 14.4699L38.8686 19.0339"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <path
      d="M47.4722 14.1198L52.0322 19.0344"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <path
      d="M60.6353 14.0263L65.1953 18.9409"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <path
      d="M73.3574 14.0263L77.9214 18.9409"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <path
      d="M86.5029 14.0382L91.0669 18.9529"
      stroke="black"
      strokeWidth="0.4"
      strokeMiterlimit="10"
    />
    <defs>
      <linearGradient
        id="paint0_linear_76_6894"
        x1="55.8349"
        y1="0.606834"
        x2="55.8349"
        y2="51.9548"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F3F3F3" />
        <stop offset="1" stopColor="#EFEFEF" />
      </linearGradient>
    </defs>
  </g>
);

const HCover = () => {
  return (
    <g>
      <path
        d="M96.9175 51.5576H12.9281C10.4175 51.5576 8.36279 49.503 8.36279 46.9923V5.17228C8.36279 2.66161 10.4175 0.606947 12.9281 0.606947H96.9175C99.4281 0.606947 101.483 2.66161 101.483 5.17228V46.9923C101.483 49.503 99.4281 51.5576 96.9175 51.5576Z"
        fill="url(#paint0_linear_76_11547)"
        stroke="black"
        strokeMiterlimit="10"
      />
      <path
        d="M22.2948 19.6257C19.6275 19.6257 17.4448 17.443 17.4448 14.7744V14.2104C17.4448 11.543 19.6275 9.36035 22.2948 9.36035H88.4402C91.1075 9.36035 93.2915 11.543 93.2915 14.2104V14.7744C93.2915 17.4431 91.1075 19.6257 88.4402 19.6257H69.3402C66.9782 19.6257 65.0461 21.5575 65.0461 23.9195V28.7248C65.0461 31.0868 66.9781 33.0188 69.3401 33.0188L88.4938 33.0193C91.1327 33.0193 93.2905 35.2028 93.2905 37.8706V38.4346C93.2905 41.1011 91.1327 43.2846 88.4939 43.2846H22.2419C19.6017 43.2846 17.4438 41.1012 17.4438 38.4346V37.8706C17.4438 35.2028 19.6017 33.0193 22.2419 33.0193H40.3509C42.7129 33.0193 44.6449 31.087 44.6449 28.7251V23.9197C44.6449 21.5578 42.7128 19.6257 40.3508 19.6257H22.2948Z"
        fill="#231F20"
        stroke="black"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        d="M89.5577 16.6204H20.6737C19.5191 16.6204 18.5737 15.675 18.5737 14.5204V14.4644C18.5737 13.3097 19.5191 12.3657 20.6737 12.3657H89.5577C90.7124 12.3657 91.6577 13.3097 91.6577 14.4644V14.5204C91.6577 15.675 90.7124 16.6204 89.5577 16.6204Z"
        fill="#D0D0D0"
        stroke="black"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <path
        d="M89.5577 40.28H20.6737C19.5191 40.28 18.5737 39.3347 18.5737 38.18V38.124C18.5737 36.9694 19.5191 36.0254 20.6737 36.0254H89.5577C90.7124 36.0254 91.6577 36.9694 91.6577 38.124V38.18C91.6577 39.3347 90.7124 40.28 89.5577 40.28Z"
        fill="#D0D0D0"
        stroke="black"
        strokeWidth="0.5"
        strokeMiterlimit="10"
      />
      <circle
        cx="106.8"
        cy="26.4004"
        r="2.75"
        fill="#D0D0D0"
        stroke="black"
        strokeWidth="0.5"
      />
      <line
        x1="106.8"
        y1="24.9001"
        x2="106.8"
        y2="27.9001"
        stroke="black"
        strokeWidth="0.6"
      />
      <line
        x1="108.2"
        y1="26.5"
        x2="105.2"
        y2="26.5"
        stroke="black"
        strokeWidth="0.6"
      />
      <line
        x1="108.049"
        y1="27.6726"
        x2="105.574"
        y2="25.1977"
        stroke="black"
        strokeWidth="0.6"
      />
      <line
        x1="105.627"
        y1="27.649"
        x2="108.102"
        y2="25.1741"
        stroke="black"
        strokeWidth="0.6"
      />
      <circle
        cx="3"
        cy="26"
        r="2.75"
        fill="#D0D0D0"
        stroke="black"
        strokeWidth="0.5"
      />
      <line
        x1="2.99971"
        y1="24.4998"
        x2="2.99971"
        y2="27.4998"
        stroke="black"
        strokeWidth="0.6"
      />
      <line
        x1="4.3999"
        y1="26.0996"
        x2="1.3999"
        y2="26.0996"
        stroke="black"
        strokeWidth="0.6"
      />
      <line
        x1="4.24881"
        y1="27.2722"
        x2="1.77393"
        y2="24.7973"
        stroke="black"
        strokeWidth="0.6"
      />
      <line
        x1="1.82742"
        y1="27.2486"
        x2="4.30229"
        y2="24.7737"
        stroke="black"
        strokeWidth="0.6"
      />
      <defs>
        <linearGradient
          id="paint0_linear_76_11547"
          x1="54.9228"
          y1="0.606949"
          x2="54.9228"
          y2="51.5576"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3F3F3" />
          <stop offset="1" stopColor="#EFEFEF" />
        </linearGradient>
      </defs>
    </g>
  );
};

export default function Pickup({
  position,
  type,
  x,
  y,
}: {
  x;
  y;
  position: "A" | "B" | "C";
  type: PickupType;
}) {
  const content = useMemo(() => {
    switch (type) {
      case PickupType.SINGLEA:
        return <SingleAPickup />;
      case PickupType.DOUBLEA:
        return <DoubleAPickup />;
      case PickupType.WIDERANGEHUMBUCKER:
        return <WideRangePickup />;
      case PickupType.FILTERTRON:
        return <FiltertronPickup />;
      case PickupType.STAPLEP90:
        return <StaplePickup />;
      case PickupType.P90HUMBUCKER:
        return <P90Humbucker />;
      case PickupType.STRAT:
        return <Strat />;
      case PickupType.GOLDFOIL:
        return <GoldFoil />;
      case PickupType.MINIHUMBUCKER:
        return <MiniHum />;
      case PickupType.P90:
        return <P90 />;
      case PickupType.HUMBUCKER:
        return <Humbucker />;
      case PickupType.HCOVER:
        return <HCover />;
      default:
        return <DoubleAPickup />;
    }
  }, [type]);

  const yOff = useMemo(() => {
    if (position != "C") {
      return y;
    }
    switch (type) {
      case PickupType.SINGLEA:
      case PickupType.STRAT:
        return y + 26.6;
      case PickupType.WIDERANGEHUMBUCKER:
      case PickupType.STAPLEP90:
      case PickupType.P90HUMBUCKER:
      case PickupType.P90:
      case PickupType.HUMBUCKER:
        return y - 10;
      case PickupType.GOLDFOIL:
      case PickupType.MINIHUMBUCKER:
      case PickupType.HCOVER:
        return y - 6;
      default:
        return y;
    }
  }, [position, type]);
  return (
    <g style={{ translate: `${x}px ${yOff}px` }} id={`PICKUP ${position}`}>
      {content}
    </g>
  );
}
