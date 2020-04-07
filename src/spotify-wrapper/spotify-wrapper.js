const tests = {
  search: (query, type) => {
    fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`);
  },
  searchAlbums: () => {},
  searchArtists: () => {},
  searchTracks: () => {},
  searchPlaylists: () => {},
};

export default tests;
