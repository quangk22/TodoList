import React, { useCallback } from "react";

import Buttonitem from "./ButtonIcon";
import Heading from "./Heading";

import { FaRegArrowAltCircleRight } from "react-icons/fa";

import AddTodo from "./AddTodo";
import { useState } from "react";
import Todo from "./Todo";
import { v4 } from "uuid";
import EditTodo from "./EditTodo";

export default function TodoList() {
  const [showAddTodo, setShowAddTodo] = useState(false);
  const [showEditTodo, setShowEditTodo] = useState(false);
  const [todoList, setTodoList] = useState([]);

  console.log(todoList);

  const [idTodo, setIdTodo] = useState(null);

  const onSetEdit = (id) => {
    setIdTodo(id);
  };
  // hiện thi form
  const onShowAddTodo = (e) => {
    setShowAddTodo(e);
  };
  const onShowEditTodo = (e) => {
    setShowEditTodo(e);
  };
  const arrTodoList = (e) => {
    setTodoList([...todoList, { id: v4(), name: e, isCompleted: false }]);
  };

  // xóa Todo
  const deleteTodo = (todoId) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== todoId);
    setTodoList(updatedTodoList);
  };

  const editTodo = useCallback((e) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((item) =>
        item.id === idTodo ? { ...item, name: e } : item
      )
    );
  });

  return (
    <div>
      {showAddTodo ? (
        <AddTodo
          arrTodoList={arrTodoList}
          onShowAddTodo={onShowAddTodo}
        ></AddTodo>
      ) : (
        ""
      )}
      {/* sửa */}
      {showEditTodo ? (
        <EditTodo
          arrTodoList={todoList}
          onShowEditTodo={onShowEditTodo}
          idTodo={idTodo}
          editTodo={editTodo}
        ></EditTodo>
      ) : (
        ""
      )}

      <div className="flex items-center h-[100vh]">
        <div className=" mx-auto  w-full max-w-2xl ">
          <Heading />

          <div className="pt-5">
            <div className="flex gap-3 items-center">
              <div className="relative w-full">
                <input
                  type="search"
                  placeholder="Search Todos"
                  className="w-full bg-gray-50 p-4 rounded-lg border border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                ></input>
                <Buttonitem />
              </div>
              <button
                type="button"
                className="bg-emerald-700 text-white rounded-lg w-[110px] h-[44px] hover:bg-emerald-900"
                onClick={onShowAddTodo}
              >
                Add Todos
              </button>
            </div>
          </div>

          <Todo
            arrTodoList={todoList}
            onDelete={deleteTodo}
            onShowEditTodo={onShowEditTodo}
            onSetEdit={onSetEdit}
          ></Todo>

          <div className="pt-3">
            <button className="flex items-center justify-center gap-3 bg-gray-400 p-2 rounded-lg text-white hover:bg-gray-600">
              <span>Completed Todos 1</span>
              <div>
                <FaRegArrowAltCircleRight />
              </div>
            </button>
          </div>

          


        </div>
      </div>
    </div>
  );
}
