
"use client";
import Hero from "../components/Hero";
import Products from "../components/Products";
import QualityHero from "../components/QualityHero";
import QualityCommitment from "../components/QualityCommitment";
import Inspection from "../components/Inspection";
import Documentation from "../components/Documentation";
import Capabilities from "../components/Capabilities";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Products />
      <QualityHero />
      <QualityCommitment />
      <Inspection />
      <Documentation />
      <Capabilities />
      <CTA />
    </main>
  );
}
