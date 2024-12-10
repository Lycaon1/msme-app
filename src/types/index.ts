export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface Customer {
  id: string;
  name: string;
  businessName: string;
  contactNumber: string;
  email: string;
  businessType: BusinessType;
  city: string;
  state: string;
  status: CustomerStatus;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export type BusinessType = 'MANUFACTURING' | 'SERVICES' | 'RETAIL' | 'OTHER';
export type CustomerStatus = 'ACTIVE' | 'PENDING_VERIFICATION' | 'INACTIVE';