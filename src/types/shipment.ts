export type ShipmentStatus = "IN_TRANSIT" | "DELIVERED" | "PENDING"

export interface Shipment {
  id: string
  location: string
  status: ShipmentStatus
  notes: string
  totalCommentsCount: number | null
  unreadCommentsCount: number | null
  shipmentName: string
}

export const shipments: Shipment[] = [
  {
    id: "ship-2024-001",
    location: "New York, NY", 
    status: "IN_TRANSIT",
    notes: "Expected delivery on Monday",
    totalCommentsCount: null,
    unreadCommentsCount: null,
    shipmentName: "Shipment 1"
  },
  {
    id: "ship-2024-002",
    location: "Los Angeles, CA",
    status: "DELIVERED", 
    notes: "Delivered to reception",
    totalCommentsCount: null,
    unreadCommentsCount: null,
    shipmentName: "Shipment 2"
  },
  {
    id: "ship-2024-003",
    location: "Chicago, IL",
    status: "PENDING",
    notes: "Awaiting pickup",
    totalCommentsCount: null,
    unreadCommentsCount: null,
    shipmentName: "Shipment 3"
  },
  {
    id: "ship-2024-004",
    location: "Houston, TX",
    status: "IN_TRANSIT",
    notes: "In transit to destination",
    totalCommentsCount: null,
    unreadCommentsCount: null,
    shipmentName: "Shipment 4"
  },
  {
    id: "ship-2024-005",
    location: "Phoenix, AZ",
    status: "DELIVERED",
    notes: "Delivered to customer",
    totalCommentsCount: null,
    unreadCommentsCount: null,
    shipmentName: "Shipment 5"
  },
  {
    id: "ship-2024-006",
    location: "Philadelphia, PA",
    status: "PENDING",
    notes: "Processing order",
    totalCommentsCount: null,
    unreadCommentsCount: null,
    shipmentName: "Shipment 6"
  },
  {
    id: "ship-2024-007",
    location: "San Antonio, TX",
    status: "IN_TRANSIT",
    notes: "On schedule",
    totalCommentsCount: null,
    unreadCommentsCount: null,
    shipmentName: "Shipment 7"
  },
  {
    id: "ship-2024-008",
    location: "San Diego, CA",
    status: "DELIVERED",
    notes: "Signed by recipient",
    totalCommentsCount: null,
    unreadCommentsCount: null,
    shipmentName: "Shipment 8"
  },
  {
    id: "ship-2024-009",
    location: "Dallas, TX",
    status: "PENDING",
    notes: "Preparing shipment",
    totalCommentsCount: null,
    unreadCommentsCount: null,
    shipmentName: "Shipment 9"
  },
  {
    id: "ship-2024-010",
    location: "San Jose, CA",
    status: "IN_TRANSIT",
    notes: "Arriving tomorrow",
    totalCommentsCount: null,
    unreadCommentsCount: null,
    shipmentName: "Shipment 10"
  },
  {
    id: "ship-2024-011",
    location: "Austin, TX",
    status: "DELIVERED",
    notes: "Left at front door",
    totalCommentsCount: null,
    unreadCommentsCount: null,
    shipmentName: "Shipment 11"
  },
  {
    id: "ship-2024-012",
    location: "Jacksonville, FL",
    status: "PENDING",
    notes: "Awaiting processing",
    totalCommentsCount: null,
    unreadCommentsCount: null,
    shipmentName: "Shipment 12"
  },
  {
    id: "ship-2024-013",
    location: "Fort Worth, TX",
    status: "IN_TRANSIT",
    notes: "Delayed due to weather",
    totalCommentsCount: null,
    unreadCommentsCount: null,
    shipmentName: "Shipment 13"
  },
  {
    id: "ship-2024-014",
    location: "Columbus, OH",
    status: "DELIVERED",
    notes: "Delivered to mailroom",
    totalCommentsCount: null,
    unreadCommentsCount: null,
    shipmentName: "Shipment 14"
  },
  {
    id: "ship-2024-015",
    location: "San Francisco, CA",
    status: "PENDING",
    notes: "Order confirmed",
    totalCommentsCount: null,
    unreadCommentsCount: null,
    shipmentName: "Shipment 15"
  },
  {
    id: "ship-2024-016",
    location: "Charlotte, NC",
    status: "IN_TRANSIT",
    notes: "Out for delivery",
    totalCommentsCount: null,
    unreadCommentsCount: null,
    shipmentName: "Shipment 16"
  },
  {
    id: "ship-2024-017",
    location: "Indianapolis, IN",
    status: "DELIVERED",
    notes: "Received by customer",
    totalCommentsCount: null,
    unreadCommentsCount: null,
    shipmentName: "Shipment 17"
  },
  {
    id: "ship-2024-018",
    location: "Seattle, WA",
    status: "PENDING",
    notes: "Processing shipment",
    totalCommentsCount: null,
    unreadCommentsCount: null,
    shipmentName: "Shipment 18"
  },
  {
    id: "ship-2024-019",
    location: "Denver, CO",
    status: "IN_TRANSIT",
    notes: "In transit to facility",
    totalCommentsCount: null,
    unreadCommentsCount: null,
    shipmentName: "Shipment 19"
  },
  {
    id: "ship-2024-020",
    location: "Washington, DC",
    status: "DELIVERED",
    notes: "Delivered to office",
    totalCommentsCount: null,
    unreadCommentsCount: null,
    shipmentName: "Shipment 20"
  },
  {
    id: "ship-2024-021",
    location: "Boston, MA",
    status: "PENDING",
    notes: "Awaiting pickup",
    totalCommentsCount: null,
    unreadCommentsCount: null,
    shipmentName: "Shipment 21"
  },
  {
    id: "ship-2024-022",
    location: "El Paso, TX",
    status: "IN_TRANSIT",
    notes: "On schedule",
    totalCommentsCount: null,
    unreadCommentsCount: null,
    shipmentName: "Shipment 22"
  },
  {
    id: "ship-2024-023",
    location: "Detroit, MI",
    status: "DELIVERED",
    notes: "Signed for by recipient",
    totalCommentsCount: null,
    unreadCommentsCount: null,
    shipmentName: "Shipment 23"
  },
  {
    id: "ship-2024-024",
    location: "Nashville, TN",
    status: "PENDING",
    notes: "Processing order",
    totalCommentsCount: null,
    unreadCommentsCount: null,
    shipmentName: "Shipment 24"
  },
  {
    id: "ship-2024-025",
    location: "Portland, OR",
    status: "IN_TRANSIT",
    notes: "Arriving today",
    totalCommentsCount: null,
    unreadCommentsCount: null,
    shipmentName: "Shipment 25"
  },
  {
    id: "ship-2024-026",
    location: "Oklahoma City, OK",
    status: "DELIVERED",
    notes: "Left with neighbor",
    totalCommentsCount: null,
    unreadCommentsCount: null,
    shipmentName: "Shipment 26"
  },
  {
    id: "ship-2024-027",
    location: "Las Vegas, NV",
    status: "PENDING",
    notes: "Preparing shipment",
    totalCommentsCount: null,
    unreadCommentsCount: null,
    shipmentName: "Shipment 27"
  },
  {
    id: "ship-2024-028",
    location: "Louisville, KY",
    status: "IN_TRANSIT",
    notes: "Expected tomorrow",
    totalCommentsCount: null,
    unreadCommentsCount: null,
    shipmentName: "Shipment 28"
  },
  {
    id: "ship-2024-029",
    location: "Milwaukee, WI",
    status: "DELIVERED",
    notes: "Delivered to reception",
    totalCommentsCount: null,
    unreadCommentsCount: null,
    shipmentName: "Shipment 29"
  },
  {
    id: "ship-2024-030",
    location: "Albuquerque, NM",
    status: "PENDING",
    notes: "Order processing",
    totalCommentsCount: null,
    unreadCommentsCount: null,
    shipmentName: "Shipment 30"
  },
]

