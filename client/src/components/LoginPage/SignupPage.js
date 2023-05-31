import React, { useState } from "react";
import swal from 'sweetalert';

function SignUp(props) {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(firstName, lastName, email, password);
    fetch("http://localhost:3005/auth/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== null) {
          swal({
            title: "Succefully Registered!",
            icon: "success",
            button: "Log In",
          }).then(() => {
            props.onHandleLogin();
          });
          
        }
      });
  };

  return (
    <div className="justify-center flex h-screen place-items-center">
      <div className="w-1/4 ">
        <form className="mt-10" onSubmit={handleSubmit}>
          <div class="relative z-0  mb-6 flex justify-center">
            <input
              type="text"
              name="floating_firstName"
              id="floating_firstName"
              class="font-sans font-semibold block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => setfirstName(e.target.value)}
            />
            <label
              for="floating_firstName"
              class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First Name
            </label>
          </div>
          <div class="relative z-0  mb-6 flex justify-center">
            <input
              type="text"
              name="floating_lastName"
              id="floating_lastName"
              class="font-sans font-semibold block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => setLname(e.target.value)}
              required
            />
            <label
              for="floating_lastName"
              class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last Name
            </label>
          </div>
          <div class="relative z-0  mb-6 flex justify-center">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              class="font-sans font-semibold block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div class="relative z-0 mb-6 flex justify-center">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              class="font-sans font-semibold block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label
              for="floating_password"
              class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <button
            className="bg-gray-700 w-full mt-5 h-auto p-3 rounded-lg  dark:shadow-gray-800 text-white hove hover:bg-sky-700"
            type="submit"
          >
            SignUp
          </button>
          <div className="flex justify-end">
          <button
            type="button"
            onClick={props.onHandleLogin}
            class="py-2.5 px-5 mr-2 mb-2 mt-5 text-sm font-medium text-white-900 focus:outline-none bg-grey-200 rounded-lg border border-gray-200 hover:bg-gray-100  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-200 hover:bg-slate-400 dark:bg-gray-200  dark:border-gray-200  "
          >
            <span className="underline-offset-3 underline">Login ?</span>
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
