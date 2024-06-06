'use strict';

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const getPreviousElement = currElement => {
    let valueId = currElement.id;
    let valueIdToNumber = Math.abs(parseInt(valueId.replace(/[^0-9]/g, '')));
    const previousElem = document.getElementById(`ac-${valueIdToNumber - 1}`);
    return previousElem;
};

new Accordion('.accordion-container', {
    openOnInit: [0],
    beforeOpen: currElement => {
        const previousElem = getPreviousElement(currElement);

        if (currElement.id !== 'ac-0') {
            previousElem.classList.add('border-bottom-animate');
            currElement.classList.add('border-bottom-animate');
        }
    }
})

