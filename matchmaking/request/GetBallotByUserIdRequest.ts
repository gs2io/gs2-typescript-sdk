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

export default class GetBallotByUserIdRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private ratingName: string|null = null;
    private gatheringName: string|null = null;
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
            .withRatingName(data["ratingName"])
            .withGatheringName(data["gatheringName"])
            .withUserId(data["userId"])
            .withNumberOfPlayer(data["numberOfPlayer"])
            .withKeyId(data["keyId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "ratingName": this.getRatingName(),
            "gatheringName": this.getGatheringName(),
            "userId": this.getUserId(),
            "numberOfPlayer": this.getNumberOfPlayer(),
            "keyId": this.getKeyId(),
        };
    }
}