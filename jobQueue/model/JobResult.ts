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

import * as Gs2JobQueue from '../../jobQueue/model'
const grnFormat: string = "grn:gs2:{region}:{ownerId}:queue:{namespaceName}:user:{userId}:job:{jobName}:jobResult:{tryNumber}";

export default class JobResult implements IModel {
    private jobResultId: string|null = null;
    private jobId: string|null = null;
    private scriptId: string|null = null;
    private args: string|null = null;
    private tryNumber: number|null = null;
    private statusCode: number|null = null;
    private result: string|null = null;
    private tryAt: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{jobName}', '.*')
            .replace('{tryNumber}', '.*')
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
            .replace('{tryNumber}', '.*')
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
            .replace('{tryNumber}', '.*')
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
            .replace('{tryNumber}', '.*')
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
            .replace('{tryNumber}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getTryNumber(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{jobName}', '.*')
            .replace('{tryNumber}', '(.*)')
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
        if (this.getTryNumber(grn) == null || this.getTryNumber(grn) === '') {
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
        tryNumber: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{userId}', userId ?? '')
            .replace('{jobName}', jobName ?? '')
            .replace('{tryNumber}', tryNumber ?? '');
    }
    public getJobResultId(): string|null {
        return this.jobResultId;
    }
    public setJobResultId(jobResultId: string|null) {
        this.jobResultId = jobResultId;
        return this;
    }
    public withJobResultId(jobResultId: string|null): this {
        this.jobResultId = jobResultId;
        return this;
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
    public getTryNumber(): number|null {
        return this.tryNumber;
    }
    public setTryNumber(tryNumber: number|null) {
        this.tryNumber = tryNumber;
        return this;
    }
    public withTryNumber(tryNumber: number|null): this {
        this.tryNumber = tryNumber;
        return this;
    }
    public getStatusCode(): number|null {
        return this.statusCode;
    }
    public setStatusCode(statusCode: number|null) {
        this.statusCode = statusCode;
        return this;
    }
    public withStatusCode(statusCode: number|null): this {
        this.statusCode = statusCode;
        return this;
    }
    public getResult(): string|null {
        return this.result;
    }
    public setResult(result: string|null) {
        this.result = result;
        return this;
    }
    public withResult(result: string|null): this {
        this.result = result;
        return this;
    }
    public getTryAt(): number|null {
        return this.tryAt;
    }
    public setTryAt(tryAt: number|null) {
        this.tryAt = tryAt;
        return this;
    }
    public withTryAt(tryAt: number|null): this {
        this.tryAt = tryAt;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): JobResult|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new JobResult()
            .withJobResultId(data["jobResultId"])
            .withJobId(data["jobId"])
            .withScriptId(data["scriptId"])
            .withArgs(data["args"])
            .withTryNumber(data["tryNumber"])
            .withStatusCode(data["statusCode"])
            .withResult(data["result"])
            .withTryAt(data["tryAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "jobResultId": this.getJobResultId(),
            "jobId": this.getJobId(),
            "scriptId": this.getScriptId(),
            "args": this.getArgs(),
            "tryNumber": this.getTryNumber(),
            "statusCode": this.getStatusCode(),
            "result": this.getResult(),
            "tryAt": this.getTryAt(),
        };
    }
}
