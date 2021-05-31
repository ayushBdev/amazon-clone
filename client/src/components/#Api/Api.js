import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/"});

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;   
    }
    return req;
});

export const fetchProducts = () => API.get("/products");
export const createProducts = (newProduct) => API.post("/products", newProduct);

export const signIn = (formData) => API.post("/auth/signin", formData);
export const signUp = (formData) => API.post("/auth/signup", formData);

export const fetchCarts = () => API.get("/cart");
export const createCart = (userId, newCart) => API.patch(`/cart/${userId}`, newCart);
export const updateCart = (id, iqty) => API.patch(`/cart/update/${id}`, iqty);
export const deleteCart = (id) => API.delete(`/cart/${id}`);
export const deleteCartByUserId = (id) => API.delete(`/cart/det/${id}`);

export const fetchOrder= () => API.get("/orders");
export const createOrder = (newOrder) => API.post("/orders", newOrder);