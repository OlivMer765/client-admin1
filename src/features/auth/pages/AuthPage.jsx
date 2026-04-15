import { useState } from "react";
import { LoginForm } from "../components/LoginForm";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
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
            src="/src/assets/img/kinal_sports.png"
            alt="Kinal Sport"
            className="h-20 w-auto"
          />
        </div>

        {/* Encabezado Dinámico */}
        <div className="text-center mb-6">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            {isForgot
              ? "Recuperar Contraseña"
              : isLogin
                ? "Bienvenido de Nuevo"
                : "Crear Cuenta"}
          </h1>

          <p className="text-gray-600 text-base max-w-md mx-auto">
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
