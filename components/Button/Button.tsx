import clsx from 'clsx'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

interface ButtonProps
  extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'>,
    PropsWithChildren {
  testId?: string
  size?: 'xs' | 'sm'
  className?: string
}

export const Button: FC<ButtonProps> = ({
  type = 'button',
  onClick,
  children,
  testId = 'button',
  size = 'xs',
  className
}) => {
  return (
    <button
      type={type}
      className={clsx(
        'hover:cursor-pointer p-2 rounded bg-blue-700 hover:bg-blue-800 text-white focus:ring-4 focus:outline-none focus:ring-blue-300',
        {
          'text-xs rounded': size === 'xs',
          'text-sm rounded-lg font-medium': size === 'sm'
        },
        className
      )}
      onClick={onClick}
      data-testid={testId}
    >
      {children}
    </button>
  )
}
