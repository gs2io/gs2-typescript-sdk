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

export default class Ballot implements IModel {
    private userId: string|null = null;
    private ratingName: string|null = null;
    private gatheringName: string|null = null;
    private numberOfPlayer: number|null = null;
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
    public getRatingName(): string|null {
        return this.ratingName;
    }
    public setRatingName(ratingName: string|null) {
        this.ratingName = ratingName;
        return this;
    }
    public withRatingName(ratingName: string|null): this {
        this.ratingName = ratingName;
        return this;
    }
    public getGatheringName(): string|null {
        return this.gatheringName;
    }
    public setGatheringName(gatheringName: string|null) {
        this.gatheringName = gatheringName;
        return this;
    }
    public withGatheringName(gatheringName: string|null): this {
        this.gatheringName = gatheringName;
        return this;
    }
    public getNumberOfPlayer(): number|null {
        return this.numberOfPlayer;
    }
    public setNumberOfPlayer(numberOfPlayer: number|null) {
        this.numberOfPlayer = numberOfPlayer;
        return this;
    }
    public withNumberOfPlayer(numberOfPlayer: number|null): this {
        this.numberOfPlayer = numberOfPlayer;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Ballot|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Ballot()
            .withUserId(data["userId"])
            .withRatingName(data["ratingName"])
            .withGatheringName(data["gatheringName"])
            .withNumberOfPlayer(data["numberOfPlayer"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "userId": this.getUserId(),
            "ratingName": this.getRatingName(),
            "gatheringName": this.getGatheringName(),
            "numberOfPlayer": this.getNumberOfPlayer(),
        };
    }
}
