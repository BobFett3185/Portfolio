import './style.css';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import ProjectSection from './components/ProjectSection';
import ThoughtSection from './components/ThoughtSection';
import ContactSection from './components/ContactSection';
import Bookshelf from './components/Bookshelf';
import Book from './components/Book';   



// here are the variables we pass to our components as props

const introText = "Hello! My name is Keane and I am a Computer Science student at the University of Texas @ Dallas. Through my educational journey I have become deeply fascinated by AI/ML Engineering in FinTech. I hope this website can help you get to know me as a professional and as an individual.";

const projectList = [
  { id: 'p1', title: 'ComplyRag', description: 'RAG system for a compliance assistant, with automated regulation ingestion pipeline. Deployed using Docker and EC2', date: 'Jan 2026', githubLink: 'https://github.com/BobFett3185/ComplyRag' },
  { id: 'p2', title: 'SGA Coin', description: 'Built my own blockchain system. Included proof of work, wallet transactions, and smart contracts with persistent on-chain state.', date: 'Jul 2025', githubLink: 'https://github.com/BobFett3185/Blockchain1' },
  { id: 'p3', title: 'Astrovision', description: 'Developed CNN and Vision Transformer models to classify noisy galaxy telescope images with 93% accuracy', date: 'May 2025', githubLink: 'https://github.com/BobFett3185/AstroVision' }, 
    { id: 'p4', title: 'Cerebro @ HackAI', description: 'Mini-games with friends for interactive learning, personally tailored to your learning by an AI model', date: 'Mar 2026', githubLink: 'https://github.com/BobFett3185/Cerebro' }

];

const thoughtList = [
  { id: 't1', text: "There's no way around the hard work, so embrace it", author: 'Roger Federer' },
  { id: 't2', text: "If...If...If...doesn't exist", author: 'Rafael Nadal' },
  { id: 't3', text: 'The only person you should try to be better than, is the person you were yesterday', author: 'Novak Djokovic' },
  { id: 't4', text: 'I was trying to drink and the bottle slipped out of my hand', author: 'Nick Kyrgios' }
];

const contactInfo = {
    email: "keaneferdinand82@gmail.com",
    linkedIn: "https://www.linkedin.com/in/keane-ferdinand",
    github: "https://github.com/BobFett3185"
};

const books = [
  { title: "Crime and Punishment", description: "A psychological thriller exploring morality and redemption.", imageSrc: "/CAP.jpg" },
  { title: "For Whom the Bell Tolls", description: "A novel about the impact of war on individuals and society.", imageSrc: "/FWTBT.jpg" },
  { title: "1984", description: "A dystopian social science fiction novel.", imageSrc: "/1984.jpg" },
  { title: "Frankenstein", description: "A gothic science fiction novel about creation and responsibility.", imageSrc: "/frank.jpg" },
  { title: "Death of a Salesman", description: "A play about the American Dream and its consequences.", imageSrc: "/doas.jpg" }
];



function App() {
  return (
    <>
      <div className="dot-glow"></div>

      <HeroSection name="Keane Ferdinand" />

      <main className="app">
        <br></br><br></br><br></br><br></br><br></br>

        <IntroSection text= {introText}/>

        <br></br><br></br><br></br><br></br><br></br>
        
        <ProjectSection projects={projectList} />
        
        <br></br><br></br><br></br><br></br><br></br>

        <ThoughtSection thoughts={thoughtList} />

        <br></br><br></br><br></br>

        <Bookshelf books={books} />
        
        <br></br><br></br><br></br><br></br><br></br>

        <ContactSection contactInfo={contactInfo} />

      </main>
    </>
  );
}

export default App;
