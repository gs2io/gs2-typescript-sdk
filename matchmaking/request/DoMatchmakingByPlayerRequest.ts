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

import IRequest from '../../core/interface/IRequest';

import * as Gs2Matchmaking from '../model'

export default class DoMatchmakingByPlayerRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private player: Gs2Matchmaking.Player|null = null;
    private matchmakingContextToken: string|null = null;

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

    public getPlayer(): Gs2Matchmaking.Player|null {
        return this.player;
    }

    public setPlayer(player: Gs2Matchmaking.Player|null) {
        this.player = player;
        return this;
    }

    public withPlayer(player: Gs2Matchmaking.Player|null): this {
        this.player = player;
        return this;
    }

    public getMatchmakingContextToken(): string|null {
        return this.matchmakingContextToken;
    }

    public setMatchmakingContextToken(matchmakingContextToken: string|null) {
        this.matchmakingContextToken = matchmakingContextToken;
        return this;
    }

    public withMatchmakingContextToken(matchmakingContextToken: string|null): this {
        this.matchmakingContextToken = matchmakingContextToken;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): DoMatchmakingByPlayerRequest {
        return new DoMatchmakingByPlayerRequest()
            .withNamespaceName(data["namespaceName"])
            .withPlayer(Gs2Matchmaking.Player.fromDict(data["player"]))
            .withMatchmakingContextToken(data["matchmakingContextToken"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "player": this.getPlayer()?.toDict(),
            "matchmakingContextToken": this.getMatchmakingContextToken(),
        };
    }
}