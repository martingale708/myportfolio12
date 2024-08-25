import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/index'
import Error from '../pages/error'

const RoutesPath = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error />} />
      </Routes>
  )
}

export default RoutesPath
