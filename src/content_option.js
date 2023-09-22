const logotext = "Kibrewossen Y";
const meta = {
    title: "Kibrewossen Y",
    description: "I’m Kibrewossen Y data scientist _ Full stack devloper,currently working in Berlin",
};


const introdata = {
    title: "I’m Kibrewossen Y",
    animated: {
        first: "I'm a Full Stack Developer",
        second: "I'm Proficient in Ruby on Rails, React, and JavaScript",
        third: "I'm here to transform your vision into a remarkable product",
    },
    description: "I can help you build a product, feature or website Look through some of my work and experience!  Let's collaborate to build something exceptional together.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "A bit about my self",
    aboutme: "Hello, I'm Kibrewossen Y, an experienced Full Stack Developer with a strong track record of creating powerful web applications over the past five years.",
};
const worktimeline = [{
        jobtitle: "Co-Founder & Full Stack Developer",
        where: "Safari ICT Solutions PLC, Hybrid",
        date: "2017 - Present",
    },
    {
        jobtitle: "Mentor (Volunteer)",
        where: "Microverse Inc, Remote",
        date: "2023 - Present",
    },
    {
        jobtitle: "Business Analyst",
        where: "Grail Consulting LLC, Addis Ababa, Ethiopia",
        date: "2020 – 2021",
    },
];

const skills = [{
        name: "JavaScript",
        value: 90,
    },
    {
        name: "React",
        value: 85,
    },
    {
        name: "Redux",
        value: 80,
    },
    {
        name: "HTML5",
        value: 90,
    },
    {
        name: "CSS3",
        value: 85,
    },
];

const services = [
    {
        title: "Frontend Development",
        description:[
            {name: "React", value: 85},  
            {name: "Redux", value: 85},  
            {name: "JavaScript", value: 80},
            {name: "HTML5", value: 90},
            {name: "CSS3", value: 90},
            {name: "Bootstrap", value: 85},
            {name: "Material UI", value: 80},
        ],
    },
    {
        title: "Backend Development",
        description: [
            {name: "Ruby on Rails", value: 85},
            {name: "Laravel", value: 80},
            {name: "MySQL", value: 80},
            {name: "PostgreSQL", value: 90},

        ],
    },
    {
        title: "Tools & Methods",
        description: [
            {name: "Git", value: 90},
            {name: "Scrum", value: 85},
            {name: "Jira", value: 80},
            {name: "Trello", value: 90},
            {name: "Slack", value: 85},
            {name: "GitHub", value: 80},
            {name: "Heroku", value: 90},
        ]
    },
    {
        title: "Professional",
        description: [
            {name: "Remote Pair-Programming", value: 90},
            {name: "Teamwork", value: 85},
            {name: "Problem Solving", value: 80},
            {name: "Critical Thinking", value: 90},
            {name: "Teamwork", value: 85},
        ],
    },
];

const dataportfolio = [
    {
        img: "0",
        description: "A web application that helps organizations to assess their performance and identify their strengths and weaknesses. The application is developed in collaboration with Plan International Ethiopia, this tool aids in evaluating and improving organizational capacities in various critical areas. It facilitates benchmarking and supports capacity-building efforts among Civil Society Organizations (CSOs) and their partners. The application is built with PHP, Laravel, and React.",
        link: "http://safari-ict-demo.com/",
        github: "https://github.com/safari-ict/",
        title: "Organizational Self Assessment Tool",
        tech: [
            { name: "PHP", value: 85 },
            { name: "Laravel", value: 85 },
            { name: "MySQL", value: 80 },
            { name: "React", value: 80 },
            { name: "JavaScript", value: 90 },
            { name: "HTML5", value: 90 },
            { name: "CSS3", value: 85 },
        ],
    },
   
    {
        img: "1",
        description: "Yacht Reservation App: Collaboratively developed using React, Redux, Ruby on Rails, and PostgreSQL, this dynamic application offers a seamless platform for reserving luxury yachts. With an intuitive user interface and robust back-end architecture, users can effortlessly browse yacht options, select preferred dates, and secure bookings. This project demonstrates our team's proficiency in front-end and back-end technologies, delivering a user-friendly experience for maritime enthusiasts.",
        link: "https://yacht-booking-app.onrender.com/",
        github: "https://github.com/akos29/book_appointment_front",
        title: "YoYacht Booking App",
        tech: [
           { name: "React", value: 85 },
            { name: "Redux", value: 85 },
            { name: "Ruby on Rails", value: 80 },
            { name: "PostgreSQL", value: 90 },
            { name: "JavaScript", value: 90 },
    
        ],
    },
   
    {
        img: "3",
        description: "A web application designed to create a bookstore that allows users to manage books and track their progress. The application is built with React and Redux.",
        link: "https://flop-bookstore.netlify.app/",
        github: "",
        title: "Bookstore CMS",
        tech: [
            { name: "React", value: 85 },
            { name: "Redux", value: 85 },
            { name: "JavaScript", value: 80 },
            { name: "HTML5", value: 90 },
            { name: "CSS3", value: 90 },
            { name: "Bootstrap", value: 85 },
            
        ],
    },
   
    {
        img: "2",
        description: "Movie Stat Tracker: Designed for seamless access on both desktop and mobile devices, this application empowers users with quick access to movie statistics, including critic reviews, user ratings, and box office earnings. Leveraging the IMDb API, this React and Redux-based application offers an intuitive interface for exploring and comparing film data. Discover insights into your favorite movies with ease, showcasing our team's expertise in front-end development, API integration, and mobile responsiveness.",
        link: "https://flipmovies.netlify.app/",
        github: "https://github.com/akos29/movieHub",
        title: "Flip Movie Stat Tracker",
        tech: [
            { name: "React", value: 85 },
            { name: "Redux", value: 85 },
            { name: "JavaScript", value: 80 },
            { name: "HTML5", value: 90 },
            { name: "CSS3", value: 90 },
        ],
    },
   
   
   
];

const contactConfig = {
    MY_EMAIL: "kibrish49@gmail.com",
    MY_PHONE: "+268 76 312468",
    description: "Have a project in mind or just want to chat? I'm all ears! Whether you have questions, ideas, or collaboration in mind, I'm here to listen and respond.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_effg9my",
    YOUR_TEMPLATE_ID: "template_om9yw5n",
    YOUR_USER_ID: "hGopzezbK1HCDoKvM",
    MY_PUBLIC_KEY: "hGopzezbK1HCDoKvM"
};

const socialprofils = {
    github: "https://github.com/akos29",
    angel: "https://angel.co/u/kibrewossen-y-mekasha",
    linkedin: "http://www.linkedin.com/in/kibrewossen-y-mekasha",
    twitter: "https://twitter.com/Kbson49",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};