import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

import { IDataState, IData } from '../models/models';

const initialState: IDataState = {
    data: null,
    isLoading: false,
    isError: false,
    error: '',
    sortName: '',
    itemId: 0,
    itemName: '',
    itemModel: '',
    itemPrice: '',
    changeArr: null,
    arrChangeValue: null,
};

export const dataSlice = createSlice({
    name: 'cars',
    initialState: initialState,
    reducers: {
        dataFetch(state: Draft<IDataState>) {
            return { ...state, isLoading: true };
        },
        dataFetchFailure(state: Draft<IDataState>, action: PayloadAction<string>) {
            return { ...state, isLoading: false, isError: true, error: action.payload };
        },
        dataFetchSuccess(state: Draft<IDataState>, action: PayloadAction<Array<IData>>) {
            return { ...state, isLoading: false, data: action.payload };
        },
        addSortName(state: Draft<IDataState>, action: PayloadAction<string>) {
            return { ...state, sortName: action.payload };
        },
        addItemId(state: Draft<IDataState>, action: PayloadAction<number>) {
            return { ...state, itemId: action.payload };
        },
        addItemName(state: Draft<IDataState>, action: PayloadAction<string>) {
            return { ...state, itemName: action.payload };
        },
        addItemModel(state: Draft<IDataState>, action: PayloadAction<string>) {
            return { ...state, itemModel: action.payload };
        },
        addItemPrice(state: Draft<IDataState>, action: PayloadAction<string>) {
            return { ...state, itemPrice: action.payload };
        },
        addSortArr(state: Draft<IDataState>, action: PayloadAction<Array<IData>>) {
            return { ...state, changeArr: action.payload };
        },
        changeSortData(state: Draft<IDataState>) {
            return {
                ...state,
                arrChangeValue: state.changeArr
                    ? state.changeArr.map((item: IData) => {
                          const newItem = { ...item };
                          if (item.id === state.itemId + 1) {
                              if (state.itemName !== '') {
                                  newItem.name = String(state.itemName);
                              }
                              if (state.itemModel !== '') {
                                  newItem.model = String(state.itemModel);
                              }
                              if (state.itemPrice !== '') {
                                  newItem.price = state.itemPrice;
                              }
                          }
                          return newItem;
                      })
                    : state.changeArr,
            };
        },
    },
});

export default dataSlice.reducer;
