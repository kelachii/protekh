import './Home.scss';
import { Outlet, Route, Routes } from 'react-router-dom'
import ReactDOM from "react-dom/client";
import SharedLayout from './component/SharedLayout';
import Home from './component/pages/Home';
import Footer from './component/Footer';



export default function App() {

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Outlet />

      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
