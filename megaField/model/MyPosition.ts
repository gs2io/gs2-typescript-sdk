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

export default class MyPosition implements IModel {
    private position: Gs2MegaField.Position|null = null;
    private vector: Gs2MegaField.Vector|null = null;
    private r: number|null = null;
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

    public static fromDict(data: {[key: string]: any}): MyPosition|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MyPosition()
            .withPosition(Gs2MegaField.Position.fromDict(data["position"]))
            .withVector(Gs2MegaField.Vector.fromDict(data["vector"]))
            .withR(data["r"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "position": this.getPosition()?.toDict(),
            "vector": this.getVector()?.toDict(),
            "r": this.getR(),
        };
    }
}
