import { createContext, useContext, useState } from "react";

export interface PricingContextType {
  setPrice: (key: string, value: number) => void;
  pricing: {
    [key: string]: number;
  };
  total: number;
}
const pricingContext = createContext<PricingContextType>({
  setPrice: (key: string, value: number) => {},
  pricing: {},
  total: 0,
});

export const PricingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [pricing, setPricing] = useState<{ [key: string]: number }>({});
  const setPrice = (key: string, value: number) => {
    setPricing((prevPricing) => ({
      ...prevPricing,
      [key]: value,
    }));
  };

  const total = Object.values(pricing).reduce((acc, value) => acc + value, 0);

  return (
    <pricingContext.Provider value={{ setPrice, pricing, total }}>
      {children}
    </pricingContext.Provider>
  );
};
export const usePricingContext = () => {
  const context = useContext(pricingContext);
  if (!context) {
    throw new Error("usePricingContext must be used within a PricingProvider");
  }
  return context;
};

interface PricingLabelProps {
  pricingKey: string;
  value: number;
}
export const PricingLabel = ({ pricingKey, value }: PricingLabelProps) => {
  const { pricing } = usePricingContext();
  const currentValue = pricing[pricingKey] || 0;
  const isMore = value > (currentValue || 0);
  const isLess = value < (currentValue || 0);
  const diff = Math.abs((currentValue || 0) - value);
  const sign = isMore ? "+" : isLess ? "-" : "";
  const price = Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(diff === 0 ? value : diff);
  return (
    <span
      className={`text-sm font-medium ${
        isMore ? "text-green-500" : isLess ? "text-red-500" : ""
      }`}
    >
      {sign}
      {price}
    </span>
  );
};
