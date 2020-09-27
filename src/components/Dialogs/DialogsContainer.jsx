import { addMessageActionCreator, messageChangeActionCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import withRedirect from '../../hoc/withRedirect';
import {compose} from 'redux'

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () =>  dispatch(addMessageActionCreator()) ,
        messageChange: (message) =>  dispatch(messageChangeActionCreator(message)) ,
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRedirect,
)(Dialogs)

// const withRedirectDialogs = withRedirect(Dialogs)
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withRedirectDialogs)
// export default DialogsContainer;