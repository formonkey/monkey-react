import React from 'react';

export const Role = ({ data, name, onChange, value, t }: any) => {
    const handleChange = (e: { target: { value: string } }, option: any) => {
        value = value || [];

        const temp = [...value, ...e.target.value.split(',')].filter((key: string) =>
            option.remove?.indexOf(key)
        );

        onChange({ [name]: temp.filter((e: string) => temp.includes(e)) });
    };

    return (
        <div className="mb-3">
            <label className="form-label">{t('Role Permissions')}</label>
            <div className="table-responsive">
                <table className="table table-flush-spacing">
                    <tbody>
                        {data.map((item: any) => (
                            <tr>
                                <td className="text-nowrap fw-semibold">{t(item.label)}</td>
                                <td>
                                    <div className="d-flex">
                                        {item.options.map((option: any) => (
                                            <div className="form-check me-3 me-lg-5">
                                                <input
                                                    name={item.label + '-permission'}
                                                    className="form-check-input"
                                                    type="radio"
                                                    value={option.value}
                                                    onChange={(e) => handleChange(e, option)}
                                                    disabled={!!option.disabled}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="userManagementRead"
                                                >
                                                    {t(option.label)}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
