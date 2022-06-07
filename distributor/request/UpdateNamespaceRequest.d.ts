import IRequest from '../../core/interface/IRequest';
import * as Gs2Distributor from '../model';
export default class UpdateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private description;
    private assumeUserId;
    private autoRunStampSheetNotification;
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
    getAssumeUserId(): string | null;
    setAssumeUserId(assumeUserId: string | null): this;
    withAssumeUserId(assumeUserId: string | null): this;
    getAutoRunStampSheetNotification(): Gs2Distributor.NotificationSetting | null;
    setAutoRunStampSheetNotification(autoRunStampSheetNotification: Gs2Distributor.NotificationSetting | null): this;
    withAutoRunStampSheetNotification(autoRunStampSheetNotification: Gs2Distributor.NotificationSetting | null): this;
    getLogSetting(): Gs2Distributor.LogSetting | null;
    setLogSetting(logSetting: Gs2Distributor.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Distributor.LogSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
