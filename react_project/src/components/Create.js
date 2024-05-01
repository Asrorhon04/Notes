import React from 'react';
import { useState } from 'react';
import env from "../env.json";

function Create() {

	const [url, setUrl] = useState('');
	const [lineClass, setLineClass] = useState('hide');
	const [formClass, setFormClass] = useState('');

	let sendData = (obj) => {
		setFormClass('hide');
		setLineClass('');
		fetch(env.urlBackEnd, {
			method: "POST",
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify(obj)
		})
			.then(respone => respone.json())
			.then(response => {
				console.log(response);
				if (response.result) {
					setUrl(env.url + '/' + response.url);
				}
			})
	}

	let loadDataFromForm = (event) => {
		event.preventDefault();
		let note = event.target.elements.note.value;
		note = note.trim();
		if (note === '') {
			alert("Заполните поля");
			return false;
		}
		sendData({ note: note });

	}

	return (
		<div className='container mt-5' >
			<form action="" onSubmit={loadDataFromForm} className={formClass}>
				<div className=''>
					<label htmlFor="note" className='form-label mb-3 text-success'>Введите заметку</label>
					<textarea name="note" id="note" defaultValue="" className='form-control mb-3 w-25' placeholder="Leave a comment here"></textarea>
					<button type="submit" className='btn btn-primary w-25'>Создать</button>
				</div>
			</form>
			<div className={lineClass}>
				<div className='mb-3 text-danger'>{url} </div>
				<div>
					<button onClick={function () { window.location.reload() }} className='btn btn-primary w-25'>
						Создать новую заметку
					</button>
				</div>
			</div>
		</div>
	);
}

export default Create;
