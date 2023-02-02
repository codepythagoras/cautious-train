import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import BitcoinLogo from "../components/BitcoinLogo";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "60vw",
      transition: {
        staggerChildren: 0.5,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        mass: 0.4,
        damping: 8,
        staggerChildren: 0.4,
        when: "beforeChildren",
      },
    },
  };
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });

  const { replace } = useHistory();

  const { user, setUser } = useContext(AuthContext);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (user !== null) {
      replace("/dashboard");
    }
  }, [user, replace]);

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:4000/auth/login",
        // "http://localhost:4000/auth/login",
        formInput
      )
      .then(
        (res) => {
          if (res.status === 200) {
            setUser(res.data);
          }
          setError(res.data.msg);
        },
        (rej) => {
          console.log("rejection", rej);
        }
      )
      .catch((err) => {
        console.log("Login error: ", err);
        // setError(err);
      });

    e.target.reset();
  };

  return (
    <div className='grid grid-cols-12 w-screen overflow-hidden h-screen'>
      <div className='hidden lg:col-span-5 text-white px-6 lg:flex flex-col space-y-4 items-start justify-center login '>
        <div className='font-semibold text-uppercase flex flex-row space-x-2'>
          <BitcoinLogo />
          <span>Global Crypto</span>
        </div>
        <div className='text-3xl font-semibold'>
          Get <b className='font-bold'>earnings in Bitcoin</b> by investing with
          us.
        </div>
        <p>Effectively put your crypto to work and make more for yourself</p>
      </div>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
        className='col-span-12 lg:col-span-7  flex flex-col space-y-4 items-center justify-center px-10 lg:px-36'
      >
        <div className='self-start'>
          <h4 className='text-4xl font-semibold'>Login</h4>
          <p className='font-semibold text-gray-700'>
            Login into your account to earn more
          </p>
        </div>
        <form
          className='flex flex-col space-y-2 items-center justify-center w-full'
          onSubmit={submitForm}
        >
          <input
            type='email'
            placeholder='Email'
            name='email'
            className='bg-indigo-500 bg-opacity-30 focus:outline-none px-4 py-2 rounded-lg w-full'
            onChange={(e) => {
              setFormInput({
                ...formInput,
                email: e.target.value,
              });
            }}
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            className='bg-indigo-500 bg-opacity-30 focus:outline-none px-4 py-2 rounded-lg w-full'
            onChange={(e) => {
              setFormInput({
                ...formInput,
                password: e.target.value,
              });
            }}
          />
          <p className='text-red-700 font-bold self-start capitalize'>
            {error && error}
          </p>
          <button className='btn w-full' type='submit'>
            Submit
          </button>
          <Link to='/register' className='text-us font-semibold py-4'>
            Don't have an Account, Create One
          </Link>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
