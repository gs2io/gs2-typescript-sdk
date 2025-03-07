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

import * as Gs2SeasonRating from '../../seasonRating/model'
import TierModel from './TierModel';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:seasonRating:{namespaceName}:model:{seasonName}";

export default class SeasonModel implements IModel {
    private seasonModelId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private tiers: Gs2SeasonRating.TierModel[]|null = null;
    private experienceModelId: string|null = null;
    private challengePeriodEventId: string|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{seasonName}', '.*')
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
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        seasonName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{seasonName}', seasonName ?? '');
    }
    public getSeasonModelId(): string|null {
        return this.seasonModelId;
    }
    public setSeasonModelId(seasonModelId: string|null) {
        this.seasonModelId = seasonModelId;
        return this;
    }
    public withSeasonModelId(seasonModelId: string|null): this {
        this.seasonModelId = seasonModelId;
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
    public getTiers(): Gs2SeasonRating.TierModel[]|null {
        return this.tiers;
    }
    public setTiers(tiers: Gs2SeasonRating.TierModel[]|null) {
        this.tiers = tiers;
        return this;
    }
    public withTiers(tiers: Gs2SeasonRating.TierModel[]|null): this {
        this.tiers = tiers;
        return this;
    }
    public getExperienceModelId(): string|null {
        return this.experienceModelId;
    }
    public setExperienceModelId(experienceModelId: string|null) {
        this.experienceModelId = experienceModelId;
        return this;
    }
    public withExperienceModelId(experienceModelId: string|null): this {
        this.experienceModelId = experienceModelId;
        return this;
    }
    public getChallengePeriodEventId(): string|null {
        return this.challengePeriodEventId;
    }
    public setChallengePeriodEventId(challengePeriodEventId: string|null) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    }
    public withChallengePeriodEventId(challengePeriodEventId: string|null): this {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): SeasonModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new SeasonModel()
            .withSeasonModelId(data["seasonModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withTiers(data.tiers ?
                data.tiers.map((item: {[key: string]: any}) => {
                    return Gs2SeasonRating.TierModel.fromDict(item);
                }
            ) : null)
            .withExperienceModelId(data["experienceModelId"])
            .withChallengePeriodEventId(data["challengePeriodEventId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "seasonModelId": this.getSeasonModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "tiers": this.getTiers() ?
                this.getTiers()!.map((item: Gs2SeasonRating.TierModel) => {
                    return item.toDict();
                }
            ) : null,
            "experienceModelId": this.getExperienceModelId(),
            "challengePeriodEventId": this.getChallengePeriodEventId(),
        };
    }
}
