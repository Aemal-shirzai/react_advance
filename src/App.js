import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ListApp from './components/Lists/ListApp';
import TodosList from './components/Lists/TodosList';
import SimpleFormsApp from './components/forms/SimpleFormsApp';
import SimpleFormFileUpload from './components/forms/SimpleFormFileUpload';
import FormWithHook from './components/forms/FormWithHook';
import UseMemoEx from './components/memos/useMemoEx';
import UseStateApp from './components/hooks/usestateExample';

function App() {
  return (
    <div className="App">
    
      <NavBar />
    
      <div className='m-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/lists' element={<ListApp />} />
          <Route path='/lists_key' element={<TodosList />} />
          <Route path='/forms'>
            <Route index element={<SimpleFormsApp />}/>
            <Route path="simple_file_upload" element={<SimpleFormFileUpload />}/>
            <Route path="form_with_hook" element={<FormWithHook />}/>
          </Route>
          <Route path='/use_memo' element={<UseMemoEx />} />
          <Route path='/use_state' element={<UseStateApp />} />
        </Routes>
      </div>

    
    </div>
  );
}

export default App;
