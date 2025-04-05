// Contains tests for file `./seed.js``
import { generateApiURL, createFileContent, createFilePath, saveToFile } from '../seed/seed.lib.js';

describe('./seed.js', () => {
    const exampleVerses1 = [
        { book: 'John', chapter: 3, verse: 16, text: 'For God so loved the world...' },
        { book: 'John', chapter: 3, verse: 17, text: 'For God did not send his Son into the world...' }
    ];
    describe('generateApiURL', () => {

        test('should generate correct API URL', () => {
            const version = 'encsb';
            const book = 'genesis';
            const chapter = 1;
            const expectedUrl = 'https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-csb/books/genesis/chapters/1.json';
            const actualUrl = generateApiURL(version, book, chapter);

            expect(actualUrl).toBe(expectedUrl);
        });
    });
    describe('createFileContent', () => {
        test('should create file content correctly', () => {

            const expectedContent = `# John 3\n\n## Verse 16\nFor God so loved the world...\n\n## Verse 17\nFor God did not send his Son into the world...`;
            const actualContent = createFileContent(exampleVerses1);

            expect(actualContent).toBe(expectedContent);
        });
    });
    describe('createFilePath', () => {
        test('Should create file path correctly', () => {
            const version = 'en-kjv';
            const book = 'exodus';
            const chapter = 23;
            const expectedPath = `./${version}/${book}/${chapter}.md`;
            const actualPath = createFilePath(version, book, chapter);

            expect(actualPath).toBe(expectedPath);
        });
    });
    describe('saveToFile', () => {
        test('should save content to file', async () => {
            const fs = require('fs').promises;
            const path = './test_output.txt';
            const content = 'Test content';

            await saveToFile(path, content);

            // Check if the file exists and has the correct content
            const fileContent = await fs.readFile(path, 'utf8');
            expect(fileContent).toBe(content);

            // Clean up
            await fs.unlink(path);
        });
    });
});