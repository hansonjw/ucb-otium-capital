import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import Auth from '../utils/auth';

 
const Home = () => {

  return (
    <div>
      <h2>Homepage</h2>
      <div>
        <Link to="/stockquery">go get stock data!</Link>
      </div>
    </div>
  );
};

export default Home
 
