import React , {useState} from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [data,setData] = useState(
    {
      username:'',
      password:''
    }
  );

  const { username, password} =data
  const changehandler = e => {
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const submithandler = e => {
  e.preventDefault()
  console.log(data);
  }

  return (
    <div className="App">
      <center>
        <form onSubmit= {submithandler}>
          <h1> login form </h1>
          <input type="text" name="username" value= {username}  onChange= {changehandler} /><br />
          <input type="password" name="password" value= {password} onChange={changehandler} /><br />
          <input type="submit" name="submit" /><br />
        </form>
      </center>
    </div>
  )
}

export default App;
