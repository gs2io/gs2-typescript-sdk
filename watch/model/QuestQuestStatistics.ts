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
import QuestQuestDurationSeconds from './QuestQuestDurationSeconds';

export default class QuestQuestStatistics implements IModel {
    private count: number|null = null;
    private clearRate: number|null = null;
    private durationSeconds: QuestQuestDurationSeconds|null = null;
    public getCount(): number|null {
        return this.count;
    }
    public setCount(count: number|null) {
        this.count = count;
        return this;
    }
    public withCount(count: number|null): this {
        this.count = count;
        return this;
    }
    public getClearRate(): number|null {
        return this.clearRate;
    }
    public setClearRate(clearRate: number|null) {
        this.clearRate = clearRate;
        return this;
    }
    public withClearRate(clearRate: number|null): this {
        this.clearRate = clearRate;
        return this;
    }
    public getDurationSeconds(): QuestQuestDurationSeconds|null {
        return this.durationSeconds;
    }
    public setDurationSeconds(durationSeconds: QuestQuestDurationSeconds|null) {
        this.durationSeconds = durationSeconds;
        return this;
    }
    public withDurationSeconds(durationSeconds: QuestQuestDurationSeconds|null): this {
        this.durationSeconds = durationSeconds;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): QuestQuestStatistics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestQuestStatistics()
            .withCount(data["count"])
            .withClearRate(data["clearRate"])
            .withDurationSeconds(QuestQuestDurationSeconds.fromDict(data["durationSeconds"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "count": this.getCount(),
            "clearRate": this.getClearRate(),
            "durationSeconds": this.getDurationSeconds()?.toDict(),
        };
    }
}
