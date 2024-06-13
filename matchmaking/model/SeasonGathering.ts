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
const grnFormat: string = "grn:gs2:{region}:{ownerId}:matchmaking:{namespaceName}:season:{seasonName}:{season}:{tier}:gathering:{seasonGatheringName}";

export default class SeasonGathering implements IModel {
    private seasonGatheringId: string|null = null;
    private seasonName: string|null = null;
    private season: number|null = null;
    private tier: number|null = null;
    private name: string|null = null;
    private participants: string[]|null = null;
    private createdAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{seasonName}', '.*')
            .replace('{season}', '.*')
            .replace('{tier}', '.*')
            .replace('{seasonGatheringName}', '.*')
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
            .replace('{tier}', '.*')
            .replace('{seasonGatheringName}', '.*')
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
            .replace('{tier}', '.*')
            .replace('{seasonGatheringName}', '.*')
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
            .replace('{tier}', '.*')
            .replace('{seasonGatheringName}', '.*')
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
            .replace('{tier}', '.*')
            .replace('{seasonGatheringName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getTier(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{seasonName}', '.*')
            .replace('{season}', '.*')
            .replace('{tier}', '(.*)')
            .replace('{seasonGatheringName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getSeasonGatheringName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{seasonName}', '.*')
            .replace('{season}', '.*')
            .replace('{tier}', '.*')
            .replace('{seasonGatheringName}', '(.*)')
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
        if (this.getTier(grn) == null || this.getTier(grn) === '') {
            return false;
        }
        if (this.getSeasonGatheringName(grn) == null || this.getSeasonGatheringName(grn) === '') {
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
        tier: string|null,
        seasonGatheringName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{seasonName}', seasonName ?? '')
            .replace('{season}', season ?? '')
            .replace('{tier}', tier ?? '')
            .replace('{seasonGatheringName}', seasonGatheringName ?? '');
    }
    public getSeasonGatheringId(): string|null {
        return this.seasonGatheringId;
    }
    public setSeasonGatheringId(seasonGatheringId: string|null) {
        this.seasonGatheringId = seasonGatheringId;
        return this;
    }
    public withSeasonGatheringId(seasonGatheringId: string|null): this {
        this.seasonGatheringId = seasonGatheringId;
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
    public getParticipants(): string[]|null {
        return this.participants;
    }
    public setParticipants(participants: string[]|null) {
        this.participants = participants;
        return this;
    }
    public withParticipants(participants: string[]|null): this {
        this.participants = participants;
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

    public static fromDict(data: {[key: string]: any}): SeasonGathering|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new SeasonGathering()
            .withSeasonGatheringId(data["seasonGatheringId"])
            .withSeasonName(data["seasonName"])
            .withSeason(data["season"])
            .withTier(data["tier"])
            .withName(data["name"])
            .withParticipants(data.participants ?
                data.participants.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : [])
            .withCreatedAt(data["createdAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "seasonGatheringId": this.getSeasonGatheringId(),
            "seasonName": this.getSeasonName(),
            "season": this.getSeason(),
            "tier": this.getTier(),
            "name": this.getName(),
            "participants": this.getParticipants() ?
                this.getParticipants()!.map((item: string) => {
                    return item;
                }
            ) : [],
            "createdAt": this.getCreatedAt(),
            "revision": this.getRevision(),
        };
    }
}
