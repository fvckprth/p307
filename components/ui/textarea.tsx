import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-lg border border-[#E4E4E4] border-opacity-25 focus:border-solid focus:border-[#E4E4E4] focus:outline-none bg-[#181818] bg-opacity-25 px-3 py-3 text-xs md:text-base text-[#E4E4E4] placeholder:text-[#E4E4E4] placeholder:text-opacity-25 focus-visible:text-[#E4E4E4] disabled:cursor-not-allowed disabled:opacity-50 resize-none",     
        className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
