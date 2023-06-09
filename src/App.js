import './App.css';
import Calendar from "./components/CalendarComponent"
import Diary from "./components/DiaryPage"
import DiaryView from "./components/DiaryView"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import MyPage from './components/MyPage'

function App() {
  return (    
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<Calendar/>}></Route>
        <Route path={"/calendar"} element={<Calendar/>}></Route>
        <Route path={"/login"} element={<Login/>}></Route>
        <Route path={"/signup"} element={<SignUp/>}></Route>
        <Route path="/diary/:date" element={<Diary/>}></Route>
        <Route path="/diary_view/:date" element={<DiaryView/>}></Route>
        <Route path="/mypage" element={<MyPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
