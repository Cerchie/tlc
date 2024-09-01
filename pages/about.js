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
        <h1>About Taylor Cerchie</h1>
        <p class="about-para">Taylor Cerchie is exceptionally qualified to provide data-minded business consulting, drawing from a robust foundation of five years of experience as a finance analyst and a strong academic background with a master's degree in mechanical engineering from Arizona State University. </p>
        <p class="about-para"> His analytical skills are further enhanced by his Excel wizardry, enabling him to efficiently manage, interpret, and visualize complex data sets.</p>
        <p class="about-para"> Taylor’s unique combination of engineering problem-solving skills and financial expertise allows him to approach business challenges with a methodical, data-driven mindset, ensuring that his consulting advice is both strategically sound and practically implementable.</p>
      </main>
      <footer>
        <p id="disclaimer-about">Disclaimers: DataMinded consulting does not provide services exclusively provided by CPAs or CFPs.</p>
      </footer>
    </div>
  );
}
