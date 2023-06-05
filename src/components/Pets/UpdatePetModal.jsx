import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useState, useRef } from 'react';
import { Cropper } from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import { dataUrlToFile } from '../../utils/dataUrlToFile';
import { useUpdatePetMutation } from '../../services/petService';
import { useEffect } from 'react';

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

const UpdatePetModal = ({ modalIsOpen, closeModal }) => {
	const pet = modalIsOpen.pet;
	const [updatePet] = useUpdatePetMutation();
	const {
		register,
		handleSubmit,
		reset,
		// setError,
		// eslint-disable-next-line
		formState: { errors, isValid },
	} = useForm({
		mode: 'onSubmit',
	});
	useEffect(() => {
		reset();
	}, [pet, reset]);
	const fileRef = useRef();

	const [uploaded, setUploaded] = useState(null);
	const cropperRef = useRef();

	const onFileInputChange = (e) => {
		const file = e.target?.files?.[0];
		if (file) {
			file2Base64(file).then((base64) => {
				setUploaded(base64);
			});
		}
	};

	const crop = () => {
		const imageElement = cropperRef?.current;
		const cropper = imageElement?.cropper;
		return cropper?.getCroppedCanvas().toDataURL();
	};

	const closeCurrentModal = () => {
		setUploaded(null);
		closeModal();
		reset();
	};

	const onSubmit = async (values) => {
		const cropped = crop();
		const formData = new FormData();
		formData.append('givenName', values.givenName);
		formData.append('breed', values.breed);
		formData.append('age', values.age);
		formData.append('bio', values.bio);
		cropped &&
			formData.append(
				'avatarMedia',
				await dataUrlToFile(cropped, `petAvatar-${Math.random(10000000)}.png`, 'image/png'),
			);
		updatePet({ petId: modalIsOpen.pet?._id, data: formData });
		closeCurrentModal();
	};

	return (
		<Modal
			closeTimeoutMS={250}
			isOpen={modalIsOpen.show}
			onAfterOpen={() => (document.body.style.overflow = 'hidden')}
			onAfterClose={() => (document.body.style.overflow = 'unset')}
			onRequestClose={closeCurrentModal}
			className={'mx-auto w-fit my-auto p-4'}
			contentLabel="Fill create pet modal">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex bg-white flex-col p-6 space-y-4 border rounded-md border-amber-500 &[ReactModal__Overlay--after-open:translate-y-0]">
				<div className="flex items-center justify-between">
					<p className="text-xl text-amber-500">Редагувати улюбленця</p>
					<button type="button" onClick={closeCurrentModal}>
						<XMarkIcon className="w-6 h-6 text-black" />
					</button>
				</div>
				<div className="flex flex-col items-center space-y-2 text-center">
					<input
						type="file"
						style={{ display: 'none' }}
						ref={fileRef}
						onChange={onFileInputChange}
						accept="image/png,image/jpeg,image/gif"
					/>
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
								style={{ maxHeight: '80vh', width: 'auto' }}
								autoCropArea={1}
								responsive={true}
								aspectRatio={1}
								viewMode={2}
								guides={false}
								ref={cropperRef}
							/>
							<button type="button" onClick={() => fileRef.current?.click()}>
								Змінити
							</button>
						</div>
					) : (
						<div className="relative w-48 h-48">
							{pet && (
								<img src={pet.avatarUrl} alt="Pet Avatar" className="w-full h-full rounded-md" />
							)}
							<button
								type="button"
								onClick={() => fileRef.current?.click()}
								className="absolute top-0 left-0 w-48 h-48 transition-all bg-cover border rounded-md shadow-inner brightness-90 border-violet-500 bg-violet-300/30 hover:bg-violet-300/70">
								<span className="font-semibold text-violet-700">Змінити</span>
							</button>
						</div>
					)}
					<p>Фото</p>
				</div>
				<div className="space-y-2">
					<div className="flex items-center justify-between w-full space-x-4">
						<span>Кличка</span>
						<input
							type="text"
							defaultValue={pet?.givenName}
							{...register('givenName', { required: 'Введіть кличку улюбленця' })}
							className="px-2 py-2 border rounded-md border-amber-500 focus:outline-none focus:ring-amber-800 focus:border-amber-800"
						/>
					</div>
					<div className="flex items-center justify-between w-full space-x-4">
						<span>Порода</span>
						<input
							type="text"
							defaultValue={pet?.breed}
							{...register('breed', { required: 'Введіть породу улюбленця' })}
							className="px-2 py-2 border rounded-md border-amber-500 focus:outline-none focus:ring-amber-800 focus:border-amber-800"
						/>
					</div>
					<div className="flex items-center justify-between w-full space-x-4">
						<span>Вік</span>
						<input
							type="number"
							min={0}
							max={100}
							defaultValue={pet?.age}
							{...register('age', { required: 'Введіть  вік улюбленця' })}
							className="px-2 py-2 border rounded-md w-max border-amber-500 focus:outline-none focus:ring-amber-800 focus:border-amber-800"
						/>
					</div>
					<div className="flex items-center justify-between w-full space-x-4">
						<span>Біографія</span>
						<input
							type="text"
							defaultValue={pet?.bio}
							{...register('bio')}
							className="px-2 py-2 border rounded-md border-amber-500 focus:outline-none focus:ring-amber-800 focus:border-amber-800"
						/>
					</div>
				</div>
				<button
					type="submit"
					className="p-2.5 text-white font-semibold leading-none border rounded-xl border-violet-700 bg-violet-600">
					Редагувати
				</button>
			</form>
		</Modal>
	);
};

export default UpdatePetModal;
