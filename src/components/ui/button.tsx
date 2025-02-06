import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline'
}

export function Button({ 
  className, 
  variant = 'default', 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-md font-medium transition-colors',
        variant === 'default' 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'border border-gray-300 hover:bg-gray-100',
        className
      )}
      {...props}
    />
  )
} 