import { readFile, writeFile, readdir, statSync } from 'fs';
import { join } from 'path';

const rootDir = './'; // Change this to the root directory of your project
const searchPattern = 'ChatApi ';
const replacePattern = 'chat ';

function replaceInFile(filePath) {
  readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const replacedData = data.replace(new RegExp(searchPattern, 'g'), replacePattern);

    writeFile(filePath, replacedData, 'utf8', (err) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(`Replaced "${searchPattern}" with "${replacePattern}" in ${filePath}`);
    });
  });
}

function processFilesInDirectory(directoryPath) {
  readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    files.forEach((file) => {
      const filePath = join(directoryPath, file);

      if (statSync(filePath).isDirectory()) {
        processFilesInDirectory(filePath);
      } else if (filePath.endsWith('.ts')) {
        replaceInFile(filePath);
      }
    });
  });
}

processFilesInDirectory(rootDir);
