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

export default class ActionRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private accessToken: string|null = null;
    private areaModelName: string|null = null;
    private layerModelName: string|null = null;
    private position: Gs2MegaField.MyPosition|null = null;
    private scopes: Gs2MegaField.Scope[]|null = null;
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
    public getPosition(): Gs2MegaField.MyPosition|null {
        return this.position;
    }
    public setPosition(position: Gs2MegaField.MyPosition|null) {
        this.position = position;
        return this;
    }
    public withPosition(position: Gs2MegaField.MyPosition|null): this {
        this.position = position;
        return this;
    }
    public getScopes(): Gs2MegaField.Scope[]|null {
        return this.scopes;
    }
    public setScopes(scopes: Gs2MegaField.Scope[]|null) {
        this.scopes = scopes;
        return this;
    }
    public withScopes(scopes: Gs2MegaField.Scope[]|null): this {
        this.scopes = scopes;
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

    public static fromDict(data: {[key: string]: any}): ActionRequest {
        return new ActionRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withAreaModelName(data["areaModelName"])
            .withLayerModelName(data["layerModelName"])
            .withPosition(Gs2MegaField.MyPosition.fromDict(data["position"]))
            .withScopes(data.scopes ?
                data.scopes.map((item: {[key: string]: any}) => {
                    return Gs2MegaField.Scope.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "areaModelName": this.getAreaModelName(),
            "layerModelName": this.getLayerModelName(),
            "position": this.getPosition()?.toDict(),
            "scopes": this.getScopes() ?
                this.getScopes()!.map((item: Gs2MegaField.Scope) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}