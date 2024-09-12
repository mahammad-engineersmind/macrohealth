import { AuthenticatedTemplate } from "@azure/msal-react";

import React, { useState, useEffect } from "react";

import { OperationalDashboard } from "../platform-types/component";
import Table from "../ui-components/Table";
import { msalInstance } from "../index";
import { loginRequest } from "../authConfig";

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so add 1
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function Home1() {
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getToken = async () => {
    const account = msalInstance.getActiveAccount();
    if (!account) {
      throw Error(
        "No active account! Verify a user has been signed in and setActiveAccount has been called."
      );
    }

    const response = await msalInstance.acquireTokenSilent({
      ...loginRequest,
      account: account,
    });

    const headers = new Headers();
    const bearer = `${response.idToken}`;

    headers.append("Authorization", bearer);

    return headers;
  };

  const fetchData = async () => {
    const headers = await getToken();

    try {
      const response = await fetch("http://localhost:3000/api/customer", {
        method: "GET",
        headers: headers,
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const fetchData2 = async () => {
    const headers = await getToken();

    try {
      const response = await fetch(
        `http://localhost:3000/api/expectedFiles/check?date=${formatDate(
          date
        )}`,
        {
          method: "GET",
          headers: headers,
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setData2(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(formatDate(date));
    fetchData2();
  }, [date]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <OperationalDashboard
        onChangeDate={(date) => {
          setDate(date);
        }}
        expectationCheck={data2}
        timeZones={[]}
        allowEdit
      />

      <div className="_title_12z6i_14">Customer Table</div>
      <Table data={data} />
    </div>
  );
}

export function Home() {
  return (
    <AuthenticatedTemplate>
      <Home1></Home1>
    </AuthenticatedTemplate>
  );
}
