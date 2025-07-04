import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const userInitialState = {
  nombre: "Usuario",
  userEmail: "",
};
export default function Home() {
  const [user, setUser] = useState(userInitialState);
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) setUser(user);
  }, []);
  const handleRemove = () => {
    localStorage.removeItem("user");
    navigate("/contact");
  };
  return (
    <div>
      <h1>Hola {user.nombre}</h1>
      <h2>tu correo registrado es : {user.userEmail}</h2>
      <button onClick={handleRemove} className='formButton'>
        Borrar Registro
      </button>
    </div>
  );
}
