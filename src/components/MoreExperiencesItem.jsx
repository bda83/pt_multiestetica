import React from 'react';

export function MoreExperiencesItem({ opinion }) {
    const {owner, id, image, publishDate, text, link, comments} = opinion
    return (
        <>
            <div className="card__info">
                <img className="card__avatar" src={ owner.picture } alt="" />
                <h5 className="card__title">{ text }</h5>
                <p className="card__name">{ owner.firstName } { owner.lastName }</p>
            </div>

            <div className="card__links">
                <a className="card__likes" href="{ link }">{ comments } likes</a>
                <a className="card__read" href="{ link }">leer más</a>
                { link }
            </div>
        </>
    );
}