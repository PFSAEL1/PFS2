import os
import re

pages_dir = r'd:\pfs 2\client\src\pages'

# 1. Hub pages using PageHero component
page_hero_updates = {
    'products/ProductsHub.tsx': 'HERO_VIDEO',
    'products/PowderBoothsHub.tsx': 'POWDER_VIDEO',
    'products/OvensHub.tsx': 'HERO_VIDEO',
    'integration/IntegrationHub.tsx': 'HERO_VIDEO',
    'industries/IndustriesHub.tsx': 'HERO_VIDEO',
    'products/PartsFiltersHub.tsx': 'FILTERS_HERO_VIDEO',
}

for rel_path, video_var in page_hero_updates.items():
    fp = os.path.join(pages_dir, rel_path.replace('/', os.sep))
    if not os.path.exists(fp): continue
    with open(fp, 'r', encoding='utf-8') as f:
        content = f.read()
    if 'bgVideo=' not in content and '<PageHero' in content:
        # Add bgVideo={video_var} to <PageHero
        new_content = content.replace('<PageHero', f'<PageHero bgVideo={{{video_var}}}')
        with open(fp, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"[UPDATED PageHero] {rel_path} with bgVideo={video_var}")

# 2. Custom pages needing video element in hero section
custom_video_updates = {
    'products/BlastingBoothPage.tsx': ('/manus-storage/pfs-blast-booth-hero_fe206ed9.mp4', 'FEATURED_BLAST'),
    'products/CrossFlowBoothPage.tsx': ('/manus-storage/crossflow-hero_5b011231.mp4', 'HERO_IMG'),
    'products/SprayToWastePage.tsx': ('/manus-storage/pfs-stw-action-clip_ba3b60d0.mp4', 'HERO_IMG'),
    'products/BatchOvenPage.tsx': ('/manus-storage/pfs-oven-hero-video_05e4a406.mp4', 'HERO_IMG'),
    'products/WalkInOvenPage.tsx': ('/manus-storage/pfs-oven-hero-video_05e4a406.mp4', 'HERO_IMG'),
    'products/FullDowndraftBoothPage.tsx': ('/manus-storage/pfs-paint-booth-hero_500b9d60.mp4', 'HERO_IMG'),
    'products/SemiDowndraftBoothPage.tsx': ('/manus-storage/pfs-paint-booth-hero_500b9d60.mp4', 'HERO_IMG'),
    'products/SideDowndraftBoothPage.tsx': ('/manus-storage/pfs-paint-booth-hero_500b9d60.mp4', 'HERO_IMG'),
    'products/DowndraftRaisedBasementPage.tsx': ('/manus-storage/pfs-paint-booth-hero_500b9d60.mp4', 'HERO_IMG'),
    'products/HeatedBoothPage.tsx': ('/manus-storage/pfs-paint-booth-hero_500b9d60.mp4', 'HERO_IMG'),
}

for rel_path, (vurl, poster_var) in custom_video_updates.items():
    fp = os.path.join(pages_dir, rel_path.replace('/', os.sep))
    if not os.path.exists(fp): continue
    with open(fp, 'r', encoding='utf-8') as f:
        content = f.read()

    if '<video' not in content:
        # Check if HERO_VIDEO is defined
        if 'HERO_VIDEO' not in content:
            content = f'const HERO_VIDEO = "{vurl}";\n' + content
        
        # Replace <img ... /> inside hero section with video
        # Find hero img tag inside first section
        def replace_hero_img(match):
            img_tag = match.group(0)
            video_tag = f'''<video
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          poster={{{poster_var}}}
          style={{ position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 40%",opacity:0.45 }}
        >
          <source src="{vurl}" type="video/mp4" />
        </video>'''
            return video_tag

        new_content = re.sub(r'<img[^>]*HERO_IMG[^>]*/>', replace_hero_img, content)
        if new_content == content:
            new_content = re.sub(r'<img[^>]*FEATURED_BLAST[^>]*/>', replace_hero_img, content)

        if new_content != content:
            with open(fp, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"[UPDATED Custom Hero] {rel_path} with video {vurl}")
