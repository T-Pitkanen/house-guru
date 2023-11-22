import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './contact.module.css';

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors);

	return (
		<div className={styles.formWrapper}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div>
					{' '}
					<input
						type="text"
						placeholder="First name"
						{...register('First name', { required: true, maxLength: 80 })}
					/>
					<input
						type="text"
						placeholder="Last name"
						{...register('Last name', { required: true, maxLength: 100 })}
					/>
					<input
						type="email"
						placeholder="Email"
						{...register('Email', { required: true })}
					/>
					<input
						type="tel"
						placeholder="Number"
						{...register('Number', { required: true })}
					/>
				</div>
				<div>
					{' '}
					<input
						type="text"
						placeholder="Your Message..."
						{...register('Your Message...', { required: true, max: 250 })}
					/>
				</div>

				<input type="submit" />
			</form>
		</div>
	);
};

export default ContactForm;
