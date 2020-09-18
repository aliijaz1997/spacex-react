import React  from 'react';
import {useMissionQuery} from './../../generated/graphql'
import DetailOfMission from './Detail';
// let data : MissionQuery;
const Missions = () => {
  // const [index, setIndex] = useState(1)
  // const updateindex = (newid : number) => {
  //   setIndex(newid);
  // }
     const { data, loading, error } = useMissionQuery({
           variables: {
              id: '25'  // value for 'id'
           }
         });
         if (loading)
          return <h1>Loading...</h1>
         if (error || !data)
          return <h1>Error</h1> 
        console.log(data);
          
    return (
            <div>
            <DetailOfMission data={data}/>
            </div>
       
    )
}

export default Missions;