import TeamSection from "@/components/sections/team-section";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div className="pt-16 md:pt-24">
          <TeamSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
