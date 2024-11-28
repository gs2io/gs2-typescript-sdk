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
const grnFormat: string = "grn:gs2:{region}:{ownerId}:ranking2:{namespaceName}:user:{userId}:cluster:{rankingName}:{clusterName}:{season}:reward:received";

export default class ClusterRankingReceivedReward implements IModel {
    private clusterRankingReceivedRewardId: string|null = null;
    private rankingName: string|null = null;
    private clusterName: string|null = null;
    private season: number|null = null;
    private userId: string|null = null;
    private receivedAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{rankingName}', '.*')
            .replace('{clusterName}', '.*')
            .replace('{season}', '.*')
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
            .replace('{rankingName}', '.*')
            .replace('{clusterName}', '.*')
            .replace('{season}', '.*')
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
            .replace('{rankingName}', '.*')
            .replace('{clusterName}', '.*')
            .replace('{season}', '.*')
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
            .replace('{rankingName}', '.*')
            .replace('{clusterName}', '.*')
            .replace('{season}', '.*')
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
            .replace('{userId}', '.*')
            .replace('{rankingName}', '(.*)')
            .replace('{clusterName}', '.*')
            .replace('{season}', '.*')
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
            .replace('{userId}', '.*')
            .replace('{rankingName}', '.*')
            .replace('{clusterName}', '(.*)')
            .replace('{season}', '.*')
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
            .replace('{userId}', '.*')
            .replace('{rankingName}', '.*')
            .replace('{clusterName}', '.*')
            .replace('{season}', '(.*)')
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
        if (this.getRankingName(grn) == null || this.getRankingName(grn) === '') {
            return false;
        }
        if (this.getClusterName(grn) == null || this.getClusterName(grn) === '') {
            return false;
        }
        if (this.getSeason(grn) == null || this.getSeason(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        userId: string|null,
        rankingName: string|null,
        clusterName: string|null,
        season: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{userId}', userId ?? '')
            .replace('{rankingName}', rankingName ?? '')
            .replace('{clusterName}', clusterName ?? '')
            .replace('{season}', season ?? '');
    }
    public getClusterRankingReceivedRewardId(): string|null {
        return this.clusterRankingReceivedRewardId;
    }
    public setClusterRankingReceivedRewardId(clusterRankingReceivedRewardId: string|null) {
        this.clusterRankingReceivedRewardId = clusterRankingReceivedRewardId;
        return this;
    }
    public withClusterRankingReceivedRewardId(clusterRankingReceivedRewardId: string|null): this {
        this.clusterRankingReceivedRewardId = clusterRankingReceivedRewardId;
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
    public getReceivedAt(): number|null {
        return this.receivedAt;
    }
    public setReceivedAt(receivedAt: number|null) {
        this.receivedAt = receivedAt;
        return this;
    }
    public withReceivedAt(receivedAt: number|null): this {
        this.receivedAt = receivedAt;
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

    public static fromDict(data: {[key: string]: any}): ClusterRankingReceivedReward|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ClusterRankingReceivedReward()
            .withClusterRankingReceivedRewardId(data["clusterRankingReceivedRewardId"])
            .withRankingName(data["rankingName"])
            .withClusterName(data["clusterName"])
            .withSeason(data["season"])
            .withUserId(data["userId"])
            .withReceivedAt(data["receivedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "clusterRankingReceivedRewardId": this.getClusterRankingReceivedRewardId(),
            "rankingName": this.getRankingName(),
            "clusterName": this.getClusterName(),
            "season": this.getSeason(),
            "userId": this.getUserId(),
            "receivedAt": this.getReceivedAt(),
            "revision": this.getRevision(),
        };
    }
}
