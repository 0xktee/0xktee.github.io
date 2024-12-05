import { cn } from "@/lib/utils"

export default function LayoutSection({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "px-responsive flex w-full flex-col items-start space-y-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
