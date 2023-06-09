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
import AcquireActionList from './AcquireActionList';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:idle:{namespaceName}:model:{categoryName}";

export default class CategoryModelMaster implements IModel {
    private categoryModelId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private rewardIntervalMinutes: number|null = null;
    private defaultMaximumIdleMinutes: number|null = null;
    private acquireActions: AcquireActionList[]|null = null;
    private idlePeriodScheduleId: string|null = null;
    private receivePeriodScheduleId: string|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{categoryName}', '.*')
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
            .replace('{categoryName}', '.*')
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
            .replace('{categoryName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getCategoryName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{categoryName}', '(.*)')
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
        if (this.getCategoryName(grn) == null || this.getCategoryName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        categoryName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{categoryName}', categoryName ?? '');
    }
    public getCategoryModelId(): string|null {
        return this.categoryModelId;
    }
    public setCategoryModelId(categoryModelId: string|null) {
        this.categoryModelId = categoryModelId;
        return this;
    }
    public withCategoryModelId(categoryModelId: string|null): this {
        this.categoryModelId = categoryModelId;
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
    public getRewardIntervalMinutes(): number|null {
        return this.rewardIntervalMinutes;
    }
    public setRewardIntervalMinutes(rewardIntervalMinutes: number|null) {
        this.rewardIntervalMinutes = rewardIntervalMinutes;
        return this;
    }
    public withRewardIntervalMinutes(rewardIntervalMinutes: number|null): this {
        this.rewardIntervalMinutes = rewardIntervalMinutes;
        return this;
    }
    public getDefaultMaximumIdleMinutes(): number|null {
        return this.defaultMaximumIdleMinutes;
    }
    public setDefaultMaximumIdleMinutes(defaultMaximumIdleMinutes: number|null) {
        this.defaultMaximumIdleMinutes = defaultMaximumIdleMinutes;
        return this;
    }
    public withDefaultMaximumIdleMinutes(defaultMaximumIdleMinutes: number|null): this {
        this.defaultMaximumIdleMinutes = defaultMaximumIdleMinutes;
        return this;
    }
    public getAcquireActions(): AcquireActionList[]|null {
        return this.acquireActions;
    }
    public setAcquireActions(acquireActions: AcquireActionList[]|null) {
        this.acquireActions = acquireActions;
        return this;
    }
    public withAcquireActions(acquireActions: AcquireActionList[]|null): this {
        this.acquireActions = acquireActions;
        return this;
    }
    public getIdlePeriodScheduleId(): string|null {
        return this.idlePeriodScheduleId;
    }
    public setIdlePeriodScheduleId(idlePeriodScheduleId: string|null) {
        this.idlePeriodScheduleId = idlePeriodScheduleId;
        return this;
    }
    public withIdlePeriodScheduleId(idlePeriodScheduleId: string|null): this {
        this.idlePeriodScheduleId = idlePeriodScheduleId;
        return this;
    }
    public getReceivePeriodScheduleId(): string|null {
        return this.receivePeriodScheduleId;
    }
    public setReceivePeriodScheduleId(receivePeriodScheduleId: string|null) {
        this.receivePeriodScheduleId = receivePeriodScheduleId;
        return this;
    }
    public withReceivePeriodScheduleId(receivePeriodScheduleId: string|null): this {
        this.receivePeriodScheduleId = receivePeriodScheduleId;
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

    public static fromDict(data: {[key: string]: any}): CategoryModelMaster|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new CategoryModelMaster()
            .withCategoryModelId(data["categoryModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withRewardIntervalMinutes(data["rewardIntervalMinutes"])
            .withDefaultMaximumIdleMinutes(data["defaultMaximumIdleMinutes"])
            .withAcquireActions(data.acquireActions ?
                data.acquireActions.map((item: {[key: string]: any}) => {
                    return AcquireActionList.fromDict(item);
                }
            ) : [])
            .withIdlePeriodScheduleId(data["idlePeriodScheduleId"])
            .withReceivePeriodScheduleId(data["receivePeriodScheduleId"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "categoryModelId": this.getCategoryModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "rewardIntervalMinutes": this.getRewardIntervalMinutes(),
            "defaultMaximumIdleMinutes": this.getDefaultMaximumIdleMinutes(),
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions()!.map((item: AcquireActionList) => {
                    return item.toDict();
                }
            ) : [],
            "idlePeriodScheduleId": this.getIdlePeriodScheduleId(),
            "receivePeriodScheduleId": this.getReceivePeriodScheduleId(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
