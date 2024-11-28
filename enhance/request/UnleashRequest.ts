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

import * as Gs2Enhance from '../model'

export default class UnleashRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private rateName: string|null = null;
    private accessToken: string|null = null;
    private targetItemSetId: string|null = null;
    private materials: string[]|null = null;
    private config: Gs2Enhance.Config[]|null = null;
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
    public getRateName(): string|null {
        return this.rateName;
    }
    public setRateName(rateName: string|null) {
        this.rateName = rateName;
        return this;
    }
    public withRateName(rateName: string|null): this {
        this.rateName = rateName;
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
    public getTargetItemSetId(): string|null {
        return this.targetItemSetId;
    }
    public setTargetItemSetId(targetItemSetId: string|null) {
        this.targetItemSetId = targetItemSetId;
        return this;
    }
    public withTargetItemSetId(targetItemSetId: string|null): this {
        this.targetItemSetId = targetItemSetId;
        return this;
    }
    public getMaterials(): string[]|null {
        return this.materials;
    }
    public setMaterials(materials: string[]|null) {
        this.materials = materials;
        return this;
    }
    public withMaterials(materials: string[]|null): this {
        this.materials = materials;
        return this;
    }
    public getConfig(): Gs2Enhance.Config[]|null {
        return this.config;
    }
    public setConfig(config: Gs2Enhance.Config[]|null) {
        this.config = config;
        return this;
    }
    public withConfig(config: Gs2Enhance.Config[]|null): this {
        this.config = config;
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

    public static fromDict(data: {[key: string]: any}): UnleashRequest {
        return new UnleashRequest()
            .withNamespaceName(data["namespaceName"])
            .withRateName(data["rateName"])
            .withAccessToken(data["accessToken"])
            .withTargetItemSetId(data["targetItemSetId"])
            .withMaterials(data.materials ?
                data.materials.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : null)
            .withConfig(data.config ?
                data.config.map((item: {[key: string]: any}) => {
                    return Gs2Enhance.Config.fromDict(item);
                }
            ) : null);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "rateName": this.getRateName(),
            "accessToken": this.getAccessToken(),
            "targetItemSetId": this.getTargetItemSetId(),
            "materials": this.getMaterials() ?
                this.getMaterials()!.map((item: string) => {
                    return item;
                }
            ) : null,
            "config": this.getConfig() ?
                this.getConfig()!.map((item: Gs2Enhance.Config) => {
                    return item.toDict();
                }
            ) : null,
        };
    }
}