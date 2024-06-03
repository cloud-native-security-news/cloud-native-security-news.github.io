import simpleGit from 'simple-git';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const git = simpleGit();

const repoUrl = 'https://github.com/cloud-native-security-news/cloud-native-security-news';  // Repository URL

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const localPath = path.join(__dirname, '..', 'src', 'markdown', 'news');  // Local clone path

// Check if the directory already exists
if (fs.existsSync(localPath)) {
    console.log('Directory exists. Pulling the latest changes...');
    git.cwd(localPath)
        .pull('origin', 'main', {'--rebase': 'true'})
        .then(() => console.log('Repository updated successfully.'))
        .catch(err => console.error('Failed to update repository:', err));
} else {
    console.log('Directory does not exist. Cloning the repository...');
    // Clone the repository
    git.clone(repoUrl, localPath)
        .then(() => {
            console.log('Repository cloned successfully.');
        })
        .catch(err => {
            console.error('Failed to clone repository:', err);
        });
}