const activeUsers = (state = "", action) => {
    switch(action.type){
        case 'SELECTED': return action.arg;
        default: return state
    }
}

export default activeUsers