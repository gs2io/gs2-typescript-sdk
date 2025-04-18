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

import * as Gs2Ranking2 from '../../ranking2/model'
import AcquireAction from './AcquireAction';
import RankingReward from './RankingReward';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:ranking2:{namespaceName}:master:model:cluster:{rankingName}";

export default class ClusterRankingModelMaster implements IModel {
    private clusterRankingModelId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private clusterType: string|null = null;
    private minimumValue: number|null = null;
    private maximumValue: number|null = null;
    private sum: boolean|null = null;
    private scoreTtlDays: number|null = null;
    private orderDirection: string|null = null;
    private entryPeriodEventId: string|null = null;
    private rankingRewards: Gs2Ranking2.RankingReward[]|null = null;
    private accessPeriodEventId: string|null = null;
    private rewardCalculationIndex: string|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rankingName}', '.*')
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
            .replace('{rankingName}', '.*')
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
            .replace('{rankingName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getRankingName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rankingName}', '(.*)')
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
        if (this.getRankingName(grn) == null || this.getRankingName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        rankingName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{rankingName}', rankingName ?? '');
    }
    public getClusterRankingModelId(): string|null {
        return this.clusterRankingModelId;
    }
    public setClusterRankingModelId(clusterRankingModelId: string|null) {
        this.clusterRankingModelId = clusterRankingModelId;
        return this;
    }
    public withClusterRankingModelId(clusterRankingModelId: string|null): this {
        this.clusterRankingModelId = clusterRankingModelId;
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
    public getClusterType(): string|null {
        return this.clusterType;
    }
    public setClusterType(clusterType: string|null) {
        this.clusterType = clusterType;
        return this;
    }
    public withClusterType(clusterType: string|null): this {
        this.clusterType = clusterType;
        return this;
    }
    public getMinimumValue(): number|null {
        return this.minimumValue;
    }
    public setMinimumValue(minimumValue: number|null) {
        this.minimumValue = minimumValue;
        return this;
    }
    public withMinimumValue(minimumValue: number|null): this {
        this.minimumValue = minimumValue;
        return this;
    }
    public getMaximumValue(): number|null {
        return this.maximumValue;
    }
    public setMaximumValue(maximumValue: number|null) {
        this.maximumValue = maximumValue;
        return this;
    }
    public withMaximumValue(maximumValue: number|null): this {
        this.maximumValue = maximumValue;
        return this;
    }
    public getSum(): boolean|null {
        return this.sum;
    }
    public setSum(sum: boolean|null) {
        this.sum = sum;
        return this;
    }
    public withSum(sum: boolean|null): this {
        this.sum = sum;
        return this;
    }
    public getScoreTtlDays(): number|null {
        return this.scoreTtlDays;
    }
    public setScoreTtlDays(scoreTtlDays: number|null) {
        this.scoreTtlDays = scoreTtlDays;
        return this;
    }
    public withScoreTtlDays(scoreTtlDays: number|null): this {
        this.scoreTtlDays = scoreTtlDays;
        return this;
    }
    public getOrderDirection(): string|null {
        return this.orderDirection;
    }
    public setOrderDirection(orderDirection: string|null) {
        this.orderDirection = orderDirection;
        return this;
    }
    public withOrderDirection(orderDirection: string|null): this {
        this.orderDirection = orderDirection;
        return this;
    }
    public getEntryPeriodEventId(): string|null {
        return this.entryPeriodEventId;
    }
    public setEntryPeriodEventId(entryPeriodEventId: string|null) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    }
    public withEntryPeriodEventId(entryPeriodEventId: string|null): this {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    }
    public getRankingRewards(): Gs2Ranking2.RankingReward[]|null {
        return this.rankingRewards;
    }
    public setRankingRewards(rankingRewards: Gs2Ranking2.RankingReward[]|null) {
        this.rankingRewards = rankingRewards;
        return this;
    }
    public withRankingRewards(rankingRewards: Gs2Ranking2.RankingReward[]|null): this {
        this.rankingRewards = rankingRewards;
        return this;
    }
    public getAccessPeriodEventId(): string|null {
        return this.accessPeriodEventId;
    }
    public setAccessPeriodEventId(accessPeriodEventId: string|null) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    }
    public withAccessPeriodEventId(accessPeriodEventId: string|null): this {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    }
    public getRewardCalculationIndex(): string|null {
        return this.rewardCalculationIndex;
    }
    public setRewardCalculationIndex(rewardCalculationIndex: string|null) {
        this.rewardCalculationIndex = rewardCalculationIndex;
        return this;
    }
    public withRewardCalculationIndex(rewardCalculationIndex: string|null): this {
        this.rewardCalculationIndex = rewardCalculationIndex;
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

    public static fromDict(data: {[key: string]: any}): ClusterRankingModelMaster|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ClusterRankingModelMaster()
            .withClusterRankingModelId(data["clusterRankingModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withClusterType(data["clusterType"])
            .withMinimumValue(data["minimumValue"])
            .withMaximumValue(data["maximumValue"])
            .withSum(data["sum"])
            .withScoreTtlDays(data["scoreTtlDays"])
            .withOrderDirection(data["orderDirection"])
            .withEntryPeriodEventId(data["entryPeriodEventId"])
            .withRankingRewards(data.rankingRewards ?
                data.rankingRewards.map((item: {[key: string]: any}) => {
                    return Gs2Ranking2.RankingReward.fromDict(item);
                }
            ) : null)
            .withAccessPeriodEventId(data["accessPeriodEventId"])
            .withRewardCalculationIndex(data["rewardCalculationIndex"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "clusterRankingModelId": this.getClusterRankingModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "clusterType": this.getClusterType(),
            "minimumValue": this.getMinimumValue(),
            "maximumValue": this.getMaximumValue(),
            "sum": this.getSum(),
            "scoreTtlDays": this.getScoreTtlDays(),
            "orderDirection": this.getOrderDirection(),
            "entryPeriodEventId": this.getEntryPeriodEventId(),
            "rankingRewards": this.getRankingRewards() ?
                this.getRankingRewards()!.map((item: Gs2Ranking2.RankingReward) => {
                    return item.toDict();
                }
            ) : null,
            "accessPeriodEventId": this.getAccessPeriodEventId(),
            "rewardCalculationIndex": this.getRewardCalculationIndex(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
