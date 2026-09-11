import IRequest from '../../core/interface/IRequest';
import * as Gs2Gateway from '../model';
export default class CreateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private name;
    private description;
    private transactionSetting;
    private transactionSettingV2;
    private firebaseSecret;
    private firebaseProjectId;
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
    getTransactionSetting(): Gs2Gateway.TransactionSetting | null;
    /** @deprecated */
    setTransactionSetting(transactionSetting: Gs2Gateway.TransactionSetting | null): this;
    /** @deprecated */
    withTransactionSetting(transactionSetting: Gs2Gateway.TransactionSetting | null): this;
    getTransactionSettingV2(): Gs2Gateway.TransactionSettingV2 | null;
    setTransactionSettingV2(transactionSettingV2: Gs2Gateway.TransactionSettingV2 | null): this;
    withTransactionSettingV2(transactionSettingV2: Gs2Gateway.TransactionSettingV2 | null): this;
    /** @deprecated */
    getFirebaseSecret(): string | null;
    /** @deprecated */
    setFirebaseSecret(firebaseSecret: string | null): this;
    /** @deprecated */
    withFirebaseSecret(firebaseSecret: string | null): this;
    getFirebaseProjectId(): string | null;
    setFirebaseProjectId(firebaseProjectId: string | null): this;
    withFirebaseProjectId(firebaseProjectId: string | null): this;
    getLogSetting(): Gs2Gateway.LogSetting | null;
    setLogSetting(logSetting: Gs2Gateway.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Gateway.LogSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
