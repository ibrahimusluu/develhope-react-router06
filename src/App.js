import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { CarDetails } from "./CarDetails";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { DisplayLanguage } from "./DisplayLanguage";
import { GithubUserList } from "./GithubUserList";
import { LanguageContext } from "./LanguageContext";
import { ShowGithubUser } from "./ShowGithubUser";
import { Welcome } from "./Welcome";

export function App() {
  const [language, setLanguage] = useState("en");

  function handleLanguageSwitch(event) {
    setLanguage(event.target.value);
  }

  return (
    <div>
      <select value={language} onChange={handleLanguageSwitch}>
        <option value="en">English</option>
        <option value="tr">Türkçe</option>
        <option value="some">Some Language</option>
      </select>
      <LanguageContext.Provider value={language}>
        <Container title="My App Title">
          <br />
          <Link to="/">Welcome Page</Link>
          <br />
          <Link to="/counter">Counter Page</Link>
          <br />
          <Link to={"/users/"}>Users Page</Link> <br />
          <br />
          <br />
          <Routes>
            <Route
              path="*"
              element={
                <div>
                  <b>404:</b> Page Not Found
                </div>
              }
            />
            <Route path="/" element={<Welcome name="John" age={19} />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="users" element={<GithubUserList />}>
              {/* <Route path="/:username" element={<ShowGithubUser />} /> Uncaught Error: Absolute route path "/:username" nested under path "/users" is not valid. An absolute child route path must start with the combined path of all its parent routes. */}
              <Route path=":username" element={<ShowGithubUser />} />
            </Route>
            {/* <Route path="users/user" element={<ShowGithubUser />}>
              <Route path=":username" element={<ShowGithubUser />} />
            </Route> */}
            {/* <Route path="users/:username" element={<ShowGithubUser />} /> */}
            <Route path="/language" element={<DisplayLanguage />} />
            <Route
              path="/car"
              element={
                <CarDetails model="Ford Focus" year={2000} color="gray" />
              }
            />
          </Routes>
        </Container>
      </LanguageContext.Provider>
    </div>
  );
}

// import React, { useState } from "react";
// import { CarDetails } from "./CarDetails";
// import { Container } from "./Container";
// import { DisplayLanguage } from "./DisplayLanguage";
// import { LanguageContext } from "./LanguageContext";

// export function App() {
//   const [language, setLanguage] = useState("en");

//   function handleLanguageSwitch(event) {
//     setLanguage(event.target.value);
//   }

//   return (
//     <div>
//       <select value={language} onChange={handleLanguageSwitch}>
//         <option value="en">English</option>
//         <option value="tr">Türkçe</option>
//         <option value="some">Some Language</option>
//       </select>
//       <LanguageContext.Provider value={language}>
//         <Container title="My App Title">
//           <DisplayLanguage />
//           <CarDetails model="Ford Focus" year={2000} color="gray" />
//         </Container>
//       </LanguageContext.Provider>
//     </div>
//   );
// }

// import React from "react";
// import { CarDetails } from "./CarDetails";
// import { Container } from "./Container";
// import { DisplayLanguage } from "./DisplayLanguage";
// import { LanguageContext } from "./LanguageContext";

// export class App extends React.Component {
//   state = {
//     language: "en",
//   };

//   handleLanguageSwitch = (event) => {
//     this.setState({
//       language: event.target.value,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <select
//           value={this.state.language}
//           onChange={this.handleLanguageSwitch}
//         >
//           <option value="en">English</option>
//           <option value="tr">Türkçe</option>
//           <option value="some">Some Language</option>
//         </select>
//         <Container title="My App Title">
//           <LanguageContext.Provider value={this.state.language}>
//             <DisplayLanguage />
//             <CarDetails model="Ford Focus" year={2000} color="gray" />
//           </LanguageContext.Provider>
//         </Container>
//       </div>
//     );
//   }
// }

// // import { Hello } from "./Hello";
// import React from "react";
// import { CarDetails } from "./CarDetails";
// import { Container } from "./Container";
// // import { FilteredList } from "./FilteredList";
// // import { Form } from "./Form";
// // import { Sum } from "./Sum";
// // import { DisplayLanguage } from "./DisplayLanguage";
// // import { LanguageContext } from "./LanguageContext";
// // import { TodoList } from "./TodoList";
// // import { Counter } from "./Counter";
// // import { GithubUser } from "./GithubUser";
// // import { GithubUserList } from "./GithubUserList";
// // import { ClickTracker } from "./ClickTracker";
// // import { InteractiveWelcome } from "./InteractiveWelcome";
// // import { Login } from "./Login";
// // import { UncontrolledLogin } from "./UncontrolledLogin";

// // const todos = [
// //   { id: 1, title: "Call Katherine about the trip", completed: false },
// //   { id: 2, title: "Buy tickets", completed: true },
// //   { id: 3, title: "Finish the presentation", completed: false },
// //   { id: 4, title: "Invite John", completed: true },
// //   { id: 5, title: "Rent a car", completed: false },
// // ];

// // const people = [
// //   { id: 1, name: "ibrahim", age: 26 },
// //   { id: 2, name: "Hasan", age: 28 },
// //   { id: 3, name: "Antonio", age: 27 },
// //   { id: 4, name: "Adrian", age: 35 },
// // ];

// export class App extends React.Component {
//   // defaultLoginStatus = {
//   //   status: "failure!",
//   // };

//   state = {
//     language: "en",
//   };

//   handleLanguageSwitch = (event) => {
//     this.setState({
//       language: event.target.value,
//     });
//   };

//   render() {
//     return (
//       <div>
//         {/* <select
//           value={this.state.language}
//           onChange={this.handleLanguageSwitch}
//         >
//           <option value="en">English</option>
//           <option value="tr">Türkçe</option>
//           <option value="some">Some Language</option>
//         </select> */}
//         <Container title="My App Title">
//           {/* <Sum /> */} {/* Proper Way */}
//           {/*<Sum numbers={undefined} /> */} {/* First Way */}
//           {/* <Sum numbers={[1, 2, 3, 4, 5]} /> */} {/* Second Way */}
//           {/* <LanguageContext.Provider value={this.state.language}>
//             <DisplayLanguage />
//           </LanguageContext.Provider> */}
//           {/* <Hello /> */}
//           {/* <GithubUser /> */}
//           {/* <GithubUser username="ibrahimusluu" /> */}
//           {/* <GithubUserList usernames={["test", "test2"]} /> */}
//           {/* <GithubUserList /> */}
//           {/* <Form /> */}
//           <CarDetails model="Ford Focus" year={2000} color="gray" />
//           {/* <FilteredList peopleList={people} /> */}
//           {/* <Counter
//             initialValue={5}
//             incrementAmount={2}
//             incrementInterval={2000}
//           /> */}
//           {/* <Counter /> */}
//           {/* <ClickTracker /> */}
//           {/* <InteractiveWelcome /> */}
//           {/* <Login login="test" /> */}
//           {/* <UncontrolledLogin login={this.defaultLoginStatus} /> */}
//           {/* <TodoList
//           // items = this.state.item
//           render={(items, handleEvent) => {
//             console.log(items);
//             // console.log(handleEvent);
//             return (
//               <ul>
//                 {items.map((item, index) => (
//                   <li key={item.id}>
//                     {item.title}
//                     <button
//                       className="remove_buttons"
//                       // onClick={() => this.handleClickRemoveButton(index)}
//                       onClick={() => handleEvent(index)}
//                       // onClick={(e) => {
//                       //   this.handleClickRemoveButton(e.target);
//                       // }}
//                     >
//                       Remove the Item
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             );
//           }}
//         ></TodoList> */}
//           {/* Second Way */}
//           {/* <TodoList
//         // items = this.state.item
//         >
//           {(items, handleEvent) => {
//             console.log(items);
//             // console.log(handleEvent);
//             return (
//               <ul>
//                 {items.map((item, index) => (
//                   <li key={item.id}>
//                     {item.title}
//                     <button
//                       className="remove_buttons"
//                       // onClick={() => this.handleClickRemoveButton(index)}
//                       onClick={() => handleEvent(index)}
//                       // onClick={(e) => {
//                       //   this.handleClickRemoveButton(e.target);
//                       // }}
//                     >
//                       Remove the Item
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             );
//           }}
//         </TodoList> */}
//         </Container>
//       </div>
//     );
//   }
// }
