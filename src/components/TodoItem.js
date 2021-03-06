import React from "react";
import TodoItemPrompt from "./TodoItemPrompt";
import usePrompt from "../hooks/usePrompt";
import "./TodoItem.css";

export default function TodoItem(props) {
  const { name, info, status, id } = props;

  const [prompt, openPrompt, closePrompt] = usePrompt();

  const doneField = (
    <div className={`TodoItem-content-extra-2 ${status.toLowerCase()}`}>
      {status.toUpperCase()}
    </div>
  );

  return (
    <React.Fragment>
      <TodoItemPrompt
        open={prompt}
        status={status}
        todoId={id}
        close={closePrompt}
      />
      <div className="TodoItem" onClick={openPrompt}>
        <div className="TodoItem-title">
          <h3>{name}</h3>
        </div>
        <div className="TodoItem-content">
          <p>{info}</p>
          <div className="TodoItem-content-extra">{doneField}</div>
        </div>
      </div>
    </React.Fragment>
  );
}
