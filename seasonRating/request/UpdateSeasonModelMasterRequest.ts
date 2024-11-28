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

import * as Gs2SeasonRating from '../model'

export default class UpdateSeasonModelMasterRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private seasonName: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private tiers: Gs2SeasonRating.TierModel[]|null = null;
    private experienceModelId: string|null = null;
    private challengePeriodEventId: string|null = null;

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

    public static fromDict(data: {[key: string]: any}): UpdateSeasonModelMasterRequest {
        return new UpdateSeasonModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withSeasonName(data["seasonName"])
            .withDescription(data["description"])
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
            "namespaceName": this.getNamespaceName(),
            "seasonName": this.getSeasonName(),
            "description": this.getDescription(),
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