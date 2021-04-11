import React from 'react';

// Router
/* import { BrowserRouter, Route } from 'react-router-dom';
 */
import { Router, Route } from 'react-router-dom';
import history from './history';

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
        {/*      No BrowserRouter */}

        <Router history={history}>
          {/* Header */}
          <Header />
          {/* Container */}
          <div className='flex flex-col container max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
            <div className=' container mx-auto px-4 mx-auto px-4 py-6 sm:px-0'>
              <div className=' border-4 border-dashed border-gray-200 rounded-lg'>
                {/* Routes */}
                <Route path='/' exact component={List} />
                <Route path='/streams/new' exact component={Create} />
                {/* EDIT */}
                <Route path='/streams/edit/:id' exact component={Edit} />
                <Route path='/streams/delete/:id' exact component={Delete} />
                <Route path='/streams/show' exact component={Show} />
              </div>
            </div>
          </div>
        </Router>
      </main>
    </>
  );
};

export default App;
