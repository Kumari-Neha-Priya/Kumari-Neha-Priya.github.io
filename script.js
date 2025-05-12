// Define content for each section
const pages = {
    hero: `
        <section class="hero" id="hero">
        <div class="hero-content">
            <h1>Hello, I'm <span>Kumari Neha Priya</span></h1>
            <p>Creative | Adaptive | Client-Centric</p>
            <p>Master's student in Business Analytics at the University of Illinois Urbana-Champaign</p>
            <p>📍Champaign, IL, US</p>
            <a href="https://drive.google.com/file/d/1vgn-7CBWzgtg7z1RV-97J5tXuNus6NrD/view?usp=sharing" target="_blank" class="btn">View My Resume</a>
        </div>
        <div class="banner">
            <img src="Portfolio.jpg" alt="Your Profile Photo" class="profile-photo">
            <h2>"Merging Business Acumen with Technology Expertise to Drive Transformative Growth"</h2>
        </div>
    </section>
    `,
    about: `
        <section class="about" id="about">
        <div class="banner">
            <img src="Portfolio.jpg" alt="Your Profile Photo" class="profile-photo">
            <p id="photo"><b>Kumari Neha Priya</b></p>
            <p id="photo">Master's student in Business Analytics at the University of Illinois Urbana-Champaign</p>
        </div>
        <h2>About Me</h2>
        <div class="about-content">
            <p>I am a technology enthusiast with a passion for solving complex challenges and delivering impactful solutions. With over 4 years of experience spanning IT and the airline industries, I’ve honed my skills in project management, business analysis, and deploying SaaS and on-premises solutions. My work has empowered organizations to optimize their operations, achieve ambitious goals, and thrive in dynamic markets.</p>
            <p>I’ve successfully led 25+ projects and resolved 30+ critical issues for global airline clients like Jet2.com, Peach Aviation, and Transavia Airlines.  I bring a unique ability to bridge technical and business needs, ensuring every solution I deliver is both innovative and impactful. Whether it's implementing integrated systems for airline crew management or enhancing application performance by 84% via optimized business rules coding, my focus remains on driving measurable and high-quality results.</p>
            <p>Technology, to me, is not just a career—it’s the bridge that empowers business transformation. Every project I undertake and every solution I develop combines the power of innovation with strategic business insight, aiming to drive impactful change and elevate organizational success.</p>
            <p>Currently, I am pursuing an M.S. in Business Analytics at the University of Illinois Urbana-Champaign, expanding my expertise in data-driven strategies, advanced analytics, and machine learning. Beyond my professional pursuits, I am passionate about traveling, music, and art, which fuel my creativity and inspire meaningful connections.</p>
            </br><em>Fun Facts:</em> I am ambidextrous, and can mimic various animal sounds (think cats, dogs, and goats) with precision!</p>
            </div>
            </section>
    `,
    journey: `
        <section class="journey" id="journey">
        <div class="banner">
            <img src="Portfolio.jpg" alt="Your Profile Photo" class="profile-photo">
            <p id="photo"><b>Kumari Neha Priya</b></p>
            <p id="photo">Master's student in Business Analytics at the University of Illinois Urbana-Champaign</p>
        </div>
        <h2>My Journey</h2>
        <div class="about-content">
            <p>My professional journey began with a college placement at Infogain, where I secured the opportunity before even completing my final semester. As a Business Analyst, I worked on critical aviation software solutions for clients like Sabre and CAE, managing SaaS implementations and ensuring seamless project execution. Recognizing my impactful contributions to their business, CAE brought me on board as a full-time employee. These experiences offered invaluable global exposure, allowing me to collaborate with diverse teams and clients to address complex business challenges effectively.</p>
            <p>During my undergraduate years, I interned at HighRadius, where I delved into AI-driven solutions and analytics, developing a strong foundation in problem-solving and strategic thinking. This experience reinforced my drive to explore innovative technologies and their real-world applications.</p>
            <p>At the University of Illinois, my academic pursuits have been complemented by real-world projects, including developing an AI/ML solution to optimize pharmaceutical processes—an exciting challenge at the crossroads of technology and innovation. These experiences have deepened my understanding of data-driven strategies and the power of innovation to drive transformation.</p>
            <p>Throughout my career, I’ve remained committed to continuous learning, collaboration, and creating meaningful impact. Whether it’s through mentoring, designing creative solutions, or fostering inclusive environments, my goal is to empower others and drive change that matters.</p>
            </div>
            </section>
    `,
    experience: `
        <section class="experience" id="experience">
        <div class="banner">
            <img src="Portfolio.jpg" alt="Your Profile Photo" class="profile-photo">
<p id="photo"><b>Kumari Neha Priya</b></p>
            <p id="photo">Master's student in Business Analytics at the University of Illinois Urbana-Champaign</p>
        </div>
        <h2>Professional Experience</h2>
        <div class="experience-list">
            <div class="experience-item">
                <h3>Data Scientist and Team Lead Intern</h3>
                <p><i>US Pharmacopeia (USP), US, August 2024 - May 2025</i></p>
                <p>As part of a groundbreaking AI/ML project for pharmaceutical continuous manufacturing, I built a system that automated the collection, filtering, and categorization of research data from 16 sources, including journals, documents, books, workshops, and others. Leading a cross-cultural team of five members, I implemented keyword-based filtering and fine-tuned embedding models like BioBERT, ensuring accurate, structured outputs for streamlined research accessibility and client satisfaction.</p>
            </div>
            <div class="experience-item">
                <h3>Contributor Business Analyst</h3>
                <p><i>CAE, India, March 2022 - November 2023</i></p>
                <p>After CAE acquired Sabre's AirCentre, I transitioned to a full-time employee at CAE, where my responsibilities grew while continuing to work on similar aviation software and business rules projects. I led the development and implementation of tailored solutions, refining business processes, and ensuring on-time delivery to enhance client operations and satisfaction.</p>
            </div>
            <div class="experience-item">
                <h3>Business Analyst</h3>
                <p><i>Sabre Travel technologies Pvt. Ltd., India, January 2020 - February 2022</i></p>
                <p>At Sabre, I specialized in delivering innovative aviation software and business rules solutions, focusing on streamlining crew management and optimizing operational workflows. My role involved collaborating with cross-functional teams and clients globally to ensure seamless implementation and alignment with client objectives.</p>
            </div>
            <div class="experience-item">
                <h3>Consultant Development (Contracted to Sabre/CAE as Business Analyst)</h3>
                <p><i>Infogain India Pvt. Ltd., India, January 2020 - September 2023</i></p>
                <p>At Infogain, I worked as a Business Analyst and Project Manager, where I delivered critical SaaS solutions for global clients like Sabre and CAE. I specialized in managing complex aviation software and business rules projects, gathering requirements, developing and deploying solutions, and ensuring seamless project delivery to meet client needs.</p>
            </div>
            <div class="experience-item">
                <h3>Advanced Robotics Process Automation Intern</h3>
                <p><i>HighRadius, India, May 2019 - December 2019</i></p>
                <p>At HighRadius, I first joined as a summer intern after clearing the Tech Track exam, where I built an AI-enabled FinTech B2B cloud application aimed at streamlining daily tasks for Accounts Receivable professionals. Following this, I was offered a paid internship, where I worked on a live project for a key client, implementing a Claims and POD (Proof of Delivery) Automation module. This solution optimized the claims aggregation process, empowering the client to make more informed decisions and significantly improve their deduction management efforts.</p>
            </div>
        </div>
        <div id="collaboration-map">
          <h2>Global Collaboration Map</h2>
          <p>Throughout my career, I have had the opportunity to collaborate with teams and work on projects across the globe. Below is a map highlighting the countries and regions I have worked in during my professional journey.</p>
        </div>
    </section>
    `,
    projects: `
         <section class="projects" id="projects">
         <div class="banner">
            <img src="Portfolio.jpg" alt="Your Profile Photo" class="profile-photo">
            <p id="photo"><b>Kumari Neha Priya</b></p>
            <p id="photo">Master's student in Business Analytics at the University of Illinois Urbana-Champaign</p>
        </div>
        <h2>Projects</h2>
        <div class="project-list">
            <details>
                <summary>Professional Projects</summary>
            <details>
                <summary>Project 1</summary>
                <p><b>AI-ML Solution for Research Gathering on Pharmaceutical Continuous Manufacturing</b></p>
                <p><i>Data Scientist and Team Lead Intern, US Pharmacopeia (USP), August 2024 - May 2025</i></p>
                <a href="https://github.com/Kumari-Neha-Priya/AI-ML-Solution-for-Research-Gathering-on-Pharmaceutical-Continuous-Manufacturing" target="_blank">View on GitHub</a>
            </details>
            <details>
                <summary>Project 2</summary>
                <p><b>Claims and POD Automation Module</b></p>
                <p><i>Advanced Robotics Process Automation Intern, HighRadius, July 2019 - December 2019</i></p>
                <p>Description:</p>
                </br>Developed an advanced Robotic Process Automation (RPA) module to streamline claims and Proof of Delivery (POD) processing for deduction management systems in B2B scenarios. The solution automated the retrieval, collation, and indexing of claims and backup documentation (e.g., Bills of Lading, PODs) from web portals, emails, and EDI submissions, significantly improving efficiency and accuracy. Key technologies included Java, XML, SQL, and automation frameworks for web/email agents.
                <p>Contributions:</p>
                </br>•Designed and implemented web and email agents to automate the aggregation of claims and PODs, reducing the need for manual intervention in document retrieval and processing
                </br>•Developed data parsing and collation logic to extract and format claims into item-level indices for seamless integration with deduction workflows
                </br>•Conducted feasibility testing, bug fixes, and enhancement of agents to address changes in customer requirements, document formats, and portal configurations
                </br>•Configured automated workflows for document matching and cloud storage, ensuring quick access and effective dispute resolution
                <p>Outcome:</p>
                </br>The project resulted in a 40% reduction in manual tasks, significantly lowering Days Deduction Outstanding (DDO) and Days Sales Outstanding (DSO). By automating claims and POD aggregation, the system provided end-to-end efficiency, enabling businesses to recover lost revenue and streamline deduction management processes.
            </details>
            <details>
                <summary>Project 3</summary>
                <p><b>AI-enabled FinTech B2B Cloud Application</b></p>
                <p><i>Summer Intern, HighRadius, May 2019 - June 2019</i></p>
                <p>Description:</p>
                </br>Developed a web-based AI-enabled FinTech B2B cloud application to streamline the workflow of Accounts Receivable (AR) departments. The application allowed AR professionals to manage invoice data, perform advanced searches, and sort operations, and even predict payment dates using machine learning algorithms. Tools and technologies included a structured database, web-based UI, and AI/ML components for payment date predictions.
                <p>Contributions:</p>
                </br>•Designed and implemented functionality to display and manage invoice data, including the ability to edit, sort, and search invoices by key parameters such as due date and fiscal year
                </br>•Loaded and processed large datasets into the database and built a user-friendly UI to interact with the data
                </br>•Developed and integrated a machine learning model to predict invoice payment dates, enhancing efficiency and decision-making capabilities for AR professionals
                <p>Outcome:</p>
                </br>Delivered a robust and fully functional AR management system that reduced manual efforts and improved invoice tracking and prediction accuracy. The application provided business value by enabling users to handle large datasets seamlessly, predict payment behavior, and optimize their operations effectively.
            </details>
        </details>
        <details>
            <summary>Academic Projects</summary>
            <details>
                <summary>Project 1</summary>
                <p><b>Predicting US Flight Delays and Cancellations Using Wolfram Mathematica</b></p>
                <p>This project was undertaken as part of my master’s program at the University of Illinois Urbana-Champaign, focusing on Big Data Analytics.</p>
                <a href="https://github.com/Kumari-Neha-Priya/Predicting-US-Flight-Delays-and-Cancellations-Using-Wolfram-Mathematica" target="_blank">View on GitHub</a>
            </details>
            <details>
                <summary>Project 2</summary>
                <p><b>Analyzing and Forecasting Air Quality in Illinois and Ohio (2009-2023)</b></p>
                <p>This project was undertaken as part of my master’s program at the University of Illinois Urbana-Champaign, focusing on Big Data Analytics.</p>
                <a href="https://github.com/Kumari-Neha-Priya/Analyzing-and-Forecasting-Air-Quality-in-Illinois-and-Ohio-2009-2023-" target="_blank">View on GitHub</a>
            </details>
            <details>
                <summary>Project 3</summary>
                <p><b>Yelp Data Analysis for Strategic Restaurant Location Selection Using Knime and MongoDB</b></p>
                <p>This project was undertaken as part of my master’s program at the University of Illinois Urbana-Champaign, focusing on Big Data Analytics.</p>
                <a href="https://github.com/Kumari-Neha-Priya/Yelp-Data-Analysis-for-Strategic-Restaurant-Location-Selection-Using-Knime-and-MongoDB" target="_blank">View on GitHub</a>
            </details>
            <details>
                <summary>Project 4</summary>
                <p><b>Telling a story about Memes with blockchain data</b></p>
                <p>This project was undertaken as part of my master’s program at the University of Illinois Urbana-Champaign, focusing on Big Data Analytics.</p>
                <a href="https://github.com/Kumari-Neha-Priya/Telling-a-story-about-Memes-with-blockchain-data" target="_blank">View on GitHub</a>
            </details>
            <details>
                <summary>Project 5</summary>
                <p><b>Transforming Yelp Data from Semi-Structured to Structured Format for Business Insights</b></p>
                <p>This project was undertaken as part of my master’s program at the University of Illinois Urbana-Champaign, focusing on leveraging semi-structured Yelp JSON data to provide actionable insights for business planning.</p>
                <a href="https://github.com/Kumari-Neha-Priya/Transforming-Yelp-Data-from-Semi-Structured-to-Structured-Format-for-Business-Insights" target="_blank">View on GitHub</a>
            </details>
            <details>
                <summary>Project 6</summary>
                <p><b>Exploring Yelp Fusion API with GraphQL</b></p>
                <p>This project was undertaken as part of my master’s program at the University of Illinois Urbana-Champaign, focusing on Business Analytics.</p>
                <p>In this project, I leveraged the Yelp Fusion API, transitioning from traditional JSON-based querying to a modern GraphQL approach, to extract, analyze, and visualize business data for enhanced decision-making. The project aimed to replicate and expand on SQL-based analyses I previously developed, showcasing the advantages of GraphQL for real-world applications.</p>
                <p>The scope involved querying data about businesses, reviews, and users, focusing on uncovering insights into customer behavior, review patterns, and top-performing businesses across specific categories and locations. By implementing GraphQL, I was able to enhance data precision and optimize query performance, effectively overcoming limitations of traditional APIs.</p>
                <p>Key accomplishments include:</p>
                </br>•Translated complex SQL queries into streamlined GraphQL queries, reducing query time and resource usage
                </br>•Conducted an in-depth analysis of business performance, customer reviews, and user behavior trends
                </br>•Created a dynamic and reusable querying framework for extracting insights with flexibility and efficiency
                </br>•Delivered actionable insights that could help businesses understand customer preferences and refine strategies
                </br>•Gained hands-on experience with modern data querying techniques and their application in business analytics
            </details>
            <details>
                <summary>Project 7</summary>
                <p><b>Property Market Value Evaluation for the Cook County Assessor’s Office (CCAO)</b></p>
                <p>As part of my Master’s program at the University of Illinois Urbana-Champaign, I completed a project focused on enhancing the accuracy and fairness of property tax assessments for the Cook County Assessor’s Office (CCAO).</p>
                <p>The project involved developing a data-driven predictive model to estimate residential property market values with minimal Mean Squared Error (MSE), supporting CCAO’s mission to address historical inaccuracies and public dissatisfaction. Leveraging historical data, I applied advanced regression techniques to ensure transparency, accuracy, and interpretability.                </p>
                <p>This project underscored the importance of balancing accuracy and interpretability in predictive modeling while addressing real-world challenges in public policy and taxation.</p>
                <p>Key accomplishments include:</p>
                </br>•Evaluated four regression methodologies, including Linear Regression, Lasso Regression, k-Fold Cross-Validation, and Validation Set Approaches
                </br>•Delivered a final predictive model (Multiple Linear Regression with Validation Set Approach) using 5 key predictors, achieving an R-Squared accuracy of 94.59% with an MSE of 3111.19
                </br>•Prioritized model completeness and interpretability, ensuring no missing values in the final prediction output
                </br>•Scaled and prepared prediction results for implementation, covering a range of property values from $161,000 (1st Quartile) to $660,100 (3rd Quartile)
                </br>•Produced actionable insights for stakeholders, ensuring fair and data-driven property assessments
            </details>
            <details>
                <summary>Project 8</summary>
                <p><b>Illinois Workplace Wellness Study Analysis</b></p>
                <p>This project was undertaken as part of my master’s program at the University of Illinois Urbana-Champaign, focusing on Business Analytics.</p>
                <p>The Illinois Workplace Wellness Study used a randomized controlled trial to evaluate the effectiveness of workplace wellness programs on employee health, healthcare costs, and productivity. The study involved 4,834 employees, with 3,300 in the treatment group and 1,534 in the control group. My work focused on analyzing the program’s outcomes, identifying potential causal relationships, and examining the influence of demographic factors and selection bias on the results.</p>
                <p>The findings revealed no statistically significant health improvements, cost savings, or productivity gains, with behavioral changes limited to healthier, more engaged employees. This suggests that wellness programs may not effectively reach less healthy employees or benefit all participants equally.</p>
                <p>This project provided valuable experience in evaluating large-scale experimental data, understanding the nuances of randomized trials, and translating statistical findings into actionable business recommendations. It also emphasized the importance of inclusivity and tailored approaches in designing workplace wellness initiatives.</p>
                <p>Key accomplishments include:</p>
                </br>•Conducted hypothesis testing and statistical analysis using linear regression to evaluate program effectiveness
                </br>•Analyzed the impact of randomization and demographic controls on outcome measures, such as healthcare spending, office visits, and chronic conditions
                </br>•Identified selection bias and its influence on program outcomes, highlighting areas for targeted interventions
                </br>Delivered actionable recommendations for employers to refine wellness programs and improve inclusivity
            </details>
            <details>
                <summary>Project 9</summary>
                <p><b>Teenage Driving and Mortality Analysis</b></p>
                <p>This project was undertaken as part of my master’s program at the University of Illinois Urbana-Champaign, focusing on Big Data Analytics.</p>
                <p>In this project, I analyzed the impact of driving eligibility on teenage mortality using a Regression Discontinuity (RD) research design. Leveraging death certificate data (1983–2014) and state-specific Minimum Legal Driving Age (MLDA) laws, I examined the causal relationship between gaining driving eligibility and changes in mortality rates. The analysis applied both non-parametric and parametric RD methods to assess differences in all-cause and motor vehicle accident mortality rates among teenagers just above and below the MLDA threshold.</p>
                <p>Key accomplishments include:</p>
                </br>•Conducted detailed data analysis on 501,193 teenage deaths over 31 years, identifying patterns in mortality rates relative to MLDA thresholds
                </br>•Implemented non-parametric and parametric RD approaches, analyzing how bandwidth selection affects bias, precision, and causal validity
                </br>•Demonstrated the trade-offs between statistical precision and bias when narrowing bandwidths around the MLDA cutoff
                </br>•Delivered actionable insights for policymakers on the implications of driving eligibility laws on teenage mortality
                </br>•Effectively communicated findings through well-structured reports and visualizations, ensuring clarity for diverse stakeholders
            </details>
            <details>
                <summary>Project 10</summary>
                <p><b>Impact of Tinder Feature Rollouts on User Sentiment and Engagement</b></p>
                <p>This project was undertaken as part of my master’s program at the University of Illinois Urbana-Champaign, focusing on Marketing Analytics.</p>
                <a href="https://medium.com/@kumarinehapriya024/what-drives-user-sentiment-on-dating-apps-lessons-from-tinders-feature-rollouts-dac5239f3278" target="_blank">View on Medium</a>
                <p>In this project, I analyzed how users respond to major feature launches on Tinder, focusing on changes in sentiment and engagement. Using over 150,000 app reviews across platforms, I investigated the causal impact of launching paid and utility-driven features using Difference-in-Differences (DiD), topic modeling, and predictive modeling techniques. The goal was to provide actionable insights on which features drive user happiness versus dissatisfaction, and how platform dynamics (iOS vs. Android) influence outcomes.</p>
                <p>Key accomplishments include:</p>
                </br>• Conducted comprehensive sentiment analysis on large-scale review data using VADER and validated it with rating-based labels for robust classification  
                </br>• Applied causal DiD methods to quantify the effect of launching specific features (e.g., “Likes You,” “Passport”) on sentiment and engagement metrics  
                </br>• Identified that “Likes You” significantly increases sentiment (+0.13), while monetized features like “Passport” lead to declines (~–0.09), informing feature strategy  
                </br>• Built and evaluated an XGBoost classifier (AUC = 0.73) to predict negative reviews in real time for proactive product feedback monitoring  
                </br>• Visualized post-launch engagement and sentiment shifts using clean, compelling plots, and communicated findings clearly to support marketing and product decisions
            </details>
            <details>
                <summary>Project 11</summary>
                <p><b>Wearable Air Pollution and Heart Rate Monitoring Device</b></p>
                <p>This project was undertaken as part of my bachelor’s program at the Kalinga Institute of Industrial Technology</p>
                <a href="https://www.youtube.com/watch?v=SYaxzheYONQ" target="_blank">View on YouTube</a>
            </details>
        </details>
        <details>
            <summary>Personal Projects</summary>
            <details>
                <summary>Project 1</summary>
                <p><b>Business Analytics Capstone: Ad Blocker - a menace or a new industry evolution</b></p>
                <a href="https://github.com/Kumari-Neha-Priya/Business-Analytics-Capstone-Ad-Blocker---a-menace-or-a-new-industry-evolution" target="_blank">View on GitHub</a>
            </details>
        </details>
        </div>
    </section>
    `,
    hobbies: `
        <section class="hobbies" id="hobbies">
        <div class="banner">
            <img src="Portfolio.jpg" alt="Your Profile Photo" class="profile-photo">
            <p id="photo"><b>Kumari Neha Priya</b></p>
            <p id="photo">Master's student in Business Analytics at the University of Illinois Urbana-Champaign</p>
        </div>
            <h2>Hobbies And Interests</h2>
            <p>When I’m not immersed in work or studies, you’ll find me exploring my creative and adventurous side. Here’s a glimpse into what fuels my joy:</p>
            <div class="hobbies-grid">
        <div class="hobby-item">
            <div class="icon-container">
                <i class="fas fa-paint-brush"></i>
            </div>
            <h3>Art and Crafts</h3>
            <p>I find peace and inspiration through creativity, whether it's painting, sketching, or crafting, bringing vivid expressions of the world around me to life.</p>
        </div>
        <div class="hobby-item">
            <div class="icon-container">
                <i class="fas fa-music"></i>
            </div>
            <h3>Singing and Music</h3>
            <p>Music is my sanctuary—whether I’m singing or simply enjoying my favorite tunes.</p>
        </div>
        <div class="hobby-item">
            <div class="icon-container">
                <i class="fas fa-futbol"></i>
            </div>
            <h3>Sports Enthusiast</h3>
            <p>I love playing cricket, badminton, and carrom to stay active and unwind.</p>
        </div>
        <div class="hobby-item">
            <div class="icon-container">
                <i class="fas fa-plane"></i>
            </div>
            <h3>Travel and Culture</h3>
            <p>Traveling to new places, learning about diverse cultures, and connecting with people energizes me and is my way of broadening horizons and forming lifelong memories.</p>
        </div>
        <div class="hobby-item">
            <div class="icon-container">
                <i class="fas fa-paw"></i>
            </div>
            <h3>Animal Lover</h3>
            <p>Animals bring me immense joy. I dream of one day having a home filled with pets. Currently, I have two rabbits who brighten my days.</p>
        </div>
        <div class="hobby-item">
            <div class="icon-container">
                <i class="fas fa-hands-helping"></i>
            </div>
            <h3>Social Service and Mentorship</h3>
            <p>Giving back to the community through teaching, coaching, and mentoring is a passion I’ve nurtured since childhood.</p>
        </div>
    </div>
</section>
    `,
    values: `
        <section id="values" class="values">
        <div class="banner">
            <img src="Portfolio.jpg" alt="Your Profile Photo" class="profile-photo">
            <p id="photo"><b>Kumari Neha Priya</b></p>
            <p id="photo">Master's student in Business Analytics at the University of Illinois Urbana-Champaign</p>
        </div>
    <h2>Values and Beliefs</h2>
    <p>At the heart of everything I do are these guiding principles:</p>
    <div class="values-grid">
        <div class="value-item">
            <i class="fas fa-heart"></i>
            <h3>Empathy and Compassion</h3>
            <p>I believe in understanding others' perspectives, treating everyone with kindness, and fostering an inclusive environment where all voices are heard.</p>
        </div>
        <div class="value-item">
            <i class="fas fa-lightbulb"></i>
            <h3>Simplicity in Complexity</h3>
            <p>Even the most complex problems can be simplified with the right approach. I aim to deliver solutions that are clear, efficient, and easy to implement.</p>
        </div>
        <div class="value-item">
            <i class="fas fa-users"></i>
            <h3>Teamwork and Collaboration</h3>
            <p>True success lies in collective effort. I value the unique contributions of each individual and believe in building strong, cohesive teams where everyone thrives.</p>
        </div>
        <div class="value-item">
            <i class="fas fa-handshake"></i>
            <h3>Authenticity</h3>
            <p>I strive to show up authentically in all areas of life and encourage others to do the same. Realness fosters trust, connection, and meaningful relationships.</p>
        </div>
        <div class="value-item">
            <i class="fas fa-globe"></i>
            <h3>Diversity and Inclusion</h3>
            <p>I celebrate diverse perspectives, cultures, and abilities, and I’m committed to fostering environments where everyone feels valued, welcomed, and empowered.</p>
        </div>
        <div class="value-item">
            <i class="fas fa-sun"></i>
            <h3>Positivity and Resilience</h3>
            <p>I believe that energy is contagious, so I choose to stay positive and spread joy, even during challenging times. A single positive thought can inspire transformation.</p>
        </div>
        <div class="value-item">
            <i class="fas fa-chalkboard-teacher"></i>
            <h3>Mentorship and Guidance</h3>
            <p>I enjoy mentoring and coaching others, sharing my experiences to help them grow and avoid pitfalls I’ve encountered. Seeing others succeed is deeply rewarding.</p>
        </div>
        <div class="value-item">
            <i class="fas fa-clock"></i>
            <h3>Living in the Moment</h3>
            <p>Life is precious, and I embrace the small joys of the moment while planning for the future. Balance and mindfulness are keys to happiness.</p>
        </div>
        <div class="value-item">
            <i class="fas fa-balance-scale"></i>
            <h3>Respect and Equality</h3>
            <p>I believe that every individual deserves fairness, dignity, and respect, regardless of their background or status. Equality is the cornerstone of meaningful relationships.</p>
        </div>
        <div class="value-item">
            <i class="fas fa-hands-helping"></i>
            <h3>Uplifting Others</h3>
            <p>I believe in lifting others as I grow, making the world a better place through kindness, generosity, and shared success.</p>
        </div>
    </div>
</section>
    `,
    gallery: `
    <section class="gallery" id="gallery">
    <div class="banner">
            <img src="Portfolio.jpg" alt="Your Profile Photo" class="profile-photo">
            <p id="photo"><b>Kumari Neha Priya</b></p>
            <p id="photo">Master's student in Business Analytics at the University of Illinois Urbana-Champaign</p>
        </div>
    <h2>Gallery</h2>
    <p>Explore moments from my journey around the world, my artistic creations, and my contributions to the community.</p>
    <div class="gallery-container">
        <div class="gallery-category">
        <h3>Travel</h3>
        <!-- Image Slider with arrows -->
      <div class="image-slider">
        <button class="slider-btn prev-btn">&#10094;</button>
        <div class="slider-images">
          <img src="travel1.jpg" alt="Travel Image 1" class="slide">
          <img src="travel2.jpg" alt="Travel Image 2" class="slide">
          <img src="travel3.jpg" alt="Travel Image 3" class="slide">
          <img src="travel4.jpg" alt="Travel Image 4" class="slide">
          <img src="travel5.jpg" alt="Travel Image 5" class="slide">
          <img src="travel6.jpg" alt="Travel Image 6" class="slide">
          <img src="travel7.jpg" alt="Travel Image 7" class="slide">
          <img src="travel8.jpg" alt="Travel Image 8" class="slide">
          <img src="travel9.jpg" alt="Travel Image 9" class="slide">
          <img src="travel10.jpg" alt="Travel Image 10" class="slide">
          <img src="travel11.jpg" alt="Travel Image 11" class="slide">

        </div>
        <button class="slider-btn next-btn">&#10095;</button>
      </div>
    </div>
    <div class="gallery-category">
      <h3>Social Service</h3>
      <div class="image-slider">
        <button class="slider-btn prev-btn">&#10094;</button>
        <div class="slider-images">
          <img src="social1.jpg" alt="Social Service Image 1" class="slide">
          <img src="social2.jpg" alt="Social Service Image 2" class="slide">
          <img src="social3.jpg" alt="Social Service Image 3" class="slide">
          <img src="social4.jpg" alt="Social Service Image 4" class="slide">
        </div>
        <button class="slider-btn next-btn">&#10095;</button>
      </div>
    </div>
    <div class="gallery-category">
      <h3>Art and Craft</h3>
      <div class="image-slider">
        <button class="slider-btn prev-btn">&#10094;</button>
        <div class="slider-images">
          <img src="art1.jpg" alt="Art and Craft Image 1" class="slide">
          <img src="art2.jpg" alt="Art and Craft Image 2" class="slide">
          <img src="art3.jpg" alt="Art and Craft Image 3" class="slide">
          <img src="art4.jpg" alt="Art and Craft Image 4" class="slide">
          <img src="art5.jpg" alt="Art and Craft Image 5" class="slide">
          <img src="art6.jpg" alt="Art and Craft Image 6" class="slide">
          <img src="art7.jpg" alt="Art and Craft Image 7" class="slide">
          <img src="art8.jpg" alt="Art and Craft Image 8" class="slide">
        </div>
        <button class="slider-btn next-btn">&#10095;</button>
      </div>
    </div>
  </div>
     <div id="map-section">
                <h2>Where I've Traveled</h2>
                <p>Take a look at the countries I’ve explored.</p>
                <div id="world-map" style="width: 100%; height: 500px;"></div>
            </div>
    </section>
    `,
    contact: `
        <section class="contact" id="contact">
        <div class="banner">
            <img src="Portfolio.jpg" alt="Your Profile Photo" class="profile-photo">
            <p id="photo"><b>Kumari Neha Priya</b></p>
            <p id="photo">Master's student in Business Analytics at the University of Illinois Urbana-Champaign</p>
        </div>
        <h2>Contact Me</h2>
        <p>If you'd like to work with me, collaborate, or just say hi, feel free to get in touch!</p>
        <div class="contact-info">
            
            <div class="contact-item2">
                <i class="fas fa-inbox"></i>
                <a href="mailto:kumari4@illinois.edu" class="no-underline">Outlook</a>
            </div>
            <div class="contact-item3">
                <i class="fas fa-envelope"></i>
                <a href="mailto:kumarinehapriya024@gmail.com" class="no-underline">Email</a>
            </div>
            <div class="contact-item4">
                <i class="fab fa-linkedin"></i>
                <a href="https://www.linkedin.com/in/kumari-neha-priya/" target="_blank" class="no-underline">LinkedIn</a>
            </div>
            <div class="contact-item5">
                <i class="fab fa-github"></i>
                <a href="https://github.com/Kumari-Neha-Priya" target="_blank" class="no-underline">Github</a>
            </div>
            <div class="contact-item6">
                <i class="fas fa-book-open"></i>
                <a href="https://www.datacamp.com/portfolio/KumariNehaPriya" target="_blank" class="no-underline">Datacamp</a>
            </div>
        </div>
    </section>
    `
};

// Function to load content dynamically
function loadPage(page) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = pages[page] || `<p>Page not found!</p>`;
}

// Set up event listeners for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = e.target.getAttribute('data-page');
        loadPage(page);
    });
});

// Load the default page (home)
loadPage('hero');

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        // Close the mobile menu after clicking a link (for better UX)
        const navMenu = document.querySelector('header nav ul');
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});

// Toggle Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('header nav ul');
const menuLinks = document.querySelectorAll('header nav ul li a'); // Select all menu links

// Toggle the menu when the toggle button is clicked
menuToggle.addEventListener('click', function () {
    navMenu.classList.toggle('active');
});

// Close the menu when a link is clicked
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        navMenu.classList.remove('active'); // Remove the active class to collapse the menu
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Get all the navigation links
    const navLinks = document.querySelectorAll('a[data-page]');
    // Function to load content into the main section
    function loadPage(page) {
        const content = document.getElementById('content');
        content.innerHTML = pages[page];  // Set the content

        // Check if the gallery page is selected, then load the map
        if (page === 'gallery') {
            loadWorldMap();
            initSliders(); // Initialize the sliders when on the gallery page

        }

        // Check if the professional experience page is selected, then load the collaboration map
        if (page === 'experience') {
            loadCollaborationMap(); // Professional collaboration map
        }
    }

    // Function to load the world map into the gallery section
    function loadWorldMap() {
        const mapContainer = document.createElement('div');
        mapContainer.id = 'world-map';
        document.getElementById('content').appendChild(mapContainer);

        // Initialize the map
        const map = L.map('world-map').setView([20, 0], 2); // World view

        // Add map tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Mark countries visited
        const visitedCountries = [
            { name: "India", lat: 20.5937, lng: 78.9629 },
            { name: "Poland", lat: 51.9194, lng: 19.1451 },
            { name: "Germany", lat: 51.1657, lng: 10.4515 },
            { name: "Doha", lat: 25.276987, lng: 51.520008 },
            { name: "England", lat: 52.3555, lng: -1.1743 },
            { name: "Spain", lat: 40.4637, lng: -3.7492 },
            { name: "United States", lat: 37.0902, lng: -95.7129 }
        ];

        visitedCountries.forEach(country => {
            L.marker([country.lat, country.lng]).addTo(map)
                .bindPopup(`<b>${country.name}</b>`);
        });
    }

    // Function to load the collaboration world map (Professional Experience Map)
    function loadCollaborationMap() {
        const mapContainer = document.createElement('div');
        mapContainer.id = 'world-collaboration-map';
        document.getElementById('content').appendChild(mapContainer);

        // Initialize the map
        const map = L.map('world-collaboration-map').setView([20, 0], 2); // World view

        // Add map tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Countries/Regions where you've worked (Replace with your actual experience)
        const collaborationCountries = [
            { name: "India", lat: 20.5937, lng: 78.9629 },
            { name: "United States", lat: 37.0902, lng: -95.7129 },
            { name: "Uruguay", lat: -32.5228, lng: -55.7658 },
            { name: "Canada", lat: 56.1304, lng: -106.3468 },
            { name: "Mauritius", lat: -20.3484, lng: 57.5522 },
            { name: "Australia", lat: -25.2744, lng: 133.7751 },
            { name: "New Zealand", lat: -40.9006, lng: 174.8860 },
            { name: "Iceland", lat: 64.9631, lng: -19.0208 },
            { name: "Japan", lat: 36.2048, lng: 138.2529 },
            { name: "China", lat: 35.8617, lng: 104.1954 },
            { name: "Cambodia", lat: 12.5657, lng: 104.9910 },
            { name: "Spain", lat: 40.4637, lng: -3.7492 },
            { name: "Poland", lat: 51.9194, lng: 19.1451 },
            { name: "Sweden", lat: 60.1282, lng: 18.6435 },
            { name: "England", lat: 52.3555, lng: -1.1743 },
            { name: "Sri Lanka", lat: 7.8731, lng: 80.7718 },
            { name: "Hong Kong", lat: 22.3193, lng: 114.1694 },
            { name: "Netherlands", lat: 52.1326, lng: 5.2913 },
            { name: "Thailand", lat: 15.8700, lng: 100.9925 },
            { name: "Indonesia", lat: -0.7893, lng: 113.9213 },
            { name: "Norway", lat: 60.4720, lng: 8.4689 },
            { name: "South Africa", lat: -30.5595, lng: 22.9375 },
            { name: "Ireland", lat: 53.4129, lng: -8.2439 },
            { name: "Stockholm", lat: 59.3293, lng: 18.0686 },
            { name: "Singapore", lat: 1.3521, lng: 103.8198 },
            { name: "Nepal", lat: 28.3949, lng: 84.1240 }
        ];

        // Add markers for each country
        collaborationCountries.forEach(country => {
            L.marker([country.lat, country.lng]).addTo(map)
                .bindPopup(`<b>${country.name}</b>`);
        });
    }

    // Add event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const page = link.getAttribute('data-page');
            loadPage(page);
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        // Function to initialize each image slider
        function initSlider(slider) {
          const images = slider.querySelectorAll('.slide');
          const prevButton = slider.querySelector('.prev-btn');
          const nextButton = slider.querySelector('.next-btn');
          const sliderImages = slider.querySelector('.slider-images');
          let currentIndex = 0;
      
          // Function to show the current image based on the index
          function showImage(index) {
            const totalImages = images.length;
      
            // Adjust currentIndex to be within bounds
            if (index >= totalImages) {
              currentIndex = 0;  // Wrap around to the first image
            } else if (index < 0) {
              currentIndex = totalImages - 1;  // Wrap around to the last image
            }
      
            // Move the slider images horizontally using translateX
            sliderImages.style.transform = `translateX(-${currentIndex * 100}%)`;
          }
      
          // Event listener for the previous button
          prevButton.addEventListener('click', function () {
            currentIndex--;
            showImage(currentIndex);
          });
      
          // Event listener for the next button
          nextButton.addEventListener('click', function () {
            currentIndex++;
            showImage(currentIndex);
          });
      
          // Initially show the first image
          showImage(currentIndex);
        }
      
        // Initialize sliders for each gallery category
        const sliders = document.querySelectorAll('.image-slider');
        sliders.forEach(slider => {
          initSlider(slider);
        });
      });
      
      // Function to initialize each image slider
    function initSliders() {
        const sliders = document.querySelectorAll('.image-slider');
        sliders.forEach(slider => {
            const prevButton = slider.querySelector('.prev-btn');
            const nextButton = slider.querySelector('.next-btn');
            const sliderImages = slider.querySelector('.slider-images');
            const images = slider.querySelectorAll('.slide');
            let currentIndex = 0;

            // Function to show the current image based on the index
            function showImage(index) {
                const totalImages = images.length;

                // Adjust currentIndex to be within bounds
                if (index >= totalImages) {
                    currentIndex = 0;  // Wrap around to the first image
                } else if (index < 0) {
                    currentIndex = totalImages - 1;  // Wrap around to the last image
                }

                // Move the slider images horizontally using translateX
                sliderImages.style.transform = `translateX(-${currentIndex * 100}%)`;
            }

            // Event listener for the previous button
            prevButton.addEventListener('click', function () {
                currentIndex--;
                showImage(currentIndex);
            });

            // Event listener for the next button
            nextButton.addEventListener('click', function () {
                currentIndex++;
                showImage(currentIndex);
            });

            // Initially show the first image
            showImage(currentIndex);
        });
    }

    // Load the initial page (home by default)
    loadPage('hero');
});