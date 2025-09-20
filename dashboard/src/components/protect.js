
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn"); // check login flag
  if (!isLoggedIn) {
 window.location.href = "http://localhost:3001"; // login page pe redirect
  }
  return children;
};

export default ProtectedRoute;