import './App.css'
import './index.css'
import Nav from './components/Nav.jsx'
import TaskListPage from './pages/TaskListPage.jsx'
import TaskDetailsPage from './pages/TaskDetailsPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import { Routes, Route } from 'react-router'

function App() {
  return (
    <>
       <Routes>
        <Route element={<Nav />}>
          <Route index element={<HomePage />} />
          <Route path='/tasks' element={<TaskListPage />}/>
          <Route path='/tasks/:id' element={<TaskDetailsPage />}/>
        </Route>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>

    </>
  )
}

export default App
