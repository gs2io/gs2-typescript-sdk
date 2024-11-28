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

import * as Gs2Ranking2 from '../../ranking2/model'
const grnFormat: string = "grn:gs2:{region}:{ownerId}:ranking2:{namespaceName}:subscribe:{rankingName}";

export default class SubscribeRankingModel implements IModel {
    private subscribeRankingModelId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private minimumValue: number|null = null;
    private maximumValue: number|null = null;
    private sum: boolean|null = null;
    private orderDirection: string|null = null;
    private entryPeriodEventId: string|null = null;
    private accessPeriodEventId: string|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rankingName}', '.*')
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
            .replace('{rankingName}', '.*')
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
            .replace('{rankingName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getRankingName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rankingName}', '(.*)')
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
        if (this.getRankingName(grn) == null || this.getRankingName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        rankingName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{rankingName}', rankingName ?? '');
    }
    public getSubscribeRankingModelId(): string|null {
        return this.subscribeRankingModelId;
    }
    public setSubscribeRankingModelId(subscribeRankingModelId: string|null) {
        this.subscribeRankingModelId = subscribeRankingModelId;
        return this;
    }
    public withSubscribeRankingModelId(subscribeRankingModelId: string|null): this {
        this.subscribeRankingModelId = subscribeRankingModelId;
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
    public getMinimumValue(): number|null {
        return this.minimumValue;
    }
    public setMinimumValue(minimumValue: number|null) {
        this.minimumValue = minimumValue;
        return this;
    }
    public withMinimumValue(minimumValue: number|null): this {
        this.minimumValue = minimumValue;
        return this;
    }
    public getMaximumValue(): number|null {
        return this.maximumValue;
    }
    public setMaximumValue(maximumValue: number|null) {
        this.maximumValue = maximumValue;
        return this;
    }
    public withMaximumValue(maximumValue: number|null): this {
        this.maximumValue = maximumValue;
        return this;
    }
    public getSum(): boolean|null {
        return this.sum;
    }
    public setSum(sum: boolean|null) {
        this.sum = sum;
        return this;
    }
    public withSum(sum: boolean|null): this {
        this.sum = sum;
        return this;
    }
    public getOrderDirection(): string|null {
        return this.orderDirection;
    }
    public setOrderDirection(orderDirection: string|null) {
        this.orderDirection = orderDirection;
        return this;
    }
    public withOrderDirection(orderDirection: string|null): this {
        this.orderDirection = orderDirection;
        return this;
    }
    public getEntryPeriodEventId(): string|null {
        return this.entryPeriodEventId;
    }
    public setEntryPeriodEventId(entryPeriodEventId: string|null) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    }
    public withEntryPeriodEventId(entryPeriodEventId: string|null): this {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    }
    public getAccessPeriodEventId(): string|null {
        return this.accessPeriodEventId;
    }
    public setAccessPeriodEventId(accessPeriodEventId: string|null) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    }
    public withAccessPeriodEventId(accessPeriodEventId: string|null): this {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): SubscribeRankingModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new SubscribeRankingModel()
            .withSubscribeRankingModelId(data["subscribeRankingModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withMinimumValue(data["minimumValue"])
            .withMaximumValue(data["maximumValue"])
            .withSum(data["sum"])
            .withOrderDirection(data["orderDirection"])
            .withEntryPeriodEventId(data["entryPeriodEventId"])
            .withAccessPeriodEventId(data["accessPeriodEventId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "subscribeRankingModelId": this.getSubscribeRankingModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "minimumValue": this.getMinimumValue(),
            "maximumValue": this.getMaximumValue(),
            "sum": this.getSum(),
            "orderDirection": this.getOrderDirection(),
            "entryPeriodEventId": this.getEntryPeriodEventId(),
            "accessPeriodEventId": this.getAccessPeriodEventId(),
        };
    }
}
