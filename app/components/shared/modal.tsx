// app/components/modal.tsx
import { Portal } from './portal'
import { useNavigate } from '@remix-run/react'

interface props {
  children: React.ReactNode
  isOpen: boolean
  ariaLabel?: string
  className?: string
  onClick?: () => void
}

export const Modal: React.FC<props> = ({
  children,
  isOpen,
  ariaLabel,
  className,
  onClick
}) => {
  const navigate = useNavigate()
  if (!isOpen) return null

  return (
    <Portal wrapperId='modal'>
      <div
        className='dark:d-bg-opacity-80 fixed inset-0 overflow-y-auto '
        aria-labelledby={ariaLabel ?? 'modal-title'}
        role='dialog'
        aria-modal='true'
        onClick={onClick}
      ></div>
      <div className='pointer-events-none fixed inset-0 flex max-h-screen items-center justify-center overflow-scroll'>
        <div
          className={`${className} d-bg-opacity-80 pointer-events-auto relative h-full max-h-screen w-full max-w-2xl overflow-y-auto border-2 border-white p-4 md:h-auto md:rounded-xl`}
        >
          {/* This is where the modal content is rendered  */}
          {children}
        </div>
      </div>
    </Portal>
  )
}