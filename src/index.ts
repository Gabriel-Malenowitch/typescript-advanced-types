const n = ["a", "b", "c", "d", "e"]

// ==============================

type Remove<T, R extends keyof T> = {
    [K in keyof T as K extends R ? never : K]: T[K]
}
var removeTest: Remove<{name: string; age: number}, 'name'>

// ==============================

type GetProxy<T extends any = {}> = 
    & {[K in keyof T as `get${Capitalize<K & string>}`]: () => T[K]}
    & {[K in keyof T as `set${Capitalize<K & string>}`]: (newValue: T[K]) => Promise<boolean> | boolean}
    & {readonly [K in keyof T]: T[K]}
var getProxyTest: GetProxy<{name: string, age: number}>

// ==============================

type AnyArrayFrom<T> = [T] extends [any] ? T[] : number
var anyArrayFromTest: AnyArrayFrom<number | string[]>

// =============================

type NoReadOnly<T extends any = {}> = {
    -readonly [K in keyof T]: T[K]
}
const noReadOnly: NoReadOnly<{ readonly name: string }> = { name: 'Gabriel' }
noReadOnly.name = 'Jó'

// =============================

type ReadOnly<T extends any = {}> = {
    readonly [K in keyof T]: T[K]
}
const readOnlyTest: ReadOnly<{ name: string }> = { name: 'Gabriel' }

// =============================

type NoNullable<T extends any = {}> = {
    [K in keyof T]-?: T[K]
}
var noNullableTest: NoNullable<{name: string; age: number}>// = {}

// ==============================

type Nullable<T extends any = {}> = {
    [K in keyof T]?: T[K]
}
var nullableTest: Nullable<{name: string; age: number}> = {}

// ==============================

type ArrayFrom<T> = T extends any ? T[] : number
var arrayFromTest: ArrayFrom<number | string[]>

// ==============================

type TypeOfArray<T> = T extends any[] ? T[number] : T
var typeOfArrayTest_0: TypeOfArray<typeof n>
var typeOfArrayTest_1: TypeOfArray<string>
var typeOfArrayTest_2: TypeOfArray<string[]>
var typeOfArrayTest_3: TypeOfArray<RegExp[] | string>

// ==============================

type GetFunctionResult<T> = T extends (...args: any[]) => infer R ? R : never
var getFunctionResultTest: GetFunctionResult<() => string>

// ==============================

type ValueInArrayOf<A extends string[]> = 
    keyof {
        [K in A[number]]: undefined
    }
var valueInArrayTest: ValueInArrayOf<typeof n> = 'c'

// ==============================
