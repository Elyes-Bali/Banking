import axios from "axios";

export const CurrentUser = async () => {
    let opts = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    try {
      const res = await axios.get("/api/user/auth", opts);
       
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  export  const hundelUpdate = async (id,user) => {
    const config = { headers: { "Content-Type": "application/json" } };
    try {
      const res = await axios.put(
        `/api/user/update/${id}`,
        user,
        config
      );
    } catch (error) {
      console.log(error);
    }
  };

  export const GetAllUsers = async () => {
  
    try {
      const res = await axios.get("/api/user/allusers");
       
      return res.data.allusers;
    } catch (error) {
      console.log(error);
    }
  };

  
  export const ApplyOff = async (id,apply) => {
  
    try {
      const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.put(`/api/user/apply/${id}`, apply, config);
      //  console.log(res.data.offers)
      // return res.data.offers;
    } catch (error) {
      console.log(error);
    }
  };

  export const ApplyOff2 = async (id,apply) => {
  
    try {
      const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.put(`/api/user/apply2/${id}`, apply, config);
      //  console.log(res.data.offers)
      // return res.data.offers;
    } catch (error) {
      console.log(error);
    }
  };

  export const ApplyOff3 = async (id,apply) => {
  
    try {
      const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.put(`/api/user/apply3/${id}`, apply, config);
      //  console.log(res.data.offers)
      // return res.data.offers;
    } catch (error) {
      console.log(error);
    }
  };

  export const ApplyOff4 = async (id,apply) => {
  
    try {
      const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.put(`/api/user/apply4/${id}`, apply, config);
      //  console.log(res.data.offers)
      // return res.data.offers;
    } catch (error) {
      console.log(error);
    }
  };

  export const ApplyOff5 = async (id,apply) => {
  
    try {
      const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.put(`/api/user/apply5/${id}`, apply, config);
      //  console.log(res.data.offers)
      // return res.data.offers;
    } catch (error) {
      console.log(error);
    }
  };

  export const ApplyOff6 = async (id,apply) => {
  
    try {
      const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.put(`/api/user/apply6/${id}`, apply, config);
      //  console.log(res.data.offers)
      // return res.data.offers;
    } catch (error) {
      console.log(error);
    }
  };

  export const ApplyOff7 = async (id,apply) => {
  
    try {
      const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.put(`/api/user/apply7/${id}`, apply, config);
      //  console.log(res.data.offers)
      // return res.data.offers;
    } catch (error) {
      console.log(error);
    }
  };