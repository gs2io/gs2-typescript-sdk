import IRequest from '../../core/interface/IRequest';
import * as Gs2LoginReward from '../model';
export default class UpdateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private description;
    private transactionSetting;
    private transactionSettingV2;
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
    /** @deprecated */
    getTransactionSetting(): Gs2LoginReward.TransactionSetting | null;
    /** @deprecated */
    setTransactionSetting(transactionSetting: Gs2LoginReward.TransactionSetting | null): this;
    /** @deprecated */
    withTransactionSetting(transactionSetting: Gs2LoginReward.TransactionSetting | null): this;
    getTransactionSettingV2(): Gs2LoginReward.TransactionSettingV2 | null;
    setTransactionSettingV2(transactionSettingV2: Gs2LoginReward.TransactionSettingV2 | null): this;
    withTransactionSettingV2(transactionSettingV2: Gs2LoginReward.TransactionSettingV2 | null): this;
    getReceiveScript(): Gs2LoginReward.ScriptSetting | null;
    setReceiveScript(receiveScript: Gs2LoginReward.ScriptSetting | null): this;
    withReceiveScript(receiveScript: Gs2LoginReward.ScriptSetting | null): this;
    getLogSetting(): Gs2LoginReward.LogSetting | null;
    setLogSetting(logSetting: Gs2LoginReward.LogSetting | null): this;
    withLogSetting(logSetting: Gs2LoginReward.LogSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
