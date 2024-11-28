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

export default class Position implements IModel {
    private x: number|null = null;
    private y: number|null = null;
    private z: number|null = null;
    public getX(): number|null {
        return this.x;
    }
    public setX(x: number|null) {
        this.x = x;
        return this;
    }
    public withX(x: number|null): this {
        this.x = x;
        return this;
    }
    public getY(): number|null {
        return this.y;
    }
    public setY(y: number|null) {
        this.y = y;
        return this;
    }
    public withY(y: number|null): this {
        this.y = y;
        return this;
    }
    public getZ(): number|null {
        return this.z;
    }
    public setZ(z: number|null) {
        this.z = z;
        return this;
    }
    public withZ(z: number|null): this {
        this.z = z;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Position|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Position()
            .withX(data["x"])
            .withY(data["y"])
            .withZ(data["z"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "x": this.getX(),
            "y": this.getY(),
            "z": this.getZ(),
        };
    }
}
