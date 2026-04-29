import { create } from "zustand";
/*
* UI Store sirve para manejar estados de modales y 
* confirmaciones en la aplicación. Permite abrir y cerrar 
* modales con mensajes personalizados, 
* así como manejar confirmaciones con acciones específicas.
*/
export const useUIStore = create((set) => ({
    modal: null,
    confirm: null,

    OpenModal: (title, message, onClose) => set(
        {
            modal: { title, message, onClose }
        }
    ),

    CloseModal: () => set ({modal:null}),

    openConfirm: (title, message, onConfirm, onClose) => set ({
        confirm: { title, message, onConfirm, onClose }
    }),

    closeConfirm: () => set({confirm: null}),
}));