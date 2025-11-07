import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Props = {
  title: string
  description: string
  actionLabel: string
  actionStyle?: "primary" | "secondary"
}

export function VaultSection({ title, description, actionLabel, actionStyle = "secondary" }: Props) {
  const isPrimary = actionStyle === "primary"

  return (
    <div className="py-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold tracking-wide">{title}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
     
       
        {actionLabel=="Load"?(
        <a
        href="/Resume.pdf"   
      download
      >
          <Button
  className={cn(
    "px-5 py-4.5 flex items-center justify-center text-center cursor-pointer",
    isPrimary
      ? "bg-primary text-primary-foreground hover:bg-primary/70"
      : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
  )}
  size="sm"
>
  {actionLabel}
</Button>
          </a>


        ):(
<Button
  className={cn(
    "px-5 py-4.5 flex items-center justify-center text-center cursor-pointer",
    isPrimary
      ? "bg-primary text-primary-foreground hover:bg-primary/70"
      : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
  )}
  size="sm"
>
  {actionLabel}
</Button>
        )
}




     </div>
      <div className="mt-5 h-px w-full bg-border" />
    </div>
  )
}
