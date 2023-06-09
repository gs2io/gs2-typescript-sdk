import IRequest from '../../core/interface/IRequest';
import * as Gs2Idle from '../model';
export default class UpdateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private description;
    private transactionSetting;
    private receiveScript;
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
    getTransactionSetting(): Gs2Idle.TransactionSetting | null;
    setTransactionSetting(transactionSetting: Gs2Idle.TransactionSetting | null): this;
    withTransactionSetting(transactionSetting: Gs2Idle.TransactionSetting | null): this;
    getReceiveScript(): Gs2Idle.ScriptSetting | null;
    setReceiveScript(receiveScript: Gs2Idle.ScriptSetting | null): this;
    withReceiveScript(receiveScript: Gs2Idle.ScriptSetting | null): this;
    getLogSetting(): Gs2Idle.LogSetting | null;
    setLogSetting(logSetting: Gs2Idle.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Idle.LogSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
