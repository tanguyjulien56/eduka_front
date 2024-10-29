import {
  AddressAutofill,
  config,
  useConfirmAddress,
} from "@mapbox/search-js-react";
import { useCallback, useEffect, useState } from "react";
import MapBoxAddEvent from "../../components/Mapbox/Mapbox";

export default function AddressField() {
  const [feature, setFeature] = useState<GeoJSON.Feature<GeoJSON.Point> | null>(
    null
  );
  const [showValidationText, setShowValidationText] = useState(false);
  const [token, setToken] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [validatedAddress, setValidatedAddress] = useState<string | null>(null);
  const [eventType, setEventType] = useState(false);

  useEffect(() => {
    const accessToken =
      "pk.eyJ1IjoieWVzbGlmZTEwIiwiYSI6ImNsdnV5amx3czFrN20ya29kcnIybXp4YzUifQ.w4zlwaAcEw8H-k8KO7JWow";
    if (accessToken) {
      setToken(accessToken);
      config.accessToken = accessToken;
    }

    const storedDataString = localStorage.getItem("storedDataEvent");
    if (storedDataString) {
      const storedDataEvent = JSON.parse(storedDataString);
      setEventType(!!storedDataEvent.is_public);
    }
  }, []);

  const { formRef, showConfirm } = useConfirmAddress({
    skipConfirmModal: (feature) =>
      ["exact", "high"].includes(feature.properties.match_code.confidence),
  });

  const handleRetrieve = useCallback((res: any) => {
    const retrievedFeature = res.features[0] as GeoJSON.Feature<GeoJSON.Point>;
    if (retrievedFeature) {
      setFeature(retrievedFeature);
      setErrorMessage(""); // Clear error message if valid address
    } else {
      setErrorMessage("L'adresse n'est pas assez précise");
    }
  }, []);

  const handleSubmit = useCallback(async () => {
    if (feature) {
      const result = await showConfirm();
      if (result.type === "nochange") submitForm();
    } else {
      setErrorMessage("L'adresse n'est pas assez précise");
    }
  }, [showConfirm, feature]);

  const submitForm = useCallback(() => {
    if (feature && feature.properties) {
      const { place_name, address_line1, place, postcode } = feature.properties;
      const coordinates = feature.geometry.coordinates;

      if (Array.isArray(coordinates) && coordinates.length === 2) {
        const formattedAddress = {
          address: address_line1 || "Adresse inconnue",
          city: place || "Ville inconnue",
          zip_code: postcode || "Code postal inconnu",
          location: {
            type: "GEOLOC",
            long: coordinates[0],
            lat: coordinates[1],
          },
        };

        const storedDataString = localStorage.getItem("storedDataEvent");
        if (storedDataString) {
          const storedDataEvent = JSON.parse(storedDataString);
          const updatedStoredDataEvent = {
            ...storedDataEvent,
            ...formattedAddress,
          };
          localStorage.setItem(
            "storedDataEvent",
            JSON.stringify(updatedStoredDataEvent)
          );
        } else {
          localStorage.setItem(
            "storedDataEvent",
            JSON.stringify(formattedAddress)
          );
        }

        setValidatedAddress(place_name || null);
        setShowValidationText(true);
        setTimeout(() => setShowValidationText(false), 2500);
      } else {
        console.error(
          "Invalid coordinates: coordinates are missing or incomplete."
        );
      }
    } else {
      console.error("Feature properties are missing.");
    }
  }, [feature]);

  const resetForm = useCallback(() => {
    document.querySelectorAll("input").forEach((input) => (input.value = ""));
    setFeature(null);
    setErrorMessage("");
    setValidatedAddress(null);

    const storedDataString = localStorage.getItem("storedDataEvent");
    if (storedDataString) {
      const storedDataEvent = JSON.parse(storedDataString);
      storedDataEvent.address_line1 = "";
      storedDataEvent.city = "";
      storedDataEvent.location = "";
      localStorage.setItem("storedDataEvent", JSON.stringify(storedDataEvent));
    }
  }, []);

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col">
          {validatedAddress === null && (
            // @ts-ignore
            <AddressAutofill accessToken={token} onRetrieve={handleRetrieve}>
              <input
                className={`input-custom ${
                  eventType ? "" : "input-custom-orange"
                }`}
                placeholder="Commencez à entrer une adresse"
                autoComplete="address-line1"
              />
            </AddressAutofill>
          )}
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </div>

        <div className="flex text-sm gap-4">
          {validatedAddress === null && (
            <button
              type="button"
              onClick={handleSubmit}
              className={`rounded-lg text-white hover:opacity-80 px-5 py-2 ${
                eventType ? "bg-custom-blue" : "bg-custom-orange"
              }`}
            >
              Valider adresse
            </button>
          )}
          {validatedAddress && (
            <button
              type="button"
              className="px-5 py-2 rounded-lg bg-gray-200 hover:opacity-80"
              onClick={resetForm}
            >
              Effacer
            </button>
          )}
        </div>

        {showValidationText && (
          <div className="bg-white rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10">
            Adresse validée
          </div>
        )}
        {validatedAddress && <p className="text-sm my-4">{validatedAddress}</p>}

        {validatedAddress && <MapBoxAddEvent location={validatedAddress} />}
      </form>
    </>
  );
}
