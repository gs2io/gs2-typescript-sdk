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

export default class QuestQuestModelStatistics implements IModel {
    private startQuest: number|null = null;
    private endQuest: number|null = null;
    private successful: number|null = null;
    private successfulRate: number|null = null;
    public getStartQuest(): number|null {
        return this.startQuest;
    }
    public setStartQuest(startQuest: number|null) {
        this.startQuest = startQuest;
        return this;
    }
    public withStartQuest(startQuest: number|null): this {
        this.startQuest = startQuest;
        return this;
    }
    public getEndQuest(): number|null {
        return this.endQuest;
    }
    public setEndQuest(endQuest: number|null) {
        this.endQuest = endQuest;
        return this;
    }
    public withEndQuest(endQuest: number|null): this {
        this.endQuest = endQuest;
        return this;
    }
    public getSuccessful(): number|null {
        return this.successful;
    }
    public setSuccessful(successful: number|null) {
        this.successful = successful;
        return this;
    }
    public withSuccessful(successful: number|null): this {
        this.successful = successful;
        return this;
    }
    public getSuccessfulRate(): number|null {
        return this.successfulRate;
    }
    public setSuccessfulRate(successfulRate: number|null) {
        this.successfulRate = successfulRate;
        return this;
    }
    public withSuccessfulRate(successfulRate: number|null): this {
        this.successfulRate = successfulRate;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): QuestQuestModelStatistics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestQuestModelStatistics()
            .withStartQuest(data["startQuest"])
            .withEndQuest(data["endQuest"])
            .withSuccessful(data["successful"])
            .withSuccessfulRate(data["successfulRate"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "startQuest": this.getStartQuest(),
            "endQuest": this.getEndQuest(),
            "successful": this.getSuccessful(),
            "successfulRate": this.getSuccessfulRate(),
        };
    }
}
