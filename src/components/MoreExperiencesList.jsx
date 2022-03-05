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
                {this.state.opinions && <section className="section">
                    <div className="section__header">
                        <h3 className="section__title">Más experiencias</h3>
                        <a className="section__link" href="#">ver todas</a>
                    </div>

                    <ul>
                        {this.state.opinions.map(opinion => <li className="card" key={opinion.id}><MoreExperiencesItem opinion={opinion} /></li>)}
                    </ul>
                </section>}
            </>
        );
    }
}

export default MoreExperiencesList;