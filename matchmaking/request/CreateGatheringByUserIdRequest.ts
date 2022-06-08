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

export default class CreateGatheringByUserIdRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private userId: string|null = null;
    private player: Gs2Matchmaking.Player|null = null;
    private attributeRanges: Gs2Matchmaking.AttributeRange[]|null = null;
    private capacityOfRoles: Gs2Matchmaking.CapacityOfRole[]|null = null;
    private allowUserIds: string[]|null = null;
    private expiresAt: number|null = null;
    private expiresAtTimeSpan: Gs2Matchmaking.TimeSpan|null = null;
    private duplicationAvoider: string|null = null;

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
    public getAttributeRanges(): Gs2Matchmaking.AttributeRange[]|null {
        return this.attributeRanges;
    }
    public setAttributeRanges(attributeRanges: Gs2Matchmaking.AttributeRange[]|null) {
        this.attributeRanges = attributeRanges;
        return this;
    }
    public withAttributeRanges(attributeRanges: Gs2Matchmaking.AttributeRange[]|null): this {
        this.attributeRanges = attributeRanges;
        return this;
    }
    public getCapacityOfRoles(): Gs2Matchmaking.CapacityOfRole[]|null {
        return this.capacityOfRoles;
    }
    public setCapacityOfRoles(capacityOfRoles: Gs2Matchmaking.CapacityOfRole[]|null) {
        this.capacityOfRoles = capacityOfRoles;
        return this;
    }
    public withCapacityOfRoles(capacityOfRoles: Gs2Matchmaking.CapacityOfRole[]|null): this {
        this.capacityOfRoles = capacityOfRoles;
        return this;
    }
    public getAllowUserIds(): string[]|null {
        return this.allowUserIds;
    }
    public setAllowUserIds(allowUserIds: string[]|null) {
        this.allowUserIds = allowUserIds;
        return this;
    }
    public withAllowUserIds(allowUserIds: string[]|null): this {
        this.allowUserIds = allowUserIds;
        return this;
    }
    public getExpiresAt(): number|null {
        return this.expiresAt;
    }
    public setExpiresAt(expiresAt: number|null) {
        this.expiresAt = expiresAt;
        return this;
    }
    public withExpiresAt(expiresAt: number|null): this {
        this.expiresAt = expiresAt;
        return this;
    }
    public getExpiresAtTimeSpan(): Gs2Matchmaking.TimeSpan|null {
        return this.expiresAtTimeSpan;
    }
    public setExpiresAtTimeSpan(expiresAtTimeSpan: Gs2Matchmaking.TimeSpan|null) {
        this.expiresAtTimeSpan = expiresAtTimeSpan;
        return this;
    }
    public withExpiresAtTimeSpan(expiresAtTimeSpan: Gs2Matchmaking.TimeSpan|null): this {
        this.expiresAtTimeSpan = expiresAtTimeSpan;
        return this;
    }

    public getDuplicationAvoider(): string|null {
        return this.duplicationAvoider;
    }

    public setDuplicationAvoider(duplicationAvoider: string|null) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    }

    public withDuplicationAvoider(duplicationAvoider: string|null): this {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CreateGatheringByUserIdRequest {
        return new CreateGatheringByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withPlayer(Gs2Matchmaking.Player.fromDict(data["player"]))
            .withAttributeRanges(data.attributeRanges ?
                data.attributeRanges.map((item: {[key: string]: any}) => {
                    return Gs2Matchmaking.AttributeRange.fromDict(item);
                }
            ) : [])
            .withCapacityOfRoles(data.capacityOfRoles ?
                data.capacityOfRoles.map((item: {[key: string]: any}) => {
                    return Gs2Matchmaking.CapacityOfRole.fromDict(item);
                }
            ) : [])
            .withAllowUserIds(data.allowUserIds ?
                data.allowUserIds.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : [])
            .withExpiresAt(data["expiresAt"])
            .withExpiresAtTimeSpan(Gs2Matchmaking.TimeSpan.fromDict(data["expiresAtTimeSpan"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "player": this.getPlayer()?.toDict(),
            "attributeRanges": this.getAttributeRanges() ?
                this.getAttributeRanges()!.map((item: Gs2Matchmaking.AttributeRange) => {
                    return item.toDict();
                }
            ) : [],
            "capacityOfRoles": this.getCapacityOfRoles() ?
                this.getCapacityOfRoles()!.map((item: Gs2Matchmaking.CapacityOfRole) => {
                    return item.toDict();
                }
            ) : [],
            "allowUserIds": this.getAllowUserIds() ?
                this.getAllowUserIds()!.map((item: string) => {
                    return item;
                }
            ) : [],
            "expiresAt": this.getExpiresAt(),
            "expiresAtTimeSpan": this.getExpiresAtTimeSpan()?.toDict(),
        };
    }
}