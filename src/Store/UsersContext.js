import { createContext, useEffect, useState } from "react";

const UserContext = createContext({
  contacts: [],
  saveUser: (newUser) => {},
  deleteUser: (oldUser) => {},
});

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const saveUser = (newUsers) => {
    setUsers((prevState) =>
      [...prevState, newUsers].sort(
        ({ dob: dob1 }, { dob: dob2 }) => dob1.age - dob2.age
      )
    );
  };

  const deleteUser = (oldUser) => {
    setUsers((prevState) =>
      prevState.filter((item) => item.id.value !== oldUser.id.value)
    );
  };

  return (
    <UserContext.Provider value={{ contacts: users, saveUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
