const ProfileHeader = () => {
	return (
		<div>
			<div className="w-full rounded-md bg-violet-400">
				<div className="h-56 ProfileCover"></div>
				<div className="flex p-6 space-x-4 text-white rounded-md ProfileInfo bg-violet-500">
					<div className=" -mt-36">
						<img
							className="w-48 h-48 bg-white border rounded-full border-amber-300"
							src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.18169-9/15940916_690009601179378_1191888128728911677_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MzNkMYC_sIAAX8eO01d&_nc_ht=scontent-waw1-1.xx&oh=00_AfDzQhxcX60W8SjCEJ0iFVn8YHN4P9a3FCpR3YbByU12tQ&oe=648C86AA"
							alt=""
						/>
					</div>
					<div className="flex items-center justify-between flex-1">
						<div className="space-y-2">
							<h2 className="text-2xl font-semibold leading-none">Андрій Іваненко</h2>
							<p className="text-base font-light leading-none">біографія</p>
						</div>
						<div>
							<button className="text-xs leading-none bg-violet-600 min-w-[192px] p-3 rounded-xl">
								Редагувати профіль
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileHeader;
