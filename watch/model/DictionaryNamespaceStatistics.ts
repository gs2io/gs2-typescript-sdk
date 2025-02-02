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

import * as Gs2Watch from '../../watch/model'

export default class DictionaryNamespaceStatistics implements IModel {
    private register: number|null = null;
    public getRegister(): number|null {
        return this.register;
    }
    public setRegister(register: number|null) {
        this.register = register;
        return this;
    }
    public withRegister(register: number|null): this {
        this.register = register;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): DictionaryNamespaceStatistics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new DictionaryNamespaceStatistics()
            .withRegister(data["register"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "register": this.getRegister(),
        };
    }
}
