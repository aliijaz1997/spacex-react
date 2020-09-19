import React from 'react';
import { MissionQuery } from './../../generated/graphql';
import {Link} from 'react-router-dom';
import './detail.css';
interface Props {
    data: MissionQuery
}
const DetailOfMission: React.FC<Props> = ({ data }) => {
    return (
        <div className="detailsdiv">

            <h1 className="Heading">Missions Detail</h1>
            <h2>{data?.launch?.mission_name}</h2>
            <span>Launched in {data?.launch?.launch_year} from {data?.launch?.launch_site?.site_name}</span>
            <br />
            <span className="detail">{data?.launch?.details}</span>
            <Link to='https://react.semantic-ui.com/'>
      <button type="button" className="btn btn-info">Button</button>
        </div>

    )
}
export default DetailOfMission;