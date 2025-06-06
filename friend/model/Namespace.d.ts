import IModel from '../../core/interface/IModel';
import * as Gs2Friend from '../../friend/model';
export default class Namespace implements IModel {
    private namespaceId;
    private name;
    private description;
    private followScript;
    private unfollowScript;
    private sendRequestScript;
    private cancelRequestScript;
    private acceptRequestScript;
    private rejectRequestScript;
    private deleteFriendScript;
    private updateProfileScript;
    private followNotification;
    private receiveRequestNotification;
    private cancelRequestNotification;
    private acceptRequestNotification;
    private rejectRequestNotification;
    private deleteFriendNotification;
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
    getFollowScript(): Gs2Friend.ScriptSetting | null;
    setFollowScript(followScript: Gs2Friend.ScriptSetting | null): this;
    withFollowScript(followScript: Gs2Friend.ScriptSetting | null): this;
    getUnfollowScript(): Gs2Friend.ScriptSetting | null;
    setUnfollowScript(unfollowScript: Gs2Friend.ScriptSetting | null): this;
    withUnfollowScript(unfollowScript: Gs2Friend.ScriptSetting | null): this;
    getSendRequestScript(): Gs2Friend.ScriptSetting | null;
    setSendRequestScript(sendRequestScript: Gs2Friend.ScriptSetting | null): this;
    withSendRequestScript(sendRequestScript: Gs2Friend.ScriptSetting | null): this;
    getCancelRequestScript(): Gs2Friend.ScriptSetting | null;
    setCancelRequestScript(cancelRequestScript: Gs2Friend.ScriptSetting | null): this;
    withCancelRequestScript(cancelRequestScript: Gs2Friend.ScriptSetting | null): this;
    getAcceptRequestScript(): Gs2Friend.ScriptSetting | null;
    setAcceptRequestScript(acceptRequestScript: Gs2Friend.ScriptSetting | null): this;
    withAcceptRequestScript(acceptRequestScript: Gs2Friend.ScriptSetting | null): this;
    getRejectRequestScript(): Gs2Friend.ScriptSetting | null;
    setRejectRequestScript(rejectRequestScript: Gs2Friend.ScriptSetting | null): this;
    withRejectRequestScript(rejectRequestScript: Gs2Friend.ScriptSetting | null): this;
    getDeleteFriendScript(): Gs2Friend.ScriptSetting | null;
    setDeleteFriendScript(deleteFriendScript: Gs2Friend.ScriptSetting | null): this;
    withDeleteFriendScript(deleteFriendScript: Gs2Friend.ScriptSetting | null): this;
    getUpdateProfileScript(): Gs2Friend.ScriptSetting | null;
    setUpdateProfileScript(updateProfileScript: Gs2Friend.ScriptSetting | null): this;
    withUpdateProfileScript(updateProfileScript: Gs2Friend.ScriptSetting | null): this;
    getFollowNotification(): Gs2Friend.NotificationSetting | null;
    setFollowNotification(followNotification: Gs2Friend.NotificationSetting | null): this;
    withFollowNotification(followNotification: Gs2Friend.NotificationSetting | null): this;
    getReceiveRequestNotification(): Gs2Friend.NotificationSetting | null;
    setReceiveRequestNotification(receiveRequestNotification: Gs2Friend.NotificationSetting | null): this;
    withReceiveRequestNotification(receiveRequestNotification: Gs2Friend.NotificationSetting | null): this;
    getCancelRequestNotification(): Gs2Friend.NotificationSetting | null;
    setCancelRequestNotification(cancelRequestNotification: Gs2Friend.NotificationSetting | null): this;
    withCancelRequestNotification(cancelRequestNotification: Gs2Friend.NotificationSetting | null): this;
    getAcceptRequestNotification(): Gs2Friend.NotificationSetting | null;
    setAcceptRequestNotification(acceptRequestNotification: Gs2Friend.NotificationSetting | null): this;
    withAcceptRequestNotification(acceptRequestNotification: Gs2Friend.NotificationSetting | null): this;
    getRejectRequestNotification(): Gs2Friend.NotificationSetting | null;
    setRejectRequestNotification(rejectRequestNotification: Gs2Friend.NotificationSetting | null): this;
    withRejectRequestNotification(rejectRequestNotification: Gs2Friend.NotificationSetting | null): this;
    getDeleteFriendNotification(): Gs2Friend.NotificationSetting | null;
    setDeleteFriendNotification(deleteFriendNotification: Gs2Friend.NotificationSetting | null): this;
    withDeleteFriendNotification(deleteFriendNotification: Gs2Friend.NotificationSetting | null): this;
    getLogSetting(): Gs2Friend.LogSetting | null;
    setLogSetting(logSetting: Gs2Friend.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Friend.LogSetting | null): this;
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
