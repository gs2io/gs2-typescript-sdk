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
import OpenIdConnectSetting from './OpenIdConnectSetting';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:account:{namespaceName}:model:takeOver:{type}";

export default class TakeOverTypeModel implements IModel {
    private takeOverTypeModelId: string|null = null;
    private type: number|null = null;
    private metadata: string|null = null;
    private openIdConnectSetting: OpenIdConnectSetting|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{type}', '.*')
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
            .replace('{type}', '.*')
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
            .replace('{type}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getType(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{type}', '(.*)')
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
        if (this.getType(grn) == null || this.getType(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        type: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{type}', type ?? '');
    }
    public getTakeOverTypeModelId(): string|null {
        return this.takeOverTypeModelId;
    }
    public setTakeOverTypeModelId(takeOverTypeModelId: string|null) {
        this.takeOverTypeModelId = takeOverTypeModelId;
        return this;
    }
    public withTakeOverTypeModelId(takeOverTypeModelId: string|null): this {
        this.takeOverTypeModelId = takeOverTypeModelId;
        return this;
    }
    public getType(): number|null {
        return this.type;
    }
    public setType(type: number|null) {
        this.type = type;
        return this;
    }
    public withType(type: number|null): this {
        this.type = type;
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
    public getOpenIdConnectSetting(): OpenIdConnectSetting|null {
        return this.openIdConnectSetting;
    }
    public setOpenIdConnectSetting(openIdConnectSetting: OpenIdConnectSetting|null) {
        this.openIdConnectSetting = openIdConnectSetting;
        return this;
    }
    public withOpenIdConnectSetting(openIdConnectSetting: OpenIdConnectSetting|null): this {
        this.openIdConnectSetting = openIdConnectSetting;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): TakeOverTypeModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new TakeOverTypeModel()
            .withTakeOverTypeModelId(data["takeOverTypeModelId"])
            .withType(data["type"])
            .withMetadata(data["metadata"])
            .withOpenIdConnectSetting(OpenIdConnectSetting.fromDict(data["openIdConnectSetting"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "takeOverTypeModelId": this.getTakeOverTypeModelId(),
            "type": this.getType(),
            "metadata": this.getMetadata(),
            "openIdConnectSetting": this.getOpenIdConnectSetting()?.toDict(),
        };
    }
}
