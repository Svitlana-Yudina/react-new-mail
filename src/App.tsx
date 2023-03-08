import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { HomePage } from './components/HomePage';
import { StartButton } from './components/StartButton';
import { Tracking } from './components/Tracking';
import { WarehouseList } from './components/WarehouseList';
import { Actions } from './types/types';

export const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app__menu">
        <StartButton type={Actions.track} to="/track"/>
        <StartButton type={Actions.adresses} to="/adresses"/>
      </div>

      <div className="app__content">
        <Routes>
          <Route path="/home" element={(<Navigate to="/" replace />)} />
          <Route path="/" element={(<HomePage />)} />
          <Route path="/track" element={(<Tracking />)} />
          <Route path="/adresses" element={(<WarehouseList />)} />
        </Routes>
      </div>
    </div>
  );
}
