import React from "react";
import "./styles.css";

const APIURL = "https://jsonplaceholder.typicode.com/users";
function App() {

  const getUsers = () => {
    //write code here
    //render the list of users
  }
  const sortList = () => {
      //write code here
      // sort the user list by name's length
      // on first click list will sorted in assending order
      // on second click list will be sorted in descending order
      // on third click default list will be rendered
      // on fourth click again start form step 1
  }
  
  return (
    <main>
      <h1>User List</h1>
      <div>
        <button onClick={getUsers}>Get Users</button>
        <button onClick={sortList}>Sort list </button>
      </div>
      <ul>
        {/*render the list of the users */}
      </ul>
    </main>
  )
}

export default App;