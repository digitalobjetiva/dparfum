import sys
import os

file_path = r"c:\Users\thiag\OneDrive\Área de Trabalho\Site Dparfum\DParfum\index.html"
with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Ranges (1-indexed)
pop_start, pop_end = 2311, 3555
mv_start, mv_end = 3557, 4788
ba_start, ba_end = 4790, 6021

pop_content = lines[pop_start-1 : pop_end]

# Replace MV
new_lines = lines[:mv_start-1] + pop_content + lines[mv_end:]

# Recalculate BA start after MV replacement (if the length changed)
# Actually, let's do it in one pass or from end to start to avoid index shifting
# But here we are replacing blocks of identical length? Let's check.
# Populares: 3555 - 2311 + 1 = 1245 lines
# MV: 4788 - 3557 + 1 = 1232 lines. 
# Length is slightly different.

# Let's do it properly.
final_lines = lines[:mv_start-1] + pop_content + lines[mv_end:ba_start-1] + pop_content + lines[ba_end:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(final_lines)

print("Synchronized MV and BA with Populares.")
