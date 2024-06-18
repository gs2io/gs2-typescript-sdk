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
import BuffTargetGrn from './BuffTargetGrn';
import BuffTargetModel from './BuffTargetModel';
import BuffTargetAction from './BuffTargetAction';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:buff:{namespaceName}:model:{buffEntryName}";

export default class BuffEntryModel implements IModel {
    private buffEntryModelId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private expression: string|null = null;
    private targetType: string|null = null;
    private targetModel: BuffTargetModel|null = null;
    private targetAction: BuffTargetAction|null = null;
    private priority: number|null = null;
    private applyPeriodScheduleEventId: string|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{buffEntryName}', '.*')
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
            .replace('{buffEntryName}', '.*')
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
            .replace('{buffEntryName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getBuffEntryName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{buffEntryName}', '(.*)')
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
        if (this.getBuffEntryName(grn) == null || this.getBuffEntryName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        buffEntryName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{buffEntryName}', buffEntryName ?? '');
    }
    public getBuffEntryModelId(): string|null {
        return this.buffEntryModelId;
    }
    public setBuffEntryModelId(buffEntryModelId: string|null) {
        this.buffEntryModelId = buffEntryModelId;
        return this;
    }
    public withBuffEntryModelId(buffEntryModelId: string|null): this {
        this.buffEntryModelId = buffEntryModelId;
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
    public getExpression(): string|null {
        return this.expression;
    }
    public setExpression(expression: string|null) {
        this.expression = expression;
        return this;
    }
    public withExpression(expression: string|null): this {
        this.expression = expression;
        return this;
    }
    public getTargetType(): string|null {
        return this.targetType;
    }
    public setTargetType(targetType: string|null) {
        this.targetType = targetType;
        return this;
    }
    public withTargetType(targetType: string|null): this {
        this.targetType = targetType;
        return this;
    }
    public getTargetModel(): BuffTargetModel|null {
        return this.targetModel;
    }
    public setTargetModel(targetModel: BuffTargetModel|null) {
        this.targetModel = targetModel;
        return this;
    }
    public withTargetModel(targetModel: BuffTargetModel|null): this {
        this.targetModel = targetModel;
        return this;
    }
    public getTargetAction(): BuffTargetAction|null {
        return this.targetAction;
    }
    public setTargetAction(targetAction: BuffTargetAction|null) {
        this.targetAction = targetAction;
        return this;
    }
    public withTargetAction(targetAction: BuffTargetAction|null): this {
        this.targetAction = targetAction;
        return this;
    }
    public getPriority(): number|null {
        return this.priority;
    }
    public setPriority(priority: number|null) {
        this.priority = priority;
        return this;
    }
    public withPriority(priority: number|null): this {
        this.priority = priority;
        return this;
    }
    public getApplyPeriodScheduleEventId(): string|null {
        return this.applyPeriodScheduleEventId;
    }
    public setApplyPeriodScheduleEventId(applyPeriodScheduleEventId: string|null) {
        this.applyPeriodScheduleEventId = applyPeriodScheduleEventId;
        return this;
    }
    public withApplyPeriodScheduleEventId(applyPeriodScheduleEventId: string|null): this {
        this.applyPeriodScheduleEventId = applyPeriodScheduleEventId;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): BuffEntryModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new BuffEntryModel()
            .withBuffEntryModelId(data["buffEntryModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withExpression(data["expression"])
            .withTargetType(data["targetType"])
            .withTargetModel(BuffTargetModel.fromDict(data["targetModel"]))
            .withTargetAction(BuffTargetAction.fromDict(data["targetAction"]))
            .withPriority(data["priority"])
            .withApplyPeriodScheduleEventId(data["applyPeriodScheduleEventId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "buffEntryModelId": this.getBuffEntryModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "expression": this.getExpression(),
            "targetType": this.getTargetType(),
            "targetModel": this.getTargetModel()?.toDict(),
            "targetAction": this.getTargetAction()?.toDict(),
            "priority": this.getPriority(),
            "applyPeriodScheduleEventId": this.getApplyPeriodScheduleEventId(),
        };
    }
}
