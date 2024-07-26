import React from 'react';
import './pages.css';
import Footer from '../components/Footer';
import Books from '../components/Books';
import Products from '../components/Products';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Navbar from '../components/Navbbar';

function Welcome() {
	return (
		<div>
			<Navbar />

			<div className="hero min-h-screen bg-primary">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<img
						src="https://i.imgur.com/bUdybHS.png"
						className="max-w-xs lg:max-w-xl"
					/>
					<div>
						<h1 className="text-4xl font-bold">
							Selalu siap untuk memberikanmu inspirasi setiap hari!
						</h1>
						<p className="py-6">
							Nikmati rangkaian bacaan harian yang penuh wawasan setiap pagi
						</p>
						<Link to="/login" className="btn btn-secondary">Mulai Membaca</Link>
					</div>
				</div>
			</div>

			<div id="our-products">
				<h1 className="text-3xl font-bold text-center">
					Mengapa harus Baca disini?
				</h1>
				<Products />
			</div>

			<div id="recommendations">
				<h1 className="text-3xl font-bold">Rekomendasi Buku Untuk Kamu Baca</h1>
				<Books />
			</div>

			<div
				id="our-team"
				className="bg-accent"
			>
				<h1 className="text-3xl font-bold text-center">Tim Kami</h1>
				<div
					id="team-cards"
					className="flex flex-wrap"
				>
					<div className="card card-side bg-primary shadow-xl">
						<div className="flex items-center justify-around px-4">
							<div className="avatar">
								<div className="w-20 rounded">
									<img
										src="https://i.imgur.com/SqHE1Ct.jpg"
										alt="Fahki Rohandi"
									/>
								</div>
							</div>
							<div className="card-body">
								<h2 className="card-title">Fahki Rohandi</h2>
								<p>FS23</p>
							</div>
						</div>
					</div>

					<div className="card card-side bg-primary shadow-xl">
						<div className="flex items-center justify-around px-4">
							<div className="avatar">
								<div className="w-20 rounded">
									<img
										src="https://i.imgur.com/E8thYwt.jpg"
										alt="Ikhwal Febriyo"
									/>
								</div>
							</div>
							<div className="card-body">
								<h2 className="card-title">Ikhwal Febriyo</h2>
								<p>FS23</p>
							</div>
						</div>
					</div>

					<div className="card card-side bg-primary shadow-xl">
						<div className="flex items-center justify-around px-4">
							<div className="avatar">
								<div className="w-20 rounded">
									<img
										src="https://i.imgur.com/8zefAeI.jpg"
										alt="Willy Nurgian"
									/>
								</div>
							</div>
							<div className="card-body">
								<h2 className="card-title">Willy Nurgian</h2>
								<p>FS23</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default Welcome;
