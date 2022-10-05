const getConfig = () => ({
  headers: { Authorization: `Bearer ${token = localStorage.getItem("token")}` }
});

export default getConfig