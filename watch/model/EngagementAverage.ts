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

import * as Gs2Watch from '../../watch/model'

export default class EngagementAverage implements IModel {
    private newUserRate: number|null = null;
    private returnUserRate: number|null = null;
    private engagedUserRate: number|null = null;
    public getNewUserRate(): number|null {
        return this.newUserRate;
    }
    public setNewUserRate(newUserRate: number|null) {
        this.newUserRate = newUserRate;
        return this;
    }
    public withNewUserRate(newUserRate: number|null): this {
        this.newUserRate = newUserRate;
        return this;
    }
    public getReturnUserRate(): number|null {
        return this.returnUserRate;
    }
    public setReturnUserRate(returnUserRate: number|null) {
        this.returnUserRate = returnUserRate;
        return this;
    }
    public withReturnUserRate(returnUserRate: number|null): this {
        this.returnUserRate = returnUserRate;
        return this;
    }
    public getEngagedUserRate(): number|null {
        return this.engagedUserRate;
    }
    public setEngagedUserRate(engagedUserRate: number|null) {
        this.engagedUserRate = engagedUserRate;
        return this;
    }
    public withEngagedUserRate(engagedUserRate: number|null): this {
        this.engagedUserRate = engagedUserRate;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): EngagementAverage|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new EngagementAverage()
            .withNewUserRate(data["newUserRate"])
            .withReturnUserRate(data["returnUserRate"])
            .withEngagedUserRate(data["engagedUserRate"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "newUserRate": this.getNewUserRate(),
            "returnUserRate": this.getReturnUserRate(),
            "engagedUserRate": this.getEngagedUserRate(),
        };
    }
}
