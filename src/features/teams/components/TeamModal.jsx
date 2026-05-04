import {Modal} from "../../../shared/ui/Modal";
import {useState} from "react";

export const TeamModal = ({isOpen, onClose}) => {
    const [formData, setFormData] = useState({
        teamName: "",
        teamSize: "",
        coachName: "",
        category: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Here to connect to saveTeam logic
        console.log("Submit team", formData);
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Nuevo Equipo"
            subtitle="Completa la informacin del equipo"
        >
            <form onSubmit={handleSubmit}>
                {/* INPUTS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* Nombre */}
                    <div className="flex flex-col md:col-span-2">
                        <label className="text-sm font-semibold text-gray-700 mb-1">
                            Nombre del equipo
                        </label>
                        <input
                            name="teamName"
                            value={formData.teamName}
                            onChange={handleChange}
                            required
                            maxLength={100}
                            className="w-full px-3 py-2 rounded-lg border-2 bg-gray-50 shadow-sm transition"
                            style={{borderColor: "var(--main-blue)", outline: "none"}}
                            placeholder="Ej. Barcelona FC"
                        />
                    </div>

                    {/* Coach Name */}
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold text-gray-700 mb-1">
                            Entrenador
                        </label>
                        <input
                            name="coachName"
                            value={formData.coachName}
                            onChange={handleChange}
                            required
                            maxLength={100}
                            className="w-full px-3 py-2 rounded-lg border-2 bg-gray-50 shadow-sm transition"
                            style={{borderColor: "var(--main-blue)", outline: "none"}}
                            placeholder="Ej. Guardiola"
                        />
                    </div>

                    {/* Team Size */}
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold text-gray-700 mb-1">
                            Tamaño del equipo
                        </label>
                        <input
                            name="teamSize"
                            value={formData.teamSize}
                            onChange={handleChange}
                            required
                            type="number"
                            min="5"
                            className="w-full px-3 py-2 rounded-lg border-2 bg-gray-50 shadow-sm transition"
                            style={{borderColor: "var(--main-blue)", outline: "none"}}
                            placeholder="Mínimo 5 jugadores"
                        />
                    </div>

                    {/* Categora */}
                    <div className="flex flex-col md:col-span-2">
                        <label className="text-sm font-semibold text-gray-700 mb-1">
                            Categora
                        </label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 rounded-lg border-2 bg-gray-50 shadow-sm transition"
                            style={{borderColor: "var(--main-blue)", outline: "none"}}
                        >
                            <option value="">Seleccione categora</option>
                            <option value="INFANTIL">Infantil</option>
                            <option value="JUVENIL">Juvenil</option>
                            <option value="ADULTO">Adulto</option>
                        </select>
                    </div>
                </div>

                {/* BOTONES */}
                <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-4 border-t mt-4">
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
                        Crear equipo
                    </button>
                </div>
            </form>
        </Modal>
    );
};