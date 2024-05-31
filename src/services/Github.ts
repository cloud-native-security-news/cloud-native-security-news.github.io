import axios from 'axios';
import Cookies from 'js-cookie'
import {GithubFile} from "@/types/github_file.ts";

class GitHub {
    private clientId: string = 'Ov23lirkgnmCQkhu85yf';
    private clientSecret: string = 'be8993251e82bc14aca9e90e1e1c58f69d201d8b';
    private redirectUri = 'https://cloud-native-security-news.github.io/';
    // private redirectUri = 'http://localhost:5176/'
    private accessToken: string = '';

    constructor() {
        this.initToken()
    }

    logged(): boolean {
        this.initToken()
        return this.accessToken.length > 0;
    }


    private initToken(): void {
        const token = Cookies.get('access_token');
        if (token) {
            this.accessToken = token;
        }
    }

    async login() {
        if (this.logged()) {
            return
        }
        const scope = 'repo';
        const state = crypto.randomUUID();
        window.location.href = `https://github.com/login/oauth/authorize?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&scope=${scope}&state=${state}`;
    }

    async authenticate(code: string): Promise<void> {
        const tokenUrl = `https://cors-anywhere.ssst0n3.workers.dev/?https://github.com/login/oauth/access_token`;
        const data = {
            client_id: this.clientId,
            client_secret: this.clientSecret,
            code: code
        };

        const response = await axios.post(tokenUrl, data, {
            headers: {
                Accept: 'application/json',
                // 'x-cors-headers': JSON.stringify({})
            }
        });
        if (response.data.access_token) {
            this.accessToken = response.data.access_token;
            Cookies.set('access_token', this.accessToken);
        } else {
            throw new Error('Authentication failed');
        }
    }

    async listRepositoryFiles(auth: boolean, owner: string, repo: string, path: string): Promise<GithubFile[]> {
        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
        const headers: Record<string, string> = {}
        if (auth) {
            headers['Authorization'] = `Bearer ${this.accessToken}`;
        }
        const response = await axios.get(apiUrl, {
            headers: headers,
        });
        return response.data;
    }

    async getFileContent<T>(auth: boolean, file: GithubFile): Promise<T> {
        const url = `https://cors-anywhere.ssst0n3.workers.dev/?${file.download_url}`
        const headers: Record<string, string> = {}
        if (auth) {
            headers['Authorization'] = `Bearer ${this.accessToken}`;
        }
        const response = await axios.get<T>(url, {
                headers: headers,
            }
        )
        return response.data
    }
}

export default new GitHub();