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

export default class UpdateGuildRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private accessToken: string|null = null;
    private guildModelName: string|null = null;
    private displayName: string|null = null;
    private attribute1: number|null = null;
    private attribute2: number|null = null;
    private attribute3: number|null = null;
    private attribute4: number|null = null;
    private attribute5: number|null = null;
    private joinPolicy: string|null = null;
    private customRoles: Gs2Guild.RoleModel[]|null = null;
    private guildMemberDefaultRole: string|null = null;
    private duplicationAvoider: string|null = null;

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
    public getNamespaceName(): string|null {
        return this.namespaceName;
    }
    public setNamespaceName(namespaceName: string|null) {
        this.namespaceName = namespaceName;
        return this;
    }
    public withNamespaceName(namespaceName: string|null): this {
        this.namespaceName = namespaceName;
        return this;
    }
    public getAccessToken(): string|null {
        return this.accessToken;
    }
    public setAccessToken(accessToken: string|null) {
        this.accessToken = accessToken;
        return this;
    }
    public withAccessToken(accessToken: string|null): this {
        this.accessToken = accessToken;
        return this;
    }
    public getGuildModelName(): string|null {
        return this.guildModelName;
    }
    public setGuildModelName(guildModelName: string|null) {
        this.guildModelName = guildModelName;
        return this;
    }
    public withGuildModelName(guildModelName: string|null): this {
        this.guildModelName = guildModelName;
        return this;
    }
    public getDisplayName(): string|null {
        return this.displayName;
    }
    public setDisplayName(displayName: string|null) {
        this.displayName = displayName;
        return this;
    }
    public withDisplayName(displayName: string|null): this {
        this.displayName = displayName;
        return this;
    }
    public getAttribute1(): number|null {
        return this.attribute1;
    }
    public setAttribute1(attribute1: number|null) {
        this.attribute1 = attribute1;
        return this;
    }
    public withAttribute1(attribute1: number|null): this {
        this.attribute1 = attribute1;
        return this;
    }
    public getAttribute2(): number|null {
        return this.attribute2;
    }
    public setAttribute2(attribute2: number|null) {
        this.attribute2 = attribute2;
        return this;
    }
    public withAttribute2(attribute2: number|null): this {
        this.attribute2 = attribute2;
        return this;
    }
    public getAttribute3(): number|null {
        return this.attribute3;
    }
    public setAttribute3(attribute3: number|null) {
        this.attribute3 = attribute3;
        return this;
    }
    public withAttribute3(attribute3: number|null): this {
        this.attribute3 = attribute3;
        return this;
    }
    public getAttribute4(): number|null {
        return this.attribute4;
    }
    public setAttribute4(attribute4: number|null) {
        this.attribute4 = attribute4;
        return this;
    }
    public withAttribute4(attribute4: number|null): this {
        this.attribute4 = attribute4;
        return this;
    }
    public getAttribute5(): number|null {
        return this.attribute5;
    }
    public setAttribute5(attribute5: number|null) {
        this.attribute5 = attribute5;
        return this;
    }
    public withAttribute5(attribute5: number|null): this {
        this.attribute5 = attribute5;
        return this;
    }
    public getJoinPolicy(): string|null {
        return this.joinPolicy;
    }
    public setJoinPolicy(joinPolicy: string|null) {
        this.joinPolicy = joinPolicy;
        return this;
    }
    public withJoinPolicy(joinPolicy: string|null): this {
        this.joinPolicy = joinPolicy;
        return this;
    }
    public getCustomRoles(): Gs2Guild.RoleModel[]|null {
        return this.customRoles;
    }
    public setCustomRoles(customRoles: Gs2Guild.RoleModel[]|null) {
        this.customRoles = customRoles;
        return this;
    }
    public withCustomRoles(customRoles: Gs2Guild.RoleModel[]|null): this {
        this.customRoles = customRoles;
        return this;
    }
    public getGuildMemberDefaultRole(): string|null {
        return this.guildMemberDefaultRole;
    }
    public setGuildMemberDefaultRole(guildMemberDefaultRole: string|null) {
        this.guildMemberDefaultRole = guildMemberDefaultRole;
        return this;
    }
    public withGuildMemberDefaultRole(guildMemberDefaultRole: string|null): this {
        this.guildMemberDefaultRole = guildMemberDefaultRole;
        return this;
    }

    public getDuplicationAvoider(): string|null {
        return this.duplicationAvoider;
    }

    public setDuplicationAvoider(duplicationAvoider: string|null) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    }

    public withDuplicationAvoider(duplicationAvoider: string|null): this {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): UpdateGuildRequest {
        return new UpdateGuildRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withGuildModelName(data["guildModelName"])
            .withDisplayName(data["displayName"])
            .withAttribute1(data["attribute1"])
            .withAttribute2(data["attribute2"])
            .withAttribute3(data["attribute3"])
            .withAttribute4(data["attribute4"])
            .withAttribute5(data["attribute5"])
            .withJoinPolicy(data["joinPolicy"])
            .withCustomRoles(data.customRoles ?
                data.customRoles.map((item: {[key: string]: any}) => {
                    return Gs2Guild.RoleModel.fromDict(item);
                }
            ) : null)
            .withGuildMemberDefaultRole(data["guildMemberDefaultRole"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "guildModelName": this.getGuildModelName(),
            "displayName": this.getDisplayName(),
            "attribute1": this.getAttribute1(),
            "attribute2": this.getAttribute2(),
            "attribute3": this.getAttribute3(),
            "attribute4": this.getAttribute4(),
            "attribute5": this.getAttribute5(),
            "joinPolicy": this.getJoinPolicy(),
            "customRoles": this.getCustomRoles() ?
                this.getCustomRoles()!.map((item: Gs2Guild.RoleModel) => {
                    return item.toDict();
                }
            ) : null,
            "guildMemberDefaultRole": this.getGuildMemberDefaultRole(),
        };
    }
}