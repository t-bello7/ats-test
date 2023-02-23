import { Routes, Route } from 'react-router-dom';
import AddUser from './pages/AddUser';
import Home from './pages/Home';
import Layout from './components/layouts/Layout';

const App = () => {
  return (
    <>
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="/" element={<AddUser />} />
        <Route path="/home" element={<Home />} />
       </Route>
    </Routes>
    </>
  )
}

export default App
