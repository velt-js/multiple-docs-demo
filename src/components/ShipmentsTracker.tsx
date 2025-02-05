"use client"

import dynamic from "next/dynamic"
import { Suspense, useEffect, useMemo, useState } from "react"
import { shipments } from "@/types/shipment"
import ShipmentHeader from "./ShipmentHeader"
import ShipmentListHeader from "./ShipmentListHeader"
import ShipmentListSkeleton from "./ShipmentListSkeleton"
import { useCommentAnnotationsCount, useGetCommentAnnotations, useSetDocument, useSetDocuments, useSetLocation } from "@veltdev/react"

const ShipmentList = dynamic(() => import("./ShipmentList"), {
  loading: () => <ShipmentListSkeleton />,
  ssr: false
})

// const documents = shipments.map(shipment => ({
//   id: shipment.id,
//   metadata: {
//     documentName: shipment.shipmentName
//   }
// }));

const documents = [
  {id: "ship-2024-001-docv2"},
  {id: "ship-2024-002-docv2"}
]

export default function ShipmentsTracker() {
  const [documentId, setDocumentId] = useState<string>("ship-2024-001-doc");

  // useSetDocument(documentId);

  const { setDocuments } = useSetDocuments();
  useEffect(() => { 
    // console.log("documents", documents);
    // setDocuments([{id: "ship-2024-001-doc"}]);
    setDocuments(documents);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useSetLocation({ 
  //   'id': 'location_3'
  // });

  // useSetLocation({ 
  //   'id': 'location_4'
  // }, true);

  const { data: annotationsCount } = useCommentAnnotationsCount();

  // Create a memoized version of shipments with updated comment counts
  const updatedShipments = useMemo(() => {
    console.log("annotationsCount", annotationsCount);
    return shipments.map(shipment => {
      const documentCounts = annotationsCount?.[shipment.id];
      return {
        ...shipment,
        totalCommentsCount: documentCounts?.total ?? null,
        unreadCommentsCount: documentCounts?.unread ?? null
      };
    });
  }, [annotationsCount]); // Only recompute when annotationsCount changes

  const { data: annotations } = useGetCommentAnnotations();
  useEffect(() => {
    console.log("annotations", annotations);
  }, [annotations]);

  return (
    <div className="text-white p-6">
      <div className="max-w-5xl mx-auto">
        {/* <div className="flex gap-4 mb-4">
          <button
            onClick={() => setDocumentId("ship-2024-001")}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Set Document 1
          </button>
          <button
            onClick={() => setDocumentId("ship-2024-002")}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Set Document 2
          </button>
        </div> */}
        <ShipmentHeader />
        <ShipmentListHeader />
        <Suspense fallback={<ShipmentListSkeleton />}>
          {documents.map((document) => (
            <div key={document.id} data-velt-document-id={document.id}>
              <ShipmentList shipments={updatedShipments} documentId={document.id} />
            </div>
          ))}
        </Suspense>
      </div>
    </div>
  )
}

