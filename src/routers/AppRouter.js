import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
}
    from 'react-router-dom';
import { Edit } from '../components/Edit';
import { Home } from '../components/Home';
import { Navbar } from '../components/Navbar';

export const AppRouter = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/Home" element={<Home />} />
                    <Route exact path="/Edit" element={<Edit />} />
                </Routes>
            </Router>
        </div>
    )
}