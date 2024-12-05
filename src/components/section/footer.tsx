import Link from "next/link"

import LayoutSection from "@/components/layout-section"
import { GITHUB_LINK } from "@/constant/external"

export default function Footer() {
  return (
    <LayoutSection className="justify-e flex-row items-center justify-end">
      <footer>
        <small className="text-stone-700">
          made with [*/] by{" "}
          <Link href={GITHUB_LINK} target="_blank">
            <span className="hover:underline">0xktee</span>
          </Link>
        </small>
      </footer>
    </LayoutSection>
  )
}
