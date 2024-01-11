import { useState } from "react";
import { useTodoActions } from "../hooks/useTodos";
import { cn } from "../lib/utils";

type Props = {
  id: number;
  title: string;
  completed: boolean;
};

function TodoItem({ id, title, completed }: Props) {
  const { deleteTodo, toggleTodo, editTodo } = useTodoActions();

  const [editMode, setEditMode] = useState(false);
  const [editTitle, setEditTitle] = useState(title);

  const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleEditSave();
  };

  const handleEditOpen = () => {
    setEditTitle(title);
    setEditMode(true);
  };

  const handleEditSave = () => {
    if (editTitle.trim() === "") return;
    editTodo(id, editTitle);
    setEditMode(false);
  };

  const handleEditCancel = () => {
    setTimeout(() => {
      if (editMode) {
        setEditTitle(title);
        setEditMode(false);
      }
    }, 100);
  };

  return (
    <li className="flex items-center justify-between gap-5">
      <div className="flex items-center justify-start gap-3 flex-grow">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(id)}
          className="checkbox checkbox-primary checkbox-md rounded-full"
        />
        {editMode ? (
          <form onSubmit={handleEditSubmit} className="flex-1">
            <input
              name="edit"
              type="text"
              className="input w-full"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              onBlur={handleEditCancel}
              autoFocus
            />
          </form>
        ) : (
          <span
            onDoubleClick={handleEditOpen}
            className={cn(
              "text-base-content font-semibold first-letter:uppercase",
              { "text-base-content/50 line-through": completed }
            )}
          >
            {title}
          </span>
        )}
      </div>
      <div className="space-x-2">
        <button
          className="btn btn-ghost btn-circle"
          onClick={editMode ? handleEditSave : handleEditOpen}
        >
          {editMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          )}
        </button>
        <button
          className="btn btn-ghost btn-circle"
          onClick={() => deleteTodo(id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </li>
  );
}

{
  /* <label className="flex flex-grow items-center justify-start gap-3">
        <input
          id={`completed-${id}`}
          name="completed"
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(id)}
          className="checkbox checkbox-sm checkbox-primary rounded-full"
        />
        <div className="relative w-full">
          {editMode ? (
            <input
              name="edit"
              className="input h-full"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              onBlur={() => setEditMode(false)}
              autoFocus
            />
          ) : (
            <span className={`${completed && "text-neutral/40"}`}>{title}</span>
          )}

          {completed && (
            <span
              className={`absolute left-0 top-3 rounded-full bg-neutral/40 h-0.5 w-full`}
            />
          )}
        </div>
      </label>
      <div className="flex items-center justify-end gap-1">
        <button
          className="btn btn-circle btn-sm btn-ghost"
          onClick={() => setEditMode((prev) => !prev)}
          disabled={completed}
        >
          {editMode ? (
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
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          ) : (
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
          )}
        </button>
        <button
          className="btn btn-circle btn-sm btn-ghost"
          onClick={() => deleteTodo(id)}
        >
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
      </div> */
}

export default TodoItem;
