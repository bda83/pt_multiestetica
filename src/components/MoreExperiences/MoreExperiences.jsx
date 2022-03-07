import React from 'react';
import retrieveExperiences from '../../logic/retrieve-experiences';
import { Experience } from '../Experience/Experience';

class MoreExperiences extends React.Component {

    state = {}

    componentDidMount() {
        this.getExperiencesList()
    }

    getExperiencesList = () => {
        retrieveExperiences()
            .then(opinions => this.setState({ opinions }))
    };

    render() {
        return (
            <>
                {this.state.opinions && <aside className="more-experiences">
                    <header className="more-experiences__header">
                        <h3 className="more-experiences__title">Más experiencias</h3>
                        <a className="more-experiences__link" href="#">Ver todas</a>
                    </header>

                    <ul className="more-experiences__list">
                        {this.state.opinions.map(opinion => {
                            if (opinion.comments >= 20)
                                return <li className="more-experiences__item" key={opinion.id}><Experience opinion={opinion} /></li>
                    })}
                    </ul>
                </aside>}
            </>
        );
    }
}

export default MoreExperiences;