import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPost from './Component/AddPost';
import SearchPost from './Component/SearchPost';
import DeletePost from './Component/DeletePost';
import ViewAllPost from './Component/ViewAllPost';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<AddPost/>}/>
    <Route path='/Search' element={<SearchPost/>}/>
    <Route path='/Delete' element={<DeletePost/>}/>
    <Route path='/View' element={<ViewAllPost/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
