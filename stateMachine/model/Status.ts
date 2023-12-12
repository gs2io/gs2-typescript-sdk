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
import RandomUsed from './RandomUsed';
import RandomStatus from './RandomStatus';
import StackEntry from './StackEntry';
import Variable from './Variable';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:stateMachine:{namespaceName}:user:{userId}:status:{statusName}";

export default class Status implements IModel {
    private statusId: string|null = null;
    private userId: string|null = null;
    private name: string|null = null;
    private stateMachineVersion: number|null = null;
    private enableSpeculativeExecution: string|null = null;
    private stateMachineDefinition: string|null = null;
    private randomStatus: RandomStatus|null = null;
    private stacks: StackEntry[]|null = null;
    private variables: Variable[]|null = null;
    private status: string|null = null;
    private lastError: string|null = null;
    private transitionCount: number|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{statusName}', '.*')
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
            .replace('{userId}', '.*')
            .replace('{statusName}', '.*')
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
            .replace('{userId}', '.*')
            .replace('{statusName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getUserId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{statusName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getStatusName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{statusName}', '(.*)')
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
        if (this.getUserId(grn) == null || this.getUserId(grn) === '') {
            return false;
        }
        if (this.getStatusName(grn) == null || this.getStatusName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        userId: string|null,
        statusName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{userId}', userId ?? '')
            .replace('{statusName}', statusName ?? '');
    }
    public getStatusId(): string|null {
        return this.statusId;
    }
    public setStatusId(statusId: string|null) {
        this.statusId = statusId;
        return this;
    }
    public withStatusId(statusId: string|null): this {
        this.statusId = statusId;
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
    public getStateMachineVersion(): number|null {
        return this.stateMachineVersion;
    }
    public setStateMachineVersion(stateMachineVersion: number|null) {
        this.stateMachineVersion = stateMachineVersion;
        return this;
    }
    public withStateMachineVersion(stateMachineVersion: number|null): this {
        this.stateMachineVersion = stateMachineVersion;
        return this;
    }
    public getEnableSpeculativeExecution(): string|null {
        return this.enableSpeculativeExecution;
    }
    public setEnableSpeculativeExecution(enableSpeculativeExecution: string|null) {
        this.enableSpeculativeExecution = enableSpeculativeExecution;
        return this;
    }
    public withEnableSpeculativeExecution(enableSpeculativeExecution: string|null): this {
        this.enableSpeculativeExecution = enableSpeculativeExecution;
        return this;
    }
    public getStateMachineDefinition(): string|null {
        return this.stateMachineDefinition;
    }
    public setStateMachineDefinition(stateMachineDefinition: string|null) {
        this.stateMachineDefinition = stateMachineDefinition;
        return this;
    }
    public withStateMachineDefinition(stateMachineDefinition: string|null): this {
        this.stateMachineDefinition = stateMachineDefinition;
        return this;
    }
    public getRandomStatus(): RandomStatus|null {
        return this.randomStatus;
    }
    public setRandomStatus(randomStatus: RandomStatus|null) {
        this.randomStatus = randomStatus;
        return this;
    }
    public withRandomStatus(randomStatus: RandomStatus|null): this {
        this.randomStatus = randomStatus;
        return this;
    }
    public getStacks(): StackEntry[]|null {
        return this.stacks;
    }
    public setStacks(stacks: StackEntry[]|null) {
        this.stacks = stacks;
        return this;
    }
    public withStacks(stacks: StackEntry[]|null): this {
        this.stacks = stacks;
        return this;
    }
    public getVariables(): Variable[]|null {
        return this.variables;
    }
    public setVariables(variables: Variable[]|null) {
        this.variables = variables;
        return this;
    }
    public withVariables(variables: Variable[]|null): this {
        this.variables = variables;
        return this;
    }
    public getStatus(): string|null {
        return this.status;
    }
    public setStatus(status: string|null) {
        this.status = status;
        return this;
    }
    public withStatus(status: string|null): this {
        this.status = status;
        return this;
    }
    public getLastError(): string|null {
        return this.lastError;
    }
    public setLastError(lastError: string|null) {
        this.lastError = lastError;
        return this;
    }
    public withLastError(lastError: string|null): this {
        this.lastError = lastError;
        return this;
    }
    public getTransitionCount(): number|null {
        return this.transitionCount;
    }
    public setTransitionCount(transitionCount: number|null) {
        this.transitionCount = transitionCount;
        return this;
    }
    public withTransitionCount(transitionCount: number|null): this {
        this.transitionCount = transitionCount;
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

    public static fromDict(data: {[key: string]: any}): Status|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Status()
            .withStatusId(data["statusId"])
            .withUserId(data["userId"])
            .withName(data["name"])
            .withStateMachineVersion(data["stateMachineVersion"])
            .withEnableSpeculativeExecution(data["enableSpeculativeExecution"])
            .withStateMachineDefinition(data["stateMachineDefinition"])
            .withRandomStatus(RandomStatus.fromDict(data["randomStatus"]))
            .withStacks(data.stacks ?
                data.stacks.map((item: {[key: string]: any}) => {
                    return StackEntry.fromDict(item);
                }
            ) : [])
            .withVariables(data.variables ?
                data.variables.map((item: {[key: string]: any}) => {
                    return Variable.fromDict(item);
                }
            ) : [])
            .withStatus(data["status"])
            .withLastError(data["lastError"])
            .withTransitionCount(data["transitionCount"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "statusId": this.getStatusId(),
            "userId": this.getUserId(),
            "name": this.getName(),
            "stateMachineVersion": this.getStateMachineVersion(),
            "enableSpeculativeExecution": this.getEnableSpeculativeExecution(),
            "stateMachineDefinition": this.getStateMachineDefinition(),
            "randomStatus": this.getRandomStatus()?.toDict(),
            "stacks": this.getStacks() ?
                this.getStacks()!.map((item: StackEntry) => {
                    return item.toDict();
                }
            ) : [],
            "variables": this.getVariables() ?
                this.getVariables()!.map((item: Variable) => {
                    return item.toDict();
                }
            ) : [],
            "status": this.getStatus(),
            "lastError": this.getLastError(),
            "transitionCount": this.getTransitionCount(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
