"use client"

import dynamic from "next/dynamic"
import { Suspense, useEffect, useMemo, useState } from "react"
import { locations } from "./locations"
import ShipmentListHeader from "../ShipmentListHeader"
import ShipmentListSkeleton from "../ShipmentListSkeleton"
import { useCommentAnnotationsCount, useGetCommentAnnotations, useSetDocument, useSetDocuments, useSetLocation } from "@veltdev/react"

const ShipmentList = dynamic(() => import("./locationComponent"), {
  loading: () => <ShipmentListSkeleton />,
  ssr: false
})

const document = [
  {id: "documentId-1"}
]

export default function ShipmentsTracker() {
  const { setDocuments } = useSetDocuments();
  useEffect(() => { 
    setDocuments(document);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { data: annotationsCount } = useCommentAnnotationsCount();

  const updatedShipments = useMemo(() => {
    console.log("annotationsCount", annotationsCount);
    return locations.map(location => {
      const documentCounts = annotationsCount?.[location.id];
      return {
        ...location,
        totalCommentsCount: documentCounts?.total ?? null,
        unreadCommentsCount: documentCounts?.unread ?? null
      };
    });
  }, [annotationsCount]);

  const { data: annotations } = useGetCommentAnnotations();
  useEffect(() => {
    console.log("annotations", annotations);
  }, [annotations]);

  return (
    <div className="text-white">
      <div className="flex gap-4"> One Doc Multiple Locations</div>
      <div className="max-w-5xl mx-auto">
        <ShipmentListHeader />
        <Suspense fallback={<ShipmentListSkeleton />}>
          {document.map((_document) => (
            <div key={_document.id}>
              <ShipmentList shipments={updatedShipments} documentId={_document.id} />
            </div>
          ))}
        </Suspense>
      </div>
    </div>
  )
}

