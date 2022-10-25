import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../layout/pages/Footer';
import Header from '../layout/pages/Header';
import Navber from '../layout/pages/Navber';

const Main = () => {
    return (
        <div>
            <div>
                <Navber></Navber>
                
            </div>
          <div>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Main;