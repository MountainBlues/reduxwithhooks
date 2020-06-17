const initialState = {
    loading: false,
    projectList: []
}

const landingPageReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INITIATE_PROJECT_LIST': return {
            ...state,
            loading: true
        }
        case 'INITIATE_PROJECT_LIST_SUCCESS': return {
            ...state,
            loading: false,
            projectList: action.payload
        }
        case 'INITIATE_PROJECT_LIST_FAILURE': return {
            ...state,
            loading: false
        }
        default: return initialState
    }
}

export default landingPageReducer