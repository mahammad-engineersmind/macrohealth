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

  const createGroup = async (item) => {
    const response = await fetch('http://localhost:3001/group', {
      method: "POST",
      headers: {
        'accept': 'application/json',
        'x-csrf-token': 'VFbvimkQ',
        'Content-Type': 'application/json',
        'Authorization': "Bearer eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI0NGQ5ZjQxNjgwMzJlZWRkZWRmODRjOWVlMjI4Mjg1OTIzMmE4YzJmYTI3ZGVjYTYwZjI4MTA0ZjczMiIsImNsaWVudF9pZCI6ImlkLWExNWVjOGI0LTc4NWQtMmZjMC0zOGMwLTIyMTE4ZTQwOGQ3MCIsImlhdCI6MTczMTkzNjU5OCwiZXhwIjoxNzMxOTM3MTk4LCJzdWIiOiIyMDEyMiIsInVzZXJuYW1lIjoidGVzdEBsaWZlcmF5LmNvbSIsImlzcyI6ImxvY2FsaG9zdCIsInNjb3BlIjoiTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5Xb3JrZmxvdy5ldmVyeXRoaW5nIiwiZ3JhbnRfdHlwZSI6ImF1dGhvcml6YXRpb25fY29kZSIsImF1dGhvcml6YXRpb25fY29kZSI6IjUxODQ0ZDUwYTg0NDQyNmU4Yjk5MGQxYjVkZmFhNThkMmNkOTA2YzgyZTJjNjdiODVmNzMyYzAwZjQ0ZWVmNDgiLCJjb2RlX3ZlcmlmaWVyIjoibVF1YnF1Tmd2cWNFekFpdDVYamt3UWRENDFKOGhxLUFQWGZwM0FtMkZyYWZvMW1xdG8zX05tZkY1YkRTTjcucW4uYi5aWmh5QmNKTWhBbHBDa2htZUpHS1UuSWVBUlFaZEZEZVNHdDBRTVhBbC56czFrSUh4WXAzZi00UnpUWm4ifQ.YTBqzoGZ74BM737Cy72FLfvfpiDcKCj92ywI691-2GcuR2YbxMfRT_LtckMswMPpIi9z8H2q3usEPoCCYxZITQvrnrSiCgdtOEHkSdgBUcDluE1OTe9JY-PJ9xrOxEV5L7MfyMC2oz9bYsUCRYt2a4m-kpoTNZbuKGANHWpLn-XDoK4N0NuNFKignQKFCL9somgW-4l64XUGewwwTGASIpTZ4Vmn-2xBFqyjH1Jkgg8mCgII2DW9EvCCyZ8pgmufk8D-e7AxzDN63Sv_AEkqy2RAExTKd2okFo4pPeyEk7X8tttBxyC2eSYhVhJ5kEqTOZpSH_kD7G8xXLqhdwOVZA"
      },
      body: JSON.stringify({
        "description": item.description ?? '',
        "externalReferenceCode": item.id,
        "name": item.displayName
      })
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

  }

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

      data.value.forEach(element => {
        if(element['@odata.type'] === '#microsoft.graph.group') {
          createGroup(element)
        }
      });

//       data.value.forEach(async (group)=>{
//         const response = await fetch('https://graph.microsoft.com/v1.0/groups/' + group.id, {
//           method: "GET",
//           headers: headers,
//         });
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//       const data = await response.json();
// console.log('group', data)
//       })

      setData(data.value);
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
