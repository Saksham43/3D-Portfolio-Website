import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    clogo,
    html,
    css,
    reactjs,
    tailwind,
    madhurima,
    nodejs,
    mongodb,
    git,
    amazon,
    portfolio,
    band,
    monkhood,
    enactus,
    threejs,
    spotify,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "About",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      link: "https://youtube.com",
      title: "Resume",
    }
  ];
  
  export const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "C++ Developer",
      icon: backend,
    },
    {
      title: "Founder",
      icon: creator,
    },
  ];
  
  export const technologies = [
    {
      name: "C++",
      icon: clogo,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    }
  ];
  
  export const experiences = [
    {
      title: "Tech Head and Co-founder",
      company_name: "Business Bulls DTU",
      icon: monkhood,
      iconBg: "#383E56",
      date: "November 2022 - Present",
      points: [
        "Co-founded a business club in my university, currently positioning as the Tech Head and the Vice President.",
        "Developing and maintaining web applications using React.js and other related technologies",
        "Leading and mentoring junior developers, in creating startups and projects",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Operations Intern",
      company_name: "Monkhood Living Solutions",
      icon: monkhood,
      iconBg: "#E6DEDD",
      date: "March 2022 - May 2022",
      points: [
        "Worked as Marketing Head in a startup that provides rental flats to students without brokerage fees.",
        "Designing business strategies to expand, conducting hiring interviews, bringing in more clientele.",
        "Managing junior interns and bringing in sponsorship deals.",
      ],
    },
    {
      title: "Member",
      company_name: "Enactus DTU",
      icon: enactus,
      iconBg: "#383E56",
      date: "Feb 2022 - Present",
      points: [
        "Worked in Research, Design, Marketing and Sales tangents for Project Aarosh",
        "Project Aarosh - Made products from plastic waste and sold/rented them.",
      ],
    },
  ];
  
  export const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  export const projects = [
    {
      name: "File Zipper using Huffman Algorithm",
      description:
        "An application based on Huffman encoding and decoding that allows users to compress files and extract data from a compressed file.",
      tags: [
        {
          name: "c++",
          color: "blue-text-gradient",
        },
        {
          name: "data structures and algorithms",
          color: "green-text-gradient",
        },
      ],
      image: amazon,
      source_code_link: "https://github.com/",
    },
    {
      name: "3D Portfolio Website",
      description:
        "My portfolio wesbite with highly interactive 3d models and all my projects and achievements that also allows the user to get in touch with me through email",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "framer-motion",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/",
    },
    {
      name: "Amazon Clone Website",
      description:
        "A frontend clone of amazon.com website using CSS3 and HTML5",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
      image: amazon,
      source_code_link: "https://github.com/",
    },
  ];

  export const music = [
    {
      name: "Spotify Artist",
      description:
        "I've been writing songs since I was 17 and have over 6000 monthly listeners currently.",
      tags: [
        {
          name: "c++",
          color: "blue-text-gradient",
        },
        {
          name: "data structures and algorithms",
          color: "green-text-gradient",
        },
      ],
      image: spotify,
      source_code_link: "https://open.spotify.com/artist/12P49nEzmoKmsmYuI8edpW?si=4j3RSR4DTAeqaUDgT4ncug",
    },
    {
      name: "Lead Vocalist in a Band",
      description:
        "My college band - 'Dhoomketu' has performed at THE PIANO MAN GURUGRAM, won the 1st prize in NIFT Delhi Battle of Bands and 2nd prize in BVP Battle of Bands Competition.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "framer-motion",
          color: "pink-text-gradient",
        },
      ],
      image: band,
      source_code_link: "https://www.instagram.com/dhoomketu_official/",
    },
    {
      name: "Madhurima DTU",
      description:
        "Member of the prestigious music society of Delhi Technological University - Madhurima",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
      image: madhurima,
      source_code_link: "https://www.instagram.com/madhurima.dtu/",
    },
  ];
  
  export default { services, technologies, experiences, testimonials, projects, music };