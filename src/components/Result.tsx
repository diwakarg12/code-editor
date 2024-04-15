import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

// Define the Container component with styled-components
const Container = styled(Box)({
    height: '41vh',
});

// Define the shape of the context value
interface DataContextValue {
    html: string;
    css: string;
    js: string;
}

const Result: React.FC = () => {
    const [src, setSrc] = useState<string>('');
    const { html, css, js } = useContext<DataContextValue>(DataContext);

    const srcCode = `
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
 `;

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrc(srcCode);
        }, 250);

        return () => clearTimeout(timeout);
    }, [html, css, js, srcCode]);

    return (
        <Container style={html || css || js ? undefined : { background: '#444857' }}>
            <iframe
                srcDoc={src}
                title="output"
                sandbox="allow-scripts"
                width="100%"
                height="100%"
            />
        </Container>
    );
};

export default Result;
