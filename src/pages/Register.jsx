import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/actions/authActions';
import { Link } from 'react-router-dom';

function Register() {
	const dispatch = useDispatch();
	const [userData, setUserData] = useState({
		nama_lengkap: '',
		username: '',
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		setUserData({
			...userData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(register(userData));
	};

	return (
		<div id="register-content">
			<div className="hero min-h-screen bg-base-100">
				<div className="hero-content flex-col lg:flex-row">
					<img
						src="https://i.imgur.com/48h10ws.png"
						className="min-w-xs lg:max-w-xl"
					/>
					<div className="card shrink-0 w-full max-w-sm bg-base-100">
						<h1 className="text-2xl font-bold text-center">Pendaftaran Akun</h1>
						<p className="text-center">Yuk, daftarkan akunmu sekarang juga!</p>
						<form
							className="card-body"
							onSubmit={handleSubmit}
						>
							<div className="form-control">
								<label className="label">
									<span className="label-text">
										Nama Lengkap <span className="label-required">*</span>
									</span>
								</label>
								<input
									type="text"
									className="input input-bordered input-sm w-full max-w-xs"
									name="nama_lengkap"
									value={userData.nama_lengkap}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">
										Username <span className="label-required">*</span>
									</span>
								</label>
								<input
									type="text"
									className="input input-bordered input-sm w-full max-w-xs"
									name="username"
									value={userData.username}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">
										Email <span className="label-required">*</span>
									</span>
								</label>
								<input
									type="email"
									className="input input-bordered input-sm w-full max-w-xs"
									name="email"
									value={userData.email}
									onChange={handleChange}
									required
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
									className="input input-bordered input-sm w-full max-w-xs"
									name="password"
									value={userData.password}
									onChange={handleChange}
									required
								/>
							</div>

							<div className="form-control">
								<label className="label px-0">
									<div className="form-control">
										<label className="label px-0">
											<input
												type="checkbox"
												className="checkbox checkbox-sm checkbox-secondary mr-3"
												required
											/>
											<span className="label-text text-justify">
												Saya setuju dengan syarat & ketentuan dan kebijakan
												privasi
											</span>
										</label>
									</div>
								</label>
							</div>
							<div className="form-control">
								<button
									type="submit"
									className="btn btn-secondary"
								>
									Daftar
								</button>
								<br />
								<Link
									to="/login"
									className="btn btn-base-100"
								>
									Masuk ke akunmu
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
