import React, { useState } from 'react';

import NavMenu from '../navMenu';
import ContentCard from '../contentCard';
import Table from '../table';

export default function ExtendedRowBody(props) {

    // verify if props exist
    const rowBodyType = props.extendRowConfig && props.extendRowConfig.rowBodyType;
    const dataColumn = props.extendRowConfig && props.extendRowConfig.dataColumnsConfig;


    return (
        <div>
            {props.isExtended ? props.extendRowContent : null}
        </div>
    )
};

const styles = {
    rowExtended: {
        backgroundColor: '#f9f9f9',
        display: 'flex',
        height: '400px',
        opacity: '1',
        boxShadow: '10px 9px 5px 1px rgba(0,0,0,0.13)',
        transition: 'width 0.35s 0.35s, height 0.25s 0.25s, opacity 0.50s',
    },
    headerData: {
        backgroundColor: '#696363c4',
        padding: '10px',
        borderRadius: '10px',
        cursor: 'pointer',
        width: '90%'
    }
};
