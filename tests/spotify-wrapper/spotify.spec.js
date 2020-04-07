/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable padded-blocks */
/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable no-var */
/* eslint-disable prefer-destructuring */

import { expect } from 'chai';
import tests from '../../src/spotify-wrapper/spotify-wrapper';

describe('Main', function () {
  describe('Spotify Wrapper', () => {
    describe('Smoke Tests', () => {
      it('shoul exist search method', () => {
        expect(tests.search).to.be.exist;
      });

      it('should exist searchAlbums method', () => {
        expect(tests.searchAlbums).to.be.exist;
      });

      it('should exist searchArtists method', () => {
        expect(tests.searchArtists).to.be.exist;
      });

      it('should exist searchTracks method', () => {
        expect(tests.searchTracks).to.be.exist;
      });

      it('should exist searchPlaylists method', () => {
        expect(tests.searchPlaylists).to.be.exist;
      });
    });
  });
});
