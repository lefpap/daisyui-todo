import React, { useState } from "react";

type Props = {
  onAddTodo: (title: string) => void;
};

function AddTodo({ onAddTodo }: Props) {
  const [name, setName] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //TODO: make some validations
    onAddTodo(name);
    setName("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between py-2 gap-4 max-w-xl"
    >
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleNameChange}
        className="input input-bordered w-full"
        placeholder="What do you need to do?"
        autoComplete="on"
      />
      <button type="submit" className="btn btn-primary">
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
