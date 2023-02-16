import React from 'react'
import Tableau from 'tableau-react';

const ClassificationOfDRG = () => {
    const options = {
        hideTabs: true,
        hideToolbar: true,
        height: '617px',
        width: '1093px',
    };
    return (
        <Tableau
            url="https://public.tableau.com/views/DataQuezt2023/Dashboard6"
            options={options}
        />
    )
}

export default ClassificationOfDRG