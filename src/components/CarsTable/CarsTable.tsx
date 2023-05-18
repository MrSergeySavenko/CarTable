import React, { useEffect, useState } from 'react';

import { uniqueKey } from '../../__data__/utils/utils';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../__data__/store';
import { IData } from '../../__data__/models/models';
import { SButton, SCarsChars, SCarsTableItem, SMainWrapper, SItemWrapper } from './CarsTable.style';
import { SortTable } from '../SortTable/SortTable';
import { dataSlice } from '../../__data__/reduser';

interface IProps {
    sortData: Array<IData> | null;
    setSortData: (arr: Array<IData>) => void;
}

export const CarsTable: React.FC<IProps> = ({ sortData, setSortData }) => {
    const [changeName, setChangeName] = useState('');
    const [changeModel, setChangeModel] = useState('');
    const [changePrice, setChangePrice] = useState('');

    const { data, itemId, itemName, arrChangeValue, changeArr } = useSelector(
        (state: RootState) => state.carsData
    );

    const dispatch = useDispatch();

    const deleteItem = (i: number) => {
        let cutArr = new Array<any>();
        let firstCutArr = sortData?.slice(0, i);
        let secondCutArr = sortData?.slice(i + 1, sortData.length);
        cutArr = cutArr.concat(firstCutArr, secondCutArr);
        setSortData(cutArr);
    };

    useEffect(() => {
        cardsTableRender();
        if (sortData) {
            dispatch(dataSlice.actions.addSortArr(sortData));
        }
    }, [sortData]);

    const saveChange = (i: number, name: string, model: string, price: string, arr: Array<IData>) => {
        dispatch(dataSlice.actions.addItemId(i));
        dispatch(dataSlice.actions.addItemName(name));
        dispatch(dataSlice.actions.addItemModel(model));
        dispatch(dataSlice.actions.addItemPrice(price));
        dispatch(dataSlice.actions.addSortArr(arr));
        dispatch(dataSlice.actions.changeSortData());
    };

    const findOnMap = (latitude: number, longitude: number) => {
        const map = `https://yandex.ru/maps/?mode=search&text=${latitude}%2C${longitude}`;
        return map;
    };

    const renderCars = (arr: Array<IData> | null) => {
        return arr?.map((item: IData, i) => (
            <SCarsTableItem key={uniqueKey(item.name, i)}>
                <SItemWrapper input={true}>
                    <SCarsChars placeholder={String(item.id)} disabled={true} />
                    <SCarsChars placeholder={item.name} onChange={(e) => setChangeName(e.target.value)} />
                    <SCarsChars placeholder={item.model} onChange={(e) => setChangeModel(e.target.value)} />
                    <SCarsChars placeholder={item.year} disabled={true} />
                    <SCarsChars placeholder={item.color} disabled={true} />
                    <SCarsChars
                        placeholder={String(item.price)}
                        onChange={(e) => setChangePrice(e.target.value)}
                    />
                </SItemWrapper>
                <SItemWrapper input={false}>
                    <SButton onClick={() => saveChange(i, changeName, changeModel, changePrice, arr)}>
                        Сохранить измененные данные
                    </SButton>
                    <SButton onClick={() => deleteItem(i)}>Удалить карточку</SButton>
                    <a href={findOnMap(item.latitude, item.longitude)}>Показать на карте</a>
                </SItemWrapper>
            </SCarsTableItem>
        ));
    };

    const cardsTableRender = () => {
        return arrChangeValue ? renderCars(arrChangeValue) : renderCars(sortData);
    };

    return (
        <>
            <SortTable sortData={sortData} setSortData={setSortData} />
            <SMainWrapper>{cardsTableRender()}</SMainWrapper>
        </>
    );
};
