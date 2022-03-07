import React from 'react';

export function Experience({ opinion }) {
    const {owner, id, image, publishDate, text, link, comments} = opinion
    return (
        <article className="card-experience">
            <header className="card-experience__header">
                <img className="card-experience__avatar" src={ owner.picture } alt="" />
                <div className="card-experience__texts">
                    <h5 className="card-experience__title">{ text }</h5>
                    <p className="card-experience__name">{ owner.firstName } { owner.lastName }</p>
                </div>
            </header>

            <div className="card-experience__info">
                <p className="card-experience__likes" href="{ link }">{ comments } comentarios</p>
                <a className="card-experience__read" href="{ link }">leer más <i className="icon-et-arrow-right"></i></a>
            </div>
        </article>
    );
}