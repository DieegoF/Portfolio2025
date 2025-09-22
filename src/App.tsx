import { PortfolioHeader } from "./components/PortfolioHeader";
import { PortfolioHero } from "./components/PortfolioHero";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { PortfolioFooter } from "./components/PortfolioFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <PortfolioHeader />
      <main>
        <PortfolioHero />
        <AboutMe />
       <Contact />
      </main>
      <PortfolioFooter />
    </div>
  );
}