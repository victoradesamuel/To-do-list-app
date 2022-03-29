import _ from 'lodash';
import './style.css';
import picture from './image.jpg'
function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    // Lodash now imported by this script
    element.innerHTML = _.join(['Hello', 'welcome to', 'webpack'], ' ');

    // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = picture;

  element.appendChild(myIcon);
  
    return element;
  }
  
  document.body.appendChild(component())