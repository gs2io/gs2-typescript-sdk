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
import Position from './Position';
import Vector from './Vector';

export default class MyPosition implements IModel {
    private position: Position|null = null;
    private vector: Vector|null = null;
    private r: number|null = null;
    public getPosition(): Position|null {
        return this.position;
    }
    public setPosition(position: Position|null) {
        this.position = position;
        return this;
    }
    public withPosition(position: Position|null): this {
        this.position = position;
        return this;
    }
    public getVector(): Vector|null {
        return this.vector;
    }
    public setVector(vector: Vector|null) {
        this.vector = vector;
        return this;
    }
    public withVector(vector: Vector|null): this {
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
            .withPosition(Position.fromDict(data["position"]))
            .withVector(Vector.fromDict(data["vector"]))
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
