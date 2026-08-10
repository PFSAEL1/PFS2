import os
import re

client_src = r'd:\pfs 2\client\src'
manus_storage = r'd:\pfs 2\client\public\manus-storage'

local_manus_files = set(os.listdir(manus_storage)) if os.path.exists(manus_storage) else set()

asset_pattern = re.compile(r'["\']([^"\'\s>]+\.(?:png|jpg|jpeg|webp|gif|mp4|webm|svg|pdf|woff|woff2))["\']', re.IGNORECASE)

refs = set()
file_refs_map = {}

for root, dirs, files in os.walk(client_src):
    for f in files:
        if f.endswith(('.ts', '.tsx', '.json', '.html', '.css', '.js')):
            fp = os.path.join(root, f)
            with open(fp, 'r', encoding='utf-8', errors='ignore') as file:
                content = file.read()
                matches = asset_pattern.findall(content)
                for m in matches:
                    refs.add(m)
                    if m not in file_refs_map:
                        file_refs_map[m] = []
                    file_refs_map[m].append(os.path.relpath(fp, client_src))

print(f"Total unique asset refs found in src: {len(refs)}")

external_urls = []
manus_storage_refs = []
attached_assets_refs = []
other_refs = []

for r in sorted(refs):
    if r.startswith(('http://', 'https://')):
        external_urls.append(r)
    elif r.startswith('/manus-storage/'):
        manus_storage_refs.append(r)
    elif r.startswith('/attached_assets/'):
        attached_assets_refs.append(r)
    else:
        other_refs.append(r)

print("\n--- EXTERNAL URLS ---")
for u in external_urls:
    print(f"{u} (found in: {file_refs_map[u]})")

missing_local_manus = []
for r in manus_storage_refs:
    fname = os.path.basename(r)
    if fname not in local_manus_files:
        missing_local_manus.append(r)

print(f"\n--- MISSING LOCAL MANUS STORAGE FILES COUNT: {len(missing_local_manus)} ---")
for m in missing_local_manus:
    print(f"{m} (found in: {file_refs_map[m]})")
