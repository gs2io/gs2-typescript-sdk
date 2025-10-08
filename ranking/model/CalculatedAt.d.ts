import IModel from '../../core/interface/IModel';
export default class CalculatedAt implements IModel {
    private categoryName;
    private calculatedAt;
    getCategoryName(): string | null;
    setCategoryName(categoryName: string | null): this;
    withCategoryName(categoryName: string | null): this;
    getCalculatedAt(): number | null;
    setCalculatedAt(calculatedAt: number | null): this;
    withCalculatedAt(calculatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CalculatedAt | null;
    toDict(): {
        [key: string]: any;
    };
}
