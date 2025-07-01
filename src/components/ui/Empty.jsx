import React from 'react'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const Empty = ({ 
  title = "No items found",
  message = "There are no items to display at the moment.",
  icon = "Package",
  actionLabel,
  onAction
}) => {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center">
          <ApperIcon name={icon} className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-6">
          {message}
        </p>
        
        {actionLabel && onAction && (
          <Button
            onClick={onAction}
            variant="primary"
            icon="Plus"
          >
            {actionLabel}
          </Button>
        )}
      </div>
    </div>
  )
}

export default Empty