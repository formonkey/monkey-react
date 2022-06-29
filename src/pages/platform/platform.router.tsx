import React, { Routes, Route } from 'react-router-dom';

import { MyProfile } from '../my-profile';
import { GenericDetail, GenericView, NoData, useMonkeyConf } from '../../elements';

export const PlatformRouter = () => {
    const {
        menu: { privacy, generic },
    } = useMonkeyConf();

    return (
        <Routes>
            {[...privacy, ...generic]?.map((element: any, index: number) => {
                return element.children ? (
                    element.children.map((child: any, idx: number) => {
                        return (
                            <>
                                <Route
                                    key={`${index}-${idx}`}
                                    element={<GenericView {...child} />}
                                    path={`${element.path ?? ''}${child.path}`}
                                />

                                {child.actions?.custom?.length
                                    ? child.actions.custom.map((action: any, cidx: number) => (
                                          <Route
                                              key={`${index}-${idx}-${cidx}`}
                                              element={<GenericDetail {...action} />}
                                              path={action.path}
                                          />
                                      ))
                                    : null}
                            </>
                        );
                    })
                ) : (
                    <>
                        <Route
                            key={index}
                            path={element.path}
                            element={<GenericView {...element} />}
                        />

                        {element.actions?.custom?.length
                            ? element.actions.custom.map((action: any, idx: number) => (
                                  <Route
                                      key={`${idx}`}
                                      path={action.path}
                                      element={<GenericDetail action={action} config={element} />}
                                  />
                              ))
                            : null}
                    </>
                );
            })}

            <Route path="my-profile" element={<MyProfile />} />

            <Route path="*" element={<NoData />} />
        </Routes>
    );
};
