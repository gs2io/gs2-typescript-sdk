import IRequest from '../../core/interface/IRequest';
import * as Gs2Realtime from '../model';
export default class CreateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private name;
    private description;
    private transactionSetting;
    private serverType;
    private serverSpec;
    private createNotification;
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
    getTransactionSetting(): Gs2Realtime.TransactionSetting | null;
    setTransactionSetting(transactionSetting: Gs2Realtime.TransactionSetting | null): this;
    withTransactionSetting(transactionSetting: Gs2Realtime.TransactionSetting | null): this;
    getServerType(): string | null;
    setServerType(serverType: string | null): this;
    withServerType(serverType: string | null): this;
    getServerSpec(): string | null;
    setServerSpec(serverSpec: string | null): this;
    withServerSpec(serverSpec: string | null): this;
    getCreateNotification(): Gs2Realtime.NotificationSetting | null;
    setCreateNotification(createNotification: Gs2Realtime.NotificationSetting | null): this;
    withCreateNotification(createNotification: Gs2Realtime.NotificationSetting | null): this;
    getLogSetting(): Gs2Realtime.LogSetting | null;
    setLogSetting(logSetting: Gs2Realtime.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Realtime.LogSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
