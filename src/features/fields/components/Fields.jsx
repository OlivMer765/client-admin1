import { useEffect, useState } from "react";
import {Spinner} from "../../auth/components/Spinner.jsx";
import {FieldModal} from "./FieldModal";
import {useModal} from "../../../shared/ui/hooks/useModal.js";
import {useFieldsStore} from "../../users/store/adminStore";

export const Fields = () => {
    const {isOpen, openModal, closeModal} = useModal();
    const { fields, getFields, loading } = useFieldsStore();
    const [selectedField, setSelectedField] = useState(null);

    useEffect(() => {
        getFields();
    }, [getFields]);

    const handleOpenModal = (field = null) => {
        setSelectedField(field);
        openModal();
    };

    if (loading) return <Spinner/>;

    return (
        <div className="p-4">
            {/* HEADER */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-main-blue">
                        Gestión de Canchas
                    </h1>
                    <p className="text-gray-500 text-sm">
                        Administra las canchas registradas
                    </p>
                </div>

                <button
                    onClick={() => handleOpenModal()}
                    className="bg-main-blue px-4 py-2 rounded text-white hover:opacity-90 transition"
                >
                    + Agregar Cancha
                </button>
            </div>

            {/* GRID */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {fields?.map((field) => (
                    <div
                        key={field.id || field._id}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:scale-[1.02]">

                        {/* IMAGEN */}
                        <div className="w-full h-52 bg-gray-100 flex items-center justify-center">
                            <img
                                src={`https://res.cloudinary.com/dueikakf8/image/upload/v1777916432/kinalSports/fields/${field.photo}$.jpg`}
                                alt="Campo"
                                className="max-h-full max-w-full object-cover rounded-t-xl"
                            />
                        </div>

                        {/* CONTENIDO */}
                        <div className="p-5">
                            <h2 className="text-xl font-bold text-main-blue truncate">
                                {field.name}
                            </h2>

                            {/* BADGES */}
                            <div className="flex gap-2 mt-2 flex-wrap">
                                <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-medium">
                                    {field.capacity}
                                </span>

                                <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium">
                                    Q{field.pricePerHour || field.price}/hora
                                </span>
                            </div>

                            {/* INFO */}
                            <p className="text-sm text-gray-500 mt-3 truncate font-medium">
                                Tipo: {field.type}
                            </p>
                            <p className="text-sm text-gray-400 mt-1 line-clamp-2 min-h-10">
                                {field.description || "Sin descripción"}
                            </p>

                            {/* BOTONES */}
                            <div className="flex gap-3 mt-5">
                                <button
                                    onClick={() => handleOpenModal(field)}
                                    className="flex-1 py-2 rounded-lg bg-main-blue text-white font-medium hover:opacity-90 transition shadow-sm"
                                >
                                    ✏️ Editar
                                </button>

                                <button
                                    className="flex-1 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition shadow-sm"
                                >
                                    🗑️ Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <FieldModal isOpen={isOpen} onClose={closeModal} field={selectedField} />
        </div>
    );
};