import IRequest from '../../core/interface/IRequest';
import * as Gs2Ranking2 from '../model';
export default class UpdateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private description;
    private transactionSetting;
    private logSetting;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getTransactionSetting(): Gs2Ranking2.TransactionSetting | null;
    setTransactionSetting(transactionSetting: Gs2Ranking2.TransactionSetting | null): this;
    withTransactionSetting(transactionSetting: Gs2Ranking2.TransactionSetting | null): this;
    getLogSetting(): Gs2Ranking2.LogSetting | null;
    setLogSetting(logSetting: Gs2Ranking2.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Ranking2.LogSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
