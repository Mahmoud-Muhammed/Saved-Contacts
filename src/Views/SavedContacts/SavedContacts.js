import { useState, useContext } from "react";
import Bounce from "react-reveal/Bounce";
import Snackbar from "@mui/material/Snackbar";

import UserCard from "../../Components/Card/Card";
import UserCtx from "../../Store/UsersContext";
import { foundUser } from "../../Utils/utils";

const SavedContacts = () => {
  const [show, setShow] = useState(false);
  const [hint, setHint] = useState({ msg: "", isError: false });
  const { deleteUser, contacts } = useContext(UserCtx);

  const deleteHandle = (item) => {
    if (foundUser(contacts, item)) {
      deleteUser(item);
      setHint({ isError: false, msg: "User deleted success" });
    } else {
      setHint({ isError: true, msg: "User not exists" });
    }
    setShow(true);
  };
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
        {contacts.length ? (
          contacts.map((item, idx) => (
            <div className="col-md-6 col-xs-12" key={idx}>
              <Bounce>
                <UserCard data={item} deleteHandle={deleteHandle} />
              </Bounce>
            </div>
          ))
        ) : (
          <div className="col-12 no_users ">
            <i className="fa-solid fa-users"></i>
            <h6>No Contacts saved</h6>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedContacts;
