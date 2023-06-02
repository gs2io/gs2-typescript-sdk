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

export default class MatchmakingNamespaceStatistics implements IModel {
    private createGathering: number|null = null;
    private matchmaking: number|null = null;
    private completeRate: number|null = null;
    public getCreateGathering(): number|null {
        return this.createGathering;
    }
    public setCreateGathering(createGathering: number|null) {
        this.createGathering = createGathering;
        return this;
    }
    public withCreateGathering(createGathering: number|null): this {
        this.createGathering = createGathering;
        return this;
    }
    public getMatchmaking(): number|null {
        return this.matchmaking;
    }
    public setMatchmaking(matchmaking: number|null) {
        this.matchmaking = matchmaking;
        return this;
    }
    public withMatchmaking(matchmaking: number|null): this {
        this.matchmaking = matchmaking;
        return this;
    }
    public getCompleteRate(): number|null {
        return this.completeRate;
    }
    public setCompleteRate(completeRate: number|null) {
        this.completeRate = completeRate;
        return this;
    }
    public withCompleteRate(completeRate: number|null): this {
        this.completeRate = completeRate;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): MatchmakingNamespaceStatistics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MatchmakingNamespaceStatistics()
            .withCreateGathering(data["createGathering"])
            .withMatchmaking(data["matchmaking"])
            .withCompleteRate(data["completeRate"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "createGathering": this.getCreateGathering(),
            "matchmaking": this.getMatchmaking(),
            "completeRate": this.getCompleteRate(),
        };
    }
}
