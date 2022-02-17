import IModel from '../../core/interface/IModel';
export default class RatingModel implements IModel {
    private ratingModelId;
    private name;
    private metadata;
    private volatility;
    getRatingModelId(): string | null;
    setRatingModelId(ratingModelId: string | null): this;
    withRatingModelId(ratingModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getVolatility(): number | null;
    setVolatility(volatility: number | null): this;
    withVolatility(volatility: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RatingModel | null;
    toDict(): {
        [key: string]: any;
    };
}
