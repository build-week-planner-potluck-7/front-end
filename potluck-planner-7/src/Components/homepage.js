import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function Home(props) {
	// const{ user, setUser }=props;
	const [user, setUser] = useState({ username: '', password: '' })
	const [name, setName] = useState('')
	// useEffect(() => {
	// 	const username = JSON.parse(localStorage.getItem('user')).message
	// 	setName(username)
	// }, [])
	// console.log('Home',user)
	const hist = useHistory()
	const routeToLogin = () => {
		hist.push('/')
	}

	const Logout = () => {
		setUser({ username: '', password: '' })
		localStorage.removeItem('user')
		routeToLogin()
	}
	return (
		<div>
			<header className='App-Header'>
				<div className='welcome'>
					<h1>Potluck planner</h1>
					<h2>
						<span>{name}</span>
					</h2>
					<button onClick={Logout}>Logout</button>
				</div>
			</header>
		</div>
	)
}

export default Home;