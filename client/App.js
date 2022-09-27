import Header from "./components/Header";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetail";
import AddBlog from "./components/AddBlog";
import styles from "./App.css";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";
function App() {
  const dispath = useDispatch();

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispath(authActions.login());
    }
  }, [dispath]);
  return (
    <React.Fragment>
      
      <header>
        <Header />
      </header>
      <main classname ={"styles.particle"}>
        <Routes>
          {!isLoggedIn ? (
            <Route path="/auth" element={<Auth />} />
          ) : (
            <>
              <Route path="/home" element={<Blogs />} />
              <Route path="/home/add" element={<AddBlog />} />
              <Route path="/myMusic" element={<UserBlogs />} />
              <Route path="/myMusic/:id" element={<BlogDetail />} />{" "}
            </>
          )}
        </Routes>
      </main>
      
    </React.Fragment>
  );
}

export default App;
