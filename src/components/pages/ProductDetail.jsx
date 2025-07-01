import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Star, ShoppingCart, Heart } from 'lucide-react'
import Button from '@/components/atoms/Button'
import Badge from '@/components/atoms/Badge'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  // Mock product data - in real app, this would come from API/state
  const product = {
    id: id || '1',
    name: 'Premium Metal Component',
    price: '$299.99',
    rating: 4.8,
    reviews: 124,
    images: [
      'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1581783342346-7b6b8c14e33f?w=500&h=500&fit=crop'
    ],
    description: 'High-quality precision-manufactured metal component designed for industrial applications. Features premium materials and expert craftsmanship.',
    specifications: {
      'Material': 'Stainless Steel 316L',
      'Dimensions': '100mm x 50mm x 25mm',
      'Weight': '2.5kg',
      'Tolerance': '±0.1mm',
      'Finish': 'Brushed',
      'Certification': 'ISO 9001'
    },
    inStock: true,
    category: 'Metal Components'
  }

  const handleAddToCart = () => {
    // Add to cart logic would go here
    console.log('Added to cart:', product.id)
  }

  const handleAddToWishlist = () => {
    // Add to wishlist logic would go here
    console.log('Added to wishlist:', product.id)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Products
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <div key={index} className="aspect-square bg-white rounded-lg overflow-hidden shadow-sm">
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{product.rating}</span>
                </div>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-4">
                {product.price}
              </div>
              {product.inStock ? (
                <Badge variant="success">In Stock</Badge>
              ) : (
                <Badge variant="error">Out of Stock</Badge>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Specifications</h3>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <dl className="grid grid-cols-1 gap-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b border-gray-100 pb-2">
                      <dt className="font-medium text-gray-900">{key}:</dt>
                      <dd className="text-gray-600">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                onClick={handleAddToWishlist}
                className="flex items-center justify-center gap-2 px-4"
              >
                <Heart size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail