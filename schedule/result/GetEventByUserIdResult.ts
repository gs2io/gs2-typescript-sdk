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

import IResult from '../../core/interface/IResult';

import * as Gs2Schedule from '../model'

export default class GetEventByUserIdResult implements IResult {
    private item: Gs2Schedule.Event|null = null;
    private repeatCount: number|null = null;
    private inSchedule: boolean|null = null;
    private repeatSchedule: Gs2Schedule.RepeatSchedule|null = null;

    public getItem(): Gs2Schedule.Event|null {
        return this.item;
    }

    public setItem(item: Gs2Schedule.Event|null) {
        this.item = item;
        return this;
    }

    public withItem(item: Gs2Schedule.Event|null): this {
        this.item = item;
        return this;
    }

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

    public getInSchedule(): boolean|null {
        return this.inSchedule;
    }

    public setInSchedule(inSchedule: boolean|null) {
        this.inSchedule = inSchedule;
        return this;
    }

    public withInSchedule(inSchedule: boolean|null): this {
        this.inSchedule = inSchedule;
        return this;
    }

    public getRepeatSchedule(): Gs2Schedule.RepeatSchedule|null {
        return this.repeatSchedule;
    }

    public setRepeatSchedule(repeatSchedule: Gs2Schedule.RepeatSchedule|null) {
        this.repeatSchedule = repeatSchedule;
        return this;
    }

    public withRepeatSchedule(repeatSchedule: Gs2Schedule.RepeatSchedule|null): this {
        this.repeatSchedule = repeatSchedule;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): GetEventByUserIdResult {
        return new GetEventByUserIdResult()
            .withItem(Gs2Schedule.Event.fromDict(data["item"]))
            .withRepeatCount(data["repeatCount"])
            .withInSchedule(data["inSchedule"])
            .withRepeatSchedule(Gs2Schedule.RepeatSchedule.fromDict(data["repeatSchedule"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "item": this.getItem()?.toDict(),
            "repeatCount": this.getRepeatCount(),
            "inSchedule": this.getInSchedule(),
            "repeatSchedule": this.getRepeatSchedule()?.toDict(),
        };
    }
}
