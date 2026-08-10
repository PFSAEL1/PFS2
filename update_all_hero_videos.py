import os
import re

pages_dir = r'd:\pfs 2\client\src\pages'

page_posters = {
    'company/CertificationsPage.tsx': '/manus-storage/pfs-ul508a-clean_e8efdeb8.jpg',
    'company/CompanyHub.tsx': '/manus-storage/pfs-facility-building_bece7d21.jpg',
    'company/ManufacturingPage.tsx': '/manus-storage/pfs-auto-mfg-hero-poster_6d8c01e4.jpg',
    'industries/AerospacePage.tsx': '/manus-storage/aero-pfs-jet-side-profile-clean_5b7a100a.jpg',
    'industries/AutomotiveManufacturingPage.tsx': '/manus-storage/pfs-auto-mfg-hero-poster_6d8c01e4.jpg',
    'industries/CollisionRepairPage.tsx': '/manus-storage/collision-booth-wide_2d3b3c7b.jpeg',
    'industries/EnergyUtilitiesPage.tsx': '/manus-storage/pfs-energy-hero_82223207.png',
    'industries/GovernmentMilitaryPage.tsx': '/manus-storage/pfs-military-humvee-booth-clean_ef5c4409.jpeg',
    'industries/HeavyEquipmentPage.tsx': '/manus-storage/pfs-heavy-equip-featured_88fd415c.jpg',
    'industries/IndustrialManufacturingPage.tsx': '/manus-storage/industrial-IMG_3502_fa36ad49.jpg',
    'industries/MarinePage.tsx': '/manus-storage/marine_hero_boat_in_booth_cfbd5064.jpg',
    'industries/RailTransitPage.tsx': '/manus-storage/pfs-rail-amtrak-locomotive-booth_3402b74f.png',
    'industries/TruckBusFleetPage.tsx': '/manus-storage/pfs-truck-booth-card_a0d45884_fca2d2cb.jpeg',
    'industries/WoodworkingPage.tsx': '/manus-storage/pfs-woodworking-booth-clean_26912a5d.jpg',
    'products/AircraftBoothPage.tsx': '/manus-storage/aero-pfs-jet-side-profile-clean_5b7a100a.jpg',
    'products/BlastingBoothPage.tsx': '/manus-storage/pfs-blast-booth-interior_cf77951a.png',
    'products/ContainerBoothPage.tsx': '/manus-storage/container_booth_render_b3efc409.png',
    'products/CrossFlowAllPage.tsx': '/manus-storage/pfs-crossflow-booth-front-view_c9a9a834.jpeg',
    'products/DoubleWallBoothPage.tsx': '/manus-storage/pfs-dw-featured-zenith_2b530356.webp',
    'products/EnclosedBoothsPage.tsx': '/manus-storage/enclosed-booth-card-zenith_7e010642.jpg',
    'products/InspectionBoothPage.tsx': '/manus-storage/pfs-inspection-hero_1b83deb1.png',
    'products/MixingRoomPage.tsx': '/manus-storage/mixing-room-front_7de356e6.jpg',
    'products/OpenFaceBoothPage.tsx': '/manus-storage/pfs-open-face-booth-render_2c814ace.png',
    'products/OutdoorBoothPage.tsx': '/manus-storage/pfs-outdoor-hero-8143_9d49ac36.jpg',
    'products/PaintBoothsHub.tsx': '/manus-storage/pfs-helios-heated-booth-front_37d91be3.jpeg',
    'products/PrepHub.tsx': '/manus-storage/pfs-prep-station-facility_f1978a4b.jpg',
    'products/PrepStationsPage.tsx': '/manus-storage/pfs-prep-station-facility_f1978a4b.jpg',
    'products/PrepSupportHub.tsx': '/manus-storage/pfs-prep-station-facility_f1978a4b.jpg',
    'products/ProductsHub.tsx': '/manus-storage/pfs-products-hub-hero-poster_bcdcb248.jpg',
    'products/OvensHub.tsx': '/manus-storage/pfs-industrial-oven-hero_52d9f4df.jpg',
    'products/PowderBoothsHub.tsx': '/manus-storage/pfs-powder-coating-action_2ede4cbe.png',
    'products/TemperatureControlledRoomsPage.tsx': '/manus-storage/pfs-tcr-exterior-angled_30f84dad.jpg',
    'products/TruckBoothsPage.tsx': '/manus-storage/pfs-truck-booth-card_a0d45884_fca2d2cb.jpeg',
    'products/WashBoothPage.tsx': '/manus-storage/washbooth_75284018.png',
    'integration/IntegrationHub.tsx': '/manus-storage/pfs-integrated-system-line_ad6dc185.png',
}

modified_files = []

for rel_path, poster_file in page_posters.items():
    fp = os.path.join(pages_dir, rel_path.replace('/', os.sep))
    if not os.path.exists(fp):
        print(f"Skipping non-existent file: {fp}")
        continue
        
    with open(fp, 'r', encoding='utf-8') as file:
        content = file.read()
        
    # Check if <video> tag is present
    if '<video' in content:
        # Replace <video ...> with poster attribute if missing poster
        def add_poster_attr(match):
            tag = match.group(0)
            if 'poster=' in tag:
                return tag
            # Insert poster attribute after <video
            return tag.replace('<video', f'<video poster="{poster_file}"')
            
        new_content = re.sub(r'<video[^>]*>', add_poster_attr, content)
        if new_content != content:
            with open(fp, 'w', encoding='utf-8') as file:
                file.write(new_content)
            modified_files.append(rel_path)
            print(f"[UPDATED] {rel_path} with poster={poster_file}")

print(f"\nTotal files updated: {len(modified_files)}")
