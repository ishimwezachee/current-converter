import React from 'react';
import Navigation from './config/Navigation';
import { api } from './utils/api';

api('/latest?base=USD')
	.then((response) => {
		console.log('response', response);
	})
	.catch((error) => {
		console.log('error', error);
	});
export default () => <Navigation />;
