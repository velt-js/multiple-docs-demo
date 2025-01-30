import { VeltSidebarButton } from "@veltdev/react"

export default function ShipmentHeader() {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-semibold">Shipments</h1>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <VeltSidebarButton /> 
        </div>
      </div>
    </div>
  )
}

