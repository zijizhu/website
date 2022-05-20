const navLinks: { num: number; name: string; link: string }[] = [
  { num: 1, name: 'Home', link: '#home' },
  { num: 2, name: 'Projects', link: '#projects' },
  { num: 3, name: 'About Me', link: '#about' }
];

function Navbar() {
  return (
    <div className="fixed top0 z-20 w-full p-4 flex justify-between">
      <div />
      <div>
        {navLinks.map((item) => (
          <a
            key={item.num}
            href={item.link}
            className="mx-4 my-1 p-2 font-semibold hover:text-primary text-lg transition duration-500"
          >
            <span className="mr-2 text-primary">{item.num}</span>
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
