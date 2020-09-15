import React, {useEffect} from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUser } from '../../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { togglePreloader } from '../../Redux/users-reducer';
import withRedirect from '../../hoc/withRedirect';


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
    let user = props.match.params.userId
    if (!user && props.myId) user = props.myId;
    if (!props.myId) user = 2;
    props.getUser(user)
  }, [])

  return  <Profile {...props} />
}

const withRedirectProfile = withRedirect(ProfileContainer)

const withUrlDataContainerComponent = withRouter(withRedirectProfile)


const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isPreloaded: state.profilePage.isPreloaded,
  myId: state.auth.id,
})

export default connect(mapStateToProps, { togglePreloader, getUser })(withUrlDataContainerComponent)

