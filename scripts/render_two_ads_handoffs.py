import os
from reportlab.lib.pagesizes import A3, landscape
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

def render_pdf(md_path, pdf_path, title):
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=landscape(A3),
        rightMargin=40,
        leftMargin=40,
        topMargin=40,
        bottomMargin=40
    )
    styles = getSampleStyleSheet()
    
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=24,
        leading=28,
        textColor=colors.HexColor('#1B3A6B'),
        spaceAfter=15
    )
    
    h2_style = ParagraphStyle(
        'DocH2',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=14,
        leading=18,
        textColor=colors.HexColor('#1B3A6B'),
        spaceBefore=12,
        spaceAfter=6
    )
    
    body_style = ParagraphStyle(
        'DocBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=14,
        textColor=colors.HexColor('#222222'),
        spaceAfter=6
    )
    
    cell_style = ParagraphStyle(
        'CellText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=colors.HexColor('#222222')
    )
    
    header_cell_style = ParagraphStyle(
        'HeaderCellText',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=12,
        textColor=colors.white
    )

    story = []
    story.append(Paragraph(title, title_style))
    story.append(HRFlowable(width="100%", thickness=2, color=colors.HexColor('#1B3A6B'), spaceAfter=15))
    
    if os.path.exists(md_path):
        with open(md_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
            
        current_table_data = []
        is_in_table = False
        
        for line in lines:
            line_str = line.strip()
            if not line_str:
                if is_in_table and current_table_data:
                    t = Table(current_table_data, colWidths=[200, 200, 300, 420])
                    t.setStyle(TableStyle([
                        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#1B3A6B')),
                        ('TEXTCOLOR', (0,0), (-1,0), colors.white),
                        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
                        ('VALIGN', (0,0), (-1,-1), 'TOP'),
                        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
                        ('TOPPADDING', (0,0), (-1,-1), 6),
                        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, colors.HexColor('#F4F6F9')]),
                        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor('#CCCCCC'))
                    ]))
                    story.append(t)
                    story.append(Spacer(1, 10))
                    current_table_data = []
                    is_in_table = False
                continue
                
            if line_str.startswith('# '):
                continue # handled by title
            elif line_str.startswith('## '):
                story.append(Paragraph(line_str.replace('## ', ''), h2_style))
            elif line_str.startswith('|'):
                is_in_table = True
                parts = [p.strip() for p in line_str.split('|')[1:-1]]
                if any('---' in p for p in parts):
                    continue # skip markdown separator line
                if not current_table_data:
                    # Header
                    current_table_data.append([Paragraph(p, header_cell_style) for p in parts])
                else:
                    current_table_data.append([Paragraph(p, cell_style) for p in parts])
            else:
                if is_in_table and current_table_data:
                    t = Table(current_table_data, colWidths=[200, 200, 300, 420])
                    t.setStyle(TableStyle([
                        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#1B3A6B')),
                        ('TEXTCOLOR', (0,0), (-1,0), colors.white),
                        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
                        ('VALIGN', (0,0), (-1,-1), 'TOP'),
                        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
                        ('TOPPADDING', (0,0), (-1,-1), 6),
                        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, colors.HexColor('#F4F6F9')]),
                        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor('#CCCCCC'))
                    ]))
                    story.append(t)
                    story.append(Spacer(1, 10))
                    current_table_data = []
                    is_in_table = False
                story.append(Paragraph(line_str.replace('### ', '<b>') + ('</b>' if line_str.startswith('### ') else ''), body_style))
                
        if is_in_table and current_table_data:
            t = Table(current_table_data, colWidths=[200, 200, 300, 420])
            t.setStyle(TableStyle([
                ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#1B3A6B')),
                ('TEXTCOLOR', (0,0), (-1,0), colors.white),
                ('ALIGN', (0,0), (-1,-1), 'LEFT'),
                ('VALIGN', (0,0), (-1,-1), 'TOP'),
                ('BOTTOMPADDING', (0,0), (-1,-1), 6),
                ('TOPPADDING', (0,0), (-1,-1), 6),
                ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, colors.HexColor('#F4F6F9')]),
                ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor('#CCCCCC'))
            ]))
            story.append(t)
            
    doc.build(story)
    print(f"Successfully generated {pdf_path}")

if __name__ == '__main__':
    render_pdf('/home/ubuntu/pfs-service-ads-campaign-handoff.md', '/home/ubuntu/pfs-service-ads-campaign-handoff-landscape.pdf', 'PFS Service Ads — Google Ads Campaign Handoff')
    render_pdf('/home/ubuntu/pfs-filter-main-site-campaigns-handoff.md', '/home/ubuntu/pfs-filter-main-site-campaigns-handoff-landscape.pdf', 'PFS Filter Main Site Campaigns — Google Ads Campaign Handoff')
