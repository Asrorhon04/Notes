import { NavLink } from "react-router-dom";


function Header() {
	return (
		<div className="container">
			<nav className="navbar">
				<ul className="nav nav-tabs">
					<li className="nav-item">
						<NavLink exact="true" className='nav-link' to='/'>Home</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className='nav-link' to='/note'>Note</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className='nav-link' to='/create'>Create</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className='nav-link' to='/about'>About</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Header;
