import IRequest from '../../core/interface/IRequest';
import * as Gs2Script from '../model';
export default class CreateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private name;
    private description;
    private transactionSetting;
    private logSetting;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getTransactionSetting(): Gs2Script.TransactionSetting | null;
    setTransactionSetting(transactionSetting: Gs2Script.TransactionSetting | null): this;
    withTransactionSetting(transactionSetting: Gs2Script.TransactionSetting | null): this;
    getLogSetting(): Gs2Script.LogSetting | null;
    setLogSetting(logSetting: Gs2Script.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Script.LogSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
