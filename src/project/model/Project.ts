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
const grnFormat: string = "grn:gs2:::gs2:account:{accountName}:project:{projectName}";

export default class Project implements IModel {
    private projectId: string|null = null;
    private accountName: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private plan: string|null = null;
    private billingMethodName: string|null = null;
    private enableEventBridge: string|null = null;
    private eventBridgeAwsAccountId: string|null = null;
    private eventBridgeAwsRegion: string|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public static getAccountName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{accountName}', '(.*)')
            .replace('{projectName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getProjectName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{accountName}', '.*')
            .replace('{projectName}', '(.*)')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static isValid(grn: string): boolean {
        if (this.getAccountName(grn) == null) {
            return false;
        }
        if (this.getProjectName(grn) == null) {
            return false;
        }
        return true;
    }

    public static createGrn(
        accountName: string|null,
        projectName: string|null,
    ): string|null {
        if (accountName == null || accountName === '') {
            return null;
        }
        if (projectName == null || projectName === '') {
            return null;
        }
        return grnFormat
            .replace('{accountName}', accountName!)
            .replace('{projectName}', projectName!);
    }

    public getProjectId(): string|null {
        return this.projectId;
    }

    public setProjectId(projectId: string|null) {
        this.projectId = projectId;
        return this;
    }

    public withProjectId(projectId: string|null): this {
        this.projectId = projectId;
        return this;
    }

    public getAccountName(): string|null {
        return this.accountName;
    }

    public setAccountName(accountName: string|null) {
        this.accountName = accountName;
        return this;
    }

    public withAccountName(accountName: string|null): this {
        this.accountName = accountName;
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

    public static fromDict(data: {[key: string]: any}): Project|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Project()
            .withProjectId(data["projectId"])
            .withAccountName(data["accountName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withPlan(data["plan"])
            .withBillingMethodName(data["billingMethodName"])
            .withEnableEventBridge(data["enableEventBridge"])
            .withEventBridgeAwsAccountId(data["eventBridgeAwsAccountId"])
            .withEventBridgeAwsRegion(data["eventBridgeAwsRegion"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "projectId": this.getProjectId(),
            "accountName": this.getAccountName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "plan": this.getPlan(),
            "billingMethodName": this.getBillingMethodName(),
            "enableEventBridge": this.getEnableEventBridge(),
            "eventBridgeAwsAccountId": this.getEventBridgeAwsAccountId(),
            "eventBridgeAwsRegion": this.getEventBridgeAwsRegion(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
