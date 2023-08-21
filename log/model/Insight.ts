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
const grnFormat: string = "grn:gs2:{region}:{ownerId}:log:{namespaceName}:insight:{insightName}";

export default class Insight implements IModel {
    private insightId: string|null = null;
    private name: string|null = null;
    private taskId: string|null = null;
    private host: string|null = null;
    private password: string|null = null;
    private status: string|null = null;
    private createdAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{insightName}', '.*')
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
            .replace('{insightName}', '.*')
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
            .replace('{insightName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getInsightName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{insightName}', '(.*)')
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
        if (this.getInsightName(grn) == null || this.getInsightName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        insightName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{insightName}', insightName ?? '');
    }
    public getInsightId(): string|null {
        return this.insightId;
    }
    public setInsightId(insightId: string|null) {
        this.insightId = insightId;
        return this;
    }
    public withInsightId(insightId: string|null): this {
        this.insightId = insightId;
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
    public getTaskId(): string|null {
        return this.taskId;
    }
    public setTaskId(taskId: string|null) {
        this.taskId = taskId;
        return this;
    }
    public withTaskId(taskId: string|null): this {
        this.taskId = taskId;
        return this;
    }
    public getHost(): string|null {
        return this.host;
    }
    public setHost(host: string|null) {
        this.host = host;
        return this;
    }
    public withHost(host: string|null): this {
        this.host = host;
        return this;
    }
    public getPassword(): string|null {
        return this.password;
    }
    public setPassword(password: string|null) {
        this.password = password;
        return this;
    }
    public withPassword(password: string|null): this {
        this.password = password;
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
    public getRevision(): number|null {
        return this.revision;
    }
    public setRevision(revision: number|null) {
        this.revision = revision;
        return this;
    }
    public withRevision(revision: number|null): this {
        this.revision = revision;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Insight|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Insight()
            .withInsightId(data["insightId"])
            .withName(data["name"])
            .withTaskId(data["taskId"])
            .withHost(data["host"])
            .withPassword(data["password"])
            .withStatus(data["status"])
            .withCreatedAt(data["createdAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "insightId": this.getInsightId(),
            "name": this.getName(),
            "taskId": this.getTaskId(),
            "host": this.getHost(),
            "password": this.getPassword(),
            "status": this.getStatus(),
            "createdAt": this.getCreatedAt(),
            "revision": this.getRevision(),
        };
    }
}
