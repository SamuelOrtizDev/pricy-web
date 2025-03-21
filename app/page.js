import Brands from "@/components/landing/brands/Main";
import { Hero } from "@/components/landing/hero/Main";
import { Pricy } from "@/components/landing/pricy/Main";
import { SaveMoney } from "@/components/landing/saveMoney/Main";
import { Steps } from "@/components/landing/steps/Main";

export default function Home() {
  return (
    <>
      <Hero/>
      <Brands/>
      <SaveMoney/>
      <Steps/>
      <Pricy/>
    </>
  );
}
