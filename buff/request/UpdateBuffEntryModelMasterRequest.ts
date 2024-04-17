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

import * as Gs2Buff from '../model'

export default class UpdateBuffEntryModelMasterRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private buffEntryName: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private targetType: string|null = null;
    private targetModel: Gs2Buff.BuffTargetModel|null = null;
    private targetAction: Gs2Buff.BuffTargetAction|null = null;
    private expression: string|null = null;
    private priority: number|null = null;
    private applyPeriodScheduleEventId: string|null = null;

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
    public getBuffEntryName(): string|null {
        return this.buffEntryName;
    }
    public setBuffEntryName(buffEntryName: string|null) {
        this.buffEntryName = buffEntryName;
        return this;
    }
    public withBuffEntryName(buffEntryName: string|null): this {
        this.buffEntryName = buffEntryName;
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
    public getTargetModel(): Gs2Buff.BuffTargetModel|null {
        return this.targetModel;
    }
    public setTargetModel(targetModel: Gs2Buff.BuffTargetModel|null) {
        this.targetModel = targetModel;
        return this;
    }
    public withTargetModel(targetModel: Gs2Buff.BuffTargetModel|null): this {
        this.targetModel = targetModel;
        return this;
    }
    public getTargetAction(): Gs2Buff.BuffTargetAction|null {
        return this.targetAction;
    }
    public setTargetAction(targetAction: Gs2Buff.BuffTargetAction|null) {
        this.targetAction = targetAction;
        return this;
    }
    public withTargetAction(targetAction: Gs2Buff.BuffTargetAction|null): this {
        this.targetAction = targetAction;
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

    public static fromDict(data: {[key: string]: any}): UpdateBuffEntryModelMasterRequest {
        return new UpdateBuffEntryModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withBuffEntryName(data["buffEntryName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withTargetType(data["targetType"])
            .withTargetModel(Gs2Buff.BuffTargetModel.fromDict(data["targetModel"]))
            .withTargetAction(Gs2Buff.BuffTargetAction.fromDict(data["targetAction"]))
            .withExpression(data["expression"])
            .withPriority(data["priority"])
            .withApplyPeriodScheduleEventId(data["applyPeriodScheduleEventId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "buffEntryName": this.getBuffEntryName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "targetType": this.getTargetType(),
            "targetModel": this.getTargetModel()?.toDict(),
            "targetAction": this.getTargetAction()?.toDict(),
            "expression": this.getExpression(),
            "priority": this.getPriority(),
            "applyPeriodScheduleEventId": this.getApplyPeriodScheduleEventId(),
        };
    }
}