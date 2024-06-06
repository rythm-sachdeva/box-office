import { Outlet } from "react-router-dom"
import Navs from "./Navs"

function MainLayout() {

  return (
   <div>
    <h1>Box Office</h1>
   <Navs/>
  <Outlet/>
  </div>
  )
}

export default MainLayout