export default function retrieveExperiences() {
    return fetch('http://127.0.0.1:3000')
        .then(response => {
            if (response.ok)
                return response.json()
                    .then(response => response)

            throw new Error('server error')
        })
}