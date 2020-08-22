import React, { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountrPicker/CountryPicker";

import { fetchData } from "./api";
import styles from "./App.module.css";

function App() {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("");

  useEffect(() => {
    const getData = async () => {
      setData(await fetchData());
    };

    getData();
  }, []);

  const handleChangeCountry = async (country) => {
    const getData = await fetchData(country);
    setData(getData);
    setCountry(country);
  };

  const url = "https://i.ibb.co/7QpKsCX/image.png";

  return (
    <div className={styles.container}>
      <img className={styles.image} src={url} alt="Covid-19" />
      <Cards data={data} />
      <CountryPicker handleChangeCountry={handleChangeCountry} />
      <Chart data={data} country={country} />
    </div>
  );
}

export default App;
