"use client"

import Link from "next/link"
import { ArrowUpRight, Menu } from "lucide-react"

import LayoutSection from "@/components/layout-section"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"

import { GITHUB_LINK, LINKEDIN_LINK } from "@/constant/external"
import ThemeToggle from "@/components/theme-toggle"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <LayoutSection className="flex-row items-center justify-between">
      <h1 className="text-3xl">0xktee</h1>

      {/* Desktop */}
      <div className="hidden gap-x-2 sm:flex">
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

      {/* Mobile */}
      <div className="flex gap-x-2 sm:hidden">
        <ThemeToggle />

        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="space-y-4 px-4 pb-4">
            <Link href={GITHUB_LINK} target="_blank">
              <Button variant="outline" className="w-full">
                Github
                <ArrowUpRight />
              </Button>
            </Link>

            <Link href={LINKEDIN_LINK} target="_blank">
              <Button variant="outline" className="w-full">
                LinkedIn
                <ArrowUpRight />
              </Button>
            </Link>
          </DrawerContent>
        </Drawer>
      </div>
    </LayoutSection>
  )
}
