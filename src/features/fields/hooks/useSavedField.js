import {useFieldStore } from "../../users/store/adminStore";

export const useSavedField = () => {

    // Recuperación de funciones para el hook
    const createField = useFieldStore((state) => state.createField);
    const updateField = useFieldStore((state) => state.updateField);

    // Función para guardar un campo (crear o actualizar)
    const saveField = async (data, fieldId = null) => {
        const formData = new FormData();

        formData.append("fieldName", data.fileName);
        formData.append("fieldType", data.fieldType);
        formData.append("capacity", data.capacity);
        formData.append("pricePerHour", data.pricePerHour);
        formData.append("description", data.description);

        if (data.photo?.lenght > 0) {
            formData.append("image", data.photo[0]);
        }

        if (fieldId) {
            await updateField(fieldId, formData);
        } else {
            await createField(formData);
        }
    }

    return { saveField };
}