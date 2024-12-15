import React from "react";

const Faq = () => {
  return (
    <div className="faq p-6 md:p-10 bg-gray-50">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
        Frequently Asked Questions
      </h1>

      <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
        What is your shipping policy?
      </h2>
      <p className="text-gray-600 mb-6">
        <strong>FOR PRINTS</strong> Shipping times range from 1–7 business days.
        You will receive a tracking number as soon as your order has been
        shipped.
      </p>

      <div className="overflow-x-auto mb-10">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-300 px-4 py-2">Order Type</th>
              <th className="border border-gray-300 px-4 py-2">
                Production Time
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Standard Shipping
              </th>
              <th className="border border-gray-300 px-4 py-2">
                2 Day Shipping
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Next Day Shipping
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                "Paper or Canvas (print only)",
                "5 Bus. Days",
                "3-7+ Bus. Days*",
                "2-3 Bus. Days",
                "1-2 Bus. Days",
              ],
              [
                "Acrylic or Metal (print only)",
                "5 Bus. Days",
                "3-7+ Bus. Days*",
                "2-3 Bus. Days",
                "1-2 Bus. Days",
              ],
              [
                "Print & Frame Presentations",
                "5 Bus. Days",
                "3-7+ Bus. Days*",
                "2-3 Bus. Days",
                "1-2 Bus. Days",
              ],
              [
                "Custom Canvas Art",
                "5 Bus. Days",
                "3-7+ Bus. Days*",
                "2-3 Bus. Days",
                "1-2 Bus. Days",
              ],
              [
                "Sample Packs",
                "3 Bus. Days",
                "3-7+ Bus. Days*",
                "2-3 Bus. Days",
                "1-2 Bus. Days",
              ],
            ].map((row, index) => (
              <tr key={index} className="odd:bg-white even:bg-gray-50">
                {row.map((cell, i) => (
                  <td key={i} className="border border-gray-300 px-4 py-2">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg  space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Shipping Information
        </h2>

        <p className="text-gray-700">
          Business Days are Mon. - Fri. With our favorable central location, 85%
          of the Lower 48 experiences shipping times of 3 business days.
        </p>

        <p className="text-gray-700">
          We stock some popular sizes, produced much more quickly.
        </p>

        <p className="text-gray-700">
          For US territories outside of the 48 contiguous states (Alaska, Guam,
          Hawaii, Puerto Rico, Virgin Islands), please expect a few extra
          business days for shipping.
        </p>

        <div className="border-t border-gray-300 pt-4">
          <p className="text-gray-700 font-medium">
            Note: Orders placed after 10AM EST will go into production the next
            business day. Please allow 1 additional day if your order placement,
            production date range or delivery date range falls on one of these
            holidays:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>New Year's Day</li>
            <li>Good Friday</li>
            <li>Memorial Day</li>
            <li>Independence Day</li>
            <li>Labor Day</li>
            <li>Thanksgiving Day</li>
            <li>Christmas Day</li>
          </ul>
        </div>
      </div>

      <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
        How much does the shipping cost?
      </h2>
      <p className="text-gray-600 mb-6">
        The shipping price is calculated based on the weight coefficient of each
        item.
        <br />
        <strong>FOR ORIGINALS & LIMITED EDITIONS</strong> Shipping times range
        from 3-9 business days. Tracking information will be emailed to you as
        soon as available. Shipping for these items will be based on weight:
      </p>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-300 px-4 py-2">Cart Weight</th>
              <th className="border border-gray-300 px-4 py-2">
                Ground Shipping
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Expedited 2 Day Shipping
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Up to 5LBs", "$9.95", "$19.95"],
              ["5-10 LBs", "$15.95", "$29.95"],
              ["10-15 LB", "$19.95", "$39.95"],
              ["15 LB +", "$29.95", "$49.95"],
            ].map((row, index) => (
              <tr key={index} className="odd:bg-white even:bg-gray-50">
                {row.map((cell, i) => (
                  <td key={i} className="border border-gray-300 px-4 py-2">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="faq p-6 md:p-10 bg-gray-50 text-gray-800">
        {/* WHEN WILL I RECEIVE MY ORDER */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            WHEN WILL I RECEIVE MY ORDER?
          </h2>
          <p className="text-gray-600 mb-2">
            We do our best to ensure your order arrives in a timely manner. In
            general, most frame orders are processed, produced, and shipped
            within 2-3 business days—and typically arrive in 4-5 business days.
            Canvas orders are usually produced in 3-4 days, arriving in 5-6
            business days. Next day and 2-day express shipping are available;
            however, please note that these options will not affect processing
            time. International orders typically arrive within 6-10 business
            days via USPS Priority Mail.
          </p>
        </div>

        {/* SHIPPING TO CANADA/INTERNATIONAL/APO/FPO ADDRESSES */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            CAN I SHIP TO CANADA/INTERNATIONAL/APO/FPO ADDRESSES?
          </h2>
          <p className="text-gray-600 mb-2">
            Yes. Additional charges may apply. Items will be shipped USPS
            Priority International or FedEx, per request.
          </p>
        </div>

        {/* RETURNS/EXCHANGES/REFUNDS */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            What is your Policy on Returns/Exchanges/Refunds?
          </h2>
          <p className="text-gray-600 mb-2">
            We will provide a no-charge replacement or refund for any quality
            issues. We may request to have the presentation/order returned to us
            and would provide a return shipping label.
          </p>
          <p className="text-gray-600 mb-2">
            We do not provide a refund based on customer preference. We will
            provide a refund or a no-charge replacement for any orders damaged
            in shipping. For a refund or replacement, please contact me.
          </p>
          <p className="text-gray-600 mb-2">
            There's a 15% restocking fee that is applied for any order canceled
            or exchanged.
          </p>
        </div>

        {/* CANCEL ORDER */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            CAN I CANCEL MY ORDER?
          </h2>
          <p className="text-gray-600 mb-2">
            Unless your order has already gone into production, you can cancel
            it. Please contact me as soon as possible if you need to cancel your
            order.
          </p>
        </div>

        {/* REFUND PROCESSING TIME */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            HOW LONG DOES IT TAKE TO PROCESS A REFUND?
          </h2>
          <p className="text-gray-600 mb-2">
            Processing a refund can take up to 7-10 business days.
          </p>
        </div>

        {/* RETURN PACKAGE */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            HOW DO I RETURN MY PACKAGE?
          </h2>
          <p className="text-gray-600 mb-2">
            For a refund or replacement, please email{" "}
            <a
              href="mailto:billstidham1@yahoo.com"
              className="text-blue-500 underline"
            >
              billstidham1@yahoo.com
            </a>
            .
          </p>
        </div>

        {/* CONTACT */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            WHO TO CONTACT?
          </h2>
          <p className="text-gray-600 mb-2">
            You can reach out at any time by email at{" "}
            <a
              href="mailto:billstidham1@yahoo.com"
              className="text-blue-500 underline"
            >
              billstidham1@yahoo.com
            </a>
            .
          </p>
        </div>

        {/* KEEP UP WITH NEW WORK */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            How can I keep up with your new work?
          </h2>
          <p className="text-gray-600 mb-2">
            I send all of my best first looks and special offers to my mailing
            list VIPs!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
