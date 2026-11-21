-- ==========================================================
-- C++ MASTER AI PLATFORM - INITIAL SEED DATA
-- Users & Badges Data
-- ==========================================

USE `cpp_learning`;

-- 1. SEED DEFAULT USERS (Password hashed BCRYPT, default raw: 123456 / admin123)
INSERT INTO `users` (`id`, `username`, `email`, `password`, `fullname`, `avatar`, `role`, `bio`) VALUES
(1, 'student', 'student@university.edu.vn', '$2y$10$eA0AqvY91lI7R0rV9n2p/eW9K9V.8wHq0T2g1v9L7u8e3P4j5Y6Za', 'Nguyễn Văn An (K72 CNTT)', 'default_avatar.png', 'student', 'Sinh viên năm nhất ngành CNTT - Đang chăm chỉ học C++ nhập môn lập trình.'),
(2, 'teacher', 'giangvien@sptin.edu.vn', '$2y$10$eA0AqvY91lI7R0rV9n2p/eW9K9V.8wHq0T2g1v9L7u8e3P4j5Y6Za', 'ThS. Trần Thị Mai (Khoa Sư Phạm Tin)', 'default_avatar.png', 'teacher', 'Giảng viên môn Kỹ thuật lập trình C/C++ & Phương pháp giảng dạy Tin học.'),
(3, 'admin', 'admin@cppedu.vn', '$2y$10$eA0AqvY91lI7R0rV9n2p/eW9K9V.8wHq0T2g1v9L7u8e3P4j5Y6Za', 'Quản Trị Viên Hệ Thống', 'default_avatar.png', 'admin', 'Quản trị nền tảng học C++ tích hợp AI.')
ON DUPLICATE KEY UPDATE `fullname` = VALUES(`fullname`);

-- 2. SEED 8 ACHIEVEMENT BADGES
INSERT INTO `badges` (`id`, `code`, `name`, `description`, `icon`, `criteria`) VALUES
(1, 'first_step', 'Bước Chân Đầu Tiên', 'Hoàn thành bài học và bài kiểm tra đầu tiên về C++.', 'fas fa-rocket', 'Hoàn thành bài học số 1'),
(2, 'quiz_master', 'Chiến Binh Điểm 10', 'Đạt điểm tuyệt đối 10.0 trong bài kiểm tra trắc nghiệm.', 'fas fa-crown', 'Đạt 10 điểm trong bất kỳ bài quiz nào'),
(3, 'loop_master', 'Bậc Thầy Vòng Lặp', 'Chinh phục hoàn toàn các vòng lặp For, While, Do-While.', 'fas fa-sync-alt', 'Hoàn thành bài 7 với điểm >= 8'),
(4, 'array_sorter', 'Chuyên Gia Mảng & Ma Trận', 'Nắm vững kỹ thuật xử lý mảng 1 chiều và 2 chiều.', 'fas fa-th-large', 'Hoàn thành bài 8 và bài 9'),
(5, 'recursion_wizard', 'Phù Thủy Đệ Quy', 'Hiểu thấu đáo về đệ quy và quản lý Call Stack.', 'fas fa-layer-group', 'Hoàn thành bài 11 với điểm >= 8'),
(6, 'pointer_ninja', 'Ninja Con Trỏ', 'Vượt qua nỗi sợ con trỏ và quản lý bộ nhớ động an toàn.', 'fas fa-magic', 'Hoàn thành bài 12 với điểm >= 8'),
(7, 'oop_architect', 'Kiến Trúc Sư OOP', 'Thành thạo 4 tính chất cốt lõi của lập trình hướng đối tượng.', 'fas fa-cube', 'Hoàn thành bài 15'),
(8, 'cpp_graduate', 'Thạc Sĩ C++ Cơ Bản', 'Hoàn thành xuất sắc toàn bộ 15 bài học trên nền tảng.', 'fas fa-graduation-cap', 'Hoàn thành tất cả 15 bài học')
ON DUPLICATE KEY UPDATE `name` = VALUES(`name`);
