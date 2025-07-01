import React from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const CapabilityCard = ({ capability }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card p-6 text-center hover-lift"
    >
      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-accent to-orange-600 rounded-full flex items-center justify-center">
        <ApperIcon name={capability.icon} className="w-8 h-8 text-white" />
      </div>
      
      <h3 className="text-xl font-semibold text-primary mb-3">
        {capability.title}
      </h3>
      
      <p className="text-gray-600 mb-4">
        {capability.description}
      </p>
      
      <div className="space-y-2">
        <div className="text-sm font-medium text-secondary">
          Capacity: {capability.capacity}
        </div>
        
        <div className="text-sm text-gray-500">
          <div className="font-medium mb-1">Equipment:</div>
          <ul className="space-y-1">
            {capability.equipment.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default CapabilityCard