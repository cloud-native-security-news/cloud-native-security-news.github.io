import {ResearcherFile} from "@/types/researcher_file.ts";
import Github from "@/services/Github.ts";
import {Researcher} from "@/types/researcher.ts";

export class ResearcherService {
    private static researcher_files: Map<number, ResearcherFile> = new Map();


    public static async getResearcherFiles(): Promise<ResearcherFile[]> {
        const owner = 'cloud-native-security-news'
        const repo = 'researcher'
        const path = 'json'
        const files = await Github.listRepositoryFiles(owner, repo, path)
        files.forEach(file => {
            const id = parseInt(file.name.substring(0, 4))
            file.ID = id
            this.researcher_files.set(id, file)
        })
        return Array.from(this.researcher_files.values())
    }

    public static async getResearcherByFile(file: ResearcherFile): Promise<Researcher> {
        return Github.getResearcherByFile(file)
    }

    public static async getResearcherById(id: number): Promise<Researcher> {
        await this.getResearcherFiles()
        const file = this.researcher_files.get(id)
        if (!file) {
            throw new Error('Researcher file not found')
        }
        return this.getResearcherByFile(file)
    }
}