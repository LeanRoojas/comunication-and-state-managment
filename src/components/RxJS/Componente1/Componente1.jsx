import React from 'react';
import { sharinInformationService } from '../../../services/sharing-information.service';

const Componente1 = () => {

	const handleClick = (event) => {
		sharinInformationService.setSubject(true)
	}

	const handleClickNo = (event) => {
		sharinInformationService.setSubject(false)
	}
	return <div >
		<button onClick={handleClick}>Send information</button>
		<button onClick={handleClickNo}>Don't send information</button>
	</div>;
};

export default Componente1;
