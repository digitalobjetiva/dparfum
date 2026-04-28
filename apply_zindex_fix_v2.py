import os
import re

html_files = [
    'index.html',
    'sobre.html',
    'produtos.html',
    'noticias.html',
    'contato.html',
    'duvidas.html',
    'catalogo.html',
    '404.html'
]

css_to_add = """
          /* Ajuste para o menu mobile não ser sobreposto por outros elementos (ex: 25+ Curiosidade) */
          .jkit-nav-menu .jkit-menu-wrapper {
            z-index: 99999 !important;
          }
"""

def update_file(filename):
    if not os.path.exists(filename):
        print(f"Arquivo não encontrado: {filename}")
        return

    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    if ".jkit-nav-menu .jkit-menu-wrapper" in content:
        print(f"Ajuste já presente em: {filename}")
        return

    # Procura por qualquer variação de jkit-hamburger-menu {
    pattern = re.compile(r'\.jkit-hamburger-menu\s*\{')
    match = pattern.search(content)
    
    if match:
        start_idx = match.start()
        end_idx = content.find("}", start_idx) + 1
        
        new_content = content[:end_idx] + css_to_add + content[end_idx:]
        
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Atualizado: {filename}")
    else:
        print(f"Marcador não encontrado em: {filename}")

for file in html_files:
    update_file(file)
