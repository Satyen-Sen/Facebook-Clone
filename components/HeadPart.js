import React from 'react';
import Head from 'next/head'; 

function HeadPart() {

    return (
        <Head>
            <title>Home App</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
            <link rel="shortcut icon" href="/static/favicon.ico"/>
        </Head>
    );
}; 

export default HeadPart; 