import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

// Import the Editor component
import Editor from './Editor';

// Import the context
import { DataContext } from '../context/DataProvider';

// Define the shape of the context value
interface DataContextValue {
    html: string;
    css: string;
    js: string;
    setHtml: React.Dispatch<React.SetStateAction<string>>;
    setCss: React.Dispatch<React.SetStateAction<string>>;
    setJs: React.Dispatch<React.SetStateAction<string>>;
}

// Define the Container component with styled-components
const Container = styled(Box)({
    backgroundColor: '#060606',
    height: '50vh',
    display: 'flex',
});

const Code: React.FC = () => {
    const { html, css, js, setHtml, setCss, setJs } = useContext<DataContextValue>(DataContext);

    return (
        <Container>
            <Editor
                language="xml"
                heading="HTML"
                value={html}
                onChange={setHtml}
                icon='/'
                color='#FF3C41'
            />
            <Editor
                language="css"
                heading="CSS"
                value={css}
                onChange={setCss}
                icon='*'
                color='#0EBEFF'
            />
            <Editor
                language="javascript"
                heading="JS"
                value={js}
                onChange={setJs}
                icon='( )'
                color='#FCD000'
            />
        </Container>
    );
};

export default Code;
