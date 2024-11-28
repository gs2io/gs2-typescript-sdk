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

import * as Gs2Exchange from '../model'

export default class UpdateIncrementalRateModelMasterRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private rateName: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private consumeAction: Gs2Exchange.ConsumeAction|null = null;
    private calculateType: string|null = null;
    private baseValue: number|null = null;
    private coefficientValue: number|null = null;
    private calculateScriptId: string|null = null;
    private exchangeCountId: string|null = null;
    private maximumExchangeCount: number|null = null;
    private acquireActions: Gs2Exchange.AcquireAction[]|null = null;

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
    public getRateName(): string|null {
        return this.rateName;
    }
    public setRateName(rateName: string|null) {
        this.rateName = rateName;
        return this;
    }
    public withRateName(rateName: string|null): this {
        this.rateName = rateName;
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
    public getConsumeAction(): Gs2Exchange.ConsumeAction|null {
        return this.consumeAction;
    }
    public setConsumeAction(consumeAction: Gs2Exchange.ConsumeAction|null) {
        this.consumeAction = consumeAction;
        return this;
    }
    public withConsumeAction(consumeAction: Gs2Exchange.ConsumeAction|null): this {
        this.consumeAction = consumeAction;
        return this;
    }
    public getCalculateType(): string|null {
        return this.calculateType;
    }
    public setCalculateType(calculateType: string|null) {
        this.calculateType = calculateType;
        return this;
    }
    public withCalculateType(calculateType: string|null): this {
        this.calculateType = calculateType;
        return this;
    }
    public getBaseValue(): number|null {
        return this.baseValue;
    }
    public setBaseValue(baseValue: number|null) {
        this.baseValue = baseValue;
        return this;
    }
    public withBaseValue(baseValue: number|null): this {
        this.baseValue = baseValue;
        return this;
    }
    public getCoefficientValue(): number|null {
        return this.coefficientValue;
    }
    public setCoefficientValue(coefficientValue: number|null) {
        this.coefficientValue = coefficientValue;
        return this;
    }
    public withCoefficientValue(coefficientValue: number|null): this {
        this.coefficientValue = coefficientValue;
        return this;
    }
    public getCalculateScriptId(): string|null {
        return this.calculateScriptId;
    }
    public setCalculateScriptId(calculateScriptId: string|null) {
        this.calculateScriptId = calculateScriptId;
        return this;
    }
    public withCalculateScriptId(calculateScriptId: string|null): this {
        this.calculateScriptId = calculateScriptId;
        return this;
    }
    public getExchangeCountId(): string|null {
        return this.exchangeCountId;
    }
    public setExchangeCountId(exchangeCountId: string|null) {
        this.exchangeCountId = exchangeCountId;
        return this;
    }
    public withExchangeCountId(exchangeCountId: string|null): this {
        this.exchangeCountId = exchangeCountId;
        return this;
    }
    public getMaximumExchangeCount(): number|null {
        return this.maximumExchangeCount;
    }
    public setMaximumExchangeCount(maximumExchangeCount: number|null) {
        this.maximumExchangeCount = maximumExchangeCount;
        return this;
    }
    public withMaximumExchangeCount(maximumExchangeCount: number|null): this {
        this.maximumExchangeCount = maximumExchangeCount;
        return this;
    }
    public getAcquireActions(): Gs2Exchange.AcquireAction[]|null {
        return this.acquireActions;
    }
    public setAcquireActions(acquireActions: Gs2Exchange.AcquireAction[]|null) {
        this.acquireActions = acquireActions;
        return this;
    }
    public withAcquireActions(acquireActions: Gs2Exchange.AcquireAction[]|null): this {
        this.acquireActions = acquireActions;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): UpdateIncrementalRateModelMasterRequest {
        return new UpdateIncrementalRateModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withRateName(data["rateName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withConsumeAction(Gs2Exchange.ConsumeAction.fromDict(data["consumeAction"]))
            .withCalculateType(data["calculateType"])
            .withBaseValue(data["baseValue"])
            .withCoefficientValue(data["coefficientValue"])
            .withCalculateScriptId(data["calculateScriptId"])
            .withExchangeCountId(data["exchangeCountId"])
            .withMaximumExchangeCount(data["maximumExchangeCount"])
            .withAcquireActions(data.acquireActions ?
                data.acquireActions.map((item: {[key: string]: any}) => {
                    return Gs2Exchange.AcquireAction.fromDict(item);
                }
            ) : null);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "rateName": this.getRateName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "consumeAction": this.getConsumeAction()?.toDict(),
            "calculateType": this.getCalculateType(),
            "baseValue": this.getBaseValue(),
            "coefficientValue": this.getCoefficientValue(),
            "calculateScriptId": this.getCalculateScriptId(),
            "exchangeCountId": this.getExchangeCountId(),
            "maximumExchangeCount": this.getMaximumExchangeCount(),
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions()!.map((item: Gs2Exchange.AcquireAction) => {
                    return item.toDict();
                }
            ) : null,
        };
    }
}