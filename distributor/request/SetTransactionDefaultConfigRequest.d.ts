import IRequest from '../../core/interface/IRequest';
import * as Gs2Distributor from '../model';
export default class SetTransactionDefaultConfigRequest implements IRequest {
    private requestId;
    private contextStack;
    private accessToken;
    private config;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
    getConfig(): Gs2Distributor.Config[] | null;
    setConfig(config: Gs2Distributor.Config[] | null): this;
    withConfig(config: Gs2Distributor.Config[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SetTransactionDefaultConfigRequest;
    toDict(): {
        [key: string]: any;
    };
}
