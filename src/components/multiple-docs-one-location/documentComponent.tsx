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

const documents = [
  {id: "documentId-1"},
  {id: "documentId-2"}
]

export default function ShipmentsTracker() {
  const { setDocuments } = useSetDocuments();
  useEffect(() => { 
    setDocuments(documents);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { data: annotationsCount } = useCommentAnnotationsCount();

  // Create a memoized version of shipments with updated comment counts
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
  }, [annotationsCount]); // Only recompute when annotationsCount changes

  const { data: annotations } = useGetCommentAnnotations();
  useEffect(() => {
    console.log("annotations", annotations);
  }, [annotations]);

  return (
    <div className="text-white">
      <div className="flex gap-4"> Multiple Docs One Location</div>
      <div className="max-w-5xl mx-auto">
        <ShipmentListHeader />
        <Suspense fallback={<ShipmentListSkeleton />}>
          {documents.map((_document) => (
            <div key={_document.id} data-velt-document-id={_document.id}>
              <ShipmentList shipments={updatedShipments} documentId={_document.id} />
            </div>
          ))}
        </Suspense>
      </div>
    </div>
  )
}

