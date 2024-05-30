import axios from "axios";

export default class PostApi {
    static async get(limit = 10, page = 1) {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts',
            {
                params: {
                    _limit: limit,
                    _page: page,
                }
            });
        return {data: response.data, totalCount: response.headers['x-total-count']};
    }

    static async getById(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return response.data;
    }

    static async getComments(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        return response.data;
    }
}