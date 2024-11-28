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

import IModel from '../../core/interface/IModel';

import * as Gs2Showcase from '../../showcase/model'

export default class Config implements IModel {
    private key: string|null = null;
    private value: string|null = null;
    public getKey(): string|null {
        return this.key;
    }
    public setKey(key: string|null) {
        this.key = key;
        return this;
    }
    public withKey(key: string|null): this {
        this.key = key;
        return this;
    }
    public getValue(): string|null {
        return this.value;
    }
    public setValue(value: string|null) {
        this.value = value;
        return this;
    }
    public withValue(value: string|null): this {
        this.value = value;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Config|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Config()
            .withKey(data["key"])
            .withValue(data["value"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "key": this.getKey(),
            "value": this.getValue(),
        };
    }
}
