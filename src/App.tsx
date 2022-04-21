import { useId, useState } from "react";
import { useSelector } from "react-redux";
import Card from "./components/Card/Card";
import CountryList from "./components/CountryList/CountryList";
import Layout from "./components/Layout/Layout";
import './index.css'

function App() {
 
  const id = useId();
  return (

    <Layout>
      <CountryList />
    </Layout>
      
   
  );
}

export default App;
