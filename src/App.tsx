import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import GetMoney from "./components/GetMoney/GetMoney";
import DepositMoney from "./components/DepositMoney/DepositMoney";
import ClientCard from "./components/ClientCard/ClientCard";
import Home from "./components/Home/Home";
import Change from "./components/Change/Change";
import BankInfo from "./components/BankInfo/BankInfo";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
            <Route path="/change" element={<Change/>}/>
            <Route path="/get" element={<GetMoney/>}/>
            <Route path="/deposit" element={<DepositMoney/>}/>
            <Route path="/card" element={<ClientCard/>}/>
        </Routes>
    );
};

export default App;
