/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */

import IModel from '../../core/interface/IModel';

import * as Gs2Friend from '../../friend/model'
import TransactionSetting from './TransactionSetting';
import ScriptSetting from './ScriptSetting';
import NotificationSetting from './NotificationSetting';
import LogSetting from './LogSetting';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:friend:{namespaceName}";

export default class Namespace implements IModel {
    private namespaceId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private transactionSetting: Gs2Friend.TransactionSetting|null = null;
    private followScript: Gs2Friend.ScriptSetting|null = null;
    private unfollowScript: Gs2Friend.ScriptSetting|null = null;
    private sendRequestScript: Gs2Friend.ScriptSetting|null = null;
    private cancelRequestScript: Gs2Friend.ScriptSetting|null = null;
    private acceptRequestScript: Gs2Friend.ScriptSetting|null = null;
    private rejectRequestScript: Gs2Friend.ScriptSetting|null = null;
    private deleteFriendScript: Gs2Friend.ScriptSetting|null = null;
    private updateProfileScript: Gs2Friend.ScriptSetting|null = null;
    private followNotification: Gs2Friend.NotificationSetting|null = null;
    private receiveRequestNotification: Gs2Friend.NotificationSetting|null = null;
    private cancelRequestNotification: Gs2Friend.NotificationSetting|null = null;
    private acceptRequestNotification: Gs2Friend.NotificationSetting|null = null;
    private rejectRequestNotification: Gs2Friend.NotificationSetting|null = null;
    private deleteFriendNotification: Gs2Friend.NotificationSetting|null = null;
    private logSetting: Gs2Friend.LogSetting|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getOwnerId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getNamespaceName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static isValid(grn: string): boolean {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '');
    }
    public getNamespaceId(): string|null {
        return this.namespaceId;
    }
    public setNamespaceId(namespaceId: string|null) {
        this.namespaceId = namespaceId;
        return this;
    }
    public withNamespaceId(namespaceId: string|null): this {
        this.namespaceId = namespaceId;
        return this;
    }
    public getName(): string|null {
        return this.name;
    }
    public setName(name: string|null) {
        this.name = name;
        return this;
    }
    public withName(name: string|null): this {
        this.name = name;
        return this;
    }
    public getDescription(): string|null {
        return this.description;
    }
    public setDescription(description: string|null) {
        this.description = description;
        return this;
    }
    public withDescription(description: string|null): this {
        this.description = description;
        return this;
    }
    public getTransactionSetting(): Gs2Friend.TransactionSetting|null {
        return this.transactionSetting;
    }
    public setTransactionSetting(transactionSetting: Gs2Friend.TransactionSetting|null) {
        this.transactionSetting = transactionSetting;
        return this;
    }
    public withTransactionSetting(transactionSetting: Gs2Friend.TransactionSetting|null): this {
        this.transactionSetting = transactionSetting;
        return this;
    }
    public getFollowScript(): Gs2Friend.ScriptSetting|null {
        return this.followScript;
    }
    public setFollowScript(followScript: Gs2Friend.ScriptSetting|null) {
        this.followScript = followScript;
        return this;
    }
    public withFollowScript(followScript: Gs2Friend.ScriptSetting|null): this {
        this.followScript = followScript;
        return this;
    }
    public getUnfollowScript(): Gs2Friend.ScriptSetting|null {
        return this.unfollowScript;
    }
    public setUnfollowScript(unfollowScript: Gs2Friend.ScriptSetting|null) {
        this.unfollowScript = unfollowScript;
        return this;
    }
    public withUnfollowScript(unfollowScript: Gs2Friend.ScriptSetting|null): this {
        this.unfollowScript = unfollowScript;
        return this;
    }
    public getSendRequestScript(): Gs2Friend.ScriptSetting|null {
        return this.sendRequestScript;
    }
    public setSendRequestScript(sendRequestScript: Gs2Friend.ScriptSetting|null) {
        this.sendRequestScript = sendRequestScript;
        return this;
    }
    public withSendRequestScript(sendRequestScript: Gs2Friend.ScriptSetting|null): this {
        this.sendRequestScript = sendRequestScript;
        return this;
    }
    public getCancelRequestScript(): Gs2Friend.ScriptSetting|null {
        return this.cancelRequestScript;
    }
    public setCancelRequestScript(cancelRequestScript: Gs2Friend.ScriptSetting|null) {
        this.cancelRequestScript = cancelRequestScript;
        return this;
    }
    public withCancelRequestScript(cancelRequestScript: Gs2Friend.ScriptSetting|null): this {
        this.cancelRequestScript = cancelRequestScript;
        return this;
    }
    public getAcceptRequestScript(): Gs2Friend.ScriptSetting|null {
        return this.acceptRequestScript;
    }
    public setAcceptRequestScript(acceptRequestScript: Gs2Friend.ScriptSetting|null) {
        this.acceptRequestScript = acceptRequestScript;
        return this;
    }
    public withAcceptRequestScript(acceptRequestScript: Gs2Friend.ScriptSetting|null): this {
        this.acceptRequestScript = acceptRequestScript;
        return this;
    }
    public getRejectRequestScript(): Gs2Friend.ScriptSetting|null {
        return this.rejectRequestScript;
    }
    public setRejectRequestScript(rejectRequestScript: Gs2Friend.ScriptSetting|null) {
        this.rejectRequestScript = rejectRequestScript;
        return this;
    }
    public withRejectRequestScript(rejectRequestScript: Gs2Friend.ScriptSetting|null): this {
        this.rejectRequestScript = rejectRequestScript;
        return this;
    }
    public getDeleteFriendScript(): Gs2Friend.ScriptSetting|null {
        return this.deleteFriendScript;
    }
    public setDeleteFriendScript(deleteFriendScript: Gs2Friend.ScriptSetting|null) {
        this.deleteFriendScript = deleteFriendScript;
        return this;
    }
    public withDeleteFriendScript(deleteFriendScript: Gs2Friend.ScriptSetting|null): this {
        this.deleteFriendScript = deleteFriendScript;
        return this;
    }
    public getUpdateProfileScript(): Gs2Friend.ScriptSetting|null {
        return this.updateProfileScript;
    }
    public setUpdateProfileScript(updateProfileScript: Gs2Friend.ScriptSetting|null) {
        this.updateProfileScript = updateProfileScript;
        return this;
    }
    public withUpdateProfileScript(updateProfileScript: Gs2Friend.ScriptSetting|null): this {
        this.updateProfileScript = updateProfileScript;
        return this;
    }
    public getFollowNotification(): Gs2Friend.NotificationSetting|null {
        return this.followNotification;
    }
    public setFollowNotification(followNotification: Gs2Friend.NotificationSetting|null) {
        this.followNotification = followNotification;
        return this;
    }
    public withFollowNotification(followNotification: Gs2Friend.NotificationSetting|null): this {
        this.followNotification = followNotification;
        return this;
    }
    public getReceiveRequestNotification(): Gs2Friend.NotificationSetting|null {
        return this.receiveRequestNotification;
    }
    public setReceiveRequestNotification(receiveRequestNotification: Gs2Friend.NotificationSetting|null) {
        this.receiveRequestNotification = receiveRequestNotification;
        return this;
    }
    public withReceiveRequestNotification(receiveRequestNotification: Gs2Friend.NotificationSetting|null): this {
        this.receiveRequestNotification = receiveRequestNotification;
        return this;
    }
    public getCancelRequestNotification(): Gs2Friend.NotificationSetting|null {
        return this.cancelRequestNotification;
    }
    public setCancelRequestNotification(cancelRequestNotification: Gs2Friend.NotificationSetting|null) {
        this.cancelRequestNotification = cancelRequestNotification;
        return this;
    }
    public withCancelRequestNotification(cancelRequestNotification: Gs2Friend.NotificationSetting|null): this {
        this.cancelRequestNotification = cancelRequestNotification;
        return this;
    }
    public getAcceptRequestNotification(): Gs2Friend.NotificationSetting|null {
        return this.acceptRequestNotification;
    }
    public setAcceptRequestNotification(acceptRequestNotification: Gs2Friend.NotificationSetting|null) {
        this.acceptRequestNotification = acceptRequestNotification;
        return this;
    }
    public withAcceptRequestNotification(acceptRequestNotification: Gs2Friend.NotificationSetting|null): this {
        this.acceptRequestNotification = acceptRequestNotification;
        return this;
    }
    public getRejectRequestNotification(): Gs2Friend.NotificationSetting|null {
        return this.rejectRequestNotification;
    }
    public setRejectRequestNotification(rejectRequestNotification: Gs2Friend.NotificationSetting|null) {
        this.rejectRequestNotification = rejectRequestNotification;
        return this;
    }
    public withRejectRequestNotification(rejectRequestNotification: Gs2Friend.NotificationSetting|null): this {
        this.rejectRequestNotification = rejectRequestNotification;
        return this;
    }
    public getDeleteFriendNotification(): Gs2Friend.NotificationSetting|null {
        return this.deleteFriendNotification;
    }
    public setDeleteFriendNotification(deleteFriendNotification: Gs2Friend.NotificationSetting|null) {
        this.deleteFriendNotification = deleteFriendNotification;
        return this;
    }
    public withDeleteFriendNotification(deleteFriendNotification: Gs2Friend.NotificationSetting|null): this {
        this.deleteFriendNotification = deleteFriendNotification;
        return this;
    }
    public getLogSetting(): Gs2Friend.LogSetting|null {
        return this.logSetting;
    }
    public setLogSetting(logSetting: Gs2Friend.LogSetting|null) {
        this.logSetting = logSetting;
        return this;
    }
    public withLogSetting(logSetting: Gs2Friend.LogSetting|null): this {
        this.logSetting = logSetting;
        return this;
    }
    public getCreatedAt(): number|null {
        return this.createdAt;
    }
    public setCreatedAt(createdAt: number|null) {
        this.createdAt = createdAt;
        return this;
    }
    public withCreatedAt(createdAt: number|null): this {
        this.createdAt = createdAt;
        return this;
    }
    public getUpdatedAt(): number|null {
        return this.updatedAt;
    }
    public setUpdatedAt(updatedAt: number|null) {
        this.updatedAt = updatedAt;
        return this;
    }
    public withUpdatedAt(updatedAt: number|null): this {
        this.updatedAt = updatedAt;
        return this;
    }
    public getRevision(): number|null {
        return this.revision;
    }
    public setRevision(revision: number|null) {
        this.revision = revision;
        return this;
    }
    public withRevision(revision: number|null): this {
        this.revision = revision;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Namespace|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Namespace()
            .withNamespaceId(data["namespaceId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withTransactionSetting(Gs2Friend.TransactionSetting.fromDict(data["transactionSetting"]))
            .withFollowScript(Gs2Friend.ScriptSetting.fromDict(data["followScript"]))
            .withUnfollowScript(Gs2Friend.ScriptSetting.fromDict(data["unfollowScript"]))
            .withSendRequestScript(Gs2Friend.ScriptSetting.fromDict(data["sendRequestScript"]))
            .withCancelRequestScript(Gs2Friend.ScriptSetting.fromDict(data["cancelRequestScript"]))
            .withAcceptRequestScript(Gs2Friend.ScriptSetting.fromDict(data["acceptRequestScript"]))
            .withRejectRequestScript(Gs2Friend.ScriptSetting.fromDict(data["rejectRequestScript"]))
            .withDeleteFriendScript(Gs2Friend.ScriptSetting.fromDict(data["deleteFriendScript"]))
            .withUpdateProfileScript(Gs2Friend.ScriptSetting.fromDict(data["updateProfileScript"]))
            .withFollowNotification(Gs2Friend.NotificationSetting.fromDict(data["followNotification"]))
            .withReceiveRequestNotification(Gs2Friend.NotificationSetting.fromDict(data["receiveRequestNotification"]))
            .withCancelRequestNotification(Gs2Friend.NotificationSetting.fromDict(data["cancelRequestNotification"]))
            .withAcceptRequestNotification(Gs2Friend.NotificationSetting.fromDict(data["acceptRequestNotification"]))
            .withRejectRequestNotification(Gs2Friend.NotificationSetting.fromDict(data["rejectRequestNotification"]))
            .withDeleteFriendNotification(Gs2Friend.NotificationSetting.fromDict(data["deleteFriendNotification"]))
            .withLogSetting(Gs2Friend.LogSetting.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "transactionSetting": this.getTransactionSetting()?.toDict(),
            "followScript": this.getFollowScript()?.toDict(),
            "unfollowScript": this.getUnfollowScript()?.toDict(),
            "sendRequestScript": this.getSendRequestScript()?.toDict(),
            "cancelRequestScript": this.getCancelRequestScript()?.toDict(),
            "acceptRequestScript": this.getAcceptRequestScript()?.toDict(),
            "rejectRequestScript": this.getRejectRequestScript()?.toDict(),
            "deleteFriendScript": this.getDeleteFriendScript()?.toDict(),
            "updateProfileScript": this.getUpdateProfileScript()?.toDict(),
            "followNotification": this.getFollowNotification()?.toDict(),
            "receiveRequestNotification": this.getReceiveRequestNotification()?.toDict(),
            "cancelRequestNotification": this.getCancelRequestNotification()?.toDict(),
            "acceptRequestNotification": this.getAcceptRequestNotification()?.toDict(),
            "rejectRequestNotification": this.getRejectRequestNotification()?.toDict(),
            "deleteFriendNotification": this.getDeleteFriendNotification()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
