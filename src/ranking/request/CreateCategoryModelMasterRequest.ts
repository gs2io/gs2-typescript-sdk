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

import IRequest from '@/gs2/core/interface/IRequest';

import * as Gs2Ranking from '../model'

export class CreateCategoryModelMasterRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private minimumValue: number|null = null;
    private maximumValue: number|null = null;
    private orderDirection: string|null = null;
    private scope: string|null = null;
    private uniqueByUserId: boolean|null = null;
    private calculateFixedTimingHour: number|null = null;
    private calculateFixedTimingMinute: number|null = null;
    private calculateIntervalMinutes: number|null = null;
    private entryPeriodEventId: string|null = null;
    private accessPeriodEventId: string|null = null;
    private generation: string|null = null;

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

    public getScope(): string|null {
        return this.scope;
    }

    public setScope(scope: string|null) {
        this.scope = scope;
        return this;
    }

    public withScope(scope: string|null): this {
        this.scope = scope;
        return this;
    }

    public getUniqueByUserId(): boolean|null {
        return this.uniqueByUserId;
    }

    public setUniqueByUserId(uniqueByUserId: boolean|null) {
        this.uniqueByUserId = uniqueByUserId;
        return this;
    }

    public withUniqueByUserId(uniqueByUserId: boolean|null): this {
        this.uniqueByUserId = uniqueByUserId;
        return this;
    }

    public getCalculateFixedTimingHour(): number|null {
        return this.calculateFixedTimingHour;
    }

    public setCalculateFixedTimingHour(calculateFixedTimingHour: number|null) {
        this.calculateFixedTimingHour = calculateFixedTimingHour;
        return this;
    }

    public withCalculateFixedTimingHour(calculateFixedTimingHour: number|null): this {
        this.calculateFixedTimingHour = calculateFixedTimingHour;
        return this;
    }

    public getCalculateFixedTimingMinute(): number|null {
        return this.calculateFixedTimingMinute;
    }

    public setCalculateFixedTimingMinute(calculateFixedTimingMinute: number|null) {
        this.calculateFixedTimingMinute = calculateFixedTimingMinute;
        return this;
    }

    public withCalculateFixedTimingMinute(calculateFixedTimingMinute: number|null): this {
        this.calculateFixedTimingMinute = calculateFixedTimingMinute;
        return this;
    }

    public getCalculateIntervalMinutes(): number|null {
        return this.calculateIntervalMinutes;
    }

    public setCalculateIntervalMinutes(calculateIntervalMinutes: number|null) {
        this.calculateIntervalMinutes = calculateIntervalMinutes;
        return this;
    }

    public withCalculateIntervalMinutes(calculateIntervalMinutes: number|null): this {
        this.calculateIntervalMinutes = calculateIntervalMinutes;
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

    public getGeneration(): string|null {
        return this.generation;
    }

    public setGeneration(generation: string|null) {
        this.generation = generation;
        return this;
    }

    public withGeneration(generation: string|null): this {
        this.generation = generation;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CreateCategoryModelMasterRequest {
        return new CreateCategoryModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withMinimumValue(data["minimumValue"])
            .withMaximumValue(data["maximumValue"])
            .withOrderDirection(data["orderDirection"])
            .withScope(data["scope"])
            .withUniqueByUserId(data["uniqueByUserId"])
            .withCalculateFixedTimingHour(data["calculateFixedTimingHour"])
            .withCalculateFixedTimingMinute(data["calculateFixedTimingMinute"])
            .withCalculateIntervalMinutes(data["calculateIntervalMinutes"])
            .withEntryPeriodEventId(data["entryPeriodEventId"])
            .withAccessPeriodEventId(data["accessPeriodEventId"])
            .withGeneration(data["generation"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "minimumValue": this.getMinimumValue(),
            "maximumValue": this.getMaximumValue(),
            "orderDirection": this.getOrderDirection(),
            "scope": this.getScope(),
            "uniqueByUserId": this.getUniqueByUserId(),
            "calculateFixedTimingHour": this.getCalculateFixedTimingHour(),
            "calculateFixedTimingMinute": this.getCalculateFixedTimingMinute(),
            "calculateIntervalMinutes": this.getCalculateIntervalMinutes(),
            "entryPeriodEventId": this.getEntryPeriodEventId(),
            "accessPeriodEventId": this.getAccessPeriodEventId(),
            "generation": this.getGeneration(),
        };
    }
}