import glob
import re

html_files = glob.glob('**/*.html', recursive=True)

for fpath in html_files:
    if "wp-content" in fpath or "wp-includes" in fpath:
        continue
    
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content

    # 1. Fix the `n issue in the menu
    content = content.replace('`n<li class="menu-item', '\n<li class="menu-item')

    # 2. Fix the corrupted header (elementor-element-d7f41b1)
    original_header_ul = """<ul class="elementor-icon-list-items elementor-inline-items">
															<li class="elementor-icon-list-item elementor-inline-item">
																<span class="elementor-icon-list-icon">
																	<i aria-hidden="true" class="fas fa-clock"></i> </span>
																<span class="elementor-icon-list-text">Todos os dias o dia
																	inteiro</span>
															</li>
														</ul>"""
    
    # We find the specific widget container for d7f41b1
    # Sometimes it has line breaks, so we'll match up to </ul>
    match = re.search(r'(<div class="elementor-element elementor-element-d7f41b1[^>]*>.*?<div class="elementor-widget-container">\s*<link rel="stylesheet" href="css/widget-icon-list\.min\.css">\s*)(<ul class="elementor-icon-list-items elementor-inline-items">.*?</ul>)(\s*</div>\s*</div>)', content, flags=re.DOTALL)
    
    if match:
        content = content[:match.start(2)] + original_header_ul + content[match.end(2):]
    else:
        # Fallback if the link tag is formatted slightly differently
        match2 = re.search(r'(<div class="elementor-element elementor-element-d7f41b1[^>]*>.*?<div class="elementor-widget-container">.*?)(<ul class="elementor-icon-list-items elementor-inline-items">.*?</ul>)(\s*</div>\s*</div>)', content, flags=re.DOTALL)
        if match2:
            content = content[:match2.start(2)] + original_header_ul + content[match2.end(2):]

    if content != original_content:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed header/navbar in {fpath}")
