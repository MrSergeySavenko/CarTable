import React from 'react';

import { uniqueKey } from '../../__data__/utils/utils';

import { useSelector } from 'react-redux';
import { RootState } from '../../__data__/store';
import { IData } from '../../__data__/models/models';
import { SCarsChars, SCarsTableItem, SCrossImg, SMainWrapper } from './CarsTable.style';

export const CarsTable: React.FC = () => {
    const data = useSelector((state: RootState) => state.carsData.data);

    const cardsTableRender = () => {
        return data?.map((item: IData, i) => (
            <SCarsTableItem key={uniqueKey(item.name, i)}>
                <div>
                    <SCarsChars placeholder={String(item.id)} />
                    <SCarsChars placeholder={item.name} />
                    <SCarsChars placeholder={item.model} />
                    <SCarsChars placeholder={item.year} />
                    <SCarsChars placeholder={item.color} />
                    <SCarsChars placeholder={item.price} />
                </div>
                <SCrossImg>Закрыть</SCrossImg>
            </SCarsTableItem>
        ));
    };

    return (
        <>
            <SMainWrapper>{cardsTableRender()}</SMainWrapper>
        </>
    );
};
