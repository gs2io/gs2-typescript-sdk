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

export default class GameResult implements IModel {
    private rank: number|null = null;
    private userId: string|null = null;
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

    public static fromDict(data: {[key: string]: any}): GameResult|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new GameResult()
            .withRank(data["rank"])
            .withUserId(data["userId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "rank": this.getRank(),
            "userId": this.getUserId(),
        };
    }
}
