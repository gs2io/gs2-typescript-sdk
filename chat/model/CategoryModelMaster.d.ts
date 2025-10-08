import IModel from '../../core/interface/IModel';
export default class CategoryModelMaster implements IModel {
    private categoryModelId;
    private category;
    private description;
    private rejectAccessTokenPost;
    private createdAt;
    private updatedAt;
    private revision;
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
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getRejectAccessTokenPost(): string | null;
    setRejectAccessTokenPost(rejectAccessTokenPost: string | null): this;
    withRejectAccessTokenPost(rejectAccessTokenPost: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CategoryModelMaster | null;
    toDict(): {
        [key: string]: any;
    };
}
