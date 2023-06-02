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

export default class GeneralDauWauMauAverage implements IModel {
    private dau: number|null = null;
    private wau: number|null = null;
    private mau: number|null = null;
    public getDau(): number|null {
        return this.dau;
    }
    public setDau(dau: number|null) {
        this.dau = dau;
        return this;
    }
    public withDau(dau: number|null): this {
        this.dau = dau;
        return this;
    }
    public getWau(): number|null {
        return this.wau;
    }
    public setWau(wau: number|null) {
        this.wau = wau;
        return this;
    }
    public withWau(wau: number|null): this {
        this.wau = wau;
        return this;
    }
    public getMau(): number|null {
        return this.mau;
    }
    public setMau(mau: number|null) {
        this.mau = mau;
        return this;
    }
    public withMau(mau: number|null): this {
        this.mau = mau;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): GeneralDauWauMauAverage|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new GeneralDauWauMauAverage()
            .withDau(data["dau"])
            .withWau(data["wau"])
            .withMau(data["mau"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "dau": this.getDau(),
            "wau": this.getWau(),
            "mau": this.getMau(),
        };
    }
}
