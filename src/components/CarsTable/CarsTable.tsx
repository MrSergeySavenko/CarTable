import React, { useEffect, useState } from 'react';

import { uniqueKey } from '../../__data__/utils/utils';

import { useSelector } from 'react-redux';
import { RootState } from '../../__data__/store';
import { IData } from '../../__data__/models/models';
import { SCarsChars, SCarsTableItem, SCrossImg, SMainWrapper } from './CarsTable.style';
import { SortTable } from '../SortTable/SortTable';

interface IProps {
    sortData: Array<IData> | null;
    setSortData: (arr: Array<IData>) => void;
}

export const CarsTable: React.FC<IProps> = ({ sortData, setSortData }) => {
    const data = useSelector((state: RootState) => state.carsData.data);

    const [modified, setModifide] = useState(data);

    useEffect(() => {
        setModifide(data);
        console.log(modified);
    }, [data]);

    const deleteItem = (i: number) => {
        let cutArr = new Array<any>();
        let firstCutArr = sortData?.slice(0, i);
        let secondCutArr = sortData?.slice(i + 1, sortData.length);
        cutArr = cutArr.concat(firstCutArr, secondCutArr);
        console.log(cutArr);
        setSortData(cutArr);
        setModifide(cutArr);
    };

    useEffect(() => {
        cardsTableRender();
    }, [sortData]);

    const cardsTableRender = () => {
        return sortData?.map((item: IData, i) => (
            <SCarsTableItem key={uniqueKey(item.name, i)}>
                <div>
                    <SCarsChars placeholder={String(item.id)} disabled={true} />
                    <SCarsChars placeholder={item.name} />
                    <SCarsChars placeholder={item.model} />
                    <SCarsChars placeholder={item.year} disabled={true} />
                    <SCarsChars placeholder={item.color} disabled={true} />
                    <SCarsChars placeholder={item.price} />
                </div>
                <SCrossImg onClick={() => deleteItem(i)}>Удалить</SCrossImg>
            </SCarsTableItem>
        ));
    };

    return (
        <>
            <SortTable sortData={sortData} setSortData={setSortData} modified={modified} />
            <SMainWrapper>{cardsTableRender()}</SMainWrapper>
        </>
    );
};
