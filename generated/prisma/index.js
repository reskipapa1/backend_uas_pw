
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.DosenScalarFieldEnum = {
  nip: 'nip',
  nama: 'nama'
};

exports.Prisma.Infokus_bagusScalarFieldEnum = {
  kode: 'kode',
  merek: 'merek'
};

exports.Prisma.Infokus_rusakScalarFieldEnum = {
  kode: 'kode',
  merek: 'merek'
};

exports.Prisma.JadwalScalarFieldEnum = {
  kodemk: 'kodemk',
  nip: 'nip',
  ruangan: 'ruangan',
  waktu: 'waktu'
};

exports.Prisma.MahasiswaScalarFieldEnum = {
  nik: 'nik',
  nama: 'nama'
};

exports.Prisma.MatakuliahScalarFieldEnum = {
  kode: 'kode',
  nama: 'nama',
  sks: 'sks'
};

exports.Prisma.PeminjamanScalarFieldEnum = {
  nik: 'nik',
  kodemk: 'kodemk',
  kodein: 'kodein'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  name: 'name'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.dosenOrderByRelevanceFieldEnum = {
  nip: 'nip',
  nama: 'nama'
};

exports.Prisma.infokus_bagusOrderByRelevanceFieldEnum = {
  kode: 'kode',
  merek: 'merek'
};

exports.Prisma.infokus_rusakOrderByRelevanceFieldEnum = {
  kode: 'kode',
  merek: 'merek'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.jadwalOrderByRelevanceFieldEnum = {
  kodemk: 'kodemk',
  nip: 'nip',
  ruangan: 'ruangan',
  waktu: 'waktu'
};

exports.Prisma.mahasiswaOrderByRelevanceFieldEnum = {
  nik: 'nik',
  nama: 'nama'
};

exports.Prisma.matakuliahOrderByRelevanceFieldEnum = {
  kode: 'kode',
  nama: 'nama'
};

exports.Prisma.peminjamanOrderByRelevanceFieldEnum = {
  nik: 'nik',
  kodemk: 'kodemk',
  kodein: 'kodein'
};

exports.Prisma.userOrderByRelevanceFieldEnum = {
  email: 'email',
  password: 'password',
  name: 'name'
};


exports.Prisma.ModelName = {
  dosen: 'dosen',
  infokus_bagus: 'infokus_bagus',
  infokus_rusak: 'infokus_rusak',
  jadwal: 'jadwal',
  mahasiswa: 'mahasiswa',
  matakuliah: 'matakuliah',
  peminjaman: 'peminjaman',
  user: 'user'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Rezki Rahmat Alfi\\PeminjamanInfokus\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\Rezki Rahmat Alfi\\PeminjamanInfokus\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": "mysql://root:Nabillany19_@localhost:3306/uaspw"
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel dosen {\n  nip    String   @id @db.VarChar(18)\n  nama   String   @db.VarChar(35)\n  jadwal jadwal[]\n}\n\nmodel infokus_bagus {\n  kode       String       @id @db.VarChar(10)\n  merek      String       @db.VarChar(10)\n  peminjaman peminjaman[]\n}\n\nmodel infokus_rusak {\n  kode  String @id @db.VarChar(10)\n  merek String @db.VarChar(10)\n}\n\nmodel jadwal {\n  kodemk     String     @db.VarChar(9)\n  nip        String     @db.VarChar(18)\n  ruangan    String     @db.VarChar(18)\n  waktu      String?    @db.VarChar(30)\n  matakuliah matakuliah @relation(fields: [kodemk], references: [kode], onDelete: NoAction, onUpdate: NoAction, map: \"jwl_kodemk_fk\")\n  dosen      dosen      @relation(fields: [nip], references: [nip], onDelete: NoAction, onUpdate: NoAction, map: \"jwl_nip_fk\")\n\n  @@id([kodemk, nip])\n  @@index([nip], map: \"jwl_nip_fk\")\n}\n\nmodel mahasiswa {\n  nik        String       @id @db.VarChar(16)\n  nama       String       @db.VarChar(35)\n  peminjaman peminjaman[]\n}\n\nmodel matakuliah {\n  kode       String       @id @db.VarChar(9)\n  nama       String       @db.VarChar(45)\n  sks        Int\n  jadwal     jadwal[]\n  peminjaman peminjaman[]\n}\n\nmodel peminjaman {\n  nik           String        @db.VarChar(16)\n  kodemk        String        @db.VarChar(9)\n  kodein        String        @db.VarChar(10)\n  infokus_bagus infokus_bagus @relation(fields: [kodein], references: [kode], onDelete: NoAction, onUpdate: NoAction, map: \"pmn_kodein_fk\")\n  matakuliah    matakuliah    @relation(fields: [kodemk], references: [kode], onDelete: NoAction, onUpdate: NoAction, map: \"pmn_kodemk_fk\")\n  mahasiswa     mahasiswa     @relation(fields: [nik], references: [nik], onDelete: NoAction, onUpdate: NoAction, map: \"pmn_nik_fk\")\n\n  @@id([nik, kodemk, kodein])\n  @@index([kodein], map: \"pmn_kodein_fk\")\n  @@index([kodemk], map: \"pmn_kodemk_fk\")\n}\n\nmodel ViewDetailPeminjaman {\n  kode_infokus   String\n  kode_matkul    String\n  nama_mahasiswa String\n  nama_dosen     String\n  jadwal         String\n\n  @@map(\"view_detail_peminjaman\")\n  @@ignore\n}\n\nmodel user {\n  id       Int    @id @default(autoincrement())\n  email    String @unique(map: \"User_email_key\")\n  password String\n  name     String\n}\n",
  "inlineSchemaHash": "52c01b4c0a7a74e396e6e5e47f85c779595987f7b8fa9a100c57fb901bcd8ddf",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "generated/prisma",
    "prisma",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"dosen\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"nip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"18\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"35\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jadwal\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"jadwal\",\"nativeType\":null,\"relationName\":\"dosenTojadwal\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"infokus_bagus\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"kode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"merek\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"peminjaman\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"peminjaman\",\"nativeType\":null,\"relationName\":\"infokus_bagusTopeminjaman\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"infokus_rusak\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"kode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"merek\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"jadwal\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"kodemk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"9\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"18\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ruangan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"18\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"waktu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"matakuliah\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"matakuliah\",\"nativeType\":null,\"relationName\":\"jadwalTomatakuliah\",\"relationFromFields\":[\"kodemk\"],\"relationToFields\":[\"kode\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dosen\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"dosen\",\"nativeType\":null,\"relationName\":\"dosenTojadwal\",\"relationFromFields\":[\"nip\"],\"relationToFields\":[\"nip\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"kodemk\",\"nip\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"mahasiswa\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"nik\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"16\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"35\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"peminjaman\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"peminjaman\",\"nativeType\":null,\"relationName\":\"mahasiswaTopeminjaman\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"matakuliah\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"kode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"9\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"45\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sks\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jadwal\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"jadwal\",\"nativeType\":null,\"relationName\":\"jadwalTomatakuliah\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"peminjaman\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"peminjaman\",\"nativeType\":null,\"relationName\":\"matakuliahTopeminjaman\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"peminjaman\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"nik\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"16\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kodemk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"9\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kodein\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"infokus_bagus\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"infokus_bagus\",\"nativeType\":null,\"relationName\":\"infokus_bagusTopeminjaman\",\"relationFromFields\":[\"kodein\"],\"relationToFields\":[\"kode\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"matakuliah\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"matakuliah\",\"nativeType\":null,\"relationName\":\"matakuliahTopeminjaman\",\"relationFromFields\":[\"kodemk\"],\"relationToFields\":[\"kode\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mahasiswa\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"mahasiswa\",\"nativeType\":null,\"relationName\":\"mahasiswaTopeminjaman\",\"relationFromFields\":[\"nik\"],\"relationToFields\":[\"nik\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"nik\",\"kodemk\",\"kodein\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"user\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "generated/prisma/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "generated/prisma/schema.prisma")
