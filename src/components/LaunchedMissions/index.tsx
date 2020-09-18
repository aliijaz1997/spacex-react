import React from 'react';
import { useLaunchedMissionQuery } from './../../generated/graphql';
// let data : LaunchedMissionQuery;
const LaunchedMissionsss = () => {

    const { data, loading, error } = useLaunchedMissionQuery();
    if (loading)
        return <h1>loading...</h1>

    if (error)
        return <h1>Error</h1>
    // console.log(index)
    return (
        <div>
           {data?.launches?.map((launch , i) => {
               return <li key = {i} >
                   {launch?.mission_name}
               </li>
           })}
        </div>
    )
}
//onClick = {() => updateindex(i)}
export default LaunchedMissionsss;