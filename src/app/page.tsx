import Navbar from "@/components/section/navbar"
import Introduce from "@/components/section/introduce"
import Experience from "@/components/section/experience"
import Skill from "@/components/section/skill"
import Certification from "@/components/section/certification"
import Education from "@/components/section/education"

import SeparatorWrapped from "@/components/separator-wrapped"
import Footer from "@/components/section/footer"

export default function Home() {
  return (
    <main className="flex flex-col space-y-4 pb-4 pt-6">
      <Navbar />

      <Introduce />
      <SeparatorWrapped />

      <Skill />
      <SeparatorWrapped />

      <Experience />
      <SeparatorWrapped />

      <Certification />
      <SeparatorWrapped />

      <Education />

      <Footer />
    </main>
  )
}
