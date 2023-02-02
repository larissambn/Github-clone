import {Outlet} from "react-router-dom"
import classes from "./App.module.css"

function App() {
  return (
    <div className={classes.app}>
    <h1>Github Profiles</h1>
    <Outlet /> 
    </div>
  )
}

export {App};
