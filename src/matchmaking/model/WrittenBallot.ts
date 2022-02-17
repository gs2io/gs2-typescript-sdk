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
import { Ballot } from './Ballot';
import { GameResult } from './GameResult';

export class WrittenBallot implements IModel {
    private ballot: Ballot|null = null;
    private gameResults: GameResult[]|null = null;

    public getBallot(): Ballot|null {
        return this.ballot;
    }

    public setBallot(ballot: Ballot|null) {
        this.ballot = ballot;
        return this;
    }

    public withBallot(ballot: Ballot|null): this {
        this.ballot = ballot;
        return this;
    }

    public getGameResults(): GameResult[]|null {
        return this.gameResults;
    }

    public setGameResults(gameResults: GameResult[]|null) {
        this.gameResults = gameResults;
        return this;
    }

    public withGameResults(gameResults: GameResult[]|null): this {
        this.gameResults = gameResults;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): WrittenBallot|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new WrittenBallot()
            .withBallot(Ballot.fromDict(data["ballot"]))
            .withGameResults(data.gameResults ?
                data.gameResults.map((item: {[key: string]: any}) => {
                    return GameResult.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "ballot": this.getBallot()?.toDict(),
            "gameResults": this.getGameResults() ?
                this.getGameResults()!.map((item: GameResult) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
