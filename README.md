# C++ Master AI - Nền Tảng Học Lập Trình C++ Trực Tuyến Tích Hợp AI

Một nền tảng học tập trực tuyến hiện đại, toàn diện và chuyên sâu về **Lập trình C++ dành cho người mới bắt đầu**, đặc biệt tối ưu cho sinh viên năm nhất ngành **Công nghệ thông tin** và **Sư phạm Tin học**.

Dự án được cấu trúc phân tầng rõ ràng thành **3 thư mục độc lập**:
- 🌐 **`frontend/`**: Toàn bộ giao diện người dùng (HTML5, CSS3, JavaScript SPA).
- ☕ **`backend/`**: Máy chủ web & REST API bằng Java chuẩn (`Server.java`).
- 🗄️ **`database/`**: Bản thiết kế cơ sở dữ liệu (`schema.sql`, `seed_data.sql`, `curriculum.json`).

---

## ⚡ HƯỚNG DẪN KHỞI CHẠY NHANH

### Cách 1: Sử dụng File khởi chạy 1-Click (Dễ nhất trên Windows)
1. Trong thư mục gốc `d:\Web`, click đúp vào file **`start.bat`**.
2. Chọn:
   - **Phím `1`**: Mở trực tiếp giao diện Frontend trên trình duyệt (hoạt động ngay 100% không cần server).
   - **Phím `2`**: Khởi động Backend Java Server và mở `http://localhost:8080`.

---

### Cách 2: Mở trực tiếp thư mục `frontend/`
1. Vào thư mục `frontend/`.
2. Click đúp vào file **`index.html`** để mở trên bất kỳ trình duyệt nào.
3. Hoạt động đầy đủ tính năng: 15 bài học, 150 câu trắc nghiệm, AI phân tích đánh giá, Chatbot AI C++ Mentor và lưu trữ tiến độ trong `localStorage`.

---

### Cách 3: Chạy qua Backend Java Server
1. Vào thư mục `backend/`.
2. Click đúp file **`run.bat`** (hoặc mở terminal gõ: `java Server.java`).
3. Mở trình duyệt truy cập: **`http://localhost:8080`**.

---

## 📁 CẤU TRÚC THƯ MỤC DỰ ÁN CHI TIẾT

```
d:\Web/
│
├── 🌐 frontend/                      # TẦNG GIAO DIỆN NGƯỜI DÙNG (FRONTEND)
│   ├── index.html                   # Trang chủ ứng dụng web SPA
│   └── assets/
│       ├── css/
│       │   ├── style.css            # Hệ thống Design System, Dark/Light mode, biến màu
│       │   ├── components.css       # Nút bấm, thẻ bài học, modal, quiz card, chat widget
│       │   └── animations.css       # Hiệu ứng chuyển động mượt mà, viền sáng
│       └── js/
│           ├── curriculum_data.js   # Bộ dữ liệu 15 bài học chuẩn & 150 câu hỏi trắc nghiệm
│           ├── client_engine.js     # Động cơ AI phân tích, chấm điểm, lưu trữ localStorage
│           ├── utils.js             # Tiện ích API Client, Toast thông báo, Theme Manager
│           ├── home.js              # Xử lý Trang chủ, bộ đếm KPI, chạy code C++ thử
│           ├── lesson.js            # Danh mục bài học, chi tiết bài học, lỗi thường gặp
│           ├── quiz.js              # Trình làm quiz, đếm ngược, báo cáo đánh giá AI
│           ├── ai_tutor.js          # Chatbot AI C++ Mentor 24/7 (hỏi đáp code, debug)
│           ├── profile.js           # Hồ sơ cá nhân, biểu đồ Chart.js, 8 huy hiệu
│           └── app.js               # Bộ định tuyến SPA và quản lý tài khoản người dùng
│
├── ☕ backend/                       # TẦNG MÁY CHỦ DỊCH VỤ (BACKEND)
│   ├── Server.java                  # Máy chủ Java HttpServer phục vụ Frontend & REST API
│   └── run.bat                      # Script 1-click khởi chạy máy chủ Java trên port 8080
│
├── 🗄️ database/                      # TẦNG CƠ SỞ DỮ LIỆU (DATABASE)
│   ├── schema.sql                   # Thiết kế DDL hoàn chỉnh cho MySQL/MariaDB
│   ├── seed_data.sql                # Dữ liệu tài khoản demo ban đầu và 8 huy hiệu
│   ├── curriculum.json              # File JSON trích xuất toàn bộ 15 bài học & 150 câu test
│   └── README_DATABASE.md           # Tài liệu giải thích mô hình thực thể ERD & quan hệ khóa
│
├── index.html                       # File chuyển tiếp nhanh vào frontend/index.html
├── start.bat                        # File khởi động thông minh 1-click cho người dùng
└── README.md                        # Tài liệu hướng dẫn tổng quan dự án
```

---

## 🌟 TÓM TẮT CHỨC NĂNG CÁC PHÂN HỆ

### 1. Phân hệ Bài học (15 Bài C++ từ cơ bản đến OOP)
- **Chương 1:** Giới thiệu C++ & Cấu trúc chương trình (Bài 1, 2).
- **Chương 2:** Biến, kiểu dữ liệu & Toán tử (Bài 3, 4).
- **Chương 3:** Câu lệnh rẽ nhánh If-Else & Switch-Case (Bài 5, 6).
- **Chương 4:** Vòng lặp For, While, Do-While (Bài 7).
- **Chương 5:** Cấu trúc dữ liệu Mảng 1 chiều & Mảng 2 chiều (Bài 8, 9).
- **Chương 6:** Hàm & Kỹ thuật Đệ quy (Bài 10, 11).
- **Chương 7:** Con trỏ & Quản lý bộ nhớ Heap (Bài 12).
- **Chương 8:** Chuỗi ký tự & Kiểu dữ liệu cấu trúc Struct (Bài 13, 14).
- **Chương 9:** Lập trình hướng đối tượng OOP (Bài 15).

Mỗi bài đều có: Lý thuyết chi tiết, Code mẫu có giải thích từng dòng, Ứng dụng thực tế, Những lỗi thường gặp và Ràng buộc chỉ được đánh dấu hoàn thành sau khi làm bài quiz đạt từ 5.0đ trở lên.

### 2. Phân hệ Trắc nghiệm & AI Đánh giá (Quiz & AI Evaluation)
- Mỗi bài học có **10 câu hỏi riêng** (tổng cộng 150 câu).
- Chấm điểm tự động thang điểm 10, đồng hồ đếm ngược, hiển thị đáp án đúng và giải thích cặn kẽ từng câu.
- **AI Đánh giá năng lực:**
  - Phân tích điểm số theo 4 phân hạng: Xuất sắc (9-10), Khá (7-8), Trung bình (5-6), Chưa đạt (<5).
  - Tự động tách biệt **Kiến thức đã nắm vững** và **Kiến thức còn yếu** dựa trên các câu làm sai.
  - Đưa ra lời khuyên học tập, lộ trình hành động và **bài tập thực hành thử thách riêng**.

### 3. Phân hệ Chatbot AI C++ Mentor 24/7
- Hỗ trợ giải thích code, phân tích lỗi biên dịch / Segmentation fault.
- Nút *"Nhờ AI giải thích sâu hơn"* trực tiếp dưới từng câu quiz làm sai.
- Hỗ trợ cả Engine cục bộ tích hợp sẵn lẫn tùy chọn điền Google Gemini API Key.

### 4. Phân hệ Hồ sơ cá nhân (Profile Dashboard)
- Thống kê tỷ lệ hoàn thành %, điểm trung bình, điểm cao nhất.
- Biểu đồ đường **Chart.js** thể hiện tiến độ học tập qua thời gian.
- Bộ sưu tập 8 huy hiệu thành tích mở khóa tự động khi đạt tiêu chuẩn.

---

## 👥 TÀI KHOẢN TRẢI NGHIỆM MẪU (1-CLICK TEST)

| Vai trò | Tên đăng nhập | Mật khẩu | Mục đích sử dụng |
| :--- | :--- | :--- | :--- |
| **Sinh viên CNTT** | `student` | `123456` | Trải nghiệm học bài, làm quiz, nhận đánh giá AI, mở huy hiệu |
| **Giảng viên Sư phạm** | `teacher` | `123456` | Trải nghiệm góc độ giảng dạy, tham khảo giáo án và ngân hàng câu hỏi |
| **Quản trị viên** | `admin` | `admin123` | Quản trị toàn bộ hệ thống |
