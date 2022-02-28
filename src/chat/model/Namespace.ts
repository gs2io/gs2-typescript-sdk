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
import ScriptSetting from './ScriptSetting';
import NotificationSetting from './NotificationSetting';
import LogSetting from './LogSetting';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:chat:{namespaceName}";

export default class Namespace implements IModel {
    private namespaceId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private allowCreateRoom: boolean|null = null;
    private postMessageScript: ScriptSetting|null = null;
    private createRoomScript: ScriptSetting|null = null;
    private deleteRoomScript: ScriptSetting|null = null;
    private subscribeRoomScript: ScriptSetting|null = null;
    private unsubscribeRoomScript: ScriptSetting|null = null;
    private postNotification: NotificationSetting|null = null;
    private logSetting: LogSetting|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

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
        if (this.getRegion(grn) == null) {
            return false;
        }
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getNamespaceName(grn) == null) {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
    ): string|null {
        if (region == null || region === '') {
            return null;
        }
        if (ownerId == null || ownerId === '') {
            return null;
        }
        if (namespaceName == null || namespaceName === '') {
            return null;
        }
        return grnFormat
            .replace('{region}', region!)
            .replace('{ownerId}', ownerId!)
            .replace('{namespaceName}', namespaceName!);
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

    public getAllowCreateRoom(): boolean|null {
        return this.allowCreateRoom;
    }

    public setAllowCreateRoom(allowCreateRoom: boolean|null) {
        this.allowCreateRoom = allowCreateRoom;
        return this;
    }

    public withAllowCreateRoom(allowCreateRoom: boolean|null): this {
        this.allowCreateRoom = allowCreateRoom;
        return this;
    }

    public getPostMessageScript(): ScriptSetting|null {
        return this.postMessageScript;
    }

    public setPostMessageScript(postMessageScript: ScriptSetting|null) {
        this.postMessageScript = postMessageScript;
        return this;
    }

    public withPostMessageScript(postMessageScript: ScriptSetting|null): this {
        this.postMessageScript = postMessageScript;
        return this;
    }

    public getCreateRoomScript(): ScriptSetting|null {
        return this.createRoomScript;
    }

    public setCreateRoomScript(createRoomScript: ScriptSetting|null) {
        this.createRoomScript = createRoomScript;
        return this;
    }

    public withCreateRoomScript(createRoomScript: ScriptSetting|null): this {
        this.createRoomScript = createRoomScript;
        return this;
    }

    public getDeleteRoomScript(): ScriptSetting|null {
        return this.deleteRoomScript;
    }

    public setDeleteRoomScript(deleteRoomScript: ScriptSetting|null) {
        this.deleteRoomScript = deleteRoomScript;
        return this;
    }

    public withDeleteRoomScript(deleteRoomScript: ScriptSetting|null): this {
        this.deleteRoomScript = deleteRoomScript;
        return this;
    }

    public getSubscribeRoomScript(): ScriptSetting|null {
        return this.subscribeRoomScript;
    }

    public setSubscribeRoomScript(subscribeRoomScript: ScriptSetting|null) {
        this.subscribeRoomScript = subscribeRoomScript;
        return this;
    }

    public withSubscribeRoomScript(subscribeRoomScript: ScriptSetting|null): this {
        this.subscribeRoomScript = subscribeRoomScript;
        return this;
    }

    public getUnsubscribeRoomScript(): ScriptSetting|null {
        return this.unsubscribeRoomScript;
    }

    public setUnsubscribeRoomScript(unsubscribeRoomScript: ScriptSetting|null) {
        this.unsubscribeRoomScript = unsubscribeRoomScript;
        return this;
    }

    public withUnsubscribeRoomScript(unsubscribeRoomScript: ScriptSetting|null): this {
        this.unsubscribeRoomScript = unsubscribeRoomScript;
        return this;
    }

    public getPostNotification(): NotificationSetting|null {
        return this.postNotification;
    }

    public setPostNotification(postNotification: NotificationSetting|null) {
        this.postNotification = postNotification;
        return this;
    }

    public withPostNotification(postNotification: NotificationSetting|null): this {
        this.postNotification = postNotification;
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
            .withAllowCreateRoom(data["allowCreateRoom"])
            .withPostMessageScript(ScriptSetting.fromDict(data["postMessageScript"]))
            .withCreateRoomScript(ScriptSetting.fromDict(data["createRoomScript"]))
            .withDeleteRoomScript(ScriptSetting.fromDict(data["deleteRoomScript"]))
            .withSubscribeRoomScript(ScriptSetting.fromDict(data["subscribeRoomScript"]))
            .withUnsubscribeRoomScript(ScriptSetting.fromDict(data["unsubscribeRoomScript"]))
            .withPostNotification(NotificationSetting.fromDict(data["postNotification"]))
            .withLogSetting(LogSetting.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "allowCreateRoom": this.getAllowCreateRoom(),
            "postMessageScript": this.getPostMessageScript()?.toDict(),
            "createRoomScript": this.getCreateRoomScript()?.toDict(),
            "deleteRoomScript": this.getDeleteRoomScript()?.toDict(),
            "subscribeRoomScript": this.getSubscribeRoomScript()?.toDict(),
            "unsubscribeRoomScript": this.getUnsubscribeRoomScript()?.toDict(),
            "postNotification": this.getPostNotification()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
