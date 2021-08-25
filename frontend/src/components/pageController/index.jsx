import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

export default function PageController(props) {

    return (
        <div>
            <FontAwesomeIcon
                icon={faBackward}
            />
            <FontAwesomeIcon
                icon={faBackward}
            />
            <FontAwesomeIcon
                icon={faBackward}
            />
            <FontAwesomeIcon
                icon={faBackward}
            />
            <FontAwesomeIcon
                icon={faBackward}
            />
        </div>
    )
};