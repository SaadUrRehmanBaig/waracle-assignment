interface IApiResponse<T> {
    data: T;
    message: string;
    status: boolean;
}

interface ICakeData {
    _id: string;
    name: string;
    comment: string;
    imageUrl: string;
    yumFactor: number;
}

export interface ICakeListResponse extends IApiResponse<ICakeData[]> { }