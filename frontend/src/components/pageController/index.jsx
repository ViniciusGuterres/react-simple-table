import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft  } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight  } from '@fortawesome/free-solid-svg-icons';


export default function PageController(props) {

    return (
        <div>
            <FontAwesomeIcon
                icon={faBackward}
                style={styles.icons}
                onClick={() => props.goInitial()}
            />
            <FontAwesomeIcon
                icon={faAngleLeft} 
                style={styles.icons}
                onClick={() => props.goBackward()}
            />
            <FontAwesomeIcon
                icon={faAngleRight}
                style={styles.icons}
                onClick={() => props.goForward()}
            />
            <FontAwesomeIcon
                icon={faForward}
                style={styles.icons}
                onClick={() => props.goToEnd()}
            />

        </div>
    )
};

const styles = {
    icons: {
        padding: '12px',
        fontSize: '25px',
        cursor: 'pointer',
        backgroundColor: 'rgba(45, 72, 95, 0.76)',
        color: '#fff',
        borderRight: '1px solid #00000026'
        
    }
}