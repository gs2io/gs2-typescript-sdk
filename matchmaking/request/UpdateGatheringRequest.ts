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

export default class UpdateGatheringRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private gatheringName: string|null = null;
    private accessToken: string|null = null;
    private attributeRanges: Gs2Matchmaking.AttributeRange[]|null = null;
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
    public getAccessToken(): string|null {
        return this.accessToken;
    }
    public setAccessToken(accessToken: string|null) {
        this.accessToken = accessToken;
        return this;
    }
    public withAccessToken(accessToken: string|null): this {
        this.accessToken = accessToken;
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

    public static fromDict(data: {[key: string]: any}): UpdateGatheringRequest {
        return new UpdateGatheringRequest()
            .withNamespaceName(data["namespaceName"])
            .withGatheringName(data["gatheringName"])
            .withAccessToken(data["accessToken"])
            .withAttributeRanges(data.attributeRanges ?
                data.attributeRanges.map((item: {[key: string]: any}) => {
                    return Gs2Matchmaking.AttributeRange.fromDict(item);
                }
            ) : null);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "gatheringName": this.getGatheringName(),
            "accessToken": this.getAccessToken(),
            "attributeRanges": this.getAttributeRanges() ?
                this.getAttributeRanges()!.map((item: Gs2Matchmaking.AttributeRange) => {
                    return item.toDict();
                }
            ) : null,
        };
    }
}