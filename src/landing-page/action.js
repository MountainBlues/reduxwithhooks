export const getProjectList = () => ({
    type: 'INITIATE_PROJECT_LIST'
})

export const getProjectListSuccess = list => ({
    type: 'INITIATE_PROJECT_LIST_SUCCESS',
    payload: list
})

export const getProjectListFailure = list => ({
    type: 'INITIATE_PROJECT_LIST_FAILURE'
})