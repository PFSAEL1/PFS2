import os
import re

old_src = r'd:\pfs 2\PFS\client\src'
new_src = r'd:\pfs 2\client\src'

synced_files = 0
added_attrs = 0

for root, dirs, files in os.walk(old_src):
    for f in files:
        if f.endswith('.tsx'):
            old_fp = os.path.join(root, f)
            rel = os.path.relpath(old_fp, old_src)
            new_fp = os.path.join(new_src, rel)
            
            if not os.path.exists(new_fp):
                continue
                
            with open(old_fp, 'r', encoding='utf-8', errors='ignore') as file:
                old_code = file.read()
                
            with open(new_fp, 'r', encoding='utf-8', errors='ignore') as file:
                new_code = file.read()
                
            # Match data-animation tags with their opening context
            # e.g. <h2 data-animation="slideLeft" ...>
            matches = re.findall(r'<([a-zA-Z0-9]+)\s+[^>]*data-animation="([^"]+)"[^>]*>', old_code)
            
            old_lines = old_code.splitlines()
            new_lines = new_code.splitlines()
            
            # Map clean line identifiers
            line_anim_map = {}
            for line in old_lines:
                m = re.search(r'data-animation="([^"]+)"', line)
                if m:
                    anim_val = m.group(1)
                    # clean line without data-animation
                    clean_line = re.sub(r'\s*data-animation="[^"]+"', '', line).strip()
                    if clean_line and len(clean_line) > 10:
                        line_anim_map[clean_line] = anim_val

            updated_lines = []
            modified = False
            for line in new_lines:
                if 'data-animation=' not in line:
                    clean_line = line.strip()
                    if clean_line in line_anim_map:
                        anim_val = line_anim_map[clean_line]
                        line_updated = re.sub(r'<([a-zA-Z0-9]+)', r'<\1 data-animation="' + anim_val + '"', line, count=1)
                        if line_updated != line:
                            line = line_updated
                            modified = True
                            added_attrs += 1
                updated_lines.append(line)

            if modified:
                with open(new_fp, 'w', encoding='utf-8') as file:
                    file.write('\n'.join(updated_lines))
                synced_files += 1

print(f"Pass 2: Synced {synced_files} files, added {added_attrs} data-animation attributes.")
