const fs = require('fs');
const path = require('path');

const componentsDir = path.resolve(__dirname, '../portfolio/components');
const appDir = path.resolve(__dirname, '../portfolio/app');

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

const allFilesToSearch = [...getAllFiles(componentsDir), ...getAllFiles(appDir)];
const rootComponents = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

console.log(`Searching for usage of ${rootComponents.length} custom components...`);

const unused = [];
for (const compFile of rootComponents) {
    const compName = path.basename(compFile, path.extname(compFile));
    
    // Do not delete provider, index, layout, etc.
    if (compName.includes('theme-provider')) continue;

    let isUsed = false;
    
    for (const searchFile of allFilesToSearch) {
        if (searchFile === path.join(componentsDir, compFile)) continue;
        if (!fs.existsSync(searchFile)) continue;
        const content = fs.readFileSync(searchFile, 'utf8');
        
        // checking for from "@/components/compName"
        if (content.includes(`/${compName}`) || content.includes(`\\${compName}`) || content.includes(`"${compName}"`) || content.includes(`'${compName}'`)) {
            isUsed = true;
            break;
        }
    }
    
    if (!isUsed) {
        unused.push(compFile);
        fs.unlinkSync(path.join(componentsDir, compFile));
        console.log(`Deleted unused custom component: ${compFile}`);
    }
}
console.log(`Done. Deleted ${unused.length} files.`);
