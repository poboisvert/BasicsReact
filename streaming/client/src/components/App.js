import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// components
import Header from './Header';
import Create from './streams/Create';
import Delete from './streams/Delete';
import Edit from './streams/Edit';
import List from './streams/List';
import Show from './streams/Show';

const App = () => {
  return (
    <>
      <main>
        <BrowserRouter>
          <Header />
          <div className='flex flex-col container max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
            <div className=' container mx-auto px-4 mx-auto px-4 py-6 sm:px-0'>
              <div className=' border-4 border-dashed border-gray-200 rounded-lg'>
                <Route path='/' exact component={List} />
                <Route path='/streams/new' exact component={Create} />
                <Route path='/streams/edit' exact component={Edit} />
                <Route path='/streams/delete' exact component={Delete} />
                <Route path='/streams/show' exact component={Show} />
              </div>
            </div>
          </div>
        </BrowserRouter>
      </main>
    </>
  );
};

export default App;
