import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../__data__/store';
import { fetchDataLow } from '../__data__/actions/carsData.actions';
import { CarsTable } from '../components/CarsTable/CarsTable';
import { SPadeWrapper } from './Cars.style';
import { dataSlice } from '../__data__/reduser';

export const Cars: React.FC = () => {
    const { data, changeArr } = useSelector((state: RootState) => state.carsData);

    const [sortData, setSortData] = useState(data);

    const dispatch = useDispatch();

    const getData = () => {
        dispatch(fetchDataLow() as any);
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        setSortData(data);
        if (sortData) {
            dispatch(dataSlice.actions.addSortArr(sortData));
        }
        console.log(changeArr);
    }, [data]);

    return (
        <SPadeWrapper className='App'>
            <CarsTable sortData={sortData} setSortData={setSortData} />
        </SPadeWrapper>
    );
};
