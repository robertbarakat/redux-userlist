import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser } from '../actions/selectUser';

const UserList = ({ utilisateurs, selectUser }) => (
    <div>
        <ul>
            {utilisateurs.map(element => (
                <li
                    key={element.id}
                    onClick={() => selectUser(element)}>
                    {element.name}
                </li>
            ))}
        </ul>
    </div>
)

function mstp(state) {
    return {
        utilisateurs: state.utilisateurs
    }
}

function mdtp(dispatch) {
    return bindActionCreators({ selectUser }, dispatch)
}

export default connect(mstp, mdtp)(UserList);