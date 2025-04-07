import { useFormContext } from "react-hook-form";
import { AnimatedMountedTexture, AnimatedTexture } from "../../Textures";
import { PickguardTexture } from "../../Textures/guards";

export default function Stage() {
  const { watch } = useFormContext();
  const pickguard = watch("pickguard");

  return (
    <g transform="translate(304.31, 1149.06)">
      <mask
        id="mask0_63_2584"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="38"
        y="14"
        width="70"
        height="219"
      >
        <path
          d="M102.163 220.057L46.7205 232.184C42.1083 233.192 37.8144 229.502 38.1181 224.791L51.2494 21.0679C51.5469 16.4527 56.1069 13.3493 60.5094 14.7658L96.6107 26.3818C99.4602 27.2986 101.429 29.9041 101.532 32.8957L107.741 212.876C107.859 216.302 105.512 219.324 102.163 220.057Z"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_63_2584)">
        <AnimatedMountedTexture
          x="29"
          y="241"
          width="242"
          height="92"
          transform="rotate(-89 29 241)"
          fill="black"
          filter={pickguard}
          allFilters={Object.values(PickguardTexture)}
        />
        <path
          d="M44.974 223.638L45.6134 223.479L45.9337 222.84M44.974 223.638L44.9725 224.597M44.974 223.638L44.0152 223.637L44.0146 224.116L44.0136 224.596L44.9725 224.597M45.9337 222.84L45.9349 221.721L46.8938 221.722M45.9337 222.84L46.7327 222.841M46.7327 222.841L46.7339 221.722M46.7327 222.841L47.0517 223.48L47.6907 223.641M47.6907 223.641L48.6496 223.642L48.6483 224.601L47.6893 224.6M47.6907 223.641L47.6893 224.6M47.6893 224.6L47.0499 224.759L46.7296 225.398M45.9305 225.397L45.6116 224.757L44.9725 224.597M45.9305 225.397L45.9297 226.515L46.8886 226.516M45.9305 225.397L46.7296 225.398M46.7296 225.398L46.7284 226.516M50.407 224.123L50.2484 223.004L49.7702 221.885L48.972 221.085L48.0138 220.445L47.0553 220.124L45.7768 220.123L44.8176 220.442L43.858 221.08L43.0581 221.878L42.5775 222.996L42.4164 224.115L42.575 225.233L43.0533 226.353L43.8514 227.153L44.8096 227.793L45.7681 228.113L47.0466 228.115L48.0058 227.796L48.9654 227.158L49.7653 226.36L50.246 225.242L50.407 224.123Z"
          stroke="black"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#D9D9D9"
        />
        <path
          d="M98.0243 211.709L98.6637 211.55L98.984 210.911M98.0243 211.709L98.0228 212.668M98.0243 211.709L97.0655 211.708L97.0649 212.188L97.0639 212.667L98.0228 212.668M98.984 210.911L98.9852 209.793L99.9441 209.794M98.984 210.911L99.783 210.912M99.783 210.912L99.7842 209.794M99.783 210.912L100.102 211.552L100.741 211.712M100.741 211.712L101.7 211.713L101.699 212.672L100.74 212.671M100.741 211.712L100.74 212.671M100.74 212.671L100.1 212.83L99.7799 213.469M98.9808 213.468L98.6619 212.829L98.0228 212.668M98.9808 213.468L98.98 214.587L99.9389 214.588M98.9808 213.468L99.7799 213.469M99.7799 213.469L99.7786 214.588M103.457 212.195L103.299 211.076L102.82 209.957L102.022 209.157L101.064 208.517L100.106 208.196L98.8271 208.194L97.8679 208.513L96.9083 209.151L96.1084 209.949L95.6277 211.068L95.4667 212.186L95.6253 213.305L96.1035 214.424L96.9017 215.224L97.8599 215.864L98.8184 216.185L100.097 216.186L101.056 215.868L102.016 215.23L102.816 214.431L103.296 213.313L103.457 212.195Z"
          stroke="black"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#D9D9D9"
        />
        <path
          d="M91.8246 33.5128L92.464 33.3537L92.7843 32.7148M91.8246 33.5128L91.8231 34.4716M91.8246 33.5128L90.8657 33.5117L90.8652 33.9912L90.8642 34.4705L91.8231 34.4716M92.7843 32.7148L92.7855 31.5961L93.7443 31.597M92.7843 32.7148L93.5833 32.7157M93.5833 32.7157L93.5845 31.597M93.5833 32.7157L93.9023 33.3552L94.5413 33.5158M94.5413 33.5158L95.5002 33.5168L95.4989 34.4756L94.5399 34.4745M94.5413 33.5158L94.5399 34.4745M94.5399 34.4745L93.9005 34.6336L93.5801 35.2725M92.7811 35.2717L92.4622 34.6321L91.8231 34.4716M92.7811 35.2717L92.7803 36.3903L93.7392 36.3914M92.7811 35.2717L93.5801 35.2725M93.5801 35.2725L93.5789 36.3912M97.2576 33.9981L97.099 32.8793L96.6208 31.7601L95.8226 30.9601L94.8644 30.3199L93.9059 29.9992L92.6274 29.9978L91.6682 30.3164L90.7086 30.9546L89.9087 31.7528L89.428 32.871L89.267 33.9895L89.4256 35.1083L89.9038 36.2275L90.702 37.0274L91.6602 37.6677L92.6187 37.9884L93.8972 37.9898L94.8564 37.6712L95.816 37.033L96.6159 36.2348L97.0966 35.1166L97.2576 33.9981Z"
          stroke="black"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#D9D9D9"
        />
        <path
          d="M57.8763 22.7897L58.5157 22.6305L58.8361 21.9916M57.8763 22.7897L57.8748 23.7484M57.8763 22.7897L56.9175 22.7886L56.917 23.268L56.916 23.7474L57.8748 23.7484M58.8361 21.9916L58.8373 20.873L59.7961 20.8738M58.8361 21.9916L59.6351 21.9925M59.6351 21.9925L59.6363 20.8738M59.6351 21.9925L59.954 22.6321L60.5931 22.7926M60.5931 22.7926L61.552 22.7936L61.5506 23.7525L60.5916 23.7514M60.5931 22.7926L60.5916 23.7514M60.5916 23.7514L59.9522 23.9105L59.6319 24.5494M58.8328 24.5485L58.5139 23.9089L57.8748 23.7484M58.8328 24.5485L58.8321 25.6672L59.7909 25.6682M58.8328 24.5485L59.6319 24.5494M59.6319 24.5494L59.6307 25.6681M63.3093 23.275L63.1507 22.1561L62.6725 21.0369L61.8743 20.237L60.9161 19.5967L59.9576 19.276L58.6791 19.2747L57.7199 19.5933L56.7604 20.2315L55.9604 21.0297L55.4798 22.1478L55.3188 23.2663L55.4774 24.3852L55.9556 25.5044L56.7538 26.3043L57.712 26.9446L58.6705 27.2652L59.949 27.2666L60.9082 26.948L61.8678 26.3098L62.6677 25.5116L63.1483 24.3935L63.3093 23.275Z"
          stroke="black"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="#D9D9D9"
        />
        <path
          d="M65.2465 48.2107L76.9409 64.5183"
          stroke="black"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M65.2467 48.2107L64.5672 48.7192L63.8877 49.2277"
          stroke="black"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M75.582 65.5353L63.8877 49.2277"
          stroke="black"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M75.5821 65.5355L75.9212 65.8753L76.4304 65.8759L76.7701 65.7065L77.1099 65.3674L77.1105 64.8582L76.9411 64.5185"
          stroke="black"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M76.2846 43.6396L73.3989 43.8062L70.5126 44.4821L67.7958 45.3278L65.2483 46.683L62.7004 48.3776L60.6613 50.4123L58.7918 52.6169L57.2614 55.1613L56.0703 57.8759L55.3884 60.5909L54.876 63.476L54.8727 66.5313L55.3788 69.4174L56.0548 72.1339L57.2401 74.8511L58.765 77.3988L60.6297 79.6074L62.6644 81.6465L65.2086 83.3466L67.7532 84.7073L70.4681 85.5589L73.353 86.241L76.2384 86.4139L79.1241 86.2473L82.0104 85.5714L84.7272 84.7257L87.2747 83.3705L89.8226 81.6759L91.8617 79.6412L93.7312 77.4366L95.2616 74.8922L96.4527 72.1776L97.1346 69.4625L97.647 66.5775L97.6503 63.5222L97.1442 60.6361L96.4682 57.9196L95.2829 55.2024L93.758 52.6547L91.8933 50.4461L89.8586 48.407L87.3144 46.7069L84.7697 45.3462L82.0548 44.4946L79.17 43.8125L76.2846 43.6396Z"
          fill="#D9D9D9"
          stroke="black"
          strokeWidth="1.33333"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M63.8881 49.228L61.849 51.2626L59.9797 53.2975L58.4493 55.8419L57.4281 58.3869L56.5765 61.1018L56.2341 63.8173L56.2309 66.7028L56.7372 69.4192L57.583 72.136L58.7684 74.6833L60.2935 77.0613L62.1582 79.27L64.1931 81.1393L66.5679 82.4998L69.1127 83.6907L71.8276 84.5423L74.7127 85.0547L77.4285 85.0576L80.3144 84.7213L83.0312 83.8755L85.5785 82.6901L87.9564 81.3347L90.165 79.47L92.0343 77.4352L93.5645 75.0605L94.9252 72.5158L95.7768 69.8009L96.1193 67.0855L96.2921 64.2001L95.9556 61.4839L95.2796 58.7673L94.2641 56.0504L92.739 53.6724L91.044 51.464L89.0091 49.5946L86.6346 47.8947L84.09 46.534L81.5448 45.6826L78.6598 45.1702L75.9442 44.9975L73.0582 45.3339L70.3419 45.8402L67.7947 46.8559L65.2471 48.211"
          stroke="black"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M63.8876 49.228L75.5819 65.5357L75.921 65.8753L76.4302 65.8759L76.7699 65.7065L77.1097 65.3674L77.1103 64.8582L76.9407 64.5187L65.2463 48.2107L63.8876 49.228Z"
          fill="white"
          stroke="black"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M64.1191 167.069L75.8135 183.377"
          stroke="black"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M64.1193 167.069L63.4398 167.578L62.7603 168.086"
          stroke="black"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M74.4546 184.394L62.7602 168.086"
          stroke="black"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M74.4546 184.394L74.7938 184.734L75.303 184.734L75.6426 184.565L75.9825 184.226L75.983 183.717L75.8137 183.377"
          stroke="black"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M75.1572 162.498L72.2714 162.665L69.3851 163.341L66.6684 164.186L64.1208 165.542L61.5729 167.236L59.5338 169.271L57.6643 171.476L56.1339 174.02L54.9428 176.734L54.2609 179.45L53.7486 182.335L53.7453 185.39L54.2514 188.276L54.9274 190.993L56.1126 193.71L57.6375 196.257L59.5023 198.466L61.5369 200.505L64.0812 202.205L66.6258 203.566L69.3407 204.418L72.2255 205.1L75.1109 205.273L77.9967 205.106L80.883 204.43L83.5997 203.584L86.1473 202.229L88.6952 200.535L90.7343 198.5L92.6038 196.295L94.1342 193.751L95.3253 191.036L96.0072 188.321L96.5195 185.436L96.5228 182.381L96.0167 179.495L95.3407 176.778L94.1555 174.061L92.6306 171.513L90.7658 169.305L88.7312 167.266L86.1869 165.565L83.6423 164.205L80.9274 163.353L78.0426 162.671L75.1572 162.498Z"
          fill="#D9D9D9"
          stroke="black"
          strokeWidth="1.33333"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M62.7607 168.087L60.7216 170.121L58.8523 172.156L57.3218 174.701L56.3007 177.246L55.449 179.961L55.1066 182.676L55.1035 185.562L55.6098 188.278L56.4555 190.995L57.6409 193.542L59.166 195.92L61.0308 198.129L63.0656 199.998L65.4405 201.359L67.9853 202.549L70.7002 203.401L73.5852 203.913L76.301 203.916L79.187 203.58L81.9037 202.734L84.4511 201.549L86.8289 200.194L89.0375 198.329L90.9069 196.294L92.4371 193.919L93.7978 191.375L94.6494 188.66L94.9918 185.944L95.1647 183.059L94.8281 180.343L94.1521 177.626L93.1366 174.909L91.6115 172.531L89.9165 170.323L87.8817 168.453L85.5072 166.753L82.9626 165.393L80.4174 164.541L77.5324 164.029L74.8167 163.856L71.9308 164.193L69.2144 164.699L66.6672 165.715L64.1197 167.07"
          stroke="black"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M62.7601 168.087L74.4545 184.394L74.7935 184.734L75.3028 184.735L75.6424 184.565L75.9823 184.226L75.9828 183.717L75.8133 183.377L64.1189 167.069L62.7601 168.087Z"
          fill="white"
          stroke="black"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M66.3918 123.122L66.2479 124.891L66.4481 126.557L67.1507 128.146L68.039 129.605L69.2989 130.802L70.5863 131.841L72.2727 132.46L73.8558 132.734L75.6521 132.72L77.3725 132.203L78.8038 131.473L80.1317 130.399L81.3288 129.139L82.0784 127.638L82.5389 125.925L82.6828 124.156L82.4826 122.49L81.78 120.901L80.8916 119.442L79.79 118.272L78.3443 117.206L76.6579 116.587L75.0748 116.313L73.2785 116.327L71.7164 116.871L70.1269 117.574L68.799 118.648L67.6019 119.908L66.8522 121.409L66.3918 123.122Z"
          fill="#D9D9D9"
          stroke="black"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M73.354 116.83L80.5196 119.704L81.6305 127.398L75.445 132.032L68.2793 129.158L67.3267 121.491L73.354 116.83Z"
          fill="#D9D9D9"
          stroke="black"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M70.3493 123.81L70.3153 124.945L70.5979 126.136L71.2246 127.223L72.0645 128.021L73.1177 128.53L74.3842 128.75L75.5473 128.626L76.607 128.157L77.5633 127.345L78.2305 126.319L78.5811 125.238L78.6151 124.103L78.3325 122.912L77.7058 121.825L76.8659 121.027L75.8127 120.518L74.5463 120.298L73.3832 120.422L72.3235 120.891L71.3671 121.703L70.6999 122.729L70.3493 123.81Z"
          fill="#D9D9D9"
          stroke="black"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <path
        d="M102.163 220.057L46.7205 232.184C42.1083 233.192 37.8144 229.502 38.1181 224.791L51.2494 21.0679C51.5469 16.4527 56.1069 13.3493 60.5094 14.7658L96.6107 26.3818C99.4602 27.2986 101.429 29.9041 101.532 32.8957L107.741 212.876C107.859 216.302 105.512 219.324 102.163 220.057Z"
        stroke="black"
      />
    </g>
  );
}
