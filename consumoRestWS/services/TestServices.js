export const getAllPostsService = () => {
    fetch(
        'https://jsonplaceholder.typicode.com/posts'
    ).then((response) => { return response.json() }).then((json) => { console.log(json) })
}
export const createPostService = (post, fnExito) => {
    const config = {
        method: 'POST',
        body: JSON.stringify({
            codigo: post.codigo,
            descripcion: post.descripcion

        }),
        headers: {
            'Content-type': 'application/json'
        }
    }
    fetch(
        'http://192.168.1.15:8080/inventarios-1.0.0/rest/tiposdocumento/insertar', config
    )
        .then((response) => { return response.json() }).then((json) => { console.log(json) })
}

export const updatePostService = () => {
    const config = {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'mensaje final',
            body: 'hasta la vista baby',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json'
        }
    }

    fetch('https://jsonplaceholder.typicode.com/posts/1', config
    ).then((response) => { return response.json() }).then((json) => {
        console.log(json)
    })
}

export const getByUserIdService = () => {
    const config = {
        method: 'GET',
        body: JSON.stringify({
            id: 1,
            title: 'mensaje final',
            body: 'hasta la vista baby',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json'
        }
    }

    fetch('https://jsonplaceholder.typicode.com/posts?userId=1'
    ).then((response) => { return response.json() }).then((json) => {
        console.log(json)
    })
}
export const getXXXService = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(res => res.json())
        .then(json => console.log(json))
}

export const postYYYService = () => {
    const config = {
        method: 'POST',
        body: JSON.stringify({
            icon_url: "horrible",
            id: "7kGIhKP-T96ajacFtj5-MQ",
            url: "horrible",
            value: "horrible"
        }),
        headers: {
            'Content-type': 'application/json'
        }
    }

    fetch('https://api.chucknorris.io/jokes'
    ).then((response) => { return response.json() }).then((json) => {
        console.log(json)
    })
}

export const putZZZService = () => {
    fetch('https://fakestoreapi.com/products/1', {
        method: "PUT",
        body: JSON.stringify(
            {
                title: 'horrible',
                price: 5,
                description: 'horrible',
                image: 'horrible',
                category: 'horrible'
            }
        ),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(json => console.log(json))
}

export const getDocumentTypesService = () => {
    fetch("http://192.168.1.15:8080/inventarios-1.0.0/rest/tiposdocumento/recuperar").then((response) => { return response.json() }).then((json) => {
        console.log(json)
    })
}