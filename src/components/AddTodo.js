import { useState } from "react";

const AddTodo = ({ arrTodoList, onShowAddTodo }) => {
  const [textInput, setTextInput] = useState("");
  const contentTodo = (e) => {
    setTextInput(e.target.value);
  };

  const onAddBtnClick = () => {
    if (textInput != "") {
      arrTodoList(textInput);
      onShowAddTodo(false);
    } else {
      onShowAddTodo(false);
    }
  };
  const offAddBtnClick = () => {
    onShowAddTodo(false);
  };
  //

  return (
    <div>
      <div className="fixed bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center bg-gray-700/60 ">
        <div className="max-w-md w-full m-auto ">
          <form className="rounded-lg bg-white shadow">
            <div className="p-6">
              <input
                type="text"
                placeholder="Add Todos"
                value={textInput}
                className="w-full p-2 rounded-lg border border-gray-300 "
                onChange={contentTodo}
              ></input>
            </div>

            <div className="flex justify-center items-center content-center gap-5 py-5 border-t border-gray-200">
              <div
                className="py-2 px-3 rounded-lg bg-green-700 text-white border border-gray-300 cursor-pointer"
                onClick={onAddBtnClick}
              >
                Seve
              </div>
              <div
                className="py-2 px-3 rounded-lg bg-white text-gray-700 border border-gray-300 cursor-pointer"
                onClick={offAddBtnClick}
              >
                Cancel
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
