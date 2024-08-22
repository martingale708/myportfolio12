import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/index'
import Error from '../pages/error'

const RoutesPath = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default RoutesPath
