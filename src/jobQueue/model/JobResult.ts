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

import IModel from '@/gs2/core/interface/IModel';

export class JobResult implements IModel {
    private jobResultId: string|null = null;
    private jobId: string|null = null;
    private tryNumber: number|null = null;
    private statusCode: number|null = null;
    private result: string|null = null;
    private tryAt: number|null = null;

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
            .withTryNumber(data["tryNumber"])
            .withStatusCode(data["statusCode"])
            .withResult(data["result"])
            .withTryAt(data["tryAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "jobResultId": this.getJobResultId(),
            "jobId": this.getJobId(),
            "tryNumber": this.getTryNumber(),
            "statusCode": this.getStatusCode(),
            "result": this.getResult(),
            "tryAt": this.getTryAt(),
        };
    }
}
