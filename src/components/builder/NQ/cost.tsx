import { usePricingContext } from "../components/Pricing";
import NumberFlow from "@number-flow/react";

export default function Cost() {
  const { total } = usePricingContext();
  if (!total) return null;
  return (
    <div className="absolute bottom-0 left-0 bg-white px-4 py-2 border border-neutral-300 border-b-white -mb-0.5">
      <NumberFlow
        value={total}
        format={{
          style: "currency",
          currency: "GBP",
          trailingZeroDisplay: "stripIfInteger",
        }}
      />
    </div>
  );
}
