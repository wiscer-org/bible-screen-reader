// Contains library to download bible verses from API endpoint and save them to markdown files.
// The API endpoint: https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles
// IMPORTANT: This API not support CSB (en-csb) version.

/**
 * Note:
 * Request for a chapter, will return array of `Verse` objects.	
 * json.data : Verse[] = []
 * 
 * Each Verse object contains:
 * type Verse = {
 *  book: string; // e.g. "John"
 *  chapter: number; // e.g. 3
 *  verse: number; // e.g. 16
 *  text: string; 
 * }
 */

function generateApiURL(version, book, chapter) {
    return `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${version}/books/${book}/chapters/${chapter}.json`;
}

function createFileContent(verses) {
    const chapter = verses[0].chapter;
    const header = `# ${verses[0].book} ${chapter}\n\n`;
    const content = verses.map(verse => `## Verse ${verse.verse}\n${verse.text}`).join('\n\n');
    return header + content;
}

function createFilePath(version, book, chapter) {
    return `./${version}/${book}/${chapter}.md`;
}

async function saveToFile(path, content) {
    const fs = require('fs').promises;
    await fs.mkdir(require('path').dirname(path), { recursive: true });
    await fs.writeFile(path, content, 'utf8');
}

module.exports = {
    generateApiURL,
    createFileContent,
    createFilePath,
    saveToFile
};
