import IRequest from '../../core/interface/IRequest';
import * as Gs2JobQueue from '../model';
export default class CreateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private name;
    private description;
    private transactionSetting;
    private enableAutoRun;
    private pushNotification;
    private runNotification;
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
    getTransactionSetting(): Gs2JobQueue.TransactionSetting | null;
    setTransactionSetting(transactionSetting: Gs2JobQueue.TransactionSetting | null): this;
    withTransactionSetting(transactionSetting: Gs2JobQueue.TransactionSetting | null): this;
    getEnableAutoRun(): boolean | null;
    setEnableAutoRun(enableAutoRun: boolean | null): this;
    withEnableAutoRun(enableAutoRun: boolean | null): this;
    getPushNotification(): Gs2JobQueue.NotificationSetting | null;
    setPushNotification(pushNotification: Gs2JobQueue.NotificationSetting | null): this;
    withPushNotification(pushNotification: Gs2JobQueue.NotificationSetting | null): this;
    getRunNotification(): Gs2JobQueue.NotificationSetting | null;
    setRunNotification(runNotification: Gs2JobQueue.NotificationSetting | null): this;
    withRunNotification(runNotification: Gs2JobQueue.NotificationSetting | null): this;
    getLogSetting(): Gs2JobQueue.LogSetting | null;
    setLogSetting(logSetting: Gs2JobQueue.LogSetting | null): this;
    withLogSetting(logSetting: Gs2JobQueue.LogSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
