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

import * as Gs2Inventory from '../../inventory/model'
import ScriptSetting from './ScriptSetting';
import LogSetting from './LogSetting';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:inventory:{namespaceName}";

export default class Namespace implements IModel {
    private namespaceId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private acquireScript: Gs2Inventory.ScriptSetting|null = null;
    private overflowScript: Gs2Inventory.ScriptSetting|null = null;
    private consumeScript: Gs2Inventory.ScriptSetting|null = null;
    private simpleItemAcquireScript: Gs2Inventory.ScriptSetting|null = null;
    private simpleItemConsumeScript: Gs2Inventory.ScriptSetting|null = null;
    private bigItemAcquireScript: Gs2Inventory.ScriptSetting|null = null;
    private bigItemConsumeScript: Gs2Inventory.ScriptSetting|null = null;
    private logSetting: Gs2Inventory.LogSetting|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
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
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '');
    }
    public getNamespaceId(): string|null {
        return this.namespaceId;
    }
    public setNamespaceId(namespaceId: string|null) {
        this.namespaceId = namespaceId;
        return this;
    }
    public withNamespaceId(namespaceId: string|null): this {
        this.namespaceId = namespaceId;
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
    public getAcquireScript(): Gs2Inventory.ScriptSetting|null {
        return this.acquireScript;
    }
    public setAcquireScript(acquireScript: Gs2Inventory.ScriptSetting|null) {
        this.acquireScript = acquireScript;
        return this;
    }
    public withAcquireScript(acquireScript: Gs2Inventory.ScriptSetting|null): this {
        this.acquireScript = acquireScript;
        return this;
    }
    public getOverflowScript(): Gs2Inventory.ScriptSetting|null {
        return this.overflowScript;
    }
    public setOverflowScript(overflowScript: Gs2Inventory.ScriptSetting|null) {
        this.overflowScript = overflowScript;
        return this;
    }
    public withOverflowScript(overflowScript: Gs2Inventory.ScriptSetting|null): this {
        this.overflowScript = overflowScript;
        return this;
    }
    public getConsumeScript(): Gs2Inventory.ScriptSetting|null {
        return this.consumeScript;
    }
    public setConsumeScript(consumeScript: Gs2Inventory.ScriptSetting|null) {
        this.consumeScript = consumeScript;
        return this;
    }
    public withConsumeScript(consumeScript: Gs2Inventory.ScriptSetting|null): this {
        this.consumeScript = consumeScript;
        return this;
    }
    public getSimpleItemAcquireScript(): Gs2Inventory.ScriptSetting|null {
        return this.simpleItemAcquireScript;
    }
    public setSimpleItemAcquireScript(simpleItemAcquireScript: Gs2Inventory.ScriptSetting|null) {
        this.simpleItemAcquireScript = simpleItemAcquireScript;
        return this;
    }
    public withSimpleItemAcquireScript(simpleItemAcquireScript: Gs2Inventory.ScriptSetting|null): this {
        this.simpleItemAcquireScript = simpleItemAcquireScript;
        return this;
    }
    public getSimpleItemConsumeScript(): Gs2Inventory.ScriptSetting|null {
        return this.simpleItemConsumeScript;
    }
    public setSimpleItemConsumeScript(simpleItemConsumeScript: Gs2Inventory.ScriptSetting|null) {
        this.simpleItemConsumeScript = simpleItemConsumeScript;
        return this;
    }
    public withSimpleItemConsumeScript(simpleItemConsumeScript: Gs2Inventory.ScriptSetting|null): this {
        this.simpleItemConsumeScript = simpleItemConsumeScript;
        return this;
    }
    public getBigItemAcquireScript(): Gs2Inventory.ScriptSetting|null {
        return this.bigItemAcquireScript;
    }
    public setBigItemAcquireScript(bigItemAcquireScript: Gs2Inventory.ScriptSetting|null) {
        this.bigItemAcquireScript = bigItemAcquireScript;
        return this;
    }
    public withBigItemAcquireScript(bigItemAcquireScript: Gs2Inventory.ScriptSetting|null): this {
        this.bigItemAcquireScript = bigItemAcquireScript;
        return this;
    }
    public getBigItemConsumeScript(): Gs2Inventory.ScriptSetting|null {
        return this.bigItemConsumeScript;
    }
    public setBigItemConsumeScript(bigItemConsumeScript: Gs2Inventory.ScriptSetting|null) {
        this.bigItemConsumeScript = bigItemConsumeScript;
        return this;
    }
    public withBigItemConsumeScript(bigItemConsumeScript: Gs2Inventory.ScriptSetting|null): this {
        this.bigItemConsumeScript = bigItemConsumeScript;
        return this;
    }
    public getLogSetting(): Gs2Inventory.LogSetting|null {
        return this.logSetting;
    }
    public setLogSetting(logSetting: Gs2Inventory.LogSetting|null) {
        this.logSetting = logSetting;
        return this;
    }
    public withLogSetting(logSetting: Gs2Inventory.LogSetting|null): this {
        this.logSetting = logSetting;
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

    public static fromDict(data: {[key: string]: any}): Namespace|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Namespace()
            .withNamespaceId(data["namespaceId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withAcquireScript(Gs2Inventory.ScriptSetting.fromDict(data["acquireScript"]))
            .withOverflowScript(Gs2Inventory.ScriptSetting.fromDict(data["overflowScript"]))
            .withConsumeScript(Gs2Inventory.ScriptSetting.fromDict(data["consumeScript"]))
            .withSimpleItemAcquireScript(Gs2Inventory.ScriptSetting.fromDict(data["simpleItemAcquireScript"]))
            .withSimpleItemConsumeScript(Gs2Inventory.ScriptSetting.fromDict(data["simpleItemConsumeScript"]))
            .withBigItemAcquireScript(Gs2Inventory.ScriptSetting.fromDict(data["bigItemAcquireScript"]))
            .withBigItemConsumeScript(Gs2Inventory.ScriptSetting.fromDict(data["bigItemConsumeScript"]))
            .withLogSetting(Gs2Inventory.LogSetting.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "acquireScript": this.getAcquireScript()?.toDict(),
            "overflowScript": this.getOverflowScript()?.toDict(),
            "consumeScript": this.getConsumeScript()?.toDict(),
            "simpleItemAcquireScript": this.getSimpleItemAcquireScript()?.toDict(),
            "simpleItemConsumeScript": this.getSimpleItemConsumeScript()?.toDict(),
            "bigItemAcquireScript": this.getBigItemAcquireScript()?.toDict(),
            "bigItemConsumeScript": this.getBigItemConsumeScript()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
