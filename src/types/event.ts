export interface IEvent {
  id: string;
  title: string;
  description: string | null;
  date: string;
  time: string;
  createdAt: number;
  updatedAt: number | null;
}
