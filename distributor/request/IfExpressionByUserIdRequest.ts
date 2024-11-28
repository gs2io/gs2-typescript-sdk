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

import * as Gs2Distributor from '../model'

export default class IfExpressionByUserIdRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private userId: string|null = null;
    private condition: Gs2Distributor.VerifyAction|null = null;
    private trueActions: Gs2Distributor.ConsumeAction[]|null = null;
    private falseActions: Gs2Distributor.ConsumeAction[]|null = null;
    private multiplyValueSpecifyingQuantity: boolean|null = null;
    private timeOffsetToken: string|null = null;
    private duplicationAvoider: string|null = null;

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
    public getCondition(): Gs2Distributor.VerifyAction|null {
        return this.condition;
    }
    public setCondition(condition: Gs2Distributor.VerifyAction|null) {
        this.condition = condition;
        return this;
    }
    public withCondition(condition: Gs2Distributor.VerifyAction|null): this {
        this.condition = condition;
        return this;
    }
    public getTrueActions(): Gs2Distributor.ConsumeAction[]|null {
        return this.trueActions;
    }
    public setTrueActions(trueActions: Gs2Distributor.ConsumeAction[]|null) {
        this.trueActions = trueActions;
        return this;
    }
    public withTrueActions(trueActions: Gs2Distributor.ConsumeAction[]|null): this {
        this.trueActions = trueActions;
        return this;
    }
    public getFalseActions(): Gs2Distributor.ConsumeAction[]|null {
        return this.falseActions;
    }
    public setFalseActions(falseActions: Gs2Distributor.ConsumeAction[]|null) {
        this.falseActions = falseActions;
        return this;
    }
    public withFalseActions(falseActions: Gs2Distributor.ConsumeAction[]|null): this {
        this.falseActions = falseActions;
        return this;
    }
    public getMultiplyValueSpecifyingQuantity(): boolean|null {
        return this.multiplyValueSpecifyingQuantity;
    }
    public setMultiplyValueSpecifyingQuantity(multiplyValueSpecifyingQuantity: boolean|null) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    }
    public withMultiplyValueSpecifyingQuantity(multiplyValueSpecifyingQuantity: boolean|null): this {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    }
    public getTimeOffsetToken(): string|null {
        return this.timeOffsetToken;
    }
    public setTimeOffsetToken(timeOffsetToken: string|null) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    }
    public withTimeOffsetToken(timeOffsetToken: string|null): this {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    }

    public getDuplicationAvoider(): string|null {
        return this.duplicationAvoider;
    }

    public setDuplicationAvoider(duplicationAvoider: string|null) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    }

    public withDuplicationAvoider(duplicationAvoider: string|null): this {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): IfExpressionByUserIdRequest {
        return new IfExpressionByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withCondition(Gs2Distributor.VerifyAction.fromDict(data["condition"]))
            .withTrueActions(data.trueActions ?
                data.trueActions.map((item: {[key: string]: any}) => {
                    return Gs2Distributor.ConsumeAction.fromDict(item);
                }
            ) : null)
            .withFalseActions(data.falseActions ?
                data.falseActions.map((item: {[key: string]: any}) => {
                    return Gs2Distributor.ConsumeAction.fromDict(item);
                }
            ) : null)
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "condition": this.getCondition()?.toDict(),
            "trueActions": this.getTrueActions() ?
                this.getTrueActions()!.map((item: Gs2Distributor.ConsumeAction) => {
                    return item.toDict();
                }
            ) : null,
            "falseActions": this.getFalseActions() ?
                this.getFalseActions()!.map((item: Gs2Distributor.ConsumeAction) => {
                    return item.toDict();
                }
            ) : null,
            "multiplyValueSpecifyingQuantity": this.getMultiplyValueSpecifyingQuantity(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    }
}