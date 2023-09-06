const { Post } = require('../models');

const postData = [
    {
        title: "Artificial Intelligence in Healthcare: Transforming Patient Care",
        content: `In recent years, artificial intelligence (AI) has emerged as a powerful tool in the healthcare sector. Explore how AI is revolutionizing patient care, from early disease detection to treatment optimization. Learn about real-world applications and the potential to save lives.`,
        user_id: 2
    },
    {
        title: "The Rise of Quantum Computing: Unleashing Unprecedented Power",
        content: `Quantum computing is no longer science fiction; it's becoming a reality. Dive into the fascinating world of quantum mechanics and discover how quantum computers work. Explore their potential to solve complex problems in areas like cryptography and drug discovery.`,
        user_id: 3
    },
    {
        title: "Cybersecurity in the Digital Age: Protecting Against Evolving Threats",
        content: `As our digital world expands, so do cyber threats. Stay informed about the latest cybersecurity trends and strategies to safeguard your online presence. Learn how to defend against evolving threats, from ransomware to data breaches.`,
        user_id: 4
    },
    {
        title: "Blockchain Revolution: Beyond Cryptocurrency",
        content: `Blockchain technology extends far beyond cryptocurrencies. Explore the diverse applications of blockchain in supply chain management, voting systems, and decentralized finance (DeFi). Understand how this distributed ledger is transforming industries beyond digital currencies.`,
        user_id: 5
    },
    {
        title: "The Future of Space Exploration: Tech Innovations and Beyond",
        content: `Humans have always been explorers, and the cosmos is our next frontier. Join us on a journey to explore the latest technological advancements in space exploration. From SpaceX's Mars missions to asteroid mining, the future of space is full of exciting possibilities.`,
        user_id: 6
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;