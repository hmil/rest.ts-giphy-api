import { giphyAPI } from '../index';
import { createConsumer } from 'rest-ts-axios';
import axios from 'axios';
import 'should';


async function doRun() {
    const api = createConsumer(giphyAPI, axios.create({
        baseURL: 'https://api.giphy.com/v1'
    }));
    const API_KEY = process.env['GIPHY_API_KEY'] || '';
    if (API_KEY == '') {
        throw new Error('Please set the GIPHY_API_KEY environment variable.');
    }
    

    await testRandomGif();
    await testGetGif();



    async function testRandomGif() {
        console.log('Getting random gif');
        const randomGif = await api.getRandomGif({
            query: {
                api_key: API_KEY
            }
        });
        console.log(`Got: ${randomGif.data.data.url}`);
        giphyAPI.getRandomGif.response.check(randomGif.data);
    }

    async function testGetGif() {
        const gif = await api.getGif({
            query: {
                api_key: API_KEY,
            },
            params: {
                id: '3ojnYfv4r2pCNkXVyc'
            }
        });
        (gif.data.data.url).should.be.of.type('string');
    }
}


doRun().catch((e) => console.error(e));