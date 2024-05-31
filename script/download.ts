import * as https from 'https';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// 定义类型接口
interface MarkdownFileConfig {
    filename: string;
    url: string;
}

interface Config {
    markdown: MarkdownFileConfig[];
}

// 读取配置文件
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const configPath = path.join(__dirname, '..', 'config', 'news.json');
const rawConfig = fs.readFileSync(configPath, 'utf8');
const config: Config = JSON.parse(rawConfig);

config.markdown.forEach(file => {
    const outputPath = path.join(__dirname, '..', 'src', 'markdown', file.filename);
    const outputDir = path.dirname(outputPath);

    // 确保输出目录存在
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // 文件下载函数
    const downloadFile = (url: string, outputPath: string) => {
        const file = fs.createWriteStream(outputPath);
        https.get(url, response => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Download completed for ${outputPath}`);
            });
        }).on('error', err => {
            fs.unlink(outputPath, () => {});  // 如果发生错误，删除文件
            console.error('Error downloading the file:', err.message);
        });
    };

    // 执行下载
    downloadFile(file.url, outputPath);
});