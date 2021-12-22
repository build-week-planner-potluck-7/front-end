import React, { useState, useEffect } from 'react';
import { useHistory, Route, Link } from 'react-router-dom';




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
				<img 
      				className='home-image'
      				src='https://images.unsplash.com/photo-1592153978217-6913256c7e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      				alt='potluck'
      			/>

					<h1>Potluck planner</h1>
					<h2>
						<span>{name}</span>
					</h2>
					<button onClick={Logout}>Logout</button>
				</div>
			</header>
			<div className='formLinks'>
				<Link to='./eventForm' className='formLink'>Create an Event!</Link>
				<Link to='./foodForm' className='formLink'>Add Food</Link>
				{/* <Link to='./guests' className='formLink'>Invite Guests</Link> */}
				

			</div>
		</div>
	)
}

export default Home;