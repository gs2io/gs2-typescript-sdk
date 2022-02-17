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
import { Slot } from './Slot';

export class Form implements IModel {
    private formId: string|null = null;
    private name: string|null = null;
    private index: number|null = null;
    private slots: Slot[]|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

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

    public getSlots(): Slot[]|null {
        return this.slots;
    }

    public setSlots(slots: Slot[]|null) {
        this.slots = slots;
        return this;
    }

    public withSlots(slots: Slot[]|null): this {
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
                    return Slot.fromDict(item);
                }
            ) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "formId": this.getFormId(),
            "name": this.getName(),
            "index": this.getIndex(),
            "slots": this.getSlots() ?
                this.getSlots()!.map((item: Slot) => {
                    return item.toDict();
                }
            ) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
