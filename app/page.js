import Image from "next/image";
import Hero from "./_components/Hero";
import ProductionSection from "./_components/productionSection";

export default function Home() {
  return (
    <div>
        <Hero/>
        <ProductionSection/>
    </div>
  );
}
