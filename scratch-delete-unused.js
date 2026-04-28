const fs = require('fs');
const path = require('path');

const uiDir = path.resolve(__dirname, '../portfolio/components/ui');
const componentsDir = path.resolve(__dirname, '../portfolio/components');
const appDir = path.resolve(__dirname, '../portfolio/app');

function getAllFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
        if (file !== 'ui') {
            getAllFiles(path.join(dir, file), fileList);
        }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(path.join(dir, file));
    }
  }
  return fileList;
}

const allFilesToSearch = [...getAllFiles(componentsDir), ...getAllFiles(appDir)];
const uiFiles = fs.readdirSync(uiDir).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

console.log(`Searching for usage of ${uiFiles.length} UI components...`);

const unused = [];
for (const uiFile of uiFiles) {
    const compName = path.basename(uiFile, path.extname(uiFile));
    let isUsed = false;
    
    for (const searchFile of allFilesToSearch) {
        const content = fs.readFileSync(searchFile, 'utf8');
        // looking for from "@/components/ui/compName" or similar
        if (content.includes(`/${compName}`) || content.includes(`\\${compName}`) || content.includes(`"${compName}"`) || content.includes(`'${compName}'`)) {
            isUsed = true;
            break;
        }
    }
    
    if (!isUsed) {
        unused.push(uiFile);
        fs.unlinkSync(path.join(uiDir, uiFile));
        console.log(`Deleted unused component: ${uiFile}`);
    }
}
console.log(`Done. Deleted ${unused.length} files.`);
