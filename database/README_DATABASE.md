# Tài Liệu Thiết Kế Cơ Sở Dữ Liệu - C++ Master AI Platform

Tài liệu mô tả chi tiết mô hình dữ liệu quan hệ (Relational Database Design) của nền tảng học lập trình C++ tích hợp AI.

---

## 1. CÁC THỰC THỂ CHÍNH TRONG HỆ THỐNG

| Bảng | Tên tiếng Việt | Mục đích sử dụng |
| :--- | :--- | :--- |
| `users` | Người dùng | Quản lý thông tin tài khoản: sinh viên, giảng viên, admin. |
| `lessons` | Bài học C++ | Quản lý nội dung 15 bài học, mục tiêu, lý thuyết, code mẫu, lỗi thường gặp. |
| `quizzes` | Bộ bài kiểm tra | Định nghĩa bài kiểm tra trắc nghiệm gắn với từng bài học (1-to-1). |
| `quiz_questions` | Câu hỏi trắc nghiệm | 150 câu hỏi trắc nghiệm 4 đáp án A, B, C, D kèm giải thích và tag chuyên đề. |
| `user_progress` | Tiến độ học tập | Theo dõi trạng thái hoàn thành bài học của từng người dùng. |
| `quiz_attempts` | Lịch sử làm bài test | Lưu lại từng lần làm bài, điểm số, thời gian và **báo cáo phân tích chuyên sâu của AI**. |
| `badges` | Danh mục huy hiệu | 8 huy hiệu thành tích khuyến khích học tập. |
| `user_badges` | Huy hiệu đạt được | Quan hệ N-to-N giữa người học và huy hiệu. |
| `ai_chat_history` | Lịch sử Chatbot AI | Lưu các đoạn hội thoại hỏi đáp với trợ lý ảo C++ Mentor. |

---

## 2. QUAN HỆ KHÓA NGOẠI (FOREIGN KEYS)

- `quizzes.lesson_id` $\rightarrow$ `lessons.id` (ON DELETE CASCADE)
- `quiz_questions.quiz_id` $\rightarrow$ `quizzes.id` (ON DELETE CASCADE)
- `user_progress.user_id` $\rightarrow$ `users.id` (ON DELETE CASCADE)
- `user_progress.lesson_id` $\rightarrow$ `lessons.id` (ON DELETE CASCADE)
- `quiz_attempts.user_id` $\rightarrow$ `users.id` (ON DELETE CASCADE)
- `quiz_attempts.lesson_id` $\rightarrow$ `lessons.id` (ON DELETE CASCADE)
- `user_badges.user_id` $\rightarrow$ `users.id` (ON DELETE CASCADE)
- `user_badges.badge_id` $\rightarrow$ `badges.id` (ON DELETE CASCADE)

---

## 3. HƯỚNG DẪN IMPORT VÀO MYSQL / PHPMYADMIN

1. Mở phpMyAdmin hoặc MySQL Workbench.
2. Tạo mới cơ sở dữ liệu `cpp_learning` với bảng mã `utf8mb4_unicode_ci`.
3. Chạy file SQL:
   - Bước 1: Import file `database/schema.sql` (tạo cấu trúc bảng).
   - Bước 2: Import file `database/seed_data.sql` (nạp tài khoản mẫu & huy hiệu).
4. Dữ liệu bài học và câu hỏi được lưu trữ dạng JSON trong file `database/curriculum.json`.
