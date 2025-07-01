import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '@/components/atoms/Button'
import Badge from '@/components/atoms/Badge'
import ApperIcon from '@/components/ApperIcon'

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="card p-0 overflow-hidden hover-lift"
    >
      <div className="relative">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <Badge variant="primary" size="sm">
            {product.category}
          </Badge>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary mb-2">
          {product.name}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {product.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {product.materials.slice(0, 3).map((material, index) => (
            <Badge key={index} variant="default" size="sm">
              {material}
            </Badge>
          ))}
          {product.materials.length > 3 && (
            <Badge variant="default" size="sm">
              +{product.materials.length - 3} more
            </Badge>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <ApperIcon name="Settings" className="w-4 h-4 mr-1" />
            <span>{product.applications.length} applications</span>
          </div>
          
          <div className="flex gap-2">
            <Button
              as={Link}
              to={`/products/${product.Id}`}
              variant="outline"
              size="sm"
            >
              View Details
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon="MessageSquare"
            >
              Quote
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard