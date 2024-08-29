import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact Form</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>DataMind Strategies</h1>
        <p>Does your business need a little TLC? Treat it to some Tailored Local Consulting! DataMind serves businesses in the greater Flagstaff area. Contact Taylor Lee Cerchie today for a free consultation.</p>
        <img src="/logo.png" alt="just an image" />
      </main>
      <footer>
        <p>Disclaimers: DataMind consulting does not provide services exclusively provided by CPAs or CFPs.</p>
      </footer>
    </div>
  );
}
