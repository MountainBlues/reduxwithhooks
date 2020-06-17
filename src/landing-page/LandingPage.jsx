import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProjectList } from './action'

const LandingPage = () => {
    const dispatch = useDispatch()
    const list = useSelector(state => state.landingPageReducer.projectList)
    return (<div>
        <button onClick={() => dispatch(getProjectList())}>Show All Project</button>
        <table>{list.map(item => <tr><td>{item.id}</td><td>{item.title}</td></tr>)}</table>
    </div>)
}

export default LandingPage