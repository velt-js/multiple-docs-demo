"use client"

import dynamic from "next/dynamic"
import { Suspense, useEffect, useMemo } from "react"
import { shipments } from "@/types/shipment"
import ShipmentHeader from "./ShipmentHeader"
import ShipmentListHeader from "./ShipmentListHeader"
import ShipmentListSkeleton from "./ShipmentListSkeleton"
import { useCommentAnnotationsCount, useSetDocuments } from "@veltdev/react"

const ShipmentList = dynamic(() => import("./ShipmentList"), {
  loading: () => <ShipmentListSkeleton />,
  ssr: false
})

const documents = shipments.map(shipment => ({
  id: shipment.id,
  metadata: {
    documentName: shipment.shipmentName
  }
}));

export default function ShipmentsTracker() {

  const { setDocuments } = useSetDocuments();
  useEffect(() => { 
    console.log("documents", documents);
    setDocuments(documents);
  }, []);

  const { data: annotationsCount } = useCommentAnnotationsCount();

  // Create a memoized version of shipments with updated comment counts
  const updatedShipments = useMemo(() => {
    return shipments.map(shipment => {
      const documentCounts = annotationsCount?.[shipment.id];
      return {
        ...shipment,
        totalCommentsCount: documentCounts?.total ?? null,
        unreadCommentsCount: documentCounts?.unread ?? null
      };
    });
  }, [annotationsCount]); // Only recompute when annotationsCount changes

  return (
    <div className="text-white p-6">
      <div className="max-w-5xl mx-auto">
        <ShipmentHeader />
        <ShipmentListHeader />
        <Suspense fallback={<ShipmentListSkeleton />}>
          <ShipmentList shipments={updatedShipments} />
        </Suspense>
      </div>
    </div>
  )
}

