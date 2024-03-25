import React, { useState } from "react";

import styles from '../../styles/Profile.module.css';
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../features/user/userSlice";


const Profile = () => {

  const dispatch = useDispatch();
  const { currentUser } = useSelector(({ user }) => user);

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

    const isEmpty = Object.values(values).some((val)=> !val);

    if(isEmpty) return;

    dispatch(updateUser(values));
  }

  return (
    <section className={styles.profile}>
      {!currentUser ? <span> You need to login </span> : (
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

        <button type="submit" className={styles.submit}>
            Update
          </button>

        </form>
      )}
    </section>
  )
}

export default Profile;