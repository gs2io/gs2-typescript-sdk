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

import IModel from '@/gs2/core/interface/IModel';

export class SlotWithSignature implements IModel {
    private name: string|null = null;
    private propertyType: string|null = null;
    private body: string|null = null;
    private signature: string|null = null;
    private metadata: string|null = null;

    public getName(): string|null {
        return this.name;
    }

    public setName(name: string|null) {
        this.name = name;
        return this;
    }

    public withName(name: string|null): this {
        this.name = name;
        return this;
    }

    public getPropertyType(): string|null {
        return this.propertyType;
    }

    public setPropertyType(propertyType: string|null) {
        this.propertyType = propertyType;
        return this;
    }

    public withPropertyType(propertyType: string|null): this {
        this.propertyType = propertyType;
        return this;
    }

    public getBody(): string|null {
        return this.body;
    }

    public setBody(body: string|null) {
        this.body = body;
        return this;
    }

    public withBody(body: string|null): this {
        this.body = body;
        return this;
    }

    public getSignature(): string|null {
        return this.signature;
    }

    public setSignature(signature: string|null) {
        this.signature = signature;
        return this;
    }

    public withSignature(signature: string|null): this {
        this.signature = signature;
        return this;
    }

    public getMetadata(): string|null {
        return this.metadata;
    }

    public setMetadata(metadata: string|null) {
        this.metadata = metadata;
        return this;
    }

    public withMetadata(metadata: string|null): this {
        this.metadata = metadata;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): SlotWithSignature|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new SlotWithSignature()
            .withName(data["name"])
            .withPropertyType(data["propertyType"])
            .withBody(data["body"])
            .withSignature(data["signature"])
            .withMetadata(data["metadata"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "name": this.getName(),
            "propertyType": this.getPropertyType(),
            "body": this.getBody(),
            "signature": this.getSignature(),
            "metadata": this.getMetadata(),
        };
    }
}
