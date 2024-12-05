import LayoutSection from "@/components/layout-section"
import { Separator } from "@/components/ui/separator"

export default function SeparatorWrapped() {
  return (
    <LayoutSection>
      <Separator className="h-[2px] bg-stone-700 dark:bg-stone-300" />
    </LayoutSection>
  )
}
