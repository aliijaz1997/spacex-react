import React  from 'react';
import {useMissionQuery} from './../../generated/graphql';
import DetailOfMission from './Detail';
import LinearProgressWithLabel from './../LaunchedMissions/progressforloading';
// let data : MissionQuery;
interface OwnProps {
  id: number;
}
const Missions = ({ id }: OwnProps) => {
  // const [index, setIndex] = useState(1)
  // const updateindex = (newid : number) => {
  //   setIndex(newid);
  // }
     const { data, loading, error } = useMissionQuery({
      variables: { id: String(id) },
         });
         if (loading)
          return <h1><LinearProgressWithLabel/></h1>
         if (error || !data)
          return <h1>Error</h1> 
          
    return (
            <div>
            <DetailOfMission data={data}/>
            </div>
       
    )
}

export default Missions;