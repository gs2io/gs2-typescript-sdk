import IRequest from '../../core/interface/IRequest';
import * as Gs2Realtime from '../model';
export default class CreateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private name;
    private description;
    private transactionSetting;
    private transactionSettingV2;
    private serverType;
    private serverSpec;
    private syncSetting;
    private stateMachineSetting;
    private participantSetting;
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
    /** @deprecated */
    getTransactionSetting(): Gs2Realtime.TransactionSetting | null;
    /** @deprecated */
    setTransactionSetting(transactionSetting: Gs2Realtime.TransactionSetting | null): this;
    /** @deprecated */
    withTransactionSetting(transactionSetting: Gs2Realtime.TransactionSetting | null): this;
    getTransactionSettingV2(): Gs2Realtime.TransactionSettingV2 | null;
    setTransactionSettingV2(transactionSettingV2: Gs2Realtime.TransactionSettingV2 | null): this;
    withTransactionSettingV2(transactionSettingV2: Gs2Realtime.TransactionSettingV2 | null): this;
    getServerType(): string | null;
    setServerType(serverType: string | null): this;
    withServerType(serverType: string | null): this;
    getServerSpec(): string | null;
    setServerSpec(serverSpec: string | null): this;
    withServerSpec(serverSpec: string | null): this;
    getSyncSetting(): Gs2Realtime.SyncSetting | null;
    setSyncSetting(syncSetting: Gs2Realtime.SyncSetting | null): this;
    withSyncSetting(syncSetting: Gs2Realtime.SyncSetting | null): this;
    getStateMachineSetting(): Gs2Realtime.StateMachineSetting | null;
    setStateMachineSetting(stateMachineSetting: Gs2Realtime.StateMachineSetting | null): this;
    withStateMachineSetting(stateMachineSetting: Gs2Realtime.StateMachineSetting | null): this;
    getParticipantSetting(): Gs2Realtime.ParticipantSetting | null;
    setParticipantSetting(participantSetting: Gs2Realtime.ParticipantSetting | null): this;
    withParticipantSetting(participantSetting: Gs2Realtime.ParticipantSetting | null): this;
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
