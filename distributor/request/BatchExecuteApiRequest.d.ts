import IRequest from '../../core/interface/IRequest';
import * as Gs2Distributor from '../model';
export default class BatchExecuteApiRequest implements IRequest {
    private requestId;
    private contextStack;
    private requestPayloads;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getRequestPayloads(): Gs2Distributor.BatchRequestPayload[] | null;
    setRequestPayloads(requestPayloads: Gs2Distributor.BatchRequestPayload[] | null): this;
    withRequestPayloads(requestPayloads: Gs2Distributor.BatchRequestPayload[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): BatchExecuteApiRequest;
    toDict(): {
        [key: string]: any;
    };
}
