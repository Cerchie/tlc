import Link from 'next/link';

export default function Services() {
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
        <h1>Our Services</h1>
        <ul>
          <li>Data Visualization</li>
          <li>Process Streamlining</li>
          <li>Consultation</li>
        </ul>
      </main>
      <footer>
        <p>Disclaimers: DataMind consulting does not provide services exclusively provided by CPAs or CFPs.</p>
      </footer>
    </div>
  );
}
