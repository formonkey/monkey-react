import React, { useState as state } from "react";

export const Form =
    (Schema: any) =>
    (Component: any) =>
    (props: { [name: string]: string }) => {
        const [form, setForm] = state({});
        const [errors, setErrors] = state({});

        const onChange = (e: { [key: string]: string }) => {
            const data = { ...form, ...e };

            setForm(data);

            try {
                Schema.parse(data);

                setErrors({});
            } catch (err: any) {
                let temp = { ...errors };
                const message = JSON.parse(err.message);

                message.forEach((error: any) => {
                    temp = { ...temp, [error.path[0]]: error.code };
                });

                setErrors({ ...errors, ...temp });
            }
        };

        return (
            <Component
                {...props}
                form={form}
                onChange={onChange}
                disabled={
                    Object.keys(form).length
                        ? !!Object.keys(errors).length
                        : true
                }
            />
        );
    };
