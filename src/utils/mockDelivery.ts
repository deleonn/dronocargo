import { Delivery } from "./types";

export const mockDelivery: Delivery[] = [
  {
    drone: "DJI-004Q",
    orderId: "009-300FCT",
    platform: "Gamma",
    status: "Ready",
    technician: {
      name: "Ben Santana",
    },
    technicalCheck: "Passed",
  },
  {
    drone: "DJI-004Q",
    orderId: "009-300FCT",
    platform: "Gamma",
    status: "Ready",
    technician: {
      name: "Juan Reynosa",
    },
    technicalCheck: "Passed",
  },
  {
    drone: "DJI-004Q",
    orderId: "009-300FCT",
    platform: "Alpha",
    status: "Ready",
    technician: {
      name: "Shan Smith",
    },
    technicalCheck: "Passed",
  },
];
