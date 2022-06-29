import React, { useEffect } from 'react';

export const AvatarGroups = ({ conf, data }: any) => {
    const getRandomColor = () => {
        const colors = conf.randomColors || ['dark'];

        return colors[Math.floor(Math.random() * colors.length)];
    };

    useEffect(() => {
        setTimeout(() => {
            [].slice
                .call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
                .map(function (tooltipTriggerEl) {
                    return new (window as any).bootstrap.Tooltip(tooltipTriggerEl);
                });
        }, 200);
    }, []);

    return (
        <ul className="list-unstyled m-0 d-flex align-items-center avatar-group">
            {data?.slice(0, 3).map((item: any, idx: number) => (
                <li
                    key={idx}
                    data-bs-toggle="tooltip"
                    data-popup="tooltip-custom"
                    data-bs-placement="top"
                    title={`${item?.[conf.name]} ${item?.[conf.lastName]}`}
                    className="avatar pull-up"
                >
                    {item.avatar ? (
                        <img
                            className="rounded-circle"
                            src="../../assets/img/avatars/5.png"
                            alt="Avatar"
                        />
                    ) : (
                        <span
                            className={`avatar-initial rounded-circle bg-label-${getRandomColor()}`}
                        >
                            {item?.[conf.name]?.[0] + item?.[conf.lastName]?.[0] ||
                                item?.[conf.name]?.[1]}
                        </span>
                    )}
                </li>
            ))}
            {data.length > 3 && (
                <div className="avatar">
                    <span className="avatar-initial rounded-circle pull-up bg-secondary">
                        {`+${data.length - 3}`}
                    </span>
                </div>
            )}
        </ul>
    );
};
