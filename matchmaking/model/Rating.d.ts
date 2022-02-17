import IModel from '../../core/interface/IModel';
export default class Rating implements IModel {
    private ratingId;
    private name;
    private userId;
    private rateValue;
    private createdAt;
    private updatedAt;
    getRatingId(): string | null;
    setRatingId(ratingId: string | null): this;
    withRatingId(ratingId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getRateValue(): number | null;
    setRateValue(rateValue: number | null): this;
    withRateValue(rateValue: number | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Rating | null;
    toDict(): {
        [key: string]: any;
    };
}
