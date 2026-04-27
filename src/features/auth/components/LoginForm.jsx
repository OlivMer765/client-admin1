/*
    LoginForm.jsx: Este componente representa el formulario de inicio de sesión.
*/

import { useAuthStore } from "../store/authStore.js";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const LoginForm = () => {

    const navigate = useNavigate();

    const login = useAuthStore((state) => state.login);
    // error is exported but currently unused here
    const loading = useAuthStore((state) => state.loading);

    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = async (data) => {
        const res = await login(data);
        if (res.success) {
            navigate("/dashboard");
            toast.success("¡Inicio de sesión exitoso!");
        } else {
            toast.error(res.error);
        }
    };

    return (
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {/* Sección de Email o Usuario */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium
                text-gray-800 mb-1.5">
                    Email o Usuario
                </label>

                <input type="text"
                placeholder="correo@ejemplo.com o usuario"
                className="w-full px-3 py-2 text-sm
                border border-gray-300 rounded-lg
                focus:ring-2 focus:ring-blue-500"
                {...register("emailOrUsername", { required: "El email o usuario es requerido" })}
                ></input>
            </div>

            {/* Sección de Contraseña */}
            <div>
                <label htmlFor="password" className="block text-sm font-medium
                text-gray-700 mb-1.5">
                    Contraseña
                </label>
                    
                <input type="password"
                placeholder="Ingresa tu contraseña"
                className="w-full px-3 py-2 text-sm
                border border-gray-300 rounded-lg
                focus:ring-2 focus:ring-blue-500"
                {...register("password", { required: "La contraseña es requerida" })}
                ></input>
            </div>

            <button 
            type="submit"
            disabled={loading}
            className="w-full bg-main-blue hover:opacity-90 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 text-sm"
            >
                {loading ? "Cargando..." : "Iniciar Sesión"}
            </button>
            
        </form>
    );
};

