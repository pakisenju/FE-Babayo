import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActions';
import { Link, useHistory } from 'react-router-dom';

function Login() {
	const dispatch = useDispatch();
	const history = useHistory();
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			await dispatch(login(formData));
			history.push('/homepage');
		} catch (error) {
			console.error('Login Error:', error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div id="login-content">
			<div className="hero min-h-screen bg-base-100">
				<div className="hero-content flex-col lg:flex-row">
					<img
						src="https://i.imgur.com/OePwoLP.jpg"
						className="min-w-xs lg:max-w-xl"
						alt="Login Image"
					/>
					<div className="card shrink-0 w-full max-w-sm bg-base-100">
						<h1 className="text-2xl font-bold text-center">Masuk ke Akun</h1>
						<p className="text-center">
							Yuk, lanjutkan meningkatkan literasi di Babayo
						</p>
						<form
							className="card-body"
							onSubmit={handleLogin}
						>
							<div className="form-control">
								<label className="label">
									<span className="label-text">
										Username <span className="label-required">*</span>
									</span>
								</label>
								<input
									type="text"
									name="username"
									className="input input-bordered input-sm w-full max-w-xs"
									required
									value={formData.username}
									onChange={handleChange}
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">
										Password <span className="label-required">*</span>
									</span>
								</label>
								<input
									type="password"
									name="password"
									className="input input-bordered input-sm w-full max-w-xs"
									required
									value={formData.password}
									onChange={handleChange}
								/>
								<label className="label px-0">
									<div className="form-control">
										<label className="label px-0">
											<input
												type="checkbox"
												className="checkbox checkbox-sm checkbox-secondary mr-3"
											/>
											<hr />
											<span className="label-text">Ingat saya</span>
										</label>
									</div>
									<Link
										to="#"
										className="label-text-alt link link-hover"
									>
										Forgot password?
									</Link>
								</label>
							</div>
							<div className="form-control mt-6">
								<button
									type="submit"
									className="btn btn-secondary"
									disabled={loading}
								>
									{loading ? 'Loading...' : 'Masuk'}
								</button>
								<br />
								<Link
									to="/register"
									className="btn btn-base-100"
								>
									Daftar
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
