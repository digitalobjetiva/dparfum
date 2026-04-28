with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix onmouseout - var() doesn't work in inline event handlers
old1 = "onmouseout=\"this.style.background='#fff'; this.style.color='var(--e-global-color-1A531B)';\""
new1 = "onmouseout=\"this.style.background='#fff'; this.style.color='#1A531B';\""
content = content.replace(old1, new1)

# Fix onmouseover
old2 = "onmouseover=\"this.style.background='var(--e-global-color-1A531B)'; this.style.color='#fff';\""
new2 = "onmouseover=\"this.style.background='#1A531B'; this.style.color='#ffffff';\""
content = content.replace(old2, new2)

# Fix initial color in style attribute
old3 = "color: var(--e-global-color-1A531B); border: 2px solid var(--e-global-color-1A531B)"
new3 = "color: #1A531B; border: 2px solid #1A531B"
content = content.replace(old3, new3)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Corrigido!")
