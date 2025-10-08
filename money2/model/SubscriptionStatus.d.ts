import IModel from '../../core/interface/IModel';
import * as Gs2Money2 from '../../money2/model';
export default class SubscriptionStatus implements IModel {
    private userId;
    private contentName;
    private status;
    private expiresAt;
    private detail;
    static isValid(grn: string): boolean;
    static createGrn(): string | null;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getContentName(): string | null;
    setContentName(contentName: string | null): this;
    withContentName(contentName: string | null): this;
    getStatus(): string | null;
    setStatus(status: string | null): this;
    withStatus(status: string | null): this;
    getExpiresAt(): number | null;
    setExpiresAt(expiresAt: number | null): this;
    withExpiresAt(expiresAt: number | null): this;
    getDetail(): Gs2Money2.SubscribeTransaction[] | null;
    setDetail(detail: Gs2Money2.SubscribeTransaction[] | null): this;
    withDetail(detail: Gs2Money2.SubscribeTransaction[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SubscriptionStatus | null;
    toDict(): {
        [key: string]: any;
    };
}
