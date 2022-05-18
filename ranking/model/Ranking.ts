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

export default class Ranking implements IModel {
    private rank: number|null = null;
    private index: number|null = null;
    private userId: string|null = null;
    private score: number|null = null;
    private metadata: string|null = null;
    private createdAt: number|null = null;

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

    public static fromDict(data: {[key: string]: any}): Ranking|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Ranking()
            .withRank(data["rank"])
            .withIndex(data["index"])
            .withUserId(data["userId"])
            .withScore(data["score"])
            .withMetadata(data["metadata"])
            .withCreatedAt(data["createdAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "rank": this.getRank(),
            "index": this.getIndex(),
            "userId": this.getUserId(),
            "score": this.getScore(),
            "metadata": this.getMetadata(),
            "createdAt": this.getCreatedAt(),
        };
    }
}
