import React from "react";

import { Routes, Route } from "react-router-dom";

import { GenericView, NoData, useMonkeyConf } from "../../elements";

export const PlatformRouter = () => {
    const {
        menu: { privacy, generic },
    } = useMonkeyConf();

    return (
        <Routes>
            {[...privacy, ...generic]?.map(
                (
                    element: { path: string; children: { path: string }[] },
                    index: number
                ) => {
                    return element.children ? (
                        element.children.map((child, idx) => (
                            <Route
                                key={`${index}-${idx}`}
                                element={<GenericView {...child} />}
                                path={`${element.path ?? ""}${child.path}`}
                            />
                        ))
                    ) : (
                        <Route
                            key={index}
                            path={element.path}
                            element={<GenericView {...element} />}
                        />
                    );
                }
            )}

            <Route path="*" element={<NoData />} />
        </Routes>
    );
};
