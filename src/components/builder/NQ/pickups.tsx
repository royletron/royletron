export enum PickupType {
  "SINGLE" = "single",
  "DOUBLE" = "double",
}

const DoubleAPickup = () => (
  <g>
    <path
      d="M11.7005 54.9023C9.38089 54.9023 7.50049 53.0219 7.50049 50.7023L7.50049 5.60235C7.50049 3.28276 9.38089 1.40235 11.7005 1.40235L97.6005 1.40235C99.9201 1.40235 101.8 3.28275 101.8 5.60235L101.8 50.7023C101.8 53.0219 99.9201 54.9023 97.6005 54.9023L11.7005 54.9023Z"
      stroke="black"
    />
    <rect
      x="7.50098"
      y="54.9033"
      width="26.75"
      height="94.3"
      rx="12.7"
      transform="rotate(-90 7.50098 54.9033)"
      fill="#D9D9D9"
      stroke="black"
    />
    <rect
      x="16.8003"
      y="42.9019"
      width="3"
      height="75"
      transform="rotate(-90 16.8003 42.9019)"
      fill="#D9D9D9"
      stroke="black"
    />
    <rect
      x="7.50049"
      y="28.1064"
      width="26.75"
      height="94.3"
      rx="12.7"
      transform="rotate(-90 7.50049 28.1064)"
      fill="#D9D9D9"
      stroke="black"
    />
    <rect
      x="16.8003"
      y="16.105"
      width="3"
      height="75"
      transform="rotate(-90 16.8003 16.105)"
      fill="#D9D9D9"
      stroke="black"
    />
    <circle
      cx="2.8501"
      cy="29.25"
      r="2.65"
      transform="rotate(-90 2.8501 29.25)"
      stroke="black"
      stroke-width="0.2"
    />
    <line
      x1="0.900391"
      y1="29.1995"
      x2="4.90039"
      y2="29.1995"
      stroke="black"
      stroke-width="0.6"
    />
    <line
      x1="2.90059"
      y1="27.0991"
      x2="2.90059"
      y2="31.0991"
      stroke="black"
      stroke-width="0.6"
    />
    <line
      x1="1.45676"
      y1="27.7145"
      x2="4.28519"
      y2="30.5429"
      stroke="black"
      stroke-width="0.6"
    />
    <line
      x1="4.28537"
      y1="27.8556"
      x2="1.45695"
      y2="30.684"
      stroke="black"
      stroke-width="0.6"
    />
    <circle
      cx="106.45"
      cy="28.5502"
      r="2.65"
      transform="rotate(-90 106.45 28.5502)"
      stroke="black"
      stroke-width="0.2"
    />
    <line
      x1="104.5"
      y1="28.4997"
      x2="108.5"
      y2="28.4997"
      stroke="black"
      stroke-width="0.6"
    />
    <line
      x1="106.501"
      y1="26.3993"
      x2="106.501"
      y2="30.3993"
      stroke="black"
      stroke-width="0.6"
    />
    <line
      x1="105.057"
      y1="27.0147"
      x2="107.885"
      y2="29.8431"
      stroke="black"
      stroke-width="0.6"
    />
    <line
      x1="107.885"
      y1="27.1557"
      x2="105.057"
      y2="29.9842"
      stroke="black"
      stroke-width="0.6"
    />
  </g>
);

const SingleAPickup = () => (
  <g>
    <rect
      x="7.50098"
      y="27.7084"
      width="26.75"
      height="94.3"
      rx="12.7"
      transform="rotate(-90 7.50098 27.7084)"
      fill="#D9D9D9"
      stroke="black"
    />
    <rect
      x="16.8008"
      y="15.7069"
      width="3"
      height="75"
      transform="rotate(-90 16.8008 15.7069)"
      fill="#D9D9D9"
      stroke="black"
    />
    <circle
      cx="2.8501"
      cy="14.2515"
      r="2.65"
      transform="rotate(-90 2.8501 14.2515)"
      stroke="black"
      stroke-width="0.2"
    />
    <line
      x1="0.900391"
      y1="14.201"
      x2="4.90039"
      y2="14.201"
      stroke="black"
      stroke-width="0.6"
    />
    <line
      x1="2.90059"
      y1="12.1006"
      x2="2.90059"
      y2="16.1006"
      stroke="black"
      stroke-width="0.6"
    />
    <line
      x1="1.45676"
      y1="12.716"
      x2="4.28519"
      y2="15.5444"
      stroke="black"
      stroke-width="0.6"
    />
    <line
      x1="4.28537"
      y1="12.857"
      x2="1.45695"
      y2="15.6855"
      stroke="black"
      stroke-width="0.6"
    />
    <circle
      cx="106.45"
      cy="14.2515"
      r="2.65"
      transform="rotate(-90 106.45 14.2515)"
      stroke="black"
      stroke-width="0.2"
    />
    <line
      x1="104.5"
      y1="14.201"
      x2="108.5"
      y2="14.201"
      stroke="black"
      stroke-width="0.6"
    />
    <line
      x1="106.501"
      y1="12.1006"
      x2="106.501"
      y2="16.1006"
      stroke="black"
      stroke-width="0.6"
    />
    <line
      x1="105.057"
      y1="12.716"
      x2="107.885"
      y2="15.5444"
      stroke="black"
      stroke-width="0.6"
    />
    <line
      x1="107.885"
      y1="12.857"
      x2="105.057"
      y2="15.6855"
      stroke="black"
      stroke-width="0.6"
    />
  </g>
);

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
  const content =
    type === PickupType.DOUBLE ? <DoubleAPickup /> : <SingleAPickup />;

  if (position === "C" && type === PickupType.SINGLE) {
    y += 26.6;
  }
  return (
    <g style={{ translate: `${x}px ${y}px` }} id={`PICKUP ${position}`}>
      {content}
    </g>
  );
}
