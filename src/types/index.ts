export type User = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  rating: number;
  reviewsCount: number;
};

export type Assignment = {
  id: string;
  title: string;
  description: string;
  amount: number;
  deadline: Date;
  status: 'Open' | 'In Progress' | 'Completed' | 'Pending Approval' | 'Missed';
  requester: User;
  provider?: User;
  fileUrls?: string[];
  location: string;
};

export type Message = {
  id: string;
  senderId: string;
  text: string;
  timestamp: Date;
  fileUrl?: string;
  fileName?: string;
};
