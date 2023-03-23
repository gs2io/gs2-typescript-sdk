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

export default class Gs2Region implements IModel {
    private regionName: string|null = null;
    private status: string|null = null;
    public getRegionName(): string|null {
        return this.regionName;
    }
    public setRegionName(regionName: string|null) {
        this.regionName = regionName;
        return this;
    }
    public withRegionName(regionName: string|null): this {
        this.regionName = regionName;
        return this;
    }
    public getStatus(): string|null {
        return this.status;
    }
    public setStatus(status: string|null) {
        this.status = status;
        return this;
    }
    public withStatus(status: string|null): this {
        this.status = status;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Gs2Region|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Gs2Region()
            .withRegionName(data["regionName"])
            .withStatus(data["status"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "regionName": this.getRegionName(),
            "status": this.getStatus(),
        };
    }
}
