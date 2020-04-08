// /* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-expressions */
// /* eslint-disable no-console */
// /* eslint-disable padded-blocks */
// /* eslint-disable space-before-function-paren */
// /* eslint-disable prefer-arrow-callback */
// /* eslint-disable func-names */
// /* eslint-disable no-undef */
// /* eslint-disable no-var */
// /* eslint-disable prefer-destructuring */

// import chai, { expect } from 'chai';
// import sinon from 'sinon';
// import sinonChai from 'sinon-chai';

// // import tests from '../../src/spotify-wrapper/spotify-wrapper';

// chai.use(sinonChai);

// global.fetch = require('node-fetch');

// describe('Main', function () {
//   describe('Spotify Wrapper', () => {
//     describe('Smoke Tests', () => {
//       it('shoul exist search method', () => {
//         expect(tests.search).to.exist;
//       });

//       it('should exist searchAlbums method', () => {
//         expect(tests.searchAlbums).to.exist;
//       });

//       it('should exist searchArtists method', () => {
//         expect(tests.searchArtists).to.exist;
//       });

//       it('should exist searchTracks method', () => {
//         expect(tests.searchTracks).to.exist;
//       });

//       it('should exist searchPlaylists method', () => {
//         expect(tests.searchPlaylists).to.exist;
//       });
//     });

//     describe('Generic Search', () => {
//       let fetchedStub;

//       beforeEach(() => {
//         fetchedStub = sinon.stub(global, 'fetch');
//         fetchedStub.resolves({ json: () => {} });
//       });

//       afterEach(() => {
//         fetchedStub.restore();
//       });

//       it('should call fetch function', () => {
//         const artists = tests.search();
//         expect(fetchedStub).to.have.been.calledOnce;
//       });

//       it('should call fetch with the correct URL', () => {

//         context('Passing with one argument', () => {
//           const artists = tests.search('Incubus', 'artist');

//           expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

//           const albums = tests.search('Incubus', 'album');
//           expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
//         });

//         context('Passing with more than one type', () => {
//           const artistAndAlmbums = tests.search('Incubus', ['artist', 'album']);
//           expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album');
//         });
//       });

//       it('should return the JSON data from the promise', () => {
//         const artists = tests.search('Incubus', 'album');
//         // expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
//         // artists.then((data) => {
//         // expect(data).to.be.eql({ body: 'json' });
//         // });
//       });
//     });
//   });
// });
