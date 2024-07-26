import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from '../components/Navbbar';
import Footer2 from '../components/Footer2';
import { addDaily } from '../redux/actions/dailyActions';
import { useHistory } from 'react-router-dom';

function CreateDailyPage() {
	const dispatch = useDispatch();
	const history = useHistory();
	const [dailyData, setDailyData] = useState({
		judul: '',
		kategori: '',
		deskripsi: '',
		isi: '',
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setDailyData({ ...dailyData, [name]: value });
	};

	const handleAddDaily = (e) => {
		e.preventDefault();
		dispatch(addDaily(dailyData));
		history.push('/dailys');
	};

	return (
		<div>
			<Navbar />

			<div
				className="flex-col h-screen pt-20"
				id="create-content"
			>
				<h1 className="font-semibold text-3xl text-center">Buat Bacaan Baru</h1>

				<form onSubmit={handleAddDaily}>
					<div
						className="flex justify-between items-center pt-6"
						style={{ gap: '1.5em' }}
					>
						<h1 className="w-44 text-base">Judul Bacaan :</h1>
						<input
							type="text"
							name="judul"
							value={dailyData.judul}
							onChange={handleInputChange}
							className="input input-bordered w-full min-w-xs"
						/>
					</div>

					<div
						className="flex justify-between items-center pt-6"
						style={{ gap: '1.5em' }}
					>
						<h1 className="w-44 text-base">Kategori Bacaan :</h1>
						<input
							type="text"
							name="kategori"
							value={dailyData.kategori}
							onChange={handleInputChange}
							className="input input-bordered w-full min-w-xs"
						/>
					</div>

					<div
						className="flex justify-between items-center pt-6"
						style={{ gap: '1.5em' }}
					>
						<h1 className="w-44 text-base">Deskripsi Bacaan :</h1>
						<input
							type="text"
							name="deskripsi"
							value={dailyData.deskripsi}
							onChange={handleInputChange}
							className="input input-bordered w-full min-w-xs"
						/>
					</div>

					<div
						className="flex justify-between items-center pt-6"
						style={{ gap: '1.5em' }}
					>
						<h1 className="w-44 text-base">Isi Bacaan :</h1>
						<textarea
							typeof="text"
							name="isi"
							value={dailyData.isi}
							onChange={handleInputChange}
							className="textarea textarea-bordered textarea-lg w-full min-w-xs h-72 resize-none"
						></textarea>
					</div>

					<div className="flex justify-center py-6">
						<button className="btn btn-secondary">Tambah Bacaan</button>
					</div>
				</form>

				<Footer2 />
			</div>
		</div>
	);
}

export default CreateDailyPage;
