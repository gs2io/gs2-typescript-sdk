import IRequest from '../../core/interface/IRequest';
import * as Gs2Showcase from '../model';
export default class BuyByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private showcaseName;
    private displayItemId;
    private userId;
    private config;
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
    getDisplayItemId(): string | null;
    setDisplayItemId(displayItemId: string | null): this;
    withDisplayItemId(displayItemId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getConfig(): Gs2Showcase.Config[] | null;
    setConfig(config: Gs2Showcase.Config[] | null): this;
    withConfig(config: Gs2Showcase.Config[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): BuyByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}