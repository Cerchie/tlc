import Link from 'next/link';

export default function About() {
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
        <h1>About Us</h1>
        <p>We specialize in creating data visualizations and streamlining business processes to enhance efficiency and clarity.</p>
      </main>
      <footer>
        <p>Disclaimers: All information provided is for informational purposes only.</p>
      </footer>
    </div>
  );
}
