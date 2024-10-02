import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white font-bold text-2xl">Landing Page</h1>
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="text-white hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-white hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Banner Section */}
      <section id="home" className="bg-cover bg-center h-96 flex items-center justify-center text-center bg-gray-800 text-white" style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900')" }}>
        <div>
          <h2 className="text-4xl font-bold">Welcome to Our Landing Page</h2>
          <p className="mt-4">We provide the best services for you</p>
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Get Started</button>
        </div>
      </section>

      {/* Body Section */}
      <section id="about" className="container mx-auto p-6">
        <div className="text-center">
          <h3 className="text-3xl font-bold">About Us</h3>
          <p className="mt-4 text-gray-600">
            We are a team of passionate individuals working to provide the best solutions for our customers. Our mission is to deliver high-quality services that meet your needs and exceed your expectations.
          </p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="bg-gray-100 p-6">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold">Contact Us</h3>
          <form className="mt-4">
            <input type="text" className="border p-2 w-full mb-4" placeholder="Your Name" />
            <input type="email" className="border p-2 w-full mb-4" placeholder="Your Email" />
            <textarea className="border p-2 w-full mb-4" placeholder="Your Message" rows="4"></textarea>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center p-4">
        <p>&copy; 2024 Landing Page. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

