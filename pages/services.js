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
            <li><Link href="https://docs.google.com/forms/d/e/1FAIpQLSfex5d6buKZulakrUFSUvXL1Mym1TmOJ_mths5KsMgHpJq0-A/viewform">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1 id="services-h1">Our Services</h1>
        <img id="arrow-img" src="/arrow.png" alt="just an image" />
        <ul>
          <li>Data Visualization
            <ul>
                <li>Get a 360 view of the state of your business.</li>
            </ul>
          </li>
          <li>Process Streamlining
            <ul>
                <li>Optimize your workflow and eliminate time wasted.</li>
            </ul>
          </li>
          <li>Excel Training
            <ul>
                <li>You and your team can learn to use Excel like a pro.</li>
            </ul>
          </li>
        </ul>
      </main>
      <footer>
        <p id="disclaimer">Disclaimers: DataMinded consulting does not provide services exclusively provided by CPAs or CFPs.</p>
      </footer>
    </div>
  );
}
