import React from 'react';
import AddTodo from './AddTodo'; // Correct path
import Todo from './Todo';       // Correct path

function Dashboard() {
  return (
    <div>
      {/* AddTodo Component */}
      <AddTodo />
      
      {/* Todo Component */}
      <Todo />
    </div>
  );
}

export default Dashboard;

