-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `role` ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER',

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kegiatan` (
    `kode_transaksi` VARCHAR(20) NOT NULL,
    `kegiatan` VARCHAR(191) NULL,
    `tempat` VARCHAR(100) NULL,
    `waktu` TIMESTAMP(6) NULL,

    PRIMARY KEY (`kode_transaksi`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `proyektor` (
    `kode_proyektor` VARCHAR(10) NOT NULL,
    `merek` VARCHAR(50) NULL,
    `nomor_seri` VARCHAR(50) NULL,
    `status` VARCHAR(20) NULL,

    PRIMARY KEY (`kode_proyektor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transaksi` (
    `kode_transaksi` VARCHAR(20) NOT NULL,
    `kode_proyektor` VARCHAR(10) NULL,
    `nik` VARCHAR(20) NULL,
    `status` VARCHAR(20) NULL,
    `waktu_dikembalikan` TIMESTAMP(6) NULL,

    PRIMARY KEY (`kode_transaksi`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `penanggung_jawab` (
    `nik` VARCHAR(20) NOT NULL,
    `nama` VARCHAR(100) NULL,
    `no_hp` VARCHAR(15) NULL,

    PRIMARY KEY (`nik`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `kegiatan` ADD CONSTRAINT `kegiatan_kode_transaksi_fkey` FOREIGN KEY (`kode_transaksi`) REFERENCES `transaksi`(`kode_transaksi`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `transaksi` ADD CONSTRAINT `transaksi_kode_proyektor_fkey` FOREIGN KEY (`kode_proyektor`) REFERENCES `proyektor`(`kode_proyektor`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `transaksi` ADD CONSTRAINT `transaksi_nik_fkey` FOREIGN KEY (`nik`) REFERENCES `penanggung_jawab`(`nik`) ON DELETE NO ACTION ON UPDATE NO ACTION;
