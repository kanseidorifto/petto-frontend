const LeavePreferences = () => {
	return (
		<main className="px-6 py-4 text-white rounded-md bg-violet-400">
			<div className="flex flex-col">
				<div className="grid grid-cols-3 gap-6 p-3">
					<div className="self-center text-right">
						<p>Вийти з облікового запису?</p>
					</div>
					<div className="col-span-2">
						<button
							onClick={() => alert('LOGOUT')}
							className="p-3 min-w-[200px] leading-none bg-amber-500 rounded-xl">
							Вихід
						</button>
					</div>
				</div>
			</div>
		</main>
	);
};

export default LeavePreferences;
