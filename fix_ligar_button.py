import glob
import re

html_files = glob.glob('**/*.html', recursive=True)

for fpath in html_files:
    if "wp-content" in fpath or "wp-includes" in fpath or 'img\\' in fpath or 'img/' in fpath:
        continue
    
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    # The block containing the Ligar button
    # We will search for 'elementor-element-6083a03' and then the 'href="#"' inside it.
    
    def replacer(match):
        block = match.group(0)
        # Update href value
        new_block = re.sub(r'href="[^"]*"', 'href="tel:+5521993543808"', block, count=1)
        return new_block

    pattern = re.compile(r'(<div class="elementor-element elementor-element-6083a03[^>]*>.*?<a class="elementor-button[^>]*\n?[^>]*\s*href=")[^"]*(")', flags=re.IGNORECASE | re.DOTALL)
    
    # Just a simpler search to ensure we hit the link specifically within that widget
    # We can match the entire button widget and replace href="#" inside.
    def repl_widget(m):
        widget = m.group(0)
        return re.sub(r'href="[^"]*"', 'href="tel:+5521993543808"', widget)
        
    old_content = content
    content = re.sub(r'<div class="elementor-element elementor-element-6083a03[^>]*>.*?<span class="elementor-button-text">Ligar</span>\s*</span>\s*</a>\s*</div>\s*</div>\s*</div>', repl_widget, content, flags=re.IGNORECASE | re.DOTALL)
    
    if content != old_content:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Ligar anchor fixed em {fpath}")
