import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import LayoutSection from "@/components/layout-section"
import { Button } from "@/components/ui/button"

import { GITHUB_LINK, LINKEDIN_LINK } from "@/constant/external"
import ThemeToggle from "@/components/theme-toggle"

export default function Navbar() {
  return (
    <LayoutSection className="flex-row items-center justify-between">
      <h1 className="text-3xl">0xktee</h1>

      <div className="flex gap-x-2">
        <Link href={GITHUB_LINK} target="_blank">
          <Button variant="link" className="w-fit">
            Github
            <ArrowUpRight />
          </Button>
        </Link>

        <Link href={LINKEDIN_LINK} target="_blank">
          <Button variant="link" className="w-fit">
            LinkedIn
            <ArrowUpRight />
          </Button>
        </Link>

        <ThemeToggle />
      </div>
    </LayoutSection>
  )
}
