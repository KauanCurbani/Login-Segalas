import React, { useContext } from "react";
import Header from "../../components/header";
import { StoreContext } from "../../utils/store";

import valid from "../login";

function Home() {
  const { user } = useContext(StoreContext);

  console.log(user);

  return (
    <Header />
  );
}

export default Home;
