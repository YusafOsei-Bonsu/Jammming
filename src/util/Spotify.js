import axios from 'axios';
const clientID = "25386ade3c4c4f59a54769365f763e08";
const redirectURI = "http://localhost:3000/";
const spotifyURL = `https://accounts.spotify.com/authorize?client_id=${encodeURIComponent(clientID)}&response_type=token&scope=playlist-modify-public&redirect_uri=${encodeURIComponent(redirectURI)}`;
const spotifyWebAPI = "https://api.spotify.com/v1";
let accessToken = undefined;
let expiryIn = undefined;

const Spotify = {
    getAccessToken () {
        if (accessToken) {
            return accessToken;
        } else {
            let urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
            let urlExpiryIn = window.location.href.match(/expires_in=([^&]*)/);
            // Checking the existence of the access token and expiry time inside the url
            if (urlAccessToken && urlExpiryIn) {
                accessToken = urlAccessToken[1];
                expiryIn = Number(urlExpiryIn[1]);
                // Clear the parameters from the URL, so the app doesn’t try grabbing the access token after it has expired
                window.setTimeout(() => accessToken = '', expiresIn * 1000);
                window.history.pushState('Access Token', null, '/');
            } else {
                window.location = spotifyURL;
            }
        }
    },
    async search (term) {
        const config = {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        };
        const response = await axios.get(`${spotifyWebAPI}/search?type=track&q=${term.replace(' ', '%20')}`, config);
        console.log(response);
        return await response.data.tracks.items.map((track) => {
            return {
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
            }
        });
    }
};

export default Spotify;