export type ShipmentStatus = "IN_TRANSIT" | "DELIVERED" | "PENDING"

export interface Location {
  id: string
  location: string
  status: ShipmentStatus
  notes: string
  totalCommentsCount: number | null
  unreadCommentsCount: number | null
  shipmentName: string
} 