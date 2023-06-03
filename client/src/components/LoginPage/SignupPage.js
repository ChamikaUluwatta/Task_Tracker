import React, { useState } from "react";
import swal from "sweetalert";

function SignUp(props) {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const sampleTaskList = [
    {
      taskName: "Website Redesign (Sample)",
      taskDescription:
        "Revamp the company's website to improve user experience and enhance visual appeal. This involves updating the design, layout, and content of the website, optimizing it for mobile devices, and integrating new features such as a blog and social media integration.",
      startDate: new Date("2023-01-01"),
      EstimatedDuration: 336,
    },
    {
      taskName: "Product Development (Sample)",
      taskDescription:
        "Develop a new product from ideation to launch. This includes conducting market research, creating product specifications, designing prototypes, testing and iterating, and coordinating with manufacturing partners for production.",
      StartDate: new Date("2023-07-01"),
      EstimatedDuration: 960,
    },
    {
      taskName: "Marketing Campaign (Sample)",
      taskDescription:
        "Plan and execute a comprehensive marketing campaign to promote a new product release. This involves defining target audience, developing marketing materials, running digital and traditional advertising campaigns, and analyzing campaign performance.",
      StartDate: new Date("2023-08-01"),
      EstimatedDuration: 160,
    },
    {
      taskName: "Data Analysis (Sample)",
      taskDescription:
        "Analyze customer data to gain insights and identify opportunities for business growth. This includes collecting and cleaning data, performing statistical analysis, creating visualizations, and presenting findings to stakeholders.",
      StartDate: new Date("2023-09-01"),
      EstimatedDuration: 240,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
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
        if (data.token !== null) {
          swal({
            title: "Succefully Registered!",
            icon: "success",
            button: "Log In",
          }).then(() => {
            props.onHandleLogin();
          });
          console.log(data);
          sampleTaskList.map((task) => {
            fetch(`http://localhost:3005/tasks/create`, {
              method: "POST",
              crossDomain: true,
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${data}`,
              },
              body: JSON.stringify({
                userId: data,
                taskDescription: task.taskDescription,
                taskDuration: task.EstimatedDuration,
                taskName: task.taskName,
                taskDate: task.StartDate,
              }),
            })
              .then((response) => {
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              });
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
