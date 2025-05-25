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

import * as Gs2Freeze from '../../freeze/model'

export default class Microservice implements IModel {
    private name: string|null = null;
    private version: string|null = null;
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
    public getVersion(): string|null {
        return this.version;
    }
    public setVersion(version: string|null) {
        this.version = version;
        return this;
    }
    public withVersion(version: string|null): this {
        this.version = version;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Microservice|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Microservice()
            .withName(data["name"])
            .withVersion(data["version"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "name": this.getName(),
            "version": this.getVersion(),
        };
    }
}
