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
import { SlotModel } from './SlotModel';

export class FormModel implements IModel {
    private formModelId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private slots: SlotModel[]|null = null;

    public getFormModelId(): string|null {
        return this.formModelId;
    }

    public setFormModelId(formModelId: string|null) {
        this.formModelId = formModelId;
        return this;
    }

    public withFormModelId(formModelId: string|null): this {
        this.formModelId = formModelId;
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

    public getSlots(): SlotModel[]|null {
        return this.slots;
    }

    public setSlots(slots: SlotModel[]|null) {
        this.slots = slots;
        return this;
    }

    public withSlots(slots: SlotModel[]|null): this {
        this.slots = slots;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): FormModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new FormModel()
            .withFormModelId(data["formModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withSlots(data.slots ?
                data.slots.map((item: {[key: string]: any}) => {
                    return SlotModel.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "formModelId": this.getFormModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "slots": this.getSlots() ?
                this.getSlots()!.map((item: SlotModel) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
