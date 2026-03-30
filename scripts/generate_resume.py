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
import os

# Portfolio brand color - Engineering Orange
ACCENT_COLOR = colors.HexColor('#EA580C')  # hsl(20.5 90.2% 48.2%)
DARK_COLOR = colors.HexColor('#0A0A0A')    # Near Black
GRAY_COLOR = colors.HexColor('#666666')    # Gray for secondary text

def create_resume():
    output_dir = "outputs"
    os.makedirs(output_dir, exist_ok=True)

    filename = os.path.join(output_dir, "Prefna_Vagheni_Resume.pdf")
    
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        rightMargin=0.75*inch,
        leftMargin=0.75*inch,
        topMargin=0.75*inch,
        bottomMargin=0.75*inch,
    )
    
    styles = getSampleStyleSheet()
    
    # Custom styles
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
    
    story = []
    
    # Header
    story.append(Paragraph("PREFNA VAGHENI", title_style))
    story.append(Paragraph("Full-Stack Engineer | System Design Architect", subtitle_style))
    
    # Contact info
    contact_data = [[
        Paragraph('<a href="mailto:prefnavagheni54@gmail.com">prefnavagheni54@gmail.com</a>', body_style),
        Paragraph('<a href="https://www.linkedin.com/in/prefna-vagheni-051115266">Click to check my LinkedIn</a>', body_style),
        Paragraph('<a href="https://github.com/Prefna-Vagheni">github.com/Prefna-Vagheni</a>', body_style),
    ]]
    
    contact_table = Table(contact_data, colWidths=[2.3*inch, 2.3*inch, 2.3*inch])
    contact_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    story.append(contact_table)
    story.append(Spacer(1, 0.2*inch))

        
    
    # Summary
    story.append(Paragraph("PROFESSIONAL SUMMARY", section_header_style))
    story.append(Paragraph(
        "Full-stack developer building modern web applications using Next.js, React, and TypeScript on "
        "the frontend, with Node.js, PostgreSQL, Prisma, and Redis on the backend. Built and deployed "
        "multiple full-stack SaaS-style applications with authentication, payments, background jobs, "
        "and AI integrations. Focused on scalable architectures, clean code, and building real-world"
        "production-style applications.",
        body_style
    ))
    
    
    # Work Experience
    story.append(Paragraph("WORK EXPERIENCE", section_header_style))
    
    # Experience 1
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


    # Experience 2
    experience_2 = KeepTogether([
        Paragraph("TonTaxi App", job_title_style),
        Paragraph("Founder | Hybrid | January 2023 - Present", company_style),
        Paragraph("• Architected and built the full Node.js/NestJS/PostgreSQL backend for a performant live trip ensuring sub-100ms latency for driver-client matching and real-time location updates", bullet_style),
        Paragraph("• Maintained a modular microservices architecture using Docker, decoupling the matching engine from the billing", bullet_style),
        Paragraph("• Developed robust RESTful endpoints to manage complex trip states (Requesting → Matching → In-Progress → Completed), prioritizing type-safety and architectural precision", bullet_style),
        Paragraph("• Built custom indexing pipelines to transform raw trip data into actionable business intelligence", bullet_style),
        Spacer(1, 0.1*inch),
    ])
    story.append(experience_2)
    
    # Experience 3
    experience_3 = KeepTogether([
        Paragraph("Frontend Developer", job_title_style),
        Paragraph("Freelance | Remote | Jun 2024 - Dec 2025", company_style),
        Paragraph("• Delivered 8 client projects on time and within budget across multiple sectors", bullet_style),
        Paragraph("• Increased mobile conversion rates by 25% through responsive design optimization", bullet_style),
        Paragraph("• Implemented WCAG 2.1 AA accessibility standards across all projects", bullet_style),
        Paragraph("• Established CI/CD pipeline reducing deployment time by 60%", bullet_style),
        Spacer(1, 0.1*inch),
    ])
    story.append(experience_3)
    
    # Experience 4
    experience_4 = KeepTogether([
        Paragraph("Frontend to Full Stack Developer", job_title_style),
        Paragraph("DoinGud | Spain • Remote | Feb 2022 - Dec 2024", company_style),
        Paragraph("• Architected robust RESTful and WebSocket-based API endpoints using Node.js to support real-time application features", bullet_style),
        Paragraph("• Started as Frontend beginer and got promoted in 7 months to a better Full-stack position", bullet_style),
        Paragraph("• Led technical discussions on backend software design, prioritizing modularity", bullet_style),
        Paragraph("• Engineered and refined complex relational schemas using PostgreSQL, Prisma, and Supabase, optimizing for data integrity and high-concurrency performance", bullet_style),
        Spacer(1, 0.1*inch),
    ])
    story.append(experience_4)
    
    # Projects
    story.append(Paragraph("FEATURED PROJECTS", section_header_style))
    
    projects = [
        ("DevPulse Analytics", "Next.js 15, React 19, Redis, Prisma, Socket.io, Gemini AI", 
         "• GitHub analytics platform transforming commit data into engineering insights", 
         "• Architected low-latency pipeline using Redis Pub/Sub for instant activity streaming"),
        ("TonTaxi App", "Dart, Vue, Node.js, TypeScript, Socket.io, Google Maps", 
         "• Dart Mobile app that manages live trips with chatbox integrated", 
         "• Geospatial indexing to handle high-frequency coordinate updates and efficient nearest-driver proximity searches"),
        ("Freelancer Dashboard", "React 19, Tailwind CSS, TanStack Query", 
         "• Business intelligence platform with real-time financial tracking", 
         "• Custom WebSocket provider achieving 40ms latency for live updates"),
        ("Lockin Salon", "Next.js 15, Supabase, NextAuth.js, Stripe", 
         "• Full-stack booking platform with OAuth and payment integration", 
         "• Role-based access control with dynamic availability management")
    ]
    
    for title, tech, b1, b2 in projects:
        story.append(KeepTogether([
            Paragraph(f"<b>{title}</b> | {tech}", job_title_style),
            Paragraph(b1, bullet_style),
            Paragraph(b2, bullet_style),
            Spacer(1, 0.08*inch),
        ]))
    
    # Education
    story.append(Paragraph("EDUCATION", section_header_style))
    story.append(Paragraph(
        "<b>Bachelor of Science in Computer Science</b><br/>"
        "International University of East Africa (Kampala) | Graduated 2021 | GPA: 4.4/5.0",
        body_style
    ))
    
    # Technical Skills
    story.append(Paragraph("TECHNICAL SKILLS", section_header_style))
    skills_data = [
        ["Frontend:", "React, Next.js, TypeScript, JavaScript, Tailwind CSS, Framer Motion"],
        ["Backend:", "Node.js, PostgreSQL, Prisma, Redis, Socket.io, REST APIs"],
        ["Tools:", "Git/GitHub, Docker, Vercel, Supabase, Firebase, Stripe API, AWS"],
        ["Leadership:", "System Design, Microservices Architecture, AI APIs"],
    ]
    
    skills_table = Table(skills_data, colWidths=[1.4*inch, 5.3*inch])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('FONTNAME', (0, 0), (0, -1), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
    ]))
    story.append(skills_table)
    
    
    # Languages
    story.append(Paragraph("LANGUAGES", section_header_style))
    story.append(Paragraph(
        "French (Native), Swahili (Native), English (Professional)",
        body_style
    ))

    # Portfolio
    story.append(Paragraph("PORTFOLIO WEBSITE", section_header_style))
    story.append(Paragraph(
        '<a href="https://prefnavagheni-portfolio.vercel.app" color="#0A0A0A">prefnavagheni-portfolio.vercel.app</a>',
        body_style
    ))
    
    # Footer
    story.append(Spacer(1, 0.15*inch))
    story.append(Paragraph(
        "<i>Portfolio: <a href='https://prefnavagheni-portfolio.vercel.app'>prefnavagheni-portfolio.vercel.app</a> | References available upon request</i>",
        ParagraphStyle('Footer', parent=body_style, fontSize=9, textColor=GRAY_COLOR, alignment=TA_CENTER)
    ))
    
    # Build
    doc.build(story)
    print(f"✓ Updated Resume PDF created: {filename}")
    return filename

if __name__ == "__main__":
    create_resume()