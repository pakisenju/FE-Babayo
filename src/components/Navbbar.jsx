import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { logout } from '../redux/actions/authActions';

function Navbar() {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const username = useSelector((state) => state.auth.user?.username);
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<div className="navbar bg-accent">
			<div className="flex-1">
				<NavLink
					to="/"
					className="btn btn-ghost text-xl"
				>
					BABAYO
				</NavLink>
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link to="/homepage">Beranda</Link>
					</li>
					<li>
						<Link to="/dailys">Bacaan Harian</Link>
					</li>
					<li>
						<Link to="/books">Koleksi Buku</Link>
					</li>
					<li>
						<Link to="/favorite-books">Favorit</Link>
					</li>
				</ul>
			</div>
			<div className="flex-none mr-3">
				{isAuthenticated ? (
					<div className="avatar">
						<span className="menu text-lg capitalize">{username}</span>
						<div className="w-11 rounded-full">
							<img
								src="https://i.imgur.com/SqHE1Ct.jpg"
								alt="Avatar"
								style={{ width: '100%', height: 'auto' }}
							/>
						</div>
						<button
							onClick={handleLogout}
							className="btn btn-sm btn-secondary"
							style={{ marginLeft: '8px' }}
						>
							Logout
						</button>
					</div>
				) : (
					<ul className="menu menu-horizontal">
						<li>
							<Link to="/register">Daftar</Link>
						</li>
						<li>
							<Link
								to="/login"
								className="btn btn-sm btn-secondary"
							>
								Masuk
							</Link>
						</li>
					</ul>
				)}
			</div>
		</div>
	);
}

export default Navbar;
