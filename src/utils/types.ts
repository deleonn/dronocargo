export type Delivery = {
  status: DStatus;
  orderId: string;
  technician: DTechnician;
  platform: DPlatform;
  drone: string;
  technicalCheck: DTechnicalCheck;
};

export type DStatus = "Ready" | "Pending";

export type DTechnician = {
  name: string;
};

export type DPlatform = "Tetha" | "Gamma" | "Beta" | "Alpha";

export type DTechnicalCheck = "Passed";
