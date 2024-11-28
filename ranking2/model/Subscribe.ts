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
const grnFormat: string = "grn:gs2:{region}:{ownerId}:ranking2:{namespaceName}:user:{userId}:subscribe:{rankingName}";

export default class Subscribe implements IModel {
    private subscribeId: string|null = null;
    private rankingName: string|null = null;
    private userId: string|null = null;
    private targetUserIds: string[]|null = null;
    private fromUserIds: string[]|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
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
            .replace('{userId}', '.*')
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
            .replace('{userId}', '.*')
            .replace('{rankingName}', '.*')
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
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        userId: string|null,
        rankingName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{userId}', userId ?? '')
            .replace('{rankingName}', rankingName ?? '');
    }
    public getSubscribeId(): string|null {
        return this.subscribeId;
    }
    public setSubscribeId(subscribeId: string|null) {
        this.subscribeId = subscribeId;
        return this;
    }
    public withSubscribeId(subscribeId: string|null): this {
        this.subscribeId = subscribeId;
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
    public getTargetUserIds(): string[]|null {
        return this.targetUserIds;
    }
    public setTargetUserIds(targetUserIds: string[]|null) {
        this.targetUserIds = targetUserIds;
        return this;
    }
    public withTargetUserIds(targetUserIds: string[]|null): this {
        this.targetUserIds = targetUserIds;
        return this;
    }
    public getFromUserIds(): string[]|null {
        return this.fromUserIds;
    }
    public setFromUserIds(fromUserIds: string[]|null) {
        this.fromUserIds = fromUserIds;
        return this;
    }
    public withFromUserIds(fromUserIds: string[]|null): this {
        this.fromUserIds = fromUserIds;
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

    public static fromDict(data: {[key: string]: any}): Subscribe|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Subscribe()
            .withSubscribeId(data["subscribeId"])
            .withRankingName(data["rankingName"])
            .withUserId(data["userId"])
            .withTargetUserIds(data.targetUserIds ?
                data.targetUserIds.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : null)
            .withFromUserIds(data.fromUserIds ?
                data.fromUserIds.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : null)
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "subscribeId": this.getSubscribeId(),
            "rankingName": this.getRankingName(),
            "userId": this.getUserId(),
            "targetUserIds": this.getTargetUserIds() ?
                this.getTargetUserIds()!.map((item: string) => {
                    return item;
                }
            ) : null,
            "fromUserIds": this.getFromUserIds() ?
                this.getFromUserIds()!.map((item: string) => {
                    return item;
                }
            ) : null,
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
