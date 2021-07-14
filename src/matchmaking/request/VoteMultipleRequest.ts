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

import IRequest from '@/gs2/core/interface/IRequest';

import * as Gs2Matchmaking from '../model'

export class VoteMultipleRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private signedBallots: Gs2Matchmaking.SignedBallot[]|null = null;
    private gameResults: Gs2Matchmaking.GameResult[]|null = null;
    private keyId: string|null = null;

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

    public getSignedBallots(): Gs2Matchmaking.SignedBallot[]|null {
        return this.signedBallots;
    }

    public setSignedBallots(signedBallots: Gs2Matchmaking.SignedBallot[]|null) {
        this.signedBallots = signedBallots;
        return this;
    }

    public withSignedBallots(signedBallots: Gs2Matchmaking.SignedBallot[]|null): this {
        this.signedBallots = signedBallots;
        return this;
    }

    public getGameResults(): Gs2Matchmaking.GameResult[]|null {
        return this.gameResults;
    }

    public setGameResults(gameResults: Gs2Matchmaking.GameResult[]|null) {
        this.gameResults = gameResults;
        return this;
    }

    public withGameResults(gameResults: Gs2Matchmaking.GameResult[]|null): this {
        this.gameResults = gameResults;
        return this;
    }

    public getKeyId(): string|null {
        return this.keyId;
    }

    public setKeyId(keyId: string|null) {
        this.keyId = keyId;
        return this;
    }

    public withKeyId(keyId: string|null): this {
        this.keyId = keyId;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): VoteMultipleRequest {
        return new VoteMultipleRequest()
            .withNamespaceName(data["namespaceName"])
            .withSignedBallots(data.signedBallots ?
                data.signedBallots.map((item: {[key: string]: any}) => {
                    return Gs2Matchmaking.SignedBallot.fromDict(item);
                }
            ) : [])
            .withGameResults(data.gameResults ?
                data.gameResults.map((item: {[key: string]: any}) => {
                    return Gs2Matchmaking.GameResult.fromDict(item);
                }
            ) : [])
            .withKeyId(data["keyId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "signedBallots": this.getSignedBallots() ?
                this.getSignedBallots()!.map((item: Gs2Matchmaking.SignedBallot) => {
                    return item.toDict();
                }
            ) : [],
            "gameResults": this.getGameResults() ?
                this.getGameResults()!.map((item: Gs2Matchmaking.GameResult) => {
                    return item.toDict();
                }
            ) : [],
            "keyId": this.getKeyId(),
        };
    }
}