import React from 'react';
import Header from './components/Header';
import Post from './components/Post';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Post />} />
        <Route path={'/login'} element={<div>Login page</div>} />
      </Route>
    </Routes>
  );
}

export default App;
