import { Routes, Route } from 'react-router-dom'
import { History } from '../pages/History/History'
import { Home } from '../pages/Home/Home'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
    </Routes>
  )
}
