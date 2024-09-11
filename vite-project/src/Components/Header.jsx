import React from "react";

function Header(){
    return(
       <header className=" header bg-sky-950 xl:h-32 lg:h-28 sm:h-24 h-20 w-full flex items-center justify-start xl:p-20 lg:p-16 md:p-14  p-10 shadow-lg ">
        <h1 className="  text-white xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-xl font-bold  ">Todo List</h1>
       </header>
    );
};

export default Header;