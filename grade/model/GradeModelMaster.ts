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

import * as Gs2Grade from '../../grade/model'
import DefaultGradeModel from './DefaultGradeModel';
import GradeEntryModel from './GradeEntryModel';
import AcquireActionRate from './AcquireActionRate';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:grade:{namespaceName}:model:{gradeName}";

export default class GradeModelMaster implements IModel {
    private gradeModelId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private defaultGrades: Gs2Grade.DefaultGradeModel[]|null = null;
    private experienceModelId: string|null = null;
    private gradeEntries: Gs2Grade.GradeEntryModel[]|null = null;
    private acquireActionRates: Gs2Grade.AcquireActionRate[]|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{gradeName}', '.*')
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
            .replace('{gradeName}', '.*')
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
            .replace('{gradeName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getGradeName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{gradeName}', '(.*)')
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
        if (this.getGradeName(grn) == null || this.getGradeName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        gradeName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{gradeName}', gradeName ?? '');
    }
    public getGradeModelId(): string|null {
        return this.gradeModelId;
    }
    public setGradeModelId(gradeModelId: string|null) {
        this.gradeModelId = gradeModelId;
        return this;
    }
    public withGradeModelId(gradeModelId: string|null): this {
        this.gradeModelId = gradeModelId;
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
    public getDefaultGrades(): Gs2Grade.DefaultGradeModel[]|null {
        return this.defaultGrades;
    }
    public setDefaultGrades(defaultGrades: Gs2Grade.DefaultGradeModel[]|null) {
        this.defaultGrades = defaultGrades;
        return this;
    }
    public withDefaultGrades(defaultGrades: Gs2Grade.DefaultGradeModel[]|null): this {
        this.defaultGrades = defaultGrades;
        return this;
    }
    public getExperienceModelId(): string|null {
        return this.experienceModelId;
    }
    public setExperienceModelId(experienceModelId: string|null) {
        this.experienceModelId = experienceModelId;
        return this;
    }
    public withExperienceModelId(experienceModelId: string|null): this {
        this.experienceModelId = experienceModelId;
        return this;
    }
    public getGradeEntries(): Gs2Grade.GradeEntryModel[]|null {
        return this.gradeEntries;
    }
    public setGradeEntries(gradeEntries: Gs2Grade.GradeEntryModel[]|null) {
        this.gradeEntries = gradeEntries;
        return this;
    }
    public withGradeEntries(gradeEntries: Gs2Grade.GradeEntryModel[]|null): this {
        this.gradeEntries = gradeEntries;
        return this;
    }
    public getAcquireActionRates(): Gs2Grade.AcquireActionRate[]|null {
        return this.acquireActionRates;
    }
    public setAcquireActionRates(acquireActionRates: Gs2Grade.AcquireActionRate[]|null) {
        this.acquireActionRates = acquireActionRates;
        return this;
    }
    public withAcquireActionRates(acquireActionRates: Gs2Grade.AcquireActionRate[]|null): this {
        this.acquireActionRates = acquireActionRates;
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

    public static fromDict(data: {[key: string]: any}): GradeModelMaster|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new GradeModelMaster()
            .withGradeModelId(data["gradeModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withDefaultGrades(data.defaultGrades ?
                data.defaultGrades.map((item: {[key: string]: any}) => {
                    return Gs2Grade.DefaultGradeModel.fromDict(item);
                }
            ) : null)
            .withExperienceModelId(data["experienceModelId"])
            .withGradeEntries(data.gradeEntries ?
                data.gradeEntries.map((item: {[key: string]: any}) => {
                    return Gs2Grade.GradeEntryModel.fromDict(item);
                }
            ) : null)
            .withAcquireActionRates(data.acquireActionRates ?
                data.acquireActionRates.map((item: {[key: string]: any}) => {
                    return Gs2Grade.AcquireActionRate.fromDict(item);
                }
            ) : null)
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "gradeModelId": this.getGradeModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "defaultGrades": this.getDefaultGrades() ?
                this.getDefaultGrades()!.map((item: Gs2Grade.DefaultGradeModel) => {
                    return item.toDict();
                }
            ) : null,
            "experienceModelId": this.getExperienceModelId(),
            "gradeEntries": this.getGradeEntries() ?
                this.getGradeEntries()!.map((item: Gs2Grade.GradeEntryModel) => {
                    return item.toDict();
                }
            ) : null,
            "acquireActionRates": this.getAcquireActionRates() ?
                this.getAcquireActionRates()!.map((item: Gs2Grade.AcquireActionRate) => {
                    return item.toDict();
                }
            ) : null,
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
