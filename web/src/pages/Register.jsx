import axios from "axios";
import { motion } from "framer-motion";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import BitcoinLogo from "../components/BitcoinLogo";
import { AuthContext } from "../context/AuthContext";
import useQuery from "../hooks/useQuery";

const Register = () => {
  const { replace } = useHistory();
  const query = useQuery();

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

  const { user, setUser } = React.useContext(AuthContext);
  const [error, setError] = React.useState(null);

  const [formInput, setFormInput] = React.useState({
    email: "",
    username: "",
    password: "",
  });

  React.useEffect(() => {
    if (user !== null) {
      replace("/dashboard");
    }
  }, [user, replace]);

  const submitForm = (e) => {
    e.preventDefault();

    axios
      .post(
        `http://localhost:4000/auth/register?ref=${query.get("ref")}`,
        // `http://localhost:4000/auth/register?ref=${query.get("ref")}`,
        formInput
      )
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data);
        }
        setError(res.data.msg);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Login error: ", err);
      });

    e.target.reset();
    console.log(error);
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
        className='col-span-12 lg:col-span-7 flex flex-col space-y-4 items-center justify-center px-10 lg:px-36'
      >
        <div className='self-start'>
          <h4 className='text-4xl font-semibold'>Create Account</h4>
          <p className='font-semibold text-gray-700'>
            Create an account to start earning
          </p>
        </div>
        <form
          className='flex flex-col space-y-2 items-center justify-center w-full'
          onSubmit={submitForm}
        >
          <input
            required={true}
            type='text'
            placeholder='Username'
            name='username'
            onChange={(e) => {
              setFormInput({
                ...formInput,
                username: e.target.value,
              });
            }}
            className='bg-indigo-500 bg-opacity-30 focus:outline-none px-4 py-2 rounded-lg w-full'
          />
          <input
            required={true}
            type='email'
            placeholder='Email'
            name='email'
            onChange={(e) => {
              setFormInput({
                ...formInput,
                email: e.target.value,
              });
            }}
            className='bg-indigo-500 bg-opacity-30 focus:outline-none px-4 py-2 rounded-lg w-full'
          />
          <input
            required={true}
            type='password'
            placeholder='Password'
            name='password'
            onChange={(e) => {
              setFormInput({
                ...formInput,
                password: e.target.value,
              });
            }}
            className='bg-indigo-500 bg-opacity-30 focus:outline-none px-4 py-2 rounded-lg w-full'
          />
          <p className='text-red-700 font-bold self-start capitalize'>
            {error && error}
          </p>
          <button className='btn w-full'>Submit</button>
          <Link to='/login' className='text-us font-semibold py-4'>
            Already have an account, Login
          </Link>
        </form>
      </motion.div>
    </div>
  );
};

export default Register;
