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
  const [searchTerm, setSearchTerm] = useState("");
  const [showCompletedTodos, setShowCompletedTodos] = useState(false);

  console.log(searchTerm);

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
  //

  const handleCompleteTodo = useCallback((id) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }, []);

  const filteredUncompletedTodoList = todoList.filter(
    (todo) =>
      !todo.isCompleted &&
      todo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCompletedTodoList = todoList.filter(
    (todo) =>
      todo.isCompleted &&
      todo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleCompletedTodos = () => {
    setShowCompletedTodos(!showCompletedTodos);
  };

  return (
    <div>
      {showAddTodo ? (
        <AddTodo arrTodoList={arrTodoList} onShowAddTodo={onShowAddTodo} />
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
        />
      ) : (
        ""
      )}

      <div className="flex items-center h-auto mt-[10%]">
        <div className=" mx-auto  w-full max-w-2xl ">
          <Heading />

          <div className="pt-5">
            <div className="flex gap-3 items-center">
              <div className="relative w-full">
                <input
                  type="search"
                  placeholder="Search Todos"
                  className="w-full bg-gray-50 p-4 rounded-lg border border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
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
          {/* chưa hoàn thành */}
          <Todo
            arrTodoList={filteredUncompletedTodoList}
            onDelete={deleteTodo}
            onShowEditTodo={onShowEditTodo}
            onSetEdit={onSetEdit}
            onComplete={handleCompleteTodo}
            searchTerm={searchTerm}
          />

          <div className="pt-3">
            <button
              className="flex items-center justify-center gap-3 bg-gray-400 p-2 rounded-lg text-white hover:bg-gray-600"
              onClick={toggleCompletedTodos}
            >
              <span>Completed Todos {filteredCompletedTodoList.length}</span>
              <div>
                <FaRegArrowAltCircleRight />
              </div>
            </button>
          </div>
          {/* đã hoàn thành */}

          {showCompletedTodos && (
            <Todo
              arrTodoList={filteredCompletedTodoList}
              onDelete={deleteTodo}
              onShowEditTodo={onShowEditTodo}
              onSetEdit={onSetEdit}
              onComplete={handleCompleteTodo}
              searchTerm={searchTerm}
            />
          )}
        </div>
      </div>
    </div>
  );
}
