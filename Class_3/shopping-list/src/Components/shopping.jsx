//rfce
import React from "react";

import InputBox from "./InputBox";
import ListItem from "./ListItem";

function Shopping() {
  const [Content, setContent] = React.useState();
  const [tasks, setTasks] = React.useState([]);

  const handleInput = (e) => {
    setContent(e.target.value);
  };

  const handleAddItem = () => {
    
    if (Content == "") return; 
    console.log("Item Added");

    // tasks.push(Content);  Don't use this way
    // setTasks(tasks);

    // Make a copy of the array
    // const newArr = [];
    // for (let i = 0; i < tasks.length; i++){
    //   newArr.push(tasks[i]);
    // }
    // or we make copy like this..........
    const newArr = [...tasks];
    newArr.push(Content);
    setTasks(newArr);

    setContent("");

  };

  const handleDelete = (idx) => {
    console.log("Item Removed");
    const filterArr = tasks.filter((_, i) => i !== idx);  
    // const filterArr = [];
    // for (let i = 0; i < tasks.length; i++){
    //   if (i !== idx) {
    //     filterArr.push(tasks[i]);
    //   }
    // }
    setTasks(filterArr);
  };
/*
  return (
    <div className="Shopping-list">
      <div className="input-box">
        <input type="text" onChange={handleInput} value={Content}/>
        <button onClick={handleAddItem}>Add item</button>
      </div>
        <h2>Shopping List</h2>
      {/* Removed Static Data instead of this we put it dynamically. 
          <ul className="list">
              <li> <span>Task</span> <button onClick={handleDelete}>delete</button> </li>
              <li> <span>Task</span> <button onClick={handleDelete}>delete</button> </li>
              <li> <span>Task</span> <button onClick={handleDelete}>delete</button> </li>
      </ul> *\/}
      {/* Dynamically added through state*\/}
      <ul className="list">
        {tasks.map((item, index) => {
          return (
            <li key={index}>
              <span>{item}</span>
              <button onClick={() => {
                handleDelete(index);
              }}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
*/
  
  return (
    <div className="Shopping-list">
      <InputBox
        handleInput={handleInput}
        Content={Content}
        handleAddItem={handleAddItem}
      />
      <h2>Shopping List</h2>
      <ListItem handleDelete={handleDelete} tasks={tasks} />
    </div>
  );
}

export default Shopping;








