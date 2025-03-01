import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Food from './pages/Food.jsx'
import Ingredients from './pages/Ingredients.jsx'
import { Provider } from 'react-redux'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path= '/'
      element={<App />}
    >
      <Route path='' element={<Home />}/>
      <Route path='/food-name' element={<Food />}/>
      <Route path='/ingredients' element={<Ingredients />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
      {/* <Provider store={store}> */}
        <RouterProvider router={router}/>
      {/* </Provider> */}
  </StrictMode>
)
