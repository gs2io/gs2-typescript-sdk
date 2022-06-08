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

import IRequest from '../../core/interface/IRequest';

import * as Gs2Quest from '../model'

export default class UpdateQuestModelMasterRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private questGroupName: string|null = null;
    private questName: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private contents: Gs2Quest.Contents[]|null = null;
    private challengePeriodEventId: string|null = null;
    private consumeActions: Gs2Quest.ConsumeAction[]|null = null;
    private failedAcquireActions: Gs2Quest.AcquireAction[]|null = null;
    private premiseQuestNames: string[]|null = null;

    public getRequestId(): string|null {
        return this.requestId;
    }

    public setRequestId(requestId: string|null) {
        this.requestId = requestId;
        return this;
    }

    public withRequestId(requestId: string|null): this {
        this.requestId = requestId;
        return this;
    }

    public getContextStack(): string|null {
        return this.contextStack;
    }

    public setContextStack(contextStack: string|null) {
        this.contextStack = contextStack;
        return this;
    }

    public withContextStack(contextStack: string|null): this {
        this.contextStack = contextStack;
        return this;
    }
    public getNamespaceName(): string|null {
        return this.namespaceName;
    }
    public setNamespaceName(namespaceName: string|null) {
        this.namespaceName = namespaceName;
        return this;
    }
    public withNamespaceName(namespaceName: string|null): this {
        this.namespaceName = namespaceName;
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
    public getQuestName(): string|null {
        return this.questName;
    }
    public setQuestName(questName: string|null) {
        this.questName = questName;
        return this;
    }
    public withQuestName(questName: string|null): this {
        this.questName = questName;
        return this;
    }
    public getDescription(): string|null {
        return this.description;
    }
    public setDescription(description: string|null) {
        this.description = description;
        return this;
    }
    public withDescription(description: string|null): this {
        this.description = description;
        return this;
    }
    public getMetadata(): string|null {
        return this.metadata;
    }
    public setMetadata(metadata: string|null) {
        this.metadata = metadata;
        return this;
    }
    public withMetadata(metadata: string|null): this {
        this.metadata = metadata;
        return this;
    }
    public getContents(): Gs2Quest.Contents[]|null {
        return this.contents;
    }
    public setContents(contents: Gs2Quest.Contents[]|null) {
        this.contents = contents;
        return this;
    }
    public withContents(contents: Gs2Quest.Contents[]|null): this {
        this.contents = contents;
        return this;
    }
    public getChallengePeriodEventId(): string|null {
        return this.challengePeriodEventId;
    }
    public setChallengePeriodEventId(challengePeriodEventId: string|null) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    }
    public withChallengePeriodEventId(challengePeriodEventId: string|null): this {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    }
    public getConsumeActions(): Gs2Quest.ConsumeAction[]|null {
        return this.consumeActions;
    }
    public setConsumeActions(consumeActions: Gs2Quest.ConsumeAction[]|null) {
        this.consumeActions = consumeActions;
        return this;
    }
    public withConsumeActions(consumeActions: Gs2Quest.ConsumeAction[]|null): this {
        this.consumeActions = consumeActions;
        return this;
    }
    public getFailedAcquireActions(): Gs2Quest.AcquireAction[]|null {
        return this.failedAcquireActions;
    }
    public setFailedAcquireActions(failedAcquireActions: Gs2Quest.AcquireAction[]|null) {
        this.failedAcquireActions = failedAcquireActions;
        return this;
    }
    public withFailedAcquireActions(failedAcquireActions: Gs2Quest.AcquireAction[]|null): this {
        this.failedAcquireActions = failedAcquireActions;
        return this;
    }
    public getPremiseQuestNames(): string[]|null {
        return this.premiseQuestNames;
    }
    public setPremiseQuestNames(premiseQuestNames: string[]|null) {
        this.premiseQuestNames = premiseQuestNames;
        return this;
    }
    public withPremiseQuestNames(premiseQuestNames: string[]|null): this {
        this.premiseQuestNames = premiseQuestNames;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): UpdateQuestModelMasterRequest {
        return new UpdateQuestModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withQuestGroupName(data["questGroupName"])
            .withQuestName(data["questName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withContents(data.contents ?
                data.contents.map((item: {[key: string]: any}) => {
                    return Gs2Quest.Contents.fromDict(item);
                }
            ) : [])
            .withChallengePeriodEventId(data["challengePeriodEventId"])
            .withConsumeActions(data.consumeActions ?
                data.consumeActions.map((item: {[key: string]: any}) => {
                    return Gs2Quest.ConsumeAction.fromDict(item);
                }
            ) : [])
            .withFailedAcquireActions(data.failedAcquireActions ?
                data.failedAcquireActions.map((item: {[key: string]: any}) => {
                    return Gs2Quest.AcquireAction.fromDict(item);
                }
            ) : [])
            .withPremiseQuestNames(data.premiseQuestNames ?
                data.premiseQuestNames.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "questGroupName": this.getQuestGroupName(),
            "questName": this.getQuestName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "contents": this.getContents() ?
                this.getContents()!.map((item: Gs2Quest.Contents) => {
                    return item.toDict();
                }
            ) : [],
            "challengePeriodEventId": this.getChallengePeriodEventId(),
            "consumeActions": this.getConsumeActions() ?
                this.getConsumeActions()!.map((item: Gs2Quest.ConsumeAction) => {
                    return item.toDict();
                }
            ) : [],
            "failedAcquireActions": this.getFailedAcquireActions() ?
                this.getFailedAcquireActions()!.map((item: Gs2Quest.AcquireAction) => {
                    return item.toDict();
                }
            ) : [],
            "premiseQuestNames": this.getPremiseQuestNames() ?
                this.getPremiseQuestNames()!.map((item: string) => {
                    return item;
                }
            ) : [],
        };
    }
}