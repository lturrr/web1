'use client'

import { useState, useEffect } from 'react'

export function useLeadForm() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false)

  useEffect(() => {
    if (isLeadFormOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isLeadFormOpen])

  const handleContactClick = () => setIsLeadFormOpen(true)
  const handleCloseForm = () => setIsLeadFormOpen(false)

  return {
    isLeadFormOpen,
    handleContactClick,
    handleCloseForm
  }
}