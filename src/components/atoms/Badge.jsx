import React from 'react'

const Badge = ({ 
  children, 
  variant = 'default', 
  size = 'md',
  className = '' 
}) => {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-gradient-to-r from-primary to-blue-700 text-white',
    secondary: 'bg-gradient-to-r from-secondary to-blue-500 text-white',
    accent: 'bg-gradient-to-r from-accent to-orange-600 text-white',
    success: 'bg-gradient-to-r from-success to-green-600 text-white',
    warning: 'bg-gradient-to-r from-warning to-yellow-600 text-white',
    error: 'bg-gradient-to-r from-error to-red-600 text-white'
  }
  
  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  }
  
  const badgeClasses = `
    inline-flex items-center font-medium rounded-full
    ${variants[variant]} ${sizes[size]} ${className}
  `
  
  return (
    <span className={badgeClasses}>
      {children}
    </span>
  )
}

export default Badge