import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../Redux/Actions/UserAction'

function UserContainer() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)

    useEffect(() => {
        dispatch(fetchUser())
    }, [dispatch])

    const getPost = user && user.map((post) => {
        return (
            <tr key={post.id}>
                <td>{post.username}</td>
                <td>{post.email}</td>
            </tr>
        )
    })
    return (
        <div>
            <h1>Users</h1>
            <table>
                <tbody>{getPost}</tbody>
            </table>
        </div>
    )
}

export default UserContainer