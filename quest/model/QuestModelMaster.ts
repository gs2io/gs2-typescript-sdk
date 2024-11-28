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

import * as Gs2Quest from '../../quest/model'
import AcquireAction from './AcquireAction';
import Contents from './Contents';
import VerifyAction from './VerifyAction';
import ConsumeAction from './ConsumeAction';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:quest:{namespaceName}:group:{questGroupName}:quest:{questName}";

export default class QuestModelMaster implements IModel {
    private questModelId: string|null = null;
    private questGroupName: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private contents: Gs2Quest.Contents[]|null = null;
    private challengePeriodEventId: string|null = null;
    private firstCompleteAcquireActions: Gs2Quest.AcquireAction[]|null = null;
    private verifyActions: Gs2Quest.VerifyAction[]|null = null;
    private consumeActions: Gs2Quest.ConsumeAction[]|null = null;
    private failedAcquireActions: Gs2Quest.AcquireAction[]|null = null;
    private premiseQuestNames: string[]|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;

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
    public getFirstCompleteAcquireActions(): Gs2Quest.AcquireAction[]|null {
        return this.firstCompleteAcquireActions;
    }
    public setFirstCompleteAcquireActions(firstCompleteAcquireActions: Gs2Quest.AcquireAction[]|null) {
        this.firstCompleteAcquireActions = firstCompleteAcquireActions;
        return this;
    }
    public withFirstCompleteAcquireActions(firstCompleteAcquireActions: Gs2Quest.AcquireAction[]|null): this {
        this.firstCompleteAcquireActions = firstCompleteAcquireActions;
        return this;
    }
    public getVerifyActions(): Gs2Quest.VerifyAction[]|null {
        return this.verifyActions;
    }
    public setVerifyActions(verifyActions: Gs2Quest.VerifyAction[]|null) {
        this.verifyActions = verifyActions;
        return this;
    }
    public withVerifyActions(verifyActions: Gs2Quest.VerifyAction[]|null): this {
        this.verifyActions = verifyActions;
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
    public getRevision(): number|null {
        return this.revision;
    }
    public setRevision(revision: number|null) {
        this.revision = revision;
        return this;
    }
    public withRevision(revision: number|null): this {
        this.revision = revision;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): QuestModelMaster|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestModelMaster()
            .withQuestModelId(data["questModelId"])
            .withQuestGroupName(data["questGroupName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withContents(data.contents ?
                data.contents.map((item: {[key: string]: any}) => {
                    return Gs2Quest.Contents.fromDict(item);
                }
            ) : null)
            .withChallengePeriodEventId(data["challengePeriodEventId"])
            .withFirstCompleteAcquireActions(data.firstCompleteAcquireActions ?
                data.firstCompleteAcquireActions.map((item: {[key: string]: any}) => {
                    return Gs2Quest.AcquireAction.fromDict(item);
                }
            ) : null)
            .withVerifyActions(data.verifyActions ?
                data.verifyActions.map((item: {[key: string]: any}) => {
                    return Gs2Quest.VerifyAction.fromDict(item);
                }
            ) : null)
            .withConsumeActions(data.consumeActions ?
                data.consumeActions.map((item: {[key: string]: any}) => {
                    return Gs2Quest.ConsumeAction.fromDict(item);
                }
            ) : null)
            .withFailedAcquireActions(data.failedAcquireActions ?
                data.failedAcquireActions.map((item: {[key: string]: any}) => {
                    return Gs2Quest.AcquireAction.fromDict(item);
                }
            ) : null)
            .withPremiseQuestNames(data.premiseQuestNames ?
                data.premiseQuestNames.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : null)
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "questModelId": this.getQuestModelId(),
            "questGroupName": this.getQuestGroupName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "contents": this.getContents() ?
                this.getContents()!.map((item: Gs2Quest.Contents) => {
                    return item.toDict();
                }
            ) : null,
            "challengePeriodEventId": this.getChallengePeriodEventId(),
            "firstCompleteAcquireActions": this.getFirstCompleteAcquireActions() ?
                this.getFirstCompleteAcquireActions()!.map((item: Gs2Quest.AcquireAction) => {
                    return item.toDict();
                }
            ) : null,
            "verifyActions": this.getVerifyActions() ?
                this.getVerifyActions()!.map((item: Gs2Quest.VerifyAction) => {
                    return item.toDict();
                }
            ) : null,
            "consumeActions": this.getConsumeActions() ?
                this.getConsumeActions()!.map((item: Gs2Quest.ConsumeAction) => {
                    return item.toDict();
                }
            ) : null,
            "failedAcquireActions": this.getFailedAcquireActions() ?
                this.getFailedAcquireActions()!.map((item: Gs2Quest.AcquireAction) => {
                    return item.toDict();
                }
            ) : null,
            "premiseQuestNames": this.getPremiseQuestNames() ?
                this.getPremiseQuestNames()!.map((item: string) => {
                    return item;
                }
            ) : null,
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
