import { usePricingContext } from "../components/Pricing";
import NumberFlow from "@number-flow/react";

export const formatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  trailingZeroDisplay: "stripIfInteger",
});

export default function Cost() {
  const { total } = usePricingContext();
  if (!total) return null;
  return (
    <NumberFlow
      value={total}
      format={{
        style: "currency",
        currency: "GBP",
        trailingZeroDisplay: "stripIfInteger",
      }}
    />
  );
}
