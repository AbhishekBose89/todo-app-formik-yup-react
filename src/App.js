import Login from './components/Login';
import './App.css';
import TodoList from './components/TodoList';
import { Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound';
import InvalidAccess from './components/InvalidAccess';
import Home from './components/Home';
import SignUp from './components/SignUp';
import LayOut from './components/LayOut';


function App() {

  return (
    <div className="App">
    
      <LayOut/>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/todolist' element={<TodoList />} />
        <Route path='/*' element={<NotFound />} />
        <Route path='/invalidaccess' element={<InvalidAccess />} />
      </Routes>

      
    </div>
  );
}

export default App;
