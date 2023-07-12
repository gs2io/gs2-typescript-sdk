import IRequest from '../../core/interface/IRequest';
import * as Gs2LoginReward from '../model';
export default class CreateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private name;
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
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getTransactionSetting(): Gs2LoginReward.TransactionSetting | null;
    setTransactionSetting(transactionSetting: Gs2LoginReward.TransactionSetting | null): this;
    withTransactionSetting(transactionSetting: Gs2LoginReward.TransactionSetting | null): this;
    getReceiveScript(): Gs2LoginReward.ScriptSetting | null;
    setReceiveScript(receiveScript: Gs2LoginReward.ScriptSetting | null): this;
    withReceiveScript(receiveScript: Gs2LoginReward.ScriptSetting | null): this;
    getLogSetting(): Gs2LoginReward.LogSetting | null;
    setLogSetting(logSetting: Gs2LoginReward.LogSetting | null): this;
    withLogSetting(logSetting: Gs2LoginReward.LogSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
