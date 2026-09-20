module.exports = {
  email: 'francis_mark_cayco@yahoo.com',
  technical_profile: [
    {
      name: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'SQL', 'Bash']
    },
    {
      name: 'Data Analysis & Visualization',
      skills: ['Pandas', 'NumPy', 'Polars', 'Matplotlib', 'Jupyter', 'Power BI', 'Tableau', 'Microsoft Excel']
    },
    {
      name: 'Machine Learning & Explainable AI',
      skills: ['scikit-learn', 'PyTorch', 'TensorFlow', 'XGBoost', 'Optuna', 'NetworkX', 'SHAP', 'LIME']
    },
    {
      name: 'Data Engineering & Orchestration',
      skills: ['Apache Spark', 'Prefect', 'Dagster', 'Airflow', 'dbt', 'Airbyte', 'Databricks', 'Azure Data Factory', 'PostgreSQL']
    },
    {
      name: 'Cloud & Infrastructure',
      skills: ['AWS', 'Amazon S3', 'Azure', 'Azure Blob Storage', 'GCP', 'DigitalOcean', 'Linux', 'Nginx', 'Terraform']
    },
    {
      name: 'MLOps, CI/CD & Testing',
      skills: ['Docker', 'MLflow', 'Git', 'GitHub', 'Pytest', 'Postman']
    },
    {
      name: 'Web Development & APIs',
      skills: ['Django', 'Django REST Framework', 'Flask', 'FastAPI', 'REST APIs', 'HTMX', 'Node.js', 'HTML', 'CSS']
    },
    {
      name: 'Design & Productivity',
      skills: ['Figma', 'Canva', 'Microsoft Word']
    }
  ],
  certifications:[
    {
      name :  'Data Engineer Pathway Completer',
      date_acquired: 'November 29, 2023',
      issuer: 'Development Academy of the Philippines (Project SPARTA)',
      file: 'Data Engineer Pathway.jpg',
      skills : [
        'Public Policy and Governance',
        'Computing Microspecialization',
        'Data-Driven Research',
        'Enterprise Data Governance',
        'Data-Driven Policy Analysis',
        'Advanced Data Engineering',
        'SQL for Data Engineering',
        'Dashboards and Drill-Down Analytics',
        'Data Management Fundamentals',
      ]
    },
    {
      name :  'Data Engineer Associate',
      date_acquired: 'July 27, 2023',
      issuer: 'DataCamp',
      file: 'DEA0016805525402.jpg',
      external_link: 'https://www.datacamp.com/certificate/DEA0016805525402',
      skills : ['Data Engineering Fundamentals', 'Database Management','Data Management','Programming for Data Engineering']
    },
    {
      name :  'Data Engineering Zoomcamp',
      date_acquired: 'May 15, 2023',
      issuer: 'DataTalks.Club',
      file: 'DEZoomcamp.jpg',
      external_link: 'https://certificate.datatalks.club/dezoomcamp/2023/6ebba68872f2c7756d723394229b8ac07f3d49f7.pdf',
      skills : ['Prefect', 'dbt', 'Azure Cloud','Terraform','PowerBI','Databricks']
    },
    {
      name :  'Data Scientist Professional',
      date_acquired: 'August 26, 2022',
      issuer: 'DataCamp',
      file: 'DS0012206974560.jpg',
      external_link: 'https://www.datacamp.com/certificate/DS0012206974560',
      skills : ['Data Management', 'Model Development', 'Statistical Experimentation','Exploratory Analysis','Communication and Reporting']
    },
    {
      name :  'Data Analyst Professional',
      date_acquired: 'July 7, 2022',
      issuer: 'DataCamp',
      file: 'DA0011795037658.jpg',
      external_link: 'https://www.datacamp.com/certificate/DA0011795037658',
      skills : ['Analytic Fundamentals', 'Data Management', 'Visualization & Reporting','Exploratory Analysis']
    },
  ],
  socialMedia: [
    {
      name: 'Email',
      url: 'mailto:francis_mark_cayco@yahoo.com'
    },
    {
      name: 'Phone',
      url: 'tel:+639990368778',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/PeteCastle/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/francis-mark-cayco/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/francismarkk/?hl=en',
    },
    {
      name: 'CV',
      url: '/Francis Mark Cayco - Resume Latest.pdf',
    }
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Work',
      url: '/#work',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Skills',
      url: '/#skills',
    },
    {
      name: 'Certifications',
      url: '/#certifications',
    },
    
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
