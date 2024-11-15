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
import RoleModel from './RoleModel';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:guild:{namespaceName}:model:{guildModelName}";

export default class GuildModel implements IModel {
    private guildModelId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private defaultMaximumMemberCount: number|null = null;
    private maximumMemberCount: number|null = null;
    private inactivityPeriodDays: number|null = null;
    private roles: RoleModel[]|null = null;
    private guildMasterRole: string|null = null;
    private guildMemberDefaultRole: string|null = null;
    private rejoinCoolTimeMinutes: number|null = null;
    private maxConcurrentJoinGuilds: number|null = null;
    private maxConcurrentGuildMasterCount: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{guildModelName}', '.*')
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
            .replace('{guildModelName}', '.*')
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
            .replace('{guildModelName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getGuildModelName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{guildModelName}', '(.*)')
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
        if (this.getGuildModelName(grn) == null || this.getGuildModelName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        guildModelName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{guildModelName}', guildModelName ?? '');
    }
    public getGuildModelId(): string|null {
        return this.guildModelId;
    }
    public setGuildModelId(guildModelId: string|null) {
        this.guildModelId = guildModelId;
        return this;
    }
    public withGuildModelId(guildModelId: string|null): this {
        this.guildModelId = guildModelId;
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
    public getRoles(): RoleModel[]|null {
        return this.roles;
    }
    public setRoles(roles: RoleModel[]|null) {
        this.roles = roles;
        return this;
    }
    public withRoles(roles: RoleModel[]|null): this {
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
    public getMaxConcurrentJoinGuilds(): number|null {
        return this.maxConcurrentJoinGuilds;
    }
    public setMaxConcurrentJoinGuilds(maxConcurrentJoinGuilds: number|null) {
        this.maxConcurrentJoinGuilds = maxConcurrentJoinGuilds;
        return this;
    }
    public withMaxConcurrentJoinGuilds(maxConcurrentJoinGuilds: number|null): this {
        this.maxConcurrentJoinGuilds = maxConcurrentJoinGuilds;
        return this;
    }
    public getMaxConcurrentGuildMasterCount(): number|null {
        return this.maxConcurrentGuildMasterCount;
    }
    public setMaxConcurrentGuildMasterCount(maxConcurrentGuildMasterCount: number|null) {
        this.maxConcurrentGuildMasterCount = maxConcurrentGuildMasterCount;
        return this;
    }
    public withMaxConcurrentGuildMasterCount(maxConcurrentGuildMasterCount: number|null): this {
        this.maxConcurrentGuildMasterCount = maxConcurrentGuildMasterCount;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): GuildModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new GuildModel()
            .withGuildModelId(data["guildModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withDefaultMaximumMemberCount(data["defaultMaximumMemberCount"])
            .withMaximumMemberCount(data["maximumMemberCount"])
            .withInactivityPeriodDays(data["inactivityPeriodDays"])
            .withRoles(data.roles ?
                data.roles.map((item: {[key: string]: any}) => {
                    return RoleModel.fromDict(item);
                }
            ) : [])
            .withGuildMasterRole(data["guildMasterRole"])
            .withGuildMemberDefaultRole(data["guildMemberDefaultRole"])
            .withRejoinCoolTimeMinutes(data["rejoinCoolTimeMinutes"])
            .withMaxConcurrentJoinGuilds(data["maxConcurrentJoinGuilds"])
            .withMaxConcurrentGuildMasterCount(data["maxConcurrentGuildMasterCount"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "guildModelId": this.getGuildModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "defaultMaximumMemberCount": this.getDefaultMaximumMemberCount(),
            "maximumMemberCount": this.getMaximumMemberCount(),
            "inactivityPeriodDays": this.getInactivityPeriodDays(),
            "roles": this.getRoles() ?
                this.getRoles()!.map((item: RoleModel) => {
                    return item.toDict();
                }
            ) : [],
            "guildMasterRole": this.getGuildMasterRole(),
            "guildMemberDefaultRole": this.getGuildMemberDefaultRole(),
            "rejoinCoolTimeMinutes": this.getRejoinCoolTimeMinutes(),
            "maxConcurrentJoinGuilds": this.getMaxConcurrentJoinGuilds(),
            "maxConcurrentGuildMasterCount": this.getMaxConcurrentGuildMasterCount(),
        };
    }
}
