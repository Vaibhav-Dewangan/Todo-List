import React from "react";
import ToDoItem from "./ToDoItem";
import { useState } from "react";

function ToDoList(){

    const [ToDoItemLists, setToDoItemLists] = useState([]);
    const [Id, setId] = useState(1);
    const [input, setInput] = useState('');
    const [edit,  setEdit] = useState(null);
  
    const getInputText = (e) => {
      setInput(e.target.value);
    };

    const addNewList = () => {
      if (input.trim() !== '') {
          if (edit !== null) {
              // Update the existing item
              const updatedList = ToDoItemLists.map((item) =>
                  item.id === edit ? { ...item, newItem: input } : item
              );
              setToDoItemLists(updatedList);
              setEdit(null); // Exit edit mode
          } else {
              // Add a new item
              const object = { id: Id, newItem: input };
              setToDoItemLists([...ToDoItemLists, object]);
              setId(Id + 1);
          }
          setInput('');
      }
  };

    function deleteFunction(updatedlist){
      setToDoItemLists(updatedlist);
    };

    function editFunction(id, currentText){
      setEdit(id);
      setInput(currentText);
    };
    
    return(
        <div className="main bg-slate-200 max-sm:flex max-sm:flex-col  mt-5 sm:mt-20 xl:mt-24  ">

        <div className='inputContainer max-sm:ml-auto max-sm:mr-auto shadow-xl sm:absolute xl:h-36 xl:w-1/2 xl:top-16 xl:left-1/3 sm:h-28 sm:w-1/2 sm:top-5 md:top-10 sm:left-1/3 mt-5 h-28 w-64 rounded-xl  bg-blue-400 flex flex-col justify-center align-middle items-center gap-3'>
        
        <input type="text" onChange={getInputText} className='p-1 w-56 xl:w-96 xl:p-3 md:w-80 md:p-2   rounded-md' placeholder='What would you like to do?' name="Add" id="addItem" value={input} />
        <button onClick={addNewList} className='button shadow-md w-20 p-1 rounded-md bg-red-500 text-white'>{edit !== null ? "Update" : "Add"}</button>
        
        </div>

        <div className="todolist  min-h-96 pt-5 pb-10  max-sm:flex max-sm:justify-center  ">
            <div className=" flex-row max-sm:flex-col flex-wrap flex justify-start sm:justify-center  ">
            {ToDoItemLists.map((ToDoItemList)=>{
                return <ToDoItem key={ToDoItemList.id} itemId={ToDoItemList.id} newItemList={ToDoItemList.newItem} itemsData={ToDoItemLists} onDelete={deleteFunction} onEdit={editFunction} />
            })}
            </div>
        </div>
        </div>
    );
};

export default ToDoList;