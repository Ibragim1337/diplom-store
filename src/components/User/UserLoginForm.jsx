import React, { useState } from "react";

import styles from '../../styles/User.module.css';

import CLOSE from '../../images/x-symbol-svgrepo-com.svg';
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/user/userSlice";

const UserLoginForm = ({ toggleCurrentFormType, closeForm }) => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const handleChange = ({ target: {value, name}}) => {
    setValues({ ...values, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmpty = Object.values(values).some((val)=> !val);

    if(isEmpty) return;

    dispatch(loginUser(values));
    closeForm();
  } 

    return(
      <div className={styles.wrapper}>
        <div className={styles.close} onClick={closeForm}>
          <img src={CLOSE} />
        </div>

        <div className={styles.title}>
          Log in
        </div>

        <form action="" className={styles.form} onSubmit={handleSubmit}>
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
            type="password" 
            name="password" 
            placeholder="Your password" 
            value={values.password} 
            autoComplete="off" 
            onChange={handleChange}
            required/>
          </div>

          <div className={styles.link} onClick={() => toggleCurrentFormType('signup')}>
            Create an account
          </div>

          <button type="submit"
          className={styles.submit}>
            Log in
          </button>
        </form>
      </div>
    )
}

export default UserLoginForm;