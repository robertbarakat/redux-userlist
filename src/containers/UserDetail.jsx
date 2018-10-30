import React from 'react';
import {connect} from 'react-redux';

const UserDetail = ({actif}) => (
    <div>
        {(!actif) ? <div>Sélectionner un user</div> : <div>{actif.name}</div>}
    </div>
)

function mstp(state){
    return {
        actif: state.actif
    }
}

export default connect(mstp)(UserDetail)
