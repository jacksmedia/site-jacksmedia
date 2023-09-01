import React, { useState } from 'react';

function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [grams, setGrams] = useState(0); // Replace with your constant value
  const [totalProtein, setTotalProtein] = useState(0);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const calculateResult = () => {
    const result = grams * inputValue;
    return isNaN(result) ? 'Invalid Input' : `${result}g`;
  };
  const handleInputChange2 = (event) => {
    setTotalProtein(event.target.value);
  };

  const addTask = (calculateResult) => {
    setTasks([...tasks, totalProtein]);
    setTotalProtein(calculateResult);
  };

  const editTask = (index, newValue) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = newValue;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h3>ToDo Logics</h3>
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        
        <div>
          <label>
            Enter Food Protein: <select name= "food" type="number" value={grams} onChange={(e) => setGrams(e.target.value)}>
              <option value="">?</option>
              <option value="8">Egg 🥚 8g</option>
              <option value="7">Yeast ⚗️ 7g</option>
              <option value="20">Protein Shake 🧉 20g</option>
              <option value="3">Bacon 🥓 3g</option>
              <option value="8.0">Peanut Butter 🥜 8.0g</option>
              <option value="4">Walnuts 🌰 4g</option>
              <option value="22">Chicken 🍗 22g</option>
              <option value="26">Tuna 🐟 26g</option>
            </select>
          </label>
          <br />
          <label>
            How Many Consumed?: <input type="number" value={inputValue} onChange={handleInputChange} />
          </label>
          <br />
          <div>Result: {calculateResult()}</div>
        </div>

        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            editTask={(newValue) => editTask(index, newValue)}
            deleteTask={() => deleteTask(index)}
          />
        ))}
      </ul>
    </div>
  );
}

function Task({ task, editTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(task);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleEditInputChange = (event) => {
    setEditedValue(event.target.value);
  };

  const saveEditedTask = () => {
    if (editedValue.trim() !== '') {
      editTask(editedValue);
      toggleEdit();
    }
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input type="text" value={editedValue} onChange={handleEditInputChange} />
          <button onClick={saveEditedTask}>Save</button>
        </div>
      ) : (
        <div>
          {task}
          <button onClick={toggleEdit}>Edit</button>
          <button onClick={deleteTask}>Delete</button>
        </div>
      )}
    </li>
  );
}

export default ToDo;
