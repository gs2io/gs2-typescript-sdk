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

import * as Gs2Exchange from '../../exchange/model'
import ConsumeAction from './ConsumeAction';
import AcquireAction from './AcquireAction';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:exchange:{namespaceName}:incremental:model:{rateName}";

export default class IncrementalRateModel implements IModel {
    private incrementalRateModelId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private consumeAction: Gs2Exchange.ConsumeAction|null = null;
    private calculateType: string|null = null;
    private baseValue: number|null = null;
    private coefficientValue: number|null = null;
    private calculateScriptId: string|null = null;
    private exchangeCountId: string|null = null;
    private maximumExchangeCount: number|null = null;
    private acquireActions: Gs2Exchange.AcquireAction[]|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rateName}', '.*')
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
            .replace('{rateName}', '.*')
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
            .replace('{rateName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getRateName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rateName}', '(.*)')
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
        if (this.getRateName(grn) == null || this.getRateName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        rateName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{rateName}', rateName ?? '');
    }
    public getIncrementalRateModelId(): string|null {
        return this.incrementalRateModelId;
    }
    public setIncrementalRateModelId(incrementalRateModelId: string|null) {
        this.incrementalRateModelId = incrementalRateModelId;
        return this;
    }
    public withIncrementalRateModelId(incrementalRateModelId: string|null): this {
        this.incrementalRateModelId = incrementalRateModelId;
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

    public static fromDict(data: {[key: string]: any}): IncrementalRateModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new IncrementalRateModel()
            .withIncrementalRateModelId(data["incrementalRateModelId"])
            .withName(data["name"])
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
            "incrementalRateModelId": this.getIncrementalRateModelId(),
            "name": this.getName(),
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
