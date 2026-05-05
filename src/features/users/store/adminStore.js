import { create } from "zustand";
import {
    getFields as getFieldsRequest,
    createField as createFieldRequest,
    updateField as updateFieldRequest,
    deleteField as deleteFieldRequest,
    getAllReservations as getAllReservationsRequest,
    confirmReservation as confirmReservationRequest,
} from "../../../shared/api";

/*
* Este store maneja tanto las canchas como las reservaciones, 
* ya que están relacionadas y es más eficiente tenerlas juntas.
* Si el proyecto crece mucho, se podrían separar en stores diferentes.
*/

export const useFieldsStore = create((set, get) => ({
    fields: [],
    reservations: [],
    loading: false,
    error: null,

    getFields: async () => {
        try {
            set({ loading: true, error: null });

            const response = await getFieldsRequest();

            set({
                fields: response.data.data,
                loading: false,
            });
        } catch (error) {
            set({
                error: error.response?.data?.message || "Error al obtener canchas",
                loading: false,
            });
        }
    },

    createField: async (formData) => {
        try {
            set({ loading: true, error: null });

            const response = await createFieldRequest(formData);

            set({
                fields: [response.data.data, ...get().fields],
                loading: false,
            });
        } catch (error) {
            set({
                loading: false,
                error: error.response?.data?.message || "Error al crear campo",
            });
            throw error;
        }
    },

    updateField: async (id, formData) => {
        try {
            set({loading: true, error: null});

            const response = await updateFieldRequest(id, formData);

            set({
                fields: get().fields.map((f) =>
                    (f.id === id || f._id === id) ? response.data.data : f
                ),
                loading: false,
            });
        } catch (error) {
            set({
                loading: false,
                error: error.response?.data?.message || "Error al actualizar campo",
            });
            throw error;
        }
    },

    deleteField: async (id) => {
        try {
            set({loading: true, error: null});

            await deleteFieldRequest(id);

            set({
                fields: get().fields.filter((f) => f.id !== id && f._id !== id),
                loading: false,
            });
        } catch (error) {
            set({
                loading: false,
                error: error.response?.data?.message || "Error al eliminar campo",
            });
            throw error;
        }
    },

    getAllReservations: async () => {
        try {
            set({ loading: true, error: null });
            const response = await getAllReservationsRequest();
            set({
                reservations: response.data.data,
                loading: false,
            });
        } catch (error) {
            set({
                error:
                    error.response?.data?.message || "Error al obtener reservaciones",
                loading: false,
            });
        }
    },

    confirmReservation: async (id) => {
        try {
            set({ loading: true, error: null });
            await confirmReservationRequest(id);
            // Refrescar lista después de confirmar
            await get().getAllReservations();
            set({ loading: false });
        } catch (error) {
            set({
                error:
                    error.response?.data?.message || "Error al confirmar reservación",
                loading: false,
            });
        }
    },
}));