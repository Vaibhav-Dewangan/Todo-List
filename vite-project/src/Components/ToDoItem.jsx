import React from "react";
import { useState } from "react";

function ToDoItem(props){
    const [isCompleted, setIsCompleted] = useState(false);

    function handleCheck(e){
        const checked = e.target.checked;
        setIsCompleted(checked);
        console.log(checked);
    }

    function handleDelete(){
        const updatedlist = props.itemsData.filter((del)=>
            del.id !== props.itemId
        );
        console.log(updatedlist);
        props.onDelete(updatedlist);
      };

      function handleEdit(){
        props.onEdit(props.itemId, props.newItemList); 
      };
    
    return(
        <div className="todoitem shadow-4sides rounded-lg xl:h-40 xl:w-80 lg:w-72 sm:w-72 w-64 p-4 h-36 ml-5 mt-5    flex justify-start bg-lime-100 ">
        
        <div className="para w-72 overflow-y-auto  ">
        <p className="text-wrap">{props.newItemList}</p>
        </div>

        <div className="buttons flex flex-col w-16 justify-center align-middle items-center gap-3">

        <input onChange={handleCheck} className="w-7 h-7 hover:scale-110 shadow-md  rounded-md " type="checkbox" name="check"  id={`check-${props.itemId}`} />
        <button onClick={handleEdit}  className="w-7 h-7 hover:scale-110 shadow-md  rounded-md">✏️</button>
        <button onClick={handleDelete} className="w-7 h-7 hover:scale-110 shadow-md rounded-md ">🗑️</button>
        
        </div>

        </div>
    );
};

export default ToDoItem;