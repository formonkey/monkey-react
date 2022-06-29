import React, { useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useFileUpload } from 'use-file-upload';

import { useMonkeyConf, useStore, StoreKeys, Widgets } from '../../elements';
import { Avatar } from '../../elements/avatars';

export const MyProfile = () => {
    const { myProfile: conf } = useMonkeyConf();
    const [file, selectFile] = useFileUpload();

    const { get } = useStore();
    const { t } = useTranslation();
    const [data, setData] = useState<any>({});
    const [current, setCurrent] = useState(conf.tabs[0]?.name);
    const [widgetConf, setWidgetConf] = useState<any>(conf.tabs[0]);

    useEffect(() => {
        const profile = get(StoreKeys.Profile);

        if (profile) {
            setData(profile);
        }
    }, []);

    useEffect(() => {
        console.log('My profile file', file);
    }, [file]);

    return (
        <>
            <h4 className="fw-bold py-3 mb-4">
                <span className="text-muted fw-light">{t(conf.title)}</span>
            </h4>
            {/* Header */}
            <div className="row">
                <div className="col-12">
                    <div className="card mb-4">
                        <div className="user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-3">
                            <div className="flex-shrink-0 mt-n2 mx-sm-0 mx-auto">
                                <div className="d-block h-auto ms-0 ms-sm-4 rounded user-profile-img mt-sm-4">
                                    <Avatar
                                        name={data?.[conf.name]}
                                        lastName={data?.[conf.lastName]}
                                        size="xl"
                                        url={(file as any)?.source}
                                    />
                                </div>
                            </div>
                            <div className="flex-grow-1 mt-3 mt-sm-3">
                                <div className="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-4 flex-md-row flex-column gap-4">
                                    <div className="user-profile-info">
                                        <h4>{`${data[conf.name]} ${data[conf.lastName]}`}</h4>
                                        <div className="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-2">
                                            {conf.actions?.map((action: any, idx: number) =>
                                                action.type === 'upload' ? (
                                                    <button
                                                        key={idx}
                                                        type="button"
                                                        onClick={() =>
                                                            selectFile(
                                                                action.accept,
                                                                action.multiple
                                                            )
                                                        }
                                                        className="btn btn-sm btn-outline-secondary"
                                                    >
                                                        <span className="tf-icons bx bx-image" />
                                                        &nbsp; {t(action.label)}
                                                    </button>
                                                ) : null
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {conf.tabs.length > 1 ? (
                <div className="row">
                    <div className="col-md-12">
                        <ul className="nav nav-pills flex-column flex-sm-row mb-4">
                            {conf.tabs?.map((tab: any, idx: number) => (
                                <li
                                    key={idx}
                                    className="nav-item"
                                    onClick={() => {
                                        setWidgetConf(tab);
                                        setCurrent(tab.name);
                                    }}
                                >
                                    <span
                                        className={`nav-link cursor-pointer ${
                                            current === tab.name ? 'active' : ''
                                        }`}
                                    >
                                        <i className={`bx bx-${tab.icon}`} />
                                        {t(tab.label)}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : null}

            {widgetConf?.widgets && <Widgets id={data[conf.id]} conf={widgetConf} />}
        </>
    );
};
