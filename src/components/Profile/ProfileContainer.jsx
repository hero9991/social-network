import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUser } from '../../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { togglePreloader } from '../../Redux/users-reducer';


class ProfileContainer extends React.Component {

  componentDidMount() {
    let user = this.props.match.params.userId
    if (!user && this.props.myId) user = this.props.myId;
    if (!this.props.myId) user = 2;
    this.props.getUser(user)
  }

  render() {
    return (
      <Profile {...this.props} />
    )
  }

}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isPreloaded: state.profilePage.isPreloaded,
  myId: state.auth.id,
})

const withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { togglePreloader, getUser })(withUrlDataContainerComponent)

