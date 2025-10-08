import IResult from '../../core/interface/IResult';
import * as Gs2Distributor from '../model';
export default class DistributeResult implements IResult {
    private distributeResource;
    private inboxNamespaceId;
    private result;
    getDistributeResource(): Gs2Distributor.DistributeResource | null;
    setDistributeResource(distributeResource: Gs2Distributor.DistributeResource | null): this;
    withDistributeResource(distributeResource: Gs2Distributor.DistributeResource | null): this;
    getInboxNamespaceId(): string | null;
    setInboxNamespaceId(inboxNamespaceId: string | null): this;
    withInboxNamespaceId(inboxNamespaceId: string | null): this;
    getResult(): string | null;
    setResult(result: string | null): this;
    withResult(result: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DistributeResult;
    toDict(): {
        [key: string]: any;
    };
}
