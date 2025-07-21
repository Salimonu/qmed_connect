import VTU_illustration from "../assets/img/VTU_illustration.png";

function Hero() {
  return (
    <div>
      <section className="h-{80vh} grid items-center gap-12 bg-blue-100 p-8 md:grid-cols-2">
        <div>
          <div className="w-{40%} my-8">
            <p className="inline-block rounded-md bg-blue-400 px-2.5 py-1 text-xl font-semibold text-white">
              Fast, secure & Reliable Virtual Top-Up Services
            </p>
            <h1
              data-aos="fade-right"
              className="text-6xl font-bold text-blue-900"
            >
              Recharge Airtime, Data & Pay Bills Instantly!
            </h1>
            <p className="my-3 text-xl">
              QMED Connect makes it easy to recharge airtime, data, and utility
              bills instantly—anytime, anywhere. Experience seamless
              transactions with just a few taps!
            </p>
          </div>
          <a
            className="pulsate mx-1 my-3 inline-block rounded-md bg-blue-500 px-3 py-2 text-xl font-semibold text-white hover:bg-blue-700"
            href="#"
          >
            Get Started Now
          </a>
          <a
            className="mx-1 my-3 rounded-md bg-blue-500 px-3 py-2 text-xl font-semibold text-white hover:bg-blue-600"
            href="#"
          >
            Login
          </a>
        </div>
        <div>
          <img
            style={{ width: "100%", maxWidth: "600px", justifySelf: "center" }}
            src={VTU_illustration}
            alt="VTU_illustration"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
