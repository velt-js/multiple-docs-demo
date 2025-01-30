"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageSquare, MoreHorizontal, Share } from "lucide-react"
import type { Shipment } from "@/types/shipment"
import { VeltInlineCommentsSection } from "@veltdev/react"

export default function ShipmentList({ shipments }: { shipments: Shipment[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {shipments.map((shipment) => (
        <AccordionItem key={shipment.id} value={shipment.id} className="border-b border-gray-800">
          <AccordionTrigger className="hover:no-underline w-full">
            <div className="grid grid-cols-4 gap-4 w-full py-4">
              <div className="text-left">
                <div className="font-medium text-white">{shipment.id}</div>
                <div className="text-sm text-gray-400">{shipment.location}</div>
              </div>
              <div>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm ${
                    shipment.status === "IN_TRANSIT"
                      ? "bg-yellow-900/30 text-yellow-500"
                      : shipment.status === "DELIVERED"
                        ? "bg-green-900/30 text-green-500"
                        : "bg-gray-800 text-gray-400"
                  }`}
                >
                  {shipment.status.replace("_", " ")}
                </span>
              </div>
              <div className="text-gray-400">{shipment.notes}</div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-400">
                  <div className="relative">
                    <MessageSquare className="w-4 h-4" />
                    {shipment.unreadCommentsCount != null && shipment.unreadCommentsCount > 0 && (
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
                    )}
                  </div>
                  <span>{shipment.totalCommentsCount ?? '...'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 hover:bg-gray-800 rounded-full cursor-pointer">
                    <Share className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="p-2 hover:bg-gray-800 rounded-full cursor-pointer">
                    <MoreHorizontal className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="border-t border-gray-800" id={shipment.id} data-velt-document-id={shipment.id}>
            <div className="py-4">
              <h3 className="font-medium mb-2 text-white">Shipment Details</h3>
              <p className="text-gray-400">Additional information about the shipment would go here...</p>
            </div>
            <VeltInlineCommentsSection
              targetElementId={shipment.id}
            />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

