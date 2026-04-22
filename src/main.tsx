import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Styles
import './index.css'

// Views
import Home from './views/Home'
import Error404 from './views/Error404'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/linux_cheatSheet">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>
)
