import React, { useState } from "react";

import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPenToSquare } from "react-icons/fa6";
import { FaCheckToSlot } from "react-icons/fa6";

export default function Todo({
  arrTodoList,
  onDelete,
  onShowEditTodo,
  onSetEdit,
  onComplete,
  searchTerm,
}) {
  const onFormEdit = (id) => {
    onSetEdit(id);
    onShowEditTodo(true);
  };
  //
  const filteredTodoList = arrTodoList.filter((todo) =>
    todo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  //

  return (
    <>
      {arrTodoList.map((item) => {
        return (
          <div className="pt-3" key={item.id}>
            <div className="flex w-full justify-between items-center bg-white p-4 rounded-md border border-gray-200">
              <span>{item.name}</span>

              <div className=" flex gap-3">
                <div
                  className="bg-red-600 w-10 h-10 rounded-md text-white flex items-center justify-center hover:bg-red-800"
                  onClick={() => onDelete(item.id)}
                >
                  <RiDeleteBin6Line />
                </div>

                <div
                  className="bg-blue-600 w-10 h-10 rounded-md text-white flex items-center justify-center hover:bg-blue-800"
                  onClick={() => onFormEdit(item.id)}
                >
                  <FaPenToSquare />
                </div>

                <div
                  className="bg-gray-400 w-10 h-10 rounded-md text-white flex items-center justify-center hover:bg-green-800 "
                  onClick={() => onComplete(item.id)}
                >
                  <FaCheckToSlot />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
