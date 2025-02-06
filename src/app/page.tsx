'use client'
import { useState } from 'react'
import VeltCustomization from "@/components/VeltCustomization"
import YourAuthComponent from "@/components/YourAuthComponent"
import { VeltComments, VeltCommentsSidebar, VeltProvider } from "@veltdev/react"
import ShipmentHeader from '@/components/ShipmentHeader'
import OneDocShipmentsTracker from '@/components/one-doc-multiple-locations/documentComponent'
import MultiDocsShipmentsTracker from '@/components/multiple-docs-one-location/documentComponent'

export default function Home() {
  const [activeView, setActiveView] = useState<'one-doc' | 'multi-docs'>('one-doc')

  return (
    <VeltProvider apiKey="j3AwoBkuQMTEgeqrmPve">
      <YourAuthComponent />
      <div className="container mx-auto px-4 py-8">
        <ShipmentHeader activeView={activeView} onViewChange={setActiveView} />
        {activeView === 'one-doc' ? (
          <OneDocShipmentsTracker />
        ) : (
          <MultiDocsShipmentsTracker />
        )}
      </div>
      <VeltCustomization /> 
      <VeltComments darkMode={true} />
      <VeltCommentsSidebar />
    </VeltProvider>
  )
}

