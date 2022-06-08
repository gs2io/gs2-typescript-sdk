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
const grnFormat: string = "grn:gs2:{region}:{ownerId}:stack:{stackName}:output:{outputName}";

export default class Output implements IModel {
    private outputId: string|null = null;
    private name: string|null = null;
    private value: string|null = null;
    private createdAt: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{stackName}', '.*')
            .replace('{outputName}', '.*')
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
            .replace('{stackName}', '.*')
            .replace('{outputName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getStackName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{stackName}', '(.*)')
            .replace('{outputName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getOutputName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{stackName}', '.*')
            .replace('{outputName}', '(.*)')
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
        if (this.getStackName(grn) == null || this.getStackName(grn) === '') {
            return false;
        }
        if (this.getOutputName(grn) == null || this.getOutputName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        stackName: string|null,
        outputName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{stackName}', stackName ?? '')
            .replace('{outputName}', outputName ?? '');
    }
    public getOutputId(): string|null {
        return this.outputId;
    }
    public setOutputId(outputId: string|null) {
        this.outputId = outputId;
        return this;
    }
    public withOutputId(outputId: string|null): this {
        this.outputId = outputId;
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
    public getValue(): string|null {
        return this.value;
    }
    public setValue(value: string|null) {
        this.value = value;
        return this;
    }
    public withValue(value: string|null): this {
        this.value = value;
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

    public static fromDict(data: {[key: string]: any}): Output|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Output()
            .withOutputId(data["outputId"])
            .withName(data["name"])
            .withValue(data["value"])
            .withCreatedAt(data["createdAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "outputId": this.getOutputId(),
            "name": this.getName(),
            "value": this.getValue(),
            "createdAt": this.getCreatedAt(),
        };
    }
}
