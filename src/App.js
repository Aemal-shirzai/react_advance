import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom';
import Home from './components/Home';
import ListApp from './components/Lists/ListApp';
import TodosList from './components/Lists/TodosList';
import SimpleFormsApp from './components/forms/SimpleFormsApp';
import SimpleFormFileUpload from './components/forms/SimpleFormFileUpload';
import FormWithHook from './components/forms/FormWithHook';
import UseMemoEx from './components/memos/UseMemoEx';
import UseStateApp from './components/hooks/UsestateExample';
import UseEffectApp from './components/hooks/UseEffectExample';
import UseReducerExample from './components/hooks/UseReducerExample';
import CustomHook from './components/hooks/CustomHook';
import JsxApp from './components/jsxExamples/JsxApp';
import HocCounterApp from './components/Hoc/counter/HocCounterApp';
import HocMouseTrackerApp from './components/Hoc/mouseTracker/HocMouseTrackerApp';
import RPCounterApp from './components/renderProps/counter/RPCounterApp';
import TestingApp from './components/testingPart/TestingApp';
import RootLayout from './components/layout/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='/lists' element={<ListApp />} />
      <Route path='/lists_key' element={<TodosList />} />
      <Route path='/forms'>
        <Route index element={<SimpleFormsApp />} />
        <Route path="simple_file_upload" element={<SimpleFormFileUpload />} />
        <Route path="form_with_hook" element={<FormWithHook />} />
      </Route>
      <Route path='/use_memo' element={<UseMemoEx />} />
      <Route path='/use_state' element={<UseStateApp />} />
      <Route path='/use_effect' element={<UseEffectApp />} />
      <Route path='/use_reducer' element={<UseReducerExample />} />
      <Route path='/custom_hook' element={<CustomHook />} />
      <Route path='/jsx' element={<JsxApp />} />
      <Route path='/hoc_counter' element={<HocCounterApp />} />
      <Route path='/hoc_mouse' element={<HocMouseTrackerApp />} />
      <Route path='/rp_counter' element={<RPCounterApp />} />
      <Route path='/testing' element={<TestingApp />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
