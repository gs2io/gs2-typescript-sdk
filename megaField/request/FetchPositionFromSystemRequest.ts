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

import * as Gs2MegaField from '../model'

export default class FetchPositionFromSystemRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private areaModelName: string|null = null;
    private layerModelName: string|null = null;
    private userIds: string[]|null = null;
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
    public getAreaModelName(): string|null {
        return this.areaModelName;
    }
    public setAreaModelName(areaModelName: string|null) {
        this.areaModelName = areaModelName;
        return this;
    }
    public withAreaModelName(areaModelName: string|null): this {
        this.areaModelName = areaModelName;
        return this;
    }
    public getLayerModelName(): string|null {
        return this.layerModelName;
    }
    public setLayerModelName(layerModelName: string|null) {
        this.layerModelName = layerModelName;
        return this;
    }
    public withLayerModelName(layerModelName: string|null): this {
        this.layerModelName = layerModelName;
        return this;
    }
    public getUserIds(): string[]|null {
        return this.userIds;
    }
    public setUserIds(userIds: string[]|null) {
        this.userIds = userIds;
        return this;
    }
    public withUserIds(userIds: string[]|null): this {
        this.userIds = userIds;
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

    public static fromDict(data: {[key: string]: any}): FetchPositionFromSystemRequest {
        return new FetchPositionFromSystemRequest()
            .withNamespaceName(data["namespaceName"])
            .withAreaModelName(data["areaModelName"])
            .withLayerModelName(data["layerModelName"])
            .withUserIds(data.userIds ?
                data.userIds.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : null);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "areaModelName": this.getAreaModelName(),
            "layerModelName": this.getLayerModelName(),
            "userIds": this.getUserIds() ?
                this.getUserIds()!.map((item: string) => {
                    return item;
                }
            ) : null,
        };
    }
}