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
    <ThirdwebProvider activeChain={Goerli} clientId="eaad57df1900e3eaa40a638fab7e1fd8">
        <Router>
            <StateContextProvider> 
                <App/>
            </StateContextProvider>
        </Router>
    </ThirdwebProvider>
)


