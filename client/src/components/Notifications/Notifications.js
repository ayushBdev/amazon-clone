import { store } from 'react-notifications-component';

export const added = () => {
    store.addNotification({
        title: "",
        message: "Product Added to Cart",
        type: "default",
        insert: "top",
        container: "bottom-left",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 1000,
          onScreen: true
        }
      });
};

export const removed = () => {
    store.addNotification({
        title: "",
        message: "Product Removed to Cart",
        type: "danger",
        insert: "top",
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 1000,
          onScreen: true
        }
      });
};

export const logouts = () => {
  store.addNotification({
      title: "",
      message: "Logged Out Successfully",
      type: "warning",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: true
      }
    });
};

export const wrongPassword = () => {
  store.addNotification({
      title: "",
      message: "Password Mismatch",
      type: "danger",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: true
      }
    });
};

export const success = (name) => {
  store.addNotification({
      title: "SignUp Successful",
      message: `Welcome ${name}`,
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 3000,
        onScreen: true
      }
    });
};