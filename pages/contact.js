import Link from 'next/link';

export default function Contact() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Contact Us</h1>
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Your Name: <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Your Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </main>
      <footer>
        <p id="disclaimer">Disclaimers: DataMinded consulting does not provide services exclusively provided by CPAs or CFPs.</p>
      </footer>
    </div>
  );
}
