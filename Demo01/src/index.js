import _ from 'lodash';
import './style.css';

function component(){
	var element=document.createElement('div');

	element.innerHTML=_.join(['Hello','webpa'],'');
	element.classList.add('hello');


	return element;
}

document.body.appendChild(component());

/*import Library from './library';
import './style.css';
import {cube} from './math.js';

if (module.hot) {
  module.hot.accept('./library', function() {
    console.log('Accepting the updated library module');
    Library.log();
    console.log(cube(5));
  })
}*/
