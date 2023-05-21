import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { XMarkIcon } from '@heroicons/react/24/outline';
import TextareaAutosize from 'react-textarea-autosize';
Modal.setAppElement('#root');

const CreatePetModal = ({ modalIsOpen, afterOpenModal, closeModal }) => {
	const {
		register,
		handleSubmit,
		reset,
		// setError,
		// eslint-disable-next-line
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			writtenText: '',
		},
		mode: 'onSubmit',
		// shouldUseNativeValidation: true,
	});
	const closeOrderModal = () => {
		closeModal();
		reset();
	};

	const onSubmit = async (values) => {
		console.log(values);
		closeOrderModal();
	};

	return (
		<Modal
			closeTimeoutMS={250}
			isOpen={modalIsOpen.show}
			onAfterOpen={() => (document.body.style.overflow = 'hidden')}
			onAfterClose={() => (document.body.style.overflow = 'unset')}
			onRequestClose={closeOrderModal}
			className={'mx-auto w-fit my-auto p-4'}
			contentLabel="Fill update pet modal">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex bg-white flex-col p-6 space-y-4 border rounded-md border-amber-500 &[ReactModal__Overlay--after-open:translate-y-0]">
				<div className="flex justify-between items-center">
					<p className="text-xl text-amber-500">Додати улюбленця</p>
					<button type="button" onClick={closeModal}>
						<XMarkIcon className="w-6 h-6 text-black" />
					</button>
				</div>
				<div className="text-center space-y-2">
					<button className="w-48 h-48 transition-all border rounded-md border-violet-500 bg-violet-300 hover:bg-violet-300/50">
						<span className="text-violet-700">Додати</span>
					</button>
					<p>Фото</p>
				</div>
				<div className="space-y-2">
					<div className="w-full flex justify-between items-center space-x-4">
						<span>Кличка</span>
						<input
							type="text"
							className="py-2 px-2 border rounded-md border-amber-500 focus:outline-none focus:ring-amber-800 focus:border-amber-800"
						/>
					</div>
					<div className="w-full flex justify-between items-center space-x-4">
						<span>Порода</span>
						<input
							type="text"
							className="py-2 px-2 border rounded-md border-amber-500 focus:outline-none focus:ring-amber-800 focus:border-amber-800"
						/>
					</div>
					<div className="w-full flex justify-between items-center space-x-4">
						<span>Вік</span>
						<input
							type="text"
							className="py-2 px-2 border rounded-md border-amber-500 focus:outline-none focus:ring-amber-800 focus:border-amber-800"
						/>
					</div>
					<div className="w-full flex justify-between items-center space-x-4">
						<span>Біографія</span>
						<input
							type="text"
							className="py-2 px-2 border rounded-md border-amber-500 focus:outline-none focus:ring-amber-800 focus:border-amber-800"
						/>
					</div>
				</div>
				<button
					type="submit"
					className="p-2.5 text-white font-semibold leading-none border rounded-xl border-violet-700 bg-violet-600">
					Додати
				</button>
			</form>
		</Modal>
	);
};

export default CreatePetModal;
