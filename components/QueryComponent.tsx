import React from "react";

interface QueryComponentProps {
  query: any;
}

const QueryComponent: React.FC<QueryComponentProps> = ({ query }) => {
  return <p>{query}</p>;
};

export default QueryComponent;
