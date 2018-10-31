import React from 'react';
import {connect} from 'react-redux';

const UserDetail = ({userActif}) => (
    <div>
        {(!userActif) ? <div>Sélectionner un user</div> : <div>{userActif.name} {userActif.surname}</div>}
    </div>
)

function mstp(state){
    return {
        userActif: state.actif
    }
}

export default connect(mstp)(UserDetail)
