import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../__data__/store';
import { SSortIcon } from './SortIcon.style';

interface IProps {
    sortClick: number;
}

export const SortIcon: React.FC<IProps> = ({ sortClick }) => {
    const { sortName } = useSelector((state: RootState) => state.carsData);

    const sortIcon = () => {
        if (sortClick === 2) {
            return <div>N...1</div>;
        } else {
            if (sortClick === 1) {
                return <div>1...N</div>;
            } else {
                return <div>random</div>;
            }
        }
    };

    return <SSortIcon>{sortIcon()}</SSortIcon>;
};
