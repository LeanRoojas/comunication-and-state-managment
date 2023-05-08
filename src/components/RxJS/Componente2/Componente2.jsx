import {useEffect, useState} from 'react';
import { sharinInformationService } from '../../../services/sharing-information.service';

const Componente2 = () => {

	const [count, setCount] = useState(0)

	const suscription$ = sharinInformationService.getSubject()

	useEffect(() => {
		suscription$.subscribe(data => {
			if(!!data) setCount(count + 1)
		})
	})

	return <div >{count}</div>;
};

export default Componente2;
