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

import * as Gs2Inbox from '../../inbox/model'
import AcquireAction from './AcquireAction';
import TimeSpan from './TimeSpan';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:inbox:{namespaceName}:globalMessage:{globalMessageName}";

export default class GlobalMessage implements IModel {
    private globalMessageId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private readAcquireActions: Gs2Inbox.AcquireAction[]|null = null;
    private expiresTimeSpan: Gs2Inbox.TimeSpan|null = null;
    private expiresAt: number|null = null;
    private messageReceptionPeriodEventId: string|null = null;

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
    public getReadAcquireActions(): Gs2Inbox.AcquireAction[]|null {
        return this.readAcquireActions;
    }
    public setReadAcquireActions(readAcquireActions: Gs2Inbox.AcquireAction[]|null) {
        this.readAcquireActions = readAcquireActions;
        return this;
    }
    public withReadAcquireActions(readAcquireActions: Gs2Inbox.AcquireAction[]|null): this {
        this.readAcquireActions = readAcquireActions;
        return this;
    }
    public getExpiresTimeSpan(): Gs2Inbox.TimeSpan|null {
        return this.expiresTimeSpan;
    }
    public setExpiresTimeSpan(expiresTimeSpan: Gs2Inbox.TimeSpan|null) {
        this.expiresTimeSpan = expiresTimeSpan;
        return this;
    }
    public withExpiresTimeSpan(expiresTimeSpan: Gs2Inbox.TimeSpan|null): this {
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

    public static fromDict(data: {[key: string]: any}): GlobalMessage|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new GlobalMessage()
            .withGlobalMessageId(data["globalMessageId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withReadAcquireActions(data.readAcquireActions ?
                data.readAcquireActions.map((item: {[key: string]: any}) => {
                    return Gs2Inbox.AcquireAction.fromDict(item);
                }
            ) : null)
            .withExpiresTimeSpan(Gs2Inbox.TimeSpan.fromDict(data["expiresTimeSpan"]))
            .withExpiresAt(data["expiresAt"])
            .withMessageReceptionPeriodEventId(data["messageReceptionPeriodEventId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "globalMessageId": this.getGlobalMessageId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "readAcquireActions": this.getReadAcquireActions() ?
                this.getReadAcquireActions()!.map((item: Gs2Inbox.AcquireAction) => {
                    return item.toDict();
                }
            ) : null,
            "expiresTimeSpan": this.getExpiresTimeSpan()?.toDict(),
            "expiresAt": this.getExpiresAt(),
            "messageReceptionPeriodEventId": this.getMessageReceptionPeriodEventId(),
        };
    }
}
