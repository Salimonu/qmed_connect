import { UserPlus, Wallet, CreditCard, ClipboardList } from "lucide-react";

import Card from "./Card";

export default function HowItWorks() {
  return (
    <>
      <div className="bg-blue-50 pt-4 pb-5">
        <h2 className="mb-3 text-center text-2xl font-bold text-blue-900">
          How It Works
        </h2>
        <div className="grid justify-center gap-y-4 lg:grid-cols-2">
          <div
            data-aos="fade-up"
            className="mx-30 flex border-6 border-double border-blue-500 p-5 text-center"
          >
            <p className="text-6xl text-blue-500">1</p>
            <Card
              icon={<UserPlus size={32} color="#007bff" />}
              heading="Create an account"
              description="Sign up in seconds with your phone number or email to get started"
            />
          </div>
          <div
            data-aos="fade-up"
            className="mx-30 flex border-6 border-double border-blue-500 p-5 text-center"
          >
            <p className="text-6xl text-blue-500">2</p>
            <Card
              icon={<Wallet size={32} color="#007bff" />}
              heading="Fund your wallet"
              description="Add money securely using your preffered payment method"
            />
          </div>
          <div
            data-aos="fade-up"
            className="mx-30 flex border-6 border-double border-blue-500 p-5 text-center"
          >
            <p className="text-6xl text-blue-500">3</p>
            <Card
              icon={<CreditCard size={32} color="#007bff" />}
              heading="Recharge instantly"
              description="Buy airtime, data, or pay utility bills instantly with just a tap"
            />
          </div>
          <div
            data-aos="fade-up"
            className="mx-30 flex border-6 border-double border-blue-500 p-5 text-center"
          >
            <p className="text-6xl text-blue-500">4</p>
            <Card
              icon={<ClipboardList size={32} color="#007bff" />}
              heading="Track transactions"
              description="View your transaction history to stay on top of your spending"
            />
          </div>
        </div>
      </div>
    </>
  );
}

// icon, heading, description, pay
