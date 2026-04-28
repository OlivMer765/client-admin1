import { Modal } from "../../../shared/ui/Modal";
export const CreateUserModal = ({ isOpen, onClose }) => {
    return (
            <Modal
                isOpen={isOpen}
                title="Crear nuevo usuario"
                subtitle="Completa la información para crear un nuevo usuario"
            >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                Nombre
                            </label>
                            <input type="text" className="w-full px-3 py-2 border rounded-lg" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                Apellido
                            </label>
                            <input type="text" className="w-full px-3 py-2 border rounded-lg" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                Nombre de Usuario
                            </label>
                            <input type="text" className="w-full px-3 py-2 border rounded-lg" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                Teléfono
                            </label>
                            <input type="tel" className="w-full px-3 py-2 border rounded-lg" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Email
                        </label>
                        <input type="email" className="w-full px-3 py-2 border rounded-lg" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                Contraseña
                            </label>
                            <input type="password" className="w-full px-3 py-2 border rounded-lg" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                Confirmar contraseña
                            </label>
                            <input type="password" className="w-full px-3 py-2 border rounded-lg" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Foto de Perfil
                        </label>
                        <input
                            type="file"
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>

                    {/* BOTONES */}
                    <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-4 border-t">
                        <button
                            onClick={onClose}
                            className="w-full sm:w-auto px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
                        >
                            Cancelar
                        </button>

                        <button
                            type="button"
                            className="w-full sm:w-auto px-5 py-2 rounded-lg text-white font-medium transition shadow"
                            style={{
                                background:
                                    "linear-gradient(90deg, var(--main-blue) 0%, #1956a3 100%)",
                            }}
                        >
                            Crear usuario
                        </button>
                    </div>                
            </Modal>
    );
};