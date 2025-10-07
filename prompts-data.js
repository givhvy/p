// ===== PROMPTS DATABASE =====
const promptsData = [
    {
        id: 1,
        title: "Content Writer Pro",
        category: "chatgpt",
        description: "Tạo content chuyên nghiệp cho blog, website với tone phù hợp và SEO-friendly.",
        icon: "✍️",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=80",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        rating: 4.9,
        views: 2500,
        prompt: `Bạn là một content writer chuyên nghiệp với 10 năm kinh nghiệm.

Nhiệm vụ: Viết bài blog về [TOPIC]

Yêu cầu:
- Độ dài: 1500-2000 từ
- Tone: [Professional/Casual/Friendly]
- Target audience: [Mô tả đối tượng]
- SEO keywords: [Keywords]

Cấu trúc:
1. Hook thu hút (100 từ)
2. Giới thiệu vấn đề (200 từ)
3. 3-5 điểm chính với ví dụ cụ thể
4. Kết luận và CTA

Hãy viết theo phong cách storytelling, dễ đọc và có giá trị thực tế.`
    },
    {
        id: 2,
        title: "Code Reviewer AI",
        category: "coding",
        description: "Review code chuyên sâu, tìm bugs, suggest improvements và best practices.",
        icon: "🔍",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop&q=80",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        rating: 4.8,
        views: 1800,
        prompt: `Bạn là senior software engineer với expertise về [LANGUAGE/FRAMEWORK].

Task: Review đoạn code sau và đưa ra phân tích chi tiết

Code:
\`\`\`
[PASTE CODE HERE]
\`\`\`

Hãy phân tích theo các tiêu chí:

1. **Bugs & Issues**
   - Logic errors
   - Edge cases chưa xử lý
   - Potential runtime errors

2. **Performance**
   - Time complexity
   - Memory usage
   - Optimization opportunities

3. **Code Quality**
   - Readability
   - Naming conventions
   - Code structure

4. **Best Practices**
   - Design patterns
   - SOLID principles
   - Security concerns

5. **Suggestions**
   - Refactoring recommendations
   - Alternative approaches
   - Code examples cải tiến

Format output dạng markdown với code snippets.`
    },
    {
        id: 3,
        title: "Midjourney Prompt Generator",
        category: "midjourney",
        description: "Tạo prompt Midjourney chuyên nghiệp cho artwork, photography, design.",
        icon: "🎨",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop&q=80",
        gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        rating: 5.0,
        views: 3200,
        prompt: `Generate a detailed Midjourney prompt for: [DESCRIPTION]

Style: [Art style/Photography/3D/etc]
Mood: [Vibrant/Dark/Minimal/etc]
Quality: High-end commercial

Format the prompt using this structure:

[Main Subject], [Action/Pose], [Environment/Background], [Lighting], [Camera angle], [Art style], [Additional details], [Technical parameters]

Technical parameters to include:
--ar [aspect ratio]
--style [raw/stylize value]
--v 6.0
--q 2

Example output format:
"A majestic lion standing on a cliff edge, golden mane flowing in wind, African savanna at sunset, dramatic rim lighting, low angle shot, hyperrealistic photography style, cinematic composition, ultra detailed fur texture, --ar 16:9 --style raw --v 6.0 --q 2"

Provide 3 variations with different artistic approaches.`
    },
    {
        id: 4,
        title: "Business Strategy Analyst",
        category: "business",
        description: "Phân tích chiến lược kinh doanh, competitor analysis, market research.",
        icon: "📊",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
        gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        rating: 4.7,
        views: 1500,
        prompt: `Bạn là business strategist với MBA và 15 năm kinh nghiệm tư vấn cho Fortune 500.

Task: Phân tích chiến lược kinh doanh cho [COMPANY/INDUSTRY]

Framework SWOT Analysis:

1. **Strengths (Điểm mạnh)**
   - Core competencies
   - Unique advantages
   - Resources & assets

2. **Weaknesses (Điểm yếu)**
   - Internal limitations
   - Resource gaps
   - Operational issues

3. **Opportunities (Cơ hội)**
   - Market trends
   - Emerging technologies
   - Untapped segments

4. **Threats (Rủi ro)**
   - Competition
   - Market changes
   - External factors

5. **Strategic Recommendations**
   - Short-term actions (3-6 months)
   - Medium-term goals (6-12 months)
   - Long-term vision (1-3 years)

6. **KPIs to Track**
   - Measurable metrics
   - Success indicators

Provide data-driven insights và actionable recommendations.`
    },
    {
        id: 5,
        title: "Email Marketing Expert",
        category: "writing",
        description: "Viết email marketing hiệu quả với high conversion rate và engagement.",
        icon: "📧",
        image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=600&fit=crop&q=80",
        gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
        rating: 4.9,
        views: 2100,
        prompt: `Bạn là email marketing specialist với conversion rate trung bình 25%.

Goal: Viết email campaign cho [PRODUCT/SERVICE]

Target: [Audience description]
Objective: [Sales/Engagement/Awareness]

Email Structure:

1. **Subject Line** (3 variations)
   - Curiosity-driven
   - Benefit-focused
   - Urgency-based

2. **Preview Text**
   - Compelling teaser (50 characters)

3. **Email Body**
   - Personal greeting
   - Hook (first 2 lines)
   - Problem identification
   - Solution presentation
   - Social proof/testimonial
   - Clear CTA
   - P.S. with additional value

4. **Technical Details**
   - Recommended send time
   - A/B test suggestions
   - Segmentation tips

Tone: [Professional/Casual/Friendly]
Length: [Short (100-150 words)/Medium (200-300)/Long (400+)]

Use proven copywriting frameworks: AIDA, PAS, or FAB.`
    },
    {
        id: 6,
        title: "Claude Research Assistant",
        category: "claude",
        description: "Research chuyên sâu với critical thinking, citations và comprehensive analysis.",
        icon: "🔬",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        rating: 4.8,
        views: 1900,
        prompt: `You are a research assistant specializing in [FIELD/TOPIC].

Research Question: [YOUR QUESTION]

Please provide a comprehensive analysis following this structure:

1. **Executive Summary**
   - Key findings (3-5 bullet points)
   - Main conclusion

2. **Background Context**
   - Historical perspective
   - Current state of knowledge
   - Why this matters

3. **Methodology**
   - Research approach
   - Sources considered
   - Limitations

4. **Detailed Analysis**
   - Break down into subsections
   - Evidence and data
   - Multiple perspectives
   - Counterarguments

5. **Implications**
   - Practical applications
   - Future trends
   - Recommendations

6. **References & Further Reading**
   - Key sources
   - Suggested materials

Requirements:
- Use critical thinking
- Cite specific examples
- Acknowledge uncertainties
- Provide balanced views
- Use clear, academic language

Output format: Detailed report (1500-2000 words) with markdown formatting.`
    },
    {
        id: 7,
        title: "SQL Query Generator",
        category: "coding",
        description: "Generate complex SQL queries với optimization và best practices.",
        icon: "🗄️",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=600&fit=crop&q=80",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        rating: 4.7,
        views: 1600,
        prompt: `You are a database expert specializing in SQL optimization.

Request: [DESCRIBE YOUR DATA NEED]

Database: [MySQL/PostgreSQL/SQL Server/etc]
Schema: [Describe tables and relationships]

Generate SQL query with:

1. **Main Query**
   - Optimized SELECT statement
   - Proper JOINs
   - WHERE conditions
   - GROUP BY / ORDER BY if needed

2. **Explanation**
   - What the query does
   - How it works
   - Performance considerations

3. **Optimization Tips**
   - Index recommendations
   - Query plan analysis
   - Alternative approaches

4. **Example Output**
   - Sample result set
   - Column descriptions

5. **Error Handling**
   - Edge cases to consider
   - Validation checks

Best practices:
- Use parameterized queries
- Avoid SELECT *
- Proper indexing
- Efficient JOINs
- Clear aliases

Provide both the query và detailed comments.`
    },
    {
        id: 8,
        title: "Social Media Content Creator",
        category: "writing",
        description: "Tạo content viral cho Facebook, Instagram, TikTok, LinkedIn.",
        icon: "📱",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop&q=80",
        gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
        rating: 4.9,
        views: 2800,
        prompt: `Bạn là social media expert với 5M+ followers tổng hợp.

Platform: [Facebook/Instagram/TikTok/LinkedIn]
Topic: [YOUR TOPIC]
Goal: [Engagement/Awareness/Traffic/Sales]

Tạo content package bao gồm:

1. **Main Post**
   - Hook đầu tiên (thu hút trong 2s)
   - Body content (storytelling)
   - CTA rõ ràng
   - Length: [Platform-appropriate]

2. **Caption Variations** (3 versions)
   - Short & punchy
   - Medium with story
   - Long-form value-driven

3. **Hashtag Strategy**
   - 5 niche hashtags (10K-100K posts)
   - 3 trending hashtags
   - 2 branded hashtags

4. **Engagement Hooks**
   - Question to ask audience
   - Poll ideas
   - Call-to-action

5. **Visual Suggestions**
   - Image/video concept
   - Color palette
   - Text overlay ideas

6. **Best Posting Time**
   - Optimal schedule
   - Frequency recommendation

Tone: [Inspirational/Educational/Entertaining/Professional]

Format cho từng platform cụ thể với character limits và best practices.`
    },
    {
        id: 9,
        title: "Product Description Optimizer",
        category: "writing",
        description: "Viết product description bán hàng với SEO và conversion optimization.",
        icon: "🛍️",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80",
        gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        rating: 4.8,
        views: 2200,
        prompt: `Bạn là copywriter chuyên e-commerce với conversion rate 15%+.

Product: [PRODUCT NAME]
Category: [Category]
Price: [Price range]
Target: [Customer persona]

Viết product description theo template:

1. **Headline** (60 characters)
   - Benefit-driven
   - Includes key feature
   - Action-oriented

2. **Subtitle** (120 characters)
   - Expands on main benefit
   - Creates urgency/desire

3. **Opening Hook** (50 words)
   - Identify customer pain point
   - Present solution
   - Emotional connection

4. **Key Features & Benefits** (5-7 points)
   Format: [Feature] → [Benefit]
   - Focus on transformation
   - Use sensory language
   - Quantify when possible

5. **Technical Specifications**
   - Organized bullet list
   - Easy to scan
   - Complete information

6. **Social Proof**
   - Customer testimonial integration
   - Ratings mention
   - Trust badges

7. **Guarantee/USP**
   - Risk reversal
   - Unique selling point

8. **CTA**
   - Urgency element
   - Clear action
   - Benefit reminder

9. **SEO Keywords** (Naturally integrated)
   - Primary keyword (3x)
   - Secondary keywords (2x each)
   - Long-tail variations

Tone: [Luxury/Practical/Fun/Professional]
Length: 300-500 words optimized for skimming.`
    },
    {
        id: 10,
        title: "Python Code Generator",
        category: "coding",
        description: "Generate clean Python code với documentation, testing và best practices.",
        icon: "🐍",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop&q=80",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        rating: 4.9,
        views: 2600,
        prompt: `You are a senior Python developer following PEP 8 standards.

Task: Create Python code for [DESCRIPTION]

Requirements:
- Python version: [3.8+/3.10+/etc]
- Libraries: [List or "suggest appropriate ones"]
- Use case: [Describe the scenario]

Deliver complete code package:

1. **Main Code**
\`\`\`python
# Well-structured, commented code
# Type hints included
# Error handling
# Logging where appropriate
\`\`\`

2. **Documentation**
   - Docstrings (Google/NumPy style)
   - Usage examples
   - Parameters explanation
   - Return values

3. **Unit Tests**
\`\`\`python
# pytest or unittest
# Test cases covering:
# - Happy path
# - Edge cases
# - Error conditions
\`\`\`

4. **Dependencies**
   - requirements.txt format
   - Version specifications

5. **Usage Example**
\`\`\`python
# Real-world usage demo
\`\`\`

6. **Performance Notes**
   - Time complexity
   - Space complexity
   - Optimization suggestions

Best practices to follow:
- DRY principle
- Single Responsibility
- Meaningful variable names
- Modular design
- Security considerations

Provide production-ready code với comprehensive comments.`
    },
    {
        id: 11,
        title: "Interview Question Generator",
        category: "business",
        description: "Tạo câu hỏi phỏng vấn chuyên nghiệp cho technical và non-technical roles.",
        icon: "💼",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop&q=80",
        gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        rating: 4.7,
        views: 1400,
        prompt: `Bạn là HR specialist và hiring manager với 10 năm kinh nghiệm.

Position: [JOB TITLE]
Level: [Junior/Mid/Senior]
Industry: [Industry]

Tạo interview question set bao gồm:

1. **Screening Questions** (5 questions)
   - Culture fit
   - Basic qualifications
   - Motivation
   - Availability

2. **Technical Questions** (8-10 questions)
   - Core skills assessment
   - Problem-solving scenarios
   - Hands-on tasks/challenges
   - Difficulty progression: Easy → Hard

3. **Behavioral Questions** (6-8 questions)
   - STAR method compatible
   - Leadership situations
   - Conflict resolution
   - Team collaboration
   - Past experiences

4. **Situational Questions** (5 questions)
   - Hypothetical scenarios
   - Decision-making
   - Priority handling
   - Ethics & judgment

5. **Role-Specific Deep Dive** (5 questions)
   - Advanced technical concepts
   - Industry knowledge
   - Tool expertise

For each question provide:
- The question
- What you're assessing
- Red flags to watch for
- Great answer indicators
- Follow-up questions

Include scoring rubric (1-5 scale) cho mỗi section.`
    },
    {
        id: 12,
        title: "Landing Page Copywriter",
        category: "writing",
        description: "Viết landing page conversion-focused với persuasive copywriting.",
        icon: "🎯",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        rating: 5.0,
        views: 3100,
        prompt: `Bạn là conversion copywriter với landing pages đạt 20%+ conversion.

Product/Service: [NAME]
Target Audience: [Detailed persona]
Goal: [Lead gen/Sales/Sign-ups]
Unique Value Prop: [What makes it different]

Viết complete landing page:

**ABOVE THE FOLD**
1. Headline (10 words max)
   - Clear benefit
   - Addresses pain point
   - Powerful verb

2. Subheadline (15-20 words)
   - Expands on benefit
   - Builds curiosity

3. Hero CTA Button
   - Action-oriented text
   - Contrasting color note
   - Placement suggestion

**PROBLEM SECTION**
4. Pain Point Amplification
   - 3 major problems
   - Emotional language
   - Relatable scenarios

**SOLUTION SECTION**
5. How It Works (3 steps)
   - Simple explanation
   - Icon suggestions
   - Benefit for each step

**FEATURES → BENEFITS**
6. Core Features (5-6)
   Format: "[Feature]: [Emotional benefit]"
   - Use power words
   - Quantify results

**SOCIAL PROOF**
7. Testimonials Section
   - 3 customer quotes
   - Include: Name, title, result
   - Authentic voice

8. Trust Indicators
   - Logos of clients/partners
   - Statistics/numbers
   - Awards/certifications

**OBJECTION HANDLING**
9. FAQ (5 questions)
   - Address common concerns
   - Reinforce value
   - Remove friction

**URGENCY**
10. Limited Offer Section
    - Scarcity element
    - Time-bound incentive
    - Fear of missing out

**FINAL CTA**
11. Strong Close
    - Summarize transformation
    - Risk reversal (guarantee)
    - Clear action step
    - Secondary CTA option

**TECHNICAL NOTES**
- Recommended page length
- Image/video placements
- Color psychology suggestions
- Mobile optimization tips
- A/B test ideas

Tone: [Urgent/Professional/Friendly]
Write for scan-readers: short paragraphs, bullet points, bolded key phrases.`
    },
    {
        id: 13,
        title: "Data Analysis with Python",
        category: "coding",
        description: "Analyze datasets, create visualizations, generate insights với pandas & matplotlib.",
        icon: "📈",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
        gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
        rating: 4.8,
        views: 2000,
        prompt: `You are a data scientist proficient in Python data analysis stack.

Dataset: [DESCRIBE YOUR DATA]
Format: [CSV/Excel/JSON/Database]
Objective: [What insights you need]

Provide comprehensive analysis code:

1. **Data Loading & Exploration**
\`\`\`python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Load data
# Initial exploration
# Shape, dtypes, describe()
# Check for missing values
\`\`\`

2. **Data Cleaning**
   - Handle missing values
   - Remove duplicates
   - Data type conversions
   - Outlier detection/treatment

3. **Exploratory Data Analysis**
   - Statistical summaries
   - Distribution analysis
   - Correlation analysis
   - Feature relationships

4. **Visualizations**
   - Appropriate chart types
   - Clear labels and titles
   - Professional styling
   - Multiple views of data

5. **Key Insights**
   - Findings summary
   - Patterns identified
   - Anomalies detected
   - Business implications

6. **Advanced Analysis** (if applicable)
   - Segmentation
   - Trend analysis
   - Predictive modeling prep
   - Feature engineering

7. **Export Results**
   - Save processed data
   - Export visualizations
   - Generate report

Include:
- Complete runnable code
- Markdown explanations
- Interpretation of results
- Recommendations

Output format: Jupyter notebook style with code cells and markdown.`
    },
    {
        id: 14,
        title: "Video Script Writer",
        category: "writing",
        description: "Viết script video YouTube, TikTok, ads với high retention và engagement.",
        icon: "🎬",
        image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=600&fit=crop&q=80",
        gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        rating: 4.9,
        views: 2700,
        prompt: `Bạn là video script writer chuyên nghiệp với 10M+ total views.

Platform: [YouTube/TikTok/Instagram Reels/Ads]
Topic: [YOUR TOPIC]
Duration: [30s/1min/5min/10min+]
Style: [Educational/Entertainment/Sales/Tutorial]

Script Structure:

**HOOK (First 3-5 seconds)**
- Attention-grabbing statement/question
- Pattern interrupt
- Promise of value
[Visual cue: ]
[Audio cue: ]

**INTRO (5-10 seconds)**
- Quick personal intro (if needed)
- What they'll learn/get
- Why they should watch
[On-screen text: ]

**MAIN CONTENT**
[Break into clear segments with timestamps]

Segment 1: [Title] (timestamp)
- Key point
- Explanation/example
- Transition
[B-roll suggestions: ]
[Graphics needed: ]

Segment 2: [Title] (timestamp)
- Key point
- Story/demonstration
- Engagement hook
[Visual elements: ]

Segment 3: [Title] (timestamp)
- Key point
- Practical application
- Recap
[Animation ideas: ]

**CLIMAX/PAYOFF**
- Deliver main promise
- Best tip/reveal
- Wow moment
[Epic visual: ]

**CALL TO ACTION**
- What to do next
- Where to go
- Why it matters
[End screen elements: ]

**OUTRO (5 seconds)**
- Thank viewer
- Subscribe/follow reminder
- Tease next video
[Music: Upbeat/Calm/etc]

**ADDITIONAL ELEMENTS**

Engagement Boosters:
- 3 moments to ask "comment below"
- 2 poll/question opportunities
- 1 challenge/action item

Retention Tactics:
- Loop at start (reference end)
- Progress indicators
- Pattern changes every 15-30s
- Curiosity gaps

B-Roll Shot List:
1. [Description]
2. [Description]
3. [Description]

Text Overlays (for key moments):
1. "[Quote/stat]"
2. "[Emphasis text]"

Music/Sound Design:
- Intro: [Type/mood]
- Main: [Type/mood]
- Outro: [Type/mood]
- Sound effects: [Where needed]

**METRICS OPTIMIZATION**
- Hook retention target: 80%+
- Average view duration goal
- CTR optimization tips

Tone: [Energetic/Calm/Professional/Casual]
Pacing: [Fast/Moderate/Slow]

Write conversationally - like talking to a friend, not reading a script.`
    },
    {
        id: 15,
        title: "Prompt Engineer Meta Prompt",
        category: "chatgpt",
        description: "Tạo và tối ưu prompts cho bất kỳ AI task nào - prompt để tạo prompts!",
        icon: "🤖",
        image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&h=600&fit=crop&q=80",
        gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        rating: 5.0,
        views: 3500,
        prompt: `You are an expert prompt engineer specializing in creating optimal prompts for LLMs.

Task: Create a high-quality prompt for the following use case:

**Use Case:** [DESCRIBE WHAT YOU WANT THE AI TO DO]
**AI Model:** [ChatGPT/Claude/GPT-4/etc]
**Context:** [Any background information]
**Desired Output:** [What format/style you want]

Generate an optimized prompt following these principles:

1. **Role Assignment**
   - Define expert persona
   - Specify expertise level
   - Include relevant background

2. **Clear Task Definition**
   - Specific objective
   - Expected deliverables
   - Success criteria

3. **Contextual Information**
   - Background details
   - Constraints
   - Assumptions

4. **Output Format**
   - Structure specification
   - Length requirements
   - Style guidelines

5. **Examples** (if helpful)
   - Input/output samples
   - Edge cases
   - Quality benchmarks

6. **Step-by-Step Instructions**
   - Logical flow
   - Numbered steps
   - Clear milestones

7. **Quality Controls**
   - Verification steps
   - Error handling
   - Edge case consideration

**PROMPT TEMPLATE OUTPUT:**

Provide the final prompt in a copy-pasteable format, including:
- The complete prompt text
- Usage instructions
- Variable placeholders clearly marked [LIKE THIS]
- Optional parameters noted
- Expected output example

**OPTIMIZATION NOTES:**

Also include:
- Why this structure works
- Alternative variations (2-3)
- Common pitfalls to avoid
- How to iterate/improve results

**TESTING SUGGESTIONS:**

- Test cases to try
- How to evaluate output quality
- Refinement tips based on results

Make the prompt:
✓ Specific and unambiguous
✓ Contextually rich
✓ Result-oriented
✓ Easy to customize
✓ Scalable for variations

Remember: The best prompts are clear, detailed, and give the AI everything it needs to succeed.`
    }
];

// Contributors data
const contributorsData = [
    {
        id: 1,
        name: "Nguyễn Văn An",
        role: "AI Engineer",
        avatar: "NVA",
        rating: "⭐ 4.9",
        prompts: 45
    },
    {
        id: 2,
        name: "Trần Thị Bình",
        role: "Content Creator",
        avatar: "TTB",
        rating: "⭐ 5.0",
        prompts: 38
    },
    {
        id: 3,
        name: "Lê Hoàng Minh",
        role: "Full-stack Developer",
        avatar: "LHM",
        rating: "⭐ 4.8",
        prompts: 52
    },
    {
        id: 4,
        name: "Phạm Thu Hà",
        role: "Digital Marketer",
        avatar: "PTH",
        rating: "⭐ 4.9",
        prompts: 41
    },
    {
        id: 5,
        name: "Hoàng Đức Anh",
        role: "Data Scientist",
        avatar: "HDA",
        rating: "⭐ 4.7",
        prompts: 29
    },
    {
        id: 6,
        name: "Vũ Minh Châu",
        role: "UX Writer",
        avatar: "VMC",
        rating: "⭐ 5.0",
        prompts: 33
    },
    {
        id: 7,
        name: "Đỗ Tuấn Kiệt",
        role: "ML Engineer",
        avatar: "DTK",
        rating: "⭐ 4.8",
        prompts: 27
    },
    {
        id: 8,
        name: "Bùi Lan Anh",
        role: "Product Manager",
        avatar: "BLA",
        rating: "⭐ 4.9",
        prompts: 35
    }
];

// Category mapping
const categoryInfo = {
    chatgpt: {
        name: "ChatGPT",
        color: "#10A37F",
        icon: "🤖"
    },
    claude: {
        name: "Claude",
        color: "#D97757",
        icon: "🔬"
    },
    midjourney: {
        name: "Midjourney",
        color: "#8B5CF6",
        icon: "🎨"
    },
    coding: {
        name: "Coding",
        color: "#3B82F6",
        icon: "💻"
    },
    writing: {
        name: "Writing",
        color: "#EC4899",
        icon: "✍️"
    },
    business: {
        name: "Business",
        color: "#F59E0B",
        icon: "📊"
    }
};
