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

import * as Gs2MegaField from '../../megaField/model'
import Position from './Position';
import Vector from './Vector';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:megaField:{namespaceName}:user:{userId}:spatial:{areaModelName}:{layerModelName}";

export default class Spatial implements IModel {
    private spatialId: string|null = null;
    private userId: string|null = null;
    private areaModelName: string|null = null;
    private layerModelName: string|null = null;
    private position: Gs2MegaField.Position|null = null;
    private vector: Gs2MegaField.Vector|null = null;
    private r: number|null = null;
    private lastSyncAt: number|null = null;
    private createdAt: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{areaModelName}', '.*')
            .replace('{layerModelName}', '.*')
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
            .replace('{areaModelName}', '.*')
            .replace('{layerModelName}', '.*')
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
            .replace('{areaModelName}', '.*')
            .replace('{layerModelName}', '.*')
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
            .replace('{areaModelName}', '.*')
            .replace('{layerModelName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getAreaModelName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{areaModelName}', '(.*)')
            .replace('{layerModelName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getLayerModelName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{areaModelName}', '.*')
            .replace('{layerModelName}', '(.*)')
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
        if (this.getAreaModelName(grn) == null || this.getAreaModelName(grn) === '') {
            return false;
        }
        if (this.getLayerModelName(grn) == null || this.getLayerModelName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        userId: string|null,
        areaModelName: string|null,
        layerModelName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{userId}', userId ?? '')
            .replace('{areaModelName}', areaModelName ?? '')
            .replace('{layerModelName}', layerModelName ?? '');
    }
    public getSpatialId(): string|null {
        return this.spatialId;
    }
    public setSpatialId(spatialId: string|null) {
        this.spatialId = spatialId;
        return this;
    }
    public withSpatialId(spatialId: string|null): this {
        this.spatialId = spatialId;
        return this;
    }
    public getUserId(): string|null {
        return this.userId;
    }
    public setUserId(userId: string|null) {
        this.userId = userId;
        return this;
    }
    public withUserId(userId: string|null): this {
        this.userId = userId;
        return this;
    }
    public getAreaModelName(): string|null {
        return this.areaModelName;
    }
    public setAreaModelName(areaModelName: string|null) {
        this.areaModelName = areaModelName;
        return this;
    }
    public withAreaModelName(areaModelName: string|null): this {
        this.areaModelName = areaModelName;
        return this;
    }
    public getLayerModelName(): string|null {
        return this.layerModelName;
    }
    public setLayerModelName(layerModelName: string|null) {
        this.layerModelName = layerModelName;
        return this;
    }
    public withLayerModelName(layerModelName: string|null): this {
        this.layerModelName = layerModelName;
        return this;
    }
    public getPosition(): Gs2MegaField.Position|null {
        return this.position;
    }
    public setPosition(position: Gs2MegaField.Position|null) {
        this.position = position;
        return this;
    }
    public withPosition(position: Gs2MegaField.Position|null): this {
        this.position = position;
        return this;
    }
    public getVector(): Gs2MegaField.Vector|null {
        return this.vector;
    }
    public setVector(vector: Gs2MegaField.Vector|null) {
        this.vector = vector;
        return this;
    }
    public withVector(vector: Gs2MegaField.Vector|null): this {
        this.vector = vector;
        return this;
    }
    public getR(): number|null {
        return this.r;
    }
    public setR(r: number|null) {
        this.r = r;
        return this;
    }
    public withR(r: number|null): this {
        this.r = r;
        return this;
    }
    public getLastSyncAt(): number|null {
        return this.lastSyncAt;
    }
    public setLastSyncAt(lastSyncAt: number|null) {
        this.lastSyncAt = lastSyncAt;
        return this;
    }
    public withLastSyncAt(lastSyncAt: number|null): this {
        this.lastSyncAt = lastSyncAt;
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

    public static fromDict(data: {[key: string]: any}): Spatial|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Spatial()
            .withSpatialId(data["spatialId"])
            .withUserId(data["userId"])
            .withAreaModelName(data["areaModelName"])
            .withLayerModelName(data["layerModelName"])
            .withPosition(Gs2MegaField.Position.fromDict(data["position"]))
            .withVector(Gs2MegaField.Vector.fromDict(data["vector"]))
            .withR(data["r"])
            .withLastSyncAt(data["lastSyncAt"])
            .withCreatedAt(data["createdAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "spatialId": this.getSpatialId(),
            "userId": this.getUserId(),
            "areaModelName": this.getAreaModelName(),
            "layerModelName": this.getLayerModelName(),
            "position": this.getPosition()?.toDict(),
            "vector": this.getVector()?.toDict(),
            "r": this.getR(),
            "lastSyncAt": this.getLastSyncAt(),
            "createdAt": this.getCreatedAt(),
        };
    }
}
