
import React, { useState } from 'react';

const TodoApp = () => {
  const [Todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const createToDo = () => {
    if (title && description) {
      if (editingIndex !== null) {
        // If editingIndex is not null, it means we are updating an existing todo
        const updatedTodos = [...Todos];
        updatedTodos[editingIndex] = { title, description };
        setTodos(updatedTodos);
        setEditingIndex(null);
      } 
      else {
        // If editingIndex is null, it means we are creating a new todo
        setTodos([...Todos, { title, description }]);
      }
      setTitle('');
      setDescription('');
    } 
    else {
      alert("Please enter something in ToDo's input");
    }
  };

  const deleteToDo = (index) => {
    const deletedToDo = [...Todos];
    deletedToDo.splice(index, 1);
    setTodos(deletedToDo);
    setEditingIndex(null);
  };

  const editToDo = (index) => {
    // Set the editingIndex and populate the input fields with the selected todo
    setEditingIndex(index);
    setTitle(Todos[index].title);
    setDescription(Todos[index].description);

  };

  return (
    <div className='main-div bg-custom-green min-h-screen p-5'>
      <h1 className='text-center text-white text-2xl mb-5'>ToDo Web Application</h1>
      <div className="flex flex-col md:flex-row justify-center text-white">
        <input
        className="p-2 m-2 border rounded-lg outline-none text-black"
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
       className="p-2 m-2 border rounded-lg outline-none text-black"
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="bg-green-500 hover:bg-green-700 text-white font-bold text-sm px-4 py-2 rounded-xl mb-2 md:mb-0" onClick={createToDo}>{editingIndex !== null ? 'Update' : 'Create'}</button>
      </div>
      <div className='add-items text-white mt-5' >
        {/* <h2>Todos:</h2> */}
        <ul >
          {Todos.map((currentdata, index) => (
            <li key={index}>
              <strong className='mt-4 '>Title:  </strong>{currentdata.title}<br />
              <strong >Description:  </strong>{currentdata.description}
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 md:px-5 py-1 md:py-2 rounded-xl mb-2 md:mb-0 mr-2 md:mr-4" onClick={() => editToDo(index)}>Edit</button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 md:px-5 py-1 md:py-2  rounded-xl" onClick={() => deleteToDo(index)}>Delete</button>

              <br /><br />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;









