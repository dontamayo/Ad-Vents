import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';

const rootEL = document.getElementById('root');

let render = () => {
    ReactDOM.render(<App />, rootEL)
}
if (module.hot){
    module.hot.accept('./app/layout/App', () => {
        setTimeout(render)

    })
}
render();


//ReactDOM.render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
