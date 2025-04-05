const { generateApiURL, createFilePath, createFileContent, saveToFile } = require('./wldeh.js');

const version = 'en-csb'; // Example version
const book = 'genesis'; // Example book
const chapters = [1, 2, 3]; // Example chapters

chapters.forEach(chapter => {
    const url = generateApiURL(version, book, chapter);

    console.log(`fetching ${url}...`);
    fetch(url)
        .then(response => {
            console.log('receveid response..');
            console.log(response);
            console.log("\n\n");
            return response.json();
        })
        .then(data => {
            const verses = data.data;
            const content = createFileContent(verses);
            const filePath = createFilePath(version, book, chapter);

            console.log(`Creating file: ${filePath}`);
            saveToFile(filePath, content)
                .then(() => console.log(`Saved to ${filePath}`))
                .catch(err => console.error(`Error saving file: ${err}`));
        })
        .catch(err => console.error(`Error fetching data: ${err}`));
});