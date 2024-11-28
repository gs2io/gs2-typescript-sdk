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

import * as Gs2Matchmaking from '../../matchmaking/model'
const grnFormat: string = "grn:gs2:{region}:{ownerId}:matchmaking:{namespaceName}:season:{seasonName}:{season}:user:{userId}:joinedGathering";

export default class JoinedSeasonGathering implements IModel {
    private joinedSeasonGatheringId: string|null = null;
    private userId: string|null = null;
    private seasonName: string|null = null;
    private season: number|null = null;
    private tier: number|null = null;
    private seasonGatheringName: string|null = null;
    private createdAt: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{seasonName}', '.*')
            .replace('{season}', '.*')
            .replace('{userId}', '.*')
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
            .replace('{seasonName}', '.*')
            .replace('{season}', '.*')
            .replace('{userId}', '.*')
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
            .replace('{seasonName}', '.*')
            .replace('{season}', '.*')
            .replace('{userId}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getSeasonName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{seasonName}', '(.*)')
            .replace('{season}', '.*')
            .replace('{userId}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getSeason(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{seasonName}', '.*')
            .replace('{season}', '(.*)')
            .replace('{userId}', '.*')
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
            .replace('{seasonName}', '.*')
            .replace('{season}', '.*')
            .replace('{userId}', '(.*)')
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
        if (this.getSeasonName(grn) == null || this.getSeasonName(grn) === '') {
            return false;
        }
        if (this.getSeason(grn) == null || this.getSeason(grn) === '') {
            return false;
        }
        if (this.getUserId(grn) == null || this.getUserId(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        seasonName: string|null,
        season: string|null,
        userId: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{seasonName}', seasonName ?? '')
            .replace('{season}', season ?? '')
            .replace('{userId}', userId ?? '');
    }
    public getJoinedSeasonGatheringId(): string|null {
        return this.joinedSeasonGatheringId;
    }
    public setJoinedSeasonGatheringId(joinedSeasonGatheringId: string|null) {
        this.joinedSeasonGatheringId = joinedSeasonGatheringId;
        return this;
    }
    public withJoinedSeasonGatheringId(joinedSeasonGatheringId: string|null): this {
        this.joinedSeasonGatheringId = joinedSeasonGatheringId;
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
    public getSeasonName(): string|null {
        return this.seasonName;
    }
    public setSeasonName(seasonName: string|null) {
        this.seasonName = seasonName;
        return this;
    }
    public withSeasonName(seasonName: string|null): this {
        this.seasonName = seasonName;
        return this;
    }
    public getSeason(): number|null {
        return this.season;
    }
    public setSeason(season: number|null) {
        this.season = season;
        return this;
    }
    public withSeason(season: number|null): this {
        this.season = season;
        return this;
    }
    public getTier(): number|null {
        return this.tier;
    }
    public setTier(tier: number|null) {
        this.tier = tier;
        return this;
    }
    public withTier(tier: number|null): this {
        this.tier = tier;
        return this;
    }
    public getSeasonGatheringName(): string|null {
        return this.seasonGatheringName;
    }
    public setSeasonGatheringName(seasonGatheringName: string|null) {
        this.seasonGatheringName = seasonGatheringName;
        return this;
    }
    public withSeasonGatheringName(seasonGatheringName: string|null): this {
        this.seasonGatheringName = seasonGatheringName;
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

    public static fromDict(data: {[key: string]: any}): JoinedSeasonGathering|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new JoinedSeasonGathering()
            .withJoinedSeasonGatheringId(data["joinedSeasonGatheringId"])
            .withUserId(data["userId"])
            .withSeasonName(data["seasonName"])
            .withSeason(data["season"])
            .withTier(data["tier"])
            .withSeasonGatheringName(data["seasonGatheringName"])
            .withCreatedAt(data["createdAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "joinedSeasonGatheringId": this.getJoinedSeasonGatheringId(),
            "userId": this.getUserId(),
            "seasonName": this.getSeasonName(),
            "season": this.getSeason(),
            "tier": this.getTier(),
            "seasonGatheringName": this.getSeasonGatheringName(),
            "createdAt": this.getCreatedAt(),
        };
    }
}
