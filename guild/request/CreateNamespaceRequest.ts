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

import * as Gs2Guild from '../model'

export default class CreateNamespaceRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private changeNotification: Gs2Guild.NotificationSetting|null = null;
    private joinNotification: Gs2Guild.NotificationSetting|null = null;
    private leaveNotification: Gs2Guild.NotificationSetting|null = null;
    private changeMemberNotification: Gs2Guild.NotificationSetting|null = null;
    private receiveRequestNotification: Gs2Guild.NotificationSetting|null = null;
    private removeRequestNotification: Gs2Guild.NotificationSetting|null = null;
    private createGuildScript: Gs2Guild.ScriptSetting|null = null;
    private updateGuildScript: Gs2Guild.ScriptSetting|null = null;
    private joinGuildScript: Gs2Guild.ScriptSetting|null = null;
    private receiveJoinRequestScript: Gs2Guild.ScriptSetting|null = null;
    private leaveGuildScript: Gs2Guild.ScriptSetting|null = null;
    private changeRoleScript: Gs2Guild.ScriptSetting|null = null;
    private deleteGuildScript: Gs2Guild.ScriptSetting|null = null;
    private logSetting: Gs2Guild.LogSetting|null = null;

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
    public getChangeNotification(): Gs2Guild.NotificationSetting|null {
        return this.changeNotification;
    }
    public setChangeNotification(changeNotification: Gs2Guild.NotificationSetting|null) {
        this.changeNotification = changeNotification;
        return this;
    }
    public withChangeNotification(changeNotification: Gs2Guild.NotificationSetting|null): this {
        this.changeNotification = changeNotification;
        return this;
    }
    public getJoinNotification(): Gs2Guild.NotificationSetting|null {
        return this.joinNotification;
    }
    public setJoinNotification(joinNotification: Gs2Guild.NotificationSetting|null) {
        this.joinNotification = joinNotification;
        return this;
    }
    public withJoinNotification(joinNotification: Gs2Guild.NotificationSetting|null): this {
        this.joinNotification = joinNotification;
        return this;
    }
    public getLeaveNotification(): Gs2Guild.NotificationSetting|null {
        return this.leaveNotification;
    }
    public setLeaveNotification(leaveNotification: Gs2Guild.NotificationSetting|null) {
        this.leaveNotification = leaveNotification;
        return this;
    }
    public withLeaveNotification(leaveNotification: Gs2Guild.NotificationSetting|null): this {
        this.leaveNotification = leaveNotification;
        return this;
    }
    public getChangeMemberNotification(): Gs2Guild.NotificationSetting|null {
        return this.changeMemberNotification;
    }
    public setChangeMemberNotification(changeMemberNotification: Gs2Guild.NotificationSetting|null) {
        this.changeMemberNotification = changeMemberNotification;
        return this;
    }
    public withChangeMemberNotification(changeMemberNotification: Gs2Guild.NotificationSetting|null): this {
        this.changeMemberNotification = changeMemberNotification;
        return this;
    }
    public getReceiveRequestNotification(): Gs2Guild.NotificationSetting|null {
        return this.receiveRequestNotification;
    }
    public setReceiveRequestNotification(receiveRequestNotification: Gs2Guild.NotificationSetting|null) {
        this.receiveRequestNotification = receiveRequestNotification;
        return this;
    }
    public withReceiveRequestNotification(receiveRequestNotification: Gs2Guild.NotificationSetting|null): this {
        this.receiveRequestNotification = receiveRequestNotification;
        return this;
    }
    public getRemoveRequestNotification(): Gs2Guild.NotificationSetting|null {
        return this.removeRequestNotification;
    }
    public setRemoveRequestNotification(removeRequestNotification: Gs2Guild.NotificationSetting|null) {
        this.removeRequestNotification = removeRequestNotification;
        return this;
    }
    public withRemoveRequestNotification(removeRequestNotification: Gs2Guild.NotificationSetting|null): this {
        this.removeRequestNotification = removeRequestNotification;
        return this;
    }
    public getCreateGuildScript(): Gs2Guild.ScriptSetting|null {
        return this.createGuildScript;
    }
    public setCreateGuildScript(createGuildScript: Gs2Guild.ScriptSetting|null) {
        this.createGuildScript = createGuildScript;
        return this;
    }
    public withCreateGuildScript(createGuildScript: Gs2Guild.ScriptSetting|null): this {
        this.createGuildScript = createGuildScript;
        return this;
    }
    public getUpdateGuildScript(): Gs2Guild.ScriptSetting|null {
        return this.updateGuildScript;
    }
    public setUpdateGuildScript(updateGuildScript: Gs2Guild.ScriptSetting|null) {
        this.updateGuildScript = updateGuildScript;
        return this;
    }
    public withUpdateGuildScript(updateGuildScript: Gs2Guild.ScriptSetting|null): this {
        this.updateGuildScript = updateGuildScript;
        return this;
    }
    public getJoinGuildScript(): Gs2Guild.ScriptSetting|null {
        return this.joinGuildScript;
    }
    public setJoinGuildScript(joinGuildScript: Gs2Guild.ScriptSetting|null) {
        this.joinGuildScript = joinGuildScript;
        return this;
    }
    public withJoinGuildScript(joinGuildScript: Gs2Guild.ScriptSetting|null): this {
        this.joinGuildScript = joinGuildScript;
        return this;
    }
    public getReceiveJoinRequestScript(): Gs2Guild.ScriptSetting|null {
        return this.receiveJoinRequestScript;
    }
    public setReceiveJoinRequestScript(receiveJoinRequestScript: Gs2Guild.ScriptSetting|null) {
        this.receiveJoinRequestScript = receiveJoinRequestScript;
        return this;
    }
    public withReceiveJoinRequestScript(receiveJoinRequestScript: Gs2Guild.ScriptSetting|null): this {
        this.receiveJoinRequestScript = receiveJoinRequestScript;
        return this;
    }
    public getLeaveGuildScript(): Gs2Guild.ScriptSetting|null {
        return this.leaveGuildScript;
    }
    public setLeaveGuildScript(leaveGuildScript: Gs2Guild.ScriptSetting|null) {
        this.leaveGuildScript = leaveGuildScript;
        return this;
    }
    public withLeaveGuildScript(leaveGuildScript: Gs2Guild.ScriptSetting|null): this {
        this.leaveGuildScript = leaveGuildScript;
        return this;
    }
    public getChangeRoleScript(): Gs2Guild.ScriptSetting|null {
        return this.changeRoleScript;
    }
    public setChangeRoleScript(changeRoleScript: Gs2Guild.ScriptSetting|null) {
        this.changeRoleScript = changeRoleScript;
        return this;
    }
    public withChangeRoleScript(changeRoleScript: Gs2Guild.ScriptSetting|null): this {
        this.changeRoleScript = changeRoleScript;
        return this;
    }
    public getDeleteGuildScript(): Gs2Guild.ScriptSetting|null {
        return this.deleteGuildScript;
    }
    public setDeleteGuildScript(deleteGuildScript: Gs2Guild.ScriptSetting|null) {
        this.deleteGuildScript = deleteGuildScript;
        return this;
    }
    public withDeleteGuildScript(deleteGuildScript: Gs2Guild.ScriptSetting|null): this {
        this.deleteGuildScript = deleteGuildScript;
        return this;
    }
    public getLogSetting(): Gs2Guild.LogSetting|null {
        return this.logSetting;
    }
    public setLogSetting(logSetting: Gs2Guild.LogSetting|null) {
        this.logSetting = logSetting;
        return this;
    }
    public withLogSetting(logSetting: Gs2Guild.LogSetting|null): this {
        this.logSetting = logSetting;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CreateNamespaceRequest {
        return new CreateNamespaceRequest()
            .withName(data["name"])
            .withDescription(data["description"])
            .withChangeNotification(Gs2Guild.NotificationSetting.fromDict(data["changeNotification"]))
            .withJoinNotification(Gs2Guild.NotificationSetting.fromDict(data["joinNotification"]))
            .withLeaveNotification(Gs2Guild.NotificationSetting.fromDict(data["leaveNotification"]))
            .withChangeMemberNotification(Gs2Guild.NotificationSetting.fromDict(data["changeMemberNotification"]))
            .withReceiveRequestNotification(Gs2Guild.NotificationSetting.fromDict(data["receiveRequestNotification"]))
            .withRemoveRequestNotification(Gs2Guild.NotificationSetting.fromDict(data["removeRequestNotification"]))
            .withCreateGuildScript(Gs2Guild.ScriptSetting.fromDict(data["createGuildScript"]))
            .withUpdateGuildScript(Gs2Guild.ScriptSetting.fromDict(data["updateGuildScript"]))
            .withJoinGuildScript(Gs2Guild.ScriptSetting.fromDict(data["joinGuildScript"]))
            .withReceiveJoinRequestScript(Gs2Guild.ScriptSetting.fromDict(data["receiveJoinRequestScript"]))
            .withLeaveGuildScript(Gs2Guild.ScriptSetting.fromDict(data["leaveGuildScript"]))
            .withChangeRoleScript(Gs2Guild.ScriptSetting.fromDict(data["changeRoleScript"]))
            .withDeleteGuildScript(Gs2Guild.ScriptSetting.fromDict(data["deleteGuildScript"]))
            .withLogSetting(Gs2Guild.LogSetting.fromDict(data["logSetting"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "name": this.getName(),
            "description": this.getDescription(),
            "changeNotification": this.getChangeNotification()?.toDict(),
            "joinNotification": this.getJoinNotification()?.toDict(),
            "leaveNotification": this.getLeaveNotification()?.toDict(),
            "changeMemberNotification": this.getChangeMemberNotification()?.toDict(),
            "receiveRequestNotification": this.getReceiveRequestNotification()?.toDict(),
            "removeRequestNotification": this.getRemoveRequestNotification()?.toDict(),
            "createGuildScript": this.getCreateGuildScript()?.toDict(),
            "updateGuildScript": this.getUpdateGuildScript()?.toDict(),
            "joinGuildScript": this.getJoinGuildScript()?.toDict(),
            "receiveJoinRequestScript": this.getReceiveJoinRequestScript()?.toDict(),
            "leaveGuildScript": this.getLeaveGuildScript()?.toDict(),
            "changeRoleScript": this.getChangeRoleScript()?.toDict(),
            "deleteGuildScript": this.getDeleteGuildScript()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
        };
    }
}