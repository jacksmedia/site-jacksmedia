import React, { useState } from 'react';

function ListApp() {
  const [tasks, setTasks] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [integerInput, setIntegerInput] = useState(0);
  const [proteinTotal, setproteinTotal] = useState(0);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleIntegerChange = (event) => {
    setIntegerInput(parseInt(event.target.value, 10));
  };

  const addTask = () => {
    if (selectedOption !== '' && integerInput !== 0) {
      setTasks([...tasks, { option: selectedOption, integer: integerInput, total: proteinTotal}]);
      setproteinTotal(selectedOption * integerInput);
      setSelectedOption('');
      setIntegerInput(0);
      setproteinTotal(0);
    }
  };

  const editTask = (index, newOption, newInteger) => {
    const updatedTasks = [...tasks];
    setproteinTotal(selectedOption * integerInput)
    updatedTasks[index] = { option: newOption, integer: newInteger, total: proteinTotal };
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const calculateTotal = () => {
    const total = tasks.reduce((acc, task) => acc + (task.option === '' || task.integer === 0 ? 0 : task.integer), 0);
    return total;
  };

  return (
    <div>
      <div>
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">Select Food</option>
          <option value="8">Egg 🥚 8g</option>
          <option value="7">Yeast ⚗️ 7g</option>
          <option value="20">Protein Shake 🧉 20g</option>
          <option value="3">Bacon 🥓 3g</option>
          <option value="8.0">Peanut Butter 🥜 8.0g</option>
          <option value="4">Walnuts 🌰 4g</option>
          <option value="22">Chicken 🍗 22g</option>
          <option value="26">Tuna 🐟 26g</option>
        </select>
        <input type="number" value={integerInput} onChange={handleIntegerChange} />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            editTask={(newOption, newInteger) => editTask(index, newOption, newInteger)}
            deleteTask={() => deleteTask(index)}
          />
        ))}
      </ul>
      <div>Total: {calculateTotal()}g</div>
    </div>
  );
}

function Task({ task, editTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedOption, setEditedOption] = useState(task.option);
  const [editedInteger, setEditedInteger] = useState(task.integer);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleEditOptionChange = (event) => {
    setEditedOption(event.target.value);
  };

  const handleEditIntegerChange = (event) => {
    setEditedInteger(parseInt(event.target.value, 10));
  };

  const saveEditedTask = () => {
    if (editedOption !== '' && editedInteger !== 0) {
      editTask(editedOption, editedInteger);
      toggleEdit();
    }
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <select value={editedOption} onChange={handleEditOptionChange}>
            <option value="8">Egg 🥚 8g</option>
            <option value="7">Yeast ⚗️ 7g</option>
            <option value="20">Protein Shake 🧉 20g</option>
            <option value="3">Bacon 🥓 3g</option>
            <option value="8.0">Peanut Butter 🥜 8.0g</option>
            <option value="4">Walnuts 🌰 4g</option>
            <option value="22">Chicken 🍗 22g</option>
            <option value="26">Tuna 🐟 26g</option>
          </select>
          <input type="number" value={editedInteger} onChange={handleEditIntegerChange} />
          <button onClick={saveEditedTask}>Save</button>
        </div>
      ) : (
        <div>
          {task.option}g * {task.integer} = {task.total}g
          <button onClick={toggleEdit}>Edit</button>
          <button onClick={deleteTask}>Delete</button>
        </div>
      )}
    </li>
  );
}

export default ListApp;
