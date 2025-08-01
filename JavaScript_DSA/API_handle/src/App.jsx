import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import UseEffect_Component from './dataFetching/with_UseEffect/UseEffect_Component';
import Suspense_Component from './dataFetching/with_suspense/Suspense_Component';
import UseAPI_Component from './dataFetching/with_use_api/UseAPI_Component';
import SWR_Component from './dataFetching/with_swr/SWR_Component';
import UseQuery_Component from './dataFetching/with_useQuery/UseQuery_Component';
import ProductManager from './dataFetching/with_UseEffect/UseActions';

const App = () => {
  return (
    <div>
        <BrowserRouter>
           <Header />
            <Routes>
                <Route path="/" element={<ProductManager />} />
                <Route path="/suspense" element={<Suspense_Component />} />
                <Route path="/use" element={<UseAPI_Component />} />
                <Route path="/swr" element={<SWR_Component />} />
                <Route path="/useQuery" element={<UseQuery_Component />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;



const Header = () => {
    return (
        <header style={{ padding: '2px 1rem', backgroundColor: '#f0f0f0',display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1>DataFetching</h1>
            <nav>
                <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem' }}>
                    <li><Link to="/">UseEffect</Link></li>
                    <li><Link to="/suspense">Suspense</Link></li>
                    <li><Link to="/use">use API</Link></li>
                    <li><Link to="/swr">SWR</Link></li>
                    <li><Link to="/useQuery">useQuery</Link></li>
                </ul>
            </nav>
        </header>
    )
}