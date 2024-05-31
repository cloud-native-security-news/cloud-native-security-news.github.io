import axios from 'axios';
import Cookies from 'js-cookie'
import {ResearcherFile} from "@/types/researcher_file.ts";
import {Researcher} from "@/types/researcher.ts";

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

    async listRepositoryFiles(owner: string, repo: string, path: string): Promise<ResearcherFile[]> {
        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
        const response = await axios.get(apiUrl, {
            headers: {
                Authorization: `token ${this.accessToken}`
            }
        });
        return response.data;
    }

    async getResearcherByFile(file: ResearcherFile): Promise<Researcher> {
        const url = `https://cors-anywhere.ssst0n3.workers.dev/?${file.download_url}`
        const response = await axios.get<Researcher>(url, {
                headers: {
                    Authorization: `token ${this.accessToken}`
                }
            }
        )
        return response.data
    }
}

export default new GitHub();