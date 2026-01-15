import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import HomePage from './pages/HomePage.jsx'
import Nav from './components/Nav.jsx'
import TaskListPage from './pages/TaskListPage.jsx'
import TaskDetailsPage from './pages/TaskDetailsPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Nav/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/tasks' element={<TaskListPage/>}></Route>
          <Route path='/tasks/:id' element={<TaskDetailsPage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
