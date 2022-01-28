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

export class ReferenceOf implements IModel {
    private referenceOfId: string|null = null;
    private name: string|null = null;

    public getReferenceOfId(): string|null {
        return this.referenceOfId;
    }

    public setReferenceOfId(referenceOfId: string|null) {
        this.referenceOfId = referenceOfId;
        return this;
    }

    public withReferenceOfId(referenceOfId: string|null): this {
        this.referenceOfId = referenceOfId;
        return this;
    }

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

    public static fromDict(data: {[key: string]: any}): ReferenceOf|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ReferenceOf()
            .withReferenceOfId(data["referenceOfId"])
            .withName(data["name"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "referenceOfId": this.getReferenceOfId(),
            "name": this.getName(),
        };
    }
}
