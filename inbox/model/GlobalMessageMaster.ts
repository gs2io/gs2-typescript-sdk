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
import AcquireAction from './AcquireAction';
import TimeSpan from './TimeSpan';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:inbox:{namespaceName}:master:globalMessage:{globalMessageName}";

export default class GlobalMessageMaster implements IModel {
    private globalMessageId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private readAcquireActions: AcquireAction[]|null = null;
    private expiresTimeSpan: TimeSpan|null = null;
    private expiresAt: number|null = null;
    private messageReceptionPeriodEventId: string|null = null;
    private createdAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{globalMessageName}', '.*')
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
            .replace('{globalMessageName}', '.*')
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
            .replace('{globalMessageName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getGlobalMessageName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{globalMessageName}', '(.*)')
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
        if (this.getGlobalMessageName(grn) == null || this.getGlobalMessageName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        globalMessageName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{globalMessageName}', globalMessageName ?? '');
    }
    public getGlobalMessageId(): string|null {
        return this.globalMessageId;
    }
    public setGlobalMessageId(globalMessageId: string|null) {
        this.globalMessageId = globalMessageId;
        return this;
    }
    public withGlobalMessageId(globalMessageId: string|null): this {
        this.globalMessageId = globalMessageId;
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
    public getReadAcquireActions(): AcquireAction[]|null {
        return this.readAcquireActions;
    }
    public setReadAcquireActions(readAcquireActions: AcquireAction[]|null) {
        this.readAcquireActions = readAcquireActions;
        return this;
    }
    public withReadAcquireActions(readAcquireActions: AcquireAction[]|null): this {
        this.readAcquireActions = readAcquireActions;
        return this;
    }
    public getExpiresTimeSpan(): TimeSpan|null {
        return this.expiresTimeSpan;
    }
    public setExpiresTimeSpan(expiresTimeSpan: TimeSpan|null) {
        this.expiresTimeSpan = expiresTimeSpan;
        return this;
    }
    public withExpiresTimeSpan(expiresTimeSpan: TimeSpan|null): this {
        this.expiresTimeSpan = expiresTimeSpan;
        return this;
    }
    /** @deprecated */
    public getExpiresAt(): number|null {
        return this.expiresAt;
    }
    /** @deprecated */
    public setExpiresAt(expiresAt: number|null) {
        this.expiresAt = expiresAt;
        return this;
    }
    /** @deprecated */
    public withExpiresAt(expiresAt: number|null): this {
        this.expiresAt = expiresAt;
        return this;
    }
    public getMessageReceptionPeriodEventId(): string|null {
        return this.messageReceptionPeriodEventId;
    }
    public setMessageReceptionPeriodEventId(messageReceptionPeriodEventId: string|null) {
        this.messageReceptionPeriodEventId = messageReceptionPeriodEventId;
        return this;
    }
    public withMessageReceptionPeriodEventId(messageReceptionPeriodEventId: string|null): this {
        this.messageReceptionPeriodEventId = messageReceptionPeriodEventId;
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

    public static fromDict(data: {[key: string]: any}): GlobalMessageMaster|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new GlobalMessageMaster()
            .withGlobalMessageId(data["globalMessageId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withReadAcquireActions(data.readAcquireActions ?
                data.readAcquireActions.map((item: {[key: string]: any}) => {
                    return AcquireAction.fromDict(item);
                }
            ) : [])
            .withExpiresTimeSpan(TimeSpan.fromDict(data["expiresTimeSpan"]))
            .withExpiresAt(data["expiresAt"])
            .withMessageReceptionPeriodEventId(data["messageReceptionPeriodEventId"])
            .withCreatedAt(data["createdAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "globalMessageId": this.getGlobalMessageId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "readAcquireActions": this.getReadAcquireActions() ?
                this.getReadAcquireActions()!.map((item: AcquireAction) => {
                    return item.toDict();
                }
            ) : [],
            "expiresTimeSpan": this.getExpiresTimeSpan()?.toDict(),
            "expiresAt": this.getExpiresAt(),
            "messageReceptionPeriodEventId": this.getMessageReceptionPeriodEventId(),
            "createdAt": this.getCreatedAt(),
            "revision": this.getRevision(),
        };
    }
}
