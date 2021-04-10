import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from './Header';
import Create from './streams/Create';
import Delete from './streams/Delete';
import Edit from './streams/Edit';
import List from './streams/List';
import Show from './streams/Show';

const App = () => {
  return (
    <>
      <Header />
      <header class='bg-white shadow'>
        <div class='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
          <h1 class='text-3xl font-bold text-gray-900'>Dashboard</h1>
        </div>
      </header>
      <main>
        <div class='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
          <BrowserRouter>
            <Route path='/' exact component={List} />
            <Route path='/streams/edit' exact component={Edit} />
            <Route path='/streams/delete' exact component={Delete} />
            <Route path='/streams/show' exact component={Show} />
            <Route path='/streams/create' exact component={Create} />
          </BrowserRouter>
          <div class='px-4 py-6 sm:px-0'>
            <div class='border-4 border-dashed border-gray-200 rounded-lg h-96'></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
