
import { Toast } from "flowbite-react";

export const ToastMessage = ({message}) => {
  return (
    
    <Toast>
    <div className="ml-3 text-sm font-normal">{message}</div>
    <Toast.Toggle />
  </Toast>
  );
}
