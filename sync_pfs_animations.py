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
                
            # If old_code has data-animation and new_code has fewer data-animation attributes
            old_count = len(re.findall(r'data-animation=', old_code))
            new_count = len(re.findall(r'data-animation=', new_code))
            
            if old_count > new_count:
                # Copy data-animation attributes by line / element context
                old_lines = old_code.splitlines()
                new_lines = new_code.splitlines()
                
                # Build map of unique text snippets or element identifiers to their data-animation attribute
                anim_map = {}
                for line in old_lines:
                    match = re.search(r'data-animation="([^"]+)"', line)
                    if match:
                        anim_val = match.group(1)
                        # extract text or tag identifier from line
                        # e.g., text content inside tag or unique JSX props
                        tag_match = re.search(r'<([a-zA-Z0-9]+)[^>]*>(.*?)</\1>', line)
                        if tag_match:
                            text = tag_match.group(2).strip()
                            if text and len(text) > 4:
                                anim_map[text] = anim_val
                                
                # Apply anim_map to new_lines
                updated_lines = []
                modified = False
                for line in new_lines:
                    if 'data-animation=' not in line:
                        for text, anim_val in anim_map.items():
                            if text in line and len(text) > 4:
                                # insert data-animation attribute into tag
                                line_updated = re.sub(r'<([a-zA-Z0-9]+)(\s+[^>]*)?>', r'<\1 data-animation="' + anim_val + r'"\2>', line, count=1)
                                if line_updated != line:
                                    line = line_updated
                                    modified = True
                                    added_attrs += 1
                                    break
                    updated_lines.append(line)
                    
                if modified:
                    with open(new_fp, 'w', encoding='utf-8') as file:
                        file.write('\n'.join(updated_lines))
                    synced_files += 1

print(f"Synced {synced_files} files, added {added_attrs} data-animation attributes.")
