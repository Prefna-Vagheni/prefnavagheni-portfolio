#!/usr/bin/env python3
"""
Resume PDF Generator - Updated with Actual Portfolio Data
Generates a professional resume PDF matching the portfolio's engineering orange branding
"""

from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT

# Portfolio brand color - Engineering Orange
ACCENT_COLOR = colors.HexColor('#EA580C')  # hsl(20.5 90.2% 48.2%)
DARK_COLOR = colors.HexColor('#0A0A0A')    # Near Black
GRAY_COLOR = colors.HexColor('#666666')    # Gray for secondary text

def create_resume():
    # Create PDF
    filename = "/mnt/user-data/outputs/Prefna_Vagheni_Resume.pdf"
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        rightMargin=0.75*inch,
        leftMargin=0.75*inch,
        topMargin=0.75*inch,
        bottomMargin=0.75*inch,
    )
    
    # Define styles
    styles = getSampleStyleSheet()
    
    # Custom styles matching portfolio
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=28,
        textColor=DARK_COLOR,
        spaceAfter=6,
        alignment=TA_CENTER,
        fontName='Helvetica-Bold',
    )
    
    subtitle_style = ParagraphStyle(
        'CustomSubtitle',
        parent=styles['Normal'],
        fontSize=11,
        textColor=GRAY_COLOR,
        spaceAfter=20,
        alignment=TA_CENTER,
        fontName='Helvetica',
    )
    
    section_header_style = ParagraphStyle(
        'SectionHeader',
        parent=styles['Heading2'],
        fontSize=14,
        textColor=ACCENT_COLOR,
        spaceAfter=12,
        spaceBefore=16,
        fontName='Helvetica-Bold',
    )
    
    job_title_style = ParagraphStyle(
        'JobTitle',
        parent=styles['Heading3'],
        fontSize=12,
        textColor=DARK_COLOR,
        spaceAfter=4,
        fontName='Helvetica-Bold',
    )
    
    company_style = ParagraphStyle(
        'Company',
        parent=styles['Normal'],
        fontSize=11,
        textColor=ACCENT_COLOR,
        spaceAfter=4,
        fontName='Helvetica-Bold',
    )
    
    body_style = ParagraphStyle(
        'CustomBody',
        parent=styles['Normal'],
        fontSize=10,
        textColor=DARK_COLOR,
        spaceAfter=8,
        leading=14,
        fontName='Helvetica',
    )
    
    bullet_style = ParagraphStyle(
        'Bullet',
        parent=styles['Normal'],
        fontSize=10,
        textColor=DARK_COLOR,
        leftIndent=20,
        spaceAfter=4,
        leading=13,
        fontName='Helvetica',
    )
    
    # Build content
    story = []
    
    # Header with name
    story.append(Paragraph("PREFNA VAGHENI", title_style))
    story.append(Paragraph(
        "Full-Stack Engineer | Frontend Specialist",
        subtitle_style
    ))
    
    # Contact info
    contact_data = [[
        Paragraph("prefnavagheni54@gmail.com", body_style),
        Paragraph("linkedin.com/in/prefna-vagheni", body_style),
        Paragraph("github.com/Prefna-Vagheni", body_style),
    ]]
    
    contact_table = Table(contact_data, colWidths=[2.3*inch, 2.3*inch, 2.3*inch])
    contact_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    story.append(contact_table)
    story.append(Spacer(1, 0.2*inch))
    
    # Professional Summary
    story.append(Paragraph("PROFESSIONAL SUMMARY", section_header_style))
    story.append(Paragraph(
        "Frontend specialist transitioning into full-stack engineering with 2+ years of experience "
        "building scalable, high-performance web applications. Proven track record delivering "
        "production-ready solutions serving thousands of users. Passionate about clean code, "
        "system architecture, and creating exceptional user experiences.",
        body_style
    ))
    
    # Technical Skills
    story.append(Paragraph("TECHNICAL SKILLS", section_header_style))
    
    skills_data = [
        ["<b>Frontend:</b>", "React, Next.js 15, TypeScript, JavaScript, Tailwind CSS, Framer Motion"],
        ["<b>Backend:</b>", "Node.js, PostgreSQL, Prisma, Redis, Socket.io, RESTful APIs"],
        ["<b>Tools:</b>", "Git/GitHub, Docker, Vercel, Supabase, Firebase, Stripe API"],
        ["<b>Learning:</b>", "System Design, AWS, Microservices Architecture, Gemini AI"],
    ]
    
    skills_table = Table(skills_data, colWidths=[1.4*inch, 5.3*inch])
    skills_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('FONTNAME', (0, 0), (0, -1), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('TEXTCOLOR', (0, 0), (-1, -1), DARK_COLOR),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
    ]))
    story.append(skills_table)
    
    # Work Experience
    story.append(Paragraph("WORK EXPERIENCE", section_header_style))
    
    # Experience 1 - Current Freelance Full-Stack
    experience_1 = KeepTogether([
        Paragraph("Full-Stack Developer", job_title_style),
        Paragraph("Freelance | Remote | March 2025 - Present", company_style),
        Paragraph("• Built and launched 4 production applications for small businesses and startups", bullet_style),
        Paragraph("• Achieved 100% client satisfaction rate across all deliverables", bullet_style),
        Paragraph("• Reduced client hosting costs through serverless architecture migration", bullet_style),
        Paragraph("• Established long-term retainer relationships with 3 clients", bullet_style),
        Spacer(1, 0.1*inch),
    ])
    story.append(experience_1)
    
    # Experience 2 - Frontend Developer Freelance
    experience_2 = KeepTogether([
        Paragraph("Frontend Developer", job_title_style),
        Paragraph("Freelance | Remote | Jun 2024 - Dec 2025", company_style),
        Paragraph("• Delivered 8 client projects on time and within budget across multiple sectors", bullet_style),
        Paragraph("• Increased mobile conversion rates by 25% through responsive design optimization", bullet_style),
        Paragraph("• Implemented WCAG 2.1 AA accessibility standards across all projects", bullet_style),
        Paragraph("• Established CI/CD pipeline reducing deployment time by 60%", bullet_style),
        Spacer(1, 0.1*inch),
    ])
    story.append(experience_2)
    
    # Projects
    story.append(Paragraph("FEATURED PROJECTS", section_header_style))
    
    project_1 = KeepTogether([
        Paragraph("<b>DevPulse Analytics</b> | Next.js 15, React 19, Redis, Prisma, Socket.io, Gemini AI", job_title_style),
        Paragraph("• GitHub analytics platform transforming commit data into engineering insights", bullet_style),
        Paragraph("• Architected low-latency pipeline using Redis Pub/Sub and Socket.io for instant activity streaming", bullet_style),
        Paragraph("• Prisma-optimized PostgreSQL layer with real-time developer velocity tracking", bullet_style),
        Spacer(1, 0.08*inch),
    ])
    story.append(project_1)
    
    project_2 = KeepTogether([
        Paragraph("<b>Freelancer Analytics Dashboard</b> | React 19, Tailwind CSS, TanStack Query", job_title_style),
        Paragraph("• Business intelligence platform for software freelancers with real-time financial tracking", bullet_style),
        Paragraph("• Custom WebSocket provider achieving 40ms latency for live data updates", bullet_style),
        Paragraph("• Centralized project management replacing fragmented spreadsheets", bullet_style),
        Spacer(1, 0.08*inch),
    ])
    story.append(project_2)
    
    project_3 = KeepTogether([
        Paragraph("<b>Lockin Salon Appointment</b> | Next.js 15, Supabase, NextAuth.js, Stripe", job_title_style),
        Paragraph("• Full-stack booking platform with OAuth authentication and payment integration", bullet_style),
        Paragraph("• Role-based access control with separate client and admin interfaces", bullet_style),
        Paragraph("• Dynamic availability management with email notifications", bullet_style),
        Spacer(1, 0.08*inch),
    ])
    story.append(project_3)
    
    # Education
    story.append(Paragraph("EDUCATION", section_header_style))
    story.append(Paragraph(
        "<b>Bachelor of Science in Computer Science</b><br/>"
        "International University of East Africa (Kampala) | Graduated 2021 | GPA: 4.4/5.0",
        body_style
    ))
    
    # Footer
    story.append(Spacer(1, 0.15*inch))
    story.append(Paragraph(
        "<i>Portfolio: prefnavagheni-portfolio.vercel.app | References available upon request</i>",
        ParagraphStyle('Footer', parent=body_style, fontSize=9, textColor=GRAY_COLOR, alignment=TA_CENTER)
    ))
    
    # Build PDF
    doc.build(story)
    print(f"✓ Resume PDF created successfully: {filename}")
    return filename

if __name__ == "__main__":
    create_resume()