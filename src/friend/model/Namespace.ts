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
import { ScriptSetting } from './ScriptSetting';
import { NotificationSetting } from './NotificationSetting';
import { LogSetting } from './LogSetting';

export class Namespace implements IModel {
    private namespaceId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private followScript: ScriptSetting|null = null;
    private unfollowScript: ScriptSetting|null = null;
    private sendRequestScript: ScriptSetting|null = null;
    private cancelRequestScript: ScriptSetting|null = null;
    private acceptRequestScript: ScriptSetting|null = null;
    private rejectRequestScript: ScriptSetting|null = null;
    private deleteFriendScript: ScriptSetting|null = null;
    private updateProfileScript: ScriptSetting|null = null;
    private followNotification: NotificationSetting|null = null;
    private receiveRequestNotification: NotificationSetting|null = null;
    private acceptRequestNotification: NotificationSetting|null = null;
    private logSetting: LogSetting|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

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

    public getFollowScript(): ScriptSetting|null {
        return this.followScript;
    }

    public setFollowScript(followScript: ScriptSetting|null) {
        this.followScript = followScript;
        return this;
    }

    public withFollowScript(followScript: ScriptSetting|null): this {
        this.followScript = followScript;
        return this;
    }

    public getUnfollowScript(): ScriptSetting|null {
        return this.unfollowScript;
    }

    public setUnfollowScript(unfollowScript: ScriptSetting|null) {
        this.unfollowScript = unfollowScript;
        return this;
    }

    public withUnfollowScript(unfollowScript: ScriptSetting|null): this {
        this.unfollowScript = unfollowScript;
        return this;
    }

    public getSendRequestScript(): ScriptSetting|null {
        return this.sendRequestScript;
    }

    public setSendRequestScript(sendRequestScript: ScriptSetting|null) {
        this.sendRequestScript = sendRequestScript;
        return this;
    }

    public withSendRequestScript(sendRequestScript: ScriptSetting|null): this {
        this.sendRequestScript = sendRequestScript;
        return this;
    }

    public getCancelRequestScript(): ScriptSetting|null {
        return this.cancelRequestScript;
    }

    public setCancelRequestScript(cancelRequestScript: ScriptSetting|null) {
        this.cancelRequestScript = cancelRequestScript;
        return this;
    }

    public withCancelRequestScript(cancelRequestScript: ScriptSetting|null): this {
        this.cancelRequestScript = cancelRequestScript;
        return this;
    }

    public getAcceptRequestScript(): ScriptSetting|null {
        return this.acceptRequestScript;
    }

    public setAcceptRequestScript(acceptRequestScript: ScriptSetting|null) {
        this.acceptRequestScript = acceptRequestScript;
        return this;
    }

    public withAcceptRequestScript(acceptRequestScript: ScriptSetting|null): this {
        this.acceptRequestScript = acceptRequestScript;
        return this;
    }

    public getRejectRequestScript(): ScriptSetting|null {
        return this.rejectRequestScript;
    }

    public setRejectRequestScript(rejectRequestScript: ScriptSetting|null) {
        this.rejectRequestScript = rejectRequestScript;
        return this;
    }

    public withRejectRequestScript(rejectRequestScript: ScriptSetting|null): this {
        this.rejectRequestScript = rejectRequestScript;
        return this;
    }

    public getDeleteFriendScript(): ScriptSetting|null {
        return this.deleteFriendScript;
    }

    public setDeleteFriendScript(deleteFriendScript: ScriptSetting|null) {
        this.deleteFriendScript = deleteFriendScript;
        return this;
    }

    public withDeleteFriendScript(deleteFriendScript: ScriptSetting|null): this {
        this.deleteFriendScript = deleteFriendScript;
        return this;
    }

    public getUpdateProfileScript(): ScriptSetting|null {
        return this.updateProfileScript;
    }

    public setUpdateProfileScript(updateProfileScript: ScriptSetting|null) {
        this.updateProfileScript = updateProfileScript;
        return this;
    }

    public withUpdateProfileScript(updateProfileScript: ScriptSetting|null): this {
        this.updateProfileScript = updateProfileScript;
        return this;
    }

    public getFollowNotification(): NotificationSetting|null {
        return this.followNotification;
    }

    public setFollowNotification(followNotification: NotificationSetting|null) {
        this.followNotification = followNotification;
        return this;
    }

    public withFollowNotification(followNotification: NotificationSetting|null): this {
        this.followNotification = followNotification;
        return this;
    }

    public getReceiveRequestNotification(): NotificationSetting|null {
        return this.receiveRequestNotification;
    }

    public setReceiveRequestNotification(receiveRequestNotification: NotificationSetting|null) {
        this.receiveRequestNotification = receiveRequestNotification;
        return this;
    }

    public withReceiveRequestNotification(receiveRequestNotification: NotificationSetting|null): this {
        this.receiveRequestNotification = receiveRequestNotification;
        return this;
    }

    public getAcceptRequestNotification(): NotificationSetting|null {
        return this.acceptRequestNotification;
    }

    public setAcceptRequestNotification(acceptRequestNotification: NotificationSetting|null) {
        this.acceptRequestNotification = acceptRequestNotification;
        return this;
    }

    public withAcceptRequestNotification(acceptRequestNotification: NotificationSetting|null): this {
        this.acceptRequestNotification = acceptRequestNotification;
        return this;
    }

    public getLogSetting(): LogSetting|null {
        return this.logSetting;
    }

    public setLogSetting(logSetting: LogSetting|null) {
        this.logSetting = logSetting;
        return this;
    }

    public withLogSetting(logSetting: LogSetting|null): this {
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

    public static fromDict(data: {[key: string]: any}): Namespace|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Namespace()
            .withNamespaceId(data["namespaceId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withFollowScript(ScriptSetting.fromDict(data["followScript"]))
            .withUnfollowScript(ScriptSetting.fromDict(data["unfollowScript"]))
            .withSendRequestScript(ScriptSetting.fromDict(data["sendRequestScript"]))
            .withCancelRequestScript(ScriptSetting.fromDict(data["cancelRequestScript"]))
            .withAcceptRequestScript(ScriptSetting.fromDict(data["acceptRequestScript"]))
            .withRejectRequestScript(ScriptSetting.fromDict(data["rejectRequestScript"]))
            .withDeleteFriendScript(ScriptSetting.fromDict(data["deleteFriendScript"]))
            .withUpdateProfileScript(ScriptSetting.fromDict(data["updateProfileScript"]))
            .withFollowNotification(NotificationSetting.fromDict(data["followNotification"]))
            .withReceiveRequestNotification(NotificationSetting.fromDict(data["receiveRequestNotification"]))
            .withAcceptRequestNotification(NotificationSetting.fromDict(data["acceptRequestNotification"]))
            .withLogSetting(LogSetting.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
            "description": this.getDescription(),
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
            "acceptRequestNotification": this.getAcceptRequestNotification()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
