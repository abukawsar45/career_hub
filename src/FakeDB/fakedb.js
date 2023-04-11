// use local storage to manage cart data
import { ToastContainer, toast } from 'react-toastify';
// import toast, { Toaster } from 'react-hot-toast';

const addToDb = id => {
    let applyJob = getApplyJob();
    // add quantity
    const quantity = applyJob[id];
    if (!quantity) {
        applyJob[id] = 1;
    }
    else {
          toast("Already applyed this job!");
    }
    localStorage.setItem('Apply-Job', JSON.stringify(applyJob));
}

const removeFromDb = id => {
    const applyJob = getApplyJob();
    if (id in applyJob) {
        delete applyJob[id];
        localStorage.setItem('Apply-Job', JSON.stringify(applyJob));
    }
}

const getApplyJob = () => {
    let applyJob = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('Apply-Job');
    if (storedCart) {
        applyJob = JSON.parse(storedCart);
    }
    
    return applyJob;
}

const deleteApplyJob = () => {
    localStorage.removeItem('Apply-Job');
}

export {
    addToDb,
    removeFromDb,
    getApplyJob,
    deleteApplyJob
}