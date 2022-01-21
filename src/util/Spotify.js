let accessToken = "";
export default {
    getAccessToken: function () {
        if (accessToken) {
            return accessToken;
        }
    },
    search: async function (term) {
        return new Promise((resolve) => {
            let response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            let data = await response.json();
            let tracks = data.map(function (track) {
                return {
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                };
            });
            resolve(tracks);
        });
    }
};