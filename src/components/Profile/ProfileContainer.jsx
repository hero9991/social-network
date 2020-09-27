import React, {useEffect} from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUser, getStatus, setUserStatus } from '../../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { togglePreloader } from '../../Redux/users-reducer';
import withRedirect from '../../hoc/withRedirect';
import {compose} from 'redux'

// class ProfileContainer extends React.Component { 
//   componentDidMount() {
//     let user = this.props.match.params.userId
//     if (!user && this.props.myId) user = this.props.myId;
//     if (!this.props.myId) user = 2;
//     this.props.getUser(user)
//   }
//   render() {
//     return (
//       <Profile {...this.props} />
//     )
//   }
// }

const ProfileContainer = (props) => {
  useEffect(() => {
    let user = props.match.params.userId;
    if (!user && props.myId) user = props.myId;
    if (!props.myId) user = 2;
    props.getStatus(user);
    props.getUser(user);
  }, [props.myId])

  return  <Profile {...props} userId={props.match.params.userId}/>
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isPreloaded: state.profilePage.isPreloaded,
  myId: state.auth.id,
  status: state.profilePage.status,
})

export default compose(
  connect(mapStateToProps, { togglePreloader, getUser, getStatus, setUserStatus,  }),
  withRouter,
  withRedirect,
)(ProfileContainer)

// const withRedirectProfile = withRedirect(ProfileContainer);
// const withUrlDataContainerComponent = withRouter(withRedirectProfile);
// export default connect(mapStateToProps, { togglePreloader, getUser })(withUrlDataContainerComponent);


