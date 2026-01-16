import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import Nav from './components/Nav.jsx'
import TaskListPage from './pages/TaskListPage.jsx'
import TaskDetailsPage from './pages/TaskDetailsPage.jsx'
import HomePage from './pages/HomePage.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<Nav />}>
          <Route index element={<HomePage />} />
          <Route path='/tasks' element={<TaskListPage />}/>
          <Route path='/tasks/:id' element={<TaskDetailsPage />}/>
        </Route>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>

    </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
