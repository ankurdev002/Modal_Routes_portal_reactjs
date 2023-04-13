import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import UserList from "./UserList";
import UserListData from "./UserListData";
import Active from "./Active";
import Inactive from "./Inactive";
import Modal from "./Modal";

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
