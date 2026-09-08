import IRequest from '../../core/interface/IRequest';
import * as Gs2Limit from '../model';
export default class CreateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private name;
    private description;
    private transactionSetting;
    private transactionSettingV2;
    private countUpScript;
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
    /** @deprecated */
    getTransactionSetting(): Gs2Limit.TransactionSetting | null;
    /** @deprecated */
    setTransactionSetting(transactionSetting: Gs2Limit.TransactionSetting | null): this;
    /** @deprecated */
    withTransactionSetting(transactionSetting: Gs2Limit.TransactionSetting | null): this;
    getTransactionSettingV2(): Gs2Limit.TransactionSettingV2 | null;
    setTransactionSettingV2(transactionSettingV2: Gs2Limit.TransactionSettingV2 | null): this;
    withTransactionSettingV2(transactionSettingV2: Gs2Limit.TransactionSettingV2 | null): this;
    getCountUpScript(): Gs2Limit.ScriptSetting | null;
    setCountUpScript(countUpScript: Gs2Limit.ScriptSetting | null): this;
    withCountUpScript(countUpScript: Gs2Limit.ScriptSetting | null): this;
    getLogSetting(): Gs2Limit.LogSetting | null;
    setLogSetting(logSetting: Gs2Limit.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Limit.LogSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
