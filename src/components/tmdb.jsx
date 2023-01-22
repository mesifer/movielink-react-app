import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Accept: 'application/json',
    },
    params: {
        api_key: '1887f10c3d2cd8bb12897cba9c071f32',
        language: 'en-ID',
        append_to_response: 'videos',
    },
});
