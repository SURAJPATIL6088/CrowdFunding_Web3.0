import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import {ChainId, ThirdwebProvider} from '@thirdweb-dev/react';
import { Goerli } from "@thirdweb-dev/chains";

import App from './App';
import { StateContextProvider } from './context';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider activeChain={Goerli}>
        <Router>
            <StateContextProvider> 
                <App/>
            </StateContextProvider>
        </Router>
    </ThirdwebProvider>
)


