import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import router from './routes/index.tsx'
import './main.styles.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className='dark-theme application-base'>
      <RouterProvider router={router} />
    </main>
  </StrictMode>
)
