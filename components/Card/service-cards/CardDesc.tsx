import React from 'react'

export default function CardDesc({ children }: { children: React.ReactNode }) {
  return (
    <p className='text-justify text-sm text-gray-800 dark:text-gray-300 mt-3'>
      {children}
    </p>
  )
}
