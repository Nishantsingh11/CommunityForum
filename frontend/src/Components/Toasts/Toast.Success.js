import { toast } from 'react-toastify';

const showToast = (type, message) => {
    toast[type](message, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
};

export default showToast;