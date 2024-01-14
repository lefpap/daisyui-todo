import { TodoFilter } from "../lib/types";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Completed", value: "completed" },
] as const;

type Props = {
  setSearchTerm: (term: string) => void;
  setFilter: (filter: TodoFilter) => void;
};

function TodoCriteriaSelector({ setSearchTerm, setFilter }: Props) {
  return (
    <div className="join w-full max-w-xl">
      <input
        type="search"
        name="search"
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input input-bordered input-ghost flex-grow join-item"
        placeholder="Search for todos..."
      />
      <select
        name="filter"
        className="select select-bordered select-ghost flex-grow max-w-xs join-item"
        onChange={(e) => setFilter(e.target.value as TodoFilter)}
        defaultValue={FILTERS[0].value}
      >
        {FILTERS.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TodoCriteriaSelector;
