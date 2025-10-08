import IRequest from '../../core/interface/IRequest';
import * as Gs2Distributor from '../model';
export default class CreateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private name;
    private description;
    private transactionSetting;
    private assumeUserId;
    private autoRunStampSheetNotification;
    private autoRunTransactionNotification;
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
    getTransactionSetting(): Gs2Distributor.TransactionSetting | null;
    setTransactionSetting(transactionSetting: Gs2Distributor.TransactionSetting | null): this;
    withTransactionSetting(transactionSetting: Gs2Distributor.TransactionSetting | null): this;
    getAssumeUserId(): string | null;
    setAssumeUserId(assumeUserId: string | null): this;
    withAssumeUserId(assumeUserId: string | null): this;
    getAutoRunStampSheetNotification(): Gs2Distributor.NotificationSetting | null;
    setAutoRunStampSheetNotification(autoRunStampSheetNotification: Gs2Distributor.NotificationSetting | null): this;
    withAutoRunStampSheetNotification(autoRunStampSheetNotification: Gs2Distributor.NotificationSetting | null): this;
    getAutoRunTransactionNotification(): Gs2Distributor.NotificationSetting | null;
    setAutoRunTransactionNotification(autoRunTransactionNotification: Gs2Distributor.NotificationSetting | null): this;
    withAutoRunTransactionNotification(autoRunTransactionNotification: Gs2Distributor.NotificationSetting | null): this;
    getLogSetting(): Gs2Distributor.LogSetting | null;
    setLogSetting(logSetting: Gs2Distributor.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Distributor.LogSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
