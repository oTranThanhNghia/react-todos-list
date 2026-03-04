import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { TodoList } from './screens/todo-list';
import { TodoDetail } from './screens/todo-detail';
import { PATH } from './navigation/path';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path={PATH.TODO_LIST} element={<TodoList />} />
          <Route path={PATH.TODO_DETAIL} element={<TodoDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
