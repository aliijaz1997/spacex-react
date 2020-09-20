import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './App';
import LaunchedMissionsss from './components/LaunchedMissions/index';
describe('Component',()=>{
  let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>
  
  beforeEach(()=>(container = shallow(<App />)))

  it('shoudl render a <div />', ()=>{
      expect(container.find('div').length).toBeGreaterThanOrEqual(1)

  })
  it('should render the Launched Component',()=>{
    expect(container.containsMatchingElement(<LaunchedMissionsss />)).toEqual(true)
  })
})
