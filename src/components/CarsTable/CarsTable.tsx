import React, { useEffect, useState } from 'react';

import { uniqueKey } from '../../__data__/utils/utils';

import { useSelector } from 'react-redux';
import { RootState } from '../../__data__/store';
import { IData } from '../../__data__/models/models';
import { SCarsChars, SCarsTableItem, SCrossImg, SMainWrapper } from './CarsTable.style';

export const CarsTable: React.FC = () => {
    const data = useSelector((state: RootState) => state.carsData.data);

    const [modified, setModifide] = useState(data);

    useEffect(() => {
        setModifide(data);
        console.log(modified);
    }, [data]);

    const deleteItem = (i: number, sI: number) => {
        // @ts-ignore
        let cutArr = new Array<any>();
        let firstCutArr = modified?.slice(0, i);
        let secondCutArr = modified?.slice(i + 1, modified.length);
        cutArr = cutArr.concat(firstCutArr, secondCutArr);
        console.log(cutArr);
        setModifide(cutArr);
    };

    useEffect(() => {
        cardsTableRender();
    }, [modified]);

    const cardsTableRender = () => {
        return modified?.map((item: IData, i) => (
            <SCarsTableItem key={uniqueKey(item.name, i)}>
                <div>
                    <SCarsChars placeholder={String(item.id)} disabled={true} />
                    <SCarsChars placeholder={item.name} />
                    <SCarsChars placeholder={item.model} />
                    <SCarsChars placeholder={item.year} disabled={true} />
                    <SCarsChars placeholder={item.color} disabled={true} />
                    <SCarsChars placeholder={item.price} />
                </div>
                <SCrossImg onClick={() => deleteItem(i, i)}>Удалить</SCrossImg>
            </SCarsTableItem>
        ));
    };

    return (
        <>
            <SMainWrapper>{cardsTableRender()}</SMainWrapper>
        </>
    );
};
