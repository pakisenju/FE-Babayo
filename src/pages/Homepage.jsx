import React from 'react';
import Navbar from '../components/Navbbar';
import Footer from '../components/Footer';
import Books from '../components/Books';
import Products from '../components/Products';
import { Link } from 'react-router-dom/cjs/react-router-dom';

function Homepage() {
	return (
		<div>
			<Navbar />
			<div className="carousel w-full">
				<div
					id="slide1"
					className="carousel-item relative w-full"
				>
					<div className="hero min-h-screen bg-primary">
						<div className="hero-content flex-col lg:flex-row-reverse">
							<img
								src="https://imgur.com/MW26D4w.png"
								className="max-w-xs lg:max-w-xl"
							/>
							<div>
								<h1 className="text-4xl font-bold">Koleksi Buku</h1>
								<p className="py-6">
									Buku adalah teman setia yang tak pernah meninggalkan Anda.
									Ajaklah mereka bicara dan biarkan cerita-cerita mereka mengisi
									hidup Anda. Mulailah petualangan literasi anda disini!
								</p>
							</div>
						</div>
					</div>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a
							href="#slide3"
							className="btn btn-circle btn-secondary"
						>
							❮
						</a>
						<a
							href="#slide2"
							className="btn btn-circle btn-secondary"
						>
							❯
						</a>
					</div>
				</div>
				<div
					id="slide2"
					className="carousel-item relative w-full"
				>
					<div className="hero min-h-screen bg-primary">
						<div className="hero-content flex-col lg:flex-row-reverse">
							<img
								src="https://imgur.com/zagFW8Y.png"
								className="max-w-xs lg:max-w-xl"
							/>
							<div>
								<h1 className="text-4xl font-bold">Bacaan Harian</h1>
								<p className="py-6">
									Membaca adalah alat paling ampuh untuk pertumbuhan diri.
									Membuat bacaan adalah cara untuk berbagi wawasan Anda dengan
									dunia. bergabunglah dalam perjalanan inspiratif ini!
								</p>
							</div>
						</div>
					</div>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a
							href="#slide1"
							className="btn btn-circle btn-secondary"
						>
							❮
						</a>
						<a
							href="#slide3"
							className="btn btn-circle btn-secondary"
						>
							❯
						</a>
					</div>
				</div>
				<div
					id="slide3"
					className="carousel-item relative w-full"
				>
					<div className="hero min-h-screen bg-primary">
						<div className="hero-content flex-col lg:flex-row-reverse">
							<img
								src="https://i.imgur.com/IpGLadB.png"
								className="max-w-xs lg:max-w-md"
							/>
							<div>
								<h1 className="text-4xl font-bold">Favorit</h1>
								<p className="py-6">
									Menyimpan sebagai favorit adalah langkah pertama menuju
									koleksi inspiratif yang selalu siap menyemangati setiap hari.
									Temukan kembali dan nikmati kumpulan pilihan yang memberikan
									wawasan dan kebijaksanaan kapan saja Anda inginkan!
								</p>
							</div>
						</div>
					</div>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a
							href="#slide2"
							className="btn btn-circle btn-secondary"
						>
							❮
						</a>
						<a
							href="#slide1"
							className="btn btn-circle btn-secondary"
						>
							❯
						</a>
					</div>
				</div>
			</div>
			<div className="flex justify-center w-full py-3 gap-2">
				<Link
					to="books"
					className="btn btn-secondary"
				>
					Mulai Membaca
				</Link>
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
				id="quotes"
				className="bg-accent"
			>
				<h1 className="text-3xl font-bold text-center">Quotes Untuk Kamu</h1>
				<div
					id="content-quotes"
					className="flex flex-col"
				>
					<p className="py-6 text-center">
						"Literasi bukan hanya tentang membaca, tetapi juga tentang memahami,
						menganalisis, dan menginterpretasikan informasi, mari bersama-sama
						membuka jendela ini untuk memperluas cakrawala pengetahuan"
					</p>
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default Homepage;
