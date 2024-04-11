import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import AddStudentPage from './pages/AddStudent';
import EditStudentPage from './pages/EditStudent';
import {ToastContainer} from 'react-toastify'
import Header from './component/common/header';
import NavBar from './component/common/navbar';
import Footer from './component/common/footer';
import MyInfoPage from './pages/MyInfoPage';
import DetailProductPage from './pages/DetailProductPage';


function App() {
  
  
  return (
      <>
      <Header/>
      <NavBar />
      <div className='content'>
        <Routes>
          <Route path='' element={<HomePage />}></Route>
          <Route path='/create-student' element={<AddStudentPage />}></Route>  
          <Route path='/edit-student' element={<EditStudentPage />}></Route>
          <Route path='/my-info' element={<MyInfoPage/>}></Route>
          <Route path='/detail-product' element={<DetailProductPage/>}></Route>
        </Routes>
      </div>
      <div className='footer'>
        <Footer/>
      </div>
      
      <ToastContainer></ToastContainer>
      </>
  );
}

export default App;
