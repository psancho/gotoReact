import React from 'react';
import ReactDOM from 'react-dom';

const hello = 'Hellow, world!';

ReactDOM.render(
    <h1>{hello}</h1>,
    document.getElementById('root')
);

module.hot.accept();
