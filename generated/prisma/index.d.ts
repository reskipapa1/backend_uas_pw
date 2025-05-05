
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model dosen
 * 
 */
export type dosen = $Result.DefaultSelection<Prisma.$dosenPayload>
/**
 * Model infokus_bagus
 * 
 */
export type infokus_bagus = $Result.DefaultSelection<Prisma.$infokus_bagusPayload>
/**
 * Model infokus_rusak
 * 
 */
export type infokus_rusak = $Result.DefaultSelection<Prisma.$infokus_rusakPayload>
/**
 * Model jadwal
 * 
 */
export type jadwal = $Result.DefaultSelection<Prisma.$jadwalPayload>
/**
 * Model mahasiswa
 * 
 */
export type mahasiswa = $Result.DefaultSelection<Prisma.$mahasiswaPayload>
/**
 * Model matakuliah
 * 
 */
export type matakuliah = $Result.DefaultSelection<Prisma.$matakuliahPayload>
/**
 * Model peminjaman
 * 
 */
export type peminjaman = $Result.DefaultSelection<Prisma.$peminjamanPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Dosens
 * const dosens = await prisma.dosen.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Dosens
   * const dosens = await prisma.dosen.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.dosen`: Exposes CRUD operations for the **dosen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dosens
    * const dosens = await prisma.dosen.findMany()
    * ```
    */
  get dosen(): Prisma.dosenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.infokus_bagus`: Exposes CRUD operations for the **infokus_bagus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Infokus_baguses
    * const infokus_baguses = await prisma.infokus_bagus.findMany()
    * ```
    */
  get infokus_bagus(): Prisma.infokus_bagusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.infokus_rusak`: Exposes CRUD operations for the **infokus_rusak** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Infokus_rusaks
    * const infokus_rusaks = await prisma.infokus_rusak.findMany()
    * ```
    */
  get infokus_rusak(): Prisma.infokus_rusakDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jadwal`: Exposes CRUD operations for the **jadwal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jadwals
    * const jadwals = await prisma.jadwal.findMany()
    * ```
    */
  get jadwal(): Prisma.jadwalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mahasiswa`: Exposes CRUD operations for the **mahasiswa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mahasiswas
    * const mahasiswas = await prisma.mahasiswa.findMany()
    * ```
    */
  get mahasiswa(): Prisma.mahasiswaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matakuliah`: Exposes CRUD operations for the **matakuliah** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matakuliahs
    * const matakuliahs = await prisma.matakuliah.findMany()
    * ```
    */
  get matakuliah(): Prisma.matakuliahDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.peminjaman`: Exposes CRUD operations for the **peminjaman** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Peminjamen
    * const peminjamen = await prisma.peminjaman.findMany()
    * ```
    */
  get peminjaman(): Prisma.peminjamanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    dosen: 'dosen',
    infokus_bagus: 'infokus_bagus',
    infokus_rusak: 'infokus_rusak',
    jadwal: 'jadwal',
    mahasiswa: 'mahasiswa',
    matakuliah: 'matakuliah',
    peminjaman: 'peminjaman',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "dosen" | "infokus_bagus" | "infokus_rusak" | "jadwal" | "mahasiswa" | "matakuliah" | "peminjaman" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      dosen: {
        payload: Prisma.$dosenPayload<ExtArgs>
        fields: Prisma.dosenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dosenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dosenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>
          }
          findFirst: {
            args: Prisma.dosenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dosenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>
          }
          findMany: {
            args: Prisma.dosenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>[]
          }
          create: {
            args: Prisma.dosenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>
          }
          createMany: {
            args: Prisma.dosenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.dosenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>
          }
          update: {
            args: Prisma.dosenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>
          }
          deleteMany: {
            args: Prisma.dosenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.dosenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.dosenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dosenPayload>
          }
          aggregate: {
            args: Prisma.DosenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDosen>
          }
          groupBy: {
            args: Prisma.dosenGroupByArgs<ExtArgs>
            result: $Utils.Optional<DosenGroupByOutputType>[]
          }
          count: {
            args: Prisma.dosenCountArgs<ExtArgs>
            result: $Utils.Optional<DosenCountAggregateOutputType> | number
          }
        }
      }
      infokus_bagus: {
        payload: Prisma.$infokus_bagusPayload<ExtArgs>
        fields: Prisma.infokus_bagusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.infokus_bagusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$infokus_bagusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.infokus_bagusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$infokus_bagusPayload>
          }
          findFirst: {
            args: Prisma.infokus_bagusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$infokus_bagusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.infokus_bagusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$infokus_bagusPayload>
          }
          findMany: {
            args: Prisma.infokus_bagusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$infokus_bagusPayload>[]
          }
          create: {
            args: Prisma.infokus_bagusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$infokus_bagusPayload>
          }
          createMany: {
            args: Prisma.infokus_bagusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.infokus_bagusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$infokus_bagusPayload>
          }
          update: {
            args: Prisma.infokus_bagusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$infokus_bagusPayload>
          }
          deleteMany: {
            args: Prisma.infokus_bagusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.infokus_bagusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.infokus_bagusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$infokus_bagusPayload>
          }
          aggregate: {
            args: Prisma.Infokus_bagusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInfokus_bagus>
          }
          groupBy: {
            args: Prisma.infokus_bagusGroupByArgs<ExtArgs>
            result: $Utils.Optional<Infokus_bagusGroupByOutputType>[]
          }
          count: {
            args: Prisma.infokus_bagusCountArgs<ExtArgs>
            result: $Utils.Optional<Infokus_bagusCountAggregateOutputType> | number
          }
        }
      }
      infokus_rusak: {
        payload: Prisma.$infokus_rusakPayload<ExtArgs>
        fields: Prisma.infokus_rusakFieldRefs
        operations: {
          findUnique: {
            args: Prisma.infokus_rusakFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$infokus_rusakPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.infokus_rusakFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$infokus_rusakPayload>
          }
          findFirst: {
            args: Prisma.infokus_rusakFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$infokus_rusakPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.infokus_rusakFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$infokus_rusakPayload>
          }
          findMany: {
            args: Prisma.infokus_rusakFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$infokus_rusakPayload>[]
          }
          create: {
            args: Prisma.infokus_rusakCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$infokus_rusakPayload>
          }
          createMany: {
            args: Prisma.infokus_rusakCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.infokus_rusakDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$infokus_rusakPayload>
          }
          update: {
            args: Prisma.infokus_rusakUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$infokus_rusakPayload>
          }
          deleteMany: {
            args: Prisma.infokus_rusakDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.infokus_rusakUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.infokus_rusakUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$infokus_rusakPayload>
          }
          aggregate: {
            args: Prisma.Infokus_rusakAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInfokus_rusak>
          }
          groupBy: {
            args: Prisma.infokus_rusakGroupByArgs<ExtArgs>
            result: $Utils.Optional<Infokus_rusakGroupByOutputType>[]
          }
          count: {
            args: Prisma.infokus_rusakCountArgs<ExtArgs>
            result: $Utils.Optional<Infokus_rusakCountAggregateOutputType> | number
          }
        }
      }
      jadwal: {
        payload: Prisma.$jadwalPayload<ExtArgs>
        fields: Prisma.jadwalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.jadwalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.jadwalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwalPayload>
          }
          findFirst: {
            args: Prisma.jadwalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.jadwalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwalPayload>
          }
          findMany: {
            args: Prisma.jadwalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwalPayload>[]
          }
          create: {
            args: Prisma.jadwalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwalPayload>
          }
          createMany: {
            args: Prisma.jadwalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.jadwalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwalPayload>
          }
          update: {
            args: Prisma.jadwalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwalPayload>
          }
          deleteMany: {
            args: Prisma.jadwalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.jadwalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.jadwalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwalPayload>
          }
          aggregate: {
            args: Prisma.JadwalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJadwal>
          }
          groupBy: {
            args: Prisma.jadwalGroupByArgs<ExtArgs>
            result: $Utils.Optional<JadwalGroupByOutputType>[]
          }
          count: {
            args: Prisma.jadwalCountArgs<ExtArgs>
            result: $Utils.Optional<JadwalCountAggregateOutputType> | number
          }
        }
      }
      mahasiswa: {
        payload: Prisma.$mahasiswaPayload<ExtArgs>
        fields: Prisma.mahasiswaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mahasiswaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mahasiswaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>
          }
          findFirst: {
            args: Prisma.mahasiswaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mahasiswaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>
          }
          findMany: {
            args: Prisma.mahasiswaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>[]
          }
          create: {
            args: Prisma.mahasiswaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>
          }
          createMany: {
            args: Prisma.mahasiswaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mahasiswaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>
          }
          update: {
            args: Prisma.mahasiswaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>
          }
          deleteMany: {
            args: Prisma.mahasiswaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mahasiswaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mahasiswaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mahasiswaPayload>
          }
          aggregate: {
            args: Prisma.MahasiswaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMahasiswa>
          }
          groupBy: {
            args: Prisma.mahasiswaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MahasiswaGroupByOutputType>[]
          }
          count: {
            args: Prisma.mahasiswaCountArgs<ExtArgs>
            result: $Utils.Optional<MahasiswaCountAggregateOutputType> | number
          }
        }
      }
      matakuliah: {
        payload: Prisma.$matakuliahPayload<ExtArgs>
        fields: Prisma.matakuliahFieldRefs
        operations: {
          findUnique: {
            args: Prisma.matakuliahFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matakuliahPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.matakuliahFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matakuliahPayload>
          }
          findFirst: {
            args: Prisma.matakuliahFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matakuliahPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.matakuliahFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matakuliahPayload>
          }
          findMany: {
            args: Prisma.matakuliahFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matakuliahPayload>[]
          }
          create: {
            args: Prisma.matakuliahCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matakuliahPayload>
          }
          createMany: {
            args: Prisma.matakuliahCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.matakuliahDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matakuliahPayload>
          }
          update: {
            args: Prisma.matakuliahUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matakuliahPayload>
          }
          deleteMany: {
            args: Prisma.matakuliahDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.matakuliahUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.matakuliahUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$matakuliahPayload>
          }
          aggregate: {
            args: Prisma.MatakuliahAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatakuliah>
          }
          groupBy: {
            args: Prisma.matakuliahGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatakuliahGroupByOutputType>[]
          }
          count: {
            args: Prisma.matakuliahCountArgs<ExtArgs>
            result: $Utils.Optional<MatakuliahCountAggregateOutputType> | number
          }
        }
      }
      peminjaman: {
        payload: Prisma.$peminjamanPayload<ExtArgs>
        fields: Prisma.peminjamanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.peminjamanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peminjamanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.peminjamanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peminjamanPayload>
          }
          findFirst: {
            args: Prisma.peminjamanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peminjamanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.peminjamanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peminjamanPayload>
          }
          findMany: {
            args: Prisma.peminjamanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peminjamanPayload>[]
          }
          create: {
            args: Prisma.peminjamanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peminjamanPayload>
          }
          createMany: {
            args: Prisma.peminjamanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.peminjamanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peminjamanPayload>
          }
          update: {
            args: Prisma.peminjamanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peminjamanPayload>
          }
          deleteMany: {
            args: Prisma.peminjamanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.peminjamanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.peminjamanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$peminjamanPayload>
          }
          aggregate: {
            args: Prisma.PeminjamanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeminjaman>
          }
          groupBy: {
            args: Prisma.peminjamanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeminjamanGroupByOutputType>[]
          }
          count: {
            args: Prisma.peminjamanCountArgs<ExtArgs>
            result: $Utils.Optional<PeminjamanCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    dosen?: dosenOmit
    infokus_bagus?: infokus_bagusOmit
    infokus_rusak?: infokus_rusakOmit
    jadwal?: jadwalOmit
    mahasiswa?: mahasiswaOmit
    matakuliah?: matakuliahOmit
    peminjaman?: peminjamanOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DosenCountOutputType
   */

  export type DosenCountOutputType = {
    jadwal: number
  }

  export type DosenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jadwal?: boolean | DosenCountOutputTypeCountJadwalArgs
  }

  // Custom InputTypes
  /**
   * DosenCountOutputType without action
   */
  export type DosenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DosenCountOutputType
     */
    select?: DosenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DosenCountOutputType without action
   */
  export type DosenCountOutputTypeCountJadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jadwalWhereInput
  }


  /**
   * Count Type Infokus_bagusCountOutputType
   */

  export type Infokus_bagusCountOutputType = {
    peminjaman: number
  }

  export type Infokus_bagusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peminjaman?: boolean | Infokus_bagusCountOutputTypeCountPeminjamanArgs
  }

  // Custom InputTypes
  /**
   * Infokus_bagusCountOutputType without action
   */
  export type Infokus_bagusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Infokus_bagusCountOutputType
     */
    select?: Infokus_bagusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Infokus_bagusCountOutputType without action
   */
  export type Infokus_bagusCountOutputTypeCountPeminjamanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: peminjamanWhereInput
  }


  /**
   * Count Type MahasiswaCountOutputType
   */

  export type MahasiswaCountOutputType = {
    peminjaman: number
  }

  export type MahasiswaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peminjaman?: boolean | MahasiswaCountOutputTypeCountPeminjamanArgs
  }

  // Custom InputTypes
  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MahasiswaCountOutputType
     */
    select?: MahasiswaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeCountPeminjamanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: peminjamanWhereInput
  }


  /**
   * Count Type MatakuliahCountOutputType
   */

  export type MatakuliahCountOutputType = {
    jadwal: number
    peminjaman: number
  }

  export type MatakuliahCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jadwal?: boolean | MatakuliahCountOutputTypeCountJadwalArgs
    peminjaman?: boolean | MatakuliahCountOutputTypeCountPeminjamanArgs
  }

  // Custom InputTypes
  /**
   * MatakuliahCountOutputType without action
   */
  export type MatakuliahCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatakuliahCountOutputType
     */
    select?: MatakuliahCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MatakuliahCountOutputType without action
   */
  export type MatakuliahCountOutputTypeCountJadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jadwalWhereInput
  }

  /**
   * MatakuliahCountOutputType without action
   */
  export type MatakuliahCountOutputTypeCountPeminjamanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: peminjamanWhereInput
  }


  /**
   * Models
   */

  /**
   * Model dosen
   */

  export type AggregateDosen = {
    _count: DosenCountAggregateOutputType | null
    _min: DosenMinAggregateOutputType | null
    _max: DosenMaxAggregateOutputType | null
  }

  export type DosenMinAggregateOutputType = {
    nip: string | null
    nama: string | null
  }

  export type DosenMaxAggregateOutputType = {
    nip: string | null
    nama: string | null
  }

  export type DosenCountAggregateOutputType = {
    nip: number
    nama: number
    _all: number
  }


  export type DosenMinAggregateInputType = {
    nip?: true
    nama?: true
  }

  export type DosenMaxAggregateInputType = {
    nip?: true
    nama?: true
  }

  export type DosenCountAggregateInputType = {
    nip?: true
    nama?: true
    _all?: true
  }

  export type DosenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dosen to aggregate.
     */
    where?: dosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dosens to fetch.
     */
    orderBy?: dosenOrderByWithRelationInput | dosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dosens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dosens
    **/
    _count?: true | DosenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DosenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DosenMaxAggregateInputType
  }

  export type GetDosenAggregateType<T extends DosenAggregateArgs> = {
        [P in keyof T & keyof AggregateDosen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDosen[P]>
      : GetScalarType<T[P], AggregateDosen[P]>
  }




  export type dosenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dosenWhereInput
    orderBy?: dosenOrderByWithAggregationInput | dosenOrderByWithAggregationInput[]
    by: DosenScalarFieldEnum[] | DosenScalarFieldEnum
    having?: dosenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DosenCountAggregateInputType | true
    _min?: DosenMinAggregateInputType
    _max?: DosenMaxAggregateInputType
  }

  export type DosenGroupByOutputType = {
    nip: string
    nama: string
    _count: DosenCountAggregateOutputType | null
    _min: DosenMinAggregateOutputType | null
    _max: DosenMaxAggregateOutputType | null
  }

  type GetDosenGroupByPayload<T extends dosenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DosenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DosenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DosenGroupByOutputType[P]>
            : GetScalarType<T[P], DosenGroupByOutputType[P]>
        }
      >
    >


  export type dosenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nip?: boolean
    nama?: boolean
    jadwal?: boolean | dosen$jadwalArgs<ExtArgs>
    _count?: boolean | DosenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dosen"]>



  export type dosenSelectScalar = {
    nip?: boolean
    nama?: boolean
  }

  export type dosenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nip" | "nama", ExtArgs["result"]["dosen"]>
  export type dosenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jadwal?: boolean | dosen$jadwalArgs<ExtArgs>
    _count?: boolean | DosenCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $dosenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "dosen"
    objects: {
      jadwal: Prisma.$jadwalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nip: string
      nama: string
    }, ExtArgs["result"]["dosen"]>
    composites: {}
  }

  type dosenGetPayload<S extends boolean | null | undefined | dosenDefaultArgs> = $Result.GetResult<Prisma.$dosenPayload, S>

  type dosenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<dosenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DosenCountAggregateInputType | true
    }

  export interface dosenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['dosen'], meta: { name: 'dosen' } }
    /**
     * Find zero or one Dosen that matches the filter.
     * @param {dosenFindUniqueArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dosenFindUniqueArgs>(args: SelectSubset<T, dosenFindUniqueArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dosen that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {dosenFindUniqueOrThrowArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dosenFindUniqueOrThrowArgs>(args: SelectSubset<T, dosenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dosen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dosenFindFirstArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dosenFindFirstArgs>(args?: SelectSubset<T, dosenFindFirstArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dosen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dosenFindFirstOrThrowArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dosenFindFirstOrThrowArgs>(args?: SelectSubset<T, dosenFindFirstOrThrowArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dosens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dosenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dosens
     * const dosens = await prisma.dosen.findMany()
     * 
     * // Get first 10 Dosens
     * const dosens = await prisma.dosen.findMany({ take: 10 })
     * 
     * // Only select the `nip`
     * const dosenWithNipOnly = await prisma.dosen.findMany({ select: { nip: true } })
     * 
     */
    findMany<T extends dosenFindManyArgs>(args?: SelectSubset<T, dosenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dosen.
     * @param {dosenCreateArgs} args - Arguments to create a Dosen.
     * @example
     * // Create one Dosen
     * const Dosen = await prisma.dosen.create({
     *   data: {
     *     // ... data to create a Dosen
     *   }
     * })
     * 
     */
    create<T extends dosenCreateArgs>(args: SelectSubset<T, dosenCreateArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dosens.
     * @param {dosenCreateManyArgs} args - Arguments to create many Dosens.
     * @example
     * // Create many Dosens
     * const dosen = await prisma.dosen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends dosenCreateManyArgs>(args?: SelectSubset<T, dosenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dosen.
     * @param {dosenDeleteArgs} args - Arguments to delete one Dosen.
     * @example
     * // Delete one Dosen
     * const Dosen = await prisma.dosen.delete({
     *   where: {
     *     // ... filter to delete one Dosen
     *   }
     * })
     * 
     */
    delete<T extends dosenDeleteArgs>(args: SelectSubset<T, dosenDeleteArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dosen.
     * @param {dosenUpdateArgs} args - Arguments to update one Dosen.
     * @example
     * // Update one Dosen
     * const dosen = await prisma.dosen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends dosenUpdateArgs>(args: SelectSubset<T, dosenUpdateArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dosens.
     * @param {dosenDeleteManyArgs} args - Arguments to filter Dosens to delete.
     * @example
     * // Delete a few Dosens
     * const { count } = await prisma.dosen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends dosenDeleteManyArgs>(args?: SelectSubset<T, dosenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dosens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dosenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dosens
     * const dosen = await prisma.dosen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends dosenUpdateManyArgs>(args: SelectSubset<T, dosenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dosen.
     * @param {dosenUpsertArgs} args - Arguments to update or create a Dosen.
     * @example
     * // Update or create a Dosen
     * const dosen = await prisma.dosen.upsert({
     *   create: {
     *     // ... data to create a Dosen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dosen we want to update
     *   }
     * })
     */
    upsert<T extends dosenUpsertArgs>(args: SelectSubset<T, dosenUpsertArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dosens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dosenCountArgs} args - Arguments to filter Dosens to count.
     * @example
     * // Count the number of Dosens
     * const count = await prisma.dosen.count({
     *   where: {
     *     // ... the filter for the Dosens we want to count
     *   }
     * })
    **/
    count<T extends dosenCountArgs>(
      args?: Subset<T, dosenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DosenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dosen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DosenAggregateArgs>(args: Subset<T, DosenAggregateArgs>): Prisma.PrismaPromise<GetDosenAggregateType<T>>

    /**
     * Group by Dosen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dosenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends dosenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dosenGroupByArgs['orderBy'] }
        : { orderBy?: dosenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, dosenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDosenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the dosen model
   */
  readonly fields: dosenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for dosen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dosenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jadwal<T extends dosen$jadwalArgs<ExtArgs> = {}>(args?: Subset<T, dosen$jadwalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jadwalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the dosen model
   */
  interface dosenFieldRefs {
    readonly nip: FieldRef<"dosen", 'String'>
    readonly nama: FieldRef<"dosen", 'String'>
  }
    

  // Custom InputTypes
  /**
   * dosen findUnique
   */
  export type dosenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * Filter, which dosen to fetch.
     */
    where: dosenWhereUniqueInput
  }

  /**
   * dosen findUniqueOrThrow
   */
  export type dosenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * Filter, which dosen to fetch.
     */
    where: dosenWhereUniqueInput
  }

  /**
   * dosen findFirst
   */
  export type dosenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * Filter, which dosen to fetch.
     */
    where?: dosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dosens to fetch.
     */
    orderBy?: dosenOrderByWithRelationInput | dosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dosens.
     */
    cursor?: dosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dosens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dosens.
     */
    distinct?: DosenScalarFieldEnum | DosenScalarFieldEnum[]
  }

  /**
   * dosen findFirstOrThrow
   */
  export type dosenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * Filter, which dosen to fetch.
     */
    where?: dosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dosens to fetch.
     */
    orderBy?: dosenOrderByWithRelationInput | dosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dosens.
     */
    cursor?: dosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dosens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dosens.
     */
    distinct?: DosenScalarFieldEnum | DosenScalarFieldEnum[]
  }

  /**
   * dosen findMany
   */
  export type dosenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * Filter, which dosens to fetch.
     */
    where?: dosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dosens to fetch.
     */
    orderBy?: dosenOrderByWithRelationInput | dosenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dosens.
     */
    cursor?: dosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dosens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dosens.
     */
    skip?: number
    distinct?: DosenScalarFieldEnum | DosenScalarFieldEnum[]
  }

  /**
   * dosen create
   */
  export type dosenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * The data needed to create a dosen.
     */
    data: XOR<dosenCreateInput, dosenUncheckedCreateInput>
  }

  /**
   * dosen createMany
   */
  export type dosenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many dosens.
     */
    data: dosenCreateManyInput | dosenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dosen update
   */
  export type dosenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * The data needed to update a dosen.
     */
    data: XOR<dosenUpdateInput, dosenUncheckedUpdateInput>
    /**
     * Choose, which dosen to update.
     */
    where: dosenWhereUniqueInput
  }

  /**
   * dosen updateMany
   */
  export type dosenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update dosens.
     */
    data: XOR<dosenUpdateManyMutationInput, dosenUncheckedUpdateManyInput>
    /**
     * Filter which dosens to update
     */
    where?: dosenWhereInput
    /**
     * Limit how many dosens to update.
     */
    limit?: number
  }

  /**
   * dosen upsert
   */
  export type dosenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * The filter to search for the dosen to update in case it exists.
     */
    where: dosenWhereUniqueInput
    /**
     * In case the dosen found by the `where` argument doesn't exist, create a new dosen with this data.
     */
    create: XOR<dosenCreateInput, dosenUncheckedCreateInput>
    /**
     * In case the dosen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dosenUpdateInput, dosenUncheckedUpdateInput>
  }

  /**
   * dosen delete
   */
  export type dosenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
    /**
     * Filter which dosen to delete.
     */
    where: dosenWhereUniqueInput
  }

  /**
   * dosen deleteMany
   */
  export type dosenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dosens to delete
     */
    where?: dosenWhereInput
    /**
     * Limit how many dosens to delete.
     */
    limit?: number
  }

  /**
   * dosen.jadwal
   */
  export type dosen$jadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal
     */
    select?: jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal
     */
    omit?: jadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwalInclude<ExtArgs> | null
    where?: jadwalWhereInput
    orderBy?: jadwalOrderByWithRelationInput | jadwalOrderByWithRelationInput[]
    cursor?: jadwalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * dosen without action
   */
  export type dosenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dosen
     */
    select?: dosenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dosen
     */
    omit?: dosenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dosenInclude<ExtArgs> | null
  }


  /**
   * Model infokus_bagus
   */

  export type AggregateInfokus_bagus = {
    _count: Infokus_bagusCountAggregateOutputType | null
    _min: Infokus_bagusMinAggregateOutputType | null
    _max: Infokus_bagusMaxAggregateOutputType | null
  }

  export type Infokus_bagusMinAggregateOutputType = {
    kode: string | null
    merek: string | null
  }

  export type Infokus_bagusMaxAggregateOutputType = {
    kode: string | null
    merek: string | null
  }

  export type Infokus_bagusCountAggregateOutputType = {
    kode: number
    merek: number
    _all: number
  }


  export type Infokus_bagusMinAggregateInputType = {
    kode?: true
    merek?: true
  }

  export type Infokus_bagusMaxAggregateInputType = {
    kode?: true
    merek?: true
  }

  export type Infokus_bagusCountAggregateInputType = {
    kode?: true
    merek?: true
    _all?: true
  }

  export type Infokus_bagusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which infokus_bagus to aggregate.
     */
    where?: infokus_bagusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of infokus_baguses to fetch.
     */
    orderBy?: infokus_bagusOrderByWithRelationInput | infokus_bagusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: infokus_bagusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` infokus_baguses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` infokus_baguses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned infokus_baguses
    **/
    _count?: true | Infokus_bagusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Infokus_bagusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Infokus_bagusMaxAggregateInputType
  }

  export type GetInfokus_bagusAggregateType<T extends Infokus_bagusAggregateArgs> = {
        [P in keyof T & keyof AggregateInfokus_bagus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInfokus_bagus[P]>
      : GetScalarType<T[P], AggregateInfokus_bagus[P]>
  }




  export type infokus_bagusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: infokus_bagusWhereInput
    orderBy?: infokus_bagusOrderByWithAggregationInput | infokus_bagusOrderByWithAggregationInput[]
    by: Infokus_bagusScalarFieldEnum[] | Infokus_bagusScalarFieldEnum
    having?: infokus_bagusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Infokus_bagusCountAggregateInputType | true
    _min?: Infokus_bagusMinAggregateInputType
    _max?: Infokus_bagusMaxAggregateInputType
  }

  export type Infokus_bagusGroupByOutputType = {
    kode: string
    merek: string
    _count: Infokus_bagusCountAggregateOutputType | null
    _min: Infokus_bagusMinAggregateOutputType | null
    _max: Infokus_bagusMaxAggregateOutputType | null
  }

  type GetInfokus_bagusGroupByPayload<T extends infokus_bagusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Infokus_bagusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Infokus_bagusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Infokus_bagusGroupByOutputType[P]>
            : GetScalarType<T[P], Infokus_bagusGroupByOutputType[P]>
        }
      >
    >


  export type infokus_bagusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kode?: boolean
    merek?: boolean
    peminjaman?: boolean | infokus_bagus$peminjamanArgs<ExtArgs>
    _count?: boolean | Infokus_bagusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["infokus_bagus"]>



  export type infokus_bagusSelectScalar = {
    kode?: boolean
    merek?: boolean
  }

  export type infokus_bagusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"kode" | "merek", ExtArgs["result"]["infokus_bagus"]>
  export type infokus_bagusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peminjaman?: boolean | infokus_bagus$peminjamanArgs<ExtArgs>
    _count?: boolean | Infokus_bagusCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $infokus_bagusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "infokus_bagus"
    objects: {
      peminjaman: Prisma.$peminjamanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      kode: string
      merek: string
    }, ExtArgs["result"]["infokus_bagus"]>
    composites: {}
  }

  type infokus_bagusGetPayload<S extends boolean | null | undefined | infokus_bagusDefaultArgs> = $Result.GetResult<Prisma.$infokus_bagusPayload, S>

  type infokus_bagusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<infokus_bagusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Infokus_bagusCountAggregateInputType | true
    }

  export interface infokus_bagusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['infokus_bagus'], meta: { name: 'infokus_bagus' } }
    /**
     * Find zero or one Infokus_bagus that matches the filter.
     * @param {infokus_bagusFindUniqueArgs} args - Arguments to find a Infokus_bagus
     * @example
     * // Get one Infokus_bagus
     * const infokus_bagus = await prisma.infokus_bagus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends infokus_bagusFindUniqueArgs>(args: SelectSubset<T, infokus_bagusFindUniqueArgs<ExtArgs>>): Prisma__infokus_bagusClient<$Result.GetResult<Prisma.$infokus_bagusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Infokus_bagus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {infokus_bagusFindUniqueOrThrowArgs} args - Arguments to find a Infokus_bagus
     * @example
     * // Get one Infokus_bagus
     * const infokus_bagus = await prisma.infokus_bagus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends infokus_bagusFindUniqueOrThrowArgs>(args: SelectSubset<T, infokus_bagusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__infokus_bagusClient<$Result.GetResult<Prisma.$infokus_bagusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Infokus_bagus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {infokus_bagusFindFirstArgs} args - Arguments to find a Infokus_bagus
     * @example
     * // Get one Infokus_bagus
     * const infokus_bagus = await prisma.infokus_bagus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends infokus_bagusFindFirstArgs>(args?: SelectSubset<T, infokus_bagusFindFirstArgs<ExtArgs>>): Prisma__infokus_bagusClient<$Result.GetResult<Prisma.$infokus_bagusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Infokus_bagus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {infokus_bagusFindFirstOrThrowArgs} args - Arguments to find a Infokus_bagus
     * @example
     * // Get one Infokus_bagus
     * const infokus_bagus = await prisma.infokus_bagus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends infokus_bagusFindFirstOrThrowArgs>(args?: SelectSubset<T, infokus_bagusFindFirstOrThrowArgs<ExtArgs>>): Prisma__infokus_bagusClient<$Result.GetResult<Prisma.$infokus_bagusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Infokus_baguses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {infokus_bagusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Infokus_baguses
     * const infokus_baguses = await prisma.infokus_bagus.findMany()
     * 
     * // Get first 10 Infokus_baguses
     * const infokus_baguses = await prisma.infokus_bagus.findMany({ take: 10 })
     * 
     * // Only select the `kode`
     * const infokus_bagusWithKodeOnly = await prisma.infokus_bagus.findMany({ select: { kode: true } })
     * 
     */
    findMany<T extends infokus_bagusFindManyArgs>(args?: SelectSubset<T, infokus_bagusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$infokus_bagusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Infokus_bagus.
     * @param {infokus_bagusCreateArgs} args - Arguments to create a Infokus_bagus.
     * @example
     * // Create one Infokus_bagus
     * const Infokus_bagus = await prisma.infokus_bagus.create({
     *   data: {
     *     // ... data to create a Infokus_bagus
     *   }
     * })
     * 
     */
    create<T extends infokus_bagusCreateArgs>(args: SelectSubset<T, infokus_bagusCreateArgs<ExtArgs>>): Prisma__infokus_bagusClient<$Result.GetResult<Prisma.$infokus_bagusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Infokus_baguses.
     * @param {infokus_bagusCreateManyArgs} args - Arguments to create many Infokus_baguses.
     * @example
     * // Create many Infokus_baguses
     * const infokus_bagus = await prisma.infokus_bagus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends infokus_bagusCreateManyArgs>(args?: SelectSubset<T, infokus_bagusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Infokus_bagus.
     * @param {infokus_bagusDeleteArgs} args - Arguments to delete one Infokus_bagus.
     * @example
     * // Delete one Infokus_bagus
     * const Infokus_bagus = await prisma.infokus_bagus.delete({
     *   where: {
     *     // ... filter to delete one Infokus_bagus
     *   }
     * })
     * 
     */
    delete<T extends infokus_bagusDeleteArgs>(args: SelectSubset<T, infokus_bagusDeleteArgs<ExtArgs>>): Prisma__infokus_bagusClient<$Result.GetResult<Prisma.$infokus_bagusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Infokus_bagus.
     * @param {infokus_bagusUpdateArgs} args - Arguments to update one Infokus_bagus.
     * @example
     * // Update one Infokus_bagus
     * const infokus_bagus = await prisma.infokus_bagus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends infokus_bagusUpdateArgs>(args: SelectSubset<T, infokus_bagusUpdateArgs<ExtArgs>>): Prisma__infokus_bagusClient<$Result.GetResult<Prisma.$infokus_bagusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Infokus_baguses.
     * @param {infokus_bagusDeleteManyArgs} args - Arguments to filter Infokus_baguses to delete.
     * @example
     * // Delete a few Infokus_baguses
     * const { count } = await prisma.infokus_bagus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends infokus_bagusDeleteManyArgs>(args?: SelectSubset<T, infokus_bagusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Infokus_baguses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {infokus_bagusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Infokus_baguses
     * const infokus_bagus = await prisma.infokus_bagus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends infokus_bagusUpdateManyArgs>(args: SelectSubset<T, infokus_bagusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Infokus_bagus.
     * @param {infokus_bagusUpsertArgs} args - Arguments to update or create a Infokus_bagus.
     * @example
     * // Update or create a Infokus_bagus
     * const infokus_bagus = await prisma.infokus_bagus.upsert({
     *   create: {
     *     // ... data to create a Infokus_bagus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Infokus_bagus we want to update
     *   }
     * })
     */
    upsert<T extends infokus_bagusUpsertArgs>(args: SelectSubset<T, infokus_bagusUpsertArgs<ExtArgs>>): Prisma__infokus_bagusClient<$Result.GetResult<Prisma.$infokus_bagusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Infokus_baguses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {infokus_bagusCountArgs} args - Arguments to filter Infokus_baguses to count.
     * @example
     * // Count the number of Infokus_baguses
     * const count = await prisma.infokus_bagus.count({
     *   where: {
     *     // ... the filter for the Infokus_baguses we want to count
     *   }
     * })
    **/
    count<T extends infokus_bagusCountArgs>(
      args?: Subset<T, infokus_bagusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Infokus_bagusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Infokus_bagus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Infokus_bagusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Infokus_bagusAggregateArgs>(args: Subset<T, Infokus_bagusAggregateArgs>): Prisma.PrismaPromise<GetInfokus_bagusAggregateType<T>>

    /**
     * Group by Infokus_bagus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {infokus_bagusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends infokus_bagusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: infokus_bagusGroupByArgs['orderBy'] }
        : { orderBy?: infokus_bagusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, infokus_bagusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInfokus_bagusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the infokus_bagus model
   */
  readonly fields: infokus_bagusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for infokus_bagus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__infokus_bagusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    peminjaman<T extends infokus_bagus$peminjamanArgs<ExtArgs> = {}>(args?: Subset<T, infokus_bagus$peminjamanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the infokus_bagus model
   */
  interface infokus_bagusFieldRefs {
    readonly kode: FieldRef<"infokus_bagus", 'String'>
    readonly merek: FieldRef<"infokus_bagus", 'String'>
  }
    

  // Custom InputTypes
  /**
   * infokus_bagus findUnique
   */
  export type infokus_bagusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the infokus_bagus
     */
    select?: infokus_bagusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the infokus_bagus
     */
    omit?: infokus_bagusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: infokus_bagusInclude<ExtArgs> | null
    /**
     * Filter, which infokus_bagus to fetch.
     */
    where: infokus_bagusWhereUniqueInput
  }

  /**
   * infokus_bagus findUniqueOrThrow
   */
  export type infokus_bagusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the infokus_bagus
     */
    select?: infokus_bagusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the infokus_bagus
     */
    omit?: infokus_bagusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: infokus_bagusInclude<ExtArgs> | null
    /**
     * Filter, which infokus_bagus to fetch.
     */
    where: infokus_bagusWhereUniqueInput
  }

  /**
   * infokus_bagus findFirst
   */
  export type infokus_bagusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the infokus_bagus
     */
    select?: infokus_bagusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the infokus_bagus
     */
    omit?: infokus_bagusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: infokus_bagusInclude<ExtArgs> | null
    /**
     * Filter, which infokus_bagus to fetch.
     */
    where?: infokus_bagusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of infokus_baguses to fetch.
     */
    orderBy?: infokus_bagusOrderByWithRelationInput | infokus_bagusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for infokus_baguses.
     */
    cursor?: infokus_bagusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` infokus_baguses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` infokus_baguses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of infokus_baguses.
     */
    distinct?: Infokus_bagusScalarFieldEnum | Infokus_bagusScalarFieldEnum[]
  }

  /**
   * infokus_bagus findFirstOrThrow
   */
  export type infokus_bagusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the infokus_bagus
     */
    select?: infokus_bagusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the infokus_bagus
     */
    omit?: infokus_bagusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: infokus_bagusInclude<ExtArgs> | null
    /**
     * Filter, which infokus_bagus to fetch.
     */
    where?: infokus_bagusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of infokus_baguses to fetch.
     */
    orderBy?: infokus_bagusOrderByWithRelationInput | infokus_bagusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for infokus_baguses.
     */
    cursor?: infokus_bagusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` infokus_baguses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` infokus_baguses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of infokus_baguses.
     */
    distinct?: Infokus_bagusScalarFieldEnum | Infokus_bagusScalarFieldEnum[]
  }

  /**
   * infokus_bagus findMany
   */
  export type infokus_bagusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the infokus_bagus
     */
    select?: infokus_bagusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the infokus_bagus
     */
    omit?: infokus_bagusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: infokus_bagusInclude<ExtArgs> | null
    /**
     * Filter, which infokus_baguses to fetch.
     */
    where?: infokus_bagusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of infokus_baguses to fetch.
     */
    orderBy?: infokus_bagusOrderByWithRelationInput | infokus_bagusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing infokus_baguses.
     */
    cursor?: infokus_bagusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` infokus_baguses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` infokus_baguses.
     */
    skip?: number
    distinct?: Infokus_bagusScalarFieldEnum | Infokus_bagusScalarFieldEnum[]
  }

  /**
   * infokus_bagus create
   */
  export type infokus_bagusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the infokus_bagus
     */
    select?: infokus_bagusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the infokus_bagus
     */
    omit?: infokus_bagusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: infokus_bagusInclude<ExtArgs> | null
    /**
     * The data needed to create a infokus_bagus.
     */
    data: XOR<infokus_bagusCreateInput, infokus_bagusUncheckedCreateInput>
  }

  /**
   * infokus_bagus createMany
   */
  export type infokus_bagusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many infokus_baguses.
     */
    data: infokus_bagusCreateManyInput | infokus_bagusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * infokus_bagus update
   */
  export type infokus_bagusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the infokus_bagus
     */
    select?: infokus_bagusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the infokus_bagus
     */
    omit?: infokus_bagusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: infokus_bagusInclude<ExtArgs> | null
    /**
     * The data needed to update a infokus_bagus.
     */
    data: XOR<infokus_bagusUpdateInput, infokus_bagusUncheckedUpdateInput>
    /**
     * Choose, which infokus_bagus to update.
     */
    where: infokus_bagusWhereUniqueInput
  }

  /**
   * infokus_bagus updateMany
   */
  export type infokus_bagusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update infokus_baguses.
     */
    data: XOR<infokus_bagusUpdateManyMutationInput, infokus_bagusUncheckedUpdateManyInput>
    /**
     * Filter which infokus_baguses to update
     */
    where?: infokus_bagusWhereInput
    /**
     * Limit how many infokus_baguses to update.
     */
    limit?: number
  }

  /**
   * infokus_bagus upsert
   */
  export type infokus_bagusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the infokus_bagus
     */
    select?: infokus_bagusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the infokus_bagus
     */
    omit?: infokus_bagusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: infokus_bagusInclude<ExtArgs> | null
    /**
     * The filter to search for the infokus_bagus to update in case it exists.
     */
    where: infokus_bagusWhereUniqueInput
    /**
     * In case the infokus_bagus found by the `where` argument doesn't exist, create a new infokus_bagus with this data.
     */
    create: XOR<infokus_bagusCreateInput, infokus_bagusUncheckedCreateInput>
    /**
     * In case the infokus_bagus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<infokus_bagusUpdateInput, infokus_bagusUncheckedUpdateInput>
  }

  /**
   * infokus_bagus delete
   */
  export type infokus_bagusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the infokus_bagus
     */
    select?: infokus_bagusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the infokus_bagus
     */
    omit?: infokus_bagusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: infokus_bagusInclude<ExtArgs> | null
    /**
     * Filter which infokus_bagus to delete.
     */
    where: infokus_bagusWhereUniqueInput
  }

  /**
   * infokus_bagus deleteMany
   */
  export type infokus_bagusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which infokus_baguses to delete
     */
    where?: infokus_bagusWhereInput
    /**
     * Limit how many infokus_baguses to delete.
     */
    limit?: number
  }

  /**
   * infokus_bagus.peminjaman
   */
  export type infokus_bagus$peminjamanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
    where?: peminjamanWhereInput
    orderBy?: peminjamanOrderByWithRelationInput | peminjamanOrderByWithRelationInput[]
    cursor?: peminjamanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PeminjamanScalarFieldEnum | PeminjamanScalarFieldEnum[]
  }

  /**
   * infokus_bagus without action
   */
  export type infokus_bagusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the infokus_bagus
     */
    select?: infokus_bagusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the infokus_bagus
     */
    omit?: infokus_bagusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: infokus_bagusInclude<ExtArgs> | null
  }


  /**
   * Model infokus_rusak
   */

  export type AggregateInfokus_rusak = {
    _count: Infokus_rusakCountAggregateOutputType | null
    _min: Infokus_rusakMinAggregateOutputType | null
    _max: Infokus_rusakMaxAggregateOutputType | null
  }

  export type Infokus_rusakMinAggregateOutputType = {
    kode: string | null
    merek: string | null
  }

  export type Infokus_rusakMaxAggregateOutputType = {
    kode: string | null
    merek: string | null
  }

  export type Infokus_rusakCountAggregateOutputType = {
    kode: number
    merek: number
    _all: number
  }


  export type Infokus_rusakMinAggregateInputType = {
    kode?: true
    merek?: true
  }

  export type Infokus_rusakMaxAggregateInputType = {
    kode?: true
    merek?: true
  }

  export type Infokus_rusakCountAggregateInputType = {
    kode?: true
    merek?: true
    _all?: true
  }

  export type Infokus_rusakAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which infokus_rusak to aggregate.
     */
    where?: infokus_rusakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of infokus_rusaks to fetch.
     */
    orderBy?: infokus_rusakOrderByWithRelationInput | infokus_rusakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: infokus_rusakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` infokus_rusaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` infokus_rusaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned infokus_rusaks
    **/
    _count?: true | Infokus_rusakCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Infokus_rusakMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Infokus_rusakMaxAggregateInputType
  }

  export type GetInfokus_rusakAggregateType<T extends Infokus_rusakAggregateArgs> = {
        [P in keyof T & keyof AggregateInfokus_rusak]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInfokus_rusak[P]>
      : GetScalarType<T[P], AggregateInfokus_rusak[P]>
  }




  export type infokus_rusakGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: infokus_rusakWhereInput
    orderBy?: infokus_rusakOrderByWithAggregationInput | infokus_rusakOrderByWithAggregationInput[]
    by: Infokus_rusakScalarFieldEnum[] | Infokus_rusakScalarFieldEnum
    having?: infokus_rusakScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Infokus_rusakCountAggregateInputType | true
    _min?: Infokus_rusakMinAggregateInputType
    _max?: Infokus_rusakMaxAggregateInputType
  }

  export type Infokus_rusakGroupByOutputType = {
    kode: string
    merek: string
    _count: Infokus_rusakCountAggregateOutputType | null
    _min: Infokus_rusakMinAggregateOutputType | null
    _max: Infokus_rusakMaxAggregateOutputType | null
  }

  type GetInfokus_rusakGroupByPayload<T extends infokus_rusakGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Infokus_rusakGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Infokus_rusakGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Infokus_rusakGroupByOutputType[P]>
            : GetScalarType<T[P], Infokus_rusakGroupByOutputType[P]>
        }
      >
    >


  export type infokus_rusakSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kode?: boolean
    merek?: boolean
  }, ExtArgs["result"]["infokus_rusak"]>



  export type infokus_rusakSelectScalar = {
    kode?: boolean
    merek?: boolean
  }

  export type infokus_rusakOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"kode" | "merek", ExtArgs["result"]["infokus_rusak"]>

  export type $infokus_rusakPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "infokus_rusak"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      kode: string
      merek: string
    }, ExtArgs["result"]["infokus_rusak"]>
    composites: {}
  }

  type infokus_rusakGetPayload<S extends boolean | null | undefined | infokus_rusakDefaultArgs> = $Result.GetResult<Prisma.$infokus_rusakPayload, S>

  type infokus_rusakCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<infokus_rusakFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Infokus_rusakCountAggregateInputType | true
    }

  export interface infokus_rusakDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['infokus_rusak'], meta: { name: 'infokus_rusak' } }
    /**
     * Find zero or one Infokus_rusak that matches the filter.
     * @param {infokus_rusakFindUniqueArgs} args - Arguments to find a Infokus_rusak
     * @example
     * // Get one Infokus_rusak
     * const infokus_rusak = await prisma.infokus_rusak.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends infokus_rusakFindUniqueArgs>(args: SelectSubset<T, infokus_rusakFindUniqueArgs<ExtArgs>>): Prisma__infokus_rusakClient<$Result.GetResult<Prisma.$infokus_rusakPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Infokus_rusak that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {infokus_rusakFindUniqueOrThrowArgs} args - Arguments to find a Infokus_rusak
     * @example
     * // Get one Infokus_rusak
     * const infokus_rusak = await prisma.infokus_rusak.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends infokus_rusakFindUniqueOrThrowArgs>(args: SelectSubset<T, infokus_rusakFindUniqueOrThrowArgs<ExtArgs>>): Prisma__infokus_rusakClient<$Result.GetResult<Prisma.$infokus_rusakPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Infokus_rusak that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {infokus_rusakFindFirstArgs} args - Arguments to find a Infokus_rusak
     * @example
     * // Get one Infokus_rusak
     * const infokus_rusak = await prisma.infokus_rusak.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends infokus_rusakFindFirstArgs>(args?: SelectSubset<T, infokus_rusakFindFirstArgs<ExtArgs>>): Prisma__infokus_rusakClient<$Result.GetResult<Prisma.$infokus_rusakPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Infokus_rusak that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {infokus_rusakFindFirstOrThrowArgs} args - Arguments to find a Infokus_rusak
     * @example
     * // Get one Infokus_rusak
     * const infokus_rusak = await prisma.infokus_rusak.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends infokus_rusakFindFirstOrThrowArgs>(args?: SelectSubset<T, infokus_rusakFindFirstOrThrowArgs<ExtArgs>>): Prisma__infokus_rusakClient<$Result.GetResult<Prisma.$infokus_rusakPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Infokus_rusaks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {infokus_rusakFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Infokus_rusaks
     * const infokus_rusaks = await prisma.infokus_rusak.findMany()
     * 
     * // Get first 10 Infokus_rusaks
     * const infokus_rusaks = await prisma.infokus_rusak.findMany({ take: 10 })
     * 
     * // Only select the `kode`
     * const infokus_rusakWithKodeOnly = await prisma.infokus_rusak.findMany({ select: { kode: true } })
     * 
     */
    findMany<T extends infokus_rusakFindManyArgs>(args?: SelectSubset<T, infokus_rusakFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$infokus_rusakPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Infokus_rusak.
     * @param {infokus_rusakCreateArgs} args - Arguments to create a Infokus_rusak.
     * @example
     * // Create one Infokus_rusak
     * const Infokus_rusak = await prisma.infokus_rusak.create({
     *   data: {
     *     // ... data to create a Infokus_rusak
     *   }
     * })
     * 
     */
    create<T extends infokus_rusakCreateArgs>(args: SelectSubset<T, infokus_rusakCreateArgs<ExtArgs>>): Prisma__infokus_rusakClient<$Result.GetResult<Prisma.$infokus_rusakPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Infokus_rusaks.
     * @param {infokus_rusakCreateManyArgs} args - Arguments to create many Infokus_rusaks.
     * @example
     * // Create many Infokus_rusaks
     * const infokus_rusak = await prisma.infokus_rusak.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends infokus_rusakCreateManyArgs>(args?: SelectSubset<T, infokus_rusakCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Infokus_rusak.
     * @param {infokus_rusakDeleteArgs} args - Arguments to delete one Infokus_rusak.
     * @example
     * // Delete one Infokus_rusak
     * const Infokus_rusak = await prisma.infokus_rusak.delete({
     *   where: {
     *     // ... filter to delete one Infokus_rusak
     *   }
     * })
     * 
     */
    delete<T extends infokus_rusakDeleteArgs>(args: SelectSubset<T, infokus_rusakDeleteArgs<ExtArgs>>): Prisma__infokus_rusakClient<$Result.GetResult<Prisma.$infokus_rusakPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Infokus_rusak.
     * @param {infokus_rusakUpdateArgs} args - Arguments to update one Infokus_rusak.
     * @example
     * // Update one Infokus_rusak
     * const infokus_rusak = await prisma.infokus_rusak.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends infokus_rusakUpdateArgs>(args: SelectSubset<T, infokus_rusakUpdateArgs<ExtArgs>>): Prisma__infokus_rusakClient<$Result.GetResult<Prisma.$infokus_rusakPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Infokus_rusaks.
     * @param {infokus_rusakDeleteManyArgs} args - Arguments to filter Infokus_rusaks to delete.
     * @example
     * // Delete a few Infokus_rusaks
     * const { count } = await prisma.infokus_rusak.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends infokus_rusakDeleteManyArgs>(args?: SelectSubset<T, infokus_rusakDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Infokus_rusaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {infokus_rusakUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Infokus_rusaks
     * const infokus_rusak = await prisma.infokus_rusak.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends infokus_rusakUpdateManyArgs>(args: SelectSubset<T, infokus_rusakUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Infokus_rusak.
     * @param {infokus_rusakUpsertArgs} args - Arguments to update or create a Infokus_rusak.
     * @example
     * // Update or create a Infokus_rusak
     * const infokus_rusak = await prisma.infokus_rusak.upsert({
     *   create: {
     *     // ... data to create a Infokus_rusak
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Infokus_rusak we want to update
     *   }
     * })
     */
    upsert<T extends infokus_rusakUpsertArgs>(args: SelectSubset<T, infokus_rusakUpsertArgs<ExtArgs>>): Prisma__infokus_rusakClient<$Result.GetResult<Prisma.$infokus_rusakPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Infokus_rusaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {infokus_rusakCountArgs} args - Arguments to filter Infokus_rusaks to count.
     * @example
     * // Count the number of Infokus_rusaks
     * const count = await prisma.infokus_rusak.count({
     *   where: {
     *     // ... the filter for the Infokus_rusaks we want to count
     *   }
     * })
    **/
    count<T extends infokus_rusakCountArgs>(
      args?: Subset<T, infokus_rusakCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Infokus_rusakCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Infokus_rusak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Infokus_rusakAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Infokus_rusakAggregateArgs>(args: Subset<T, Infokus_rusakAggregateArgs>): Prisma.PrismaPromise<GetInfokus_rusakAggregateType<T>>

    /**
     * Group by Infokus_rusak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {infokus_rusakGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends infokus_rusakGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: infokus_rusakGroupByArgs['orderBy'] }
        : { orderBy?: infokus_rusakGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, infokus_rusakGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInfokus_rusakGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the infokus_rusak model
   */
  readonly fields: infokus_rusakFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for infokus_rusak.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__infokus_rusakClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the infokus_rusak model
   */
  interface infokus_rusakFieldRefs {
    readonly kode: FieldRef<"infokus_rusak", 'String'>
    readonly merek: FieldRef<"infokus_rusak", 'String'>
  }
    

  // Custom InputTypes
  /**
   * infokus_rusak findUnique
   */
  export type infokus_rusakFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the infokus_rusak
     */
    select?: infokus_rusakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the infokus_rusak
     */
    omit?: infokus_rusakOmit<ExtArgs> | null
    /**
     * Filter, which infokus_rusak to fetch.
     */
    where: infokus_rusakWhereUniqueInput
  }

  /**
   * infokus_rusak findUniqueOrThrow
   */
  export type infokus_rusakFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the infokus_rusak
     */
    select?: infokus_rusakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the infokus_rusak
     */
    omit?: infokus_rusakOmit<ExtArgs> | null
    /**
     * Filter, which infokus_rusak to fetch.
     */
    where: infokus_rusakWhereUniqueInput
  }

  /**
   * infokus_rusak findFirst
   */
  export type infokus_rusakFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the infokus_rusak
     */
    select?: infokus_rusakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the infokus_rusak
     */
    omit?: infokus_rusakOmit<ExtArgs> | null
    /**
     * Filter, which infokus_rusak to fetch.
     */
    where?: infokus_rusakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of infokus_rusaks to fetch.
     */
    orderBy?: infokus_rusakOrderByWithRelationInput | infokus_rusakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for infokus_rusaks.
     */
    cursor?: infokus_rusakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` infokus_rusaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` infokus_rusaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of infokus_rusaks.
     */
    distinct?: Infokus_rusakScalarFieldEnum | Infokus_rusakScalarFieldEnum[]
  }

  /**
   * infokus_rusak findFirstOrThrow
   */
  export type infokus_rusakFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the infokus_rusak
     */
    select?: infokus_rusakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the infokus_rusak
     */
    omit?: infokus_rusakOmit<ExtArgs> | null
    /**
     * Filter, which infokus_rusak to fetch.
     */
    where?: infokus_rusakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of infokus_rusaks to fetch.
     */
    orderBy?: infokus_rusakOrderByWithRelationInput | infokus_rusakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for infokus_rusaks.
     */
    cursor?: infokus_rusakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` infokus_rusaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` infokus_rusaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of infokus_rusaks.
     */
    distinct?: Infokus_rusakScalarFieldEnum | Infokus_rusakScalarFieldEnum[]
  }

  /**
   * infokus_rusak findMany
   */
  export type infokus_rusakFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the infokus_rusak
     */
    select?: infokus_rusakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the infokus_rusak
     */
    omit?: infokus_rusakOmit<ExtArgs> | null
    /**
     * Filter, which infokus_rusaks to fetch.
     */
    where?: infokus_rusakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of infokus_rusaks to fetch.
     */
    orderBy?: infokus_rusakOrderByWithRelationInput | infokus_rusakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing infokus_rusaks.
     */
    cursor?: infokus_rusakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` infokus_rusaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` infokus_rusaks.
     */
    skip?: number
    distinct?: Infokus_rusakScalarFieldEnum | Infokus_rusakScalarFieldEnum[]
  }

  /**
   * infokus_rusak create
   */
  export type infokus_rusakCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the infokus_rusak
     */
    select?: infokus_rusakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the infokus_rusak
     */
    omit?: infokus_rusakOmit<ExtArgs> | null
    /**
     * The data needed to create a infokus_rusak.
     */
    data: XOR<infokus_rusakCreateInput, infokus_rusakUncheckedCreateInput>
  }

  /**
   * infokus_rusak createMany
   */
  export type infokus_rusakCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many infokus_rusaks.
     */
    data: infokus_rusakCreateManyInput | infokus_rusakCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * infokus_rusak update
   */
  export type infokus_rusakUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the infokus_rusak
     */
    select?: infokus_rusakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the infokus_rusak
     */
    omit?: infokus_rusakOmit<ExtArgs> | null
    /**
     * The data needed to update a infokus_rusak.
     */
    data: XOR<infokus_rusakUpdateInput, infokus_rusakUncheckedUpdateInput>
    /**
     * Choose, which infokus_rusak to update.
     */
    where: infokus_rusakWhereUniqueInput
  }

  /**
   * infokus_rusak updateMany
   */
  export type infokus_rusakUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update infokus_rusaks.
     */
    data: XOR<infokus_rusakUpdateManyMutationInput, infokus_rusakUncheckedUpdateManyInput>
    /**
     * Filter which infokus_rusaks to update
     */
    where?: infokus_rusakWhereInput
    /**
     * Limit how many infokus_rusaks to update.
     */
    limit?: number
  }

  /**
   * infokus_rusak upsert
   */
  export type infokus_rusakUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the infokus_rusak
     */
    select?: infokus_rusakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the infokus_rusak
     */
    omit?: infokus_rusakOmit<ExtArgs> | null
    /**
     * The filter to search for the infokus_rusak to update in case it exists.
     */
    where: infokus_rusakWhereUniqueInput
    /**
     * In case the infokus_rusak found by the `where` argument doesn't exist, create a new infokus_rusak with this data.
     */
    create: XOR<infokus_rusakCreateInput, infokus_rusakUncheckedCreateInput>
    /**
     * In case the infokus_rusak was found with the provided `where` argument, update it with this data.
     */
    update: XOR<infokus_rusakUpdateInput, infokus_rusakUncheckedUpdateInput>
  }

  /**
   * infokus_rusak delete
   */
  export type infokus_rusakDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the infokus_rusak
     */
    select?: infokus_rusakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the infokus_rusak
     */
    omit?: infokus_rusakOmit<ExtArgs> | null
    /**
     * Filter which infokus_rusak to delete.
     */
    where: infokus_rusakWhereUniqueInput
  }

  /**
   * infokus_rusak deleteMany
   */
  export type infokus_rusakDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which infokus_rusaks to delete
     */
    where?: infokus_rusakWhereInput
    /**
     * Limit how many infokus_rusaks to delete.
     */
    limit?: number
  }

  /**
   * infokus_rusak without action
   */
  export type infokus_rusakDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the infokus_rusak
     */
    select?: infokus_rusakSelect<ExtArgs> | null
    /**
     * Omit specific fields from the infokus_rusak
     */
    omit?: infokus_rusakOmit<ExtArgs> | null
  }


  /**
   * Model jadwal
   */

  export type AggregateJadwal = {
    _count: JadwalCountAggregateOutputType | null
    _min: JadwalMinAggregateOutputType | null
    _max: JadwalMaxAggregateOutputType | null
  }

  export type JadwalMinAggregateOutputType = {
    kodemk: string | null
    nip: string | null
    ruangan: string | null
    waktu: string | null
  }

  export type JadwalMaxAggregateOutputType = {
    kodemk: string | null
    nip: string | null
    ruangan: string | null
    waktu: string | null
  }

  export type JadwalCountAggregateOutputType = {
    kodemk: number
    nip: number
    ruangan: number
    waktu: number
    _all: number
  }


  export type JadwalMinAggregateInputType = {
    kodemk?: true
    nip?: true
    ruangan?: true
    waktu?: true
  }

  export type JadwalMaxAggregateInputType = {
    kodemk?: true
    nip?: true
    ruangan?: true
    waktu?: true
  }

  export type JadwalCountAggregateInputType = {
    kodemk?: true
    nip?: true
    ruangan?: true
    waktu?: true
    _all?: true
  }

  export type JadwalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jadwal to aggregate.
     */
    where?: jadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jadwals to fetch.
     */
    orderBy?: jadwalOrderByWithRelationInput | jadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: jadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jadwals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned jadwals
    **/
    _count?: true | JadwalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JadwalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JadwalMaxAggregateInputType
  }

  export type GetJadwalAggregateType<T extends JadwalAggregateArgs> = {
        [P in keyof T & keyof AggregateJadwal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJadwal[P]>
      : GetScalarType<T[P], AggregateJadwal[P]>
  }




  export type jadwalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jadwalWhereInput
    orderBy?: jadwalOrderByWithAggregationInput | jadwalOrderByWithAggregationInput[]
    by: JadwalScalarFieldEnum[] | JadwalScalarFieldEnum
    having?: jadwalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JadwalCountAggregateInputType | true
    _min?: JadwalMinAggregateInputType
    _max?: JadwalMaxAggregateInputType
  }

  export type JadwalGroupByOutputType = {
    kodemk: string
    nip: string
    ruangan: string
    waktu: string | null
    _count: JadwalCountAggregateOutputType | null
    _min: JadwalMinAggregateOutputType | null
    _max: JadwalMaxAggregateOutputType | null
  }

  type GetJadwalGroupByPayload<T extends jadwalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JadwalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JadwalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JadwalGroupByOutputType[P]>
            : GetScalarType<T[P], JadwalGroupByOutputType[P]>
        }
      >
    >


  export type jadwalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kodemk?: boolean
    nip?: boolean
    ruangan?: boolean
    waktu?: boolean
    matakuliah?: boolean | matakuliahDefaultArgs<ExtArgs>
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jadwal"]>



  export type jadwalSelectScalar = {
    kodemk?: boolean
    nip?: boolean
    ruangan?: boolean
    waktu?: boolean
  }

  export type jadwalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"kodemk" | "nip" | "ruangan" | "waktu", ExtArgs["result"]["jadwal"]>
  export type jadwalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matakuliah?: boolean | matakuliahDefaultArgs<ExtArgs>
    dosen?: boolean | dosenDefaultArgs<ExtArgs>
  }

  export type $jadwalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "jadwal"
    objects: {
      matakuliah: Prisma.$matakuliahPayload<ExtArgs>
      dosen: Prisma.$dosenPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      kodemk: string
      nip: string
      ruangan: string
      waktu: string | null
    }, ExtArgs["result"]["jadwal"]>
    composites: {}
  }

  type jadwalGetPayload<S extends boolean | null | undefined | jadwalDefaultArgs> = $Result.GetResult<Prisma.$jadwalPayload, S>

  type jadwalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<jadwalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JadwalCountAggregateInputType | true
    }

  export interface jadwalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['jadwal'], meta: { name: 'jadwal' } }
    /**
     * Find zero or one Jadwal that matches the filter.
     * @param {jadwalFindUniqueArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends jadwalFindUniqueArgs>(args: SelectSubset<T, jadwalFindUniqueArgs<ExtArgs>>): Prisma__jadwalClient<$Result.GetResult<Prisma.$jadwalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jadwal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {jadwalFindUniqueOrThrowArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends jadwalFindUniqueOrThrowArgs>(args: SelectSubset<T, jadwalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__jadwalClient<$Result.GetResult<Prisma.$jadwalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jadwal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jadwalFindFirstArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends jadwalFindFirstArgs>(args?: SelectSubset<T, jadwalFindFirstArgs<ExtArgs>>): Prisma__jadwalClient<$Result.GetResult<Prisma.$jadwalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jadwal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jadwalFindFirstOrThrowArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends jadwalFindFirstOrThrowArgs>(args?: SelectSubset<T, jadwalFindFirstOrThrowArgs<ExtArgs>>): Prisma__jadwalClient<$Result.GetResult<Prisma.$jadwalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jadwals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jadwalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jadwals
     * const jadwals = await prisma.jadwal.findMany()
     * 
     * // Get first 10 Jadwals
     * const jadwals = await prisma.jadwal.findMany({ take: 10 })
     * 
     * // Only select the `kodemk`
     * const jadwalWithKodemkOnly = await prisma.jadwal.findMany({ select: { kodemk: true } })
     * 
     */
    findMany<T extends jadwalFindManyArgs>(args?: SelectSubset<T, jadwalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jadwalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jadwal.
     * @param {jadwalCreateArgs} args - Arguments to create a Jadwal.
     * @example
     * // Create one Jadwal
     * const Jadwal = await prisma.jadwal.create({
     *   data: {
     *     // ... data to create a Jadwal
     *   }
     * })
     * 
     */
    create<T extends jadwalCreateArgs>(args: SelectSubset<T, jadwalCreateArgs<ExtArgs>>): Prisma__jadwalClient<$Result.GetResult<Prisma.$jadwalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jadwals.
     * @param {jadwalCreateManyArgs} args - Arguments to create many Jadwals.
     * @example
     * // Create many Jadwals
     * const jadwal = await prisma.jadwal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends jadwalCreateManyArgs>(args?: SelectSubset<T, jadwalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jadwal.
     * @param {jadwalDeleteArgs} args - Arguments to delete one Jadwal.
     * @example
     * // Delete one Jadwal
     * const Jadwal = await prisma.jadwal.delete({
     *   where: {
     *     // ... filter to delete one Jadwal
     *   }
     * })
     * 
     */
    delete<T extends jadwalDeleteArgs>(args: SelectSubset<T, jadwalDeleteArgs<ExtArgs>>): Prisma__jadwalClient<$Result.GetResult<Prisma.$jadwalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jadwal.
     * @param {jadwalUpdateArgs} args - Arguments to update one Jadwal.
     * @example
     * // Update one Jadwal
     * const jadwal = await prisma.jadwal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends jadwalUpdateArgs>(args: SelectSubset<T, jadwalUpdateArgs<ExtArgs>>): Prisma__jadwalClient<$Result.GetResult<Prisma.$jadwalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jadwals.
     * @param {jadwalDeleteManyArgs} args - Arguments to filter Jadwals to delete.
     * @example
     * // Delete a few Jadwals
     * const { count } = await prisma.jadwal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends jadwalDeleteManyArgs>(args?: SelectSubset<T, jadwalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jadwals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jadwalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jadwals
     * const jadwal = await prisma.jadwal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends jadwalUpdateManyArgs>(args: SelectSubset<T, jadwalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jadwal.
     * @param {jadwalUpsertArgs} args - Arguments to update or create a Jadwal.
     * @example
     * // Update or create a Jadwal
     * const jadwal = await prisma.jadwal.upsert({
     *   create: {
     *     // ... data to create a Jadwal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jadwal we want to update
     *   }
     * })
     */
    upsert<T extends jadwalUpsertArgs>(args: SelectSubset<T, jadwalUpsertArgs<ExtArgs>>): Prisma__jadwalClient<$Result.GetResult<Prisma.$jadwalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jadwals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jadwalCountArgs} args - Arguments to filter Jadwals to count.
     * @example
     * // Count the number of Jadwals
     * const count = await prisma.jadwal.count({
     *   where: {
     *     // ... the filter for the Jadwals we want to count
     *   }
     * })
    **/
    count<T extends jadwalCountArgs>(
      args?: Subset<T, jadwalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JadwalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jadwal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JadwalAggregateArgs>(args: Subset<T, JadwalAggregateArgs>): Prisma.PrismaPromise<GetJadwalAggregateType<T>>

    /**
     * Group by Jadwal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jadwalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends jadwalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jadwalGroupByArgs['orderBy'] }
        : { orderBy?: jadwalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, jadwalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJadwalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the jadwal model
   */
  readonly fields: jadwalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for jadwal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jadwalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    matakuliah<T extends matakuliahDefaultArgs<ExtArgs> = {}>(args?: Subset<T, matakuliahDefaultArgs<ExtArgs>>): Prisma__matakuliahClient<$Result.GetResult<Prisma.$matakuliahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dosen<T extends dosenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, dosenDefaultArgs<ExtArgs>>): Prisma__dosenClient<$Result.GetResult<Prisma.$dosenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the jadwal model
   */
  interface jadwalFieldRefs {
    readonly kodemk: FieldRef<"jadwal", 'String'>
    readonly nip: FieldRef<"jadwal", 'String'>
    readonly ruangan: FieldRef<"jadwal", 'String'>
    readonly waktu: FieldRef<"jadwal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * jadwal findUnique
   */
  export type jadwalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal
     */
    select?: jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal
     */
    omit?: jadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwalInclude<ExtArgs> | null
    /**
     * Filter, which jadwal to fetch.
     */
    where: jadwalWhereUniqueInput
  }

  /**
   * jadwal findUniqueOrThrow
   */
  export type jadwalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal
     */
    select?: jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal
     */
    omit?: jadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwalInclude<ExtArgs> | null
    /**
     * Filter, which jadwal to fetch.
     */
    where: jadwalWhereUniqueInput
  }

  /**
   * jadwal findFirst
   */
  export type jadwalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal
     */
    select?: jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal
     */
    omit?: jadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwalInclude<ExtArgs> | null
    /**
     * Filter, which jadwal to fetch.
     */
    where?: jadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jadwals to fetch.
     */
    orderBy?: jadwalOrderByWithRelationInput | jadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jadwals.
     */
    cursor?: jadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jadwals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jadwals.
     */
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * jadwal findFirstOrThrow
   */
  export type jadwalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal
     */
    select?: jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal
     */
    omit?: jadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwalInclude<ExtArgs> | null
    /**
     * Filter, which jadwal to fetch.
     */
    where?: jadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jadwals to fetch.
     */
    orderBy?: jadwalOrderByWithRelationInput | jadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jadwals.
     */
    cursor?: jadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jadwals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jadwals.
     */
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * jadwal findMany
   */
  export type jadwalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal
     */
    select?: jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal
     */
    omit?: jadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwalInclude<ExtArgs> | null
    /**
     * Filter, which jadwals to fetch.
     */
    where?: jadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jadwals to fetch.
     */
    orderBy?: jadwalOrderByWithRelationInput | jadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing jadwals.
     */
    cursor?: jadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jadwals.
     */
    skip?: number
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * jadwal create
   */
  export type jadwalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal
     */
    select?: jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal
     */
    omit?: jadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwalInclude<ExtArgs> | null
    /**
     * The data needed to create a jadwal.
     */
    data: XOR<jadwalCreateInput, jadwalUncheckedCreateInput>
  }

  /**
   * jadwal createMany
   */
  export type jadwalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jadwals.
     */
    data: jadwalCreateManyInput | jadwalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * jadwal update
   */
  export type jadwalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal
     */
    select?: jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal
     */
    omit?: jadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwalInclude<ExtArgs> | null
    /**
     * The data needed to update a jadwal.
     */
    data: XOR<jadwalUpdateInput, jadwalUncheckedUpdateInput>
    /**
     * Choose, which jadwal to update.
     */
    where: jadwalWhereUniqueInput
  }

  /**
   * jadwal updateMany
   */
  export type jadwalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jadwals.
     */
    data: XOR<jadwalUpdateManyMutationInput, jadwalUncheckedUpdateManyInput>
    /**
     * Filter which jadwals to update
     */
    where?: jadwalWhereInput
    /**
     * Limit how many jadwals to update.
     */
    limit?: number
  }

  /**
   * jadwal upsert
   */
  export type jadwalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal
     */
    select?: jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal
     */
    omit?: jadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwalInclude<ExtArgs> | null
    /**
     * The filter to search for the jadwal to update in case it exists.
     */
    where: jadwalWhereUniqueInput
    /**
     * In case the jadwal found by the `where` argument doesn't exist, create a new jadwal with this data.
     */
    create: XOR<jadwalCreateInput, jadwalUncheckedCreateInput>
    /**
     * In case the jadwal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jadwalUpdateInput, jadwalUncheckedUpdateInput>
  }

  /**
   * jadwal delete
   */
  export type jadwalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal
     */
    select?: jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal
     */
    omit?: jadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwalInclude<ExtArgs> | null
    /**
     * Filter which jadwal to delete.
     */
    where: jadwalWhereUniqueInput
  }

  /**
   * jadwal deleteMany
   */
  export type jadwalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jadwals to delete
     */
    where?: jadwalWhereInput
    /**
     * Limit how many jadwals to delete.
     */
    limit?: number
  }

  /**
   * jadwal without action
   */
  export type jadwalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal
     */
    select?: jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal
     */
    omit?: jadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwalInclude<ExtArgs> | null
  }


  /**
   * Model mahasiswa
   */

  export type AggregateMahasiswa = {
    _count: MahasiswaCountAggregateOutputType | null
    _min: MahasiswaMinAggregateOutputType | null
    _max: MahasiswaMaxAggregateOutputType | null
  }

  export type MahasiswaMinAggregateOutputType = {
    nik: string | null
    nama: string | null
  }

  export type MahasiswaMaxAggregateOutputType = {
    nik: string | null
    nama: string | null
  }

  export type MahasiswaCountAggregateOutputType = {
    nik: number
    nama: number
    _all: number
  }


  export type MahasiswaMinAggregateInputType = {
    nik?: true
    nama?: true
  }

  export type MahasiswaMaxAggregateInputType = {
    nik?: true
    nama?: true
  }

  export type MahasiswaCountAggregateInputType = {
    nik?: true
    nama?: true
    _all?: true
  }

  export type MahasiswaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mahasiswa to aggregate.
     */
    where?: mahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mahasiswas to fetch.
     */
    orderBy?: mahasiswaOrderByWithRelationInput | mahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mahasiswas
    **/
    _count?: true | MahasiswaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MahasiswaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MahasiswaMaxAggregateInputType
  }

  export type GetMahasiswaAggregateType<T extends MahasiswaAggregateArgs> = {
        [P in keyof T & keyof AggregateMahasiswa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMahasiswa[P]>
      : GetScalarType<T[P], AggregateMahasiswa[P]>
  }




  export type mahasiswaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mahasiswaWhereInput
    orderBy?: mahasiswaOrderByWithAggregationInput | mahasiswaOrderByWithAggregationInput[]
    by: MahasiswaScalarFieldEnum[] | MahasiswaScalarFieldEnum
    having?: mahasiswaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MahasiswaCountAggregateInputType | true
    _min?: MahasiswaMinAggregateInputType
    _max?: MahasiswaMaxAggregateInputType
  }

  export type MahasiswaGroupByOutputType = {
    nik: string
    nama: string
    _count: MahasiswaCountAggregateOutputType | null
    _min: MahasiswaMinAggregateOutputType | null
    _max: MahasiswaMaxAggregateOutputType | null
  }

  type GetMahasiswaGroupByPayload<T extends mahasiswaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MahasiswaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MahasiswaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MahasiswaGroupByOutputType[P]>
            : GetScalarType<T[P], MahasiswaGroupByOutputType[P]>
        }
      >
    >


  export type mahasiswaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nik?: boolean
    nama?: boolean
    peminjaman?: boolean | mahasiswa$peminjamanArgs<ExtArgs>
    _count?: boolean | MahasiswaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mahasiswa"]>



  export type mahasiswaSelectScalar = {
    nik?: boolean
    nama?: boolean
  }

  export type mahasiswaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nik" | "nama", ExtArgs["result"]["mahasiswa"]>
  export type mahasiswaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peminjaman?: boolean | mahasiswa$peminjamanArgs<ExtArgs>
    _count?: boolean | MahasiswaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $mahasiswaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mahasiswa"
    objects: {
      peminjaman: Prisma.$peminjamanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nik: string
      nama: string
    }, ExtArgs["result"]["mahasiswa"]>
    composites: {}
  }

  type mahasiswaGetPayload<S extends boolean | null | undefined | mahasiswaDefaultArgs> = $Result.GetResult<Prisma.$mahasiswaPayload, S>

  type mahasiswaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mahasiswaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MahasiswaCountAggregateInputType | true
    }

  export interface mahasiswaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mahasiswa'], meta: { name: 'mahasiswa' } }
    /**
     * Find zero or one Mahasiswa that matches the filter.
     * @param {mahasiswaFindUniqueArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mahasiswaFindUniqueArgs>(args: SelectSubset<T, mahasiswaFindUniqueArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mahasiswa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mahasiswaFindUniqueOrThrowArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mahasiswaFindUniqueOrThrowArgs>(args: SelectSubset<T, mahasiswaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mahasiswa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mahasiswaFindFirstArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mahasiswaFindFirstArgs>(args?: SelectSubset<T, mahasiswaFindFirstArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mahasiswa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mahasiswaFindFirstOrThrowArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mahasiswaFindFirstOrThrowArgs>(args?: SelectSubset<T, mahasiswaFindFirstOrThrowArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mahasiswas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mahasiswaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mahasiswas
     * const mahasiswas = await prisma.mahasiswa.findMany()
     * 
     * // Get first 10 Mahasiswas
     * const mahasiswas = await prisma.mahasiswa.findMany({ take: 10 })
     * 
     * // Only select the `nik`
     * const mahasiswaWithNikOnly = await prisma.mahasiswa.findMany({ select: { nik: true } })
     * 
     */
    findMany<T extends mahasiswaFindManyArgs>(args?: SelectSubset<T, mahasiswaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mahasiswa.
     * @param {mahasiswaCreateArgs} args - Arguments to create a Mahasiswa.
     * @example
     * // Create one Mahasiswa
     * const Mahasiswa = await prisma.mahasiswa.create({
     *   data: {
     *     // ... data to create a Mahasiswa
     *   }
     * })
     * 
     */
    create<T extends mahasiswaCreateArgs>(args: SelectSubset<T, mahasiswaCreateArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mahasiswas.
     * @param {mahasiswaCreateManyArgs} args - Arguments to create many Mahasiswas.
     * @example
     * // Create many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mahasiswaCreateManyArgs>(args?: SelectSubset<T, mahasiswaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mahasiswa.
     * @param {mahasiswaDeleteArgs} args - Arguments to delete one Mahasiswa.
     * @example
     * // Delete one Mahasiswa
     * const Mahasiswa = await prisma.mahasiswa.delete({
     *   where: {
     *     // ... filter to delete one Mahasiswa
     *   }
     * })
     * 
     */
    delete<T extends mahasiswaDeleteArgs>(args: SelectSubset<T, mahasiswaDeleteArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mahasiswa.
     * @param {mahasiswaUpdateArgs} args - Arguments to update one Mahasiswa.
     * @example
     * // Update one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mahasiswaUpdateArgs>(args: SelectSubset<T, mahasiswaUpdateArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mahasiswas.
     * @param {mahasiswaDeleteManyArgs} args - Arguments to filter Mahasiswas to delete.
     * @example
     * // Delete a few Mahasiswas
     * const { count } = await prisma.mahasiswa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mahasiswaDeleteManyArgs>(args?: SelectSubset<T, mahasiswaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mahasiswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mahasiswaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mahasiswaUpdateManyArgs>(args: SelectSubset<T, mahasiswaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mahasiswa.
     * @param {mahasiswaUpsertArgs} args - Arguments to update or create a Mahasiswa.
     * @example
     * // Update or create a Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.upsert({
     *   create: {
     *     // ... data to create a Mahasiswa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mahasiswa we want to update
     *   }
     * })
     */
    upsert<T extends mahasiswaUpsertArgs>(args: SelectSubset<T, mahasiswaUpsertArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mahasiswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mahasiswaCountArgs} args - Arguments to filter Mahasiswas to count.
     * @example
     * // Count the number of Mahasiswas
     * const count = await prisma.mahasiswa.count({
     *   where: {
     *     // ... the filter for the Mahasiswas we want to count
     *   }
     * })
    **/
    count<T extends mahasiswaCountArgs>(
      args?: Subset<T, mahasiswaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MahasiswaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mahasiswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MahasiswaAggregateArgs>(args: Subset<T, MahasiswaAggregateArgs>): Prisma.PrismaPromise<GetMahasiswaAggregateType<T>>

    /**
     * Group by Mahasiswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mahasiswaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends mahasiswaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mahasiswaGroupByArgs['orderBy'] }
        : { orderBy?: mahasiswaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mahasiswaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMahasiswaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mahasiswa model
   */
  readonly fields: mahasiswaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mahasiswa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mahasiswaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    peminjaman<T extends mahasiswa$peminjamanArgs<ExtArgs> = {}>(args?: Subset<T, mahasiswa$peminjamanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the mahasiswa model
   */
  interface mahasiswaFieldRefs {
    readonly nik: FieldRef<"mahasiswa", 'String'>
    readonly nama: FieldRef<"mahasiswa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * mahasiswa findUnique
   */
  export type mahasiswaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which mahasiswa to fetch.
     */
    where: mahasiswaWhereUniqueInput
  }

  /**
   * mahasiswa findUniqueOrThrow
   */
  export type mahasiswaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which mahasiswa to fetch.
     */
    where: mahasiswaWhereUniqueInput
  }

  /**
   * mahasiswa findFirst
   */
  export type mahasiswaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which mahasiswa to fetch.
     */
    where?: mahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mahasiswas to fetch.
     */
    orderBy?: mahasiswaOrderByWithRelationInput | mahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mahasiswas.
     */
    cursor?: mahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mahasiswas.
     */
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * mahasiswa findFirstOrThrow
   */
  export type mahasiswaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which mahasiswa to fetch.
     */
    where?: mahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mahasiswas to fetch.
     */
    orderBy?: mahasiswaOrderByWithRelationInput | mahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mahasiswas.
     */
    cursor?: mahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mahasiswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mahasiswas.
     */
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * mahasiswa findMany
   */
  export type mahasiswaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * Filter, which mahasiswas to fetch.
     */
    where?: mahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mahasiswas to fetch.
     */
    orderBy?: mahasiswaOrderByWithRelationInput | mahasiswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mahasiswas.
     */
    cursor?: mahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mahasiswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mahasiswas.
     */
    skip?: number
    distinct?: MahasiswaScalarFieldEnum | MahasiswaScalarFieldEnum[]
  }

  /**
   * mahasiswa create
   */
  export type mahasiswaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * The data needed to create a mahasiswa.
     */
    data: XOR<mahasiswaCreateInput, mahasiswaUncheckedCreateInput>
  }

  /**
   * mahasiswa createMany
   */
  export type mahasiswaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mahasiswas.
     */
    data: mahasiswaCreateManyInput | mahasiswaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mahasiswa update
   */
  export type mahasiswaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * The data needed to update a mahasiswa.
     */
    data: XOR<mahasiswaUpdateInput, mahasiswaUncheckedUpdateInput>
    /**
     * Choose, which mahasiswa to update.
     */
    where: mahasiswaWhereUniqueInput
  }

  /**
   * mahasiswa updateMany
   */
  export type mahasiswaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mahasiswas.
     */
    data: XOR<mahasiswaUpdateManyMutationInput, mahasiswaUncheckedUpdateManyInput>
    /**
     * Filter which mahasiswas to update
     */
    where?: mahasiswaWhereInput
    /**
     * Limit how many mahasiswas to update.
     */
    limit?: number
  }

  /**
   * mahasiswa upsert
   */
  export type mahasiswaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * The filter to search for the mahasiswa to update in case it exists.
     */
    where: mahasiswaWhereUniqueInput
    /**
     * In case the mahasiswa found by the `where` argument doesn't exist, create a new mahasiswa with this data.
     */
    create: XOR<mahasiswaCreateInput, mahasiswaUncheckedCreateInput>
    /**
     * In case the mahasiswa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mahasiswaUpdateInput, mahasiswaUncheckedUpdateInput>
  }

  /**
   * mahasiswa delete
   */
  export type mahasiswaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
    /**
     * Filter which mahasiswa to delete.
     */
    where: mahasiswaWhereUniqueInput
  }

  /**
   * mahasiswa deleteMany
   */
  export type mahasiswaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mahasiswas to delete
     */
    where?: mahasiswaWhereInput
    /**
     * Limit how many mahasiswas to delete.
     */
    limit?: number
  }

  /**
   * mahasiswa.peminjaman
   */
  export type mahasiswa$peminjamanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
    where?: peminjamanWhereInput
    orderBy?: peminjamanOrderByWithRelationInput | peminjamanOrderByWithRelationInput[]
    cursor?: peminjamanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PeminjamanScalarFieldEnum | PeminjamanScalarFieldEnum[]
  }

  /**
   * mahasiswa without action
   */
  export type mahasiswaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mahasiswa
     */
    select?: mahasiswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mahasiswa
     */
    omit?: mahasiswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mahasiswaInclude<ExtArgs> | null
  }


  /**
   * Model matakuliah
   */

  export type AggregateMatakuliah = {
    _count: MatakuliahCountAggregateOutputType | null
    _avg: MatakuliahAvgAggregateOutputType | null
    _sum: MatakuliahSumAggregateOutputType | null
    _min: MatakuliahMinAggregateOutputType | null
    _max: MatakuliahMaxAggregateOutputType | null
  }

  export type MatakuliahAvgAggregateOutputType = {
    sks: number | null
  }

  export type MatakuliahSumAggregateOutputType = {
    sks: number | null
  }

  export type MatakuliahMinAggregateOutputType = {
    kode: string | null
    nama: string | null
    sks: number | null
  }

  export type MatakuliahMaxAggregateOutputType = {
    kode: string | null
    nama: string | null
    sks: number | null
  }

  export type MatakuliahCountAggregateOutputType = {
    kode: number
    nama: number
    sks: number
    _all: number
  }


  export type MatakuliahAvgAggregateInputType = {
    sks?: true
  }

  export type MatakuliahSumAggregateInputType = {
    sks?: true
  }

  export type MatakuliahMinAggregateInputType = {
    kode?: true
    nama?: true
    sks?: true
  }

  export type MatakuliahMaxAggregateInputType = {
    kode?: true
    nama?: true
    sks?: true
  }

  export type MatakuliahCountAggregateInputType = {
    kode?: true
    nama?: true
    sks?: true
    _all?: true
  }

  export type MatakuliahAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which matakuliah to aggregate.
     */
    where?: matakuliahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matakuliahs to fetch.
     */
    orderBy?: matakuliahOrderByWithRelationInput | matakuliahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: matakuliahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matakuliahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matakuliahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned matakuliahs
    **/
    _count?: true | MatakuliahCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatakuliahAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatakuliahSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatakuliahMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatakuliahMaxAggregateInputType
  }

  export type GetMatakuliahAggregateType<T extends MatakuliahAggregateArgs> = {
        [P in keyof T & keyof AggregateMatakuliah]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatakuliah[P]>
      : GetScalarType<T[P], AggregateMatakuliah[P]>
  }




  export type matakuliahGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: matakuliahWhereInput
    orderBy?: matakuliahOrderByWithAggregationInput | matakuliahOrderByWithAggregationInput[]
    by: MatakuliahScalarFieldEnum[] | MatakuliahScalarFieldEnum
    having?: matakuliahScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatakuliahCountAggregateInputType | true
    _avg?: MatakuliahAvgAggregateInputType
    _sum?: MatakuliahSumAggregateInputType
    _min?: MatakuliahMinAggregateInputType
    _max?: MatakuliahMaxAggregateInputType
  }

  export type MatakuliahGroupByOutputType = {
    kode: string
    nama: string
    sks: number
    _count: MatakuliahCountAggregateOutputType | null
    _avg: MatakuliahAvgAggregateOutputType | null
    _sum: MatakuliahSumAggregateOutputType | null
    _min: MatakuliahMinAggregateOutputType | null
    _max: MatakuliahMaxAggregateOutputType | null
  }

  type GetMatakuliahGroupByPayload<T extends matakuliahGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatakuliahGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatakuliahGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatakuliahGroupByOutputType[P]>
            : GetScalarType<T[P], MatakuliahGroupByOutputType[P]>
        }
      >
    >


  export type matakuliahSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    kode?: boolean
    nama?: boolean
    sks?: boolean
    jadwal?: boolean | matakuliah$jadwalArgs<ExtArgs>
    peminjaman?: boolean | matakuliah$peminjamanArgs<ExtArgs>
    _count?: boolean | MatakuliahCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matakuliah"]>



  export type matakuliahSelectScalar = {
    kode?: boolean
    nama?: boolean
    sks?: boolean
  }

  export type matakuliahOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"kode" | "nama" | "sks", ExtArgs["result"]["matakuliah"]>
  export type matakuliahInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jadwal?: boolean | matakuliah$jadwalArgs<ExtArgs>
    peminjaman?: boolean | matakuliah$peminjamanArgs<ExtArgs>
    _count?: boolean | MatakuliahCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $matakuliahPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "matakuliah"
    objects: {
      jadwal: Prisma.$jadwalPayload<ExtArgs>[]
      peminjaman: Prisma.$peminjamanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      kode: string
      nama: string
      sks: number
    }, ExtArgs["result"]["matakuliah"]>
    composites: {}
  }

  type matakuliahGetPayload<S extends boolean | null | undefined | matakuliahDefaultArgs> = $Result.GetResult<Prisma.$matakuliahPayload, S>

  type matakuliahCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<matakuliahFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatakuliahCountAggregateInputType | true
    }

  export interface matakuliahDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['matakuliah'], meta: { name: 'matakuliah' } }
    /**
     * Find zero or one Matakuliah that matches the filter.
     * @param {matakuliahFindUniqueArgs} args - Arguments to find a Matakuliah
     * @example
     * // Get one Matakuliah
     * const matakuliah = await prisma.matakuliah.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends matakuliahFindUniqueArgs>(args: SelectSubset<T, matakuliahFindUniqueArgs<ExtArgs>>): Prisma__matakuliahClient<$Result.GetResult<Prisma.$matakuliahPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Matakuliah that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {matakuliahFindUniqueOrThrowArgs} args - Arguments to find a Matakuliah
     * @example
     * // Get one Matakuliah
     * const matakuliah = await prisma.matakuliah.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends matakuliahFindUniqueOrThrowArgs>(args: SelectSubset<T, matakuliahFindUniqueOrThrowArgs<ExtArgs>>): Prisma__matakuliahClient<$Result.GetResult<Prisma.$matakuliahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matakuliah that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matakuliahFindFirstArgs} args - Arguments to find a Matakuliah
     * @example
     * // Get one Matakuliah
     * const matakuliah = await prisma.matakuliah.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends matakuliahFindFirstArgs>(args?: SelectSubset<T, matakuliahFindFirstArgs<ExtArgs>>): Prisma__matakuliahClient<$Result.GetResult<Prisma.$matakuliahPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matakuliah that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matakuliahFindFirstOrThrowArgs} args - Arguments to find a Matakuliah
     * @example
     * // Get one Matakuliah
     * const matakuliah = await prisma.matakuliah.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends matakuliahFindFirstOrThrowArgs>(args?: SelectSubset<T, matakuliahFindFirstOrThrowArgs<ExtArgs>>): Prisma__matakuliahClient<$Result.GetResult<Prisma.$matakuliahPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matakuliahs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matakuliahFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matakuliahs
     * const matakuliahs = await prisma.matakuliah.findMany()
     * 
     * // Get first 10 Matakuliahs
     * const matakuliahs = await prisma.matakuliah.findMany({ take: 10 })
     * 
     * // Only select the `kode`
     * const matakuliahWithKodeOnly = await prisma.matakuliah.findMany({ select: { kode: true } })
     * 
     */
    findMany<T extends matakuliahFindManyArgs>(args?: SelectSubset<T, matakuliahFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$matakuliahPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Matakuliah.
     * @param {matakuliahCreateArgs} args - Arguments to create a Matakuliah.
     * @example
     * // Create one Matakuliah
     * const Matakuliah = await prisma.matakuliah.create({
     *   data: {
     *     // ... data to create a Matakuliah
     *   }
     * })
     * 
     */
    create<T extends matakuliahCreateArgs>(args: SelectSubset<T, matakuliahCreateArgs<ExtArgs>>): Prisma__matakuliahClient<$Result.GetResult<Prisma.$matakuliahPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matakuliahs.
     * @param {matakuliahCreateManyArgs} args - Arguments to create many Matakuliahs.
     * @example
     * // Create many Matakuliahs
     * const matakuliah = await prisma.matakuliah.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends matakuliahCreateManyArgs>(args?: SelectSubset<T, matakuliahCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Matakuliah.
     * @param {matakuliahDeleteArgs} args - Arguments to delete one Matakuliah.
     * @example
     * // Delete one Matakuliah
     * const Matakuliah = await prisma.matakuliah.delete({
     *   where: {
     *     // ... filter to delete one Matakuliah
     *   }
     * })
     * 
     */
    delete<T extends matakuliahDeleteArgs>(args: SelectSubset<T, matakuliahDeleteArgs<ExtArgs>>): Prisma__matakuliahClient<$Result.GetResult<Prisma.$matakuliahPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Matakuliah.
     * @param {matakuliahUpdateArgs} args - Arguments to update one Matakuliah.
     * @example
     * // Update one Matakuliah
     * const matakuliah = await prisma.matakuliah.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends matakuliahUpdateArgs>(args: SelectSubset<T, matakuliahUpdateArgs<ExtArgs>>): Prisma__matakuliahClient<$Result.GetResult<Prisma.$matakuliahPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matakuliahs.
     * @param {matakuliahDeleteManyArgs} args - Arguments to filter Matakuliahs to delete.
     * @example
     * // Delete a few Matakuliahs
     * const { count } = await prisma.matakuliah.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends matakuliahDeleteManyArgs>(args?: SelectSubset<T, matakuliahDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matakuliahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matakuliahUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matakuliahs
     * const matakuliah = await prisma.matakuliah.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends matakuliahUpdateManyArgs>(args: SelectSubset<T, matakuliahUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Matakuliah.
     * @param {matakuliahUpsertArgs} args - Arguments to update or create a Matakuliah.
     * @example
     * // Update or create a Matakuliah
     * const matakuliah = await prisma.matakuliah.upsert({
     *   create: {
     *     // ... data to create a Matakuliah
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Matakuliah we want to update
     *   }
     * })
     */
    upsert<T extends matakuliahUpsertArgs>(args: SelectSubset<T, matakuliahUpsertArgs<ExtArgs>>): Prisma__matakuliahClient<$Result.GetResult<Prisma.$matakuliahPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matakuliahs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matakuliahCountArgs} args - Arguments to filter Matakuliahs to count.
     * @example
     * // Count the number of Matakuliahs
     * const count = await prisma.matakuliah.count({
     *   where: {
     *     // ... the filter for the Matakuliahs we want to count
     *   }
     * })
    **/
    count<T extends matakuliahCountArgs>(
      args?: Subset<T, matakuliahCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatakuliahCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Matakuliah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatakuliahAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatakuliahAggregateArgs>(args: Subset<T, MatakuliahAggregateArgs>): Prisma.PrismaPromise<GetMatakuliahAggregateType<T>>

    /**
     * Group by Matakuliah.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matakuliahGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends matakuliahGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: matakuliahGroupByArgs['orderBy'] }
        : { orderBy?: matakuliahGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, matakuliahGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatakuliahGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the matakuliah model
   */
  readonly fields: matakuliahFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for matakuliah.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__matakuliahClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jadwal<T extends matakuliah$jadwalArgs<ExtArgs> = {}>(args?: Subset<T, matakuliah$jadwalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jadwalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    peminjaman<T extends matakuliah$peminjamanArgs<ExtArgs> = {}>(args?: Subset<T, matakuliah$peminjamanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the matakuliah model
   */
  interface matakuliahFieldRefs {
    readonly kode: FieldRef<"matakuliah", 'String'>
    readonly nama: FieldRef<"matakuliah", 'String'>
    readonly sks: FieldRef<"matakuliah", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * matakuliah findUnique
   */
  export type matakuliahFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matakuliah
     */
    select?: matakuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matakuliah
     */
    omit?: matakuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matakuliahInclude<ExtArgs> | null
    /**
     * Filter, which matakuliah to fetch.
     */
    where: matakuliahWhereUniqueInput
  }

  /**
   * matakuliah findUniqueOrThrow
   */
  export type matakuliahFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matakuliah
     */
    select?: matakuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matakuliah
     */
    omit?: matakuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matakuliahInclude<ExtArgs> | null
    /**
     * Filter, which matakuliah to fetch.
     */
    where: matakuliahWhereUniqueInput
  }

  /**
   * matakuliah findFirst
   */
  export type matakuliahFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matakuliah
     */
    select?: matakuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matakuliah
     */
    omit?: matakuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matakuliahInclude<ExtArgs> | null
    /**
     * Filter, which matakuliah to fetch.
     */
    where?: matakuliahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matakuliahs to fetch.
     */
    orderBy?: matakuliahOrderByWithRelationInput | matakuliahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for matakuliahs.
     */
    cursor?: matakuliahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matakuliahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matakuliahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of matakuliahs.
     */
    distinct?: MatakuliahScalarFieldEnum | MatakuliahScalarFieldEnum[]
  }

  /**
   * matakuliah findFirstOrThrow
   */
  export type matakuliahFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matakuliah
     */
    select?: matakuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matakuliah
     */
    omit?: matakuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matakuliahInclude<ExtArgs> | null
    /**
     * Filter, which matakuliah to fetch.
     */
    where?: matakuliahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matakuliahs to fetch.
     */
    orderBy?: matakuliahOrderByWithRelationInput | matakuliahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for matakuliahs.
     */
    cursor?: matakuliahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matakuliahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matakuliahs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of matakuliahs.
     */
    distinct?: MatakuliahScalarFieldEnum | MatakuliahScalarFieldEnum[]
  }

  /**
   * matakuliah findMany
   */
  export type matakuliahFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matakuliah
     */
    select?: matakuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matakuliah
     */
    omit?: matakuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matakuliahInclude<ExtArgs> | null
    /**
     * Filter, which matakuliahs to fetch.
     */
    where?: matakuliahWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matakuliahs to fetch.
     */
    orderBy?: matakuliahOrderByWithRelationInput | matakuliahOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing matakuliahs.
     */
    cursor?: matakuliahWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matakuliahs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matakuliahs.
     */
    skip?: number
    distinct?: MatakuliahScalarFieldEnum | MatakuliahScalarFieldEnum[]
  }

  /**
   * matakuliah create
   */
  export type matakuliahCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matakuliah
     */
    select?: matakuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matakuliah
     */
    omit?: matakuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matakuliahInclude<ExtArgs> | null
    /**
     * The data needed to create a matakuliah.
     */
    data: XOR<matakuliahCreateInput, matakuliahUncheckedCreateInput>
  }

  /**
   * matakuliah createMany
   */
  export type matakuliahCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many matakuliahs.
     */
    data: matakuliahCreateManyInput | matakuliahCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * matakuliah update
   */
  export type matakuliahUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matakuliah
     */
    select?: matakuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matakuliah
     */
    omit?: matakuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matakuliahInclude<ExtArgs> | null
    /**
     * The data needed to update a matakuliah.
     */
    data: XOR<matakuliahUpdateInput, matakuliahUncheckedUpdateInput>
    /**
     * Choose, which matakuliah to update.
     */
    where: matakuliahWhereUniqueInput
  }

  /**
   * matakuliah updateMany
   */
  export type matakuliahUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update matakuliahs.
     */
    data: XOR<matakuliahUpdateManyMutationInput, matakuliahUncheckedUpdateManyInput>
    /**
     * Filter which matakuliahs to update
     */
    where?: matakuliahWhereInput
    /**
     * Limit how many matakuliahs to update.
     */
    limit?: number
  }

  /**
   * matakuliah upsert
   */
  export type matakuliahUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matakuliah
     */
    select?: matakuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matakuliah
     */
    omit?: matakuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matakuliahInclude<ExtArgs> | null
    /**
     * The filter to search for the matakuliah to update in case it exists.
     */
    where: matakuliahWhereUniqueInput
    /**
     * In case the matakuliah found by the `where` argument doesn't exist, create a new matakuliah with this data.
     */
    create: XOR<matakuliahCreateInput, matakuliahUncheckedCreateInput>
    /**
     * In case the matakuliah was found with the provided `where` argument, update it with this data.
     */
    update: XOR<matakuliahUpdateInput, matakuliahUncheckedUpdateInput>
  }

  /**
   * matakuliah delete
   */
  export type matakuliahDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matakuliah
     */
    select?: matakuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matakuliah
     */
    omit?: matakuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matakuliahInclude<ExtArgs> | null
    /**
     * Filter which matakuliah to delete.
     */
    where: matakuliahWhereUniqueInput
  }

  /**
   * matakuliah deleteMany
   */
  export type matakuliahDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which matakuliahs to delete
     */
    where?: matakuliahWhereInput
    /**
     * Limit how many matakuliahs to delete.
     */
    limit?: number
  }

  /**
   * matakuliah.jadwal
   */
  export type matakuliah$jadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal
     */
    select?: jadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal
     */
    omit?: jadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwalInclude<ExtArgs> | null
    where?: jadwalWhereInput
    orderBy?: jadwalOrderByWithRelationInput | jadwalOrderByWithRelationInput[]
    cursor?: jadwalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * matakuliah.peminjaman
   */
  export type matakuliah$peminjamanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
    where?: peminjamanWhereInput
    orderBy?: peminjamanOrderByWithRelationInput | peminjamanOrderByWithRelationInput[]
    cursor?: peminjamanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PeminjamanScalarFieldEnum | PeminjamanScalarFieldEnum[]
  }

  /**
   * matakuliah without action
   */
  export type matakuliahDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the matakuliah
     */
    select?: matakuliahSelect<ExtArgs> | null
    /**
     * Omit specific fields from the matakuliah
     */
    omit?: matakuliahOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: matakuliahInclude<ExtArgs> | null
  }


  /**
   * Model peminjaman
   */

  export type AggregatePeminjaman = {
    _count: PeminjamanCountAggregateOutputType | null
    _min: PeminjamanMinAggregateOutputType | null
    _max: PeminjamanMaxAggregateOutputType | null
  }

  export type PeminjamanMinAggregateOutputType = {
    nik: string | null
    kodemk: string | null
    kodein: string | null
  }

  export type PeminjamanMaxAggregateOutputType = {
    nik: string | null
    kodemk: string | null
    kodein: string | null
  }

  export type PeminjamanCountAggregateOutputType = {
    nik: number
    kodemk: number
    kodein: number
    _all: number
  }


  export type PeminjamanMinAggregateInputType = {
    nik?: true
    kodemk?: true
    kodein?: true
  }

  export type PeminjamanMaxAggregateInputType = {
    nik?: true
    kodemk?: true
    kodein?: true
  }

  export type PeminjamanCountAggregateInputType = {
    nik?: true
    kodemk?: true
    kodein?: true
    _all?: true
  }

  export type PeminjamanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which peminjaman to aggregate.
     */
    where?: peminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of peminjamen to fetch.
     */
    orderBy?: peminjamanOrderByWithRelationInput | peminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: peminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` peminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` peminjamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned peminjamen
    **/
    _count?: true | PeminjamanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeminjamanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeminjamanMaxAggregateInputType
  }

  export type GetPeminjamanAggregateType<T extends PeminjamanAggregateArgs> = {
        [P in keyof T & keyof AggregatePeminjaman]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeminjaman[P]>
      : GetScalarType<T[P], AggregatePeminjaman[P]>
  }




  export type peminjamanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: peminjamanWhereInput
    orderBy?: peminjamanOrderByWithAggregationInput | peminjamanOrderByWithAggregationInput[]
    by: PeminjamanScalarFieldEnum[] | PeminjamanScalarFieldEnum
    having?: peminjamanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeminjamanCountAggregateInputType | true
    _min?: PeminjamanMinAggregateInputType
    _max?: PeminjamanMaxAggregateInputType
  }

  export type PeminjamanGroupByOutputType = {
    nik: string
    kodemk: string
    kodein: string
    _count: PeminjamanCountAggregateOutputType | null
    _min: PeminjamanMinAggregateOutputType | null
    _max: PeminjamanMaxAggregateOutputType | null
  }

  type GetPeminjamanGroupByPayload<T extends peminjamanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeminjamanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeminjamanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeminjamanGroupByOutputType[P]>
            : GetScalarType<T[P], PeminjamanGroupByOutputType[P]>
        }
      >
    >


  export type peminjamanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nik?: boolean
    kodemk?: boolean
    kodein?: boolean
    infokus_bagus?: boolean | infokus_bagusDefaultArgs<ExtArgs>
    matakuliah?: boolean | matakuliahDefaultArgs<ExtArgs>
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peminjaman"]>



  export type peminjamanSelectScalar = {
    nik?: boolean
    kodemk?: boolean
    kodein?: boolean
  }

  export type peminjamanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nik" | "kodemk" | "kodein", ExtArgs["result"]["peminjaman"]>
  export type peminjamanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    infokus_bagus?: boolean | infokus_bagusDefaultArgs<ExtArgs>
    matakuliah?: boolean | matakuliahDefaultArgs<ExtArgs>
    mahasiswa?: boolean | mahasiswaDefaultArgs<ExtArgs>
  }

  export type $peminjamanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "peminjaman"
    objects: {
      infokus_bagus: Prisma.$infokus_bagusPayload<ExtArgs>
      matakuliah: Prisma.$matakuliahPayload<ExtArgs>
      mahasiswa: Prisma.$mahasiswaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      nik: string
      kodemk: string
      kodein: string
    }, ExtArgs["result"]["peminjaman"]>
    composites: {}
  }

  type peminjamanGetPayload<S extends boolean | null | undefined | peminjamanDefaultArgs> = $Result.GetResult<Prisma.$peminjamanPayload, S>

  type peminjamanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<peminjamanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PeminjamanCountAggregateInputType | true
    }

  export interface peminjamanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['peminjaman'], meta: { name: 'peminjaman' } }
    /**
     * Find zero or one Peminjaman that matches the filter.
     * @param {peminjamanFindUniqueArgs} args - Arguments to find a Peminjaman
     * @example
     * // Get one Peminjaman
     * const peminjaman = await prisma.peminjaman.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends peminjamanFindUniqueArgs>(args: SelectSubset<T, peminjamanFindUniqueArgs<ExtArgs>>): Prisma__peminjamanClient<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Peminjaman that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {peminjamanFindUniqueOrThrowArgs} args - Arguments to find a Peminjaman
     * @example
     * // Get one Peminjaman
     * const peminjaman = await prisma.peminjaman.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends peminjamanFindUniqueOrThrowArgs>(args: SelectSubset<T, peminjamanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__peminjamanClient<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peminjaman that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peminjamanFindFirstArgs} args - Arguments to find a Peminjaman
     * @example
     * // Get one Peminjaman
     * const peminjaman = await prisma.peminjaman.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends peminjamanFindFirstArgs>(args?: SelectSubset<T, peminjamanFindFirstArgs<ExtArgs>>): Prisma__peminjamanClient<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peminjaman that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peminjamanFindFirstOrThrowArgs} args - Arguments to find a Peminjaman
     * @example
     * // Get one Peminjaman
     * const peminjaman = await prisma.peminjaman.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends peminjamanFindFirstOrThrowArgs>(args?: SelectSubset<T, peminjamanFindFirstOrThrowArgs<ExtArgs>>): Prisma__peminjamanClient<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Peminjamen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peminjamanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Peminjamen
     * const peminjamen = await prisma.peminjaman.findMany()
     * 
     * // Get first 10 Peminjamen
     * const peminjamen = await prisma.peminjaman.findMany({ take: 10 })
     * 
     * // Only select the `nik`
     * const peminjamanWithNikOnly = await prisma.peminjaman.findMany({ select: { nik: true } })
     * 
     */
    findMany<T extends peminjamanFindManyArgs>(args?: SelectSubset<T, peminjamanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Peminjaman.
     * @param {peminjamanCreateArgs} args - Arguments to create a Peminjaman.
     * @example
     * // Create one Peminjaman
     * const Peminjaman = await prisma.peminjaman.create({
     *   data: {
     *     // ... data to create a Peminjaman
     *   }
     * })
     * 
     */
    create<T extends peminjamanCreateArgs>(args: SelectSubset<T, peminjamanCreateArgs<ExtArgs>>): Prisma__peminjamanClient<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Peminjamen.
     * @param {peminjamanCreateManyArgs} args - Arguments to create many Peminjamen.
     * @example
     * // Create many Peminjamen
     * const peminjaman = await prisma.peminjaman.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends peminjamanCreateManyArgs>(args?: SelectSubset<T, peminjamanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Peminjaman.
     * @param {peminjamanDeleteArgs} args - Arguments to delete one Peminjaman.
     * @example
     * // Delete one Peminjaman
     * const Peminjaman = await prisma.peminjaman.delete({
     *   where: {
     *     // ... filter to delete one Peminjaman
     *   }
     * })
     * 
     */
    delete<T extends peminjamanDeleteArgs>(args: SelectSubset<T, peminjamanDeleteArgs<ExtArgs>>): Prisma__peminjamanClient<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Peminjaman.
     * @param {peminjamanUpdateArgs} args - Arguments to update one Peminjaman.
     * @example
     * // Update one Peminjaman
     * const peminjaman = await prisma.peminjaman.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends peminjamanUpdateArgs>(args: SelectSubset<T, peminjamanUpdateArgs<ExtArgs>>): Prisma__peminjamanClient<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Peminjamen.
     * @param {peminjamanDeleteManyArgs} args - Arguments to filter Peminjamen to delete.
     * @example
     * // Delete a few Peminjamen
     * const { count } = await prisma.peminjaman.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends peminjamanDeleteManyArgs>(args?: SelectSubset<T, peminjamanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Peminjamen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peminjamanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Peminjamen
     * const peminjaman = await prisma.peminjaman.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends peminjamanUpdateManyArgs>(args: SelectSubset<T, peminjamanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Peminjaman.
     * @param {peminjamanUpsertArgs} args - Arguments to update or create a Peminjaman.
     * @example
     * // Update or create a Peminjaman
     * const peminjaman = await prisma.peminjaman.upsert({
     *   create: {
     *     // ... data to create a Peminjaman
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Peminjaman we want to update
     *   }
     * })
     */
    upsert<T extends peminjamanUpsertArgs>(args: SelectSubset<T, peminjamanUpsertArgs<ExtArgs>>): Prisma__peminjamanClient<$Result.GetResult<Prisma.$peminjamanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Peminjamen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peminjamanCountArgs} args - Arguments to filter Peminjamen to count.
     * @example
     * // Count the number of Peminjamen
     * const count = await prisma.peminjaman.count({
     *   where: {
     *     // ... the filter for the Peminjamen we want to count
     *   }
     * })
    **/
    count<T extends peminjamanCountArgs>(
      args?: Subset<T, peminjamanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeminjamanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Peminjaman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PeminjamanAggregateArgs>(args: Subset<T, PeminjamanAggregateArgs>): Prisma.PrismaPromise<GetPeminjamanAggregateType<T>>

    /**
     * Group by Peminjaman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {peminjamanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends peminjamanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: peminjamanGroupByArgs['orderBy'] }
        : { orderBy?: peminjamanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, peminjamanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeminjamanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the peminjaman model
   */
  readonly fields: peminjamanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for peminjaman.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__peminjamanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    infokus_bagus<T extends infokus_bagusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, infokus_bagusDefaultArgs<ExtArgs>>): Prisma__infokus_bagusClient<$Result.GetResult<Prisma.$infokus_bagusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    matakuliah<T extends matakuliahDefaultArgs<ExtArgs> = {}>(args?: Subset<T, matakuliahDefaultArgs<ExtArgs>>): Prisma__matakuliahClient<$Result.GetResult<Prisma.$matakuliahPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mahasiswa<T extends mahasiswaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, mahasiswaDefaultArgs<ExtArgs>>): Prisma__mahasiswaClient<$Result.GetResult<Prisma.$mahasiswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the peminjaman model
   */
  interface peminjamanFieldRefs {
    readonly nik: FieldRef<"peminjaman", 'String'>
    readonly kodemk: FieldRef<"peminjaman", 'String'>
    readonly kodein: FieldRef<"peminjaman", 'String'>
  }
    

  // Custom InputTypes
  /**
   * peminjaman findUnique
   */
  export type peminjamanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
    /**
     * Filter, which peminjaman to fetch.
     */
    where: peminjamanWhereUniqueInput
  }

  /**
   * peminjaman findUniqueOrThrow
   */
  export type peminjamanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
    /**
     * Filter, which peminjaman to fetch.
     */
    where: peminjamanWhereUniqueInput
  }

  /**
   * peminjaman findFirst
   */
  export type peminjamanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
    /**
     * Filter, which peminjaman to fetch.
     */
    where?: peminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of peminjamen to fetch.
     */
    orderBy?: peminjamanOrderByWithRelationInput | peminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for peminjamen.
     */
    cursor?: peminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` peminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` peminjamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of peminjamen.
     */
    distinct?: PeminjamanScalarFieldEnum | PeminjamanScalarFieldEnum[]
  }

  /**
   * peminjaman findFirstOrThrow
   */
  export type peminjamanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
    /**
     * Filter, which peminjaman to fetch.
     */
    where?: peminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of peminjamen to fetch.
     */
    orderBy?: peminjamanOrderByWithRelationInput | peminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for peminjamen.
     */
    cursor?: peminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` peminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` peminjamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of peminjamen.
     */
    distinct?: PeminjamanScalarFieldEnum | PeminjamanScalarFieldEnum[]
  }

  /**
   * peminjaman findMany
   */
  export type peminjamanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
    /**
     * Filter, which peminjamen to fetch.
     */
    where?: peminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of peminjamen to fetch.
     */
    orderBy?: peminjamanOrderByWithRelationInput | peminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing peminjamen.
     */
    cursor?: peminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` peminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` peminjamen.
     */
    skip?: number
    distinct?: PeminjamanScalarFieldEnum | PeminjamanScalarFieldEnum[]
  }

  /**
   * peminjaman create
   */
  export type peminjamanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
    /**
     * The data needed to create a peminjaman.
     */
    data: XOR<peminjamanCreateInput, peminjamanUncheckedCreateInput>
  }

  /**
   * peminjaman createMany
   */
  export type peminjamanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many peminjamen.
     */
    data: peminjamanCreateManyInput | peminjamanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * peminjaman update
   */
  export type peminjamanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
    /**
     * The data needed to update a peminjaman.
     */
    data: XOR<peminjamanUpdateInput, peminjamanUncheckedUpdateInput>
    /**
     * Choose, which peminjaman to update.
     */
    where: peminjamanWhereUniqueInput
  }

  /**
   * peminjaman updateMany
   */
  export type peminjamanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update peminjamen.
     */
    data: XOR<peminjamanUpdateManyMutationInput, peminjamanUncheckedUpdateManyInput>
    /**
     * Filter which peminjamen to update
     */
    where?: peminjamanWhereInput
    /**
     * Limit how many peminjamen to update.
     */
    limit?: number
  }

  /**
   * peminjaman upsert
   */
  export type peminjamanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
    /**
     * The filter to search for the peminjaman to update in case it exists.
     */
    where: peminjamanWhereUniqueInput
    /**
     * In case the peminjaman found by the `where` argument doesn't exist, create a new peminjaman with this data.
     */
    create: XOR<peminjamanCreateInput, peminjamanUncheckedCreateInput>
    /**
     * In case the peminjaman was found with the provided `where` argument, update it with this data.
     */
    update: XOR<peminjamanUpdateInput, peminjamanUncheckedUpdateInput>
  }

  /**
   * peminjaman delete
   */
  export type peminjamanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
    /**
     * Filter which peminjaman to delete.
     */
    where: peminjamanWhereUniqueInput
  }

  /**
   * peminjaman deleteMany
   */
  export type peminjamanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which peminjamen to delete
     */
    where?: peminjamanWhereInput
    /**
     * Limit how many peminjamen to delete.
     */
    limit?: number
  }

  /**
   * peminjaman without action
   */
  export type peminjamanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the peminjaman
     */
    select?: peminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the peminjaman
     */
    omit?: peminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: peminjamanInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DosenScalarFieldEnum: {
    nip: 'nip',
    nama: 'nama'
  };

  export type DosenScalarFieldEnum = (typeof DosenScalarFieldEnum)[keyof typeof DosenScalarFieldEnum]


  export const Infokus_bagusScalarFieldEnum: {
    kode: 'kode',
    merek: 'merek'
  };

  export type Infokus_bagusScalarFieldEnum = (typeof Infokus_bagusScalarFieldEnum)[keyof typeof Infokus_bagusScalarFieldEnum]


  export const Infokus_rusakScalarFieldEnum: {
    kode: 'kode',
    merek: 'merek'
  };

  export type Infokus_rusakScalarFieldEnum = (typeof Infokus_rusakScalarFieldEnum)[keyof typeof Infokus_rusakScalarFieldEnum]


  export const JadwalScalarFieldEnum: {
    kodemk: 'kodemk',
    nip: 'nip',
    ruangan: 'ruangan',
    waktu: 'waktu'
  };

  export type JadwalScalarFieldEnum = (typeof JadwalScalarFieldEnum)[keyof typeof JadwalScalarFieldEnum]


  export const MahasiswaScalarFieldEnum: {
    nik: 'nik',
    nama: 'nama'
  };

  export type MahasiswaScalarFieldEnum = (typeof MahasiswaScalarFieldEnum)[keyof typeof MahasiswaScalarFieldEnum]


  export const MatakuliahScalarFieldEnum: {
    kode: 'kode',
    nama: 'nama',
    sks: 'sks'
  };

  export type MatakuliahScalarFieldEnum = (typeof MatakuliahScalarFieldEnum)[keyof typeof MatakuliahScalarFieldEnum]


  export const PeminjamanScalarFieldEnum: {
    nik: 'nik',
    kodemk: 'kodemk',
    kodein: 'kodein'
  };

  export type PeminjamanScalarFieldEnum = (typeof PeminjamanScalarFieldEnum)[keyof typeof PeminjamanScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const dosenOrderByRelevanceFieldEnum: {
    nip: 'nip',
    nama: 'nama'
  };

  export type dosenOrderByRelevanceFieldEnum = (typeof dosenOrderByRelevanceFieldEnum)[keyof typeof dosenOrderByRelevanceFieldEnum]


  export const infokus_bagusOrderByRelevanceFieldEnum: {
    kode: 'kode',
    merek: 'merek'
  };

  export type infokus_bagusOrderByRelevanceFieldEnum = (typeof infokus_bagusOrderByRelevanceFieldEnum)[keyof typeof infokus_bagusOrderByRelevanceFieldEnum]


  export const infokus_rusakOrderByRelevanceFieldEnum: {
    kode: 'kode',
    merek: 'merek'
  };

  export type infokus_rusakOrderByRelevanceFieldEnum = (typeof infokus_rusakOrderByRelevanceFieldEnum)[keyof typeof infokus_rusakOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const jadwalOrderByRelevanceFieldEnum: {
    kodemk: 'kodemk',
    nip: 'nip',
    ruangan: 'ruangan',
    waktu: 'waktu'
  };

  export type jadwalOrderByRelevanceFieldEnum = (typeof jadwalOrderByRelevanceFieldEnum)[keyof typeof jadwalOrderByRelevanceFieldEnum]


  export const mahasiswaOrderByRelevanceFieldEnum: {
    nik: 'nik',
    nama: 'nama'
  };

  export type mahasiswaOrderByRelevanceFieldEnum = (typeof mahasiswaOrderByRelevanceFieldEnum)[keyof typeof mahasiswaOrderByRelevanceFieldEnum]


  export const matakuliahOrderByRelevanceFieldEnum: {
    kode: 'kode',
    nama: 'nama'
  };

  export type matakuliahOrderByRelevanceFieldEnum = (typeof matakuliahOrderByRelevanceFieldEnum)[keyof typeof matakuliahOrderByRelevanceFieldEnum]


  export const peminjamanOrderByRelevanceFieldEnum: {
    nik: 'nik',
    kodemk: 'kodemk',
    kodein: 'kodein'
  };

  export type peminjamanOrderByRelevanceFieldEnum = (typeof peminjamanOrderByRelevanceFieldEnum)[keyof typeof peminjamanOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password',
    name: 'name'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type dosenWhereInput = {
    AND?: dosenWhereInput | dosenWhereInput[]
    OR?: dosenWhereInput[]
    NOT?: dosenWhereInput | dosenWhereInput[]
    nip?: StringFilter<"dosen"> | string
    nama?: StringFilter<"dosen"> | string
    jadwal?: JadwalListRelationFilter
  }

  export type dosenOrderByWithRelationInput = {
    nip?: SortOrder
    nama?: SortOrder
    jadwal?: jadwalOrderByRelationAggregateInput
    _relevance?: dosenOrderByRelevanceInput
  }

  export type dosenWhereUniqueInput = Prisma.AtLeast<{
    nip?: string
    AND?: dosenWhereInput | dosenWhereInput[]
    OR?: dosenWhereInput[]
    NOT?: dosenWhereInput | dosenWhereInput[]
    nama?: StringFilter<"dosen"> | string
    jadwal?: JadwalListRelationFilter
  }, "nip">

  export type dosenOrderByWithAggregationInput = {
    nip?: SortOrder
    nama?: SortOrder
    _count?: dosenCountOrderByAggregateInput
    _max?: dosenMaxOrderByAggregateInput
    _min?: dosenMinOrderByAggregateInput
  }

  export type dosenScalarWhereWithAggregatesInput = {
    AND?: dosenScalarWhereWithAggregatesInput | dosenScalarWhereWithAggregatesInput[]
    OR?: dosenScalarWhereWithAggregatesInput[]
    NOT?: dosenScalarWhereWithAggregatesInput | dosenScalarWhereWithAggregatesInput[]
    nip?: StringWithAggregatesFilter<"dosen"> | string
    nama?: StringWithAggregatesFilter<"dosen"> | string
  }

  export type infokus_bagusWhereInput = {
    AND?: infokus_bagusWhereInput | infokus_bagusWhereInput[]
    OR?: infokus_bagusWhereInput[]
    NOT?: infokus_bagusWhereInput | infokus_bagusWhereInput[]
    kode?: StringFilter<"infokus_bagus"> | string
    merek?: StringFilter<"infokus_bagus"> | string
    peminjaman?: PeminjamanListRelationFilter
  }

  export type infokus_bagusOrderByWithRelationInput = {
    kode?: SortOrder
    merek?: SortOrder
    peminjaman?: peminjamanOrderByRelationAggregateInput
    _relevance?: infokus_bagusOrderByRelevanceInput
  }

  export type infokus_bagusWhereUniqueInput = Prisma.AtLeast<{
    kode?: string
    AND?: infokus_bagusWhereInput | infokus_bagusWhereInput[]
    OR?: infokus_bagusWhereInput[]
    NOT?: infokus_bagusWhereInput | infokus_bagusWhereInput[]
    merek?: StringFilter<"infokus_bagus"> | string
    peminjaman?: PeminjamanListRelationFilter
  }, "kode">

  export type infokus_bagusOrderByWithAggregationInput = {
    kode?: SortOrder
    merek?: SortOrder
    _count?: infokus_bagusCountOrderByAggregateInput
    _max?: infokus_bagusMaxOrderByAggregateInput
    _min?: infokus_bagusMinOrderByAggregateInput
  }

  export type infokus_bagusScalarWhereWithAggregatesInput = {
    AND?: infokus_bagusScalarWhereWithAggregatesInput | infokus_bagusScalarWhereWithAggregatesInput[]
    OR?: infokus_bagusScalarWhereWithAggregatesInput[]
    NOT?: infokus_bagusScalarWhereWithAggregatesInput | infokus_bagusScalarWhereWithAggregatesInput[]
    kode?: StringWithAggregatesFilter<"infokus_bagus"> | string
    merek?: StringWithAggregatesFilter<"infokus_bagus"> | string
  }

  export type infokus_rusakWhereInput = {
    AND?: infokus_rusakWhereInput | infokus_rusakWhereInput[]
    OR?: infokus_rusakWhereInput[]
    NOT?: infokus_rusakWhereInput | infokus_rusakWhereInput[]
    kode?: StringFilter<"infokus_rusak"> | string
    merek?: StringFilter<"infokus_rusak"> | string
  }

  export type infokus_rusakOrderByWithRelationInput = {
    kode?: SortOrder
    merek?: SortOrder
    _relevance?: infokus_rusakOrderByRelevanceInput
  }

  export type infokus_rusakWhereUniqueInput = Prisma.AtLeast<{
    kode?: string
    AND?: infokus_rusakWhereInput | infokus_rusakWhereInput[]
    OR?: infokus_rusakWhereInput[]
    NOT?: infokus_rusakWhereInput | infokus_rusakWhereInput[]
    merek?: StringFilter<"infokus_rusak"> | string
  }, "kode">

  export type infokus_rusakOrderByWithAggregationInput = {
    kode?: SortOrder
    merek?: SortOrder
    _count?: infokus_rusakCountOrderByAggregateInput
    _max?: infokus_rusakMaxOrderByAggregateInput
    _min?: infokus_rusakMinOrderByAggregateInput
  }

  export type infokus_rusakScalarWhereWithAggregatesInput = {
    AND?: infokus_rusakScalarWhereWithAggregatesInput | infokus_rusakScalarWhereWithAggregatesInput[]
    OR?: infokus_rusakScalarWhereWithAggregatesInput[]
    NOT?: infokus_rusakScalarWhereWithAggregatesInput | infokus_rusakScalarWhereWithAggregatesInput[]
    kode?: StringWithAggregatesFilter<"infokus_rusak"> | string
    merek?: StringWithAggregatesFilter<"infokus_rusak"> | string
  }

  export type jadwalWhereInput = {
    AND?: jadwalWhereInput | jadwalWhereInput[]
    OR?: jadwalWhereInput[]
    NOT?: jadwalWhereInput | jadwalWhereInput[]
    kodemk?: StringFilter<"jadwal"> | string
    nip?: StringFilter<"jadwal"> | string
    ruangan?: StringFilter<"jadwal"> | string
    waktu?: StringNullableFilter<"jadwal"> | string | null
    matakuliah?: XOR<MatakuliahScalarRelationFilter, matakuliahWhereInput>
    dosen?: XOR<DosenScalarRelationFilter, dosenWhereInput>
  }

  export type jadwalOrderByWithRelationInput = {
    kodemk?: SortOrder
    nip?: SortOrder
    ruangan?: SortOrder
    waktu?: SortOrderInput | SortOrder
    matakuliah?: matakuliahOrderByWithRelationInput
    dosen?: dosenOrderByWithRelationInput
    _relevance?: jadwalOrderByRelevanceInput
  }

  export type jadwalWhereUniqueInput = Prisma.AtLeast<{
    kodemk_nip?: jadwalKodemkNipCompoundUniqueInput
    AND?: jadwalWhereInput | jadwalWhereInput[]
    OR?: jadwalWhereInput[]
    NOT?: jadwalWhereInput | jadwalWhereInput[]
    kodemk?: StringFilter<"jadwal"> | string
    nip?: StringFilter<"jadwal"> | string
    ruangan?: StringFilter<"jadwal"> | string
    waktu?: StringNullableFilter<"jadwal"> | string | null
    matakuliah?: XOR<MatakuliahScalarRelationFilter, matakuliahWhereInput>
    dosen?: XOR<DosenScalarRelationFilter, dosenWhereInput>
  }, "kodemk_nip">

  export type jadwalOrderByWithAggregationInput = {
    kodemk?: SortOrder
    nip?: SortOrder
    ruangan?: SortOrder
    waktu?: SortOrderInput | SortOrder
    _count?: jadwalCountOrderByAggregateInput
    _max?: jadwalMaxOrderByAggregateInput
    _min?: jadwalMinOrderByAggregateInput
  }

  export type jadwalScalarWhereWithAggregatesInput = {
    AND?: jadwalScalarWhereWithAggregatesInput | jadwalScalarWhereWithAggregatesInput[]
    OR?: jadwalScalarWhereWithAggregatesInput[]
    NOT?: jadwalScalarWhereWithAggregatesInput | jadwalScalarWhereWithAggregatesInput[]
    kodemk?: StringWithAggregatesFilter<"jadwal"> | string
    nip?: StringWithAggregatesFilter<"jadwal"> | string
    ruangan?: StringWithAggregatesFilter<"jadwal"> | string
    waktu?: StringNullableWithAggregatesFilter<"jadwal"> | string | null
  }

  export type mahasiswaWhereInput = {
    AND?: mahasiswaWhereInput | mahasiswaWhereInput[]
    OR?: mahasiswaWhereInput[]
    NOT?: mahasiswaWhereInput | mahasiswaWhereInput[]
    nik?: StringFilter<"mahasiswa"> | string
    nama?: StringFilter<"mahasiswa"> | string
    peminjaman?: PeminjamanListRelationFilter
  }

  export type mahasiswaOrderByWithRelationInput = {
    nik?: SortOrder
    nama?: SortOrder
    peminjaman?: peminjamanOrderByRelationAggregateInput
    _relevance?: mahasiswaOrderByRelevanceInput
  }

  export type mahasiswaWhereUniqueInput = Prisma.AtLeast<{
    nik?: string
    AND?: mahasiswaWhereInput | mahasiswaWhereInput[]
    OR?: mahasiswaWhereInput[]
    NOT?: mahasiswaWhereInput | mahasiswaWhereInput[]
    nama?: StringFilter<"mahasiswa"> | string
    peminjaman?: PeminjamanListRelationFilter
  }, "nik">

  export type mahasiswaOrderByWithAggregationInput = {
    nik?: SortOrder
    nama?: SortOrder
    _count?: mahasiswaCountOrderByAggregateInput
    _max?: mahasiswaMaxOrderByAggregateInput
    _min?: mahasiswaMinOrderByAggregateInput
  }

  export type mahasiswaScalarWhereWithAggregatesInput = {
    AND?: mahasiswaScalarWhereWithAggregatesInput | mahasiswaScalarWhereWithAggregatesInput[]
    OR?: mahasiswaScalarWhereWithAggregatesInput[]
    NOT?: mahasiswaScalarWhereWithAggregatesInput | mahasiswaScalarWhereWithAggregatesInput[]
    nik?: StringWithAggregatesFilter<"mahasiswa"> | string
    nama?: StringWithAggregatesFilter<"mahasiswa"> | string
  }

  export type matakuliahWhereInput = {
    AND?: matakuliahWhereInput | matakuliahWhereInput[]
    OR?: matakuliahWhereInput[]
    NOT?: matakuliahWhereInput | matakuliahWhereInput[]
    kode?: StringFilter<"matakuliah"> | string
    nama?: StringFilter<"matakuliah"> | string
    sks?: IntFilter<"matakuliah"> | number
    jadwal?: JadwalListRelationFilter
    peminjaman?: PeminjamanListRelationFilter
  }

  export type matakuliahOrderByWithRelationInput = {
    kode?: SortOrder
    nama?: SortOrder
    sks?: SortOrder
    jadwal?: jadwalOrderByRelationAggregateInput
    peminjaman?: peminjamanOrderByRelationAggregateInput
    _relevance?: matakuliahOrderByRelevanceInput
  }

  export type matakuliahWhereUniqueInput = Prisma.AtLeast<{
    kode?: string
    AND?: matakuliahWhereInput | matakuliahWhereInput[]
    OR?: matakuliahWhereInput[]
    NOT?: matakuliahWhereInput | matakuliahWhereInput[]
    nama?: StringFilter<"matakuliah"> | string
    sks?: IntFilter<"matakuliah"> | number
    jadwal?: JadwalListRelationFilter
    peminjaman?: PeminjamanListRelationFilter
  }, "kode">

  export type matakuliahOrderByWithAggregationInput = {
    kode?: SortOrder
    nama?: SortOrder
    sks?: SortOrder
    _count?: matakuliahCountOrderByAggregateInput
    _avg?: matakuliahAvgOrderByAggregateInput
    _max?: matakuliahMaxOrderByAggregateInput
    _min?: matakuliahMinOrderByAggregateInput
    _sum?: matakuliahSumOrderByAggregateInput
  }

  export type matakuliahScalarWhereWithAggregatesInput = {
    AND?: matakuliahScalarWhereWithAggregatesInput | matakuliahScalarWhereWithAggregatesInput[]
    OR?: matakuliahScalarWhereWithAggregatesInput[]
    NOT?: matakuliahScalarWhereWithAggregatesInput | matakuliahScalarWhereWithAggregatesInput[]
    kode?: StringWithAggregatesFilter<"matakuliah"> | string
    nama?: StringWithAggregatesFilter<"matakuliah"> | string
    sks?: IntWithAggregatesFilter<"matakuliah"> | number
  }

  export type peminjamanWhereInput = {
    AND?: peminjamanWhereInput | peminjamanWhereInput[]
    OR?: peminjamanWhereInput[]
    NOT?: peminjamanWhereInput | peminjamanWhereInput[]
    nik?: StringFilter<"peminjaman"> | string
    kodemk?: StringFilter<"peminjaman"> | string
    kodein?: StringFilter<"peminjaman"> | string
    infokus_bagus?: XOR<Infokus_bagusScalarRelationFilter, infokus_bagusWhereInput>
    matakuliah?: XOR<MatakuliahScalarRelationFilter, matakuliahWhereInput>
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, mahasiswaWhereInput>
  }

  export type peminjamanOrderByWithRelationInput = {
    nik?: SortOrder
    kodemk?: SortOrder
    kodein?: SortOrder
    infokus_bagus?: infokus_bagusOrderByWithRelationInput
    matakuliah?: matakuliahOrderByWithRelationInput
    mahasiswa?: mahasiswaOrderByWithRelationInput
    _relevance?: peminjamanOrderByRelevanceInput
  }

  export type peminjamanWhereUniqueInput = Prisma.AtLeast<{
    nik_kodemk_kodein?: peminjamanNikKodemkKodeinCompoundUniqueInput
    AND?: peminjamanWhereInput | peminjamanWhereInput[]
    OR?: peminjamanWhereInput[]
    NOT?: peminjamanWhereInput | peminjamanWhereInput[]
    nik?: StringFilter<"peminjaman"> | string
    kodemk?: StringFilter<"peminjaman"> | string
    kodein?: StringFilter<"peminjaman"> | string
    infokus_bagus?: XOR<Infokus_bagusScalarRelationFilter, infokus_bagusWhereInput>
    matakuliah?: XOR<MatakuliahScalarRelationFilter, matakuliahWhereInput>
    mahasiswa?: XOR<MahasiswaScalarRelationFilter, mahasiswaWhereInput>
  }, "nik_kodemk_kodein">

  export type peminjamanOrderByWithAggregationInput = {
    nik?: SortOrder
    kodemk?: SortOrder
    kodein?: SortOrder
    _count?: peminjamanCountOrderByAggregateInput
    _max?: peminjamanMaxOrderByAggregateInput
    _min?: peminjamanMinOrderByAggregateInput
  }

  export type peminjamanScalarWhereWithAggregatesInput = {
    AND?: peminjamanScalarWhereWithAggregatesInput | peminjamanScalarWhereWithAggregatesInput[]
    OR?: peminjamanScalarWhereWithAggregatesInput[]
    NOT?: peminjamanScalarWhereWithAggregatesInput | peminjamanScalarWhereWithAggregatesInput[]
    nik?: StringWithAggregatesFilter<"peminjaman"> | string
    kodemk?: StringWithAggregatesFilter<"peminjaman"> | string
    kodein?: StringWithAggregatesFilter<"peminjaman"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
  }

  export type dosenCreateInput = {
    nip: string
    nama: string
    jadwal?: jadwalCreateNestedManyWithoutDosenInput
  }

  export type dosenUncheckedCreateInput = {
    nip: string
    nama: string
    jadwal?: jadwalUncheckedCreateNestedManyWithoutDosenInput
  }

  export type dosenUpdateInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jadwal?: jadwalUpdateManyWithoutDosenNestedInput
  }

  export type dosenUncheckedUpdateInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jadwal?: jadwalUncheckedUpdateManyWithoutDosenNestedInput
  }

  export type dosenCreateManyInput = {
    nip: string
    nama: string
  }

  export type dosenUpdateManyMutationInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type dosenUncheckedUpdateManyInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type infokus_bagusCreateInput = {
    kode: string
    merek: string
    peminjaman?: peminjamanCreateNestedManyWithoutInfokus_bagusInput
  }

  export type infokus_bagusUncheckedCreateInput = {
    kode: string
    merek: string
    peminjaman?: peminjamanUncheckedCreateNestedManyWithoutInfokus_bagusInput
  }

  export type infokus_bagusUpdateInput = {
    kode?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
    peminjaman?: peminjamanUpdateManyWithoutInfokus_bagusNestedInput
  }

  export type infokus_bagusUncheckedUpdateInput = {
    kode?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
    peminjaman?: peminjamanUncheckedUpdateManyWithoutInfokus_bagusNestedInput
  }

  export type infokus_bagusCreateManyInput = {
    kode: string
    merek: string
  }

  export type infokus_bagusUpdateManyMutationInput = {
    kode?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
  }

  export type infokus_bagusUncheckedUpdateManyInput = {
    kode?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
  }

  export type infokus_rusakCreateInput = {
    kode: string
    merek: string
  }

  export type infokus_rusakUncheckedCreateInput = {
    kode: string
    merek: string
  }

  export type infokus_rusakUpdateInput = {
    kode?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
  }

  export type infokus_rusakUncheckedUpdateInput = {
    kode?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
  }

  export type infokus_rusakCreateManyInput = {
    kode: string
    merek: string
  }

  export type infokus_rusakUpdateManyMutationInput = {
    kode?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
  }

  export type infokus_rusakUncheckedUpdateManyInput = {
    kode?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
  }

  export type jadwalCreateInput = {
    ruangan: string
    waktu?: string | null
    matakuliah: matakuliahCreateNestedOneWithoutJadwalInput
    dosen: dosenCreateNestedOneWithoutJadwalInput
  }

  export type jadwalUncheckedCreateInput = {
    kodemk: string
    nip: string
    ruangan: string
    waktu?: string | null
  }

  export type jadwalUpdateInput = {
    ruangan?: StringFieldUpdateOperationsInput | string
    waktu?: NullableStringFieldUpdateOperationsInput | string | null
    matakuliah?: matakuliahUpdateOneRequiredWithoutJadwalNestedInput
    dosen?: dosenUpdateOneRequiredWithoutJadwalNestedInput
  }

  export type jadwalUncheckedUpdateInput = {
    kodemk?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    ruangan?: StringFieldUpdateOperationsInput | string
    waktu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type jadwalCreateManyInput = {
    kodemk: string
    nip: string
    ruangan: string
    waktu?: string | null
  }

  export type jadwalUpdateManyMutationInput = {
    ruangan?: StringFieldUpdateOperationsInput | string
    waktu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type jadwalUncheckedUpdateManyInput = {
    kodemk?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    ruangan?: StringFieldUpdateOperationsInput | string
    waktu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type mahasiswaCreateInput = {
    nik: string
    nama: string
    peminjaman?: peminjamanCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaUncheckedCreateInput = {
    nik: string
    nama: string
    peminjaman?: peminjamanUncheckedCreateNestedManyWithoutMahasiswaInput
  }

  export type mahasiswaUpdateInput = {
    nik?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    peminjaman?: peminjamanUpdateManyWithoutMahasiswaNestedInput
  }

  export type mahasiswaUncheckedUpdateInput = {
    nik?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    peminjaman?: peminjamanUncheckedUpdateManyWithoutMahasiswaNestedInput
  }

  export type mahasiswaCreateManyInput = {
    nik: string
    nama: string
  }

  export type mahasiswaUpdateManyMutationInput = {
    nik?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type mahasiswaUncheckedUpdateManyInput = {
    nik?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type matakuliahCreateInput = {
    kode: string
    nama: string
    sks: number
    jadwal?: jadwalCreateNestedManyWithoutMatakuliahInput
    peminjaman?: peminjamanCreateNestedManyWithoutMatakuliahInput
  }

  export type matakuliahUncheckedCreateInput = {
    kode: string
    nama: string
    sks: number
    jadwal?: jadwalUncheckedCreateNestedManyWithoutMatakuliahInput
    peminjaman?: peminjamanUncheckedCreateNestedManyWithoutMatakuliahInput
  }

  export type matakuliahUpdateInput = {
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    sks?: IntFieldUpdateOperationsInput | number
    jadwal?: jadwalUpdateManyWithoutMatakuliahNestedInput
    peminjaman?: peminjamanUpdateManyWithoutMatakuliahNestedInput
  }

  export type matakuliahUncheckedUpdateInput = {
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    sks?: IntFieldUpdateOperationsInput | number
    jadwal?: jadwalUncheckedUpdateManyWithoutMatakuliahNestedInput
    peminjaman?: peminjamanUncheckedUpdateManyWithoutMatakuliahNestedInput
  }

  export type matakuliahCreateManyInput = {
    kode: string
    nama: string
    sks: number
  }

  export type matakuliahUpdateManyMutationInput = {
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    sks?: IntFieldUpdateOperationsInput | number
  }

  export type matakuliahUncheckedUpdateManyInput = {
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    sks?: IntFieldUpdateOperationsInput | number
  }

  export type peminjamanCreateInput = {
    infokus_bagus: infokus_bagusCreateNestedOneWithoutPeminjamanInput
    matakuliah: matakuliahCreateNestedOneWithoutPeminjamanInput
    mahasiswa: mahasiswaCreateNestedOneWithoutPeminjamanInput
  }

  export type peminjamanUncheckedCreateInput = {
    nik: string
    kodemk: string
    kodein: string
  }

  export type peminjamanUpdateInput = {
    infokus_bagus?: infokus_bagusUpdateOneRequiredWithoutPeminjamanNestedInput
    matakuliah?: matakuliahUpdateOneRequiredWithoutPeminjamanNestedInput
    mahasiswa?: mahasiswaUpdateOneRequiredWithoutPeminjamanNestedInput
  }

  export type peminjamanUncheckedUpdateInput = {
    nik?: StringFieldUpdateOperationsInput | string
    kodemk?: StringFieldUpdateOperationsInput | string
    kodein?: StringFieldUpdateOperationsInput | string
  }

  export type peminjamanCreateManyInput = {
    nik: string
    kodemk: string
    kodein: string
  }

  export type peminjamanUpdateManyMutationInput = {

  }

  export type peminjamanUncheckedUpdateManyInput = {
    nik?: StringFieldUpdateOperationsInput | string
    kodemk?: StringFieldUpdateOperationsInput | string
    kodein?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    name: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name: string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    name: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type JadwalListRelationFilter = {
    every?: jadwalWhereInput
    some?: jadwalWhereInput
    none?: jadwalWhereInput
  }

  export type jadwalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type dosenOrderByRelevanceInput = {
    fields: dosenOrderByRelevanceFieldEnum | dosenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type dosenCountOrderByAggregateInput = {
    nip?: SortOrder
    nama?: SortOrder
  }

  export type dosenMaxOrderByAggregateInput = {
    nip?: SortOrder
    nama?: SortOrder
  }

  export type dosenMinOrderByAggregateInput = {
    nip?: SortOrder
    nama?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type PeminjamanListRelationFilter = {
    every?: peminjamanWhereInput
    some?: peminjamanWhereInput
    none?: peminjamanWhereInput
  }

  export type peminjamanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type infokus_bagusOrderByRelevanceInput = {
    fields: infokus_bagusOrderByRelevanceFieldEnum | infokus_bagusOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type infokus_bagusCountOrderByAggregateInput = {
    kode?: SortOrder
    merek?: SortOrder
  }

  export type infokus_bagusMaxOrderByAggregateInput = {
    kode?: SortOrder
    merek?: SortOrder
  }

  export type infokus_bagusMinOrderByAggregateInput = {
    kode?: SortOrder
    merek?: SortOrder
  }

  export type infokus_rusakOrderByRelevanceInput = {
    fields: infokus_rusakOrderByRelevanceFieldEnum | infokus_rusakOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type infokus_rusakCountOrderByAggregateInput = {
    kode?: SortOrder
    merek?: SortOrder
  }

  export type infokus_rusakMaxOrderByAggregateInput = {
    kode?: SortOrder
    merek?: SortOrder
  }

  export type infokus_rusakMinOrderByAggregateInput = {
    kode?: SortOrder
    merek?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MatakuliahScalarRelationFilter = {
    is?: matakuliahWhereInput
    isNot?: matakuliahWhereInput
  }

  export type DosenScalarRelationFilter = {
    is?: dosenWhereInput
    isNot?: dosenWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type jadwalOrderByRelevanceInput = {
    fields: jadwalOrderByRelevanceFieldEnum | jadwalOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type jadwalKodemkNipCompoundUniqueInput = {
    kodemk: string
    nip: string
  }

  export type jadwalCountOrderByAggregateInput = {
    kodemk?: SortOrder
    nip?: SortOrder
    ruangan?: SortOrder
    waktu?: SortOrder
  }

  export type jadwalMaxOrderByAggregateInput = {
    kodemk?: SortOrder
    nip?: SortOrder
    ruangan?: SortOrder
    waktu?: SortOrder
  }

  export type jadwalMinOrderByAggregateInput = {
    kodemk?: SortOrder
    nip?: SortOrder
    ruangan?: SortOrder
    waktu?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type mahasiswaOrderByRelevanceInput = {
    fields: mahasiswaOrderByRelevanceFieldEnum | mahasiswaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type mahasiswaCountOrderByAggregateInput = {
    nik?: SortOrder
    nama?: SortOrder
  }

  export type mahasiswaMaxOrderByAggregateInput = {
    nik?: SortOrder
    nama?: SortOrder
  }

  export type mahasiswaMinOrderByAggregateInput = {
    nik?: SortOrder
    nama?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type matakuliahOrderByRelevanceInput = {
    fields: matakuliahOrderByRelevanceFieldEnum | matakuliahOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type matakuliahCountOrderByAggregateInput = {
    kode?: SortOrder
    nama?: SortOrder
    sks?: SortOrder
  }

  export type matakuliahAvgOrderByAggregateInput = {
    sks?: SortOrder
  }

  export type matakuliahMaxOrderByAggregateInput = {
    kode?: SortOrder
    nama?: SortOrder
    sks?: SortOrder
  }

  export type matakuliahMinOrderByAggregateInput = {
    kode?: SortOrder
    nama?: SortOrder
    sks?: SortOrder
  }

  export type matakuliahSumOrderByAggregateInput = {
    sks?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type Infokus_bagusScalarRelationFilter = {
    is?: infokus_bagusWhereInput
    isNot?: infokus_bagusWhereInput
  }

  export type MahasiswaScalarRelationFilter = {
    is?: mahasiswaWhereInput
    isNot?: mahasiswaWhereInput
  }

  export type peminjamanOrderByRelevanceInput = {
    fields: peminjamanOrderByRelevanceFieldEnum | peminjamanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type peminjamanNikKodemkKodeinCompoundUniqueInput = {
    nik: string
    kodemk: string
    kodein: string
  }

  export type peminjamanCountOrderByAggregateInput = {
    nik?: SortOrder
    kodemk?: SortOrder
    kodein?: SortOrder
  }

  export type peminjamanMaxOrderByAggregateInput = {
    nik?: SortOrder
    kodemk?: SortOrder
    kodein?: SortOrder
  }

  export type peminjamanMinOrderByAggregateInput = {
    nik?: SortOrder
    kodemk?: SortOrder
    kodein?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type jadwalCreateNestedManyWithoutDosenInput = {
    create?: XOR<jadwalCreateWithoutDosenInput, jadwalUncheckedCreateWithoutDosenInput> | jadwalCreateWithoutDosenInput[] | jadwalUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: jadwalCreateOrConnectWithoutDosenInput | jadwalCreateOrConnectWithoutDosenInput[]
    createMany?: jadwalCreateManyDosenInputEnvelope
    connect?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
  }

  export type jadwalUncheckedCreateNestedManyWithoutDosenInput = {
    create?: XOR<jadwalCreateWithoutDosenInput, jadwalUncheckedCreateWithoutDosenInput> | jadwalCreateWithoutDosenInput[] | jadwalUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: jadwalCreateOrConnectWithoutDosenInput | jadwalCreateOrConnectWithoutDosenInput[]
    createMany?: jadwalCreateManyDosenInputEnvelope
    connect?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type jadwalUpdateManyWithoutDosenNestedInput = {
    create?: XOR<jadwalCreateWithoutDosenInput, jadwalUncheckedCreateWithoutDosenInput> | jadwalCreateWithoutDosenInput[] | jadwalUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: jadwalCreateOrConnectWithoutDosenInput | jadwalCreateOrConnectWithoutDosenInput[]
    upsert?: jadwalUpsertWithWhereUniqueWithoutDosenInput | jadwalUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: jadwalCreateManyDosenInputEnvelope
    set?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    disconnect?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    delete?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    connect?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    update?: jadwalUpdateWithWhereUniqueWithoutDosenInput | jadwalUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: jadwalUpdateManyWithWhereWithoutDosenInput | jadwalUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: jadwalScalarWhereInput | jadwalScalarWhereInput[]
  }

  export type jadwalUncheckedUpdateManyWithoutDosenNestedInput = {
    create?: XOR<jadwalCreateWithoutDosenInput, jadwalUncheckedCreateWithoutDosenInput> | jadwalCreateWithoutDosenInput[] | jadwalUncheckedCreateWithoutDosenInput[]
    connectOrCreate?: jadwalCreateOrConnectWithoutDosenInput | jadwalCreateOrConnectWithoutDosenInput[]
    upsert?: jadwalUpsertWithWhereUniqueWithoutDosenInput | jadwalUpsertWithWhereUniqueWithoutDosenInput[]
    createMany?: jadwalCreateManyDosenInputEnvelope
    set?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    disconnect?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    delete?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    connect?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    update?: jadwalUpdateWithWhereUniqueWithoutDosenInput | jadwalUpdateWithWhereUniqueWithoutDosenInput[]
    updateMany?: jadwalUpdateManyWithWhereWithoutDosenInput | jadwalUpdateManyWithWhereWithoutDosenInput[]
    deleteMany?: jadwalScalarWhereInput | jadwalScalarWhereInput[]
  }

  export type peminjamanCreateNestedManyWithoutInfokus_bagusInput = {
    create?: XOR<peminjamanCreateWithoutInfokus_bagusInput, peminjamanUncheckedCreateWithoutInfokus_bagusInput> | peminjamanCreateWithoutInfokus_bagusInput[] | peminjamanUncheckedCreateWithoutInfokus_bagusInput[]
    connectOrCreate?: peminjamanCreateOrConnectWithoutInfokus_bagusInput | peminjamanCreateOrConnectWithoutInfokus_bagusInput[]
    createMany?: peminjamanCreateManyInfokus_bagusInputEnvelope
    connect?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
  }

  export type peminjamanUncheckedCreateNestedManyWithoutInfokus_bagusInput = {
    create?: XOR<peminjamanCreateWithoutInfokus_bagusInput, peminjamanUncheckedCreateWithoutInfokus_bagusInput> | peminjamanCreateWithoutInfokus_bagusInput[] | peminjamanUncheckedCreateWithoutInfokus_bagusInput[]
    connectOrCreate?: peminjamanCreateOrConnectWithoutInfokus_bagusInput | peminjamanCreateOrConnectWithoutInfokus_bagusInput[]
    createMany?: peminjamanCreateManyInfokus_bagusInputEnvelope
    connect?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
  }

  export type peminjamanUpdateManyWithoutInfokus_bagusNestedInput = {
    create?: XOR<peminjamanCreateWithoutInfokus_bagusInput, peminjamanUncheckedCreateWithoutInfokus_bagusInput> | peminjamanCreateWithoutInfokus_bagusInput[] | peminjamanUncheckedCreateWithoutInfokus_bagusInput[]
    connectOrCreate?: peminjamanCreateOrConnectWithoutInfokus_bagusInput | peminjamanCreateOrConnectWithoutInfokus_bagusInput[]
    upsert?: peminjamanUpsertWithWhereUniqueWithoutInfokus_bagusInput | peminjamanUpsertWithWhereUniqueWithoutInfokus_bagusInput[]
    createMany?: peminjamanCreateManyInfokus_bagusInputEnvelope
    set?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
    disconnect?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
    delete?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
    connect?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
    update?: peminjamanUpdateWithWhereUniqueWithoutInfokus_bagusInput | peminjamanUpdateWithWhereUniqueWithoutInfokus_bagusInput[]
    updateMany?: peminjamanUpdateManyWithWhereWithoutInfokus_bagusInput | peminjamanUpdateManyWithWhereWithoutInfokus_bagusInput[]
    deleteMany?: peminjamanScalarWhereInput | peminjamanScalarWhereInput[]
  }

  export type peminjamanUncheckedUpdateManyWithoutInfokus_bagusNestedInput = {
    create?: XOR<peminjamanCreateWithoutInfokus_bagusInput, peminjamanUncheckedCreateWithoutInfokus_bagusInput> | peminjamanCreateWithoutInfokus_bagusInput[] | peminjamanUncheckedCreateWithoutInfokus_bagusInput[]
    connectOrCreate?: peminjamanCreateOrConnectWithoutInfokus_bagusInput | peminjamanCreateOrConnectWithoutInfokus_bagusInput[]
    upsert?: peminjamanUpsertWithWhereUniqueWithoutInfokus_bagusInput | peminjamanUpsertWithWhereUniqueWithoutInfokus_bagusInput[]
    createMany?: peminjamanCreateManyInfokus_bagusInputEnvelope
    set?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
    disconnect?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
    delete?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
    connect?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
    update?: peminjamanUpdateWithWhereUniqueWithoutInfokus_bagusInput | peminjamanUpdateWithWhereUniqueWithoutInfokus_bagusInput[]
    updateMany?: peminjamanUpdateManyWithWhereWithoutInfokus_bagusInput | peminjamanUpdateManyWithWhereWithoutInfokus_bagusInput[]
    deleteMany?: peminjamanScalarWhereInput | peminjamanScalarWhereInput[]
  }

  export type matakuliahCreateNestedOneWithoutJadwalInput = {
    create?: XOR<matakuliahCreateWithoutJadwalInput, matakuliahUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: matakuliahCreateOrConnectWithoutJadwalInput
    connect?: matakuliahWhereUniqueInput
  }

  export type dosenCreateNestedOneWithoutJadwalInput = {
    create?: XOR<dosenCreateWithoutJadwalInput, dosenUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: dosenCreateOrConnectWithoutJadwalInput
    connect?: dosenWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type matakuliahUpdateOneRequiredWithoutJadwalNestedInput = {
    create?: XOR<matakuliahCreateWithoutJadwalInput, matakuliahUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: matakuliahCreateOrConnectWithoutJadwalInput
    upsert?: matakuliahUpsertWithoutJadwalInput
    connect?: matakuliahWhereUniqueInput
    update?: XOR<XOR<matakuliahUpdateToOneWithWhereWithoutJadwalInput, matakuliahUpdateWithoutJadwalInput>, matakuliahUncheckedUpdateWithoutJadwalInput>
  }

  export type dosenUpdateOneRequiredWithoutJadwalNestedInput = {
    create?: XOR<dosenCreateWithoutJadwalInput, dosenUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: dosenCreateOrConnectWithoutJadwalInput
    upsert?: dosenUpsertWithoutJadwalInput
    connect?: dosenWhereUniqueInput
    update?: XOR<XOR<dosenUpdateToOneWithWhereWithoutJadwalInput, dosenUpdateWithoutJadwalInput>, dosenUncheckedUpdateWithoutJadwalInput>
  }

  export type peminjamanCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<peminjamanCreateWithoutMahasiswaInput, peminjamanUncheckedCreateWithoutMahasiswaInput> | peminjamanCreateWithoutMahasiswaInput[] | peminjamanUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: peminjamanCreateOrConnectWithoutMahasiswaInput | peminjamanCreateOrConnectWithoutMahasiswaInput[]
    createMany?: peminjamanCreateManyMahasiswaInputEnvelope
    connect?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
  }

  export type peminjamanUncheckedCreateNestedManyWithoutMahasiswaInput = {
    create?: XOR<peminjamanCreateWithoutMahasiswaInput, peminjamanUncheckedCreateWithoutMahasiswaInput> | peminjamanCreateWithoutMahasiswaInput[] | peminjamanUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: peminjamanCreateOrConnectWithoutMahasiswaInput | peminjamanCreateOrConnectWithoutMahasiswaInput[]
    createMany?: peminjamanCreateManyMahasiswaInputEnvelope
    connect?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
  }

  export type peminjamanUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<peminjamanCreateWithoutMahasiswaInput, peminjamanUncheckedCreateWithoutMahasiswaInput> | peminjamanCreateWithoutMahasiswaInput[] | peminjamanUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: peminjamanCreateOrConnectWithoutMahasiswaInput | peminjamanCreateOrConnectWithoutMahasiswaInput[]
    upsert?: peminjamanUpsertWithWhereUniqueWithoutMahasiswaInput | peminjamanUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: peminjamanCreateManyMahasiswaInputEnvelope
    set?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
    disconnect?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
    delete?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
    connect?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
    update?: peminjamanUpdateWithWhereUniqueWithoutMahasiswaInput | peminjamanUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: peminjamanUpdateManyWithWhereWithoutMahasiswaInput | peminjamanUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: peminjamanScalarWhereInput | peminjamanScalarWhereInput[]
  }

  export type peminjamanUncheckedUpdateManyWithoutMahasiswaNestedInput = {
    create?: XOR<peminjamanCreateWithoutMahasiswaInput, peminjamanUncheckedCreateWithoutMahasiswaInput> | peminjamanCreateWithoutMahasiswaInput[] | peminjamanUncheckedCreateWithoutMahasiswaInput[]
    connectOrCreate?: peminjamanCreateOrConnectWithoutMahasiswaInput | peminjamanCreateOrConnectWithoutMahasiswaInput[]
    upsert?: peminjamanUpsertWithWhereUniqueWithoutMahasiswaInput | peminjamanUpsertWithWhereUniqueWithoutMahasiswaInput[]
    createMany?: peminjamanCreateManyMahasiswaInputEnvelope
    set?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
    disconnect?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
    delete?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
    connect?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
    update?: peminjamanUpdateWithWhereUniqueWithoutMahasiswaInput | peminjamanUpdateWithWhereUniqueWithoutMahasiswaInput[]
    updateMany?: peminjamanUpdateManyWithWhereWithoutMahasiswaInput | peminjamanUpdateManyWithWhereWithoutMahasiswaInput[]
    deleteMany?: peminjamanScalarWhereInput | peminjamanScalarWhereInput[]
  }

  export type jadwalCreateNestedManyWithoutMatakuliahInput = {
    create?: XOR<jadwalCreateWithoutMatakuliahInput, jadwalUncheckedCreateWithoutMatakuliahInput> | jadwalCreateWithoutMatakuliahInput[] | jadwalUncheckedCreateWithoutMatakuliahInput[]
    connectOrCreate?: jadwalCreateOrConnectWithoutMatakuliahInput | jadwalCreateOrConnectWithoutMatakuliahInput[]
    createMany?: jadwalCreateManyMatakuliahInputEnvelope
    connect?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
  }

  export type peminjamanCreateNestedManyWithoutMatakuliahInput = {
    create?: XOR<peminjamanCreateWithoutMatakuliahInput, peminjamanUncheckedCreateWithoutMatakuliahInput> | peminjamanCreateWithoutMatakuliahInput[] | peminjamanUncheckedCreateWithoutMatakuliahInput[]
    connectOrCreate?: peminjamanCreateOrConnectWithoutMatakuliahInput | peminjamanCreateOrConnectWithoutMatakuliahInput[]
    createMany?: peminjamanCreateManyMatakuliahInputEnvelope
    connect?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
  }

  export type jadwalUncheckedCreateNestedManyWithoutMatakuliahInput = {
    create?: XOR<jadwalCreateWithoutMatakuliahInput, jadwalUncheckedCreateWithoutMatakuliahInput> | jadwalCreateWithoutMatakuliahInput[] | jadwalUncheckedCreateWithoutMatakuliahInput[]
    connectOrCreate?: jadwalCreateOrConnectWithoutMatakuliahInput | jadwalCreateOrConnectWithoutMatakuliahInput[]
    createMany?: jadwalCreateManyMatakuliahInputEnvelope
    connect?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
  }

  export type peminjamanUncheckedCreateNestedManyWithoutMatakuliahInput = {
    create?: XOR<peminjamanCreateWithoutMatakuliahInput, peminjamanUncheckedCreateWithoutMatakuliahInput> | peminjamanCreateWithoutMatakuliahInput[] | peminjamanUncheckedCreateWithoutMatakuliahInput[]
    connectOrCreate?: peminjamanCreateOrConnectWithoutMatakuliahInput | peminjamanCreateOrConnectWithoutMatakuliahInput[]
    createMany?: peminjamanCreateManyMatakuliahInputEnvelope
    connect?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type jadwalUpdateManyWithoutMatakuliahNestedInput = {
    create?: XOR<jadwalCreateWithoutMatakuliahInput, jadwalUncheckedCreateWithoutMatakuliahInput> | jadwalCreateWithoutMatakuliahInput[] | jadwalUncheckedCreateWithoutMatakuliahInput[]
    connectOrCreate?: jadwalCreateOrConnectWithoutMatakuliahInput | jadwalCreateOrConnectWithoutMatakuliahInput[]
    upsert?: jadwalUpsertWithWhereUniqueWithoutMatakuliahInput | jadwalUpsertWithWhereUniqueWithoutMatakuliahInput[]
    createMany?: jadwalCreateManyMatakuliahInputEnvelope
    set?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    disconnect?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    delete?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    connect?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    update?: jadwalUpdateWithWhereUniqueWithoutMatakuliahInput | jadwalUpdateWithWhereUniqueWithoutMatakuliahInput[]
    updateMany?: jadwalUpdateManyWithWhereWithoutMatakuliahInput | jadwalUpdateManyWithWhereWithoutMatakuliahInput[]
    deleteMany?: jadwalScalarWhereInput | jadwalScalarWhereInput[]
  }

  export type peminjamanUpdateManyWithoutMatakuliahNestedInput = {
    create?: XOR<peminjamanCreateWithoutMatakuliahInput, peminjamanUncheckedCreateWithoutMatakuliahInput> | peminjamanCreateWithoutMatakuliahInput[] | peminjamanUncheckedCreateWithoutMatakuliahInput[]
    connectOrCreate?: peminjamanCreateOrConnectWithoutMatakuliahInput | peminjamanCreateOrConnectWithoutMatakuliahInput[]
    upsert?: peminjamanUpsertWithWhereUniqueWithoutMatakuliahInput | peminjamanUpsertWithWhereUniqueWithoutMatakuliahInput[]
    createMany?: peminjamanCreateManyMatakuliahInputEnvelope
    set?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
    disconnect?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
    delete?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
    connect?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
    update?: peminjamanUpdateWithWhereUniqueWithoutMatakuliahInput | peminjamanUpdateWithWhereUniqueWithoutMatakuliahInput[]
    updateMany?: peminjamanUpdateManyWithWhereWithoutMatakuliahInput | peminjamanUpdateManyWithWhereWithoutMatakuliahInput[]
    deleteMany?: peminjamanScalarWhereInput | peminjamanScalarWhereInput[]
  }

  export type jadwalUncheckedUpdateManyWithoutMatakuliahNestedInput = {
    create?: XOR<jadwalCreateWithoutMatakuliahInput, jadwalUncheckedCreateWithoutMatakuliahInput> | jadwalCreateWithoutMatakuliahInput[] | jadwalUncheckedCreateWithoutMatakuliahInput[]
    connectOrCreate?: jadwalCreateOrConnectWithoutMatakuliahInput | jadwalCreateOrConnectWithoutMatakuliahInput[]
    upsert?: jadwalUpsertWithWhereUniqueWithoutMatakuliahInput | jadwalUpsertWithWhereUniqueWithoutMatakuliahInput[]
    createMany?: jadwalCreateManyMatakuliahInputEnvelope
    set?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    disconnect?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    delete?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    connect?: jadwalWhereUniqueInput | jadwalWhereUniqueInput[]
    update?: jadwalUpdateWithWhereUniqueWithoutMatakuliahInput | jadwalUpdateWithWhereUniqueWithoutMatakuliahInput[]
    updateMany?: jadwalUpdateManyWithWhereWithoutMatakuliahInput | jadwalUpdateManyWithWhereWithoutMatakuliahInput[]
    deleteMany?: jadwalScalarWhereInput | jadwalScalarWhereInput[]
  }

  export type peminjamanUncheckedUpdateManyWithoutMatakuliahNestedInput = {
    create?: XOR<peminjamanCreateWithoutMatakuliahInput, peminjamanUncheckedCreateWithoutMatakuliahInput> | peminjamanCreateWithoutMatakuliahInput[] | peminjamanUncheckedCreateWithoutMatakuliahInput[]
    connectOrCreate?: peminjamanCreateOrConnectWithoutMatakuliahInput | peminjamanCreateOrConnectWithoutMatakuliahInput[]
    upsert?: peminjamanUpsertWithWhereUniqueWithoutMatakuliahInput | peminjamanUpsertWithWhereUniqueWithoutMatakuliahInput[]
    createMany?: peminjamanCreateManyMatakuliahInputEnvelope
    set?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
    disconnect?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
    delete?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
    connect?: peminjamanWhereUniqueInput | peminjamanWhereUniqueInput[]
    update?: peminjamanUpdateWithWhereUniqueWithoutMatakuliahInput | peminjamanUpdateWithWhereUniqueWithoutMatakuliahInput[]
    updateMany?: peminjamanUpdateManyWithWhereWithoutMatakuliahInput | peminjamanUpdateManyWithWhereWithoutMatakuliahInput[]
    deleteMany?: peminjamanScalarWhereInput | peminjamanScalarWhereInput[]
  }

  export type infokus_bagusCreateNestedOneWithoutPeminjamanInput = {
    create?: XOR<infokus_bagusCreateWithoutPeminjamanInput, infokus_bagusUncheckedCreateWithoutPeminjamanInput>
    connectOrCreate?: infokus_bagusCreateOrConnectWithoutPeminjamanInput
    connect?: infokus_bagusWhereUniqueInput
  }

  export type matakuliahCreateNestedOneWithoutPeminjamanInput = {
    create?: XOR<matakuliahCreateWithoutPeminjamanInput, matakuliahUncheckedCreateWithoutPeminjamanInput>
    connectOrCreate?: matakuliahCreateOrConnectWithoutPeminjamanInput
    connect?: matakuliahWhereUniqueInput
  }

  export type mahasiswaCreateNestedOneWithoutPeminjamanInput = {
    create?: XOR<mahasiswaCreateWithoutPeminjamanInput, mahasiswaUncheckedCreateWithoutPeminjamanInput>
    connectOrCreate?: mahasiswaCreateOrConnectWithoutPeminjamanInput
    connect?: mahasiswaWhereUniqueInput
  }

  export type infokus_bagusUpdateOneRequiredWithoutPeminjamanNestedInput = {
    create?: XOR<infokus_bagusCreateWithoutPeminjamanInput, infokus_bagusUncheckedCreateWithoutPeminjamanInput>
    connectOrCreate?: infokus_bagusCreateOrConnectWithoutPeminjamanInput
    upsert?: infokus_bagusUpsertWithoutPeminjamanInput
    connect?: infokus_bagusWhereUniqueInput
    update?: XOR<XOR<infokus_bagusUpdateToOneWithWhereWithoutPeminjamanInput, infokus_bagusUpdateWithoutPeminjamanInput>, infokus_bagusUncheckedUpdateWithoutPeminjamanInput>
  }

  export type matakuliahUpdateOneRequiredWithoutPeminjamanNestedInput = {
    create?: XOR<matakuliahCreateWithoutPeminjamanInput, matakuliahUncheckedCreateWithoutPeminjamanInput>
    connectOrCreate?: matakuliahCreateOrConnectWithoutPeminjamanInput
    upsert?: matakuliahUpsertWithoutPeminjamanInput
    connect?: matakuliahWhereUniqueInput
    update?: XOR<XOR<matakuliahUpdateToOneWithWhereWithoutPeminjamanInput, matakuliahUpdateWithoutPeminjamanInput>, matakuliahUncheckedUpdateWithoutPeminjamanInput>
  }

  export type mahasiswaUpdateOneRequiredWithoutPeminjamanNestedInput = {
    create?: XOR<mahasiswaCreateWithoutPeminjamanInput, mahasiswaUncheckedCreateWithoutPeminjamanInput>
    connectOrCreate?: mahasiswaCreateOrConnectWithoutPeminjamanInput
    upsert?: mahasiswaUpsertWithoutPeminjamanInput
    connect?: mahasiswaWhereUniqueInput
    update?: XOR<XOR<mahasiswaUpdateToOneWithWhereWithoutPeminjamanInput, mahasiswaUpdateWithoutPeminjamanInput>, mahasiswaUncheckedUpdateWithoutPeminjamanInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type jadwalCreateWithoutDosenInput = {
    ruangan: string
    waktu?: string | null
    matakuliah: matakuliahCreateNestedOneWithoutJadwalInput
  }

  export type jadwalUncheckedCreateWithoutDosenInput = {
    kodemk: string
    ruangan: string
    waktu?: string | null
  }

  export type jadwalCreateOrConnectWithoutDosenInput = {
    where: jadwalWhereUniqueInput
    create: XOR<jadwalCreateWithoutDosenInput, jadwalUncheckedCreateWithoutDosenInput>
  }

  export type jadwalCreateManyDosenInputEnvelope = {
    data: jadwalCreateManyDosenInput | jadwalCreateManyDosenInput[]
    skipDuplicates?: boolean
  }

  export type jadwalUpsertWithWhereUniqueWithoutDosenInput = {
    where: jadwalWhereUniqueInput
    update: XOR<jadwalUpdateWithoutDosenInput, jadwalUncheckedUpdateWithoutDosenInput>
    create: XOR<jadwalCreateWithoutDosenInput, jadwalUncheckedCreateWithoutDosenInput>
  }

  export type jadwalUpdateWithWhereUniqueWithoutDosenInput = {
    where: jadwalWhereUniqueInput
    data: XOR<jadwalUpdateWithoutDosenInput, jadwalUncheckedUpdateWithoutDosenInput>
  }

  export type jadwalUpdateManyWithWhereWithoutDosenInput = {
    where: jadwalScalarWhereInput
    data: XOR<jadwalUpdateManyMutationInput, jadwalUncheckedUpdateManyWithoutDosenInput>
  }

  export type jadwalScalarWhereInput = {
    AND?: jadwalScalarWhereInput | jadwalScalarWhereInput[]
    OR?: jadwalScalarWhereInput[]
    NOT?: jadwalScalarWhereInput | jadwalScalarWhereInput[]
    kodemk?: StringFilter<"jadwal"> | string
    nip?: StringFilter<"jadwal"> | string
    ruangan?: StringFilter<"jadwal"> | string
    waktu?: StringNullableFilter<"jadwal"> | string | null
  }

  export type peminjamanCreateWithoutInfokus_bagusInput = {
    matakuliah: matakuliahCreateNestedOneWithoutPeminjamanInput
    mahasiswa: mahasiswaCreateNestedOneWithoutPeminjamanInput
  }

  export type peminjamanUncheckedCreateWithoutInfokus_bagusInput = {
    nik: string
    kodemk: string
  }

  export type peminjamanCreateOrConnectWithoutInfokus_bagusInput = {
    where: peminjamanWhereUniqueInput
    create: XOR<peminjamanCreateWithoutInfokus_bagusInput, peminjamanUncheckedCreateWithoutInfokus_bagusInput>
  }

  export type peminjamanCreateManyInfokus_bagusInputEnvelope = {
    data: peminjamanCreateManyInfokus_bagusInput | peminjamanCreateManyInfokus_bagusInput[]
    skipDuplicates?: boolean
  }

  export type peminjamanUpsertWithWhereUniqueWithoutInfokus_bagusInput = {
    where: peminjamanWhereUniqueInput
    update: XOR<peminjamanUpdateWithoutInfokus_bagusInput, peminjamanUncheckedUpdateWithoutInfokus_bagusInput>
    create: XOR<peminjamanCreateWithoutInfokus_bagusInput, peminjamanUncheckedCreateWithoutInfokus_bagusInput>
  }

  export type peminjamanUpdateWithWhereUniqueWithoutInfokus_bagusInput = {
    where: peminjamanWhereUniqueInput
    data: XOR<peminjamanUpdateWithoutInfokus_bagusInput, peminjamanUncheckedUpdateWithoutInfokus_bagusInput>
  }

  export type peminjamanUpdateManyWithWhereWithoutInfokus_bagusInput = {
    where: peminjamanScalarWhereInput
    data: XOR<peminjamanUpdateManyMutationInput, peminjamanUncheckedUpdateManyWithoutInfokus_bagusInput>
  }

  export type peminjamanScalarWhereInput = {
    AND?: peminjamanScalarWhereInput | peminjamanScalarWhereInput[]
    OR?: peminjamanScalarWhereInput[]
    NOT?: peminjamanScalarWhereInput | peminjamanScalarWhereInput[]
    nik?: StringFilter<"peminjaman"> | string
    kodemk?: StringFilter<"peminjaman"> | string
    kodein?: StringFilter<"peminjaman"> | string
  }

  export type matakuliahCreateWithoutJadwalInput = {
    kode: string
    nama: string
    sks: number
    peminjaman?: peminjamanCreateNestedManyWithoutMatakuliahInput
  }

  export type matakuliahUncheckedCreateWithoutJadwalInput = {
    kode: string
    nama: string
    sks: number
    peminjaman?: peminjamanUncheckedCreateNestedManyWithoutMatakuliahInput
  }

  export type matakuliahCreateOrConnectWithoutJadwalInput = {
    where: matakuliahWhereUniqueInput
    create: XOR<matakuliahCreateWithoutJadwalInput, matakuliahUncheckedCreateWithoutJadwalInput>
  }

  export type dosenCreateWithoutJadwalInput = {
    nip: string
    nama: string
  }

  export type dosenUncheckedCreateWithoutJadwalInput = {
    nip: string
    nama: string
  }

  export type dosenCreateOrConnectWithoutJadwalInput = {
    where: dosenWhereUniqueInput
    create: XOR<dosenCreateWithoutJadwalInput, dosenUncheckedCreateWithoutJadwalInput>
  }

  export type matakuliahUpsertWithoutJadwalInput = {
    update: XOR<matakuliahUpdateWithoutJadwalInput, matakuliahUncheckedUpdateWithoutJadwalInput>
    create: XOR<matakuliahCreateWithoutJadwalInput, matakuliahUncheckedCreateWithoutJadwalInput>
    where?: matakuliahWhereInput
  }

  export type matakuliahUpdateToOneWithWhereWithoutJadwalInput = {
    where?: matakuliahWhereInput
    data: XOR<matakuliahUpdateWithoutJadwalInput, matakuliahUncheckedUpdateWithoutJadwalInput>
  }

  export type matakuliahUpdateWithoutJadwalInput = {
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    sks?: IntFieldUpdateOperationsInput | number
    peminjaman?: peminjamanUpdateManyWithoutMatakuliahNestedInput
  }

  export type matakuliahUncheckedUpdateWithoutJadwalInput = {
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    sks?: IntFieldUpdateOperationsInput | number
    peminjaman?: peminjamanUncheckedUpdateManyWithoutMatakuliahNestedInput
  }

  export type dosenUpsertWithoutJadwalInput = {
    update: XOR<dosenUpdateWithoutJadwalInput, dosenUncheckedUpdateWithoutJadwalInput>
    create: XOR<dosenCreateWithoutJadwalInput, dosenUncheckedCreateWithoutJadwalInput>
    where?: dosenWhereInput
  }

  export type dosenUpdateToOneWithWhereWithoutJadwalInput = {
    where?: dosenWhereInput
    data: XOR<dosenUpdateWithoutJadwalInput, dosenUncheckedUpdateWithoutJadwalInput>
  }

  export type dosenUpdateWithoutJadwalInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type dosenUncheckedUpdateWithoutJadwalInput = {
    nip?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type peminjamanCreateWithoutMahasiswaInput = {
    infokus_bagus: infokus_bagusCreateNestedOneWithoutPeminjamanInput
    matakuliah: matakuliahCreateNestedOneWithoutPeminjamanInput
  }

  export type peminjamanUncheckedCreateWithoutMahasiswaInput = {
    kodemk: string
    kodein: string
  }

  export type peminjamanCreateOrConnectWithoutMahasiswaInput = {
    where: peminjamanWhereUniqueInput
    create: XOR<peminjamanCreateWithoutMahasiswaInput, peminjamanUncheckedCreateWithoutMahasiswaInput>
  }

  export type peminjamanCreateManyMahasiswaInputEnvelope = {
    data: peminjamanCreateManyMahasiswaInput | peminjamanCreateManyMahasiswaInput[]
    skipDuplicates?: boolean
  }

  export type peminjamanUpsertWithWhereUniqueWithoutMahasiswaInput = {
    where: peminjamanWhereUniqueInput
    update: XOR<peminjamanUpdateWithoutMahasiswaInput, peminjamanUncheckedUpdateWithoutMahasiswaInput>
    create: XOR<peminjamanCreateWithoutMahasiswaInput, peminjamanUncheckedCreateWithoutMahasiswaInput>
  }

  export type peminjamanUpdateWithWhereUniqueWithoutMahasiswaInput = {
    where: peminjamanWhereUniqueInput
    data: XOR<peminjamanUpdateWithoutMahasiswaInput, peminjamanUncheckedUpdateWithoutMahasiswaInput>
  }

  export type peminjamanUpdateManyWithWhereWithoutMahasiswaInput = {
    where: peminjamanScalarWhereInput
    data: XOR<peminjamanUpdateManyMutationInput, peminjamanUncheckedUpdateManyWithoutMahasiswaInput>
  }

  export type jadwalCreateWithoutMatakuliahInput = {
    ruangan: string
    waktu?: string | null
    dosen: dosenCreateNestedOneWithoutJadwalInput
  }

  export type jadwalUncheckedCreateWithoutMatakuliahInput = {
    nip: string
    ruangan: string
    waktu?: string | null
  }

  export type jadwalCreateOrConnectWithoutMatakuliahInput = {
    where: jadwalWhereUniqueInput
    create: XOR<jadwalCreateWithoutMatakuliahInput, jadwalUncheckedCreateWithoutMatakuliahInput>
  }

  export type jadwalCreateManyMatakuliahInputEnvelope = {
    data: jadwalCreateManyMatakuliahInput | jadwalCreateManyMatakuliahInput[]
    skipDuplicates?: boolean
  }

  export type peminjamanCreateWithoutMatakuliahInput = {
    infokus_bagus: infokus_bagusCreateNestedOneWithoutPeminjamanInput
    mahasiswa: mahasiswaCreateNestedOneWithoutPeminjamanInput
  }

  export type peminjamanUncheckedCreateWithoutMatakuliahInput = {
    nik: string
    kodein: string
  }

  export type peminjamanCreateOrConnectWithoutMatakuliahInput = {
    where: peminjamanWhereUniqueInput
    create: XOR<peminjamanCreateWithoutMatakuliahInput, peminjamanUncheckedCreateWithoutMatakuliahInput>
  }

  export type peminjamanCreateManyMatakuliahInputEnvelope = {
    data: peminjamanCreateManyMatakuliahInput | peminjamanCreateManyMatakuliahInput[]
    skipDuplicates?: boolean
  }

  export type jadwalUpsertWithWhereUniqueWithoutMatakuliahInput = {
    where: jadwalWhereUniqueInput
    update: XOR<jadwalUpdateWithoutMatakuliahInput, jadwalUncheckedUpdateWithoutMatakuliahInput>
    create: XOR<jadwalCreateWithoutMatakuliahInput, jadwalUncheckedCreateWithoutMatakuliahInput>
  }

  export type jadwalUpdateWithWhereUniqueWithoutMatakuliahInput = {
    where: jadwalWhereUniqueInput
    data: XOR<jadwalUpdateWithoutMatakuliahInput, jadwalUncheckedUpdateWithoutMatakuliahInput>
  }

  export type jadwalUpdateManyWithWhereWithoutMatakuliahInput = {
    where: jadwalScalarWhereInput
    data: XOR<jadwalUpdateManyMutationInput, jadwalUncheckedUpdateManyWithoutMatakuliahInput>
  }

  export type peminjamanUpsertWithWhereUniqueWithoutMatakuliahInput = {
    where: peminjamanWhereUniqueInput
    update: XOR<peminjamanUpdateWithoutMatakuliahInput, peminjamanUncheckedUpdateWithoutMatakuliahInput>
    create: XOR<peminjamanCreateWithoutMatakuliahInput, peminjamanUncheckedCreateWithoutMatakuliahInput>
  }

  export type peminjamanUpdateWithWhereUniqueWithoutMatakuliahInput = {
    where: peminjamanWhereUniqueInput
    data: XOR<peminjamanUpdateWithoutMatakuliahInput, peminjamanUncheckedUpdateWithoutMatakuliahInput>
  }

  export type peminjamanUpdateManyWithWhereWithoutMatakuliahInput = {
    where: peminjamanScalarWhereInput
    data: XOR<peminjamanUpdateManyMutationInput, peminjamanUncheckedUpdateManyWithoutMatakuliahInput>
  }

  export type infokus_bagusCreateWithoutPeminjamanInput = {
    kode: string
    merek: string
  }

  export type infokus_bagusUncheckedCreateWithoutPeminjamanInput = {
    kode: string
    merek: string
  }

  export type infokus_bagusCreateOrConnectWithoutPeminjamanInput = {
    where: infokus_bagusWhereUniqueInput
    create: XOR<infokus_bagusCreateWithoutPeminjamanInput, infokus_bagusUncheckedCreateWithoutPeminjamanInput>
  }

  export type matakuliahCreateWithoutPeminjamanInput = {
    kode: string
    nama: string
    sks: number
    jadwal?: jadwalCreateNestedManyWithoutMatakuliahInput
  }

  export type matakuliahUncheckedCreateWithoutPeminjamanInput = {
    kode: string
    nama: string
    sks: number
    jadwal?: jadwalUncheckedCreateNestedManyWithoutMatakuliahInput
  }

  export type matakuliahCreateOrConnectWithoutPeminjamanInput = {
    where: matakuliahWhereUniqueInput
    create: XOR<matakuliahCreateWithoutPeminjamanInput, matakuliahUncheckedCreateWithoutPeminjamanInput>
  }

  export type mahasiswaCreateWithoutPeminjamanInput = {
    nik: string
    nama: string
  }

  export type mahasiswaUncheckedCreateWithoutPeminjamanInput = {
    nik: string
    nama: string
  }

  export type mahasiswaCreateOrConnectWithoutPeminjamanInput = {
    where: mahasiswaWhereUniqueInput
    create: XOR<mahasiswaCreateWithoutPeminjamanInput, mahasiswaUncheckedCreateWithoutPeminjamanInput>
  }

  export type infokus_bagusUpsertWithoutPeminjamanInput = {
    update: XOR<infokus_bagusUpdateWithoutPeminjamanInput, infokus_bagusUncheckedUpdateWithoutPeminjamanInput>
    create: XOR<infokus_bagusCreateWithoutPeminjamanInput, infokus_bagusUncheckedCreateWithoutPeminjamanInput>
    where?: infokus_bagusWhereInput
  }

  export type infokus_bagusUpdateToOneWithWhereWithoutPeminjamanInput = {
    where?: infokus_bagusWhereInput
    data: XOR<infokus_bagusUpdateWithoutPeminjamanInput, infokus_bagusUncheckedUpdateWithoutPeminjamanInput>
  }

  export type infokus_bagusUpdateWithoutPeminjamanInput = {
    kode?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
  }

  export type infokus_bagusUncheckedUpdateWithoutPeminjamanInput = {
    kode?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
  }

  export type matakuliahUpsertWithoutPeminjamanInput = {
    update: XOR<matakuliahUpdateWithoutPeminjamanInput, matakuliahUncheckedUpdateWithoutPeminjamanInput>
    create: XOR<matakuliahCreateWithoutPeminjamanInput, matakuliahUncheckedCreateWithoutPeminjamanInput>
    where?: matakuliahWhereInput
  }

  export type matakuliahUpdateToOneWithWhereWithoutPeminjamanInput = {
    where?: matakuliahWhereInput
    data: XOR<matakuliahUpdateWithoutPeminjamanInput, matakuliahUncheckedUpdateWithoutPeminjamanInput>
  }

  export type matakuliahUpdateWithoutPeminjamanInput = {
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    sks?: IntFieldUpdateOperationsInput | number
    jadwal?: jadwalUpdateManyWithoutMatakuliahNestedInput
  }

  export type matakuliahUncheckedUpdateWithoutPeminjamanInput = {
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    sks?: IntFieldUpdateOperationsInput | number
    jadwal?: jadwalUncheckedUpdateManyWithoutMatakuliahNestedInput
  }

  export type mahasiswaUpsertWithoutPeminjamanInput = {
    update: XOR<mahasiswaUpdateWithoutPeminjamanInput, mahasiswaUncheckedUpdateWithoutPeminjamanInput>
    create: XOR<mahasiswaCreateWithoutPeminjamanInput, mahasiswaUncheckedCreateWithoutPeminjamanInput>
    where?: mahasiswaWhereInput
  }

  export type mahasiswaUpdateToOneWithWhereWithoutPeminjamanInput = {
    where?: mahasiswaWhereInput
    data: XOR<mahasiswaUpdateWithoutPeminjamanInput, mahasiswaUncheckedUpdateWithoutPeminjamanInput>
  }

  export type mahasiswaUpdateWithoutPeminjamanInput = {
    nik?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type mahasiswaUncheckedUpdateWithoutPeminjamanInput = {
    nik?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type jadwalCreateManyDosenInput = {
    kodemk: string
    ruangan: string
    waktu?: string | null
  }

  export type jadwalUpdateWithoutDosenInput = {
    ruangan?: StringFieldUpdateOperationsInput | string
    waktu?: NullableStringFieldUpdateOperationsInput | string | null
    matakuliah?: matakuliahUpdateOneRequiredWithoutJadwalNestedInput
  }

  export type jadwalUncheckedUpdateWithoutDosenInput = {
    kodemk?: StringFieldUpdateOperationsInput | string
    ruangan?: StringFieldUpdateOperationsInput | string
    waktu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type jadwalUncheckedUpdateManyWithoutDosenInput = {
    kodemk?: StringFieldUpdateOperationsInput | string
    ruangan?: StringFieldUpdateOperationsInput | string
    waktu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type peminjamanCreateManyInfokus_bagusInput = {
    nik: string
    kodemk: string
  }

  export type peminjamanUpdateWithoutInfokus_bagusInput = {
    matakuliah?: matakuliahUpdateOneRequiredWithoutPeminjamanNestedInput
    mahasiswa?: mahasiswaUpdateOneRequiredWithoutPeminjamanNestedInput
  }

  export type peminjamanUncheckedUpdateWithoutInfokus_bagusInput = {
    nik?: StringFieldUpdateOperationsInput | string
    kodemk?: StringFieldUpdateOperationsInput | string
  }

  export type peminjamanUncheckedUpdateManyWithoutInfokus_bagusInput = {
    nik?: StringFieldUpdateOperationsInput | string
    kodemk?: StringFieldUpdateOperationsInput | string
  }

  export type peminjamanCreateManyMahasiswaInput = {
    kodemk: string
    kodein: string
  }

  export type peminjamanUpdateWithoutMahasiswaInput = {
    infokus_bagus?: infokus_bagusUpdateOneRequiredWithoutPeminjamanNestedInput
    matakuliah?: matakuliahUpdateOneRequiredWithoutPeminjamanNestedInput
  }

  export type peminjamanUncheckedUpdateWithoutMahasiswaInput = {
    kodemk?: StringFieldUpdateOperationsInput | string
    kodein?: StringFieldUpdateOperationsInput | string
  }

  export type peminjamanUncheckedUpdateManyWithoutMahasiswaInput = {
    kodemk?: StringFieldUpdateOperationsInput | string
    kodein?: StringFieldUpdateOperationsInput | string
  }

  export type jadwalCreateManyMatakuliahInput = {
    nip: string
    ruangan: string
    waktu?: string | null
  }

  export type peminjamanCreateManyMatakuliahInput = {
    nik: string
    kodein: string
  }

  export type jadwalUpdateWithoutMatakuliahInput = {
    ruangan?: StringFieldUpdateOperationsInput | string
    waktu?: NullableStringFieldUpdateOperationsInput | string | null
    dosen?: dosenUpdateOneRequiredWithoutJadwalNestedInput
  }

  export type jadwalUncheckedUpdateWithoutMatakuliahInput = {
    nip?: StringFieldUpdateOperationsInput | string
    ruangan?: StringFieldUpdateOperationsInput | string
    waktu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type jadwalUncheckedUpdateManyWithoutMatakuliahInput = {
    nip?: StringFieldUpdateOperationsInput | string
    ruangan?: StringFieldUpdateOperationsInput | string
    waktu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type peminjamanUpdateWithoutMatakuliahInput = {
    infokus_bagus?: infokus_bagusUpdateOneRequiredWithoutPeminjamanNestedInput
    mahasiswa?: mahasiswaUpdateOneRequiredWithoutPeminjamanNestedInput
  }

  export type peminjamanUncheckedUpdateWithoutMatakuliahInput = {
    nik?: StringFieldUpdateOperationsInput | string
    kodein?: StringFieldUpdateOperationsInput | string
  }

  export type peminjamanUncheckedUpdateManyWithoutMatakuliahInput = {
    nik?: StringFieldUpdateOperationsInput | string
    kodein?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}