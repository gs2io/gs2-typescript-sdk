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

import IResult from '../../core/interface/IResult';
import * as Gs2Distributor from '../model'

export default class IfExpressionByStampTaskResult implements IResult {
    private item: Gs2Distributor.TransactionResult|null = null;
    private expressionResult: boolean|null = null;
    private newContextStack: string|null = null;

    public getItem(): Gs2Distributor.TransactionResult|null {
        return this.item;
    }

    public setItem(item: Gs2Distributor.TransactionResult|null) {
        this.item = item;
        return this;
    }

    public withItem(item: Gs2Distributor.TransactionResult|null): this {
        this.item = item;
        return this;
    }

    public getExpressionResult(): boolean|null {
        return this.expressionResult;
    }

    public setExpressionResult(expressionResult: boolean|null) {
        this.expressionResult = expressionResult;
        return this;
    }

    public withExpressionResult(expressionResult: boolean|null): this {
        this.expressionResult = expressionResult;
        return this;
    }

    public getNewContextStack(): string|null {
        return this.newContextStack;
    }

    public setNewContextStack(newContextStack: string|null) {
        this.newContextStack = newContextStack;
        return this;
    }

    public withNewContextStack(newContextStack: string|null): this {
        this.newContextStack = newContextStack;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): IfExpressionByStampTaskResult {
        return new IfExpressionByStampTaskResult()
            .withItem(Gs2Distributor.TransactionResult.fromDict(data["item"]))
            .withExpressionResult(data["expressionResult"])
            .withNewContextStack(data["newContextStack"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "item": this.getItem()?.toDict(),
            "expressionResult": this.getExpressionResult(),
            "newContextStack": this.getNewContextStack(),
        };
    }
}
