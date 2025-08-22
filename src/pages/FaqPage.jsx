import { Helmet } from "react-helmet";

import Faqs from "../components/Faqs";

function FaqPage() {
  return (
    <>
      <Helmet>
        <title>
          FAQs – Buy Cheap Data & Airtime Online in Nigeria | QMED Connect
        </title>
        <link rel="icon" type="image/svg+xml" href="../qmed.svg" />
        <meta
          name="description"
          content="Get answers to common questions about buying airtime and data online. Learn how to recharge instantly, check balances, and enjoy fast, secure, and reliable mobile top-ups on our platform."
        />
        <meta
          name="keywords"
          content="buy airtime online, cheap data bundles, airtime recharge, data top-up, instant recharge Nigeria, MTN data, Glo data, Airtel airtime, 9mobile recharge, affordable data plans"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How do I buy airtime or data online?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Select your network, enter your phone number, choose an amount, and pay securely. Delivery is instant after payment."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which networks can I recharge?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We support MTN, Airtel, Glo, and 9mobile for airtime and data top-ups."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How fast is delivery?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Airtime and data are delivered instantly, usually within seconds."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What payment options are available?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We accept debit/credit cards, bank transfers, and payment gateways like Monnify and Xendify."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I top up for someone else?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, simply enter their phone number at checkout."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer discounts?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer discounted data plans and occasional airtime bonuses."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What if I don’t get my recharge?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Contact support with your transaction ID, and we’ll resolve it quickly."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is payment secure?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, all payments are processed through encrypted, secure gateways."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you sell bulk data or airtime?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, bulk purchases are available at discounted rates. Contact sales for details."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I reach customer support?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Via live chat, WhatsApp, email, or our Contact page — available 24/7."
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>
      <div className="bg-gray-50 px-12 py-10 lg:px-26 lg:py-12">
        <Faqs />
      </div>
    </>
  );
}

export default FaqPage;
