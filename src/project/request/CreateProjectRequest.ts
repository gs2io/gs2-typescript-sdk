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

import * as Gs2Project from '../model'

export class CreateProjectRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private accountToken: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private plan: string|null = null;
    private billingMethodName: string|null = null;
    private enableEventBridge: string|null = null;
    private eventBridgeAwsAccountId: string|null = null;
    private eventBridgeAwsRegion: string|null = null;

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

    public getAccountToken(): string|null {
        return this.accountToken;
    }

    public setAccountToken(accountToken: string|null) {
        this.accountToken = accountToken;
        return this;
    }

    public withAccountToken(accountToken: string|null): this {
        this.accountToken = accountToken;
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

    public getPlan(): string|null {
        return this.plan;
    }

    public setPlan(plan: string|null) {
        this.plan = plan;
        return this;
    }

    public withPlan(plan: string|null): this {
        this.plan = plan;
        return this;
    }

    public getBillingMethodName(): string|null {
        return this.billingMethodName;
    }

    public setBillingMethodName(billingMethodName: string|null) {
        this.billingMethodName = billingMethodName;
        return this;
    }

    public withBillingMethodName(billingMethodName: string|null): this {
        this.billingMethodName = billingMethodName;
        return this;
    }

    public getEnableEventBridge(): string|null {
        return this.enableEventBridge;
    }

    public setEnableEventBridge(enableEventBridge: string|null) {
        this.enableEventBridge = enableEventBridge;
        return this;
    }

    public withEnableEventBridge(enableEventBridge: string|null): this {
        this.enableEventBridge = enableEventBridge;
        return this;
    }

    public getEventBridgeAwsAccountId(): string|null {
        return this.eventBridgeAwsAccountId;
    }

    public setEventBridgeAwsAccountId(eventBridgeAwsAccountId: string|null) {
        this.eventBridgeAwsAccountId = eventBridgeAwsAccountId;
        return this;
    }

    public withEventBridgeAwsAccountId(eventBridgeAwsAccountId: string|null): this {
        this.eventBridgeAwsAccountId = eventBridgeAwsAccountId;
        return this;
    }

    public getEventBridgeAwsRegion(): string|null {
        return this.eventBridgeAwsRegion;
    }

    public setEventBridgeAwsRegion(eventBridgeAwsRegion: string|null) {
        this.eventBridgeAwsRegion = eventBridgeAwsRegion;
        return this;
    }

    public withEventBridgeAwsRegion(eventBridgeAwsRegion: string|null): this {
        this.eventBridgeAwsRegion = eventBridgeAwsRegion;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CreateProjectRequest {
        return new CreateProjectRequest()
            .withAccountToken(data["accountToken"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withPlan(data["plan"])
            .withBillingMethodName(data["billingMethodName"])
            .withEnableEventBridge(data["enableEventBridge"])
            .withEventBridgeAwsAccountId(data["eventBridgeAwsAccountId"])
            .withEventBridgeAwsRegion(data["eventBridgeAwsRegion"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "accountToken": this.getAccountToken(),
            "name": this.getName(),
            "description": this.getDescription(),
            "plan": this.getPlan(),
            "billingMethodName": this.getBillingMethodName(),
            "enableEventBridge": this.getEnableEventBridge(),
            "eventBridgeAwsAccountId": this.getEventBridgeAwsAccountId(),
            "eventBridgeAwsRegion": this.getEventBridgeAwsRegion(),
        };
    }
}