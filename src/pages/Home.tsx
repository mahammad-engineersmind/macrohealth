import { AuthenticatedTemplate } from "@azure/msal-react";

import React, { useState, useEffect } from "react";

import Table from "../ui-components/Table";
import { msalInstance } from "../index";
import { loginRequest } from "../authConfig";

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so add 1
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const API_URL = process.env.REACT_APP_API_URL;

export function Home() {
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

    console.log(response)

    const headers = new Headers();
    const bearer = `Bearer ${response.accessToken}`;

    headers.append("Authorization", bearer);

    return headers;
  };

  const fetchData = async () => {
    const headers = await getToken();

    try {
      const response = await fetch('https://graph.microsoft.com/v1.0/me/memberOf', {
        method: "GET",
        headers: headers,
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      data.value.forEach(async (group)=>{
        const response = await fetch('https://graph.microsoft.com/v1.0/groups/' + group.id, {
          method: "GET",
          headers: headers,
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
      const data = await response.json();
console.log('group', data)
      })

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
        API_URL + `/api/expectedFiles/check?date=${formatDate(date)}`,
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

  // useEffect(() => {
  //   console.log(formatDate(date));
  //   fetchData2();
  // }, [date]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <div className="_title_12z6i_14">Customer Table</div>
      <Table data={data} />
    </div>
  );
}

export function HomeWrapper() {
  return (
    <AuthenticatedTemplate>
      <Home></Home>
    </AuthenticatedTemplate>
  );
}
