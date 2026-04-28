import re

with open('produtos.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Mapeamento: (perfume_name, old_price, new_label)
# A lógica: encontra o bloco onde o perfume aparece, e substitui o preço pelo rótulo
# Usaremos uma abordagem sequencial de contexto para ser mais precisa

# Definir os pares: cada elemento é (contexto_exclusivo, old_price, new_label)
replacements = [
    # Chloé -> Elegância
    ('elementor-element-da5cf11.*?elementor-widget-container.*?\\$42\\.00', 'Elegância'),
    # Delina Exclusif -> Opulência  
    ('elementor-element-1a8fc82.*?elementor-widget-container.*?\\$45\\.00', 'Opulência'),
    # Paris -> Romantismo
    ('elementor-element-d2661b4.*?elementor-widget-container.*?\\$15\\.00', 'Romantismo'),
    # Angel -> Ousadia
    ('elementor-element-8ecc68b.*?elementor-widget-container.*?\\$20\\.00', 'Ousadia'),
    # Lady Million -> Luxo
    ('elementor-element-03d8472.*?elementor-widget-container.*?\\$42\\.00', 'Luxo'),
    # Nina Ricci Vénus -> Delicadeza
    ('elementor-element-0e74716.*?elementor-widget-container.*?\\$45\\.00', 'Delicadeza'),
    # Light Blue -> Frescor
    ('elementor-element-aaf2773.*?elementor-widget-container.*?\\$15\\.00', 'Frescor'),
    # L'interdit -> Mistério
    ('elementor-element-5e43474.*?elementor-widget-container.*?\\$20\\.00', 'Mistério'),
]

count = 0
for pattern_hint, new_label in replacements:
    # Constrói o padrão: encontra o elementor-element-id específico, depois o widget-container, depois o preço
    pattern = re.compile(
        r'(class="elementor-widget-container">\s*)(\$\d+\.\d+)(\s*</div>)',
        re.DOTALL
    )
    
# Abordagem mais simples: substituição direta baseada na linha número
# Lemos linha por linha
with open('produtos.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Mapeamento de linhas para novas palavras (1-indexed)
line_replacements = {
    6189: 'Elegância',
    8176: 'Opulência',
    8267: 'Romantismo',
    8358: 'Ousadia',
    8459: 'Luxo',
    8550: 'Delicadeza',
    8641: 'Frescor',
    8732: 'Mistério',
}

changed = 0
for line_num, new_label in line_replacements.items():
    idx = line_num - 1  # Convert to 0-indexed
    old_line = lines[idx]
    # Check if this line has a price
    if re.search(r'\$\d+\.\d+', old_line):
        new_line = re.sub(r'\$\d+\.\d+', new_label, old_line)
        lines[idx] = new_line
        print(f"Linha {line_num}: '{old_line.strip()}' -> '{new_line.strip()}'")
        changed += 1
    else:
        print(f"AVISO - Linha {line_num} não tem preço: '{old_line.strip()}'")

with open('produtos.html', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print(f"\nTotal de substituições: {changed}")
