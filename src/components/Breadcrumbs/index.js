import React from "react";
import { Route, Link } from "react-router-dom";

export const Breadcrumbs = () => (
  <Route
    path="*"
    render={(props) => {
      let parts = props.location.pathname.split("/");
      //console.log(parts);
      const place = parts[parts.length - 1];
      parts = parts.slice(1, parts.length - 1);
      return (
        <p>
          {parts.map(crumb)}/{place}
        </p>
      );
    }}
  />
);

const crumb = (part, partIndex, parts) => {
  const path = ["", ...parts.slice(0, partIndex + 1)].join("/");
  //console.log(path);
  return (
    <Link key={path} to={path}>
      {part}
    </Link>
  );
};
