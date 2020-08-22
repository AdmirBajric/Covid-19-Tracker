import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";

const CountryPicker = ({ handleChangeCountry }) => {
  const [fetchCountry, setFetchCountry] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchCountry(await fetchCountries());
    };

    fetchAPI();
  }, [setFetchCountry]);

  return (
    <div>
      <FormControl className={styles.formControl}>
        <NativeSelect onChange={(e) => handleChangeCountry(e.target.value)}>
          <option value="">Global</option>
          {fetchCountry.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
