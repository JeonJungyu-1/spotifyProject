import axios from "axios"

// let token = window.localStorage.getItem("token");

export function getAvailableGenre(token : string) {
    return axios.get(`https://api.spotify.com/v1/recommendations/available-genre-seeds`, {
        headers : {
            Authorization: `Bearer ${token}`
        }
    })
}

export function getGenreMusic(token : string, genre: string) {
    return axios.get(`https://api.spotify.com/v1/search?q=genre:hip%20hop&type=track`, {
        headers : {
            Authorization: `Bearer ${token}`
        }
    });
}

// const { data } = await axios.get(`https://api.spotify.com/v1/artists/`, {
    // headers: {
    //   Authorization: `Bearer ${params.token}`,
    //   Content-Type: "application/json"
    // },
//   });