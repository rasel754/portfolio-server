const fs = require('fs');
const path = require('path');

const uiDir = path.resolve(__dirname, '../../portfolio/components/ui');
const componentsDir = path.resolve(__dirname, '../../portfolio/components');
const appDir = path.resolve(__dirname, '../../portfolio/app');

// Read all files in UI and components
function getAllFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      getAllFiles(path.join(dir, file), fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(path.join(dir, file));
    }
  }
  return fileList;
}

const allComponentFiles = getAllFiles(componentsDir);
const allAppFiles = getAllFiles(appDir);
const allFilesToSearch = [...allComponentFiles, ...allAppFiles];

const unusedFiles = [];

for (const compFile of allComponentFiles) {
  const compName = path.basename(compFile, path.extname(compFile));
  // skip index files or layout
  let isUsed = false;
  
  for (const searchFile of allFilesToSearch) {
    if (searchFile === compFile) continue;
    const content = fs.readFileSync(searchFile, 'utf8');
    if (content.includes(`/${compName}`) && (content.includes(`from`) || content.includes(`import`))) {
        isUsed = true;
        break;
    }
  }
  
  if (!isUsed) {
    unusedFiles.push(compFile);
  }
}

console.log("Potentially unused files:");
unusedFiles.forEach(f => console.log(f));
