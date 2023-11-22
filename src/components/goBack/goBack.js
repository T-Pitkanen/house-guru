import styles from './goBack.module.css';
import { FaArrowLeft } from 'react-icons/fa';

const GoBackButton = () => {
	const goBack = () => {
		window.history.back();
	};

	return (
		<button className={styles.button} onClick={goBack}>
			<FaArrowLeft className={styles.icon} />
			Back
		</button>
	);
};

export default GoBackButton;
