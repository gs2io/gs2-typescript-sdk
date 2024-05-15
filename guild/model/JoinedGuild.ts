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
const grnFormat: string = "grn:gs2:{region}:{ownerId}:guild:{namespaceName}:user:{userId}:guild:{guildModelName}:{guildName}";

export default class JoinedGuild implements IModel {
    private joinedGuildId: string|null = null;
    private guildModelName: string|null = null;
    private guildName: string|null = null;
    private userId: string|null = null;
    private createdAt: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
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
            .replace('{userId}', '.*')
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
            .replace('{userId}', '.*')
            .replace('{guildModelName}', '.*')
            .replace('{guildName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getUserId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
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
            .replace('{userId}', '.*')
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
            .replace('{userId}', '.*')
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
        if (this.getUserId(grn) == null || this.getUserId(grn) === '') {
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
        userId: string|null,
        guildModelName: string|null,
        guildName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{userId}', userId ?? '')
            .replace('{guildModelName}', guildModelName ?? '')
            .replace('{guildName}', guildName ?? '');
    }
    public getJoinedGuildId(): string|null {
        return this.joinedGuildId;
    }
    public setJoinedGuildId(joinedGuildId: string|null) {
        this.joinedGuildId = joinedGuildId;
        return this;
    }
    public withJoinedGuildId(joinedGuildId: string|null): this {
        this.joinedGuildId = joinedGuildId;
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
    public getGuildName(): string|null {
        return this.guildName;
    }
    public setGuildName(guildName: string|null) {
        this.guildName = guildName;
        return this;
    }
    public withGuildName(guildName: string|null): this {
        this.guildName = guildName;
        return this;
    }
    public getUserId(): string|null {
        return this.userId;
    }
    public setUserId(userId: string|null) {
        this.userId = userId;
        return this;
    }
    public withUserId(userId: string|null): this {
        this.userId = userId;
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

    public static fromDict(data: {[key: string]: any}): JoinedGuild|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new JoinedGuild()
            .withJoinedGuildId(data["joinedGuildId"])
            .withGuildModelName(data["guildModelName"])
            .withGuildName(data["guildName"])
            .withUserId(data["userId"])
            .withCreatedAt(data["createdAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "joinedGuildId": this.getJoinedGuildId(),
            "guildModelName": this.getGuildModelName(),
            "guildName": this.getGuildName(),
            "userId": this.getUserId(),
            "createdAt": this.getCreatedAt(),
        };
    }
}
