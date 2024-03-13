import React from "react";
import { Link, useParams } from "react-router-dom";

export default function User() {
  const params = useParams();
  console.log({ params });
  return (
    <div>
      Hello {params.name}
      <Link to={"/map"} />
    </div>
  );
}