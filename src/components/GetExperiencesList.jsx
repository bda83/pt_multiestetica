import React, { useEffect, useState } from 'react';
import { MoreExperiencesList } from './MoreExperiencesList';

export function GetExperiencesList() {
    const [aaaList, setAaaList] = useState([]);

    useEffect(() => {
        function retrieveExperiences() {
            return fetch('http://127.0.0.1:3000')
                .then(response => {
                    if (response.ok)
                        return response.json()
                            .then(response => response)
        
                    throw new Error('server error')
                })
        }

        const getExperiences = () => {
            retrieveExperiences()
                .then(items => setAaaList(items))
        }

        getExperiences()
    }, []);

    return (
        <>
            <MoreExperiencesList aaalist={aaaList} />
        </>
    );
}