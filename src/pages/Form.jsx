import React, { useEffect, useState } from "react";
import { Input } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { postData } from "../redux/action";

import styles from "../styles/Form.module.css"

const Form = () => {
  const [name, setName] = useState();
  const [pos, setPos] = useState();
  const [contract, setContract] = useState();
  const [loc, setLoc] = useState();

  const dispatch = useDispatch();

  const handleSub = () => {
    console.log(name, pos, contract, loc);

    let obj = {
      company: name,
      position: pos,
      contract: contract,
      location: loc,
    };

    dispatch(postData(obj));
  };

  return (
    <div className={styles.formdiv} style={{ width: "50%", margin: "auto" }}>
      <Input className={styles.inputall}
        onChange={(e) => {
          setName(e.target.value);
        }}
        size="md"
        placeholder="Company Name"
      />
      <Input className={styles.inputall}
        onChange={(e) => {
          setPos(e.target.value);
        }}
        size="md"
        placeholder="Position "
      />
      <Input className={styles.inputall}
        onChange={(e) => {
          setContract(e.target.value);
        }}
        size="md"
        placeholder="Contract"
      />
      <Input className={styles.inputall}
        onChange={(e) => {
          setLoc(e.target.value);
        }}
        size="md"
        placeholder="Location"
      />

      <button style={{marginTop : "20px" , backgroundColor : "teal", padding : "0px 10px", color : "white"}} onClick={handleSub}>Submit</button>
    </div>
  );
};

export default Form;
