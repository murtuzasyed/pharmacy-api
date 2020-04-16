/**
 * Data Model Interfaces
 */
import { Pharmacy } from "./pharmacy.interface";
import { Pharmacies } from "./pharmacies.interface";
import { getData } from "../database";
import { cacheService } from "../cache";
import getDistance from "geolib/es/getDistance";

/**
 * Simple function to convert meters to miles.
 * @param distance The distance to convert in miles.
 */
const convertMetersToMiles = (distance: number) => distance / 1609;


type coordinates = {
  latitude: number;
  longitude: number;
};

/**
 * Finds the pharmacy nearest to the coordinates provided. If no results are found, an empty object is returned.
 * @param coordinates - The location of the consumer.
 */
export const findNearestPharmacy = async (
  coordinates: coordinates
): Promise<object> => {
  let resultSet = await cacheService("pharmacies", getData);
  let nearestDistance = Number.POSITIVE_INFINITY;
  let nearestPharmacy: Pharmacy | undefined;

  resultSet.forEach((pharmacy: Pharmacy, index: number) => {
    const distanceBetweenCoordinates = getDistance(
      { latitude: coordinates.latitude, longitude: coordinates.longitude },
      { latitude: pharmacy.latitude, longitude: pharmacy.longitude }
    );
    if (distanceBetweenCoordinates < nearestDistance) {
      nearestDistance = distanceBetweenCoordinates;
      nearestPharmacy = pharmacy;
    }
  });

  if (nearestPharmacy) {
    return {
      name: nearestPharmacy.name,
      address: `${nearestPharmacy.address} ${nearestPharmacy.city} ${nearestPharmacy.state} ${nearestPharmacy.zip}`,
      distance: `${convertMetersToMiles(nearestDistance).toFixed(2)} miles`
    };
  }
  return {};
};
