import React from 'react'
import { motion } from 'framer-motion'

const Loading = ({ type = 'default' }) => {
  if (type === 'products') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="card p-0 overflow-hidden animate-pulse">
            <div className="w-full h-48 bg-gray-200"></div>
            <div className="p-6 space-y-3">
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              <div className="flex gap-2 mt-4">
                <div className="h-6 bg-gray-200 rounded-full w-16"></div>
                <div className="h-6 bg-gray-200 rounded-full w-20"></div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="h-4 bg-gray-200 rounded w-24"></div>
                <div className="flex gap-2">
                  <div className="h-8 bg-gray-200 rounded w-20"></div>
                  <div className="h-8 bg-gray-200 rounded w-16"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
  
  if (type === 'capabilities') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="card p-6 text-center animate-pulse">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-3"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
              <div className="space-y-1">
                <div className="h-3 bg-gray-200 rounded w-4/5 mx-auto"></div>
                <div className="h-3 bg-gray-200 rounded w-3/4 mx-auto"></div>
                <div className="h-3 bg-gray-200 rounded w-4/5 mx-auto"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
  
  return (
    <div className="flex items-center justify-center py-12">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full mx-auto mb-4"
        />
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  )
}

export default Loading