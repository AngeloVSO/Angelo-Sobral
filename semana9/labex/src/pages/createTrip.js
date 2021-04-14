import React from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";

const CreateTripPage = () => {
    useProtectedPage()

    return <div>Página de criar Viagens</div>
}

export default CreateTripPage