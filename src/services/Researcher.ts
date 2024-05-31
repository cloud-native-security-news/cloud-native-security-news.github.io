import {GithubFile} from "@/types/github_file.ts";
import Github from "@/services/Github.ts";
import {Researcher} from "@/types/researcher.ts";

export class ResearcherService {
    private static git_files: Map<number, GithubFile> = new Map();

    public static async getResearcherFiles(): Promise<GithubFile[]> {
        const owner = 'cloud-native-security-news'
        const repo = 'researcher'
        const path = 'json'
        const files = await Github.listRepositoryFiles(true, owner, repo, path)
        files.forEach(file => {
            const id = parseInt(file.name.substring(0, 4))
            file.ID = id
            this.git_files.set(id, file)
        })
        return Array.from(this.git_files.values())
    }

    public static async getResearcherByFile(file: GithubFile): Promise<Researcher> {
        return Github.getFileContent(true, file)
    }

    public static async getResearcherById(id: number): Promise<Researcher> {
        await this.getResearcherFiles()
        const file = this.git_files.get(id)
        if (!file) {
            throw new Error('Researcher file not found')
        }
        return this.getResearcherByFile(file)
    }
}