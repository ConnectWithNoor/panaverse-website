import Header from './{components}/header';
import Hero from './{section}/hero';
import LearnEarn from './{section}/learnEarn';

export default function Home() {
  return (
    <div>
      <div className='bg-gradient'>
        <Header />
        <Hero />
      </div>
      <LearnEarn />
    </div>
  );
}
