import Grain from "@/components/journal/Grain";
import JournalHero from "@/components/journal/JournalHero";
 
import FeaturedStory from "@/components/journal/FeaturedStory";
import JournalGrid from "@/components/journal/JournalGrid";
import QuoteBreak from "@/components/journal/QuoteBreak";
import NewsletterSection from "@/components/journal/NewsLetterSection";
import Ticker from "@/components/journal/Ticker";

export default function JournalPage() {
  return (
    <main
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--background)" }}
    >
      <Grain />
      <JournalHero />
      <Ticker />
      <FeaturedStory />
      <JournalGrid />
      <QuoteBreak />
      <NewsletterSection />
    </main>
  );
}