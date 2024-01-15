module.exports = {
  email: 'francis_mark_cayco@yahoo.com',
  technical_profile: [
    {
      name :  '💻 Programming Languages',
      skills : ['Python', 'C++', 'JavaScript','Java']
    },
    {
      name : '📈 Data Science and Analytics',
      skills : ['Pandas', 'Numpy', 'Matplotlib', 'Scikit-Learn', 'PostgreSQL', 'Jupyter'] // , 'Pytorch'
    },
    {
      name : '📐 Data Engineering',
      skills : ['Linux','Prefect', 'Git']
    },
    {
      name : '💻 Web Development',
      skills : ['Django', 'HTMX', 'Node', 'HTML', 'CSS']
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
      name: 'GitHub',
      url: 'https://github.com/PeteCastle/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/francis-mark-cayco-33511a190/',
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UCqktL_sOtbr6cNX2me4us5A',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/francismarkk/?hl=en',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/petecastle_pro',
    },
    
    
 
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Skills',
      url: '/#skills',
    },
    {
      name: 'Work',
      url: '/#work',
    },
    {
      name: 'Certifications',
      url: '/#certifications',
    },
    {
      name: 'Projects',
      url: '/#projects',
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
