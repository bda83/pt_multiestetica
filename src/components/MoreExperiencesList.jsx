import React from 'react';
import { MoreExperiencesItem } from './MoreExperiencesItem';

export function MoreExperiencesList({ opinions }) {
    return (
        <>
            <div className="section__header">
                <h3 className="section__title">Más experiencias</h3>
                <a className="section__link" href="#">ver todas</a>
            </div>
            <ul>
                {opinions.map((opinion) => (
                    <MoreExperiencesItem key={opinion.id} opinion={opinion}/>
                ))}
            </ul>
            
        </>
    );
}