import IRequest from '../../core/interface/IRequest';
import * as Gs2Showcase from '../model';
export default class RandomShowcaseBuyByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private showcaseName;
    private displayItemName;
    private userId;
    private quantity;
    private config;
    private duplicationAvoider;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getShowcaseName(): string | null;
    setShowcaseName(showcaseName: string | null): this;
    withShowcaseName(showcaseName: string | null): this;
    getDisplayItemName(): string | null;
    setDisplayItemName(displayItemName: string | null): this;
    withDisplayItemName(displayItemName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getQuantity(): number | null;
    setQuantity(quantity: number | null): this;
    withQuantity(quantity: number | null): this;
    getConfig(): Gs2Showcase.Config[] | null;
    setConfig(config: Gs2Showcase.Config[] | null): this;
    withConfig(config: Gs2Showcase.Config[] | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RandomShowcaseBuyByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
