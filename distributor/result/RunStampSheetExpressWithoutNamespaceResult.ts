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

export default class RunStampSheetExpressWithoutNamespaceResult implements IResult {
    private taskResults: string[]|null = null;
    private sheetResult: string|null = null;

    public getTaskResults(): string[]|null {
        return this.taskResults;
    }

    public setTaskResults(taskResults: string[]|null) {
        this.taskResults = taskResults;
        return this;
    }

    public withTaskResults(taskResults: string[]|null): this {
        this.taskResults = taskResults;
        return this;
    }

    public getSheetResult(): string|null {
        return this.sheetResult;
    }

    public setSheetResult(sheetResult: string|null) {
        this.sheetResult = sheetResult;
        return this;
    }

    public withSheetResult(sheetResult: string|null): this {
        this.sheetResult = sheetResult;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): RunStampSheetExpressWithoutNamespaceResult {
        return new RunStampSheetExpressWithoutNamespaceResult()
            .withTaskResults(data.taskResults ?
                data.taskResults.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : [])
            .withSheetResult(data["sheetResult"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "taskResults": this.getTaskResults() ?
                this.getTaskResults()!.map((item: string) => {
                    return item;
                }
            ) : [],
            "sheetResult": this.getSheetResult(),
        };
    }
}
