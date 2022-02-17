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

export default class CompletedQuestList implements IModel {
    private completedQuestListId: string|null = null;
    private userId: string|null = null;
    private questGroupName: string|null = null;
    private completeQuestNames: string[]|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public getCompletedQuestListId(): string|null {
        return this.completedQuestListId;
    }

    public setCompletedQuestListId(completedQuestListId: string|null) {
        this.completedQuestListId = completedQuestListId;
        return this;
    }

    public withCompletedQuestListId(completedQuestListId: string|null): this {
        this.completedQuestListId = completedQuestListId;
        return this;
    }

    public getUserId(): string|null {
        return this.userId;
    }

    public setUserId(userId: string|null) {
        this.userId = userId;
        return this;
    }

    public withUserId(userId: string|null): this {
        this.userId = userId;
        return this;
    }

    public getQuestGroupName(): string|null {
        return this.questGroupName;
    }

    public setQuestGroupName(questGroupName: string|null) {
        this.questGroupName = questGroupName;
        return this;
    }

    public withQuestGroupName(questGroupName: string|null): this {
        this.questGroupName = questGroupName;
        return this;
    }

    public getCompleteQuestNames(): string[]|null {
        return this.completeQuestNames;
    }

    public setCompleteQuestNames(completeQuestNames: string[]|null) {
        this.completeQuestNames = completeQuestNames;
        return this;
    }

    public withCompleteQuestNames(completeQuestNames: string[]|null): this {
        this.completeQuestNames = completeQuestNames;
        return this;
    }

    public getCreatedAt(): number|null {
        return this.createdAt;
    }

    public setCreatedAt(createdAt: number|null) {
        this.createdAt = createdAt;
        return this;
    }

    public withCreatedAt(createdAt: number|null): this {
        this.createdAt = createdAt;
        return this;
    }

    public getUpdatedAt(): number|null {
        return this.updatedAt;
    }

    public setUpdatedAt(updatedAt: number|null) {
        this.updatedAt = updatedAt;
        return this;
    }

    public withUpdatedAt(updatedAt: number|null): this {
        this.updatedAt = updatedAt;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CompletedQuestList|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new CompletedQuestList()
            .withCompletedQuestListId(data["completedQuestListId"])
            .withUserId(data["userId"])
            .withQuestGroupName(data["questGroupName"])
            .withCompleteQuestNames(data.completeQuestNames ?
                data.completeQuestNames.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "completedQuestListId": this.getCompletedQuestListId(),
            "userId": this.getUserId(),
            "questGroupName": this.getQuestGroupName(),
            "completeQuestNames": this.getCompleteQuestNames() ?
                this.getCompleteQuestNames()!.map((item: string) => {
                    return item;
                }
            ) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
