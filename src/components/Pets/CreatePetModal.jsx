import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useState, useRef } from 'react';
import { Cropper } from 'react-cropper';
import 'cropperjs/dist/cropper.css';

Modal.setAppElement('#root');

// this transforms file to base64
const file2Base64 = (file) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result?.toString() || '');
		reader.onerror = (error) => reject(error);
	});
};

const CreatePetModal = ({ modalIsOpen, afterOpenModal, closeModal }) => {
	// ref of the file input
	const fileRef = useRef();

	// the selected image
	const [uploaded, setUploaded] = useState(null);

	// the resulting cropped image
	const [cropped, setCropped] = useState(null);

	// the reference of cropper element
	const cropperRef = useRef();

	const onFileInputChange = (e) => {
		const file = e.target?.files?.[0];
		if (file) {
			file2Base64(file).then((base64) => {
				setUploaded(base64);
			});
		}
	};

	const onCrop = () => {
		const imageElement = cropperRef?.current;
		const cropper = imageElement?.cropper;
		setCropped(cropper.getCroppedCanvas().toDataURL());
	};

	const {
		register,
		handleSubmit,
		reset,
		// setError,
		// eslint-disable-next-line
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			givenName: '',
			breed: '',
			age: '',
			bio: '',
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
			contentLabel="Fill create pet modal">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex bg-white flex-col p-6 space-y-4 border rounded-md border-amber-500 &[ReactModal__Overlay--after-open:translate-y-0]">
				<div className="flex justify-between items-center">
					<p className="text-xl text-amber-500">Додати улюбленця</p>
					<button type="button" onClick={closeModal}>
						<XMarkIcon className="w-6 h-6 text-black" />
					</button>
				</div>
				<div className="text-center flex items-center flex-col space-y-2">
					<input
						type="file"
						style={{ display: 'none' }}
						ref={fileRef}
						onChange={onFileInputChange}
						accept="image/png,image/jpeg,image/gif"
					/>
					{uploaded ? (
						<div>
							<Cropper
								src={uploaded}
								style={{ height: 256, width: 256 }}
								autoCropArea={1}
								aspectRatio={1}
								viewMode={3}
								guides={false}
								ref={cropperRef}
							/>
							<button onClick={() => fileRef.current?.click()}>Змінити</button>
						</div>
					) : (
						<>
							<button
								onClick={() => fileRef.current?.click()}
								className="w-48 h-48 transition-all bg-cover border brightness-90 rounded-md border-violet-500 bg-violet-300 hover:bg-violet-300/50">
								<span className="text-violet-700">Додати</span>
							</button>
						</>
					)}
					<p>Фото</p>
				</div>
				<div className="space-y-2">
					<div className="w-full flex justify-between items-center space-x-4">
						<span>Кличка</span>
						<input
							type="text"
							{...register('givenName', { required: 'Введіть кличку улюбленця' })}
							className="py-2 px-2 border rounded-md border-amber-500 focus:outline-none focus:ring-amber-800 focus:border-amber-800"
						/>
					</div>
					<div className="w-full flex justify-between items-center space-x-4">
						<span>Порода</span>
						<input
							type="text"
							{...register('breed', { required: 'Введіть породу улюбленця' })}
							className="py-2 px-2 border rounded-md border-amber-500 focus:outline-none focus:ring-amber-800 focus:border-amber-800"
						/>
					</div>
					<div className="w-full flex justify-between items-center space-x-4">
						<span>Вік</span>
						<input
							type="text"
							{...register('age', { required: 'Введіть  вік улюбленця' })}
							className="py-2 px-2 border rounded-md border-amber-500 focus:outline-none focus:ring-amber-800 focus:border-amber-800"
						/>
					</div>
					<div className="w-full flex justify-between items-center space-x-4">
						<span>Біографія</span>
						<input
							{...register('bio')}
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
