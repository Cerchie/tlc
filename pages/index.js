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
        <h1>DataMinded Strategies</h1>
        <p>Does your business need a little TLC? Treat it to some Tailored Local Consulting! DataMinded serves businesses in the greater Flagstaff area. <Link href="/contact">Contact Taylor Lee Cerchie</Link> today for a free consultation.</p>
        <img src="/logo.png" alt="just an image" />
      </main>
      <footer>
        <p id="disclaimer">Disclaimers: DataMinded consulting does not provide services exclusively provided by CPAs or CFPs.</p>
      </footer>
    </div>
  );
}
