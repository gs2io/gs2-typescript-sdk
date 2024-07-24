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

export default class CreateGuildModelMasterRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private defaultMaximumMemberCount: number|null = null;
    private maximumMemberCount: number|null = null;
    private inactivityPeriodDays: number|null = null;
    private roles: Gs2Guild.RoleModel[]|null = null;
    private guildMasterRole: string|null = null;
    private guildMemberDefaultRole: string|null = null;
    private rejoinCoolTimeMinutes: number|null = null;

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
    public getMetadata(): string|null {
        return this.metadata;
    }
    public setMetadata(metadata: string|null) {
        this.metadata = metadata;
        return this;
    }
    public withMetadata(metadata: string|null): this {
        this.metadata = metadata;
        return this;
    }
    public getDefaultMaximumMemberCount(): number|null {
        return this.defaultMaximumMemberCount;
    }
    public setDefaultMaximumMemberCount(defaultMaximumMemberCount: number|null) {
        this.defaultMaximumMemberCount = defaultMaximumMemberCount;
        return this;
    }
    public withDefaultMaximumMemberCount(defaultMaximumMemberCount: number|null): this {
        this.defaultMaximumMemberCount = defaultMaximumMemberCount;
        return this;
    }
    public getMaximumMemberCount(): number|null {
        return this.maximumMemberCount;
    }
    public setMaximumMemberCount(maximumMemberCount: number|null) {
        this.maximumMemberCount = maximumMemberCount;
        return this;
    }
    public withMaximumMemberCount(maximumMemberCount: number|null): this {
        this.maximumMemberCount = maximumMemberCount;
        return this;
    }
    public getInactivityPeriodDays(): number|null {
        return this.inactivityPeriodDays;
    }
    public setInactivityPeriodDays(inactivityPeriodDays: number|null) {
        this.inactivityPeriodDays = inactivityPeriodDays;
        return this;
    }
    public withInactivityPeriodDays(inactivityPeriodDays: number|null): this {
        this.inactivityPeriodDays = inactivityPeriodDays;
        return this;
    }
    public getRoles(): Gs2Guild.RoleModel[]|null {
        return this.roles;
    }
    public setRoles(roles: Gs2Guild.RoleModel[]|null) {
        this.roles = roles;
        return this;
    }
    public withRoles(roles: Gs2Guild.RoleModel[]|null): this {
        this.roles = roles;
        return this;
    }
    public getGuildMasterRole(): string|null {
        return this.guildMasterRole;
    }
    public setGuildMasterRole(guildMasterRole: string|null) {
        this.guildMasterRole = guildMasterRole;
        return this;
    }
    public withGuildMasterRole(guildMasterRole: string|null): this {
        this.guildMasterRole = guildMasterRole;
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
    public getRejoinCoolTimeMinutes(): number|null {
        return this.rejoinCoolTimeMinutes;
    }
    public setRejoinCoolTimeMinutes(rejoinCoolTimeMinutes: number|null) {
        this.rejoinCoolTimeMinutes = rejoinCoolTimeMinutes;
        return this;
    }
    public withRejoinCoolTimeMinutes(rejoinCoolTimeMinutes: number|null): this {
        this.rejoinCoolTimeMinutes = rejoinCoolTimeMinutes;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CreateGuildModelMasterRequest {
        return new CreateGuildModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withDefaultMaximumMemberCount(data["defaultMaximumMemberCount"])
            .withMaximumMemberCount(data["maximumMemberCount"])
            .withInactivityPeriodDays(data["inactivityPeriodDays"])
            .withRoles(data.roles ?
                data.roles.map((item: {[key: string]: any}) => {
                    return Gs2Guild.RoleModel.fromDict(item);
                }
            ) : [])
            .withGuildMasterRole(data["guildMasterRole"])
            .withGuildMemberDefaultRole(data["guildMemberDefaultRole"])
            .withRejoinCoolTimeMinutes(data["rejoinCoolTimeMinutes"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "defaultMaximumMemberCount": this.getDefaultMaximumMemberCount(),
            "maximumMemberCount": this.getMaximumMemberCount(),
            "inactivityPeriodDays": this.getInactivityPeriodDays(),
            "roles": this.getRoles() ?
                this.getRoles()!.map((item: Gs2Guild.RoleModel) => {
                    return item.toDict();
                }
            ) : [],
            "guildMasterRole": this.getGuildMasterRole(),
            "guildMemberDefaultRole": this.getGuildMemberDefaultRole(),
            "rejoinCoolTimeMinutes": this.getRejoinCoolTimeMinutes(),
        };
    }
}