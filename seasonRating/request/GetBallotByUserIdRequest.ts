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

import * as Gs2SeasonRating from '../model'

export default class GetBallotByUserIdRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private seasonName: string|null = null;
    private sessionName: string|null = null;
    private userId: string|null = null;
    private numberOfPlayer: number|null = null;
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
    public getSeasonName(): string|null {
        return this.seasonName;
    }
    public setSeasonName(seasonName: string|null) {
        this.seasonName = seasonName;
        return this;
    }
    public withSeasonName(seasonName: string|null): this {
        this.seasonName = seasonName;
        return this;
    }
    public getSessionName(): string|null {
        return this.sessionName;
    }
    public setSessionName(sessionName: string|null) {
        this.sessionName = sessionName;
        return this;
    }
    public withSessionName(sessionName: string|null): this {
        this.sessionName = sessionName;
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

    public static fromDict(data: {[key: string]: any}): GetBallotByUserIdRequest {
        return new GetBallotByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withSeasonName(data["seasonName"])
            .withSessionName(data["sessionName"])
            .withUserId(data["userId"])
            .withNumberOfPlayer(data["numberOfPlayer"])
            .withKeyId(data["keyId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "seasonName": this.getSeasonName(),
            "sessionName": this.getSessionName(),
            "userId": this.getUserId(),
            "numberOfPlayer": this.getNumberOfPlayer(),
            "keyId": this.getKeyId(),
        };
    }
}