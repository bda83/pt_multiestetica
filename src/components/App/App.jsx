import React from 'react';

import './app.scss';

import { OpinionMain } from '../OpinionMain/OpinionMain';
import MoreExperiences from '../MoreExperiences/MoreExperiences';

export function App() {
    return (
        <>
            <OpinionMain />
            <MoreExperiences />
        </>
    );
}