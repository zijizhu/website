import HomeButton from '../components/HomeButton';
import BoxIcon from '../components/icons/BoxIcon';
import PersonIcon from '../components/icons/PersonIcon';

function HomeView() {
  return (
    <section className="p-4 h-200 flex flex-col items-center justify-center bg-baseBg view-polygon">
      <div className="flex max-w-3xl flex-col">
        <h3 className="text-2xl font-semibold text-primary animate-fade-in-100ms">
          Hi, I am
        </h3>
        <h1 className="mt-4 text-7xl lg:text-7.5xl font-bold select-none animate-fade-in-150ms">
          Zh<span className="special-text">iji</span>e Zhu.
        </h1>
        <h2 className="mt-4 mb-8 text-4xl lg:text-5xl font-bold text-primary animate-fade-in-200ms">
          I work with web and data science.
        </h2>
        <p className="text-xl animate-fade-in-200ms">
          I am currently studying Master of IT at UNSW. I am also one of the
          CSESoc Projects Team. You know what I&apos;m most proud of? I&apos;m
          1/3 of logicpop.
        </p>
        <div className="flex py-8 flex-col lg:flex-row animate-slide-in-200ms">
          <HomeButton
            Icon={BoxIcon}
            text="Projects"
            label="some things I've built"
          />
          <HomeButton
            Icon={PersonIcon}
            text="Learn more about me"
            label="Experiences & Education"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeView;
