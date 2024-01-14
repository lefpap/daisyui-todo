export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export type TodoFilter = "all" | "active" | "completed";

export type Pagination = {
  page: number;
  size: number;
};

export type TodoCriteria =
  | {
      searchTerm: string;
      filter?: TodoFilter;
    }
  | {
      searchTerm?: string;
      filter: TodoFilter;
    };
