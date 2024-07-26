import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from '../components/Navbbar';
import Footer2 from '../components/Footer2';
import { addBook } from '../redux/actions/bookActions';
import { useHistory } from 'react-router-dom';

function CreateBookPage() {
	const dispatch = useDispatch();
	const history = useHistory();
	const [bookData, setBookData] = useState({
		judul: '',
		bahasa: '',
		penulis: '',
		tahun_terbit: '',
		kategori: '',
		sinopsis: '',
		gambar: '',
		iframe: '',
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setBookData({ ...bookData, [name]: value });
	};

	const handleAddBook = (e) => {
		e.preventDefault();
		dispatch(addBook(bookData));
		history.push('/books');
	};

	return (
		<div>
			<Navbar />

			<div
				className="flex-col h-screen pt-20"
				id="create-content"
			>
				<h1 className="font-semibold text-3xl text-center">Tambah Buku Baru</h1>

				<form onSubmit={handleAddBook}>
					<div
						className="flex justify-between items-center pt-6"
						style={{ gap: '1.5em' }}
					>
						<h1 className="w-44 text-base">Judul Buku :</h1>
						<input
							type="text"
							name="judul"
							value={bookData.judul}
							onChange={handleInputChange}
							className="input input-bordered w-full min-w-xs"
						/>
					</div>

					<div
						className="flex justify-between items-center pt-6"
						style={{ gap: '1.5em' }}
					>
						<h1 className="w-44 text-base">Bahasa :</h1>
						<input
							type="text"
							name="bahasa"
							value={bookData.bahasa}
							onChange={handleInputChange}
							className="input input-bordered w-full min-w-xs"
						/>
					</div>

					<div
						className="flex justify-between items-center pt-6"
						style={{ gap: '1.5em' }}
					>
						<h1 className="w-44 text-base">Penulis :</h1>
						<input
							type="text"
							name="penulis"
							value={bookData.penulis}
							onChange={handleInputChange}
							className="input input-bordered w-full min-w-xs"
						/>
					</div>

					<div
						className="flex justify-between items-center pt-6"
						style={{ gap: '1.5em' }}
					>
						<h1 className="w-44 text-base">Tahun Terbit :</h1>
						<input
							type="text"
							name="tahun_terbit"
							value={bookData.tahun_terbit}
							onChange={handleInputChange}
							className="input input-bordered w-full min-w-xs"
						/>
					</div>

					<div
						className="flex justify-between items-center pt-6"
						style={{ gap: '1.5em' }}
					>
						<h1 className="w-44 text-base">Kategori Buku :</h1>
						<input
							type="text"
							name="kategori"
							value={bookData.kategori}
							onChange={handleInputChange}
							className="input input-bordered w-full min-w-xs"
						/>
					</div>

					<div
						className="flex justify-between items-center pt-6"
						style={{ gap: '1.5em' }}
					>
						<h1 className="w-44 text-base">Sinopsis :</h1>
						<textarea
							typeof="text"
							name="sinopsis"
							value={bookData.sinopsis}
							onChange={handleInputChange}
							className="textarea textarea-bordered textarea-lg w-full min-w-xs h-72 resize-none"
						></textarea>
					</div>

					<div
						className="flex justify-between items-center pt-6"
						style={{ gap: '1.5em' }}
					>
						<h1 className="w-44 text-base">Link Gambar :</h1>
						<input
							type="text"
							name="gambar"
							value={bookData.gambar}
							onChange={handleInputChange}
							className="input input-bordered w-full min-w-xs"
						/>
					</div>

					<div
						className="flex justify-between items-center pt-6"
						style={{ gap: '1.5em' }}
					>
						<h1 className="w-44 text-base">Link Google Drive :</h1>
						<input
							type="text"
							name="iframe"
							value={bookData.iframe}
							onChange={handleInputChange}
							className="input input-bordered w-full min-w-xs"
						/>
					</div>

					<div className="flex justify-center py-6">
						<button
							type="submit"
							className="btn btn-secondary"
						>
							Tambah Buku
						</button>
					</div>
				</form>

				<Footer2 />
			</div>
		</div>
	);
}

export default CreateBookPage;
