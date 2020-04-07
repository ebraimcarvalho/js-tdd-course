/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable padded-blocks */
/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable no-var */
/* eslint-disable prefer-destructuring */

import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import tests from '../../src/spotify-wrapper/spotify-wrapper';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

describe('Main', function () {
  describe('Spotify Wrapper', () => {
    describe('Smoke Tests', () => {
      it('shoul exist search method', () => {
        expect(tests.search).to.exist;
      });

      it('should exist searchAlbums method', () => {
        expect(tests.searchAlbums).to.exist;
      });

      it('should exist searchArtists method', () => {
        expect(tests.searchArtists).to.exist;
      });

      it('should exist searchTracks method', () => {
        expect(tests.searchTracks).to.exist;
      });

      it('should exist searchPlaylists method', () => {
        expect(tests.searchPlaylists).to.exist;
      });
    });

    describe('Generic Search', () => {
      it('should call fetch function', () => {
        const fetchedStub = sinon.stub(global, 'fetch');
        const artists = tests.search();

        expect(fetchedStub).to.have.been.calledOnce;

        fetchedStub.restore();
      });

      it('should receive the correct url and type to fetch', () => {
        const fetchedStub = sinon.stub(global, 'fetch');
        const artists = tests.search('Incubus', 'artist');

        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

        const albums = tests.search('Incubus', 'album');
        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
      });
    });
  });
});
