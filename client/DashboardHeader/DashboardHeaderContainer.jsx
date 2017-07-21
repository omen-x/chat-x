import { connect } from 'react-redux';

import DashboardHeader from './DashboardHeader';


const mapStateToProps = state => ({
  userName: `${state.user.name} ${state.user.secondName}`
});

const DashboardHeaderContainer = connect(mapStateToProps)(DashboardHeader);

export default DashboardHeaderContainer;
