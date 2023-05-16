export interface IData {
    id: number;
    name: string;
    model: string;
    year: string;
    color: string;
    price: string;
    latitude: number;
    longitude: number;
}

export interface IDataState {
    isLoading: boolean;
    isError: boolean;
    error: string;
    data: Array<IData> | null;
}
