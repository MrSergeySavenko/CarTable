import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../__data__/store';
import { fetchDataLow } from '../__data__/actions/carsData.actions';
import { CarsTable } from '../components/CarsTable/CarsTable';
import { SPadeWrapper } from './Cars.style';

export const App: React.FC = () => {
    const data = useSelector((state: RootState) => state.carsData.data);

    const dispatch = useDispatch();

    const getData = () => {
        dispatch(fetchDataLow() as any);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <SPadeWrapper className='App'>
            <CarsTable />
        </SPadeWrapper>
    );
};
