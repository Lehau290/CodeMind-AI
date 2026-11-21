-- ==========================================================
-- C++ MASTER AI PLATFORM - DATABASE SCHEMA DESIGN
-- Target Engines: MySQL 5.7+ / MySQL 8.0+ / MariaDB 10.3+
-- Encoding: UTF-8 (utf8mb4_unicode_ci)
-- ==========================================================

CREATE DATABASE IF NOT EXISTS `cpp_learning` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `cpp_learning`;

-- 1. USERS TABLE (Quản lý tài khoản sinh viên, giảng viên, admin)
CREATE TABLE IF NOT EXISTS `users` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(50) NOT NULL UNIQUE,
    `email` VARCHAR(100) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL,
    `fullname` VARCHAR(100) NOT NULL,
    `avatar` VARCHAR(255) DEFAULT 'default_avatar.png',
    `role` VARCHAR(20) DEFAULT 'student' COMMENT 'student | teacher | admin',
    `bio` TEXT DEFAULT NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX `idx_username` (`username`),
    INDEX `idx_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. LESSONS TABLE (Quản lý 15 bài học C++ theo chương)
CREATE TABLE IF NOT EXISTS `lessons` (
    `id` INT PRIMARY KEY,
    `chapter` INT NOT NULL,
    `chapter_title` VARCHAR(100) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(100) NOT NULL UNIQUE,
    `description` TEXT,
    `duration_mins` INT DEFAULT 30,
    `objectives` TEXT COMMENT 'JSON Array of objective strings',
    `theory_content` LONGTEXT,
    `code_examples` LONGTEXT COMMENT 'JSON Array of C++ code examples',
    `real_world_application` TEXT,
    `common_pitfalls` LONGTEXT COMMENT 'JSON Array of common errors and fixes',
    `order_num` INT NOT NULL,
    INDEX `idx_chapter` (`chapter`),
    INDEX `idx_order` (`order_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. QUIZZES TABLE (Quản lý bộ bài kiểm tra trắc nghiệm theo bài học)
CREATE TABLE IF NOT EXISTS `quizzes` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `lesson_id` INT NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `time_limit_mins` INT DEFAULT 15,
    `pass_score` DECIMAL(4,2) DEFAULT 5.00,
    FOREIGN KEY (`lesson_id`) REFERENCES `lessons`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. QUIZ QUESTIONS TABLE (150+ câu hỏi trắc nghiệm A, B, C, D)
CREATE TABLE IF NOT EXISTS `quiz_questions` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `quiz_id` INT NOT NULL,
    `question_text` TEXT NOT NULL,
    `code_snippet` TEXT DEFAULT NULL,
    `option_a` TEXT NOT NULL,
    `option_b` TEXT NOT NULL,
    `option_c` TEXT NOT NULL,
    `option_d` TEXT NOT NULL,
    `correct_option` CHAR(1) NOT NULL COMMENT 'A | B | C | D',
    `explanation` TEXT NOT NULL,
    `concept_tag` VARCHAR(50) NOT NULL,
    `order_num` INT NOT NULL,
    FOREIGN KEY (`quiz_id`) REFERENCES `quizzes`(`id`) ON DELETE CASCADE,
    INDEX `idx_concept` (`concept_tag`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5. USER PROGRESS TABLE (Theo dõi tiến độ hoàn thành bài học)
CREATE TABLE IF NOT EXISTS `user_progress` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NOT NULL,
    `lesson_id` INT NOT NULL,
    `is_completed` TINYINT DEFAULT 0,
    `completed_at` DATETIME DEFAULT NULL,
    `last_accessed_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY `unique_user_lesson` (`user_id`, `lesson_id`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`lesson_id`) REFERENCES `lessons`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 6. QUIZ ATTEMPTS TABLE (Lưu lịch sử bài làm & Đánh giá từ AI)
CREATE TABLE IF NOT EXISTS `quiz_attempts` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NOT NULL,
    `quiz_id` INT NOT NULL,
    `lesson_id` INT NOT NULL,
    `total_questions` INT NOT NULL,
    `correct_answers` INT NOT NULL,
    `wrong_answers` INT NOT NULL,
    `score` DECIMAL(4,2) NOT NULL,
    `time_spent_seconds` INT NOT NULL,
    `answers_data` LONGTEXT NOT NULL COMMENT 'JSON: danh sách các câu đã chọn',
    `ai_evaluation` LONGTEXT NOT NULL COMMENT 'JSON: Báo cáo phân tích chuyên sâu của AI',
    `passed` TINYINT DEFAULT 0,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`quiz_id`) REFERENCES `quizzes`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`lesson_id`) REFERENCES `lessons`(`id`) ON DELETE CASCADE,
    INDEX `idx_user_quiz` (`user_id`, `lesson_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 7. BADGES TABLE (Quản lý 8 huy hiệu thành tích)
CREATE TABLE IF NOT EXISTS `badges` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `code` VARCHAR(50) NOT NULL UNIQUE,
    `name` VARCHAR(100) NOT NULL,
    `description` TEXT NOT NULL,
    `icon` VARCHAR(50) NOT NULL,
    `criteria` VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 8. USER BADGES TABLE (Huy hiệu người học đã đạt được)
CREATE TABLE IF NOT EXISTS `user_badges` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NOT NULL,
    `badge_id` INT NOT NULL,
    `earned_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY `unique_user_badge` (`user_id`, `badge_id`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`badge_id`) REFERENCES `badges`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 9. AI CHAT HISTORY TABLE (Lịch sử tương tác cùng C++ AI Mentor)
CREATE TABLE IF NOT EXISTS `ai_chat_history` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT DEFAULT NULL,
    `role` VARCHAR(20) NOT NULL COMMENT 'user | assistant',
    `message` LONGTEXT NOT NULL,
    `context_lesson_id` INT DEFAULT NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX `idx_chat_user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
