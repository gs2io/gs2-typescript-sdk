import IModel from '../../core/interface/IModel';
import * as Gs2Log from '../../log/model';
export default class InGameLog implements IModel {
    private timestamp;
    private requestId;
    private userId;
    private tags;
    private payload;
    static isValid(grn: string): boolean;
    static createGrn(): string | null;
    getTimestamp(): number | null;
    setTimestamp(timestamp: number | null): this;
    withTimestamp(timestamp: number | null): this;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getTags(): Gs2Log.InGameLogTag[] | null;
    setTags(tags: Gs2Log.InGameLogTag[] | null): this;
    withTags(tags: Gs2Log.InGameLogTag[] | null): this;
    getPayload(): string | null;
    setPayload(payload: string | null): this;
    withPayload(payload: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InGameLog | null;
    toDict(): {
        [key: string]: any;
    };
}
