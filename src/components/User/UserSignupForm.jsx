import React, { useState } from "react";

import styles from '../../styles/User.module.css';

import CLOSE from '../../images/x-symbol-svgrepo-com.svg';

const UserSignupForm = ({ closeForm }) => {

  const [values, setValues] = useState({
    name:'',
    email: '',
    password: ''
  });

  const handleChange = ({ target: {value, name}}) => {
    setValues({ ...values, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmpty = Object.values(values).every(val=>val);

    if(isEmpty) return;
  } 

    return(
      <div className={styles.wrapper}>
        <div className={styles.close} onClick={closeForm}>
          <img src={CLOSE} />
        </div>

        <div className={styles.title}>
          Sign Up
        </div>

        <form action="" className={styles.form}>
          <div className={styles.group}>
            <input 
            type="email" 
            name="email" 
            placeholder="Your email" 
            value={values.email} 
            autoComplete="off" 
            onChange={handleChange}
            required/>
          </div>

          <div className={styles.group}>
            <input 
            type="text" 
            name="name" 
            placeholder="Your name" 
            value={values.name}  
            autoComplete="off" 
            onChange={handleChange}
            required/>
          </div>

          <div className={styles.group}>
            <input 
            type="password" 
            name="password" 
            placeholder="Your password" 
            value={values.password} 
            autoComplete="off" 
            onChange={handleChange}
            required/>
          </div>

          <div className={styles.link}>
            I already have an account
          </div>

          <button type="submit"
          className={styles.submit}>
            Create an account
          </button>
        </form>
      </div>
    )
}

export default UserSignupForm;