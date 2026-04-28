const fs = require('fs');
const path = require('path');

const indexFile = 'index.html';
const productsFile = 'produtos.html';

try {
    const indexContent = fs.readFileSync(indexFile, 'utf8');
    
    // index.html products section class
    const iClass = 'class="elementor-section elementor-inner-section elementor-element elementor-element-35ef0b4';
    // index.html next section class
    const iNextClass = 'class="elementor-section elementor-top-section elementor-element elementor-element-f4a7906';

    let iStartIndex = indexContent.indexOf(iClass);
    iStartIndex = indexContent.lastIndexOf('<section', iStartIndex);
    
    let iEndIndex = indexContent.indexOf(iNextClass);
    iEndIndex = indexContent.lastIndexOf('<section', iEndIndex);

    if (iStartIndex === -1 || iEndIndex === -1) {
        console.error('Labels not found in index.html. iStartIndex:', iStartIndex, 'iEndIndex:', iEndIndex);
        process.exit(1);
    }

    const extractedContent = indexContent.substring(iStartIndex, iEndIndex);

    const productsContent = fs.readFileSync(productsFile, 'utf8');
    
    // produtos.html products section class
    const pClass = 'class="elementor-section elementor-inner-section elementor-element elementor-element-5e2e3ec';
    // produtos.html footer/next section class as found in file
    const pNextClass = 'class="elementor-section elementor-top-section elementor-element elementor-element-f4fbb78';
    
    // Sometimes it's not a top-section, let's just search for the ID
    let pEndIndex = productsContent.indexOf('elementor-element-f4fbb78');
    pEndIndex = productsContent.lastIndexOf('<section', pEndIndex);

    let pStartIndex = productsContent.indexOf(pClass);
    pStartIndex = productsContent.lastIndexOf('<section', pStartIndex);

    if (pStartIndex === -1 || pEndIndex === -1) {
        console.error('Labels not found in produtos.html. pStartIndex:', pStartIndex, 'pEndIndex:', pEndIndex);
        process.exit(1);
    }

    const updatedProductsContent = 
        productsContent.substring(0, pStartIndex) + 
        extractedContent + 
        productsContent.substring(pEndIndex);

    fs.writeFileSync(productsFile, updatedProductsContent);
    console.log('Successfully updated produtos.html');

} catch (err) {
    console.error('Error during synchronization:', err);
    process.exit(1);
}
