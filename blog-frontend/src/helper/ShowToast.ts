import { toast } from 'react-toastify';

export const showToast = (message: string, type: string) => {
  interface ToastConfig {
    position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
    autoClose: number;
    hideProgressBar: boolean;
    closeOnClick: boolean;
    pauseOnHover: boolean;
    draggable: boolean;
    progress: undefined;
  }

    const config: ToastConfig = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
    switch(type) {
        case 'success':
        toast.success(message, config);
        break;
        case 'error':
        toast.error(message, config);
        break;
        case 'info':
        toast.info(message, config);
        break;
        case 'warning':
        toast.warn(message, config);
        break;
        default:
        toast(message, config);
  }  
} 