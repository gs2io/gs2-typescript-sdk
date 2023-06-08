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

export default class RepeatSchedule implements IModel {
    private repeatCount: number|null = null;
    private currentRepeatStartAt: number|null = null;
    private currentRepeatEndAt: number|null = null;
    private lastRepeatEndAt: number|null = null;
    private nextRepeatStartAt: number|null = null;
    public getRepeatCount(): number|null {
        return this.repeatCount;
    }
    public setRepeatCount(repeatCount: number|null) {
        this.repeatCount = repeatCount;
        return this;
    }
    public withRepeatCount(repeatCount: number|null): this {
        this.repeatCount = repeatCount;
        return this;
    }
    public getCurrentRepeatStartAt(): number|null {
        return this.currentRepeatStartAt;
    }
    public setCurrentRepeatStartAt(currentRepeatStartAt: number|null) {
        this.currentRepeatStartAt = currentRepeatStartAt;
        return this;
    }
    public withCurrentRepeatStartAt(currentRepeatStartAt: number|null): this {
        this.currentRepeatStartAt = currentRepeatStartAt;
        return this;
    }
    public getCurrentRepeatEndAt(): number|null {
        return this.currentRepeatEndAt;
    }
    public setCurrentRepeatEndAt(currentRepeatEndAt: number|null) {
        this.currentRepeatEndAt = currentRepeatEndAt;
        return this;
    }
    public withCurrentRepeatEndAt(currentRepeatEndAt: number|null): this {
        this.currentRepeatEndAt = currentRepeatEndAt;
        return this;
    }
    public getLastRepeatEndAt(): number|null {
        return this.lastRepeatEndAt;
    }
    public setLastRepeatEndAt(lastRepeatEndAt: number|null) {
        this.lastRepeatEndAt = lastRepeatEndAt;
        return this;
    }
    public withLastRepeatEndAt(lastRepeatEndAt: number|null): this {
        this.lastRepeatEndAt = lastRepeatEndAt;
        return this;
    }
    public getNextRepeatStartAt(): number|null {
        return this.nextRepeatStartAt;
    }
    public setNextRepeatStartAt(nextRepeatStartAt: number|null) {
        this.nextRepeatStartAt = nextRepeatStartAt;
        return this;
    }
    public withNextRepeatStartAt(nextRepeatStartAt: number|null): this {
        this.nextRepeatStartAt = nextRepeatStartAt;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): RepeatSchedule|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new RepeatSchedule()
            .withRepeatCount(data["repeatCount"])
            .withCurrentRepeatStartAt(data["currentRepeatStartAt"])
            .withCurrentRepeatEndAt(data["currentRepeatEndAt"])
            .withLastRepeatEndAt(data["lastRepeatEndAt"])
            .withNextRepeatStartAt(data["nextRepeatStartAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "repeatCount": this.getRepeatCount(),
            "currentRepeatStartAt": this.getCurrentRepeatStartAt(),
            "currentRepeatEndAt": this.getCurrentRepeatEndAt(),
            "lastRepeatEndAt": this.getLastRepeatEndAt(),
            "nextRepeatStartAt": this.getNextRepeatStartAt(),
        };
    }
}
