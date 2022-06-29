import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Multi = ({ t, name, form, config, onChange, label, data, value }: any) => {
    const [ref, setRef] = useState<any>();
    const [top, setTop] = useState(0);
    const [open, setOpen] = useState<boolean>(false);
    const [focused, setFocused] = useState<number>(0);
    const [selecteds, setSelecteds] = useState<any>([]);
    const [values, setValues] = useState<any>(value || []);

    const handleClick = (element: { value: string; label: string }) => {
        if (!selecteds.includes(element.label)) {
            setValues([...values, element.value]);
        } else {
            setValues(values.filter((value: string) => value !== element.value));
        }
    };

    const handleConfirm = () => {
        setOpen(false);
        onChange({ ...form, [name]: values });
    };

    const onRemove = (idx: number) => {
        setSelecteds(selecteds.filter((_: string, i: number) => i !== idx));
        setOpen(false);
    };

    useEffect(() => {
        if (ref) {
            setTop(ref.offsetHeight);
        }
    }, [ref]);

    useEffect(() => {
        data.map((element: any) => {
            if (values.includes(element.value)) {
                setSelecteds([...selecteds, element.label]);
            }
        });

        setTimeout(() => setTop(ref.offsetHeight), 200);
    }, [values]);

    return (
        <>
            <label htmlFor={`${name}-multi-select`} className="form-label">
                {t(label)}
            </label>
            <div
                onMouseLeave={handleConfirm}
                onClick={() => setOpen(true)}
                className="position-relative"
            >
                <span
                    ref={(ref) => setRef(ref)}
                    className={
                        open
                            ? 'select2 select2-container select2-container--default select2-container--focus select2-container--below select2-container--open'
                            : 'select2 select2-container select2-container--default select2-container select2-container--below select2-container'
                    }
                >
                    <span className="selection">
                        <span
                            className="select2-selection select2-selection--multiple"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="true"
                            tabIndex={-1}
                            aria-disabled="false"
                            aria-owns="select2-select2Multiple-results"
                            aria-activedescendant="select2-select2Multiple-result-ob06-CO"
                        >
                            <ul className="select2-selection__rendered">
                                {selecteds.map((selected: string, idx: number) => (
                                    <li
                                        key={idx}
                                        title="Colorado"
                                        className="select2-selection__choice"
                                    >
                                        <span
                                            className="select2-selection__choice__remove"
                                            onClick={() => onRemove(idx)}
                                        >
                                            ×
                                        </span>
                                        {selected}
                                    </li>
                                ))}
                            </ul>
                        </span>
                    </span>
                    <span className="dropdown-wrapper" aria-hidden="true" />
                </span>
                <span
                    className="select2-container select2-container--default select2-container--open"
                    style={{
                        top,
                        position: 'absolute',
                        display: open ? 'block' : 'none',
                        left: 0,
                    }}
                >
                    <span className="select2-dropdown select2-dropdown--below">
                        <span className="select2-results">
                            <ul
                                className="select2-results__options"
                                role="listbox"
                                aria-multiselectable="true"
                                id="select2-select2Multiple-results"
                                aria-expanded="true"
                                aria-hidden="false"
                            >
                                <li
                                    className="select2-results__option"
                                    role="group"
                                    aria-label="Alaskan/Hawaiian Time Zone"
                                    data-select2-id={101}
                                >
                                    <ul className="select2-results__options select2-results__options--nested">
                                        {data.length ? (
                                            data?.map((element: any, idx: number) => (
                                                <li
                                                    key={idx}
                                                    onMouseEnter={() => setFocused(idx)}
                                                    onClick={() => handleClick(element)}
                                                    aria-selected={selecteds.includes(
                                                        element.label
                                                    )}
                                                    className={
                                                        focused === idx
                                                            ? 'select2-results__option select2-results__option--highlighted'
                                                            : 'select2-results__option'
                                                    }
                                                >
                                                    {element.label}
                                                </li>
                                            ))
                                        ) : (
                                            <li className="select2-results__option">
                                                {t(config.error?.message || 'No data found')}
                                            </li>
                                        )}
                                    </ul>
                                </li>
                            </ul>
                        </span>
                    </span>
                </span>
            </div>
        </>
    );
};
