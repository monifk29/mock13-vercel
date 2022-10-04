import React, { useEffect, useState } from "react";
import { Input } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { postData } from "../redux/action";

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
    <div style={{ width: "50%", margin: "auto" }}>
      <Input
        onChange={(e) => {
          setName(e.target.value);
        }}
        size="md"
        placeholder="Company Name"
      />
      <Input
        onChange={(e) => {
          setPos(e.target.value);
        }}
        size="md"
        placeholder="Position "
      />
      <Input
        onChange={(e) => {
          setContract(e.target.value);
        }}
        size="md"
        placeholder="Contract"
      />
      <Input
        onChange={(e) => {
          setLoc(e.target.value);
        }}
        size="md"
        placeholder="Location"
      />

      <button onClick={handleSub}>Submit</button>
    </div>
  );
};

export default Form;
