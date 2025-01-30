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

import * as Gs2Limit from '../model'

export default class CreateLimitModelMasterRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private resetType: string|null = null;
    private resetDayOfMonth: number|null = null;
    private resetDayOfWeek: string|null = null;
    private resetHour: number|null = null;
    private anchorTimestamp: number|null = null;
    private days: number|null = null;

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
    public getResetType(): string|null {
        return this.resetType;
    }
    public setResetType(resetType: string|null) {
        this.resetType = resetType;
        return this;
    }
    public withResetType(resetType: string|null): this {
        this.resetType = resetType;
        return this;
    }
    public getResetDayOfMonth(): number|null {
        return this.resetDayOfMonth;
    }
    public setResetDayOfMonth(resetDayOfMonth: number|null) {
        this.resetDayOfMonth = resetDayOfMonth;
        return this;
    }
    public withResetDayOfMonth(resetDayOfMonth: number|null): this {
        this.resetDayOfMonth = resetDayOfMonth;
        return this;
    }
    public getResetDayOfWeek(): string|null {
        return this.resetDayOfWeek;
    }
    public setResetDayOfWeek(resetDayOfWeek: string|null) {
        this.resetDayOfWeek = resetDayOfWeek;
        return this;
    }
    public withResetDayOfWeek(resetDayOfWeek: string|null): this {
        this.resetDayOfWeek = resetDayOfWeek;
        return this;
    }
    public getResetHour(): number|null {
        return this.resetHour;
    }
    public setResetHour(resetHour: number|null) {
        this.resetHour = resetHour;
        return this;
    }
    public withResetHour(resetHour: number|null): this {
        this.resetHour = resetHour;
        return this;
    }
    public getAnchorTimestamp(): number|null {
        return this.anchorTimestamp;
    }
    public setAnchorTimestamp(anchorTimestamp: number|null) {
        this.anchorTimestamp = anchorTimestamp;
        return this;
    }
    public withAnchorTimestamp(anchorTimestamp: number|null): this {
        this.anchorTimestamp = anchorTimestamp;
        return this;
    }
    public getDays(): number|null {
        return this.days;
    }
    public setDays(days: number|null) {
        this.days = days;
        return this;
    }
    public withDays(days: number|null): this {
        this.days = days;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CreateLimitModelMasterRequest {
        return new CreateLimitModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withResetType(data["resetType"])
            .withResetDayOfMonth(data["resetDayOfMonth"])
            .withResetDayOfWeek(data["resetDayOfWeek"])
            .withResetHour(data["resetHour"])
            .withAnchorTimestamp(data["anchorTimestamp"])
            .withDays(data["days"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "resetType": this.getResetType(),
            "resetDayOfMonth": this.getResetDayOfMonth(),
            "resetDayOfWeek": this.getResetDayOfWeek(),
            "resetHour": this.getResetHour(),
            "anchorTimestamp": this.getAnchorTimestamp(),
            "days": this.getDays(),
        };
    }
}