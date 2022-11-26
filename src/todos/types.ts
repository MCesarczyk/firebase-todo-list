import { DocumentData } from "firebase/firestore";

export interface Task {
  id: string;
  data: DocumentData;
};
