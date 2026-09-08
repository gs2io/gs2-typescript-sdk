import IRequest from '../../core/interface/IRequest';
import * as Gs2Enchant from '../model';
export default class UpdateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private description;
    private transactionSetting;
    private transactionSettingV2;
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
    getTransactionSetting(): Gs2Enchant.TransactionSetting | null;
    /** @deprecated */
    setTransactionSetting(transactionSetting: Gs2Enchant.TransactionSetting | null): this;
    /** @deprecated */
    withTransactionSetting(transactionSetting: Gs2Enchant.TransactionSetting | null): this;
    getTransactionSettingV2(): Gs2Enchant.TransactionSettingV2 | null;
    setTransactionSettingV2(transactionSettingV2: Gs2Enchant.TransactionSettingV2 | null): this;
    withTransactionSettingV2(transactionSettingV2: Gs2Enchant.TransactionSettingV2 | null): this;
    getLogSetting(): Gs2Enchant.LogSetting | null;
    setLogSetting(logSetting: Gs2Enchant.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Enchant.LogSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
