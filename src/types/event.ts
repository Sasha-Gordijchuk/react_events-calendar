export interface IEvent {
  id: string;
  title: string;
  description: string | null;
  date: string;
  time: string;
  createdAt: Date;
  updatedAt: Date | null;
}
