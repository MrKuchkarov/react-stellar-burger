import {IIngredient} from './ingredients';

export interface IOrderOwner {
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IOrder {
    ingredients: IIngredient[];
    _id: string;
    owner: IOrderOwner;
    status: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    number: number;
    price: number;
}

export interface IOrderResponse {
    success: boolean;
    name: string;
    order: IOrder;
}