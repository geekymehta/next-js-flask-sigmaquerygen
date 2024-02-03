// "use client";
// import React, { useState, useEffect } from "react";

// export default HomePage {

//     const [homeData, setHomeData] = useState("No data yet");

//     useEffect(() => {
//         fetch("/api/home")
//             .then(response => response.json())
//             .then(data => setHomeData(data));
//     }, [homeData]);


//     return (<div>
//         <h1>Home</h1>
//         <p>{data}</p>
//     </div>);
    
// }

"use client"

import React, { useState, useEffect } from 'react';

const HomeCompomnent = () =>  {
    const [data, setData] = useState({message: "No data yet", pipelines: "No pipelines yet", requirements: "No requirements yet"});

   useEffect(() => {
        fetch('/api')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data1 => setData(data1))
            .catch(error => {
                console.log(error);
                console.error('There was an error!', error);
            });
    }, []);
    return (
        <div>
            <h1>Home</h1>
            <p>{data.message}</p>
            <p>{data.pipelines}</p>
            <p>{data.requirements}</p>

        </div>
    );
}

export default HomeCompomnent;