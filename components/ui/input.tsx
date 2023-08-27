import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-lg border border-[#E4E4E4] border-opacity-25 focus:border-solid focus:border-[#E4E4E4] focus:outline-none bg-[#181818] bg-opacity-25 px-3 py-2 text-xs md:text-base text-[#E4E4E4] placeholder:text-[#E4E4E4] placeholder:text-opacity-25 focus-visible:text-[#E4E4E4] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
