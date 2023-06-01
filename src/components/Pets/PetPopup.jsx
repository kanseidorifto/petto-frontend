import { useNavigate } from 'react-router-dom';

const PetPopup = ({ petId, openEditPet, own }) => {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col border-2 divide-y rounded-md text-violet-700 border-violet-700 bg-violet-300 divide-violet-700 hover:[&_>_*]:bg-violet-200 hover:[&_>_*]:rounded-md first:hover:[&_>_*]:rounded-b-none last:hover:[&_>_*]:rounded-t-none">
			<button onClick={() => navigate(`/pets/${petId}`)} className="p-2 text-sm leading-none">
				Переглянути профіль
			</button>
			{own && (
				<button onClick={() => openEditPet(petId)} className="p-2 text-sm leading-none">
					Змінити
				</button>
			)}
			{own && (
				<button
					onClick={() => alert(`delete pet ${petId}`)}
					className="p-2 text-sm leading-none text-red-700">
					Видалити допис
				</button>
			)}
		</div>
	);
};

export default PetPopup;
