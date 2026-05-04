import {Modal} from "../../../shared/ui/Modal";
import {useState} from "react";
import {useSavedField} from "../hooks/useSavedField";

export const FieldModal = ({isOpen, onClose}) => {
    const {saveField} = useSavedField();
    const [formData, setFormData] = useState({
        fieldName: "",
        fieldType: "",
        capacity: "",
        pricePerHour: "",
        description: "",
        photo: null
    });

    const handleChange = (e) => {
        const {name, value, files} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await saveField(formData);
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Nuevo Campo"
            subtitle="Completa la informacin del campo"
        >
            <form onSubmit={handleSubmit}>
                {/* PREVIEW */}
                <div className="flex justify-center">
                    <div
                        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl bg-gray-100 border flex items-center justify-center overflow-hidden shadow-inner">
                            <span className="text-gray-400 text-xs sm:text-sm">
                                Sin imagen
                            </span>
                    </div>
                </div>

                {/* INPUTS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* Nombre */}
                    <div className="flex flex-col md:col-span-2">
                        <label className="text-sm font-semibold text-gray-700 mb-1">
                            Nombre del campo
                        </label>
                        <input
                            name="fieldName"
                            value={formData.fieldName}
                            onChange={handleChange}
                            required
                            maxLength={100}
                            className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 bg-gray-50 shadow-sm 
                focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                            placeholder="Ej. Cancha Central"
                        />
                    </div>

                    {/* Tipo */}
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold text-gray-700 mb-1">
                            Tipo de cancha
                        </label>
                        <select
                            name="fieldType"
                            value={formData.fieldType}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 bg-gray-50 shadow-sm 
                focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                        >
                            <option value="">Seleccione un tipo</option>
                            <option value="CÉSPED_NATURAL">Césped Natural</option>
                            <option value="CÉSPED_ARTIFICIAL">Césped Artificial</option>
                            <option value="CONCRETO">Concreto</option>
                            <option value="ARENA">Arena</option>
                        </select>
                    </div>

                    {/* Capacidad */}
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold text-gray-700 mb-1">
                            Capacidad
                        </label>
                        <select
                            name="capacity"
                            value={formData.capacity}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 bg-gray-50 shadow-sm 
                focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                        >
                            <option value="">Seleccione capacidad</option>
                            <option value="FUTBOL_5">Fútbol 5</option>
                            <option value="FUTBOL_7">Fútbol 7</option>
                            <option value="FUTBOL_11">Fútbol 11</option>
                        </select>
                    </div>

                    {/* Precio */}
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold text-gray-700 mb-1">
                            Precio por hora
                        </label>
                        <input
                            name="pricePerHour"
                            value={formData.pricePerHour}
                            onChange={handleChange}
                            required
                            min="0"
                            type="number"
                            className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 bg-gray-50 shadow-sm 
                focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                            placeholder="Q100"
                        />
                    </div>

                    {/* Descripcin */}
                    <div className="flex flex-col md:col-span-2">
                        <label className="text-sm font-semibold text-gray-700 mb-1">
                            Descripcin
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            maxLength={500}
                            className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 bg-gray-50 shadow-sm 
                focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                            placeholder="Detalles del campo..."
                        />
                    </div>

                    {/* Imagen */}
                    <div className="flex flex-col md:col-span-2">
                        <label className="text-sm font-semibold text-gray-700 mb-1">
                            Imagen del campo
                        </label>
                        <input
                            name="photo"
                            onChange={handleChange}
                            type="file"
                            className="w-full px-3 py-2 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 
                hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition cursor-pointer"
                            accept="image/*"
                        />
                    </div>
                </div>

                {/* BOTONES */}
                <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-4 border-t">
                    <button
                        type="button"
                        onClick={onClose}
                        className="w-full sm:w-auto px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
                    >
                        Cancelar
                    </button>

                    <button
                        type="submit"
                        className="w-full sm:w-auto px-5 py-2 rounded-lg text-white font-medium transition shadow"
                        style={{
                            background:
                                "linear-gradient(90deg, var(--main-blue) 0%, #1956a3 100%)",
                            border: "none",
                        }}
                    >
                        Crear campo
                    </button>
                </div>
            </form>
        </Modal>
    );
};