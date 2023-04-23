import React, { useState } from "react";

type Props = {
  saveTodo: (e: React.FormEvent, formData: ITodo | any) => void;
};

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");
  const [formData, setFormData] = useState<ITodo | {}>();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    e.currentTarget.id === "name"
      ? setTitle(e.currentTarget.value)
      : setDescr(e.currentTarget.value);

    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveTodo(e, formData);
    setTitle("");
    setDescr("");
  };

  return (
    <form className="Form" onSubmit={onSubmit}>
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input onChange={handleForm} type="text" id="name" value={title} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            onChange={handleForm}
            type="text"
            id="description"
            value={descr}
          />
        </div>
      </div>
      <button disabled={formData === undefined ? true : false}>Add Todo</button>
    </form>
  );
};
export default AddTodo;
