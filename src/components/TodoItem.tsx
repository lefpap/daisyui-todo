type Props = {
  title: string;
  completed: boolean;
};

function TodoItem({ title, completed }: Props) {
  return (
    <li className="flex items-center justify-between">
      <label className="flex flex-grow gap-3">
        <input
          type="checkbox"
          checked={completed}
          className="checkbox checkbox-sm checkbox-primary rounded-full"
        />
        <div className="relative w-full">
          <span className={`${completed && "text-neutral/40"}`}>{title}</span>
          {completed && (
            <span
              className={`absolute left-0 top-3 rounded-full bg-neutral/40 h-0.5 w-full`}
            />
          )}
        </div>
      </label>
      <div className="flex items-center justify-end gap-1">
        <button className="btn btn-circle btn-sm btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </button>
        <button className="btn btn-circle btn-sm btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
