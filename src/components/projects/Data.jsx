import Project1 from "../../assets/monitor_nft_project.PNG";
import Project3 from "../../assets/erc6551_project.PNG";
import Project2 from "../../assets/profit_project.png";
import Project7 from "../../assets/pandagifsmall.gif";
import Project5 from "../../assets/ai_gif.gif";

export const projectsData = [
    {
        id: 7,
        image: Project7,
        title: "Panda Robotics Ltd",
        categories: ["Web Automation", "Frontend"], // Updated to support multiple categories
        description: "A Desktop python application automating the process of obtaining limited edition products.",
    },
    {
        id: 5,
        image: Project5,
        title: "Automating AI Content Creation",
        categories: ["Web Automation"],
        description: "This project focuses on automating the creation of AI-generated content for shorts platforms. It includes using AI video generation, AI voice overs and automatically adding subtitles to content.",
    },
    {
        id: 1,
        image: Project1,
        title: "NFT Marketplace Monitor",
        categories: ["Blockchain"],
        description: "The NFT Marketplace Monitor provided real-time tracking of NFT prices posting deals to users of assets that were underpriced.",
    },
    {
        id: 2,
        image: Project2,
        title: "Ethereum NFT Profit Calculations",
        categories: ["Blockchain"],
        description: "This tool calculates potential profits from Ethereum NFT investments by collecting a users on chain transactions and calcualting profits taking account of gas fees and sale taxes.",
    },
    {
        id: 3,
        image: Project3,
        title: "Exploration of the ERC-6551 Standard",
        categories: ["Blockchain"],
        description: "We create a decentralised platform where cars are tokenised on the blockchain. This tokenisation not only facilitates the secure and transparent transfer of ownership but also allows for modular additions to the system for various car-related attributes and certifications such as MOT certificates and parking fines into one unified system.  Our approach ensures that all relevant data about a vehicle, from MOT history to Manufacturer, is immutable and easily accessible, reducing the potential for fraud and errors in record-keeping. The results of this work demonstrate that the ERC-6551 standard not only offers a viable alternative to traditional methods of asset management but also enhances the functionality, paving the way for a decentralised future.",
    },
];

export const projectsNav = [
    {
        name: "All",
    },
    {
        name: "Frontend",
    },
    {
        name: "Blockchain",
    },
    {
        name: "Web Automation",
    },
];
