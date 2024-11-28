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

import * as Gs2Formation from '../../formation/model'
import Slot from './Slot';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:formation:{namespaceName}:user:{userId}:mold:{moldModelName}:form:{index}";

export default class Form implements IModel {
    private formId: string|null = null;
    private name: string|null = null;
    private index: number|null = null;
    private slots: Gs2Formation.Slot[]|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{moldModelName}', '.*')
            .replace('{index}', '.*')
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
            .replace('{moldModelName}', '.*')
            .replace('{index}', '.*')
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
            .replace('{moldModelName}', '.*')
            .replace('{index}', '.*')
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
            .replace('{moldModelName}', '.*')
            .replace('{index}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getMoldModelName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{moldModelName}', '(.*)')
            .replace('{index}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getIndex(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{moldModelName}', '.*')
            .replace('{index}', '(.*)')
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
        if (this.getMoldModelName(grn) == null || this.getMoldModelName(grn) === '') {
            return false;
        }
        if (this.getIndex(grn) == null || this.getIndex(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        userId: string|null,
        moldModelName: string|null,
        index: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{userId}', userId ?? '')
            .replace('{moldModelName}', moldModelName ?? '')
            .replace('{index}', index ?? '');
    }
    public getFormId(): string|null {
        return this.formId;
    }
    public setFormId(formId: string|null) {
        this.formId = formId;
        return this;
    }
    public withFormId(formId: string|null): this {
        this.formId = formId;
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
    public getIndex(): number|null {
        return this.index;
    }
    public setIndex(index: number|null) {
        this.index = index;
        return this;
    }
    public withIndex(index: number|null): this {
        this.index = index;
        return this;
    }
    public getSlots(): Gs2Formation.Slot[]|null {
        return this.slots;
    }
    public setSlots(slots: Gs2Formation.Slot[]|null) {
        this.slots = slots;
        return this;
    }
    public withSlots(slots: Gs2Formation.Slot[]|null): this {
        this.slots = slots;
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

    public static fromDict(data: {[key: string]: any}): Form|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Form()
            .withFormId(data["formId"])
            .withName(data["name"])
            .withIndex(data["index"])
            .withSlots(data.slots ?
                data.slots.map((item: {[key: string]: any}) => {
                    return Gs2Formation.Slot.fromDict(item);
                }
            ) : null)
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "formId": this.getFormId(),
            "name": this.getName(),
            "index": this.getIndex(),
            "slots": this.getSlots() ?
                this.getSlots()!.map((item: Gs2Formation.Slot) => {
                    return item.toDict();
                }
            ) : null,
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
