import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { XMarkIcon } from '@heroicons/react/24/outline';
import TextareaAutosize from 'react-textarea-autosize';
Modal.setAppElement('#root');

const CreatePostModal = ({ modalIsOpen, afterOpenModal, closeModal }) => {
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
			className={'mx-auto w-fit my-auto p-4'} //absolute inset-0
			contentLabel="Fill register modal">
			{/* <div className="p-6 bg-white border border-black w-fit rounded-3xl  &[ReactModal__Overlay--after-open:translate-y-0]"> */}
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex bg-white flex-col p-6 space-y-4 border rounded-md border-amber-500 &[ReactModal__Overlay--after-open:translate-y-0]">
				<div className="flex justify-between">
					<p className="text-2xl align-middle text-amber-500">Створити допис</p>
					<button type="button" onClick={closeModal}>
						<XMarkIcon className="w-6 h-6 text-black" />
					</button>
				</div>
				<button className="py-24 transition-all border rounded-md border-violet-500 bg-violet-300 hover:bg-violet-300/50">
					<span className="text-violet-700">Додати світлини</span>
				</button>
				<TextareaAutosize
					{...register('writtenText')}
					className="flex-1 p-2 text-base bg-transparent border rounded appearance-none resize-none border-violet-500 text-neutral-900 placeholder:text-neutral-600 placeholder:font-light focus:bg-violet-200/50 focus:outline-none focus:border-violet-700 focus:ring-none"
					// value={commentText}
					// onChange={(e) => setCommentText(e.target.value)}
					placeholder="Що у вас нового?"
				/>
				<div className="p-2 border rounded-md border-violet-500 space-y-2.5">
					<div className="flex items-center justify-between space-x-2">
						<span className="text-neutral-600">Позначте своїх улюбленців</span>
						<button className="px-3 py-1 leading-none text-white rounded-full bg-violet-600">
							Додати
						</button>
					</div>
					<div className="grid grid-cols-2 gap-2 max-lg:grid-cols-2 max-md:grid-cols-1">
						{['asd', 'asdffffff', 'asdafggggf'].map((obj, index) => (
							<div key={index} className="relative group">
								<div className="flex p-1 items-center border rounded-md border-violet-500 space-x-1.5">
									<img
										src="https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-06/Siberian%20Forest.2.jpg?h=ac023024&itok=B1W2TQ2l"
										alt=""
										className="w-8 h-8 rounded-full"
									/>
									<span className="truncate">Барсasd{obj}</span>
								</div>
								<button className="absolute top-0 w-full h-full text-center transition-all border border-red-700 rounded-md opacity-0 bg-red-700/80 group-hover:opacity-100">
									<XMarkIcon className="w-6 h-6 mx-auto text-white" />
								</button>
							</div>
						))}
					</div>
				</div>
				<button
					type="submit"
					className="p-2.5 text-white leading-none border rounded-xl border-amber-600 bg-amber-500">
					Опублікувати
				</button>
			</form>
			{/* </div> */}
		</Modal>
	);
};

export default CreatePostModal;
