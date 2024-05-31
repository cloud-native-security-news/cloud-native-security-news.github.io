import axios from 'axios';

class GitHub {
    private clientId: string = 'Ov23lirkgnmCQkhu85yf';
    private clientSecret: string = 'be8993251e82bc14aca9e90e1e1c58f69d201d8b';
    private redirectUri = 'https://cloud-native-security-news.github.io/';
    // private redirectUri = 'http://localhost:5176/github'
    private accessToken: string = '';

    constructor() {

    }

    async login() {
        const scope = 'repo';
        const state = crypto.randomUUID();
        window.location.href = `https://github.com/login/oauth/authorize?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&scope=${scope}&state=${state}`;
    }

    async authenticate(code: string): Promise<void> {
        const tokenUrl = `https://https://cors-anywhere.ssst0n3.workers.dev/?github.com/login/oauth/access_token`;
        const data = {
            client_id: this.clientId,
            client_secret: this.clientSecret,
            code: code
        };

        const response = await axios.post(tokenUrl, data, {
            headers: {
                Accept: 'application/json',
                'x-cors-proxy-api-key': this.clientId,
                'x-cors-headers': JSON.stringify({})
            }
        });

        if (response.data.access_token) {
            this.accessToken = response.data.access_token;
        } else {
            throw new Error('Authentication failed');
        }
    }

    async listRepositoryFiles(owner: string, repo: string): Promise<any> {
        console.log(this.accessToken);
        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/`;
        const response = await axios.get(apiUrl, {
            headers: {
                Authorization: `token ${this.accessToken}`
            }
        });

        return response.data;
    }
}

export default new GitHub();