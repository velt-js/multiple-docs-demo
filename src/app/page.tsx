'use client'
import ShipmentsTracker from "@/components/ShipmentsTracker"
import VeltCustomization from "@/components/VeltCustomization"
import YourAuthComponent from "@/components/YourAuthComponent"
import { VeltComments, VeltCommentsSidebar, VeltProvider } from "@veltdev/react"

export default function Home() {
  return (
      <VeltProvider apiKey="j3AwoBkuQMTEgeqrmPve">
        <YourAuthComponent />
        <ShipmentsTracker />
        <VeltCustomization /> 
        <VeltComments darkMode={true} />
        <VeltCommentsSidebar />
      </VeltProvider>
  )
}

