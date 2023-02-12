import Header from './{components}/header';
import City from './{section}/city';
import Feedback from './{section}/feedback';
import Hero from './{section}/hero';
import Join from './{section}/join';
import LearnEarn from './{section}/learnEarn';
import Partner from './{section}/partner';

export default function Home() {
  return (
    <div>
      <div className='hero-gradient'>
        <Header />
        <Hero />
      </div>
      <LearnEarn />
      <Join />
      <Feedback />
      <Partner />
      <City />
    </div>
  );
}
