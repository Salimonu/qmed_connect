export default function Footer() {
  return (
    <>
      <div>
        <div className="form-container footer-container">
          <div className="container">
            <form action="" className="form">
              <p className="mb-3 text-xl font-bold text-blue-600">
                Subscribe for our newsletter
              </p>
              <label for="email">Enter your email:</label>
              <input
                type="email"
                id="email"
                className="shadow-md outline-none"
                placeholder="example@gmail.com"
              />
              <button className="shadow-md">SUBSCRIBE</button>
            </form>
          </div>
        </div>
        <div className="footer-container grid md:grid-cols-2">
          <div className="flex flex-col justify-between">
            <p>social media icons</p>
            <p>copyright</p>
          </div>
          <nav>
            <ul>
              <li>nav</li>
              <li>nav</li>
              <li>nav</li>
              <li>nav</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
