const ArtCommissionAgreement = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Art Commission Agreement
      </h1>
      <p className="mb-4">
        This Art Commission Agreement (the “Agreement”) is made between
        <span className="font-semibold">
          {" "}
          [Your Full Name/Business Name]
        </span>{" "}
        (“Artist”) and the individual commissioning the artwork (“Client”). By
        signing this Agreement, the Client agrees to the following terms and
        conditions:
      </p>
      <ol className="list-decimal list-inside space-y-4">
        <li>
          <h2 className="font-semibold">Artistic Discretion</h2>
          <ul className="list-disc list-inside pl-4">
            <li>
              The Artist retains the right to accept or decline any design or
              picture submitted by the Client at their sole discretion.
            </li>
            <li>
              The Artist is under no obligation to create artwork from any
              design or picture provided by the Client.
            </li>
          </ul>
        </li>
        <li>
          <h2 className="font-semibold">Timeline</h2>
          <ul className="list-disc list-inside pl-4">
            <li>
              If the Artist agrees to create the commissioned artwork, the
              estimated completion time is 2-3 months, depending on the Artist’s
              current workload and the complexity of the project.
            </li>
            <li>
              The Artist will notify the Client of any significant delays.
            </li>
          </ul>
        </li>
        <li>
          <h2 className="font-semibold">Pricing</h2>
          <p>
            The price of the commissioned artwork will vary depending on the
            complexity of the subject. The Client and the Artist will agree upon
            the final price before the work begins.
          </p>
        </li>
        <li>
          <h2 className="font-semibold">Payment Terms</h2>
          <ul className="list-disc list-inside pl-4">
            <li>
              The Client is required to pay 50% of the agreed price upfront as a
              non-refundable deposit.
            </li>
            <li>
              The remaining 50% is due before the completed artwork is shipped
              or delivered.
            </li>
            <li>
              The Artist will provide the Client with a preview picture of the
              finished artwork. If the Client is not satisfied with the artwork
              based on the preview:
              <ul className="list-disc list-inside pl-8">
                <li>The Client is not obligated to pay the remaining 50%.</li>
                <li>The upfront 50% deposit will not be refunded.</li>
                <li>The Artist retains ownership of the artwork.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <h2 className="font-semibold">No Refund Policy</h2>
          <p>
            The 50% upfront payment is non-refundable under any circumstances,
            including dissatisfaction with the preview.
          </p>
        </li>
        <li>
          <h2 className="font-semibold">Delivery</h2>
          <ul className="list-disc list-inside pl-4">
            <li>
              The completed artwork will be shipped or delivered to the Client
              after the final payment is received.
            </li>
            <li>
              Delivery costs, if applicable, will be the responsibility of the
              Client unless otherwise agreed upon.
            </li>
          </ul>
        </li>
        <li>
          <h2 className="font-semibold">Copyright and Usage</h2>
          <ul className="list-disc list-inside pl-4">
            <li>
              The Artist retains all copyright and intellectual property rights
              to the artwork, including the right to reproduce, publish, or sell
              the artwork unless otherwise agreed in writing.
            </li>
            <li>
              The Client may not reproduce or use the artwork for commercial
              purposes without explicit written permission from the Artist.
            </li>
          </ul>
        </li>
        <li>
          <h2 className="font-semibold">Governing Law</h2>
          <p>
            This Agreement is governed by the laws of the
            <span className="font-semibold">
              {" "}
              [Your Location, e.g., State of Texas]
            </span>
            .
          </p>
        </li>
        <li>
          <h2 className="font-semibold">Agreement Acceptance</h2>
          <p>
            By signing below, the Client acknowledges that they have read,
            understood, and agreed to the terms of this Agreement.
          </p>
        </li>
      </ol>

      <form className="mt-6 space-y-4">
        <div>
          <label className="block font-semibold mb-1" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your full name"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="address">
            Address
          </label>
          <input
            id="address"
            type="text"
            placeholder="Enter your address"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            type="text"
            placeholder="Enter your phone number"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email address"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="signature">
            Signature
          </label>
          <input
            id="signature"
            type="file"
            placeholder="Enter your signature"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="date">
            Date
          </label>
          <input
            id="date"
            type="date"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ArtCommissionAgreement;
