import React from 'react';
import './components.css'

function Products() {
	return (
		<div>
			<div id="card-products">
				<div
					className="card w-96 bg-base-100 text-primary-content"
					style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)' }}
				>
					<div className="card-body">
						<div
							className="card-title flex"
							style={{
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<h2>Poin</h2>
							<img
								src="https://i.imgur.com/nTxMstT.png"
								alt=""
								style={{ width: '24px', height: '24px' }}
							/>
						</div>
						<p>
							Kumpulkan poin sebanyak-banyaknya untuk mendapatkan bacaan yang
							lengkap
						</p>
					</div>
				</div>
				<div
					className="card w-96 bg-base-100 text-primary-content"
					style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)' }}
				>
					<div className="card-body">
						<div
							className="card-title flex"
							style={{
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<h2>Bacaan Harian</h2>
							<img
								src="https://i.imgur.com/FZa6Fd2.png"
								alt=""
								style={{ width: '24px', height: '24px' }}
							/>
						</div>
						<p>
							Tingkatkan pengetahuan setiap hari dengan fitur bacaan harian
							terbaru dari kami!
						</p>
					</div>
				</div>
				<div
					className="card w-96 bg-base-100 text-primary-content"
					style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)' }}
				>
					<div className="card-body">
						<div
							className="card-title flex"
							style={{
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<h2>Koleksi Buku</h2>
							<img
								src="https://i.imgur.com/k4DCzax.png"
								alt=""
								style={{ width: '24px', height: '24px' }}
							/>
						</div>
						<p>
							Jadikan perpustakaan pribadimu di sini dan mulai petualangan
							membaca yang seru!
						</p>
					</div>
				</div>
				<div
					className="card w-96 bg-base-100 text-primary-content"
					style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.4)' }}
				>
					<div className="card-body">
						<div
							className="card-title flex"
							style={{
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<h2>Workshop Online</h2>
							<img
								src="https://i.imgur.com/Ze2fSyI.png"
								alt=""
								style={{ width: '24px', height: '24px' }}
							/>
						</div>
						<p>
							Mulailah perjalanan menuju kesuksesanmu hari ini dengan fitur
							workshop online kami!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Products;
