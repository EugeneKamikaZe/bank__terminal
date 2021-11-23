import React from "react";

export interface InputProps {
    label: string,
    button: string,
    onSubmit: React.FormEventHandler<HTMLFormElement> | undefined,
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined,
}

