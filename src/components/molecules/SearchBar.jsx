import React, { useState } from 'react'
import Input from '@/components/atoms/Input'
import Button from '@/components/atoms/Button'

const SearchBar = ({ 
  placeholder = "Search products...", 
  onSearch, 
  className = '' 
}) => {
  const [searchTerm, setSearchTerm] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(searchTerm)
  }
  
  const handleChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    // Real-time search
    if (onSearch) {
      onSearch(value)
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
      <div className="flex-1">
        <Input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleChange}
          icon="Search"
          className="rounded-r-none"
        />
      </div>
      <Button 
        type="submit" 
        variant="primary"
        className="rounded-l-none"
      >
        Search
      </Button>
    </form>
  )
}

export default SearchBar