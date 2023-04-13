import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage";
import UserList from "./Components/UserList";
import UserListData from "./Components/UserListData";
import Active from "./UserStatus/Active";
import Inactive from "./UserStatus/Inactive";
import Modal from "./Modal/Modal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="modal" element={<Modal />} />
          </Route>
          <Route path="user_list" element={<UserList />}>
            <Route path="active" element={<Active />} />
            <Route path="inactive" element={<Inactive />} />
          </Route>
          <Route path="user_list_data/:id" element={<UserListData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
