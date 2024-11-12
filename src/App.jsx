import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'

const appRouter = createBrowserRouter([
  {path:"/", element:<Home/>},
  {path:"/login", element:<Login/>},
  {path:"/signup", element:<Signup/>},
  {path:"/jobs", element:<Jobs/>},
  {path:"/jobdescription/:id", element:<JobDescription/>},
  {path:"/browse", element:<Browse/>},
  {path:"/profile", element:<Profile/>}
])
function App() {

  return (
    <>
      <RouterProvider router={appRouter} />
      
    </>
  )
}

export default App