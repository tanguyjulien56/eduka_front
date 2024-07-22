// /* eslint-disable @typescript-eslint/no-explicit-any */
// import {
//   AddressAutofill,
//   config,
//   useConfirmAddress,
// } from "@mapbox/search-js-react";
// import { useCallback, useEffect, useState } from "react";
// import MapBoxAddEvent from "../../components/Mapbox/Mapbox";

// export default function AddressField() {
//   // const [showFormExpanded, setShowFormExpanded] = useState(false);
//   const [feature, setFeature] =
//     useState<GeoJSON.Feature<GeoJSON.Geometry> | null>(null);
//   const [showValidationText, setShowValidationText] = useState(false);
//   const [token, setToken] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [validatedAddress, setValidatedAddress] = useState<string | null>(null); // Ajout d'un état pour l'adresse validée
//   const [eventType, setEventType] = useState<string | null>(null);

//   useEffect(() => {
//     const accessToken =
//       "pk.eyJ1IjoieWVzbGlmZTEwIiwiYSI6ImNsdnV5amx3czFrN20ya29kcnIybXp4YzUifQ.w4zlwaAcEw8H-k8KO7JWow";
//     if (accessToken) {
//       setToken(accessToken);
//       config.accessToken = accessToken;
//     }
//     // Récupérer la valeur du type depuis le localStorage
//     const storedDataString = localStorage.getItem("storedDataEvent");
//     if (storedDataString) {
//       const storedDataEvent = JSON.parse(storedDataString);
//       setEventType(storedDataEvent.type);
//     }
//   }, []);

//   const { formRef, showConfirm } = useConfirmAddress({
//     skipConfirmModal: (feature) =>
//       ["exact", "high"].includes(feature.properties.match_code.confidence),
//   });

//   const handleRetrieve = useCallback(
//     (res: any) => {
//       const feature = res.features[0];
//       if (feature) {
//         setFeature(feature);
//         // setShowFormExpanded(true);
//         setErrorMessage(""); // Clear error message if valid address
//       } else {
//         setErrorMessage("l'adresse n'est pas assez précise"); // Set error message if invalid address
//       }
//     },
//     [setFeature, setErrorMessage]
//   );

//   const handleSubmit = useCallback(async () => {
//     if (feature) {
//       const result = await showConfirm();
//       console.log(result);
//       if (result.type === "nochange") submitForm();
//     } else {
//       setErrorMessage("l'adresse n'est pas assez précise"); // Set error message if invalid address
//     }
//   }, [showConfirm, feature]);

//   const submitForm = useCallback(() => {
//     if (feature && feature.properties) {
//       const storedDataString = localStorage.getItem("storedDataEvent");
//       if (storedDataString) {
//         const storedDataEvent = JSON.parse(storedDataString);
//         const updatedStoredDataEvent = {
//           ...storedDataEvent,
//           address: feature.properties.place_name,
//         };
//         localStorage.setItem(
//           "storedDataEvent",
//           JSON.stringify(updatedStoredDataEvent)
//         );
//       } else {
//         const data = {};
//         const newData = {
//           ...data,
//           address: feature.properties.place_name,
//         };
//         localStorage.setItem("storedDataEvent", JSON.stringify(newData));
//       }
//     }
//     setValidatedAddress(null);
//     setShowValidationText(true);
//     setTimeout(() => {
//       setShowValidationText(false);
//     }, 2500);

//     // Set validated address
//     setValidatedAddress(
//       feature?.properties ? feature.properties.place_name : null
//     ); // Définit l'adresse validée si feature est défini, sinon null
//   }, [feature]);

//   const resetForm = useCallback(() => {
//     const inputs = document.querySelectorAll("input");
//     inputs.forEach((input) => (input.value = ""));
//     // setShowFormExpanded(false);
//     setShowValidationText(false);
//     setFeature(null);
//     setErrorMessage(""); // Clear error message on reset

//     const storedDataString = localStorage.getItem("storedDataEvent");
//     if (storedDataString) {
//       const storedDataEvent = JSON.parse(storedDataString);
//       storedDataEvent.address = ""; // Clear the address property
//       localStorage.setItem("storedDataEvent", JSON.stringify(storedDataEvent));
//     }

//     // Clear validated address
//     setValidatedAddress(null);
//   }, []);

//   return (
//     <>
//       <form ref={formRef} className="" onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <div className="flex flex-col">
//             {/* Input form */}

//             {validatedAddress === null && (
//               <AddressAutofill accessToken={token} onRetrieve={handleRetrieve}>
//                 <input
//                   className={`input-custom ${
//                     eventType === "Public" ? "" : "input-custom-orange"
//                   }`}
//                   placeholder="Commencez a entrer une adresse"
//                   autoComplete="address-line1"
//                   id="mapbox-autofill"
//                 />
//               </AddressAutofill>
//             )}
//             {errorMessage && ( // Conditionally render error message
//               <p className="text-red-500 mt-2">{errorMessage}</p>
//             )}
//             {/* <div style={{ display: showFormExpanded ? "block" : "none" }}>
//               <label className=" mt-10">Ville</label>
//               <input
//                 className="block w-full p-4 mb-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange "
//                 placeholder="ville"
//                 autoComplete="address-level2"
//               />
//               <div className="grid grid-cols-2 gap-5">
//                 <div>
//                   <label className=" mt-10">Pays / Region</label>
//                   <input
//                     className="block w-full mb-4 p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange "
//                     placeholder="Pays / Region"
//                     autoComplete="address-level1"
//                   />
//                 </div>
//                 <div>
//                   <label className=" mt-10">Code Postal</label>
//                   <input
//                     className="block w-full mb-4 p-4 ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-custom-orange focus:border-custom-orange "
//                     placeholder="Code Postal"
//                     autoComplete="postal-code"
//                   />
//                 </div>
//               </div>
//             </div> */}
//           </div>
//         </div>

//         {/* Form buttons */}
//         <div className="flex text-sm  gap-4">
//           {validatedAddress === null && (
//             <button
//               type="button"
//               onClick={handleSubmit}
//               className={`rounded-lg text-white hover:opacity-80 px-5 py-2 ${
//                 eventType === "Public" ? "bg-custom-blue" : "bg-custom-orange"
//               }`}
//               id="btn-confirm"
//             >
//               Valider adresse
//             </button>
//           )}
//           {validatedAddress && (
//             <button
//               type="button"
//               className="px-5 py-2 rounded-lg bg-gray-200 hover:opacity-80"
//               id="btn-reset"
//               onClick={resetForm}
//             >
//               Effacer
//             </button>
//           )}
//         </div>
//       </form>

//       {/* Validation text */}
//       {showValidationText && (
//         <div
//           id="validation-msg"
//           className=" bg-white rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10"
//         >
//           Adresse validée
//         </div>
//       )}
//       {validatedAddress && <p className="text-sm my-4">{validatedAddress}</p>}

//       {/* Render MapBoxComponent only when address is validated */}
//       {validatedAddress && <MapBoxAddEvent location={validatedAddress} />}
//     </>
//   );
// }
