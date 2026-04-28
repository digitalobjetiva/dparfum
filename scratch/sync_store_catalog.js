const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'assets', 'js', 'site.js');
let content = fs.readFileSync(filePath, 'utf8');

// Extrair shopPerfumes usando Regex (mais seguro que eval direto)
const shopPerfumesMatch = content.match(/const shopPerfumes = \[\s*([\s\S]*?)\s*\];/);
const catalogMatch = content.match(/const catalog = \[\s*([\s\S]*?)\s*\];/);

if (!shopPerfumesMatch || !catalogMatch) {
    console.error("Não foi possível localizar os arrays no arquivo.");
    process.exit(1);
}

// Simulação simplificada de extração de nomes
const shopNames = new Set();
const shopLines = shopPerfumesMatch[1].split('],').map(l => l.trim());
shopLines.forEach(line => {
    const match = line.match(/"([^"]+)"/g);
    if (match && match.length >= 2) {
        shopNames.add(match[1].replace(/"/g, ''));
    }
});

const catalogNames = new Set();
const catalogLines = catalogMatch[1].split('],').map(l => l.trim());
catalogLines.forEach(line => {
    const match = line.match(/"([^"]+)"/g);
    if (match && match.length >= 1) {
        catalogNames.add(match[0].replace(/"/g, ''));
    }
});

console.log(`Total na Loja: ${shopNames.size}`);
console.log(`Total no Catálogo: ${catalogNames.size}`);

const missing = [];
const brandMap = {
    "Sabah": ["Lattafa", "Importado feminino"],
    "Asad": ["Lattafa", "Importado masculino"],
    "Musamam": ["Lattafa", "Importado masculino"],
    "Delina": ["Parfums de Marly", "Importado feminino"],
    "Baccarat": ["Maison Francis Kurkdjian", "Importado feminino"],
    "Erba Pura": ["Xerjoff", "Importado feminino"],
    "English Pear & Freesia": ["Jo Malone", "Importado feminino"],
    "Good Girl Blush": ["Carolina Herrera", "Importado feminino"],
    "Prada Paradoxe": ["Prada", "Importado feminino"],
    "Angel Nova": ["Thierry Mugler", "Importado feminino"],
    "Bright Crystal": ["Versace", "Importado feminino"],
    "My Way": ["Giorgio Armani", "Importado feminino"],
    "L'Interdit": ["Givenchy", "Importado feminino"],
    "Olympea Vanilla": ["Paco Rabanne", "Importado feminino"],
    "Irresistible": ["Givenchy", "Importado feminino"],
    "Fantasy Midnight": ["Britney Spears", "Importado feminino"],
    "Bombshell": ["Victoria's Secret", "Importado feminino"],
    "Nina Ricci Vénus": ["Nina Ricci", "Importado feminino"],
    "DBG The One": ["Dolce & Gabbana", "Importado masculino"],
    "Prada Extra Pura": ["Prada", "Importado feminino"]
};

shopNames.forEach(name => {
    if (!catalogNames.has(name)) {
        const info = brandMap[name] || ["Grife", "Importado"];
        missing.push([name, info[0], info[1]]);
    }
});

if (missing.length > 0) {
    console.log(`Adicionando ${missing.length} itens faltantes ao catálogo...`);
    
    const newItemsStr = missing.map(item => `  ${JSON.stringify(item)}`).join(',\n') + ',';
    const updatedCatalog = catalogMatch[1].trim() + '\n' + newItemsStr;
    
    content = content.replace(catalogMatch[1], updatedCatalog);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log("Sincronização concluída!");
} else {
    console.log("Tudo certo! Todos os perfumes da loja já estão no catálogo.");
}
