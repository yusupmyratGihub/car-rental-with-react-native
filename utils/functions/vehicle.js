import { settings } from "../settings";
const API_URL = settings.apiUrl;
export const getVehiclesImage = () => ({
  uri: `${API_URL}/files/display/${id}`,
});
