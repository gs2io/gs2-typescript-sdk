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
import QuestQuestRewardStatistics from './QuestQuestRewardStatistics';

export default class QuestQuestReward implements IModel {
    private action: string|null = null;
    private request: string|null = null;
    private count: number|null = null;
    private statistics: QuestQuestRewardStatistics|null = null;
    public getAction(): string|null {
        return this.action;
    }
    public setAction(action: string|null) {
        this.action = action;
        return this;
    }
    public withAction(action: string|null): this {
        this.action = action;
        return this;
    }
    public getRequest(): string|null {
        return this.request;
    }
    public setRequest(request: string|null) {
        this.request = request;
        return this;
    }
    public withRequest(request: string|null): this {
        this.request = request;
        return this;
    }
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
    public getStatistics(): QuestQuestRewardStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: QuestQuestRewardStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: QuestQuestRewardStatistics|null): this {
        this.statistics = statistics;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): QuestQuestReward|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestQuestReward()
            .withAction(data["action"])
            .withRequest(data["request"])
            .withCount(data["count"])
            .withStatistics(QuestQuestRewardStatistics.fromDict(data["statistics"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "action": this.getAction(),
            "request": this.getRequest(),
            "count": this.getCount(),
            "statistics": this.getStatistics()?.toDict(),
        };
    }
}
