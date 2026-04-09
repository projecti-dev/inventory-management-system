export type AssetStatus = "Assigned" | "Available" | "Maintenance";

export interface Asset {
  id: string;
  name: string;
  category: string;
  serial: string;
  assignedTo: string;
  status: AssetStatus;
  purchaseDate: string;
}

export interface AssetForm {
  name: string;
  category: string;
  serial: string;
  assignedTo: string;
  status: AssetStatus | "";
  purchaseDate: string;
  notes: string;
}
