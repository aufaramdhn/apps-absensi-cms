/*
  Warnings:

  - You are about to drop the column `alamat` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `noHp` on the `users` table. All the data in the column will be lost.
  - Added the required column `address` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numberHp` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `alamat`,
    DROP COLUMN `noHp`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `numberHp` VARCHAR(13) NOT NULL,
    ADD COLUMN `role` ENUM('STUDENT', 'TEACHER', 'ADMIN') NOT NULL DEFAULT 'STUDENT',
    MODIFY `photo` VARCHAR(191) NULL;
