import IModel from '../../core/interface/IModel';
import NotificationSetting from './NotificationSetting';
import LogSetting from './LogSetting';
export default class Namespace implements IModel {
    private namespaceId;
    private name;
    private description;
    private joinNotification;
    private leaveNotification;
    private changeMemberNotification;
    private receiveRequestNotification;
    private removeRequestNotification;
    private logSetting;
    private createdAt;
    private updatedAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null): string | null;
    getNamespaceId(): string | null;
    setNamespaceId(namespaceId: string | null): this;
    withNamespaceId(namespaceId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getJoinNotification(): NotificationSetting | null;
    setJoinNotification(joinNotification: NotificationSetting | null): this;
    withJoinNotification(joinNotification: NotificationSetting | null): this;
    getLeaveNotification(): NotificationSetting | null;
    setLeaveNotification(leaveNotification: NotificationSetting | null): this;
    withLeaveNotification(leaveNotification: NotificationSetting | null): this;
    getChangeMemberNotification(): NotificationSetting | null;
    setChangeMemberNotification(changeMemberNotification: NotificationSetting | null): this;
    withChangeMemberNotification(changeMemberNotification: NotificationSetting | null): this;
    getReceiveRequestNotification(): NotificationSetting | null;
    setReceiveRequestNotification(receiveRequestNotification: NotificationSetting | null): this;
    withReceiveRequestNotification(receiveRequestNotification: NotificationSetting | null): this;
    getRemoveRequestNotification(): NotificationSetting | null;
    setRemoveRequestNotification(removeRequestNotification: NotificationSetting | null): this;
    withRemoveRequestNotification(removeRequestNotification: NotificationSetting | null): this;
    getLogSetting(): LogSetting | null;
    setLogSetting(logSetting: LogSetting | null): this;
    withLogSetting(logSetting: LogSetting | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Namespace | null;
    toDict(): {
        [key: string]: any;
    };
}