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

export default class CreateProgressByUserIdRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private userId: string|null = null;
    private rateName: string|null = null;
    private targetItemSetId: string|null = null;
    private materials: Gs2Enhance.Material[]|null = null;
    private force: boolean|null = null;
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
    public getMaterials(): Gs2Enhance.Material[]|null {
        return this.materials;
    }
    public setMaterials(materials: Gs2Enhance.Material[]|null) {
        this.materials = materials;
        return this;
    }
    public withMaterials(materials: Gs2Enhance.Material[]|null): this {
        this.materials = materials;
        return this;
    }
    public getForce(): boolean|null {
        return this.force;
    }
    public setForce(force: boolean|null) {
        this.force = force;
        return this;
    }
    public withForce(force: boolean|null): this {
        this.force = force;
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

    public static fromDict(data: {[key: string]: any}): CreateProgressByUserIdRequest {
        return new CreateProgressByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withRateName(data["rateName"])
            .withTargetItemSetId(data["targetItemSetId"])
            .withMaterials(data.materials ?
                data.materials.map((item: {[key: string]: any}) => {
                    return Gs2Enhance.Material.fromDict(item);
                }
            ) : [])
            .withForce(data["force"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "rateName": this.getRateName(),
            "targetItemSetId": this.getTargetItemSetId(),
            "materials": this.getMaterials() ?
                this.getMaterials()!.map((item: Gs2Enhance.Material) => {
                    return item.toDict();
                }
            ) : [],
            "force": this.getForce(),
        };
    }
}