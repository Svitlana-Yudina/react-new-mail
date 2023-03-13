import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './api/reduxStore/store';
import './App.scss';
import { Question } from './components/Question';
import { StartButton } from './components/StartButton';
import { Tracking } from './components/Tracking';
import { Warehouse } from './components/Warehouse';
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
          <Route path="/" element={(
            <Question message={'Що бажаєте переглянути?'} />
          )} />
          <Route path="/track" element={(<Tracking />)} />
          <Route path="/adresses" element={(
            <Provider store={store}>
              <Warehouse />
            </Provider>
          )} />
        </Routes>
      </div>
    </div>
  );
}
