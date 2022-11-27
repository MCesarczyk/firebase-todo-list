import { DocumentData } from "firebase/firestore";

export interface Task {
  id: string;
  data: DocumentData;
};

export interface RenderedTask extends Task {
  edited: boolean;
};

export interface NavRoute {
  path: string;
  label: string;
};
