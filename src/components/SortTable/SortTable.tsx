import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../__data__/store';
import { dataSlice } from '../../__data__/reduser';
import { IData } from '../../__data__/models/models';
import { SortIcon } from '../SortIcon/SortIcon';
import { SSortItemWrapper, SSortText, SSortWrapper } from './SortTable.style';

interface IProps {
    sortData: Array<IData> | null;
    modified: Array<IData> | null;
    setSortData: (arr: Array<IData>) => void;
}

export const SortTable: React.FC<IProps> = ({ sortData, setSortData, modified }) => {
    const [sortClick, setSortClick] = useState(0);

    const { data, sortName } = useSelector((state: RootState) => state.carsData);

    const dispatch = useDispatch();

    const handleSort = (field: string) => {
        const name = field;
        if (data) {
            if (sortName === field) {
                if (sortClick === 0) {
                    if (sortData) {
                        const sortDataConstract = [...sortData].sort((a: any, b: any) =>
                            a[name] > b[name] ? 1 : -1
                        );
                        setSortData(sortDataConstract);
                        setSortClick(1);
                    }
                } else {
                    if (sortData) {
                        if (sortClick === 1) {
                            const sortDataConstract = [...sortData].sort((a: any, b: any) =>
                                b[field] > a[field] ? 1 : -1
                            );
                            setSortData(sortDataConstract);
                            setSortClick(2);
                        } else {
                            if (modified) {
                                setSortData(modified);
                            }
                            setSortClick(0);
                        }
                    }
                }
            } else {
                if (sortData) {
                    const sortDataConstract = [...sortData].sort((a: any, b: any) =>
                        a[name] > b[name] ? 1 : -1
                    );
                    setSortData(sortDataConstract);
                    setSortClick(1);
                }
            }
        }
    };

    const handleSortNameClicl = (name: string) => {
        dispatch(dataSlice.actions.addSortName(name));
        handleSort(name);
    };

    const handleRestart = () => {
        if (modified) {
            setSortData(modified);
            setSortClick(0);
        }
    };

    return (
        <>
            <SSortWrapper>
                <SSortItemWrapper onClick={() => handleSortNameClicl('year')}>
                    <SSortText>Сортировать по году производства</SSortText>
                    <SortIcon sortClick={sortClick} />
                </SSortItemWrapper>
                <SSortItemWrapper onClick={() => handleSortNameClicl('price')}>
                    <SSortText>Сортировать по цене</SSortText>
                    <SortIcon sortClick={sortClick} />
                </SSortItemWrapper>
                <button onClick={handleRestart}>Сбросить сортировку</button>
            </SSortWrapper>
        </>
    );
};
