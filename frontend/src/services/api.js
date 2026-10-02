import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

const api = axios.create({ baseURL: API_BASE });

export const getDestinations = () => api.get('/destinations');
export const getDestinationById = (id) => api.get(`/destinations/${id}`);
export const createDestination = (data) => api.post('/destinations', data);
export const updateDestination = (id, data) => api.put(`/destinations/${id}`, data);
export const deleteDestination = (id) => api.delete(`/destinations/${id}`);

export const getRoutes = () => api.get('/routes');
export const getRouteById = (id) => api.get(`/routes/${id}`);
export const createRoute = (data) => api.post('/routes', data);

export const getCulture = () => api.get('/culture');
export const getCultureById = (id) => api.get(`/culture/${id}`);
export const createCulture = (data) => api.post('/culture', data);

export const getHotels = () => api.get('/hotels');
export const getHotelById = (id) => api.get(`/hotels/${id}`);
export const createHotel = (data) => api.post('/hotels', data);

export const getGuides = () => api.get('/guides');
export const getGuideById = (id) => api.get(`/guides/${id}`);
export const createGuide = (data) => api.post('/guides', data);

export const getFacilities = () => api.get('/facilities');
export const getFacilityById = (id) => api.get(`/facilities/${id}`);

export const getPhotos = () => api.get('/photos');
export const getPhotoById = (id) => api.get(`/photos/${id}`);
export const createPhoto = (data) => api.post('/photos', data);

export const getSources = () => api.get('/sources');

export const sendContact = (data) => api.post('/contact', data);

export default api;
