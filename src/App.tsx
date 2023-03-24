import React from 'react';
import { Menu_parametre } from './components/Menu_parametre';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Test from './pages/Test';

export function App(){
  return(
    <>
      <div className="App">
        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <BrowserRouter>
              <Routes>
                <Route path="/src/pages/Test.tsx" element={<Test />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
      <Menu_parametre/> 
    </>
  );
}
export default App;