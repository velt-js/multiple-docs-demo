"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageSquare, MoreHorizontal, Share } from "lucide-react"
import type { Location } from "@/types/shared/location"
import { useSetLocation, VeltInlineCommentsSection } from "@veltdev/react"

export const SetAdditionalLocation = (props: { id: string, name: string }) => {
  useSetLocation({
    id: props.id,
    locationName: props.name,
  })
  return (
      <></>
  )
}

export default function ShipmentList({ shipments, documentId }: { shipments: Location[], documentId: string }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {shipments.map((shipment) => (
        <AccordionItem key={shipment.id} value={shipment.id} className="border-b border-gray-800">
          <AccordionTrigger className="hover:no-underline w-full">
          <SetAdditionalLocation key={shipment.id} id={shipment.id} name={shipment.shipmentName} />

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
          <AccordionContent className="border-t border-gray-800" id={documentId + "_" + shipment.id}>
                <VeltInlineCommentsSection
                  sortBy="lastUpdated"
                  sortOrder="desc"
                  composerPosition="top"
                  multiThread={false}
                  targetElementId={documentId + "_" + shipment.id}
                />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

