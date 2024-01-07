const FILTERS = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Completed", value: "completed" },
] as const;

export type TodoFilter = (typeof FILTERS)[number]["value"];

type Props = {
  setSearchTerm: (term: string) => void;
  setFilter: (filter: TodoFilter) => void;
};

function TodoCriteria({ setSearchTerm, setFilter }: Props) {
  return (
    <div className="join w-full max-w-xl">
      <input
        type="search"
        id="search"
        name="search"
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input input-bordered input-ghost flex-grow join-item"
        placeholder="Search for todos..."
      />
      <select
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

export default TodoCriteria;
