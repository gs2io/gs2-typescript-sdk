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

export default class Scope implements IModel {
    private layerName: string|null = null;
    private r: number|null = null;
    private limit: number|null = null;
    public getLayerName(): string|null {
        return this.layerName;
    }
    public setLayerName(layerName: string|null) {
        this.layerName = layerName;
        return this;
    }
    public withLayerName(layerName: string|null): this {
        this.layerName = layerName;
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
    public getLimit(): number|null {
        return this.limit;
    }
    public setLimit(limit: number|null) {
        this.limit = limit;
        return this;
    }
    public withLimit(limit: number|null): this {
        this.limit = limit;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Scope|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Scope()
            .withLayerName(data["layerName"])
            .withR(data["r"])
            .withLimit(data["limit"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "layerName": this.getLayerName(),
            "r": this.getR(),
            "limit": this.getLimit(),
        };
    }
}
