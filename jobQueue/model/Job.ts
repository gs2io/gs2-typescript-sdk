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
const grnFormat: string = "grn:gs2:{region}:{ownerId}:queue:{namespaceName}:user:{userId}:job:{jobName}";

export default class Job implements IModel {
    private jobId: string|null = null;
    private name: string|null = null;
    private userId: string|null = null;
    private scriptId: string|null = null;
    private args: string|null = null;
    private currentRetryCount: number|null = null;
    private maxTryCount: number|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{jobName}', '.*')
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
            .replace('{jobName}', '.*')
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
            .replace('{jobName}', '.*')
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
            .replace('{jobName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getJobName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{jobName}', '(.*)')
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
        if (this.getJobName(grn) == null || this.getJobName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        userId: string|null,
        jobName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{userId}', userId ?? '')
            .replace('{jobName}', jobName ?? '');
    }

    public getJobId(): string|null {
        return this.jobId;
    }

    public setJobId(jobId: string|null) {
        this.jobId = jobId;
        return this;
    }

    public withJobId(jobId: string|null): this {
        this.jobId = jobId;
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

    public getScriptId(): string|null {
        return this.scriptId;
    }

    public setScriptId(scriptId: string|null) {
        this.scriptId = scriptId;
        return this;
    }

    public withScriptId(scriptId: string|null): this {
        this.scriptId = scriptId;
        return this;
    }

    public getArgs(): string|null {
        return this.args;
    }

    public setArgs(args: string|null) {
        this.args = args;
        return this;
    }

    public withArgs(args: string|null): this {
        this.args = args;
        return this;
    }

    public getCurrentRetryCount(): number|null {
        return this.currentRetryCount;
    }

    public setCurrentRetryCount(currentRetryCount: number|null) {
        this.currentRetryCount = currentRetryCount;
        return this;
    }

    public withCurrentRetryCount(currentRetryCount: number|null): this {
        this.currentRetryCount = currentRetryCount;
        return this;
    }

    public getMaxTryCount(): number|null {
        return this.maxTryCount;
    }

    public setMaxTryCount(maxTryCount: number|null) {
        this.maxTryCount = maxTryCount;
        return this;
    }

    public withMaxTryCount(maxTryCount: number|null): this {
        this.maxTryCount = maxTryCount;
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

    public static fromDict(data: {[key: string]: any}): Job|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Job()
            .withJobId(data["jobId"])
            .withName(data["name"])
            .withUserId(data["userId"])
            .withScriptId(data["scriptId"])
            .withArgs(data["args"])
            .withCurrentRetryCount(data["currentRetryCount"])
            .withMaxTryCount(data["maxTryCount"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "jobId": this.getJobId(),
            "name": this.getName(),
            "userId": this.getUserId(),
            "scriptId": this.getScriptId(),
            "args": this.getArgs(),
            "currentRetryCount": this.getCurrentRetryCount(),
            "maxTryCount": this.getMaxTryCount(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
