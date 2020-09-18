import React from 'react';
import {MissionQuery} from './../../generated/graphql';
interface Props {
    data: MissionQuery
}
const DetailOfMission : React.FC<Props> = ({data}) => {
    return (
      <div className="details-container">
      <div className="details">
          <div className="big-img">
           
          </div>
          <div className="box">
              <div className="row">
                  <h2>{data?.launch?.mission_name}</h2>
              </div>
              <span>Launched in {data?.launch?.launch_year} from {data?.launch?.launch_site?.site_name}</span>
               </div>
      </div>
  </div>

    )
}
export default DetailOfMission;