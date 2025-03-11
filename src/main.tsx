import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { DataProvider } from './DataContext.tsx'
import './index.css'

ReactDOM
  .createRoot(document.getElementById('root')!)
  .render(
    <DataProvider>
      <App />
    </DataProvider>
  )
