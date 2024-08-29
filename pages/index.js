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
        <p>Your partner in data visualizations and business process streamlining.</p>
        <img src="/vercel.svg" alt="Happy Business" />
      </main>
      <footer>
        <p>Disclaimers: DataMind consulting does not provide services exclusively provided by CPAs or CFPs.</p>
      </footer>
    </div>
  );
}
