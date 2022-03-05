import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Experience } from './components/Experience';
import { MoreExperiencesList } from './components/MoreExperiencesList';

export function App() {
    const [opinions, setOpinions] = useState([
        {
            "owner": {
                "id": "uQrnqsqyh8FjSXAPc7oA",
                "email": "emilie.lambert@example.com",
                "title": "mrs",
                "picture": "https://randomuser.me/api/portraits/women/93.jpg",
                "firstName": "Emilie",
                "lastName": "Lambert"
            },
            "id": "UWdcOFTc7DfzOhI6LpI4",
            "image": "https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg",
            "publishDate": "2020-05-24T14:53:17.598Z",
            "text": "Contentísima con mi aumento de labios",
            "link": "https://www.multiestetica.com/aumento-labios/experiencias/contentisima-doctor-bentue-172717",
            "comments": 43
        }
    ])
    return (
        <>
            <Experience />
            <MoreExperiencesList opinions={opinions} />
        </>
    );
}