export type TIngredientType = 'bun' | 'main' | 'sauce';

export interface IIngredient {
    _id: string;
    name: string;
    type: TIngredientType;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
    uid?: string;
    key?: string;
}

export interface IIngredientResponse {
    success: boolean;
    data: IIngredient[];
}

export interface IIngredientsWithCount extends IIngredient {
    count: number;
}