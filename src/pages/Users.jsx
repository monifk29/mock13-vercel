import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { getData, getFilterData } from "../redux/action";
import styles from "../styles/User.module.css";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import axios from "axios";

const Users = () => {
  const [search, setSearch] = useState();
  const [searchData, setSearchData] = useState();

  const [filterCon, setFilterCon] = useState();

  var compData = useSelector((state) => state.company);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  function handleSearch() {
    console.log(search);
    dispatch(getFilterData("company", search));
  }


  const handleChangeCon = (e) => {
    console.log(e);

    if(e == "pt"){
        dispatch(getFilterData("contract","Part Time"))
    }

    if(e == "ft"){
        dispatch(getFilterData("contract","Full Time"))
    }

    if(e == "fr"){
        dispatch(getFilterData("contract","Freelance"))
    }
  }

  // compData = searchData;
  console.log(compData);

  return (
    <div>
      <div className={styles.searchdiv}>
        <Input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search Company by Name"
          size="md"
        />
        <Button
          className={styles.searchbtn}
          colorScheme="teal"
          size="sm"
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>

      <div className={styles.filerDiv}>

<p className={styles.filterPara} >Filter by Contract</p>

        <select onChange={(e) => handleChangeCon(e.target.value)}  className={styles.contractSel}>
          <option >None</option>
          <option value="ft">Full-Time</option>
          <option value="pt">Part-Time</option>
          <option value="fr">Freelance</option>
        </select>
      </div>

      <div className={styles.container}>
        {compData?.map((e) => (
          <div>
            <Card {...e} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
