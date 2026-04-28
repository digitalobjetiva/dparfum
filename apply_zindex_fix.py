import os

# Lista de arquivos para atualizar
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

# Estilo para injetar
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

    # Verifica se já foi adicionado
    if ".jkit-nav-menu .jkit-menu-wrapper" in content:
        print(f"Ajuste já presente em: {filename}")
        return

    # Procura um lugar para injetar. O ideal é após a definição de jkit-hamburger-menu ou dentro de um bloco de style
    # Vamos procurar por ".jkit-hamburger-menu {" e inserir depois do bloco.
    
    marker = ".jkit-hamburger-menu {"
    if marker in content:
        # Encontra o fim da regra (próximo })
        start_idx = content.find(marker)
        end_idx = content.find("}", start_idx) + 1
        
        new_content = content[:end_idx] + css_to_add + content[end_idx:]
        
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Atualizado: {filename}")
    else:
        print(f"Marcador não encontrado em: {filename}")

for file in html_files:
    update_file(file)
