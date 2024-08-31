
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import GitHub, { githubInfoloader } from './components/github/Github.jsx'
import User from './components/user/User.jsx'

const router = createBrowserRouter([{
  path:'/',
  element:<Layout/>,
  children:[{
    
      path:'home',
      element:<Home/>
  },
  {
    path:'about',
    element:<About/>
},
  {
     path:'contact',
     element:<Contact/>
  },
  {
    path:'user/:userid',
    element:<User/>
  },
  {
    
      path: 'github',
      element: <GitHub />,
      loader: githubInfoloader,
    
  }
]
}])

createRoot(document.getElementById('root')).render(
   <RouterProvider router={router}/>

)
