import {
  Phone,
  Wifi,
  Zap,
  Tv,
  KeyRound,
  MessageSquareText,
} from "lucide-react";

import Card from "./Card";

export default function Services() {
  return (
    <>
      {" "}
      <div className="bg-blue-50 px-10 py-4">
        <h2 className="mt-6 mb-4 text-center text-3xl font-bold text-blue-900">
          Our Services
        </h2>
        <div className="mb-6 grid gap-5 lg:grid-cols-3">
          <div
            data-aos="fade-up"
            className="mx-10 cursor-pointer overflow-hidden rounded-xl bg-blue-200 p-5 text-center shadow-md shadow-blue-300"
          >
            <div className="up">
              <Card
                icon={<Phone size={32} color="#007bff" />}
                heading="Airtime Top-Up"
                description="Top up airtime for any network."
                children={<button>RECHARGE</button>}
              />
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="mx-10 cursor-pointer overflow-hidden rounded-xl bg-blue-200 p-5 text-center shadow-md shadow-blue-300"
          >
            <div className="up">
              <Card
                icon={<Wifi size={32} color="#007bff" />}
                heading="Data Bundles"
                description="Get data bundles instantly"
                children={<button>BUY DATA</button>}
              />
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="mx-10 cursor-pointer overflow-hidden rounded-xl bg-blue-200 p-5 text-center shadow-md shadow-blue-300"
          >
            <div className="up">
              <Card
                icon={<Zap size={32} color="#007bff" />}
                heading="Electricity Bills"
                description="Pay your utility bills fast"
                children={<button>PAY NOW</button>}
              />
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="mx-10 cursor-pointer overflow-hidden rounded-xl bg-blue-200 p-5 text-center shadow-md shadow-blue-300"
          >
            <div className="up">
              <Card
                icon={<Tv size={32} color="#007bff" />}
                heading="Cable Subscriptions"
                description="Do your cable subscriptions fast. No delay."
                children={<button>SUBSCRIBE</button>}
              />
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="mx-10 cursor-pointer overflow-hidden rounded-xl bg-blue-200 p-5 text-center shadow-md shadow-blue-300"
          >
            <div className="up">
              <Card
                icon={<KeyRound size={32} color="#007bff" />}
                heading="Exam Pins"
                description="Buy scratch card pins for WAEC, NECO etc."
                children={<button>BUY PINS</button>}
              />
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="mx-10 cursor-pointer overflow-hidden rounded-xl bg-blue-200 p-5 text-center shadow-md shadow-blue-300"
          >
            <div className="up">
              <Card
                icon={<MessageSquareText size={32} color="#007bff" />}
                heading="Bulk SMS"
                description="Send text messages to multiple phone numbers with no stress"
                children={<button>SEND SMS</button>}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
