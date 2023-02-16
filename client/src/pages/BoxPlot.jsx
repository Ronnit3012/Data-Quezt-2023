import React from 'react';
import Tableau from 'tableau-react';

const BoxPlot = () => {
    const options = {
        hideTabs: true,
        hideToolbar: true,
        height: '617px',
        width: '1093px',
    };
    return (
        <Tableau
            url="https://public.tableau.com/views/DataQuezt2023/Dashboard7"
            options={options}
        />
    )
}

export default BoxPlot