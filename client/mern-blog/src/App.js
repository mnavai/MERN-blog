import React from 'react';
import Header from './components/Header';
import Post from './components/Post';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route index element={<main>
        <Header />
        <Post />
        <Post />
        <Post />
      </main>} />
      <Route path={'/login'} element={
        <div>Login page</div>
      } />
    </Routes>
  );
}

export default App;
