import React from 'react';

export const File = ({ label, accept, multiple, name, onChange, parsed, t }: any) => {
    const handleChange = (e: any) => {
        let data: any[] = [];

        if (e.target.files) {
            const totalFiles = Array.from(e.target.files);

            totalFiles.forEach((_, idx) => {
                const file = e.target.files.item(idx);

                file.text().then((txt: string) => {
                    data = [...data, ...txt.split('\n').slice(0, txt.split('\n').length - 1)];

                    data = data.map((item: string) => {
                        if (typeof item === 'string') {
                            const tempData: any = {};
                            const tempItems = item.split(parsed.delimeter);
                            parsed.keys.map((key: string, idx: number) => {
                                tempData[key] = tempItems[idx];
                            });

                            return tempData;
                        } else {
                            return item;
                        }
                    });

                    if (idx === totalFiles.length - 1) {
                        onChange({ [name]: data });
                    }
                });
            });
        }
    };

    return (
        <div className="mb-3">
            <label htmlFor={`file-${name}`} className="btn btn btn-outline-primary">
                <i className="bx-upload bx bx-pie-chart-alt" />
                <span className="px-2 pt-2">{t(label)}</span>
            </label>
            <input
                type="file"
                accept={accept}
                id={`file-${name}`}
                multiple={multiple}
                onChange={handleChange}
                style={{ display: 'none' }}
            />
        </div>
    );
};
