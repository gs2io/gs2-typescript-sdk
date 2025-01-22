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

import * as Gs2Guild from '../../guild/model'
import ReceiveMemberRequest from './ReceiveMemberRequest';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:guild:{namespaceName}:guild:{guildModelName}:{guildName}:inbox";

export default class Inbox implements IModel {
    private inboxId: string|null = null;
    private guildName: string|null = null;
    private fromUserIds: string[]|null = null;
    private receiveMemberRequests: Gs2Guild.ReceiveMemberRequest[]|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{guildModelName}', '.*')
            .replace('{guildName}', '.*')
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
            .replace('{guildModelName}', '.*')
            .replace('{guildName}', '.*')
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
            .replace('{guildModelName}', '.*')
            .replace('{guildName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getGuildModelName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{guildModelName}', '(.*)')
            .replace('{guildName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getGuildName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{guildModelName}', '.*')
            .replace('{guildName}', '(.*)')
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
        if (this.getGuildModelName(grn) == null || this.getGuildModelName(grn) === '') {
            return false;
        }
        if (this.getGuildName(grn) == null || this.getGuildName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        guildModelName: string|null,
        guildName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{guildModelName}', guildModelName ?? '')
            .replace('{guildName}', guildName ?? '');
    }
    public getInboxId(): string|null {
        return this.inboxId;
    }
    public setInboxId(inboxId: string|null) {
        this.inboxId = inboxId;
        return this;
    }
    public withInboxId(inboxId: string|null): this {
        this.inboxId = inboxId;
        return this;
    }
    public getGuildName(): string|null {
        return this.guildName;
    }
    public setGuildName(guildName: string|null) {
        this.guildName = guildName;
        return this;
    }
    public withGuildName(guildName: string|null): this {
        this.guildName = guildName;
        return this;
    }
    /** @deprecated */
    public getFromUserIds(): string[]|null {
        return this.fromUserIds;
    }
    /** @deprecated */
    public setFromUserIds(fromUserIds: string[]|null) {
        this.fromUserIds = fromUserIds;
        return this;
    }
    /** @deprecated */
    public withFromUserIds(fromUserIds: string[]|null): this {
        this.fromUserIds = fromUserIds;
        return this;
    }
    public getReceiveMemberRequests(): Gs2Guild.ReceiveMemberRequest[]|null {
        return this.receiveMemberRequests;
    }
    public setReceiveMemberRequests(receiveMemberRequests: Gs2Guild.ReceiveMemberRequest[]|null) {
        this.receiveMemberRequests = receiveMemberRequests;
        return this;
    }
    public withReceiveMemberRequests(receiveMemberRequests: Gs2Guild.ReceiveMemberRequest[]|null): this {
        this.receiveMemberRequests = receiveMemberRequests;
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

    public static fromDict(data: {[key: string]: any}): Inbox|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Inbox()
            .withInboxId(data["inboxId"])
            .withGuildName(data["guildName"])
            .withFromUserIds(data.fromUserIds ?
                data.fromUserIds.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : null)
            .withReceiveMemberRequests(data.receiveMemberRequests ?
                data.receiveMemberRequests.map((item: {[key: string]: any}) => {
                    return Gs2Guild.ReceiveMemberRequest.fromDict(item);
                }
            ) : null)
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "inboxId": this.getInboxId(),
            "guildName": this.getGuildName(),
            "fromUserIds": this.getFromUserIds() ?
                this.getFromUserIds()!.map((item: string) => {
                    return item;
                }
            ) : null,
            "receiveMemberRequests": this.getReceiveMemberRequests() ?
                this.getReceiveMemberRequests()!.map((item: Gs2Guild.ReceiveMemberRequest) => {
                    return item.toDict();
                }
            ) : null,
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
