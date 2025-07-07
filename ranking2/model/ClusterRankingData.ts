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
const grnFormat: string = "grn:gs2:{region}:{ownerId}:ranking2:{namespaceName}:cluster:{rankingName}:ranking:cluster:{clusterName}:{season}:user:{scorerUserId}:score";

export default class ClusterRankingData implements IModel {
    private clusterRankingDataId: string|null = null;
    private rankingName: string|null = null;
    private clusterName: string|null = null;
    private season: number|null = null;
    private userId: string|null = null;
    private index: number|null = null;
    private rank: number|null = null;
    private score: number|null = null;
    private metadata: string|null = null;
    private invertUpdatedAt: number|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rankingName}', '.*')
            .replace('{clusterName}', '.*')
            .replace('{season}', '.*')
            .replace('{scorerUserId}', '.*')
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
            .replace('{clusterName}', '.*')
            .replace('{season}', '.*')
            .replace('{scorerUserId}', '.*')
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
            .replace('{clusterName}', '.*')
            .replace('{season}', '.*')
            .replace('{scorerUserId}', '.*')
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
            .replace('{clusterName}', '.*')
            .replace('{season}', '.*')
            .replace('{scorerUserId}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getClusterName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rankingName}', '.*')
            .replace('{clusterName}', '(.*)')
            .replace('{season}', '.*')
            .replace('{scorerUserId}', '.*')
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
            .replace('{rankingName}', '.*')
            .replace('{clusterName}', '.*')
            .replace('{season}', '(.*)')
            .replace('{scorerUserId}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getScorerUserId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rankingName}', '.*')
            .replace('{clusterName}', '.*')
            .replace('{season}', '.*')
            .replace('{scorerUserId}', '(.*)')
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
        if (this.getClusterName(grn) == null || this.getClusterName(grn) === '') {
            return false;
        }
        if (this.getSeason(grn) == null || this.getSeason(grn) === '') {
            return false;
        }
        if (this.getScorerUserId(grn) == null || this.getScorerUserId(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        rankingName: string|null,
        clusterName: string|null,
        season: string|null,
        scorerUserId: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{rankingName}', rankingName ?? '')
            .replace('{clusterName}', clusterName ?? '')
            .replace('{season}', season ?? '')
            .replace('{scorerUserId}', scorerUserId ?? '');
    }
    public getClusterRankingDataId(): string|null {
        return this.clusterRankingDataId;
    }
    public setClusterRankingDataId(clusterRankingDataId: string|null) {
        this.clusterRankingDataId = clusterRankingDataId;
        return this;
    }
    public withClusterRankingDataId(clusterRankingDataId: string|null): this {
        this.clusterRankingDataId = clusterRankingDataId;
        return this;
    }
    public getRankingName(): string|null {
        return this.rankingName;
    }
    public setRankingName(rankingName: string|null) {
        this.rankingName = rankingName;
        return this;
    }
    public withRankingName(rankingName: string|null): this {
        this.rankingName = rankingName;
        return this;
    }
    public getClusterName(): string|null {
        return this.clusterName;
    }
    public setClusterName(clusterName: string|null) {
        this.clusterName = clusterName;
        return this;
    }
    public withClusterName(clusterName: string|null): this {
        this.clusterName = clusterName;
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
    public getIndex(): number|null {
        return this.index;
    }
    public setIndex(index: number|null) {
        this.index = index;
        return this;
    }
    public withIndex(index: number|null): this {
        this.index = index;
        return this;
    }
    public getRank(): number|null {
        return this.rank;
    }
    public setRank(rank: number|null) {
        this.rank = rank;
        return this;
    }
    public withRank(rank: number|null): this {
        this.rank = rank;
        return this;
    }
    public getScore(): number|null {
        return this.score;
    }
    public setScore(score: number|null) {
        this.score = score;
        return this;
    }
    public withScore(score: number|null): this {
        this.score = score;
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
    public getInvertUpdatedAt(): number|null {
        return this.invertUpdatedAt;
    }
    public setInvertUpdatedAt(invertUpdatedAt: number|null) {
        this.invertUpdatedAt = invertUpdatedAt;
        return this;
    }
    public withInvertUpdatedAt(invertUpdatedAt: number|null): this {
        this.invertUpdatedAt = invertUpdatedAt;
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

    public static fromDict(data: {[key: string]: any}): ClusterRankingData|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ClusterRankingData()
            .withClusterRankingDataId(data["clusterRankingDataId"])
            .withRankingName(data["rankingName"])
            .withClusterName(data["clusterName"])
            .withSeason(data["season"])
            .withUserId(data["userId"])
            .withIndex(data["index"])
            .withRank(data["rank"])
            .withScore(data["score"])
            .withMetadata(data["metadata"])
            .withInvertUpdatedAt(data["invertUpdatedAt"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "clusterRankingDataId": this.getClusterRankingDataId(),
            "rankingName": this.getRankingName(),
            "clusterName": this.getClusterName(),
            "season": this.getSeason(),
            "userId": this.getUserId(),
            "index": this.getIndex(),
            "rank": this.getRank(),
            "score": this.getScore(),
            "metadata": this.getMetadata(),
            "invertUpdatedAt": this.getInvertUpdatedAt(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
