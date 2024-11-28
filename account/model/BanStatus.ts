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

import * as Gs2Account from '../../account/model'
const grnFormat: string = "";

export default class BanStatus implements IModel {
    private name: string|null = null;
    private reason: string|null = null;
    private releaseTimestamp: number|null = null;

    public static isValid(grn: string): boolean {
        return true;
    }

    public static createGrn(
    ): string|null {
        return grnFormat;
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
    public getReason(): string|null {
        return this.reason;
    }
    public setReason(reason: string|null) {
        this.reason = reason;
        return this;
    }
    public withReason(reason: string|null): this {
        this.reason = reason;
        return this;
    }
    public getReleaseTimestamp(): number|null {
        return this.releaseTimestamp;
    }
    public setReleaseTimestamp(releaseTimestamp: number|null) {
        this.releaseTimestamp = releaseTimestamp;
        return this;
    }
    public withReleaseTimestamp(releaseTimestamp: number|null): this {
        this.releaseTimestamp = releaseTimestamp;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): BanStatus|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new BanStatus()
            .withName(data["name"])
            .withReason(data["reason"])
            .withReleaseTimestamp(data["releaseTimestamp"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "name": this.getName(),
            "reason": this.getReason(),
            "releaseTimestamp": this.getReleaseTimestamp(),
        };
    }
}
