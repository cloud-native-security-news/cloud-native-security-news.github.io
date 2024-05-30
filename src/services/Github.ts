import axios from 'axios';

class GitHubService {
    private clientId: string = 'YOUR_CLIENT_ID';
    private clientSecret: string = 'YOUR_CLIENT_SECRET';
    private accessToken: string = '';

    constructor() {}

    async authenticate(code: string): Promise<void> {
        const tokenUrl = `https://github.com/login/oauth/access_token`;
        const data = {
            client_id: this.clientId,
            client_secret: this.clientSecret,
            code: code
        };

        const response = await axios.post(tokenUrl, data, {
            headers: { Accept: 'application/json' }
        });

        if (response.data.access_token) {
            this.accessToken = response.data.access_token;
        } else {
            throw new Error('Authentication failed');
        }
    }

    async listRepositoryFiles(owner: string, repo: string): Promise<any> {
        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/`;
        const response = await axios.get(apiUrl, {
            headers: {
                Authorization: `token ${this.accessToken}`
            }
        });

        return response.data;
    }
}

export default new GitHubService();