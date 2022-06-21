import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Bounce from "react-reveal/Bounce";
import Snackbar from "@mui/material/Snackbar";

import Loading from "../../Components/Loading/Loading";
import UserCard from "../../Components/Card/Card";
import UserCtx from "../../Store/UsersContext";
import { foundUser } from "../../Utils/utils";

const Home = () => {
  const [users, setUsers] = useState();
  const [show, setShow] = useState(false);
  const [hint, setHint] = useState({ msg: "", isError: false });

  const { saveUser, deleteUser, contacts } = useContext(UserCtx);

  const fetchUsers = () => {
    axios
      .get(
        `https://randomuser.me/api/?results=10&inc=gender,name,dob,email,picture,id`
      )
      .then((res) => {
        const userSorting = res.data.results.sort(
          ({ dob: dob1 }, { dob: dob2 }) => dob1.age - dob2.age
        );
        setUsers(userSorting);
      })
      .catch((error) => {
        setHint({ msg: "error eccoure try again", isError: true });
        setShow(true);
        console.log("error when fetch users", error);
      });
  };

  const saveHandle = (item) => {
    if (foundUser(contacts, item)) {
      setHint({ isError: true, msg: "User already exists" });
    } else {
      saveUser(item);
      setHint({ isError: false, msg: "Saved successfully" });
    }
    setShow(true);
  };

  const deleteHandle = (item) => {
    if (foundUser(contacts, item)) {
      deleteUser(item);
      setHint({ isError: false, msg: "User deleted success" });
    } else {
      setHint({ isError: true, msg: "User not exists" });
    }
    setShow(true);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className={`container wrapper `}>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={show}
        onClose={() => setShow(false)}
        message={hint.msg}
        className={hint.isError ? "alert__danger" : "alert__success"}
        autoHideDuration={2000}
      />
      <div className="row">
        {users ? (
          users.length ? (
            users.map((item, idx) => (
              <div className="col-md-6 col-xs-12" key={idx}>
                <Bounce>
                  <UserCard
                    data={item}
                    show={true}
                    saveHandle={saveHandle}
                    deleteHandle={deleteHandle}
                  />
                </Bounce>
              </div>
            ))
          ) : (
            <div className="col-12 no_users ">
              <i className="fa-solid fa-users"></i>
              <h6>No users found</h6>
            </div>
          )
        ) : (
          <div className="col-12 lottie__container">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
