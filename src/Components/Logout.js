import React, { useEffect } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

const Logout = () => {
    const { push } = useHistory()

    useEffect(() => {
        axiosWithAuth()
          .post('/logout')
            .then(res => {
                console.log(res);
                localStorage.removeItem('token')
                push('/homepage')
            })
          .catch(err => {
                console.log(err);
            })
    }, [])

    return (<div></div>)
}

export default Logout;