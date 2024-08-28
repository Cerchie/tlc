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
        <h1>Welcome to business_name</h1>
        <p>Your partner in data visualizations and process streamlining.</p>
        <img src="/happy-picture.jpg" alt="Happy Business" />
      </main>
      <footer>
        <p>Disclaimers: All information provided is for informational purposes only.</p>
      </footer>
    </div>
  );
}
