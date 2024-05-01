function Main() {
	return (
		<div className="container mt-5">
			<div className="mb-5">
				<div className="btn btn-primary me-3">
					<a href="/create" className="text-light">Создать Note</a>
				</div>
				<div className="btn btn-primary ms-3">
					<a href="/note" className="text-light">Просмотреть Note</a>
				</div>
			</div>
			<div className="text">
				<p><b>ShareNotes</b> – сервис для обмена заметками. Создайте заметку, отправьте ссылку на заметку и ваш друг сможет ее просмотреть.
					После просмотра заметка будет удалена (или по истечении 15 минут с момента создания).</p>
				<p>Как сделать заметку? </p>
				<ul>
					<li>Пройдите по ссылке</li>
					<li>Вставьте текст и нажмите Create</li>
					<li>Отправьте сгенерированный адрес другу!</li>
				</ul>
				<p>Как прочитать заметку? Перейдите по присланному URL, либо введите адрес руками здесь.</p>
			</div>
		</div>
	);
}

export default Main;
