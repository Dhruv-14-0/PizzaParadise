import { ChakraProvider } from '@chakra-ui/react';
import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import store from './store';
import { Analytics } from "@vercel/analytics/react"
ReactDOM.render(
	<Provider store={store}>
		<ChakraProvider>
			<BrowserRouter>
			<Analytics/>
				<App />
			</BrowserRouter>
		</ChakraProvider>
	</Provider>,
	document.getElementById('root'),
);
