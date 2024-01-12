import { MainLayout } from 'shared/layout/MainLayout'

import './App.scss'
import { AppRouter } from './providers/Router'

function App () {
  return (
    <div className="App">
      <MainLayout content={<AppRouter />} />
    </div>
  )
}

export default App
