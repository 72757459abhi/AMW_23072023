import React from 'react'
import classes from '../cssFile/Auth.module.css';
import { Link } from 'react-router-dom';

const Auth = (props) => {
  return (
    <main className={classes.auth}>

    <main className={classes.auth1}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <div className={classes.btn}>
            <Link to='/adminDashboard'><button onClick={ () => props.onLogIn()}> Login</button></Link>
          </div>
          
        </form>
      </section>
    </main>
    </main>
  );
};

export default Auth;
