import { RouterProvider } from 'react-router-dom';
import './App.css';
import Router from './Router/Routes/Router';

function App() {
  return (
    <div className='max-w-[1040px] mx-auto'>
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
