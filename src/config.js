module.exports = {
  email: 'francis_mark_cayco@yahoo.com',
  technical_profile: [
    {
      name: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'C++']
    },
    {
      name: 'Data Science Tools',
      skills: ['Pandas', 'Numpy', 'Matplotlib', 'PostgreSQL', 'Jupyter', 'SQL', 'Tableau','SHAP','LIME']
    },
    {
      name: 'Machine Learning & Optimization',
      skills: ['Scikit-Learn', 'Optuna', 'PyTorch', 'TensorFlow', 'NetworkX']
    },
    {
      name: 'Big Data and Cloud Computing',
      skills: ['Apache Spark', 'Linux', 'Prefect', 'AWS', 'Amazon S3', 'GCP','Airbyte']
    },
    {
      name: 'Machine Learning Operations',
      skills: ['Docker', 'Airflow', 'MLflow']
    },
    {
      name: 'CI/CD and Testing',
      skills: ['Git', 'Linux', 'Pytest']
    },
    {
      name: 'Web Development',
      skills: ['Flask', 'FastAPI', 'Nginx', 'Django', 'HTMX', 'Node', 'HTML', 'CSS']
    }
  ],
  certifications:[
    {
      name :  'Data Engineer Associate',
      date_acquired: 'July 27, 2023',
      issuer: 'DataCamp',
      file: 'DEA0016805525402.jpg',
      external_link: 'https://www.datacamp.com/certificate/DEA0016805525402',
      skills : ['Data Engineering Fundamentals', 'Database Management','Data Management','Programming for Data Engineering']

    },
    {
      name :  'Data Engineer Pathway Completer',
      date_acquired: 'December 6, 2023',
      issuer: 'Development Academy of the Philippines',
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
        'Data Management Fundamentals'
        ,
      ]

    },
    {
      name :  'Data Scientist Professional',
      date_acquired: 'August 27, 2022',
      issuer: 'DataCamp',
      file: 'DS0012206974560.jpg',
      external_link: 'https://www.datacamp.com/certificate/DS0012206974560',
      skills : ['Data Management', 'Model Development', 'Statistical Experimentation','Exploratory Analysis','Communication and Reporting']

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
      url: 'https://www.linkedin.com/in/francis-mark-cayco-33511a190/',
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
