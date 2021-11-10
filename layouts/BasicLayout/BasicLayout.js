import React from "react";
import Header from "../../components/Header";

export default function BasicLayout(props) {
  console.log(props);
  const { children } = props;
  return (
    <div className="wrapper">
      <Header />
      <div>{children}</div>
    </div>
  );
}
