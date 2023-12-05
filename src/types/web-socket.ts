export interface IWebSocketOrder {
    ingredients: string[];
    _id: string;
    status: string;
    number: number;
    createdAt: Date;
    updatedAt: Date;
    name?: string;
}

export interface IWebSocketResponse {
    success: boolean;
    orders: IWebSocketOrder[];
    total: number;
    totalToday: number;
}