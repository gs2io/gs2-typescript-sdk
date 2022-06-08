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

import IRequest from '../../core/interface/IRequest';

import * as Gs2Chat from '../model'

export default class CreateNamespaceRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private allowCreateRoom: boolean|null = null;
    private postMessageScript: Gs2Chat.ScriptSetting|null = null;
    private createRoomScript: Gs2Chat.ScriptSetting|null = null;
    private deleteRoomScript: Gs2Chat.ScriptSetting|null = null;
    private subscribeRoomScript: Gs2Chat.ScriptSetting|null = null;
    private unsubscribeRoomScript: Gs2Chat.ScriptSetting|null = null;
    private postNotification: Gs2Chat.NotificationSetting|null = null;
    private logSetting: Gs2Chat.LogSetting|null = null;

    public getRequestId(): string|null {
        return this.requestId;
    }

    public setRequestId(requestId: string|null) {
        this.requestId = requestId;
        return this;
    }

    public withRequestId(requestId: string|null): this {
        this.requestId = requestId;
        return this;
    }

    public getContextStack(): string|null {
        return this.contextStack;
    }

    public setContextStack(contextStack: string|null) {
        this.contextStack = contextStack;
        return this;
    }

    public withContextStack(contextStack: string|null): this {
        this.contextStack = contextStack;
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
    public getPostMessageScript(): Gs2Chat.ScriptSetting|null {
        return this.postMessageScript;
    }
    public setPostMessageScript(postMessageScript: Gs2Chat.ScriptSetting|null) {
        this.postMessageScript = postMessageScript;
        return this;
    }
    public withPostMessageScript(postMessageScript: Gs2Chat.ScriptSetting|null): this {
        this.postMessageScript = postMessageScript;
        return this;
    }
    public getCreateRoomScript(): Gs2Chat.ScriptSetting|null {
        return this.createRoomScript;
    }
    public setCreateRoomScript(createRoomScript: Gs2Chat.ScriptSetting|null) {
        this.createRoomScript = createRoomScript;
        return this;
    }
    public withCreateRoomScript(createRoomScript: Gs2Chat.ScriptSetting|null): this {
        this.createRoomScript = createRoomScript;
        return this;
    }
    public getDeleteRoomScript(): Gs2Chat.ScriptSetting|null {
        return this.deleteRoomScript;
    }
    public setDeleteRoomScript(deleteRoomScript: Gs2Chat.ScriptSetting|null) {
        this.deleteRoomScript = deleteRoomScript;
        return this;
    }
    public withDeleteRoomScript(deleteRoomScript: Gs2Chat.ScriptSetting|null): this {
        this.deleteRoomScript = deleteRoomScript;
        return this;
    }
    public getSubscribeRoomScript(): Gs2Chat.ScriptSetting|null {
        return this.subscribeRoomScript;
    }
    public setSubscribeRoomScript(subscribeRoomScript: Gs2Chat.ScriptSetting|null) {
        this.subscribeRoomScript = subscribeRoomScript;
        return this;
    }
    public withSubscribeRoomScript(subscribeRoomScript: Gs2Chat.ScriptSetting|null): this {
        this.subscribeRoomScript = subscribeRoomScript;
        return this;
    }
    public getUnsubscribeRoomScript(): Gs2Chat.ScriptSetting|null {
        return this.unsubscribeRoomScript;
    }
    public setUnsubscribeRoomScript(unsubscribeRoomScript: Gs2Chat.ScriptSetting|null) {
        this.unsubscribeRoomScript = unsubscribeRoomScript;
        return this;
    }
    public withUnsubscribeRoomScript(unsubscribeRoomScript: Gs2Chat.ScriptSetting|null): this {
        this.unsubscribeRoomScript = unsubscribeRoomScript;
        return this;
    }
    public getPostNotification(): Gs2Chat.NotificationSetting|null {
        return this.postNotification;
    }
    public setPostNotification(postNotification: Gs2Chat.NotificationSetting|null) {
        this.postNotification = postNotification;
        return this;
    }
    public withPostNotification(postNotification: Gs2Chat.NotificationSetting|null): this {
        this.postNotification = postNotification;
        return this;
    }
    public getLogSetting(): Gs2Chat.LogSetting|null {
        return this.logSetting;
    }
    public setLogSetting(logSetting: Gs2Chat.LogSetting|null) {
        this.logSetting = logSetting;
        return this;
    }
    public withLogSetting(logSetting: Gs2Chat.LogSetting|null): this {
        this.logSetting = logSetting;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CreateNamespaceRequest {
        return new CreateNamespaceRequest()
            .withName(data["name"])
            .withDescription(data["description"])
            .withAllowCreateRoom(data["allowCreateRoom"])
            .withPostMessageScript(Gs2Chat.ScriptSetting.fromDict(data["postMessageScript"]))
            .withCreateRoomScript(Gs2Chat.ScriptSetting.fromDict(data["createRoomScript"]))
            .withDeleteRoomScript(Gs2Chat.ScriptSetting.fromDict(data["deleteRoomScript"]))
            .withSubscribeRoomScript(Gs2Chat.ScriptSetting.fromDict(data["subscribeRoomScript"]))
            .withUnsubscribeRoomScript(Gs2Chat.ScriptSetting.fromDict(data["unsubscribeRoomScript"]))
            .withPostNotification(Gs2Chat.NotificationSetting.fromDict(data["postNotification"]))
            .withLogSetting(Gs2Chat.LogSetting.fromDict(data["logSetting"]));
    }

    public toDict(): {[key: string]: any} {
        return {
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
        };
    }
}