export type Template = "modelo1" | "modelo2" | "modelo3"

export interface Thought {
  id?: number;
  content: string;
  authorship: string;
  template: Template;
}
