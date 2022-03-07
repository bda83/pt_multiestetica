import React from 'react';
import retrieveExperiences from '../logic/retrieve-experiences';
import { MoreExperiencesItem } from './MoreExperiencesItem';
class MoreExperiencesList extends React.Component {

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
                {this.state.opinions && <section className="more-experiences">
                    <header className="more-experiences__header">
                        <h3 className="more-experiences__title">Más experiencias</h3>
                        <a className="more-experiences__link" href="#">Ver todas</a>
                    </header>

                    <ul className="more-experiences__list">
                        {this.state.opinions.map(opinion => <li className="more-experiences__item" key={opinion.id}><MoreExperiencesItem opinion={opinion} /></li>)}
                    </ul>
                </section>}
            </>
        );
    }
}

export default MoreExperiencesList;