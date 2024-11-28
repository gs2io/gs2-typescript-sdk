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

import * as Gs2Guild from '../../guild/model'
import RoleModel from './RoleModel';
import Member from './Member';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:guild:{namespaceName}:guild:{guildModelName}:{guildName}";

export default class Guild implements IModel {
    private guildId: string|null = null;
    private guildModelName: string|null = null;
    private name: string|null = null;
    private displayName: string|null = null;
    private attribute1: number|null = null;
    private attribute2: number|null = null;
    private attribute3: number|null = null;
    private attribute4: number|null = null;
    private attribute5: number|null = null;
    private joinPolicy: string|null = null;
    private customRoles: Gs2Guild.RoleModel[]|null = null;
    private guildMemberDefaultRole: string|null = null;
    private currentMaximumMemberCount: number|null = null;
    private members: Gs2Guild.Member[]|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{guildModelName}', '.*')
            .replace('{guildName}', '.*')
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
            .replace('{guildName}', '.*')
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
            .replace('{guildName}', '.*')
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
            .replace('{guildName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getGuildName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{guildModelName}', '.*')
            .replace('{guildName}', '(.*)')
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
        if (this.getGuildName(grn) == null || this.getGuildName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        guildModelName: string|null,
        guildName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{guildModelName}', guildModelName ?? '')
            .replace('{guildName}', guildName ?? '');
    }
    public getGuildId(): string|null {
        return this.guildId;
    }
    public setGuildId(guildId: string|null) {
        this.guildId = guildId;
        return this;
    }
    public withGuildId(guildId: string|null): this {
        this.guildId = guildId;
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
    public getCurrentMaximumMemberCount(): number|null {
        return this.currentMaximumMemberCount;
    }
    public setCurrentMaximumMemberCount(currentMaximumMemberCount: number|null) {
        this.currentMaximumMemberCount = currentMaximumMemberCount;
        return this;
    }
    public withCurrentMaximumMemberCount(currentMaximumMemberCount: number|null): this {
        this.currentMaximumMemberCount = currentMaximumMemberCount;
        return this;
    }
    public getMembers(): Gs2Guild.Member[]|null {
        return this.members;
    }
    public setMembers(members: Gs2Guild.Member[]|null) {
        this.members = members;
        return this;
    }
    public withMembers(members: Gs2Guild.Member[]|null): this {
        this.members = members;
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

    public static fromDict(data: {[key: string]: any}): Guild|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Guild()
            .withGuildId(data["guildId"])
            .withGuildModelName(data["guildModelName"])
            .withName(data["name"])
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
            .withGuildMemberDefaultRole(data["guildMemberDefaultRole"])
            .withCurrentMaximumMemberCount(data["currentMaximumMemberCount"])
            .withMembers(data.members ?
                data.members.map((item: {[key: string]: any}) => {
                    return Gs2Guild.Member.fromDict(item);
                }
            ) : null)
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "guildId": this.getGuildId(),
            "guildModelName": this.getGuildModelName(),
            "name": this.getName(),
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
            "currentMaximumMemberCount": this.getCurrentMaximumMemberCount(),
            "members": this.getMembers() ?
                this.getMembers()!.map((item: Gs2Guild.Member) => {
                    return item.toDict();
                }
            ) : null,
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
