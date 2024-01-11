export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export type TodoFilter = "all" | "active" | "completed";
