import React from "react";

import styles from "./styles.module.css";
const Card = ({ data, show, saveHandle, deleteHandle }) => {
  return (
    <div className={styles.card__container}>
      <img src={data.picture.medium} alt={data.name.first} />

      <h3>
        {data.name.first} {data.name.last}
      </h3>
      <p>
        <span>{data.gender}</span> | <span>{data.dob.age} years</span>
      </p>
      <div className={styles.contact}>
        <h5>Contact</h5>

        <a href={`mailto:${data.email}`}>
          {" "}
          <i className="fa-solid fa-envelope"></i> <span>{data.email}</span>{" "}
        </a>
      </div>
      <div className={styles.actions}>
        {show ? (
          <button className={styles.save__btn} onClick={() => saveHandle(data)}>
            Save
          </button>
        ) : null}

        <button
          className={styles.delete__btn}
          onClick={() => deleteHandle(data)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
