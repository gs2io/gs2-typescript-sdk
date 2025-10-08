import IModel from '../../core/interface/IModel';
export default class CategoryModel implements IModel {
    private categoryModelId;
    private category;
    private rejectAccessTokenPost;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getCategory(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, category: string | null): string | null;
    getCategoryModelId(): string | null;
    setCategoryModelId(categoryModelId: string | null): this;
    withCategoryModelId(categoryModelId: string | null): this;
    getCategory(): number | null;
    setCategory(category: number | null): this;
    withCategory(category: number | null): this;
    getRejectAccessTokenPost(): string | null;
    setRejectAccessTokenPost(rejectAccessTokenPost: string | null): this;
    withRejectAccessTokenPost(rejectAccessTokenPost: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CategoryModel | null;
    toDict(): {
        [key: string]: any;
    };
}
