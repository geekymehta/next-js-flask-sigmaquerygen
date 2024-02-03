"use client"
import React, {useState, useEffect} from 'react';

import FormComponent from '@/components/FormComponent';
import ErrorComponent from '@/components/ErrorComponent';
import LoadingComponent from '@/components/LoadingComponent';
import QueryComponent from '@/components/QueryComponent';
import useQueryGenerator from '@/hooks/useQueryGenerator';
import "./Home.css"

export default function Home() {
  const [target, setTarget] = useState("splunk");
  const [format, setFormat] = useState("default");
  const [pipeline, setPipeline] = useState([]);
  const [rule, setRule] = useState("");
  const [shouldFetch, setShouldFetch] = useState(false);

  const { query, loading, error, fetchData } = useQueryGenerator(
    target,
    format,
    pipeline,
    rule
  );

  console.log("target1 ;skdkl ,s m,dam")
  console.log("query1", query)

  useEffect(() => {
    if (shouldFetch) {
      fetchData();
      setShouldFetch(false); // Reset the flag after fetching
    }
  }, [target, format, pipeline, rule, fetchData, shouldFetch]);

  const handleInputChange = (name: string, value: any) => {
    switch (name) {
      case "target":
        setTarget(value);
        setShouldFetch(true); // Set the flag when input changes
        break;
      case "format":
        setFormat(value);
        setShouldFetch(true);
        break;
      case "pipeline":
        setPipeline(value);
        setShouldFetch(true);
        break;
      case "rule":
        setRule(value);
        setShouldFetch(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <div className="app-container">
        <div className="form-container">
          <div className="title">Ruleset Configurations</div>
          <FormComponent
            target={target}
            format={format}
            pipeline={pipeline}
            rule={rule}
            onInputChange={handleInputChange}
          />
        </div>

        <div className="result-container">
          <div className="title">Query</div>
          {loading && <LoadingComponent />}
          {error && <ErrorComponent error={error} />}
          {!loading && !error && query && <QueryComponent query={query} />}
        </div>
      </div>
    </div>
  );
}
