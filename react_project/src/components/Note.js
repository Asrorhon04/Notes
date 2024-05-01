//http://localhost:3000/note/17q97dj1op0323wwg9vkux4i
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from '../env.json';


function Note() {
	let { noteURL } = useParams();
	const [noteText, setNoteText] = useState('');
	const [lineClass, setLineClass] = useState('hide');
	const [formClass, setFormClass] = useState('hide'); // скрываем
	const [errorClass, setErrorClass] = useState('hide'); // скрываем


	useEffect(() => {
		if (noteURL !== undefined) {
			fetch(env.urlBackEnd, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: JSON.stringify({ "url": noteURL })
			})
				.then(response => response.json())
				.then(response => {
					if (response.result) {
						setNoteText(response.note);
						setLineClass('');
						setFormClass('hide');
						setErrorClass('hide');
					}
					else if (!response.result) {
						setLineClass('hide');
						setFormClass('hide');
						setErrorClass('');
					}
				})
		}
		else {
			setLineClass('hide');
			setFormClass('');
			setErrorClass('hide');
		}
	}, [noteURL]);

	function getNote(event) {
		event.preventDefault();
		let url = event.target.elements.url.value;
		url = url.trim();
		if (url === '') {
			alert('Заполните поля');
			return false;
		}
		noteURL = url;
		window.location.href = env.url + '/' + url;
	}

	function searchNote() {
		window.location.href = env.url;
	}

	return (
		<div className="container mt-5">
			<div className={lineClass}>
				<h4 className="text-primary">Note:</h4>
				<div className="mb-3 text-success fs-1">{noteText}</div>
				<div><button onClick={searchNote} className="btn btn-primary">Смотреть ещё один note</button></div>
			</div>
			<div className={errorClass}>
				<p className="text-danger fs-5">Произошла ошибка. Такой note не найден!!</p>
			</div>
			<div className={formClass}>
				<form action="" onSubmit={getNote}>
					<label htmlFor="url" className="mb-3 text-success">Введите hash заметки</label>
					<input type="text" name="url" id="url" className="form-control mb-3 w-25" />
					<button type="submit" className="btn btn-primary">Искать Note</button>
				</form>
			</div>
		</div>
	);
}

export default Note;