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

export default class Version implements IModel {
    private major: number|null = null;
    private minor: number|null = null;
    private micro: number|null = null;

    public getMajor(): number|null {
        return this.major;
    }

    public setMajor(major: number|null) {
        this.major = major;
        return this;
    }

    public withMajor(major: number|null): this {
        this.major = major;
        return this;
    }

    public getMinor(): number|null {
        return this.minor;
    }

    public setMinor(minor: number|null) {
        this.minor = minor;
        return this;
    }

    public withMinor(minor: number|null): this {
        this.minor = minor;
        return this;
    }

    public getMicro(): number|null {
        return this.micro;
    }

    public setMicro(micro: number|null) {
        this.micro = micro;
        return this;
    }

    public withMicro(micro: number|null): this {
        this.micro = micro;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Version|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Version()
            .withMajor(data["major"])
            .withMinor(data["minor"])
            .withMicro(data["micro"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "major": this.getMajor(),
            "minor": this.getMinor(),
            "micro": this.getMicro(),
        };
    }
}
