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

export default class ReturningUserRatio implements IModel {
    private activeUsers: number|null = null;
    private returningUsers: number|null = null;
    private returningUserRatio: number|null = null;
    public getActiveUsers(): number|null {
        return this.activeUsers;
    }
    public setActiveUsers(activeUsers: number|null) {
        this.activeUsers = activeUsers;
        return this;
    }
    public withActiveUsers(activeUsers: number|null): this {
        this.activeUsers = activeUsers;
        return this;
    }
    public getReturningUsers(): number|null {
        return this.returningUsers;
    }
    public setReturningUsers(returningUsers: number|null) {
        this.returningUsers = returningUsers;
        return this;
    }
    public withReturningUsers(returningUsers: number|null): this {
        this.returningUsers = returningUsers;
        return this;
    }
    public getReturningUserRatio(): number|null {
        return this.returningUserRatio;
    }
    public setReturningUserRatio(returningUserRatio: number|null) {
        this.returningUserRatio = returningUserRatio;
        return this;
    }
    public withReturningUserRatio(returningUserRatio: number|null): this {
        this.returningUserRatio = returningUserRatio;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ReturningUserRatio|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ReturningUserRatio()
            .withActiveUsers(data["activeUsers"])
            .withReturningUsers(data["returningUsers"])
            .withReturningUserRatio(data["returningUserRatio"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "activeUsers": this.getActiveUsers(),
            "returningUsers": this.getReturningUsers(),
            "returningUserRatio": this.getReturningUserRatio(),
        };
    }
}
