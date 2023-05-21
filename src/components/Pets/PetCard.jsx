import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import PetPopup from './PetPopup';
import Popup from 'reactjs-popup';

const PetCard = () => {
	return (
		<div className="w-44 rounded-md bg-violet-300">
			<div className="w-44 h-44 relative">
				<img
					src="https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-06/Siberian%20Forest.2.jpg?h=ac023024&itok=B1W2TQ2l"
					alt=""
					className="rounded-t-md"
				/>

				<Popup
					trigger={
						<button type="button" className="absolute top-0 right-0 m-2">
							<EllipsisVerticalIcon className="w-8 h-8 text-violet-700" />
						</button>
					}
					position="bottom right">
					<PetPopup own />
				</Popup>
			</div>
			<div className="p-1 bg-violet-500 rounded-b-md">
				<p className="text-center text-white truncate">Барсик</p>
			</div>
		</div>
	);
};

export default PetCard;
