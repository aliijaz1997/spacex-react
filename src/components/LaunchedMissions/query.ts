import gql from 'graphql-tag';

const QueryfortheLaunchedMission = gql`

query LaunchedMission{
    launches {
      mission_name
      launch_site {
        site_name
        site_name_long
      }
      launch_success
      mission_id
    }
  }
  
`