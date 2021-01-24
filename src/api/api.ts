import {MD5} from 'react-native-crypto-js';
import paramsJSON from '../../params.json';
import {Character} from '../types';

class API {
  private characters?: Character[];

  public async getCharacters() {
    if (this.characters) {
      return this.characters;
    }

    try {
      const {marvel_public_key, marvel_private_key} = paramsJSON;
      const timestamp = Date.now();
      const hash = MD5(`${timestamp}${marvel_private_key}${marvel_public_key}`);
      const apiParams = `ts=${timestamp}&apikey=${marvel_public_key}&hash=${hash}`;

      const response = await fetch(
        `https://gateway.marvel.com/v1/public/characters?${apiParams}`,
      );
      const responseJSON = await response.json();

      this.characters = responseJSON.data.results as Character[];

      return this.characters;
    } catch (e) {
      throw `error occurred while fetching url`;
    }
  }
}

export const api = new API();
