import React, { useEffect } from 'react';
import Users from './Users';
import Preloader from '../../Preloader/Preloader';
const { connect } = require("react-redux");
const { setUsers, changePage, setTotalCount, togglePreloader, toggleDisabled, getUsers, followUser, unfollowUser } = require("../../Redux/users-reducer");


// class UsersContainer extends React.Component {
//     componentDidMount() {
//         this.props.getUsers(this.props.page, this.props.pageCount);
//     }
//     changePage = (page) => {
//         this.props.changePage(page);
//         this.props.getUsers(page, this.props.pageCount);
//     }
//     render() {
//         let { usersPage, pageCount, totalCount, page, toggleDisabled, disabledUsers, followUser, unfollowUser,} = this.props
//         let usersProps = { usersPage, pageCount, totalCount, page, toggleDisabled, disabledUsers, followUser, unfollowUser,}
//         return <>
//             {this.props.isPreloaded ? <Preloader /> : null}
//             <Users changePage={this.changePage} {...usersProps} />
//         </>
//     }
// }

const UsersContainer = (props) => {

    useEffect(() => {
        props.getUsers(props.page, props.pageCount);
    }, [])

    const changePage = (page) => {
        props.changePage(page);
        props.getUsers(page, props.pageCount);
    }

    const { usersPage, pageCount, totalCount, page, toggleDisabled, disabledUsers, followUser, unfollowUser, } = props
    const usersProps = { usersPage, pageCount, totalCount, page, toggleDisabled, disabledUsers, followUser, unfollowUser, }

    return <>
        {props.isPreloaded ? <Preloader /> : null}
        <Users changePage={changePage} {...usersProps} />
    </>
}

const mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
        pageCount: state.usersPage.pageCount,
        totalCount: state.usersPage.totalCount,
        page: state.usersPage.page,
        isPreloaded: state.usersPage.isPreloaded,
        disabledUsers: state.usersPage.disabledUsers,
    }
}
export default connect(mapStateToProps,
    { setUsers, changePage, setTotalCount, togglePreloader, toggleDisabled, getUsers, followUser, unfollowUser, })
    (UsersContainer)


// const mapDispatchToProps = (dispatch) => {
//     return  {
//     follow: (userId) => { dispatch(followActionCreator(userId)) },
//     unfollow: (userId) => { dispatch(unfollowActionCreator(userId)) },
//     setUsers: (users) => { dispatch(setUsersActionCreator(users)) },
//     changePage: (page) => { dispatch(changePageActionCreator(page)) },
//     setTotalCount: (totalCount) => { dispatch(setTotalCountActionCreator(totalCount)) },
//     togglePreloader: (isPreoladed) => { dispatch(togglePreloaderActionCreator(isPreoladed)) }
// }