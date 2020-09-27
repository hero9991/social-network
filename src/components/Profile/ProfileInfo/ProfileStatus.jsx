import React, { useState, useEffect } from 'react';

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState('true')
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        if (props.userId !== props.MyId) return null
        setEditMode(false)
    }
    const deactivateEditMode = (e) => {
        props.setUserStatus(e.target.value)
        setEditMode(true)
    }
    const inputTumbler = (e) => {
        setStatus(e.target.value)
    }

    return (<>
        {editMode ?
            <div onDoubleClick={activateEditMode}>{props.status || '--------'}</div>
            : <input type='text' autoFocus={true} onBlur={deactivateEditMode} value={status}
                onChange={inputTumbler} />
        }
    </>
    )
}

export default ProfileStatus;