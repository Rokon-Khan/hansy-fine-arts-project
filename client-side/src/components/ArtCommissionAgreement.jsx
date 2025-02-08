// const ArtCommissionAgreement = () => {
//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md">
//       <h1 className="text-2xl font-bold mb-4 text-center">
//         Art Commission Agreement
//       </h1>
//       <p className="mb-4">
//         This Art Commission Agreement (the “Agreement”) is made between
//         <span className="font-semibold">
//           {" "}
//           [Your Full Name/Business Name]
//         </span>{" "}
//         (“Artist”) and the individual commissioning the artwork (“Client”). By
//         signing this Agreement, the Client agrees to the following terms and
//         conditions:
//       </p>
//       <ol className="list-decimal list-inside space-y-4">
//         <li>
//           <h2 className="font-semibold">Artistic Discretion</h2>
//           <ul className="list-disc list-inside pl-4">
//             <li>
//               The Artist retains the right to accept or decline any design or
//               picture submitted by the Client at their sole discretion.
//             </li>
//             <li>
//               The Artist is under no obligation to create artwork from any
//               design or picture provided by the Client.
//             </li>
//           </ul>
//         </li>
//         <li>
//           <h2 className="font-semibold">Timeline</h2>
//           <ul className="list-disc list-inside pl-4">
//             <li>
//               If the Artist agrees to create the commissioned artwork, the
//               estimated completion time is 2-3 months, depending on the Artist’s
//               current workload and the complexity of the project.
//             </li>
//             <li>
//               The Artist will notify the Client of any significant delays.
//             </li>
//           </ul>
//         </li>
//         <li>
//           <h2 className="font-semibold">Pricing</h2>
//           <p>
//             The price of the commissioned artwork will vary depending on the
//             complexity of the subject. The Client and the Artist will agree upon
//             the final price before the work begins.
//           </p>
//         </li>
//         <li>
//           <h2 className="font-semibold">Payment Terms</h2>
//           <ul className="list-disc list-inside pl-4">
//             <li>
//               The Client is required to pay 50% of the agreed price upfront as a
//               non-refundable deposit.
//             </li>
//             <li>
//               The remaining 50% is due before the completed artwork is shipped
//               or delivered.
//             </li>
//             <li>
//               The Artist will provide the Client with a preview picture of the
//               finished artwork. If the Client is not satisfied with the artwork
//               based on the preview:
//               <ul className="list-disc list-inside pl-8">
//                 <li>The Client is not obligated to pay the remaining 50%.</li>
//                 <li>The upfront 50% deposit will not be refunded.</li>
//                 <li>The Artist retains ownership of the artwork.</li>
//               </ul>
//             </li>
//           </ul>
//         </li>
//         <li>
//           <h2 className="font-semibold">No Refund Policy</h2>
//           <p>
//             The 50% upfront payment is non-refundable under any circumstances,
//             including dissatisfaction with the preview.
//           </p>
//         </li>
//         <li>
//           <h2 className="font-semibold">Delivery</h2>
//           <ul className="list-disc list-inside pl-4">
//             <li>
//               The completed artwork will be shipped or delivered to the Client
//               after the final payment is received.
//             </li>
//             <li>
//               Delivery costs, if applicable, will be the responsibility of the
//               Client unless otherwise agreed upon.
//             </li>
//           </ul>
//         </li>
//         <li>
//           <h2 className="font-semibold">Copyright and Usage</h2>
//           <ul className="list-disc list-inside pl-4">
//             <li>
//               The Artist retains all copyright and intellectual property rights
//               to the artwork, including the right to reproduce, publish, or sell
//               the artwork unless otherwise agreed in writing.
//             </li>
//             <li>
//               The Client may not reproduce or use the artwork for commercial
//               purposes without explicit written permission from the Artist.
//             </li>
//           </ul>
//         </li>
//         <li>
//           <h2 className="font-semibold">Governing Law</h2>
//           <p>
//             This Agreement is governed by the laws of the
//             <span className="font-semibold">
//               {" "}
//               [Your Location, e.g., State of Texas]
//             </span>
//             .
//           </p>
//         </li>
//         <li>
//           <h2 className="font-semibold">Agreement Acceptance</h2>
//           <p>
//             By signing below, the Client acknowledges that they have read,
//             understood, and agreed to the terms of this Agreement.
//           </p>
//         </li>
//       </ol>

//       <form className="mt-6 space-y-4">
//         <div>
//           <label className="block font-semibold mb-1" htmlFor="name">
//             Name
//           </label>
//           <input
//             id="name"
//             type="text"
//             placeholder="Enter your full name"
//             className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div>
//           <label className="block font-semibold mb-1" htmlFor="address">
//             Address
//           </label>
//           <input
//             id="address"
//             type="text"
//             placeholder="Enter your address"
//             className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div>
//           <label className="block font-semibold mb-1" htmlFor="phone">
//             Phone
//           </label>
//           <input
//             id="phone"
//             type="text"
//             placeholder="Enter your phone number"
//             className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div>
//           <label className="block font-semibold mb-1" htmlFor="email">
//             Email
//           </label>
//           <input
//             id="email"
//             type="email"
//             placeholder="Enter your email address"
//             className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div>
//           <label className="block font-semibold mb-1" htmlFor="signature">
//             Signature
//           </label>
//           <input
//             id="signature"
//             type="file"
//             placeholder="Enter your signature"
//             className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div>
//           <label className="block font-semibold mb-1" htmlFor="date">
//             Date
//           </label>
//           <input
//             id="date"
//             type="date"
//             className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ArtCommissionAgreement;
// import { useState } from "react";
// import { Link } from "react-router-dom";

// const ArtCommissionAgreement = () => {
//   const [isAccepted, setIsAccepted] = useState(false); // Track terms acceptance

//   const handleCheckboxChange = () => {
//     setIsAccepted(!isAccepted); // Toggle acceptance
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md">
//       <h1 className="text-2xl font-bold mb-4 text-center">
//         Art Commission Agreement
//       </h1>

//       {/* Scrollable Terms and Conditions */}
//       <div className="h-64 overflow-y-auto p-4 border border-gray-300 rounded-md bg-gray-50">
//         <p className="mb-4">
//           This Art Commission Agreement (the “Agreement”) is made between
//           <span className="font-semibold">
//             {" "}
//             [Your Full Name/Business Name]
//           </span>{" "}
//           (“Artist”) and the individual commissioning the artwork (“Client”). By
//           signing this Agreement, the Client agrees to the following terms and
//           conditions:
//         </p>
//         <ol className="list-decimal list-inside space-y-4">
//           <li>
//             <h2 className="font-semibold">Artistic Discretion</h2>
//             <ul className="list-disc list-inside pl-4">
//               <li>
//                 The Artist retains the right to accept or decline any design or
//                 picture submitted by the Client at their sole discretion.
//               </li>
//               <li>
//                 The Artist is under no obligation to create artwork from any
//                 design or picture provided by the Client.
//               </li>
//             </ul>
//           </li>
//           <li>
//             <h2 className="font-semibold">Timeline</h2>
//             <ul className="list-disc list-inside pl-4">
//               <li>
//                 If the Artist agrees to create the commissioned artwork, the
//                 estimated completion time is 2-3 months, depending on the
//                 Artist’s current workload and the complexity of the project.
//               </li>
//               <li>
//                 The Artist will notify the Client of any significant delays.
//               </li>
//             </ul>
//           </li>
//           <li>
//             <h2 className="font-semibold">Pricing</h2>
//             <p>
//               The price of the commissioned artwork will vary depending on the
//               complexity of the subject. The Client and the Artist will agree
//               upon the final price before the work begins.
//             </p>
//           </li>
//           <li>
//             <h2 className="font-semibold">Payment Terms</h2>
//             <ul className="list-disc list-inside pl-4">
//               <li>
//                 The Client is required to pay 50% of the agreed price upfront as
//                 a non-refundable deposit.
//               </li>
//               <li>
//                 The remaining 50% is due before the completed artwork is shipped
//                 or delivered.
//               </li>
//               <li>
//                 The Artist will provide the Client with a preview picture of the
//                 finished artwork. If the Client is not satisfied with the
//                 artwork based on the preview:
//                 <ul className="list-disc list-inside pl-8">
//                   <li>The Client is not obligated to pay the remaining 50%.</li>
//                   <li>The upfront 50% deposit will not be refunded.</li>
//                   <li>The Artist retains ownership of the artwork.</li>
//                 </ul>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <h2 className="font-semibold">No Refund Policy</h2>
//             <p>
//               The 50% upfront payment is non-refundable under any circumstances,
//               including dissatisfaction with the preview.
//             </p>
//           </li>
//           <li>
//             <h2 className="font-semibold">Delivery</h2>
//             <ul className="list-disc list-inside pl-4">
//               <li>
//                 The completed artwork will be shipped or delivered to the Client
//                 after the final payment is received.
//               </li>
//               <li>
//                 Delivery costs, if applicable, will be the responsibility of the
//                 Client unless otherwise agreed upon.
//               </li>
//             </ul>
//           </li>
//           <li>
//             <h2 className="font-semibold">Copyright and Usage</h2>
//             <ul className="list-disc list-inside pl-4">
//               <li>
//                 The Artist retains all copyright and intellectual property
//                 rights to the artwork, including the right to reproduce,
//                 publish, or sell the artwork unless otherwise agreed in writing.
//               </li>
//               <li>
//                 The Client may not reproduce or use the artwork for commercial
//                 purposes without explicit written permission from the Artist.
//               </li>
//             </ul>
//           </li>
//           <li>
//             <h2 className="font-semibold">Governing Law</h2>
//             <p>
//               This Agreement is governed by the laws of the
//               <span className="font-semibold">
//                 {" "}
//                 [Your Location, e.g., State of Texas]
//               </span>
//               .
//             </p>
//           </li>
//           <li>
//             <h2 className="font-semibold">Agreement Acceptance</h2>
//             <p>
//               By signing below, the Client acknowledges that they have read,
//               understood, and agreed to the terms of this Agreement.
//             </p>
//           </li>
//         </ol>
//       </div>

//       {/* Accept Terms Checkbox */}
//       <div className="mt-4">
//         <label className="flex items-center space-x-2">
//           <input
//             type="checkbox"
//             checked={isAccepted}
//             onChange={handleCheckboxChange}
//             className="h-4 w-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
//           />
//           <span className="text-gray-700">
//             I have read and agree to the terms and conditions.
//           </span>
//         </label>
//       </div>

//       {/* Form */}
//       <form className="mt-6 space-y-4">
//         <div>
//           <label className="block font-semibold mb-1" htmlFor="name">
//             Name
//           </label>
//           <input
//             id="name"
//             type="text"
//             placeholder="Enter your full name"
//             className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div>
//           <label className="block font-semibold mb-1" htmlFor="address">
//             Address
//           </label>
//           <input
//             id="address"
//             type="text"
//             placeholder="Enter your address"
//             className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div>
//           <label className="block font-semibold mb-1" htmlFor="phone">
//             Phone
//           </label>
//           <input
//             id="phone"
//             type="text"
//             placeholder="Enter your phone number"
//             className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div>
//           <label className="block font-semibold mb-1" htmlFor="email">
//             Email
//           </label>
//           <input
//             id="email"
//             type="email"
//             placeholder="Enter your email address"
//             className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div>
//           <label className="block font-semibold mb-1" htmlFor="signature">
//             Signature
//           </label>
//           <input
//             id="signature"
//             type="file"
//             placeholder="Upload your signature"
//             className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div>
//           <label className="block font-semibold mb-1" htmlFor="photoUpload">
//             Upload Photo
//           </label>
//           <input
//             id="photoUpload"
//             type="file"
//             disabled={!isAccepted} // Disabled unless terms are accepted
//             className={`w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 ${
//               isAccepted
//                 ? "focus:ring-blue-500"
//                 : "bg-gray-100 cursor-not-allowed"
//             }`}
//           />
//         </div>
//         <button
//           type="submit"
//           className={`w-full py-2 rounded-md font-semibold ${
//             isAccepted
//               ? "bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
//               : "bg-gray-300 text-gray-500 cursor-not-allowed"
//           }`}
//           disabled={!isAccepted} // Disabled unless terms are accepted
//         >
//           Submit
//         </button>
//       </form>
//       <Link
//         to="/sign-up"
//         className="btn mt-6 w-full py-3 text-white font-semibold rounded-lg bg-blue-500 hover:bg-blue-700"
//       >
//         Become a Member
//       </Link>
//     </div>
//   );
// };

// export default ArtCommissionAgreement;

// import { useMutation } from "@tanstack/react-query";
// import { useState } from "react";
// import Swal from "sweetalert2";
// import { uploadToCloudinary } from "../api/utlis";

// const ArtCommissionAgreement = () => {
//   const [isAccepted, setIsAccepted] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     address: "",
//     phone: "",
//     email: "",
//     signature: null,
//     image: null,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData({ ...formData, [name]: files[0] });
//   };

//   const handleCheckboxChange = () => {
//     setIsAccepted(!isAccepted);
//   };

//   const mutation = useMutation(async (data) => {
//     const response = await fetch(
//       `${import.meta.env.VITE_API_URL}/custom-portrait`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       }
//     );
//     if (!response.ok) throw new Error("Failed to submit agreement");
//     return response.json();
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!isAccepted) {
//       Swal.fire("Error", "You must accept the terms and conditions.", "error");
//       return;
//     }

//     let photoURL = null;
//     let signatureURL = null;

//     try {
//       if (formData.image) {
//         photoURL = await uploadToCloudinary(formData.image);
//         console.log(photoURL);
//       }
//       if (formData.signature) {
//         signatureURL = await uploadToCloudinary(formData.signature);
//         console.log(signatureURL);
//       }

//       const submissionData = {
//         name: formData.name,
//         address: formData.address,
//         phone: formData.phone,
//         email: formData.email,
//         signature: signatureURL,
//         image: photoURL,
//         termsAccepted: "yes",
//       };

//       await mutation.mutateAsync(submissionData);

//       Swal.fire("Success", "Your request has been submitted!", "success");
//       setFormData({
//         name: "",
//         address: "",
//         phone: "",
//         email: "",
//         signature: null,
//         image: null,
//       });
//       setIsAccepted(false);
//     } catch (error) {
//       Swal.fire("Error", "Something went wrong. Try again.", "error");
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md">
//       <h1 className="text-2xl font-bold mb-4 text-center">
//         The Custom Portrait Agreement
//       </h1>
//       {/* Terms & Conditions */}
//       {/* <div className="h-64 overflow-y-auto p-4 border border-gray-300 rounded-md bg-gray-50">
//         <p className="mb-4">
//           This Art Commission Agreement (the “Agreement”) is made between
//           <span className="font-semibold"> [Your Business Name] </span>{" "}
//           (“Artist”) and the Client.
//         </p>

//       </div> */}

//       <div className="h-64 overflow-y-auto p-4 border border-gray-300 rounded-md bg-gray-50">
//         <p className="mb-4">
//           This Art Commission Agreement (the “Agreement”) is made between
//           <span className="font-semibold">
//             {" "}
//             [Your Full Name/Business Name]
//           </span>{" "}
//           (“Artist”) and the individual commissioning the artwork (“Client”). By
//           signing this Agreement, the Client agrees to the following terms and
//           conditions:
//         </p>
//         <ol className="list-decimal list-inside space-y-4">
//           <li>
//             <h2 className="font-semibold">Artistic Discretion</h2>
//             <ul className="list-disc list-inside pl-4">
//               <li>
//                 The Artist retains the right to accept or decline any design or
//                 picture submitted by the Client at their sole discretion.
//               </li>
//               <li>
//                 The Artist is under no obligation to create artwork from any
//                 design or picture provided by the Client.
//               </li>
//             </ul>
//           </li>
//           <li>
//             <h2 className="font-semibold">Timeline</h2>
//             <ul className="list-disc list-inside pl-4">
//               <li>
//                 If the Artist agrees to create the commissioned artwork, the
//                 estimated completion time is 2-3 months, depending on the
//                 Artist’s current workload and the complexity of the project.
//               </li>
//               <li>
//                 The Artist will notify the Client of any significant delays.
//               </li>
//             </ul>
//           </li>
//           <li>
//             <h2 className="font-semibold">Pricing</h2>
//             <p>
//               The price of the commissioned artwork will vary depending on the
//               complexity of the subject. The Client and the Artist will agree
//               upon the final price before the work begins.
//             </p>
//           </li>
//           <li>
//             <h2 className="font-semibold">Payment Terms</h2>
//             <ul className="list-disc list-inside pl-4">
//               <li>
//                 The Client is required to pay 50% of the agreed price upfront as
//                 a non-refundable deposit.
//               </li>
//               <li>
//                 The remaining 50% is due before the completed artwork is shipped
//                 or delivered.
//               </li>
//               <li>
//                 The Artist will provide the Client with a preview picture of the
//                 finished artwork. If the Client is not satisfied with the
//                 artwork based on the preview:
//                 <ul className="list-disc list-inside pl-8">
//                   <li>The Client is not obligated to pay the remaining 50%.</li>
//                   <li>The upfront 50% deposit will not be refunded.</li>
//                   <li>The Artist retains ownership of the artwork.</li>
//                 </ul>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <h2 className="font-semibold">No Refund Policy</h2>
//             <p>
//               The 50% upfront payment is non-refundable under any circumstances,
//               including dissatisfaction with the preview.
//             </p>
//           </li>
//           <li>
//             <h2 className="font-semibold">Delivery</h2>
//             <ul className="list-disc list-inside pl-4">
//               <li>
//                 The completed artwork will be shipped or delivered to the Client
//                 after the final payment is received.
//               </li>
//               <li>
//                 Delivery costs, if applicable, will be the responsibility of the
//                 Client unless otherwise agreed upon.
//               </li>
//             </ul>
//           </li>
//           <li>
//             <h2 className="font-semibold">Copyright and Usage</h2>
//             <ul className="list-disc list-inside pl-4">
//               <li>
//                 The Artist retains all copyright and intellectual property
//                 rights to the artwork, including the right to reproduce,
//                 publish, or sell the artwork unless otherwise agreed in writing.
//               </li>
//               <li>
//                 The Client may not reproduce or use the artwork for commercial
//                 purposes without explicit written permission from the Artist.
//               </li>
//             </ul>
//           </li>
//           <li>
//             <h2 className="font-semibold">Governing Law</h2>
//             <p>
//               This Agreement is governed by the laws of the
//               <span className="font-semibold">
//                 {" "}
//                 [Your Location, e.g., State of Texas]
//               </span>
//               .
//             </p>
//           </li>
//           <li>
//             <h2 className="font-semibold">Agreement Acceptance</h2>
//             <p>
//               By signing below, the Client acknowledges that they have read,
//               understood, and agreed to the terms of this Agreement.
//             </p>
//           </li>
//         </ol>
//       </div>

//       {/* Accept Terms */}
//       <div className="mt-4">
//         <label className="flex items-center space-x-2">
//           <input
//             type="checkbox"
//             checked={isAccepted}
//             onChange={handleCheckboxChange}
//             className="h-4 w-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
//           />
//           <span className="text-gray-700">
//             I agree to the terms and conditions.
//           </span>
//         </label>
//       </div>

//       {/* Form */}
//       <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
//         <div>
//           <label className="block font-semibold mb-1">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             className="w-full border border-gray-300 rounded-md p-2"
//             required
//           />
//         </div>
//         <div>
//           <label className="block font-semibold mb-1">Address</label>
//           <input
//             type="text"
//             name="address"
//             value={formData.address}
//             onChange={handleInputChange}
//             className="w-full border border-gray-300 rounded-md p-2"
//             required
//           />
//         </div>
//         <div>
//           <label className="block font-semibold mb-1">Phone</label>
//           <input
//             type="text"
//             name="phone"
//             value={formData.phone}
//             onChange={handleInputChange}
//             className="w-full border border-gray-300 rounded-md p-2"
//             required
//           />
//         </div>
//         <div>
//           <label className="block font-semibold mb-1">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             className="w-full border border-gray-300 rounded-md p-2"
//             required
//           />
//         </div>
//         <div>
//           <label className="block font-semibold mb-1">Signature</label>
//           <input
//             type="file"
//             name="signature"
//             onChange={handleFileChange}
//             accept="image/*"
//             className="w-full border border-gray-300 rounded-md p-2"
//             required
//           />
//         </div>
//         <div>
//           <label className="block font-semibold mb-1">Upload Photo</label>
//           <input
//             type="file"
//             name="image"
//             onChange={handleFileChange}
//             accept="image/*"
//             className={`w-full border border-gray-300 rounded-md p-2 ${
//               isAccepted
//                 ? "focus:ring-blue-500"
//                 : "bg-gray-100 cursor-not-allowed"
//             }`}
//             disabled={!isAccepted}
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className={`w-full py-3 rounded-md font-semibold ${
//             isAccepted
//               ? "bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
//               : "bg-gray-300 text-gray-500 cursor-not-allowed"
//           }`}
//           disabled={!isAccepted || mutation.isLoading}
//         >
//           {mutation.isLoading ? "Submitting..." : "Continue"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ArtCommissionAgreement;
import axios from "axios";
import { useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { uploadToCloudinary } from "../api/utlis";

const ArtCommissionAgreement = () => {
  const [loading, setLoading] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const navigate = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    signature: null,
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleCheckboxChange = () => {
    setIsAccepted(!isAccepted);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAccepted) {
      Swal.fire("Error", "You must accept the terms and conditions.", "error");
      return;
    }

    let photoURL = null;
    let signatureURL = null;

    try {
      // Upload Image and Signature to Cloudinary
      if (formData.image) {
        photoURL = await uploadToCloudinary(formData.image);
      }
      if (formData.signature) {
        signatureURL = await uploadToCloudinary(formData.signature);
      }

      // Prepare submission data
      const submissionData = {
        name: formData.name,
        address: formData.address,
        phone: formData.phone,
        email: formData.email,
        signature: signatureURL,
        image: photoURL,
        termsAccepted: "yes",
      };

      // Send data to backend using Axios
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/custom-portrait`,
        submissionData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Check response status
      if (response.status === 200) {
        Swal.fire("Success", "Your Portrait has been submitted!", "success");

        // Reset form
        setFormData({
          name: "",
          address: "",
          phone: "",
          email: "",
          image: null,
        });
        setIsAccepted(false);
        navigate("/");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      Swal.fire("Error", "Something went wrong. Try again.", "error");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md">
      <h1 className="text-2xl font-bold mb-4 text-center">
        The Custom Portrait Agreement
      </h1>

      {/* <div className="h-64 overflow-y-auto p-4 border border-gray-300 rounded-md bg-gray-50">
        <p className="mb-4">
          This Art Commission Agreement (the “Agreement”) is made between
          <span className="font-semibold"> [Your Business Name] </span>{" "}
          (“Artist”) and the Client.
        </p>
      </div> */}

      <div className="h-64 overflow-y-auto p-4 border border-gray-300 rounded-md bg-gray-50">
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
                estimated completion time is 2-3 months, depending on the
                Artist’s current workload and the complexity of the project.
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
              complexity of the subject. The Client and the Artist will agree
              upon the final price before the work begins.
            </p>
          </li>
          <li>
            <h2 className="font-semibold">Payment Terms</h2>
            <ul className="list-disc list-inside pl-4">
              <li>
                The Client is required to pay 50% of the agreed price upfront as
                a non-refundable deposit.
              </li>
              <li>
                The remaining 50% is due before the completed artwork is shipped
                or delivered.
              </li>
              <li>
                The Artist will provide the Client with a preview picture of the
                finished artwork. If the Client is not satisfied with the
                artwork based on the preview:
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
                The Artist retains all copyright and intellectual property
                rights to the artwork, including the right to reproduce,
                publish, or sell the artwork unless otherwise agreed in writing.
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
      </div>

      {/* Accept Terms */}
      <div className="mt-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isAccepted}
            onChange={handleCheckboxChange}
            className="h-4 w-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
          />
          <span className="text-gray-700">
            I agree to the terms and conditions.
          </span>
        </label>
      </div>

      {/* Form */}
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        {/* <div>
          <label className="block font-semibold mb-1">Signature</label>
          <input
            type="file"
            name="signature"
            onChange={handleFileChange}
            accept="image/*"
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div> */}
        <div>
          <label className="block font-semibold mb-1">Upload Photo</label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            accept="image/*"
            className={`w-full border border-gray-300 rounded-md p-2 ${
              isAccepted
                ? "focus:ring-blue-500"
                : "bg-gray-100 cursor-not-allowed"
            }`}
            disabled={!isAccepted}
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className={`w-full py-3 rounded-md font-semibold ${
              isAccepted
                ? "bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!isAccepted}
          >
            {loading ? (
              <TbFidgetSpinner className="animate-spin m-auto" />
            ) : (
              "Submit Your Data"
            )}
          </button>
        </div>
        {/* <button
          type="submit"
          className={`w-full py-3 rounded-md font-semibold ${
            isAccepted
              ? "bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!isAccepted}
        >
          Submit
        </button> */}
      </form>
    </div>
  );
};

export default ArtCommissionAgreement;
