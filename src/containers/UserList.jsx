import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser } from '../actions/selectUser';

const UserList = ({ myUser, selectUser }) => (
    <div>
        <ul>
            {myUser.map(element => (
                <li
                    key={element.id}
                    onClick={() => selectUser(element)}>
                    {element.name} {element.surname}
                </li>
            ))}
        </ul>
    </div>
)

function mstp(state) {
    return {
        myUser: state.utilisateurs
    }
}

function mdtp(dispatch) {
    return bindActionCreators({ selectUser }, dispatch)
}

export default connect(mstp, mdtp)(UserList);