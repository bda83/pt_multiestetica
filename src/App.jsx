import React from 'react';
import ReactDOM from 'react-dom';
import { Experience } from './components/Experience';
import MoreExperiencesList from './components/MoreExperiencesList';

export function App() {
    return (
        <>
            <Experience />
            <MoreExperiencesList />
        </>
    );
}