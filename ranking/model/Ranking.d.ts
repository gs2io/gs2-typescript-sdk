import IModel from '../../core/interface/IModel';
export default class Ranking implements IModel {
    private rank;
    private index;
    private categoryName;
    private userId;
    private score;
    private metadata;
    private createdAt;
    getRank(): number | null;
    setRank(rank: number | null): this;
    withRank(rank: number | null): this;
    getIndex(): number | null;
    setIndex(index: number | null): this;
    withIndex(index: number | null): this;
    getCategoryName(): string | null;
    setCategoryName(categoryName: string | null): this;
    withCategoryName(categoryName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getScore(): number | null;
    setScore(score: number | null): this;
    withScore(score: number | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Ranking | null;
    toDict(): {
        [key: string]: any;
    };
}
