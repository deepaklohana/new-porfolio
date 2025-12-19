import clsx from 'clsx'
import React from 'react'

const Container = ({className,children}) => {
  return (
    <div className={clsx(`max-w-6xl w-full mx-auto bg-white dark:bg-black  ${className}`)}>
      {children}
    </div>
  )
}

export default Container
