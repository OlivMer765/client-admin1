import { useState } from "react";
import { LoginForm } from "../components/LoginForm";
import kinalSportsLogo from "../../../assets/img/kinal_sports.png";

/*
  AuthPage.jsx: Este componente representa la página de autenticación, 
  que incluye tanto el formulario de inicio de sesión como el de recuperación de contraseña.
*/
const AuthPage = () => {
  //* Estados para controlar qué formulario mostrar
  // isLogin: controla si se muestra el formulario de inicio de sesión
  const [isLogin, setIsLogin] = useState(true);
  // isForgot: controla si se muestra el formulario de recuperación de contraseña
  const [isForgot, setIsForgot] = useState(false);

  // Función para volver al login desde cualquier estado
  const handleBackToLogin = () => {
    setIsForgot(false);
    setIsLogin(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-10">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={kinalSportsLogo}
            alt="Kinal Sport"
            className="h-20 w-auto"
          />
        </div>

        {/* Encabezado Dinámico */}
        <div className="text-center mb-6">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            {/* Esta función controla el título dinámico del formulario */}
            {isForgot
              ? "Recuperar Contraseña"
              : isLogin
                ? "Bienvenido de Nuevo"
                : "Crear Cuenta"}
          </h1>

          <p className="text-gray-600 text-base max-w-md mx-auto">
            {/* Esta función controla el subtítulo dinámico del formulario */}
            {isForgot
              ? "Ingresa tu correo para recuperar tu contraseña"
              : isLogin
                ? "Ingresa a tu cuenta de administrador de Kinal Sports"
                : "Regístrate como administrador de Kinal Sports"}
          </p>
        </div>

        {/* Formulario Dinámico */}
        {isForgot ? (
          <div className="space-y-4">
            {/* Aquí puedes crear un componente ForgotPasswordForm o poner el input directamente */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="tu@correo.com"
              />
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              Recuperar Contraseña
            </button>
          </div>
        ) : (
          <LoginForm />
        )}

        {/* Opciones de navegación al final del card */}
        <div className="mt-6 text-center space-y-2">
          {/* Esta función controla la navegación entre formularios */}
          {isForgot ? (
            <button
              onClick={handleBackToLogin}
              className="text-sm text-blue-600 hover:underline font-medium"
            >
              ¿Recordaste tu contraseña? Inicia Sesión
            </button>
          ) : (
            <>
              {isLogin && (
                <button
                  onClick={() => setIsForgot(true)}
                  className="block w-full text-sm text-gray-500 hover:text-blue-600 transition"
                >
                  ¿Olvidaste tu contraseña?
                </button>
              )}

              <p className="text-sm text-gray-600">
                {/* Esta función controla el mensaje de navegación entre formularios */}
                {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}{" "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-blue-600 hover:underline font-medium"
                >
                  {isLogin ? "Regístrate" : "Iniciar Sesión"}
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export { AuthPage };
