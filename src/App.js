import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Home from "./Views/Home/Home";
import SavedContacts from "./Views/SavedContacts/SavedContacts";
import { UserContextProvider } from "./Store/UsersContext";

const App = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/saved-contacts" element={<SavedContacts />} />
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
};

export default App;
