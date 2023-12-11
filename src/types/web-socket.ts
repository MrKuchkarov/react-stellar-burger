export interface IWebSocketOrder {
    ingredients: string[];
    _id: string;
    status: string;
    number: number;
    createdAt: Date;
    updatedAt: Date;
    name?: string;
    showStatus: boolean;
    useUnOrders: boolean;
}

export interface IWebSocketResponse {
    success: boolean;
    orders: IWebSocketOrder[];
    total: number;
    totalToday: number;
}