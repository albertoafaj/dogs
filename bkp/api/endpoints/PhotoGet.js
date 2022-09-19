import React from 'react'

function handleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/api/photo/32257')
        .then(response => {
            console.log(response);
            return response.json();
        }).then(json => {
            console.log(json);
            return json
        })
}

const PhotoGet = () => {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <button>Enviar</button>


        </form>
    )
}

export default PhotoGet
