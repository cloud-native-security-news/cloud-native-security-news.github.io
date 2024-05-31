import {GithubFile} from "@/types/github_file.ts";
import Github from "@/services/Github.ts";

export class NewsService {
    private static git_files: Map<number, GithubFile> = new Map();

    public static async getNewsFiles(): Promise<GithubFile[]> {
        const owner = 'cloud-native-security-news'
        const repo = 'cloud-native-security-news'
        const path = ''
        const files = await Github.listRepositoryFiles(false, owner, repo, path)
        files.forEach(file => {
            if (file.name.endsWith(".md") && file.name != "README.md" && file.name != "CONTRIBUTING.md") {
                const id = this.git_files.size
                file.ID = id
                this.git_files.set(id, file)
            }
        })
        return Array.from(this.git_files.values())
    }

    public static async getNewsByFile(file: GithubFile): Promise<string> {
        return Github.getFileContent(false, file)
    }
}