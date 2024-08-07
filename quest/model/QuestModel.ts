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
import AcquireAction from './AcquireAction';
import Contents from './Contents';
import VerifyAction from './VerifyAction';
import ConsumeAction from './ConsumeAction';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:quest:{namespaceName}:group:{questGroupName}:quest:{questName}";

export default class QuestModel implements IModel {
    private questModelId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private contents: Contents[]|null = null;
    private challengePeriodEventId: string|null = null;
    private firstCompleteAcquireActions: AcquireAction[]|null = null;
    private verifyActions: VerifyAction[]|null = null;
    private consumeActions: ConsumeAction[]|null = null;
    private failedAcquireActions: AcquireAction[]|null = null;
    private premiseQuestNames: string[]|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '.*')
            .replace('{questName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getOwnerId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '.*')
            .replace('{questName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getNamespaceName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{questGroupName}', '.*')
            .replace('{questName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getQuestGroupName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '(.*)')
            .replace('{questName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getQuestName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '.*')
            .replace('{questName}', '(.*)')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static isValid(grn: string): boolean {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getQuestGroupName(grn) == null || this.getQuestGroupName(grn) === '') {
            return false;
        }
        if (this.getQuestName(grn) == null || this.getQuestName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        questGroupName: string|null,
        questName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{questGroupName}', questGroupName ?? '')
            .replace('{questName}', questName ?? '');
    }
    public getQuestModelId(): string|null {
        return this.questModelId;
    }
    public setQuestModelId(questModelId: string|null) {
        this.questModelId = questModelId;
        return this;
    }
    public withQuestModelId(questModelId: string|null): this {
        this.questModelId = questModelId;
        return this;
    }
    public getName(): string|null {
        return this.name;
    }
    public setName(name: string|null) {
        this.name = name;
        return this;
    }
    public withName(name: string|null): this {
        this.name = name;
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
    public getContents(): Contents[]|null {
        return this.contents;
    }
    public setContents(contents: Contents[]|null) {
        this.contents = contents;
        return this;
    }
    public withContents(contents: Contents[]|null): this {
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
    public getFirstCompleteAcquireActions(): AcquireAction[]|null {
        return this.firstCompleteAcquireActions;
    }
    public setFirstCompleteAcquireActions(firstCompleteAcquireActions: AcquireAction[]|null) {
        this.firstCompleteAcquireActions = firstCompleteAcquireActions;
        return this;
    }
    public withFirstCompleteAcquireActions(firstCompleteAcquireActions: AcquireAction[]|null): this {
        this.firstCompleteAcquireActions = firstCompleteAcquireActions;
        return this;
    }
    public getVerifyActions(): VerifyAction[]|null {
        return this.verifyActions;
    }
    public setVerifyActions(verifyActions: VerifyAction[]|null) {
        this.verifyActions = verifyActions;
        return this;
    }
    public withVerifyActions(verifyActions: VerifyAction[]|null): this {
        this.verifyActions = verifyActions;
        return this;
    }
    public getConsumeActions(): ConsumeAction[]|null {
        return this.consumeActions;
    }
    public setConsumeActions(consumeActions: ConsumeAction[]|null) {
        this.consumeActions = consumeActions;
        return this;
    }
    public withConsumeActions(consumeActions: ConsumeAction[]|null): this {
        this.consumeActions = consumeActions;
        return this;
    }
    public getFailedAcquireActions(): AcquireAction[]|null {
        return this.failedAcquireActions;
    }
    public setFailedAcquireActions(failedAcquireActions: AcquireAction[]|null) {
        this.failedAcquireActions = failedAcquireActions;
        return this;
    }
    public withFailedAcquireActions(failedAcquireActions: AcquireAction[]|null): this {
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

    public static fromDict(data: {[key: string]: any}): QuestModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestModel()
            .withQuestModelId(data["questModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withContents(data.contents ?
                data.contents.map((item: {[key: string]: any}) => {
                    return Contents.fromDict(item);
                }
            ) : [])
            .withChallengePeriodEventId(data["challengePeriodEventId"])
            .withFirstCompleteAcquireActions(data.firstCompleteAcquireActions ?
                data.firstCompleteAcquireActions.map((item: {[key: string]: any}) => {
                    return AcquireAction.fromDict(item);
                }
            ) : [])
            .withVerifyActions(data.verifyActions ?
                data.verifyActions.map((item: {[key: string]: any}) => {
                    return VerifyAction.fromDict(item);
                }
            ) : [])
            .withConsumeActions(data.consumeActions ?
                data.consumeActions.map((item: {[key: string]: any}) => {
                    return ConsumeAction.fromDict(item);
                }
            ) : [])
            .withFailedAcquireActions(data.failedAcquireActions ?
                data.failedAcquireActions.map((item: {[key: string]: any}) => {
                    return AcquireAction.fromDict(item);
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
            "questModelId": this.getQuestModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "contents": this.getContents() ?
                this.getContents()!.map((item: Contents) => {
                    return item.toDict();
                }
            ) : [],
            "challengePeriodEventId": this.getChallengePeriodEventId(),
            "firstCompleteAcquireActions": this.getFirstCompleteAcquireActions() ?
                this.getFirstCompleteAcquireActions()!.map((item: AcquireAction) => {
                    return item.toDict();
                }
            ) : [],
            "verifyActions": this.getVerifyActions() ?
                this.getVerifyActions()!.map((item: VerifyAction) => {
                    return item.toDict();
                }
            ) : [],
            "consumeActions": this.getConsumeActions() ?
                this.getConsumeActions()!.map((item: ConsumeAction) => {
                    return item.toDict();
                }
            ) : [],
            "failedAcquireActions": this.getFailedAcquireActions() ?
                this.getFailedAcquireActions()!.map((item: AcquireAction) => {
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
