import { giphyAPI } from '../index';
import { createConsumer } from 'rest-ts-axios';
import axios from 'axios';

const handler = createConsumer(giphyAPI, axios.create());

const p = handler.getGif({
    query: {
        api_key: '1234'
    },
    params: {
        id: '123'
    }
}).then((r) => r.data.data.map((i) => i));

// TODO: This should not compile because there is one non-optional query parameter
const p2 = handler.getRandomGif();

const p3 = handler.searchGifs({
    query: {
        lang: 'fr',
        api_key: 'b',
        q: 'a',
        limit: 2
    }
});
