import type { Blog } from "@/types";

export const blogList: Blog[] = [
  {
    slug: "what-is-javascript",
    title: "What Is JavaScript? ",
    description: [
      "JavaScript is a versatile programming language that plays a crucial role in web development, providing dynamic and interactive features to enhance user experience. Let's delve into the definition, functions, and evolution of JavaScript.",
      "JavaScript is a high-level, interpreted programming language primarily used for client-side scripting in web browsers. It allows developers to create dynamic content, manipulate the Document Object Model (DOM), and respond to user interactions. JavaScript is an essential component of modern web development, contributing to the creation of interactive and engaging web pages.",
      "JavaScript has undergone significant evolution since its inception. The introduction of ECMAScript, the standard upon which JavaScript is based, has seen regular updates to enhance the language's capabilities. Key advancements include ES6 (ECMAScript 2015) and subsequent versions, bringing features like arrow functions, template literals, and destructuring assignments.",
      "Frameworks and libraries such as Angular, React, and Vue.js have further propelled JavaScript's evolution, simplifying the development of complex web applications. Node.js, a runtime built on the V8 JavaScript engine, enables server-side JavaScript, expanding its domain beyond the browser.",
      'The rise of JavaScript in the context of server-side development, known as "Full Stack JavaScript," showcases its versatility. JavaScript continues to be a driving force in web development, adapting to industry needs and contributing to the creation of sophisticated, interactive, and efficient web applications.',
    ],
    thumbnailImage: "/assets/images/article-01.webp",
    categories: [
      {
        name: "JavaScript",
        color: "yellow.300",
      },
      {
        name: "Website",
        color: "gray.400",
      },
    ],
    uploadedAt: new Date("2023-12-07"),
    author: {
      name: "index.js",
      profileImage: "/assets/svg/javascript.svg",
    },
  },
  {
    slug: "what-is-css",
    title: "What Is CSS?",
    description: [
      "CSS, or Cascading Style Sheets, is a style language used to control the presentation and layout of HTML elements on a web page. In the world of web development, CSS collaborates with HTML and JavaScript to create visually appealing and responsive designs.",
      "CSS provides a way to alter the appearance of HTML elements. By using style rules, CSS allows web developers to customize features such as color, text size, spacing between elements, and more. It separates presentation from the HTML structure, enabling changes in appearance without modifying the fundamental page structure.",
      "As the web evolves, CSS undergoes continuous development. CSS3, the latest version at the time of writing, introduces various new features such as flexbox, grid layout, and transition effects. These additions offer developers more tools to create complex layouts and creative designs.",
      "Moreover, CSS continues to adapt to the needs of more responsive displays, especially with the increasing popularity of mobile devices. The development of CSS frameworks, such as Bootstrap and Tailwind CSS, has also facilitated web development by providing ready-to-use frameworks for building responsive layouts and designs.",
      "With CSS, web developers have the ability to enhance user experience through attractive designs and flexible layouts across various device platforms.",
    ],
    thumbnailImage: "/assets/images/article-02.webp",
    categories: [
      {
        name: "CSS",
        color: "blue.500",
      },
      {
        name: "Website",
        color: "gray.400",
      },
    ],
    uploadedAt: new Date("2023-12-06"),
    author: {
      name: "index.js",
      profileImage: "/assets/svg/javascript.svg",
    },
  },
  {
    slug: "what-is-html",
    title: "What Is HTML?",
    description: [
      "HTML, short for Hypertext Markup Language, is a markup language used to build and design the basic structure of a web page. In the world of web development, HTML serves as the foundation for most of the content we see and interact with in browsers.",
      "HTML is a collection of tags or elements that provide instructions to the browser on how a web page should be displayed. Each tag has a specific function and meaning. For example, the <head> tag contains information about the document, while the <p> tag is used to mark paragraphs.",
      "HTML continues to evolve to accommodate the needs of increasingly complex web environments. The latest version, HTML5, introduces many new features including semantic elements like <article>, <section>, and <nav>, as well as support for multimedia without the need for additional plugins.",
      "HTML is also increasingly focused on responsive capabilities, allowing web pages to adapt their display across various devices, from computers to mobile devices.",
      "It's important to note that HTML works in conjunction with CSS (Cascading Style Sheets) and JavaScript to create dynamic and engaging web experiences. As web technology advances, HTML remains a key element in the construction of accessible and dynamic pages across the internet.",
    ],
    thumbnailImage: "/assets/images/article-03.webp",
    categories: [
      {
        name: "HTML",
        color: "orange.500",
      },
      {
        name: "Website",
        color: "gray.400",
      },
    ],
    uploadedAt: new Date("2023-12-05"),
    author: {
      name: "index.js",
      profileImage: "/assets/svg/javascript.svg",
    },
  },
  {
    slug: "introduction-to-penetration-testing",
    title: "Introduction to Penetration Testing",
    description: [
      "Penetration testing, often called pentesting or ethical hacking, is a simulated cyberattack against a computer system, network, or web application to identify security vulnerabilities that an attacker could exploit. It is a critical component of any organization's cybersecurity strategy.",
      "The penetration testing process typically follows a structured methodology: reconnaissance, scanning, gaining access, maintaining access, and reporting. During reconnaissance, the tester gathers information about the target system. Scanning involves using tools like Nmap and Nessus to identify open ports, services, and potential vulnerabilities.",
      "There are several types of penetration testing: black-box testing (no prior knowledge of the system), white-box testing (full knowledge of the system), and gray-box testing (partial knowledge). Each approach has its advantages and is suited for different scenarios depending on the security assessment goals.",
      "Common tools used in penetration testing include Kali Linux as the operating system, Metasploit for exploitation, Burp Suite for web application testing, Wireshark for network analysis, and OWASP ZAP for automated vulnerability scanning. These tools help security professionals identify and document vulnerabilities effectively.",
      "Penetration testing is not just about finding vulnerabilities — it's about understanding the real-world impact of those vulnerabilities. A comprehensive pentest report should include detailed findings, risk ratings, and actionable remediation recommendations to help organizations strengthen their security posture.",
    ],
    thumbnailImage: "/assets/images/article-04.png",
    categories: [
      {
        name: "Cyber Security",
        color: "red.500",
      },
      {
        name: "Pentesting",
        color: "green.500",
      },
    ],
    uploadedAt: new Date("2024-06-15"),
    author: {
      name: "security.sh",
      profileImage: "/assets/svg/kali linux.svg",
    },
  },
  {
    slug: "network-security-and-firewalls",
    title: "Network Security & Firewalls: A Complete Guide",
    description: [
      "Network security is the practice of protecting computer networks from unauthorized access, misuse, or theft. It encompasses a wide range of technologies, devices, and processes designed to safeguard the integrity, confidentiality, and availability of data transmitted across networks.",
      "Firewalls serve as the first line of defense in network security. They monitor and control incoming and outgoing network traffic based on predetermined security rules. Modern firewalls include Next-Generation Firewalls (NGFW) that incorporate deep packet inspection, intrusion prevention systems (IPS), and application-level filtering.",
      "Network security professionals use various tools to monitor and protect networks. Wireshark is essential for packet analysis, allowing security teams to inspect network traffic at a granular level. IDS/IPS systems like Snort and Suricata detect and prevent malicious activities in real-time.",
      "Common network attacks include Man-in-the-Middle (MitM) attacks, Distributed Denial of Service (DDoS), ARP spoofing, and DNS poisoning. Understanding these attack vectors is crucial for implementing effective defense strategies, including network segmentation, encryption, and access control lists (ACLs).",
      "Building a robust network security architecture requires a defense-in-depth approach — layering multiple security controls throughout the network. This includes implementing VPNs for secure remote access, using network monitoring tools, regular vulnerability assessments, and maintaining up-to-date security patches across all network devices.",
    ],
    thumbnailImage: "/assets/images/article-05.png",
    categories: [
      {
        name: "Cyber Security",
        color: "red.500",
      },
      {
        name: "Networking",
        color: "purple.500",
      },
    ],
    uploadedAt: new Date("2024-06-10"),
    author: {
      name: "security.sh",
      profileImage: "/assets/svg/kali linux.svg",
    },
  },
  {
    slug: "owasp-top-10-web-vulnerabilities",
    title: "OWASP Top 10: Web Application Vulnerabilities",
    description: [
      "The OWASP Top 10 is a standard awareness document for web application security. It represents a broad consensus about the most critical security risks to web applications. Understanding these vulnerabilities is essential for every developer and security professional.",
      "SQL Injection (SQLi) remains one of the most dangerous web vulnerabilities. Attackers inject malicious SQL code into application queries to manipulate databases, steal data, or gain unauthorized access. Prevention involves using parameterized queries, prepared statements, and input validation.",
      "Cross-Site Scripting (XSS) allows attackers to inject malicious scripts into web pages viewed by other users. There are three types: Stored XSS, Reflected XSS, and DOM-based XSS. Mitigation strategies include output encoding, Content Security Policy (CSP) headers, and proper input sanitization.",
      "Broken Authentication and Security Misconfiguration are common vulnerabilities that arise from weak password policies, exposed default credentials, and improperly configured security headers. Implementing multi-factor authentication (MFA), secure session management, and regular security audits are essential preventive measures.",
      "Tools like Burp Suite and OWASP ZAP are invaluable for testing web applications against these vulnerabilities. Regular security assessments, code reviews, and adopting secure coding practices like input validation, output encoding, and the principle of least privilege are fundamental to building secure web applications.",
    ],
    thumbnailImage: "/assets/images/article-06.png",
    categories: [
      {
        name: "Cyber Security",
        color: "red.500",
      },
      {
        name: "OWASP",
        color: "orange.500",
      },
    ],
    uploadedAt: new Date("2024-06-05"),
    author: {
      name: "security.sh",
      profileImage: "/assets/svg/kali linux.svg",
    },
  },
];
