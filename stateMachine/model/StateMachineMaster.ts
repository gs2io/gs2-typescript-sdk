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

import * as Gs2StateMachine from '../../stateMachine/model'
const grnFormat: string = "grn:gs2:{region}:{ownerId}:stateMachine:{namespaceName}:master:stateMachine:{version}";

export default class StateMachineMaster implements IModel {
    private stateMachineId: string|null = null;
    private mainStateMachineName: string|null = null;
    private payload: string|null = null;
    private version: number|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{version}', '.*')
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
            .replace('{version}', '.*')
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
            .replace('{version}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getVersion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{version}', '(.*)')
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
        if (this.getVersion(grn) == null || this.getVersion(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        version: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{version}', version ?? '');
    }
    public getStateMachineId(): string|null {
        return this.stateMachineId;
    }
    public setStateMachineId(stateMachineId: string|null) {
        this.stateMachineId = stateMachineId;
        return this;
    }
    public withStateMachineId(stateMachineId: string|null): this {
        this.stateMachineId = stateMachineId;
        return this;
    }
    public getMainStateMachineName(): string|null {
        return this.mainStateMachineName;
    }
    public setMainStateMachineName(mainStateMachineName: string|null) {
        this.mainStateMachineName = mainStateMachineName;
        return this;
    }
    public withMainStateMachineName(mainStateMachineName: string|null): this {
        this.mainStateMachineName = mainStateMachineName;
        return this;
    }
    public getPayload(): string|null {
        return this.payload;
    }
    public setPayload(payload: string|null) {
        this.payload = payload;
        return this;
    }
    public withPayload(payload: string|null): this {
        this.payload = payload;
        return this;
    }
    public getVersion(): number|null {
        return this.version;
    }
    public setVersion(version: number|null) {
        this.version = version;
        return this;
    }
    public withVersion(version: number|null): this {
        this.version = version;
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

    public static fromDict(data: {[key: string]: any}): StateMachineMaster|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new StateMachineMaster()
            .withStateMachineId(data["stateMachineId"])
            .withMainStateMachineName(data["mainStateMachineName"])
            .withPayload(data["payload"])
            .withVersion(data["version"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "stateMachineId": this.getStateMachineId(),
            "mainStateMachineName": this.getMainStateMachineName(),
            "payload": this.getPayload(),
            "version": this.getVersion(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
