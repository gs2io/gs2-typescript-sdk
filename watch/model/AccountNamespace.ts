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
import AccountTakeOver from './AccountTakeOver';

export default class AccountNamespace implements IModel {
    private namespaceName: string|null = null;
    private takeOver: AccountTakeOver[]|null = null;
    public getNamespaceName(): string|null {
        return this.namespaceName;
    }
    public setNamespaceName(namespaceName: string|null) {
        this.namespaceName = namespaceName;
        return this;
    }
    public withNamespaceName(namespaceName: string|null): this {
        this.namespaceName = namespaceName;
        return this;
    }
    public getTakeOver(): AccountTakeOver[]|null {
        return this.takeOver;
    }
    public setTakeOver(takeOver: AccountTakeOver[]|null) {
        this.takeOver = takeOver;
        return this;
    }
    public withTakeOver(takeOver: AccountTakeOver[]|null): this {
        this.takeOver = takeOver;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): AccountNamespace|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new AccountNamespace()
            .withNamespaceName(data["namespaceName"])
            .withTakeOver(data.takeOver ?
                data.takeOver.map((item: {[key: string]: any}) => {
                    return AccountTakeOver.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "takeOver": this.getTakeOver() ?
                this.getTakeOver()!.map((item: AccountTakeOver) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
