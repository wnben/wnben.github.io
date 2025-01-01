import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SubmitSuccess = () => {
  useEffect(() => {
    toast.success('提交成功！', {
      position: "top-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []);

  return (
    <div style={{ paddingTop: '80px', textAlign: 'center' }}>
      <h1>提交成功</h1>
      <ToastContainer />
    </div>
  );
};

export default SubmitSuccess;
