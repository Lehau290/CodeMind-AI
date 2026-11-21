// assets/js/curriculum_data.js - Complete 15 C++ Lessons and 150+ Questions
window.CPP_DATA = {
    "lessons": [
        {
            "id": "1",
            "chapter": "1",
            "chapter_title": "Chương 1: Khởi Động Với C++",
            "title": "Giới thiệu về ngôn ngữ lập trình C++",
            "slug": "gioi-thieu-ve-ngon-ngu-lap-trinh-cpp",
            "description": "Tìm hiểu nguồn gốc, lịch sử phát triển, đặc điểm vượt trội của C++ và chuẩn bị môi trường lập trình đầu tiên.",
            "duration_mins": "25",
            "objectives": [
                "Nắm rõ nguồn gốc ra đời của C++ từ Bjarne Stroustrup (Bell Labs).",
                "Hiểu được vì sao C++ là ngôn ngữ nền tảng cho sinh viên CNTT & Sư phạm Tin.",
                "Phân biệt được trình biên dịch (Compiler) và trình thông dịch (Interpreter).",
                "Biết cách cài đặt môi trường (VS Code, Code::Blocks, Dev-C++ hoặc MinGW GCC)."
            ],
            "theory_content": "### 1. Lịch sử và nguồn gốc C++\nC++ được phát triển bởi nhà khoa học máy tính người Đan Mạch **Bjarne Stroustrup** vào năm 1979 tại Bell Labs. Ban đầu, ông gọi nó là *\"C with Classes\"* (C có lớp) với mục đích bổ sung các tính năng lập trình hướng đối tượng (OOP) vào ngôn ngữ C vốn rất mạnh mẽ và tốc độ cao. Đến năm 1983, ngôn ngữ chính thức được đổi tên thành **C++**. Toán tử `++` trong C nghĩa là tăng lên 1 đơn vị, thể hiện sự nâng cấp vượt bậc so với C cổ điển.\n\n### 2. Vì sao C++ là môn học bắt buộc cho sinh viên CNTT & Sư phạm Tin?\n* **Hiệu năng cực cao (High Performance):** C++ cho phép tương tác trực tiếp với bộ nhớ máy tính (thông qua con trỏ) và được biên dịch trực tiếp sang mã máy (Machine Code) thay vì qua máy ảo, đem lại tốc độ thực thi tối ưu.\n* **Tư duy thuật toán chuẩn mực:** Hầu hết các kỳ thi Học sinh Giỏi Tin học (Olympic Tin học, Tin học trẻ, ACM-ICPC Quốc tế) đều chọn C++ làm ngôn ngữ tiêu chuẩn.\n* **Cầu nối phương pháp sư phạm:** Sinh viên Sư phạm Tin học học C++ để có nền tảng giảng dạy chương trình Tin học phổ thông mới (GDPT 2018) và bồi dưỡng đội tuyển lập trình.\n* **Hỗ trợ đa mô hình (Multi-paradigm):** Vừa hỗ trợ lập trình cấu trúc thủ tục (Procedural) vừa hỗ trợ lập trình hướng đối tượng (Object-Oriented).\n\n### 3. Quy trình dịch mã nguồn C++\nKhi bạn viết file `main.cpp`, máy tính không hiểu trực tiếp các dòng chữ tiếng Anh này. Quá trình xử lý diễn ra qua 4 giai đoạn:\n1. **Tiền xử lý (Preprocessor):** Xử lý các chỉ thị bắt đầu bằng `#` (như `#include`, `#define`).\n2. **Biên dịch (Compilation):** Kiểm tra cú pháp và dịch mã C++ thành mã hợp ngữ (Assembly).\n3. **Lắp ráp (Assembler):** Chuyển hợp ngữ thành mã máy (Object file `.obj` hoặc `.o`).\n4. **Liên kết (Linker):** Ghép các thư viện hệ thống và các file đối tượng lại thành file thực thi duy nhất (`.exe` trên Windows).",
            "code_examples": [
                {
                    "title": "Chương trình C++ đầu tiên - Hello World",
                    "code": "#include <iostream>\n\nint main() {\n    \/\/ In lời chào ra màn hình console\n    std::cout << \"Chao mung ban den voi the gioi lap trinh C++!\" << std::endl;\n    return 0;\n}",
                    "input": "Không có",
                    "output": "Chao mung ban den voi the gioi lap trinh C++!",
                    "explanation": "Dòng 1 nạp thư viện xuất nhập iostream. Hàm main() là điểm bắt đầu thực thi của mọi chương trình C++. std::cout gửi chuỗi ký tự ra màn hình console. return 0 báo hiệu chương trình kết thúc thành công."
                }
            ],
            "real_world_application": "C++ là linh hồn của các hệ điều hành lớn (Windows, macOS, Android runtime), các engine game đồ họa khủng nhất hành tinh (Unreal Engine 5, Frostbite), các phần mềm thương mại hàng đầu (Adobe Photoshop, Microsoft Office), và các hệ thống giao dịch tài chính tần suất cao (High-Frequency Trading) nơi mỗi micro-giây đều quyết định hàng triệu USD.",
            "common_pitfalls": [
                {
                    "mistake": "Quên chấm phẩy (;) ở cuối câu lệnh.",
                    "reason": "Trình biên dịch C++ coi dấu chấm phẩy là ký hiệu kết thúc một câu lệnh đơn lẻ.",
                    "fix": "Luôn nhớ đặt dấu ; ở cuối mỗi lệnh thực thi."
                },
                {
                    "mistake": "Nhầm lẫn giữa chữ hoa và chữ thường (ví dụ: Main() thay vì main()).",
                    "reason": "C++ là ngôn ngữ phân biệt hoa thường tuyệt đối (Case-sensitive).",
                    "fix": "Hàm khởi đầu bắt buộc phải viết thường toàn bộ là main()."
                }
            ],
            "order_num": "1",
            "quiz": {
                "id": "1",
                "lesson_id": "1",
                "title": "Kiểm tra trắc nghiệm: Giới thiệu ngôn ngữ C++",
                "time_limit_mins": "10",
                "pass_score": "5.0",
                "questions": [
                    {
                        "id": "1",
                        "quiz_id": "1",
                        "question_text": "Ai là tác giả sáng tạo ra ngôn ngữ lập trình C++?",
                        "code_snippet": null,
                        "option_a": "Dennis Ritchie",
                        "option_b": "Bjarne Stroustrup",
                        "option_c": "James Gosling",
                        "option_d": "Guido van Rossum",
                        "correct_option": "B",
                        "explanation": "Bjarne Stroustrup phát triển C++ tại Bell Labs từ năm 1979. Dennis Ritchie tạo ra ngôn ngữ C, James Gosling tạo Java, Guido van Rossum tạo Python.",
                        "concept_tag": "history",
                        "order_num": "1"
                    },
                    {
                        "id": "2",
                        "quiz_id": "1",
                        "question_text": "Tên gọi ban đầu của ngôn ngữ C++ trước năm 1983 là gì?",
                        "code_snippet": null,
                        "option_a": "C Advanced",
                        "option_b": "New C",
                        "option_c": "C with Classes",
                        "option_d": "Object C",
                        "correct_option": "C",
                        "explanation": "Ban đầu Bjarne Stroustrup đặt tên dự án là \"C with Classes\" (C có lớp) trước khi đổi tên chính thức thành C++ vào năm 1983.",
                        "concept_tag": "history",
                        "order_num": "2"
                    },
                    {
                        "id": "3",
                        "quiz_id": "1",
                        "question_text": "Ý nghĩa của toán tử \"++\" trong cái tên C++ là gì?",
                        "code_snippet": null,
                        "option_a": "Nhân đôi sức mạnh của C",
                        "option_b": "Toán tử tăng lên một đơn vị trong C, ngụ ý C++ là bước tiến tiến hóa của C",
                        "option_c": "Cộng thêm ngôn ngữ C và ngôn ngữ Pascal",
                        "option_d": "Viết tắt của Computer Programming",
                        "correct_option": "B",
                        "explanation": "Trong C, ++ là toán tử tăng 1 đơn vị. Rick Mascitti đề xuất tên C++ để ẩn dụ rằng ngôn ngữ này là sự nâng cấp, kế thừa và phát triển từ C.",
                        "concept_tag": "concept",
                        "order_num": "3"
                    },
                    {
                        "id": "4",
                        "quiz_id": "1",
                        "question_text": "Thành phần nào trong quy trình dịch mã có nhiệm vụ kết hợp mã đối tượng (.obj) với các thư viện để tạo file thực thi (.exe)?",
                        "code_snippet": null,
                        "option_a": "Preprocessor (Trình tiền xử lý)",
                        "option_b": "Compiler (Trình biên dịch)",
                        "option_c": "Assembler (Trình hợp ngữ)",
                        "option_d": "Linker (Trình liên kết)",
                        "correct_option": "D",
                        "explanation": "Linker (Trình liên kết) chịu trách nhiệm liên kết các file mã đối tượng cùng với các thư viện ngoài để tạo ra file thực thi (.exe trên Windows).",
                        "concept_tag": "compilation",
                        "order_num": "4"
                    },
                    {
                        "id": "5",
                        "quiz_id": "1",
                        "question_text": "C++ là ngôn ngữ thuộc mô hình lập trình nào?",
                        "code_snippet": null,
                        "option_a": "Chỉ thuần túy hướng đối tượng (Pure OOP)",
                        "option_b": "Chỉ lập trình thủ tục cấu trúc (Procedural)",
                        "option_c": "Đa mô hình (Multi-paradigm): hỗ trợ cả thủ tục cấu trúc và hướng đối tượng",
                        "option_d": "Chỉ lập trình hàm (Functional Programming)",
                        "correct_option": "C",
                        "explanation": "C++ là ngôn ngữ đa mô hình (Multi-paradigm), cho phép lập trình cấu trúc, hướng đối tượng (OOP) và lập trình tổng quát (Generic Programming).",
                        "concept_tag": "concept",
                        "order_num": "5"
                    },
                    {
                        "id": "6",
                        "quiz_id": "1",
                        "question_text": "Phần mở rộng chuẩn (file extension) của tệp mã nguồn C++ là gì?",
                        "code_snippet": null,
                        "option_a": ".c",
                        "option_b": ".cpp",
                        "option_c": ".cp",
                        "option_d": ".cs",
                        "correct_option": "B",
                        "explanation": "File mã nguồn C++ thường có đuôi là .cpp (hoặc .cc, .cxx). Đuôi .c là của ngôn ngữ C, .cs là của C#.",
                        "concept_tag": "syntax",
                        "order_num": "6"
                    },
                    {
                        "id": "7",
                        "quiz_id": "1",
                        "question_text": "Hàm nào bắt buộc phải có trong một chương trình C++ hoàn chỉnh để làm điểm bắt đầu chạy?",
                        "code_snippet": null,
                        "option_a": "start()",
                        "option_b": "run()",
                        "option_c": "main()",
                        "option_d": "begin()",
                        "correct_option": "C",
                        "explanation": "Hàm main() là hàm bắt buộc - hệ điều hành sẽ tìm đến hàm main() đầu tiên để khởi chạy chương trình.",
                        "concept_tag": "syntax",
                        "order_num": "7"
                    },
                    {
                        "id": "8",
                        "quiz_id": "1",
                        "question_text": "Trình biên dịch mã nguồn mở nào sau đây phổ biến nhất cho C++ trên nền tảng Linux và Windows (MinGW)?",
                        "code_snippet": null,
                        "option_a": "GCC \/ G++",
                        "option_b": "Python Bytecode Compiler",
                        "option_c": "JVM",
                        "option_d": "Node.js V8 Engine",
                        "correct_option": "A",
                        "explanation": "GCC (GNU Compiler Collection) và đặc biệt là G++ là bộ trình biên dịch C\/C++ mã nguồn mở nổi tiếng và phổ biến hàng đầu.",
                        "concept_tag": "tooling",
                        "order_num": "8"
                    },
                    {
                        "id": "9",
                        "quiz_id": "1",
                        "question_text": "Phát biểu nào sau đây là SAI về C++?",
                        "code_snippet": null,
                        "option_a": "C++ phân biệt chữ hoa và chữ thường.",
                        "option_b": "Mọi câu lệnh đơn trong C++ đều kết thúc bằng dấu chấm phẩy (;).",
                        "option_c": "C++ là ngôn ngữ thông dịch trực tiếp giống như Python, không cần biên dịch.",
                        "option_d": "C++ cho phép quản lý bộ nhớ thủ công thông qua con trỏ.",
                        "correct_option": "C",
                        "explanation": "C++ là ngôn ngữ biên dịch (Compiled language), không phải ngôn ngữ thông dịch (Interpreted). Mã nguồn C++ được dịch trực tiếp sang mã máy.",
                        "concept_tag": "concept",
                        "order_num": "9"
                    },
                    {
                        "id": "10",
                        "quiz_id": "1",
                        "question_text": "Chỉ thị tiền xử lý trong C++ bắt đầu bằng ký tự nào?",
                        "code_snippet": null,
                        "option_a": "\/\/",
                        "option_b": "$",
                        "option_c": "#",
                        "option_d": "@",
                        "correct_option": "C",
                        "explanation": "Mọi chỉ thị tiền xử lý (Preprocessor directive) như #include, #define, #ifndef đều bắt đầu bằng dấu thăng (#).",
                        "concept_tag": "syntax",
                        "order_num": "10"
                    }
                ]
            }
        },
        {
            "id": "2",
            "chapter": "1",
            "chapter_title": "Chương 1: Khởi Động Với C++",
            "title": "Cấu trúc chương trình C++",
            "slug": "cau-truc-chuong-trinh-cpp",
            "description": "Mổ xẻ từng thành phần của một chương trình C++ chuẩn: thư viện iostream, không gian tên std, hàm main, lệnh nhập xuất cin\/cout.",
            "duration_mins": "30",
            "objectives": [
                "Hiểu rõ mục đích của chỉ thị `#include <iostream>`.",
                "Nắm bản chất của lệnh `using namespace std;` và tránh xung đột tên.",
                "Sử dụng thành thạo đối tượng `std::cout` để xuất dữ liệu và `std::cin` để nhập dữ liệu.",
                "Biết cách sử dụng toán tử trích xuất `<<` và chèn `>>`, hiểu ý nghĩa của `std::endl` và `\\n`."
            ],
            "theory_content": "### 1. Phân tích cấu trúc khung một chương trình C++\nMột chương trình C++ căn bản luôn tuân thủ bộ khung chuẩn sau:\n\n```cpp\n#include <iostream>       \/\/ [1] Khai báo thư viện vào\/ra chuẩn\nusing namespace std;      \/\/ [2] Sử dụng không gian tên chuẩn std\n\nint main() {              \/\/ [3] Hàm điểm vào thực thi chương trình\n    \/\/ [4] Khối lệnh thực thi\n    cout << \"Xin chao sinh vien CNTT va Su pham Tin!\" << endl;\n    \n    return 0;             \/\/ [5] Trả về mã thoát 0 (thành công)\n}\n```\n\n### 2. Chi tiết từng thành phần cốt lõi\n* **`#include <iostream>`:** Tên viết tắt của *Input Output Stream*. Thư viện này chứa các định nghĩa quan trọng như `cout` (xuất ra console) và `cin` (nhập từ bàn phím). Nếu không include thư viện này, compiler sẽ báo lỗi `cin\/cout was not declared in this scope`.\n* **`using namespace std;`:** C++ nhóm các hàm và đối tượng chuẩn vào không gian tên `std` để tránh đụng độ tên hàm. Khai báo này giúp bạn viết trực tiếp `cout` thay vì phải gõ dài dòng `std::cout`.\n* **`int main()`:** Đây là \"trái tim\" của chương trình. Khi bạn nhấn Run, hệ điều hành sẽ tìm và bắt đầu chạy lệnh đầu tiên trong cặp ngoặc nhọn `{}` của hàm `main()`.\n* **Toán tử `<<` và `>>`:**\n  - `cout << x;` : Đẩy (insert) giá trị của `x` ra luồng màn hình.\n  - `cin >> x;` : Lấy (extract) giá trị từ luồng bàn phím gán vào biến `x`.\n* **`endl` vs `'\\n'`:** Cả hai đều xuống dòng, nhưng `endl` còn thực hiện thao tác xóa bộ đệm (flush buffer), do đó trong các bài toán thi đấu lập trình xử lý triệu phép tính, người ta ưu tiên `'\\n'` để tăng tốc độ.",
            "code_examples": [
                {
                    "title": "Chương trình nhập tuổi và in lời chào cá nhân hóa",
                    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int tuoi;\n    cout << \"Nhap vao tuoi cua ban: \";\n    cin >> tuoi;\n    \n    cout << \"Nam nay ban \" << tuoi << \" tuoi.\" << endl;\n    cout << \"Nam sau ban se \" << (tuoi + 1) << \" tuoi!\" << endl;\n    \n    return 0;\n}",
                    "input": "18",
                    "output": "Nhap vao tuoi cua ban: Nam nay ban 18 tuoi.\nNam sau ban se 19 tuoi!",
                    "explanation": "Chương trình dùng cin >> tuoi để hứng số người dùng gõ từ bàn phím, sau đó dùng cout kết hợp toán tử << để in chuỗi và biểu thức (tuoi + 1)."
                }
            ],
            "real_world_application": "Lệnh nhập\/xuất `cin`\/`cout` mô phỏng giao tiếp tương tác giữa người dùng và máy tính (CLI - Command Line Interface). Mọi phần mềm kiểm kê kho bãi, bảng điều khiển máy rút tiền ATM, hoặc hệ thống lệnh trên router viễn thông Cisco đều hoạt động trên nguyên lý luồng nhập\/xuất này.",
            "common_pitfalls": [
                {
                    "mistake": "Dùng nhầm chiều toán tử: cin << x hoặc cout >> x.",
                    "reason": "Toán tử >> trỏ vào biến (lấy dữ liệu đổ vào biến), còn << trỏ ra cout (đẩy dữ liệu ra ngoài).",
                    "fix": "Nhớ quy tắc: cout ĐẨY RA (<<), cin HỨNG VÀO (>>)."
                },
                {
                    "mistake": "Quên return 0 ở cuối hàm int main().",
                    "reason": "Mặc dù chuẩn C++98 trở đi tự động chèn return 0, nhưng việc thiếu return có thể làm giảm tính tường minh và gây lỗi trên một số compiler cũ.",
                    "fix": "Luôn chủ động viết return 0; trước dấu đóng ngoặc } của main."
                }
            ],
            "order_num": "2",
            "quiz": {
                "id": "2",
                "lesson_id": "2",
                "title": "Kiểm tra trắc nghiệm: Cấu trúc chương trình C++",
                "time_limit_mins": "12",
                "pass_score": "5.0",
                "questions": [
                    {
                        "id": "11",
                        "quiz_id": "2",
                        "question_text": "Thư viện nào trong C++ cần thiết nhất để sử dụng hai đối tượng cin và cout?",
                        "code_snippet": null,
                        "option_a": "<stdio.h>",
                        "option_b": "<iostream>",
                        "option_c": "<cmath>",
                        "option_d": "<string>",
                        "correct_option": "B",
                        "explanation": "Thư viện <iostream> (Input Output Stream) cung cấp định nghĩa cho các luồng nhập xuất chuẩn cin, cout, cerr, clog.",
                        "concept_tag": "headers",
                        "order_num": "1"
                    },
                    {
                        "id": "12",
                        "quiz_id": "2",
                        "question_text": "Câu lệnh \"using namespace std;\" có tác dụng chính là gì?",
                        "code_snippet": null,
                        "option_a": "Tự động kiểm tra lỗi chính tả trong mã nguồn",
                        "option_b": "Tăng tốc độ chạy chương trình lên gấp đôi",
                        "option_c": "Cho phép sử dụng trực tiếp các thành phần trong không gian tên std mà không cần tiền tố std::",
                        "option_d": "Khai báo một biến toàn cục tên là std",
                        "correct_option": "C",
                        "explanation": "Lệnh using namespace std; cho phép gọi trực tiếp các định danh chuẩn như cout, cin, endl thay vì phải gõ std::cout, std::cin.",
                        "concept_tag": "namespaces",
                        "order_num": "2"
                    },
                    {
                        "id": "13",
                        "quiz_id": "2",
                        "question_text": "Toán tử nào được sử dụng để xuất dữ liệu ra màn hình với cout?",
                        "code_snippet": null,
                        "option_a": ">> (extraction operator)",
                        "option_b": "<< (insertion operator)",
                        "option_c": "<= (less than or equal)",
                        "option_d": "-> (member selection)",
                        "correct_option": "B",
                        "explanation": "Toán tử chèn << (insertion operator) được dùng cùng cout để đẩy luồng dữ liệu ra màn hình console.",
                        "concept_tag": "syntax",
                        "order_num": "3"
                    },
                    {
                        "id": "14",
                        "quiz_id": "2",
                        "question_text": "Cho đoạn code sau, kết quả hiển thị trên màn hình là gì?",
                        "code_snippet": "#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"Hello\" << \" \" << \"C++\" << endl;\n    return 0;\n}",
                        "option_a": "HelloC++",
                        "option_b": "Hello C++",
                        "option_c": "Hello C++ (xuống dòng)",
                        "option_d": "Báo lỗi biên dịch vì dùng nhiều toán tử <<",
                        "correct_option": "C",
                        "explanation": "Toán tử << có thể nối tiếp nhau (chaining). In ra \"Hello C++\" và endl sẽ đẩy con trỏ xuống dòng mới.",
                        "concept_tag": "output_tracing",
                        "order_num": "4"
                    },
                    {
                        "id": "15",
                        "quiz_id": "2",
                        "question_text": "Cách nào sau đây là cú pháp chú thích (comment) trên một dòng trong C++?",
                        "code_snippet": null,
                        "option_a": "\/* Chu thich *\/",
                        "option_b": "# Chu thich",
                        "option_c": "-- Chu thich",
                        "option_d": "\/\/ Chu thich",
                        "correct_option": "D",
                        "explanation": "\/\/ dùng để chú thích 1 dòng trong C++. Khối chú thích nhiều dòng dùng \/* ... *\/.",
                        "concept_tag": "syntax",
                        "order_num": "5"
                    },
                    {
                        "id": "16",
                        "quiz_id": "2",
                        "question_text": "Giá trị trả về 0 trong câu lệnh \"return 0;\" ở hàm main() mang ý nghĩa gì với hệ điều hành?",
                        "code_snippet": null,
                        "option_a": "Chương trình bị lỗi nghiêm trọng",
                        "option_b": "Chương trình đã thực thi thành công không có lỗi",
                        "option_c": "Chương trình chưa in ra kết quả nào",
                        "option_d": "Chương trình cần khởi động lại máy tính",
                        "correct_option": "B",
                        "explanation": "Quy ước chuẩn: return 0 từ hàm main thông báo cho hệ điều hành rằng tiến trình đã kết thúc bình thường và thành công (EXIT_SUCCESS).",
                        "concept_tag": "concept",
                        "order_num": "6"
                    },
                    {
                        "id": "17",
                        "quiz_id": "2",
                        "question_text": "Điểm khác biệt quan trọng giữa std::endl và ký tự '\\n' là gì?",
                        "code_snippet": null,
                        "option_a": "endl chỉ hoạt động trên hệ điều hành Windows",
                        "option_b": "endl ngoài việc xuống dòng còn tự động xả bộ đệm (flush stream buffer)",
                        "option_c": "'\\n' gây lỗi tràn bộ nhớ",
                        "option_d": "Không có bất kỳ sự khác biệt nào",
                        "correct_option": "B",
                        "explanation": "std::endl in ký tự xuống dòng đồng thời ép buộc xả bộ đệm đầu ra (flushes the output buffer). '\\n' chỉ đơn thuần là ký tự xuống dòng.",
                        "concept_tag": "io_streams",
                        "order_num": "7"
                    },
                    {
                        "id": "18",
                        "quiz_id": "2",
                        "question_text": "Đoạn code nào sau đây dùng để nhập một số nguyên x từ bàn phím hợp lệ?",
                        "code_snippet": null,
                        "option_a": "cin << x;",
                        "option_b": "cin >> x;",
                        "option_c": "cout >> x;",
                        "option_d": "read(cin, x);",
                        "correct_option": "B",
                        "explanation": "Cú pháp nhập dữ liệu vào biến x là cin >> x; với toán tử trích xuất >>.",
                        "concept_tag": "syntax",
                        "order_num": "8"
                    },
                    {
                        "id": "19",
                        "quiz_id": "2",
                        "question_text": "Nếu quên dấu chấm phẩy (;) ở cuối lệnh cout << \"Hello\", trình biên dịch sẽ thông báo lỗi gì?",
                        "code_snippet": null,
                        "option_a": "Runtime Error (Lỗi khi chạy)",
                        "option_b": "Compile Error: expected ';' before ...",
                        "option_c": "Segmentation Fault",
                        "option_d": "Logical Error (Lỗi logic)",
                        "correct_option": "B",
                        "explanation": "Thiếu dấu ; là lỗi cú pháp (Syntax error \/ Compile Error) do trình biên dịch phát hiện ngay trong quá trình biên dịch.",
                        "concept_tag": "compiler_errors",
                        "order_num": "9"
                    },
                    {
                        "id": "20",
                        "quiz_id": "2",
                        "question_text": "Khối lệnh của hàm main() được bao bọc bởi cặp ký hiệu nào?",
                        "code_snippet": null,
                        "option_a": "( )",
                        "option_b": "[ ]",
                        "option_c": "{ }",
                        "option_d": "< >",
                        "correct_option": "C",
                        "explanation": "Trong C++, tất cả các khối lệnh (block of code) của hàm hoặc cấu trúc điều khiển đều được bao bọc trong cặp ngoặc nhọn { }.",
                        "concept_tag": "syntax",
                        "order_num": "10"
                    }
                ]
            }
        },
        {
            "id": "3",
            "chapter": "2",
            "chapter_title": "Chương 2: Kiểu Dữ Liệu & Biểu Thức",
            "title": "Biến và các kiểu dữ liệu",
            "slug": "bien-va-cac-kieu-du-lieu",
            "description": "Khám phá các kiểu dữ liệu nguyên thủy (int, float, double, char, bool), kích thước bộ nhớ, quy tắc đặt tên biến và từ khóa hằng số const.",
            "duration_mins": "35",
            "objectives": [
                "Hiểu rõ bản chất biến là vùng nhớ được đặt tên trong RAM.",
                "Nắm vững kích thước và miền giá trị của các kiểu cơ bản: int, long long, float, double, char, bool.",
                "Tuân thủ quy tắc đặt tên biến theo chuẩn quốc tế (camelCase, snake_case).",
                "Phân biệt hằng số `const` và biến thông thường."
            ],
            "theory_content": "### 1. Biến (Variable) là gì?\nHãy tưởng tượng bộ nhớ RAM của máy tính như một dãy các ngăn tủ có địa chỉ số nhà. Khi bạn viết:\n```cpp\nint diemToan = 9;\n```\nHệ điều hành sẽ:\n1. Dành riêng một ngăn tủ có kích thước 4 byte (32 bit).\n2. Dán nhãn lên ngăn tủ đó là `diemToan`.\n3. Bỏ giá trị `9` vào bên trong ngăn tủ.\n\n### 2. Các kiểu dữ liệu cơ bản trong C++\n| Kiểu dữ liệu | Ý nghĩa | Kích thước thông thường | Miền giá trị tiêu biểu |\n| :--- | :--- | :--- | :--- |\n| `int` | Số nguyên | 4 byte (32-bit) | $-2^{31}$ đến $2^{31}-1$ ($\\approx \\pm 2$ tỷ) |\n| `long long` | Số nguyên lớn | 8 byte (64-bit) | $\\approx \\pm 9 \\times 10^{18}$ (rất quan trọng trong thi thuật toán) |\n| `float` | Số thực độ chính xác đơn | 4 byte | Chính xác khoảng 6-7 chữ số thập phân |\n| `double` | Số thực độ chính xác kép | 8 byte | Chính xác khoảng 15 chữ số thập phân (khuyên dùng) |\n| `char` | Một ký tự đơn | 1 byte | Chứa mã ASCII từ 0 đến 255 (ví dụ: `'A'`, `'9'`, `'+'`) |\n| `bool` | Giá trị logic | 1 byte | Chỉ có 2 giá trị: `true` (1) hoặc `false` (0) |\n\n### 3. Quy tắc đặt tên biến hợp lệ\n* **Bắt buộc:** Tên biến chỉ được chứa chữ cái (`a-z`, `A-Z`), chữ số (`0-9`) và dấu gạch dưới (`_`).\n* **Không được:** Bắt đầu bằng chữ số (ví dụ: `1diem` là sai; `diem1` là đúng).\n* **Không được:** Trùng với các từ khóa dành riêng của C++ (như `int`, `return`, `class`, `for`...).\n* **Phân biệt hoa\/thường:** `diemSo` và `DiemSo` là 2 biến hoàn toàn độc lập.\n\n### 4. Hằng số với từ khóa `const`\nHằng số là đại lượng không thể thay đổi giá trị trong suốt quá trình chạy:\n```cpp\nconst double PI = 3.1415926535;\n\/\/ PI = 3.14; \/\/ Compiler lập tức báo lỗi ngay!\n```",
            "code_examples": [
                {
                    "title": "Khai báo biến, tính chu vi và diện tích hình tròn",
                    "code": "#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    const double PI = 3.14159;\n    double banKinh;\n    \n    cout << \"Nhap ban kinh hinh tron: \";\n    cin >> banKinh;\n    \n    double chuVi = 2 * PI * banKinh;\n    double dienTich = PI * banKinh * banKinh;\n    \n    cout << fixed << setprecision(2);\n    cout << \"Chu vi hinh tron: \" << chuVi << endl;\n    cout << \"Dien tich hinh tron: \" << dienTich << endl;\n    \n    return 0;\n}",
                    "input": "5.0",
                    "output": "Nhap ban kinh hinh tron: Chu vi hinh tron: 31.42\nDien tich hinh tron: 78.54",
                    "explanation": "Sử dụng const double PI để giữ nguyên giá trị số Pi. setprecision(2) làm tròn kết quả đến đúng 2 chữ số thập phân."
                }
            ],
            "real_world_application": "Trong phần mềm quản lý ngân hàng, việc chọn `double` hay kiểu số nguyên chính xác quyết định việc tính lãi suất vay không bị sai lệch từng xu lẻ; trong đồ họa game, tọa độ vật thể 3D $(x, y, z)$ được lưu bằng các biến số thực `float`.",
            "common_pitfalls": [
                {
                    "mistake": "Sử dụng biến khi chưa khởi tạo giá trị (Uninitialized variable).",
                    "reason": "Trong C++, biến cục bộ không tự khởi tạo bằng 0 mà sẽ mang giá trị rác (garbage value) ngẫu nhiên có sẵn trong ô nhớ RAM.",
                    "fix": "Luôn khởi tạo biến khi khai báo: int dem = 0; hoặc double tong = 0.0;"
                },
                {
                    "mistake": "Tràn số (Integer Overflow) khi nhân hai số nguyên lớn vượt quá 2 tỷ.",
                    "reason": "Kiểu int chỉ chứa được tối đa khoảng 2.147.483.647.",
                    "fix": "Sử dụng kiểu long long cho các bài toán tính tích hoặc số lượng lớn."
                }
            ],
            "order_num": "3",
            "quiz": {
                "id": "3",
                "lesson_id": "3",
                "title": "Kiểm tra trắc nghiệm: Biến và các kiểu dữ liệu",
                "time_limit_mins": "12",
                "pass_score": "5.0",
                "questions": [
                    {
                        "id": "21",
                        "quiz_id": "3",
                        "question_text": "Tên biến nào sau đây là KHÔNG hợp lệ trong C++?",
                        "code_snippet": null,
                        "option_a": "_diemTrungBinh",
                        "option_b": "sinhVien_2026",
                        "option_c": "2nd_score",
                        "option_d": "SCORE_MAX",
                        "correct_option": "C",
                        "explanation": "Tên biến trong C++ không được bắt đầu bằng chữ số. 2nd_score bắt đầu bằng chữ số 2 nên bị lỗi biên dịch.",
                        "concept_tag": "naming_rules",
                        "order_num": "1"
                    },
                    {
                        "id": "22",
                        "quiz_id": "3",
                        "question_text": "Kích thước tiêu chuẩn của kiểu dữ liệu int trên hầu hết hệ điều hành 32-bit và 64-bit hiện đại là bao nhiêu byte?",
                        "code_snippet": null,
                        "option_a": "1 byte",
                        "option_b": "2 byte",
                        "option_c": "4 byte",
                        "option_d": "8 byte",
                        "correct_option": "C",
                        "explanation": "Trên hầu hết các nền tảng kiến trúc hiện đại, kiểu int chiếm 4 byte (32 bit), biểu diễn từ -2^31 đến 2^31 - 1.",
                        "concept_tag": "memory_size",
                        "order_num": "2"
                    },
                    {
                        "id": "23",
                        "quiz_id": "3",
                        "question_text": "Để lưu trữ một số nguyên có giá trị lên tới 5 tỷ (5,000,000,000), bạn nên sử dụng kiểu dữ liệu nào để không bị tràn số?",
                        "code_snippet": null,
                        "option_a": "short",
                        "option_b": "int",
                        "option_c": "char",
                        "option_d": "long long",
                        "correct_option": "D",
                        "explanation": "Kiểu int chỉ chứa đến ~2.14 tỷ. Do đó 5 tỷ bắt buộc phải dùng kiểu long long (8 byte, chứa đến ~9*10^18).",
                        "concept_tag": "overflow",
                        "order_num": "3"
                    },
                    {
                        "id": "24",
                        "quiz_id": "3",
                        "question_text": "Giá trị của biến bool trong C++ khi gán \"bool ok = true;\" khi in ra bằng cout sẽ hiển thị là gì?",
                        "code_snippet": null,
                        "option_a": "true",
                        "option_b": "1",
                        "option_c": "YES",
                        "option_d": "Báo lỗi không in được",
                        "correct_option": "B",
                        "explanation": "Mặc định cout sẽ in giá trị số nguyên 1 cho true và 0 cho false (trừ khi dùng cờ std::boolalpha).",
                        "concept_tag": "data_types",
                        "order_num": "4"
                    },
                    {
                        "id": "25",
                        "quiz_id": "3",
                        "question_text": "Ký tự (char) trong C++ được đặt trong cặp dấu nào?",
                        "code_snippet": null,
                        "option_a": "Cặp nháy đơn: 'A'",
                        "option_b": "Cặp nháy kép: \"A\"",
                        "option_c": "Cặp ngoặc nhọn: {A}",
                        "option_d": "Cặp gạch chéo: \/A\/",
                        "correct_option": "A",
                        "explanation": "Ký tự đơn được bao bằng nháy đơn 'A'. Nháy kép \"A\" là một chuỗi ký tự (C-string gồm ký tự 'A' và ký tự kết thúc '\\0').",
                        "concept_tag": "syntax",
                        "order_num": "5"
                    },
                    {
                        "id": "26",
                        "quiz_id": "3",
                        "question_text": "Từ khóa nào dùng để khai báo một biến không thể sửa đổi giá trị (hằng số)?",
                        "code_snippet": null,
                        "option_a": "static",
                        "option_b": "final",
                        "option_c": "const",
                        "option_d": "immutable",
                        "correct_option": "C",
                        "explanation": "Từ khóa const trong C++ dùng để định nghĩa hằng số (read-only variable).",
                        "concept_tag": "constants",
                        "order_num": "6"
                    },
                    {
                        "id": "27",
                        "quiz_id": "3",
                        "question_text": "Nếu ta khai báo \"int x;\" trong hàm main mà không gán giá trị, giá trị ban đầu của x sẽ là gì?",
                        "code_snippet": null,
                        "option_a": "Chắc chắn luôn luôn bằng 0",
                        "option_b": "Bằng giá trị rác bất kỳ (Garbage value) ngẫu nhiên trong ô nhớ",
                        "option_c": "Bằng giá trị NULL",
                        "option_d": "Bằng -1",
                        "correct_option": "B",
                        "explanation": "Biến cục bộ tự động trong hàm C++ không được khởi tạo mặc định mà chứa giá trị rác còn sót lại từ vùng nhớ stack.",
                        "concept_tag": "memory",
                        "order_num": "7"
                    },
                    {
                        "id": "28",
                        "quiz_id": "3",
                        "question_text": "Toán tử sizeof trong C++ (ví dụ: sizeof(double)) trả về kết quả là gì?",
                        "code_snippet": null,
                        "option_a": "Số lượng biến trong chương trình",
                        "option_b": "Kích thước của kiểu dữ liệu tính theo đơn vị byte",
                        "option_c": "Kích thước tính theo bit",
                        "option_d": "Địa chỉ ô nhớ của biến",
                        "correct_option": "B",
                        "explanation": "Toán tử sizeof trả về kích thước tính theo đơn vị byte (1 byte = 8 bit). sizeof(double) thường trả về 8.",
                        "concept_tag": "operators",
                        "order_num": "8"
                    },
                    {
                        "id": "29",
                        "quiz_id": "3",
                        "question_text": "Cho đoạn mã: char c = 65; cout << c; Kết quả hiển thị là gì?",
                        "code_snippet": null,
                        "option_a": "65",
                        "option_b": "'65'",
                        "option_c": "A",
                        "option_d": "Lỗi biên dịch vì gán số cho ký tự",
                        "correct_option": "C",
                        "explanation": "Mã ASCII của chữ cái 'A' là 65. Khi gán 65 cho kiểu char và in ra qua cout, nó sẽ hiển thị ký tự tương ứng là 'A'.",
                        "concept_tag": "ascii",
                        "order_num": "9"
                    },
                    {
                        "id": "30",
                        "quiz_id": "3",
                        "question_text": "Kiểu dữ liệu số thực nào có độ chính xác cao hơn giữa float và double?",
                        "code_snippet": null,
                        "option_a": "float có độ chính xác cao hơn",
                        "option_b": "double có độ chính xác cao hơn gấp đôi (Double precision - 8 byte)",
                        "option_c": "Hai kiểu có độ chính xác giống hệt nhau",
                        "option_d": "Tùy thuộc vào giá trị âm hay dương",
                        "correct_option": "B",
                        "explanation": "double (Double Precision - 8 byte, khoảng 15-17 chữ số có nghĩa) có độ chính xác vượt trội so với float (Single Precision - 4 byte, khoảng 6-7 chữ số).",
                        "concept_tag": "data_types",
                        "order_num": "10"
                    }
                ]
            }
        },
        {
            "id": "4",
            "chapter": "2",
            "chapter_title": "Chương 2: Kiểu Dữ Liệu & Biểu Thức",
            "title": "Toán tử trong C++",
            "slug": "toan-tu-trong-cpp",
            "description": "Khảo sát đầy đủ toán tử số học, toán tử quan hệ, toán tử logic, phép chia nguyên và bẫy kinh điển giữa tiền tố ++a và hậu tố a++.",
            "duration_mins": "30",
            "objectives": [
                "Nắm vững 5 nhóm toán tử: Số học, Gán, Quan hệ (So sánh), Logic và Tăng\/Giảm.",
                "Hiểu rõ sự khác biệt bản chất giữa phép chia nguyên `5 \/ 2 = 2` và chia thực `5.0 \/ 2 = 2.5`.",
                "Giải thích được sự khác nhau giữa tiền tố `++x` và hậu tố `x++`.",
                "Nắm nguyên lý đoản mạch (Short-circuit evaluation) của toán tử logic `&&` và `||`."
            ],
            "theory_content": "### 1. Toán tử số học & Bẫy chia nguyên\nCác toán tử: `+`, `-`, `*`, `\/`, `%` (chia lấy dư).\n> **CẢNH BÁO CỰC KỲ QUAN TRỌNG:**\n> Trong C++, nếu hai toán hạng đều là số nguyên (integer), phép chia `\/` sẽ là **phép chia nguyên** (bỏ toàn bộ phần thập phân).\n> - `7 \/ 2` cho kết quả là `3` (không phải `3.5`)!\n> - Để lấy kết quả số thực, ít nhất 1 trong 2 toán hạng phải là số thực: `7.0 \/ 2` hoặc `(double)7 \/ 2` sẽ ra `3.5`.\n> - Toán tử chia lấy dư `%` **chỉ áp dụng cho số nguyên**. `7 % 2` cho kết quả `1`.\n\n### 2. Sự khác nhau giữa `++a` (Tiền tố) và `a++` (Hậu tố)\n* **`++a` (Prefix - Tiền tố):** Tăng giá trị của `a` lên 1 trước, sau đó mới trả về giá trị mới để tính toán biểu thức.\n* **`a++` (Postfix - Hậu tố):** Trả về giá trị hiện tại của `a` để tính toán biểu thức trước, sau đó mới tăng `a` lên 1.\n\n```cpp\nint a = 5, b = 5;\nint x = ++a; \/\/ a thành 6, x nhận giá trị 6\nint y = b++; \/\/ y nhận giá trị 5, sau đó b thành 6\n```\n\n### 3. Toán tử logic và Nguyên tắc đoản mạch\n* `&&` (VÀ - AND): Đúng khi **cả hai** vế đều đúng.\n* `||` (HOẶC - OR): Đúng khi **ít nhất một** vế đúng.\n* `!` (PHỦ ĐỊNH - NOT): Đảo ngược giá trị logic (`!true` thành `false`).\n\n**Nguyên tắc đoản mạch (Short-circuit):**\nTrong biểu thức `A && B`, nếu `A` đã sai (`false`), C++ sẽ **không buồn kiểm tra vế `B`** vì kết quả chắc chắn sai. Tương tự với `A || B`, nếu `A` đúng, vế `B` bị bỏ qua ngay lập tức.",
            "code_examples": [
                {
                    "title": "Minh họa phép chia số thực và ép kiểu (Type Casting)",
                    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 4;\n    \n    cout << \"Chia nguyen: 10 \/ 4 = \" << (a \/ b) << endl;\n    cout << \"Chia lay du: 10 % 4 = \" << (a % b) << endl;\n    cout << \"Chia thuc co ep kieu: (double)10 \/ 4 = \" << ((double)a \/ b) << endl;\n    \n    return 0;\n}",
                    "input": "Không có",
                    "output": "Chia nguyen: 10 \/ 4 = 2\nChia lay du: 10 % 4 = 2\nChia thuc co ep kieu: (double)10 \/ 4 = 2.5",
                    "explanation": "Khi ép kiểu (double)a, biến a tạm thời được coi là số thực 10.0, giúp phép chia trở thành phép chia số thực cho ra 2.5."
                }
            ],
            "real_world_application": "Toán tử chia lấy dư `%` được dùng hàng ngày để kiểm tra tính chẵn lẻ, phân chia công việc theo luân phiên vòng tròn (Round Robin) trong máy chủ web, hoặc thuật toán mã hóa khóa công khai RSA trong an toàn mạng.",
            "common_pitfalls": [
                {
                    "mistake": "Nhầm lẫn giữa toán tử gán (=) và toán tử so sánh bằng (==).",
                    "reason": "Viết if (x = 5) sẽ gán 5 cho x (luôn true), trong khi ý định là kiểm tra if (x == 5).",
                    "fix": "Luôn dùng 2 dấu bằng == khi so sánh bằng."
                },
                {
                    "mistake": "Thực hiện phép chia lấy dư % trên số thực float\/double: double r = 5.5 % 2;",
                    "reason": "Toán tử % không hỗ trợ số thực trong C++.",
                    "fix": "Chỉ áp dụng % cho số nguyên, hoặc dùng hàm fmod() trong <cmath> cho số thực."
                }
            ],
            "order_num": "4",
            "quiz": {
                "id": "4",
                "lesson_id": "4",
                "title": "Kiểm tra trắc nghiệm: Toán tử trong C++",
                "time_limit_mins": "12",
                "pass_score": "5.0",
                "questions": [
                    {
                        "id": "31",
                        "quiz_id": "4",
                        "question_text": "Kết quả của biểu thức (17 \/ 5) trong C++ là bao nhiêu?",
                        "code_snippet": null,
                        "option_a": "3.4",
                        "option_b": "3",
                        "option_c": "4",
                        "option_d": "3.0",
                        "correct_option": "B",
                        "explanation": "Vì cả 17 và 5 đều là số nguyên, C++ thực hiện phép chia nguyên lấy phần thương là 3 (bỏ phần lẻ 0.4).",
                        "concept_tag": "integer_division",
                        "order_num": "1"
                    },
                    {
                        "id": "32",
                        "quiz_id": "4",
                        "question_text": "Kết quả của biểu thức (17 % 5) là bao nhiêu?",
                        "code_snippet": null,
                        "option_a": "3",
                        "option_b": "2",
                        "option_c": "0.4",
                        "option_d": "1",
                        "correct_option": "B",
                        "explanation": "17 chia cho 5 được thương là 3 và số dư là 2 (vì 5 * 3 + 2 = 17).",
                        "concept_tag": "modulo",
                        "order_num": "2"
                    },
                    {
                        "id": "33",
                        "quiz_id": "4",
                        "question_text": "Cho đoạn code: int x = 5; int y = x++; Sau đoạn lệnh này, giá trị của x và y lần lượt là:",
                        "code_snippet": null,
                        "option_a": "x = 5, y = 5",
                        "option_b": "x = 6, y = 6",
                        "option_c": "x = 6, y = 5",
                        "option_d": "x = 5, y = 6",
                        "correct_option": "C",
                        "explanation": "Hậu tố x++ trả về giá trị ban đầu là 5 cho biến y, sau đó x mới được tăng lên 1 đơn vị thành 6.",
                        "concept_tag": "increment_operators",
                        "order_num": "3"
                    },
                    {
                        "id": "34",
                        "quiz_id": "4",
                        "question_text": "Cho đoạn code: int a = 5; int b = ++a; Sau đoạn lệnh này, giá trị của a và b lần lượt là:",
                        "code_snippet": null,
                        "option_a": "a = 6, b = 6",
                        "option_b": "a = 5, b = 6",
                        "option_c": "a = 6, b = 5",
                        "option_d": "a = 5, b = 5",
                        "correct_option": "A",
                        "explanation": "Tiền tố ++a tăng a từ 5 lên 6 trước, sau đó gán giá trị 6 này cho b.",
                        "concept_tag": "increment_operators",
                        "order_num": "4"
                    },
                    {
                        "id": "35",
                        "quiz_id": "4",
                        "question_text": "Toán tử nào sau đây dùng để so sánh KHÔNG BẰNG (khác nhau) trong C++?",
                        "code_snippet": null,
                        "option_a": "<>",
                        "option_b": "!=",
                        "option_c": "!==",
                        "option_d": "NOT",
                        "correct_option": "B",
                        "explanation": "Toán tử != là toán tử so sánh khác nhau trong C++.",
                        "concept_tag": "relational_operators",
                        "order_num": "5"
                    },
                    {
                        "id": "36",
                        "quiz_id": "4",
                        "question_text": "Biểu thức (true || false && false) có giá trị là gì theo độ ưu tiên toán tử trong C++?",
                        "code_snippet": null,
                        "option_a": "false",
                        "option_b": "true",
                        "option_c": "Báo lỗi cú pháp",
                        "option_d": "Không xác định",
                        "correct_option": "B",
                        "explanation": "Toán tử && có độ ưu tiên cao hơn ||. Nên (false && false) tính trước ra false, sau đó (true || false) tính ra true.",
                        "concept_tag": "operator_precedence",
                        "order_num": "6"
                    },
                    {
                        "id": "37",
                        "quiz_id": "4",
                        "question_text": "Toán tử gán thu gọn nào tương đương với câu lệnh \"x = x * (y + 1);\"?",
                        "code_snippet": null,
                        "option_a": "x *= y + 1;",
                        "option_b": "x =* y + 1;",
                        "option_c": "x *== y + 1;",
                        "option_d": "x = x * y + 1;",
                        "correct_option": "A",
                        "explanation": "Toán tử x *= expr tương đương với x = x * (expr). Do đó x *= y + 1 là chính xác.",
                        "concept_tag": "compound_assignment",
                        "order_num": "7"
                    },
                    {
                        "id": "38",
                        "quiz_id": "4",
                        "question_text": "Trong biểu thức: (a > 0 && b++ > 0). Nếu a = -5 thì biến b có được tăng lên 1 hay không?",
                        "code_snippet": null,
                        "option_a": "Có, luôn luôn tăng vì b++ được viết tường minh",
                        "option_b": "Không, vì do nguyên lý đoản mạch (short-circuit), vế đầu (a > 0) sai nên C++ bỏ qua hoàn toàn vế sau",
                        "option_c": "Tùy thuộc vào phiên bản C++",
                        "option_d": "Chương trình báo lỗi",
                        "correct_option": "B",
                        "explanation": "Nguyên tắc đoản mạch: Với toán tử &&, nếu biểu thức bên trái trả về false thì biểu thức bên phải sẽ không bao giờ được thực thi.",
                        "concept_tag": "short_circuit",
                        "order_num": "8"
                    },
                    {
                        "id": "39",
                        "quiz_id": "4",
                        "question_text": "Cách nào sau đây ép kiểu số nguyên n sang số thực double chuẩn trong C++?",
                        "code_snippet": null,
                        "option_a": "(double)n",
                        "option_b": "double(n)",
                        "option_c": "static_cast<double>(n)",
                        "option_d": "Cả A, B, C đều hợp lệ, trong đó C là chuẩn C++ hiện đại khuyến khích",
                        "correct_option": "D",
                        "explanation": "Cả 3 cách đều ép kiểu được, trong đó static_cast<double>(n) là phong cách C++ an toàn và chuẩn mực nhất.",
                        "concept_tag": "type_casting",
                        "order_num": "9"
                    },
                    {
                        "id": "40",
                        "quiz_id": "4",
                        "question_text": "Kết quả của biểu thức !(5 > 3) là gì?",
                        "code_snippet": null,
                        "option_a": "true (1)",
                        "option_b": "false (0)",
                        "option_c": "5",
                        "option_d": "3",
                        "correct_option": "B",
                        "explanation": "5 > 3 là true (đúng). Phủ định !(true) sẽ cho ra false (0).",
                        "concept_tag": "logical_operators",
                        "order_num": "10"
                    }
                ]
            }
        },
        {
            "id": "5",
            "chapter": "3",
            "chapter_title": "Chương 3: Cấu Trúc Điều Khiển & Rẽ Nhánh",
            "title": "Câu lệnh điều kiện If-Else",
            "slug": "cau-lenh-dieu-kien-if-else",
            "description": "Làm chủ tư duy rẽ nhánh logic trong lập trình: if đơn, if-else, chuỗi else-if lồng nhau và toán tử ba ngôi ngắn gọn.",
            "duration_mins": "35",
            "objectives": [
                "Hiểu cách máy tính ra quyết định dựa trên điều kiện logic boolean.",
                "Viết thành thạo cấu trúc if, if...else, và chuỗi nhiều nhánh else if.",
                "Tránh lỗi mất dấu ngoặc nhọn `{}` dẫn đến lỗi logic tai hại (Dangling Else).",
                "Sử dụng toán tử điều kiện ba ngôi `? :` để viết code ngắn gọn, súc tích."
            ],
            "theory_content": "### 1. Bản chất của rẽ nhánh điều kiện\nTrong thực tế, cuộc sống tràn ngập các quyết định: *\"Nếu trời mưa thì mang ô, ngược lại thì không\"*. C++ cung cấp cấu trúc `if` để chương trình chỉ thực hiện một khối lệnh khi điều kiện bên trong dấu ngoặc đơn `()` là đúng (`true`).\n\n### 2. Các dạng cú pháp của If-Else\n\n#### Dạng 1: If đơn lẻ\n```cpp\nif (diem >= 5.0) {\n    cout << \"Chuc mung ban da qua mon!\";\n}\n```\n\n#### Dạng 2: If - Else hai nhánh đối lập\n```cpp\nif (so % 2 == 0) {\n    cout << so << \" la so chan.\";\n} else {\n    cout << so << \" la so le.\";\n}\n```\n\n#### Dạng 3: Bậc thang Else-If nhiều điều kiện\n```cpp\nif (diem >= 8.5) {\n    cout << \"Xep loai: Gioi\";\n} else if (diem >= 7.0) {\n    cout << \"Xep loai: Kha\";\n} else if (diem >= 5.0) {\n    cout << \"Xep loai: Trung binh\";\n} else {\n    cout << \"Xep loai: Yeu - Can co gang!\";\n}\n```\n\n### 3. Toán tử ba ngôi (Ternary Operator)\nCú pháp: `điều_kiện ? giá_trị_khi_đúng : giá_trị_khi_sai;`\n```cpp\nint max = (a > b) ? a : b;\n```",
            "code_examples": [
                {
                    "title": "Kiểm tra năm nhuận theo chuẩn lịch Gregory",
                    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int nam;\n    cout << \"Nhap nam can kiem tra: \";\n    cin >> nam;\n    \n    \/\/ Nam nhuan la nam chia het cho 400 HOAC (chia het cho 4 nhung khong chia het cho 100)\n    if ((nam % 400 == 0) || (nam % 4 == 0 && nam % 100 != 0)) {\n        cout << nam << \" la nam nhuan (thang 2 co 29 ngay).\" << endl;\n    } else {\n        cout << nam << \" la nam khong nhuan (thang 2 co 28 ngay).\" << endl;\n    }\n    \n    return 0;\n}",
                    "input": "2024",
                    "output": "Nhap nam can kiem tra: 2024 la nam nhuan (thang 2 co 29 ngay).",
                    "explanation": "Kết hợp toán tử chia lấy dư % và toán tử logic ||, && để cài đặt chính xác định nghĩa toán học của năm nhuận."
                }
            ],
            "real_world_application": "Hệ thống chống bó cứng phanh ABS trên ô tô dùng cấu trúc if-else kiểm tra tốc độ bánh xe hàng nghìn lần mỗi giây; nếu phát hiện bánh xe bị khóa cứng trượt lết, máy tính lập tức nhả áp suất dầu phanh.",
            "common_pitfalls": [
                {
                    "mistake": "Đặt dấu chấm phẩy ngay sau biểu thức if: if (x > 0); { cout << \"Duong\"; }",
                    "reason": "Dấu chấm phẩy biến lệnh if thành một lệnh rỗng! Khối lệnh { cout << \"Duong\"; } phía sau luôn luôn được chạy dù x âm hay dương.",
                    "fix": "Tuyệt đối không đặt dấu chấm phẩy ; ngay sau cặp ngoặc tròn if (...)."
                }
            ],
            "order_num": "5",
            "quiz": {
                "id": "5",
                "lesson_id": "5",
                "title": "Kiểm tra trắc nghiệm: Câu lệnh điều kiện If-Else",
                "time_limit_mins": "12",
                "pass_score": "5.0",
                "questions": [
                    {
                        "id": "41",
                        "quiz_id": "5",
                        "question_text": "Điều kiện đặt trong ngoặc đơn của câu lệnh if(...) phải trả về kiểu dữ liệu nào?",
                        "code_snippet": null,
                        "option_a": "Kiểu số nguyên int",
                        "option_b": "Kiểu logic boolean (hoặc giá trị có thể chuyển đổi thành true\/false)",
                        "option_c": "Kiểu xâu ký tự string",
                        "option_d": "Bắt buộc phải là con trỏ",
                        "correct_option": "B",
                        "explanation": "Biểu thức điều kiện trong if(...) được đánh giá theo giá trị logic boolean (0 là false, khác 0 là true).",
                        "concept_tag": "control_flow",
                        "order_num": "1"
                    },
                    {
                        "id": "42",
                        "quiz_id": "5",
                        "question_text": "Đoạn code sau in ra kết quả gì?\\nint x = 10;\\nif (x = 0) {\\n    cout << \"A\";\\n} else {\\n    cout << \"B\";\\n}",
                        "code_snippet": null,
                        "option_a": "A",
                        "option_b": "B",
                        "option_c": "Lỗi biên dịch",
                        "option_d": "Không in gì cả",
                        "correct_option": "B",
                        "explanation": "Phép gán x = 0 trả về giá trị 0 (tương đương false). Vì điều kiện là false nên chương trình nhảy vào nhánh else in ra \"B\".",
                        "concept_tag": "pitfalls",
                        "order_num": "2"
                    },
                    {
                        "id": "43",
                        "quiz_id": "5",
                        "question_text": "Cho đoạn code: int a = 7; string res = (a % 2 == 0) ? \"Chan\" : \"Le\"; cout << res; Kết quả in ra là gì?",
                        "code_snippet": null,
                        "option_a": "Chan",
                        "option_b": "Le",
                        "option_c": "0",
                        "option_d": "1",
                        "correct_option": "B",
                        "explanation": "7 % 2 = 1 != 0, điều kiện sai nên toán tử ba ngôi chọn vế sau dấu 2 chấm là \"Le\".",
                        "concept_tag": "ternary_operator",
                        "order_num": "3"
                    },
                    {
                        "id": "44",
                        "quiz_id": "5",
                        "question_text": "Khi một câu lệnh if không có cặp ngoặc nhọn { }, nó sẽ quản lý bao nhiêu câu lệnh ngay sau nó?",
                        "code_snippet": null,
                        "option_a": "Toàn bộ các lệnh trong file",
                        "option_b": "Chỉ duy nhất 1 câu lệnh đơn ngay liền kề",
                        "option_c": "Tất cả các lệnh có cùng độ thụt đầu dòng (indentation)",
                        "option_d": "Không hợp lệ, C++ bắt buộc phải có ngoặc nhọn",
                        "correct_option": "B",
                        "explanation": "Không giống Python (dùng thụt lề), trong C++ nếu không có ngoặc nhọn { }, if chỉ điều khiển duy nhất một câu lệnh đơn tiếp theo.",
                        "concept_tag": "syntax",
                        "order_num": "4"
                    },
                    {
                        "id": "45",
                        "quiz_id": "5",
                        "question_text": "Trong cấu trúc if - else if - else bậc thang, khi một điều kiện ở trên đã đúng (true) thì máy tính sẽ làm gì tiếp theo?",
                        "code_snippet": null,
                        "option_a": "Thực thi nhánh đó rồi thoát ra khỏi toàn bộ cấu trúc if-else",
                        "option_b": "Tiếp tục kiểm tra lần lượt tất cả các điều kiện else if còn lại bên dưới",
                        "option_c": "Quay lại kiểm tra lại từ đầu",
                        "option_d": "Báo lỗi nếu có nhiều hơn 3 nhánh else if",
                        "correct_option": "A",
                        "explanation": "Ngay khi một nhánh đúng được thực thi, chương trình sẽ nhảy qua toàn bộ các nhánh còn lại để tiếp tục mã phía sau cấu trúc.",
                        "concept_tag": "control_flow",
                        "order_num": "5"
                    },
                    {
                        "id": "46",
                        "quiz_id": "5",
                        "question_text": "Đoạn mã sau in ra gì?\\nint n = 5;\\nif (n > 0);\\n{\\n    cout << \"Positive\";\\n}",
                        "code_snippet": null,
                        "option_a": "Không in gì cả",
                        "option_b": "In \"Positive\" vì có dấu chấm phẩy kết thúc lệnh rỗng, sau đó khối lệnh vẫn luôn chạy",
                        "option_c": "Lỗi cú pháp",
                        "option_d": "Chương trình treo vô tận",
                        "correct_option": "B",
                        "explanation": "Dấu chấm phẩy ; ngay sau if(n > 0) là một bẫy kinh điển: nó kết thúc câu lệnh if rỗng, khiến khối { cout << \"Positive\"; } luôn luôn chạy.",
                        "concept_tag": "pitfalls",
                        "order_num": "6"
                    },
                    {
                        "id": "47",
                        "quiz_id": "5",
                        "question_text": "Để kiểm tra một số x có nằm trong khoảng từ [10, 20] hay không, biểu thức nào sau đây là ĐÚNG chuẩn C++?",
                        "code_snippet": null,
                        "option_a": "10 <= x <= 20",
                        "option_b": "x >= 10 and x <= 20",
                        "option_c": "x >= 10 && x <= 20",
                        "option_d": "Cả B và C đều đúng trong chuẩn C++",
                        "correct_option": "D",
                        "explanation": "Trong C++, && là chuẩn truyền thống, và từ khóa \"and\" cũng được định nghĩa trong chuẩn C++ tương đương với &&. Biểu thức 10 <= x <= 20 trong C++ là sai logic.",
                        "concept_tag": "logic",
                        "order_num": "7"
                    },
                    {
                        "id": "48",
                        "quiz_id": "5",
                        "question_text": "Hiện tượng \"Dangling Else\" (else lửng lơ) xảy ra khi nào?",
                        "code_snippet": null,
                        "option_a": "Khi một câu lệnh else bị thừa dấu chấm phẩy",
                        "option_b": "Khi có nhiều câu lệnh if lồng nhau mà không dùng ngoặc nhọn, khiến không rõ else thuộc về if nào",
                        "option_c": "Khi quên viết chữ else",
                        "option_d": "Khi viết if bên trong vòng lặp while",
                        "correct_option": "B",
                        "explanation": "Dangling Else xảy ra khi if lồng nhau không có cặp ngoặc nhọn { }, C++ sẽ tự động ghép else với if gần nó nhất, đôi khi trái với ý muốn của lập trình viên.",
                        "concept_tag": "dangling_else",
                        "order_num": "8"
                    },
                    {
                        "id": "49",
                        "quiz_id": "5",
                        "question_text": "Cho đoạn code:\\nint score = 75;\\nchar rank = (score >= 80) ? 'A' : (score >= 70) ? 'B' : 'C';\\nGiá trị của rank là:",
                        "code_snippet": null,
                        "option_a": "'A'",
                        "option_b": "'B'",
                        "option_c": "'C'",
                        "option_d": "Lỗi biên dịch vì toán tử ba ngôi không được lồng nhau",
                        "correct_option": "B",
                        "explanation": "score = 75 < 80 nên chuyển sang vế sai. Ở vế sai kiểm tra tiếp score >= 70 là đúng nên rank nhận giá trị 'B'.",
                        "concept_tag": "ternary_operator",
                        "order_num": "9"
                    },
                    {
                        "id": "50",
                        "quiz_id": "5",
                        "question_text": "Phát biểu nào sau đây là ĐÚNG về nhánh else trong cấu trúc if-else?",
                        "code_snippet": null,
                        "option_a": "Bắt buộc luôn luôn phải có else đi kèm với mọi if",
                        "option_b": "Nhánh else là tùy chọn (optional), không bắt buộc phải có",
                        "option_c": "else có thể nhận một biểu thức điều kiện trong ngoặc đơn như else(x > 0)",
                        "option_d": "Có thể có nhiều nhánh else đứng liên tiếp nhau trong một khối",
                        "correct_option": "B",
                        "explanation": "Nhánh else chỉ là tùy chọn, không bắt buộc. else không bao giờ có điều kiện trong ngoặc đơn (muốn có điều kiện phải dùng else if).",
                        "concept_tag": "control_flow",
                        "order_num": "10"
                    }
                ]
            }
        },
        {
            "id": "6",
            "chapter": "3",
            "chapter_title": "Chương 3: Cấu Trúc Điều Khiển & Rẽ Nhánh",
            "title": "Câu lệnh Switch-Case",
            "slug": "cau-lenh-switch-case",
            "description": "Tối ưu hóa mã nguồn khi so sánh một biến với nhiều giá trị hằng số rời rạc, hiện tượng Fall-through và vai trò sống còn của từ khóa break.",
            "duration_mins": "30",
            "objectives": [
                "Hiểu rõ sự khác biệt giữa Switch-Case và chuỗi If-Else.",
                "Nắm vững cú pháp chuẩn: `switch`, `case`, `break`, `default`.",
                "Hiểu rõ hiện tượng trôi dòng (Fall-through) khi quên `break`.",
                "Biết những kiểu dữ liệu nào được phép dùng trong biểu thức switch."
            ],
            "theory_content": "### 1. Khi nào nên dùng Switch-Case thay vì If-Else?\nKhi bạn cần kiểm tra một biến duy nhất xem nó có bằng **các giá trị hằng số rời rạc** cụ thể nào đó (như số ngày trong tuần từ 1 đến 7, hoặc các lựa chọn menu 1, 2, 3, 4), dùng `switch-case` giúp mã nguồn gọn gàng, sáng sủa và thường được trình biên dịch tối ưu hóa bằng Bảng nhảy (Jump Table) có tốc độ thực thi rất nhanh.\n\n### 2. Cú pháp và Quy tắc cốt lõi\n```cpp\nswitch (biểu_thức) {\n    case hằng_số_1:\n        \/\/ Lệnh thực thi 1\n        break; \/\/ Thoát ra khỏi switch\n    case hằng_số_2:\n        \/\/ Lệnh thực thi 2\n        break;\n    default:\n        \/\/ Chạy khi không khớp với bất kỳ case nào\n        break;\n}\n```\n\n> **ĐIỀU KIỆN TIÊN QUYẾT CỦA SWITCH-CASE TRONG C++:**\n> 1. `biểu_thức` và các `hằng_số` trong `case` **phải thuộc kiểu số nguyên** (`int`, `char`, `short`, `long`, `enum`).\n> 2. **KHÔNG ĐƯỢC DÙNG** số thực (`float`, `double`) hoặc chuỗi ký tự (`string`) trong câu lệnh `switch`!\n> 3. Giá trị sau mỗi `case` bắt buộc phải là một **hằng số xác định** tại thời điểm biên dịch, không được là biến số.\n\n### 3. Hiện tượng Trôi dòng (Fall-through)\nNếu bạn quên viết lệnh `break;` ở cuối một case, chương trình sẽ không dừng lại mà tiếp tục thực thi các lệnh ở case ngay bên dưới cho đến khi gặp lệnh break tiếp theo hoặc chạm đáy switch. Đôi khi hiện tượng này được cố tình sử dụng (ví dụ gộp nhiều case có chung xử lý).",
            "code_examples": [
                {
                    "title": "Tạo Menu chọn phép tính số học đơn giản",
                    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    double a, b;\n    char phepTinh;\n    cout << \"Nhap bieu thuc (Vi du: 10 + 5): \";\n    cin >> a >> phepTinh >> b;\n    \n    switch (phepTinh) {\n        case '+':\n            cout << \"Ket qua: \" << (a + b) << endl;\n            break;\n        case '-':\n            cout << \"Ket qua: \" << (a - b) << endl;\n            break;\n        case '*':\n            cout << \"Ket qua: \" << (a * b) << endl;\n            break;\n        case '\/':\n            if (b != 0) {\n                cout << \"Ket qua: \" << (a \/ b) << endl;\n            } else {\n                cout << \"Loi: Khong the chia cho 0!\" << endl;\n            }\n            break;\n        default:\n            cout << \"Loi: Phep toan khong hop le!\" << endl;\n            break;\n    }\n    return 0;\n}",
                    "input": "8 * 4",
                    "output": "Nhap bieu thuc (Vi du: 10 + 5): Ket qua: 32",
                    "explanation": "Sử dụng biến char phepTinh làm biểu thức switch, mỗi case tương ứng với một ký tự phép toán (+, -, *, \/)."
                }
            ],
            "real_world_application": "Xây dựng bộ phân tích cú pháp lệnh (Command Parser) trên hệ điều hành dòng lệnh, xử lý phím bấm điều khiển nhân vật game (W, A, S, D), và hệ thống máy bán hàng tự động vending machine.",
            "common_pitfalls": [
                {
                    "mistake": "Cố gắng switch trên biến kiểu float hoặc string.",
                    "reason": "Chuẩn C++ cấm dùng số thực hoặc đối tượng phức tạp trong switch.",
                    "fix": "Chuyển sang dùng chuỗi if-else nếu cần so sánh chuỗi hoặc số thực."
                },
                {
                    "mistake": "Quên lệnh break dẫn đến chạy nhầm các case phía dưới.",
                    "reason": "Không có break, compiler tự động trượt xuống (fall-through).",
                    "fix": "Luôn kiểm tra kỹ xem mỗi case đã có break chưa."
                }
            ],
            "order_num": "6",
            "quiz": {
                "id": "6",
                "lesson_id": "6",
                "title": "Kiểm tra trắc nghiệm: Câu lệnh Switch-Case",
                "time_limit_mins": "12",
                "pass_score": "5.0",
                "questions": [
                    {
                        "id": "51",
                        "quiz_id": "6",
                        "question_text": "Kiểu dữ liệu nào sau đây KHÔNG THỂ sử dụng làm biểu thức điều khiển trong lệnh switch của C++?",
                        "code_snippet": null,
                        "option_a": "int",
                        "option_b": "char",
                        "option_c": "double",
                        "option_d": "short",
                        "correct_option": "C",
                        "explanation": "Chuẩn C++ không cho phép sử dụng kiểu số thực (float, double) trong biểu thức của câu lệnh switch.",
                        "concept_tag": "types",
                        "order_num": "1"
                    },
                    {
                        "id": "52",
                        "quiz_id": "6",
                        "question_text": "Từ khóa nào dùng để thoát ngay lập tức ra khỏi khối switch sau khi hoàn thành một case?",
                        "code_snippet": null,
                        "option_a": "exit",
                        "option_b": "continue",
                        "option_c": "stop",
                        "option_d": "break",
                        "correct_option": "D",
                        "explanation": "Lệnh break được dùng để ngắt và thoát khỏi khối switch ngay lập tức.",
                        "concept_tag": "keywords",
                        "order_num": "2"
                    },
                    {
                        "id": "53",
                        "quiz_id": "6",
                        "question_text": "Điều gì sẽ xảy ra nếu một case không có lệnh break ở cuối?",
                        "code_snippet": null,
                        "option_a": "Chương trình báo lỗi biên dịch",
                        "option_b": "Chương trình tự động dừng và tắt",
                        "option_c": "Hiện tượng trôi dòng (Fall-through): chương trình tiếp tục chạy các lệnh ở case kế tiếp",
                        "option_d": "Chương trình nhảy thẳng đến khối default",
                        "correct_option": "C",
                        "explanation": "Nếu không có break, chương trình sẽ chạy xuyên qua (fall-through) các lệnh của case tiếp theo.",
                        "concept_tag": "fallthrough",
                        "order_num": "3"
                    },
                    {
                        "id": "54",
                        "quiz_id": "6",
                        "question_text": "Cho đoạn code sau, màn hình sẽ in ra gì?\\nint x = 2;\\nswitch (x) {\\n    case 1: cout << \"One \";\\n    case 2: cout << \"Two \";\\n    case 3: cout << \"Three \";\\n    default: cout << \"Done\";\\n}",
                        "code_snippet": null,
                        "option_a": "Two",
                        "option_b": "Two Three Done",
                        "option_c": "Two Three",
                        "option_d": "Done",
                        "correct_option": "B",
                        "explanation": "x = 2 khớp với case 2 in ra \"Two \". Vì không có break, chương trình tiếp tục chạy case 3 in \"Three \" và default in \"Done\".",
                        "concept_tag": "output_tracing",
                        "order_num": "4"
                    },
                    {
                        "id": "55",
                        "quiz_id": "6",
                        "question_text": "Khối lệnh nào trong switch sẽ được thực thi khi biểu thức không khớp với bất kỳ case nào?",
                        "code_snippet": null,
                        "option_a": "else",
                        "option_b": "default",
                        "option_c": "finally",
                        "option_d": "catch",
                        "correct_option": "B",
                        "explanation": "Khối default đóng vai trò như nhánh else cuối cùng, chạy khi không có case nào khớp.",
                        "concept_tag": "syntax",
                        "order_num": "5"
                    },
                    {
                        "id": "56",
                        "quiz_id": "6",
                        "question_text": "Giá trị sau từ khóa \"case\" có thể là một biến số thông thường được không (ví dụ: case x:)?",
                        "code_snippet": null,
                        "option_a": "Được, miễn là x là số nguyên",
                        "option_b": "Không được, giá trị sau case bắt buộc phải là một hằng số (constant expression) xác định khi biên dịch",
                        "option_c": "Được nếu x là biến toàn cục",
                        "option_d": "Tùy thuộc vào trình biên dịch",
                        "correct_option": "B",
                        "explanation": "Mỗi nhãn case bắt buộc phải là một biểu thức hằng (compile-time constant), không được dùng biến số thông thường.",
                        "concept_tag": "syntax",
                        "order_num": "6"
                    },
                    {
                        "id": "57",
                        "quiz_id": "6",
                        "question_text": "Khối default trong câu lệnh switch có bắt buộc phải luôn luôn nằm ở vị trí cuối cùng không?",
                        "code_snippet": null,
                        "option_a": "Bắt buộc luôn luôn phải ở cuối",
                        "option_b": "Không bắt buộc, có thể đặt ở đầu hoặc giữa các case (nhưng nên có break)",
                        "option_c": "Bắt buộc luôn luôn phải ở đầu tiên",
                        "option_d": "Không được phép có khối default trong C++",
                        "correct_option": "B",
                        "explanation": "Về cú pháp C++, default có thể đặt ở bất cứ đâu trong switch. Tuy nhiên theo quy chuẩn lập trình sạch, nên đặt nó ở cuối.",
                        "concept_tag": "syntax",
                        "order_num": "7"
                    },
                    {
                        "id": "58",
                        "quiz_id": "6",
                        "question_text": "Có thể gộp nhiều case có chung một hành vi xử lý như thế nào?",
                        "code_snippet": null,
                        "option_a": "case 1, 2, 3:",
                        "option_b": "case 1 or case 2:",
                        "option_c": "case 1: case 2: case 3: \/\/ lệnh xử lý; break;",
                        "option_d": "case (1 || 2 || 3):",
                        "correct_option": "C",
                        "explanation": "Để gộp các case, ta xếp chồng các nhãn case liên tiếp nhau: case 1: case 2: case 3: ... tận dụng tính chất fall-through.",
                        "concept_tag": "technique",
                        "order_num": "8"
                    },
                    {
                        "id": "59",
                        "quiz_id": "6",
                        "question_text": "Cho đoạn code: char grade = 'B'; switch(grade) { case 'A': cout << \"Gioi\"; break; case 'B': cout << \"Kha\"; break; } Kết quả in ra là:",
                        "code_snippet": null,
                        "option_a": "Gioi",
                        "option_b": "Kha",
                        "option_c": "Lỗi biên dịch vì char không thể switch",
                        "option_d": "Không in gì cả",
                        "correct_option": "B",
                        "explanation": "Kiểu char là một kiểu số nguyên (integral type) lưu mã ASCII nên hoàn toàn hợp lệ trong switch. grade = 'B' khớp case 'B' in \"Kha\".",
                        "concept_tag": "char_switch",
                        "order_num": "9"
                    },
                    {
                        "id": "60",
                        "quiz_id": "6",
                        "question_text": "Tại sao trình biên dịch thường tối ưu switch-case tốt hơn chuỗi if-else dài?",
                        "code_snippet": null,
                        "option_a": "Vì switch-case không dùng bộ nhớ RAM",
                        "option_b": "Vì compiler có thể tạo ra Bảng nhảy (Jump Table) để truy cập trực tiếp nhãn đích trong O(1) thay vì phải kiểm tra tuần tự O(N)",
                        "option_c": "Vì switch-case chỉ chạy trên card màn hình GPU",
                        "option_d": "Vì if-else luôn gây lỗi tràn ngăn xếp",
                        "correct_option": "B",
                        "explanation": "Khi các giá trị case liên tục hoặc gần nhau, compiler xây dựng Jump Table, cho phép nhảy thẳng đến mã cần thực thi trong thời gian hằng số O(1).",
                        "concept_tag": "optimization",
                        "order_num": "10"
                    }
                ]
            }
        },
        {
            "id": "7",
            "chapter": "4",
            "chapter_title": "Chương 4: Vòng Lặp & Cấu Trúc Lặp",
            "title": "Vòng lặp For, While, Do-While",
            "slug": "vong-lap-for-while-do-while",
            "description": "Tự động hóa các tác vụ lặp đi lặp lại: vòng lặp for xác định số lần, vòng lặp while với điều kiện trước, do-while với điều kiện sau, cùng lệnh break và continue.",
            "duration_mins": "35",
            "objectives": [
                "Nắm vững 3 cấu trúc lặp cơ bản: `for`, `while`, `do-while` và khi nào nên dùng loại nào.",
                "Hiểu rõ sự khác biệt mấu chốt: `do-while` luôn chạy ít nhất 1 lần đầu tiên.",
                "Sử dụng đúng lệnh `break` để thoát vòng lặp và `continue` để bỏ qua lần lặp hiện tại.",
                "Nhận biết và phòng ngừa nguy cơ vòng lặp vô tận (Infinite Loop) làm treo máy."
            ],
            "theory_content": "### 1. Vòng lặp For (Lặp với số lần biết trước)\nCú pháp gồm 3 thành phần ngăn cách bởi dấu chấm phẩy `;`:\n```cpp\nfor (khởi_tạo; điều_kiện_lặp; bước_nhảy) {\n    \/\/ Khối lệnh lặp\n}\n```\n* **Ví dụ:** In các số chẵn từ 2 đến 10:\n```cpp\nfor (int i = 2; i <= 10; i += 2) {\n    cout << i << \" \";\n}\n```\n\n### 2. Vòng lặp While (Lặp khi chưa biết trước số lần)\nKiểm tra điều kiện trước, nếu đúng mới thực hiện thân vòng lặp:\n```cpp\nwhile (dieu_kien) {\n    \/\/ Khối lệnh\n}\n```\n\n### 3. Vòng lặp Do-While (Chắc chắn chạy ít nhất 1 lần)\nChạy khối lệnh trước, sau đó mới kiểm tra điều kiện ở đáy. Thường dùng cho các tác vụ nhập dữ liệu và xác thực (ví dụ: *\"Bắt người dùng nhập lại mật khẩu cho đến khi đúng\"*):\n```cpp\ndo {\n    \/\/ Khối lệnh luôn chạy ít nhất 1 lần\n} while (dieu_kien); \/\/ Lưu ý: CÓ DẤU CHẤM PHẨY Ở CUỐI!\n```\n\n### 4. Lệnh Break vs Continue\n* **`break;`** : Đập vỡ và thoát hẳn ra khỏi vòng lặp ngay lập tức.\n* **`continue;`** : Bỏ qua các câu lệnh còn lại của **lần lặp hiện tại** và nhảy ngay sang bước lặp kế tiếp.",
            "code_examples": [
                {
                    "title": "Kiểm tra một số nguyên n có phải là số nguyên tố hay không",
                    "code": "#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    int n;\n    cout << \"Nhap so nguyen n: \";\n    cin >> n;\n    \n    if (n < 2) {\n        cout << n << \" khong phai la so nguyen to.\" << endl;\n        return 0;\n    }\n    \n    bool laSoNguyenTo = true;\n    for (int i = 2; i <= sqrt(n); i++) {\n        if (n % i == 0) {\n            laSoNguyenTo = false;\n            break; \/\/ Thoat som, khong can kiem tra tiep\n        }\n    }\n    \n    if (laSoNguyenTo) {\n        cout << n << \" la so nguyen to!\" << endl;\n    } else {\n        cout << n << \" khong phai la so nguyen to.\" << endl;\n    }\n    \n    return 0;\n}",
                    "input": "29",
                    "output": "Nhap so nguyen n: 29 la so nguyen to!",
                    "explanation": "Sử dụng vòng lặp for chạy từ 2 đến căn bậc hai của n. Nếu tìm thấy ước số thì gán cờ false và dùng break để ngắt vòng lặp ngay, tiết kiệm thời gian."
                }
            ],
            "real_world_application": "Game Loop (vòng lặp game) chạy 60 hoặc 120 lần mỗi giây để cập nhật vật lý nhân vật và vẽ khung hình lên màn hình; vòng quét cảm biến nhiệt độ trên vệ tinh khí tượng; tiến trình quét virus đọc từng tập tin trên ổ cứng.",
            "common_pitfalls": [
                {
                    "mistake": "Quên tăng biến đếm trong vòng lặp while, dẫn đến vòng lặp vô tận (Infinite Loop).",
                    "reason": "Điều kiện luôn luôn đúng khiến máy tính ngốn 100% CPU.",
                    "fix": "Đảm bảo bên trong thân while luôn có lệnh làm thay đổi điều kiện tiến dần về false."
                },
                {
                    "mistake": "Quên dấu chấm phẩy ở cuối do-while: do { ... } while(dieu_kien)",
                    "reason": "Cú pháp của do-while bắt buộc phải kết thúc bằng dấu chấm phẩy.",
                    "fix": "Thêm dấu ; vào sau while(...);"
                }
            ],
            "order_num": "7",
            "quiz": {
                "id": "7",
                "lesson_id": "7",
                "title": "Kiểm tra trắc nghiệm: Vòng lặp For, While, Do-While",
                "time_limit_mins": "12",
                "pass_score": "5.0",
                "questions": [
                    {
                        "id": "61",
                        "quiz_id": "7",
                        "question_text": "Vòng lặp nào sau đây luôn luôn đảm bảo thân vòng lặp được thực thi ít nhất một lần, bất kể điều kiện đúng hay sai?",
                        "code_snippet": null,
                        "option_a": "for",
                        "option_b": "while",
                        "option_c": "do-while",
                        "option_d": "Không có vòng lặp nào",
                        "correct_option": "C",
                        "explanation": "do-while thực hiện khối lệnh trước rồi mới kiểm tra điều kiện ở cuối, do đó luôn chạy ít nhất 1 lần.",
                        "concept_tag": "loop_types",
                        "order_num": "1"
                    },
                    {
                        "id": "62",
                        "quiz_id": "7",
                        "question_text": "Đoạn code sau in ra bao nhiêu số?\\nfor (int i = 1; i <= 5; i++) {\\n    if (i == 3) continue;\\n    cout << i << \" \";\\n}",
                        "code_snippet": null,
                        "option_a": "5 số (1 2 3 4 5)",
                        "option_b": "4 số (1 2 4 5)",
                        "option_c": "2 số (1 2)",
                        "option_d": "Vòng lặp vô tận",
                        "correct_option": "B",
                        "explanation": "Khi i = 3, lệnh continue bỏ qua lệnh in cout << i và nhảy sang bước lặp i = 4. Do đó chỉ in: 1 2 4 5 (4 số).",
                        "concept_tag": "continue_keyword",
                        "order_num": "2"
                    },
                    {
                        "id": "63",
                        "quiz_id": "7",
                        "question_text": "Đoạn code sau in ra kết quả gì?\\nfor (int i = 0; i < 5; i++) {\\n    if (i == 2) break;\\n    cout << i;\\n}",
                        "code_snippet": null,
                        "option_a": "012",
                        "option_b": "01",
                        "option_c": "0134",
                        "option_d": "01234",
                        "correct_option": "B",
                        "explanation": "i = 0 in 0; i = 1 in 1; i = 2 gặp lệnh break thoát hẳn khỏi vòng lặp ngay lập tức. Kết quả in ra \"01\".",
                        "concept_tag": "break_keyword",
                        "order_num": "3"
                    },
                    {
                        "id": "64",
                        "quiz_id": "7",
                        "question_text": "Cú pháp nào sau đây tạo ra một vòng lặp vô tận trong C++?",
                        "code_snippet": null,
                        "option_a": "while (true) { }",
                        "option_b": "for (;;) { }",
                        "option_c": "while (1) { }",
                        "option_d": "Cả A, B và C đều tạo ra vòng lặp vô tận",
                        "correct_option": "D",
                        "explanation": "Cả 3 cách trên đều là các mẫu kinh điển để tạo vòng lặp vô tận trong C++.",
                        "concept_tag": "infinite_loop",
                        "order_num": "4"
                    },
                    {
                        "id": "65",
                        "quiz_id": "7",
                        "question_text": "Cho đoạn code: int i = 10; while (i < 5) { cout << i; i++; } Màn hình in ra gì?",
                        "code_snippet": null,
                        "option_a": "10",
                        "option_b": "Không in ra bất kỳ ký tự nào",
                        "option_c": "10 11 12...",
                        "option_d": "Lỗi biên dịch",
                        "correct_option": "B",
                        "explanation": "Biến i = 10, điều kiện (i < 5) sai ngay từ đầu, nên thân vòng lặp while không bao giờ được thực hiện.",
                        "concept_tag": "while_loop",
                        "order_num": "5"
                    },
                    {
                        "id": "66",
                        "quiz_id": "7",
                        "question_text": "Trong vòng lặp for (int i = 0; i < 10; i++), thứ tự thực thi ở lần lặp đầu tiên là gì?",
                        "code_snippet": null,
                        "option_a": "Khởi tạo i=0 -> Kiểm tra i<10 -> Tăng i++ -> Chạy thân vòng lặp",
                        "option_b": "Khởi tạo i=0 -> Kiểm tra i<10 -> Chạy thân vòng lặp -> Tăng i++",
                        "option_c": "Tăng i++ -> Khởi tạo i=0 -> Chạy thân vòng lặp",
                        "option_d": "Chạy thân vòng lặp -> Khởi tạo i=0",
                        "correct_option": "B",
                        "explanation": "Ở lần lặp đầu: khởi tạo biến (chỉ chạy 1 lần duy nhất) -> kiểm tra điều kiện -> thực thi thân vòng lặp -> thực hiện bước nhảy i++.",
                        "concept_tag": "for_execution_flow",
                        "order_num": "6"
                    },
                    {
                        "id": "67",
                        "quiz_id": "7",
                        "question_text": "Đoạn mã sau lặp bao nhiêu lần?\\nfor (int i = 10; i > 0; i -= 3)",
                        "code_snippet": null,
                        "option_a": "3 lần",
                        "option_b": "4 lần (với i lần lượt là 10, 7, 4, 1)",
                        "option_c": "5 lần",
                        "option_d": "Vô tận",
                        "correct_option": "B",
                        "explanation": "i nhận các giá trị: 10, 7, 4, 1 (đều > 0). Tiếp theo i = -2 (< 0) vòng lặp dừng. Tổng cộng 4 lần.",
                        "concept_tag": "tracing",
                        "order_num": "7"
                    },
                    {
                        "id": "68",
                        "quiz_id": "7",
                        "question_text": "Lỗi nào sau đây dẫn đến vòng lặp vô tận trong mã:\\nint count = 1;\\nwhile (count <= 10) {\\n    cout << count << \" \";\\n}",
                        "code_snippet": null,
                        "option_a": "Không khai báo thư viện",
                        "option_b": "Thiếu câu lệnh tăng biến count (như count++) bên trong thân vòng lặp",
                        "option_c": "Dùng sai dấu <=",
                        "option_d": "Không có lệnh return",
                        "correct_option": "B",
                        "explanation": "Biến count luôn bằng 1, do đó điều kiện count <= 10 luôn luôn đúng mãi mãi, dẫn đến vòng lặp vô tận.",
                        "concept_tag": "infinite_loop",
                        "order_num": "8"
                    },
                    {
                        "id": "69",
                        "quiz_id": "7",
                        "question_text": "Điểm kết thúc của câu lệnh do { ... } while(dieu_kien) bắt buộc phải có ký tự gì?",
                        "code_snippet": null,
                        "option_a": "Dấu ngoặc kép \"",
                        "option_b": "Dấu hai chấm :",
                        "option_c": "Dấu chấm phẩy ;",
                        "option_d": "Không cần ký tự gì",
                        "correct_option": "C",
                        "explanation": "Cú pháp của do-while yêu cầu dấu chấm phẩy ; sau biểu thức điều kiện: do { ... } while (...);",
                        "concept_tag": "syntax",
                        "order_num": "9"
                    },
                    {
                        "id": "70",
                        "quiz_id": "7",
                        "question_text": "Trong hai vòng lặp for lồng nhau (nested loop), nếu vòng lặp ngoài chạy 5 lần và vòng lặp trong chạy 10 lần, thân vòng lặp trong sẽ chạy tổng cộng bao nhiêu lần?",
                        "code_snippet": null,
                        "option_a": "15 lần",
                        "option_b": "50 lần",
                        "option_c": "10 lần",
                        "option_d": "5 lần",
                        "correct_option": "B",
                        "explanation": "Mỗi lần lặp của vòng ngoài, vòng trong chạy trọn vẹn 10 lần. Tổng số lần chạy = 5 * 10 = 50 lần.",
                        "concept_tag": "nested_loops",
                        "order_num": "10"
                    }
                ]
            }
        },
        {
            "id": "8",
            "chapter": "5",
            "chapter_title": "Chương 5: Cấu Trúc Dữ Liệu Cơ Bản",
            "title": "Mảng một chiều",
            "slug": "mang-mot-chieu",
            "description": "Tập hợp các phần tử cùng kiểu dữ liệu được lưu trữ liên tiếp trong bộ nhớ RAM, cách đánh chỉ số từ 0, duyệt mảng, tìm min\/max và tìm kiếm phần tử.",
            "duration_mins": "40",
            "objectives": [
                "Hiểu rõ khái niệm mảng là vùng nhớ liên tục (Contiguous Memory) trong RAM.",
                "Nắm vững quy tắc chỉ số bắt đầu từ 0 đến N-1 (Zero-based indexing).",
                "Thành thạo kỹ năng duyệt mảng, tính tổng, tìm kiếm phần tử lớn nhất\/nhỏ nhất.",
                "Hiểu và tránh lỗi tràn mảng (Out of bounds) - nguyên nhân hàng đầu gây sập chương trình."
            ],
            "theory_content": "### 1. Mảng một chiều là gì?\nKhi cần quản lý điểm số của 50 sinh viên trong một lớp, thay vì khai báo 50 biến rời rạc (`diem1`, `diem2`, ..., `diem50`), C++ cung cấp **Mảng một chiều (1D Array)**.\n* Mảng là tập hợp gồm một số lượng cố định các phần tử có **cùng kiểu dữ liệu**.\n* Các phần tử được sắp xếp nằm **liên tiếp nhau** trong bộ nhớ RAM.\n\n### 2. Khai báo và khởi tạo\n```cpp\n\/\/ Khai báo mảng 5 số nguyên\nint a[5]; \n\n\/\/ Khai báo và khởi tạo giá trị ban đầu\nint diem[5] = {8, 9, 7, 10, 6};\n\n\/\/ Tự động suy luận kích thước mảng\nint fibo[] = {0, 1, 1, 2, 3, 5}; \n```\n\n### 3. Quy tắc chỉ số 0 (Zero-based Indexing)\nTrong C++, phần tử đầu tiên luôn có chỉ số là `0`, phần tử thứ hai là `1`, và phần tử cuối cùng của mảng kích thước $N$ có chỉ số là $N-1$:\n* `diem[0]` là phần tử đầu tiên (giá trị 8).\n* `diem[4]` là phần tử thứ năm (giá trị 6).\n* `diem[5]` là **TRUY CẬP VƯỢT BIÊN (Out of Bounds)** - Cực kỳ nguy hiểm!\n\n### 4. Thuật toán tìm kiếm phần tử lớn nhất (Max)\nKhởi tạo `max = a[0]`, sau đó duyệt từ phần tử `1` đến `n-1`, nếu gặp phần tử nào lớn hơn `max` thì cập nhật `max = a[i]`.",
            "code_examples": [
                {
                    "title": "Nhập mảng, tính điểm trung bình và tìm điểm cao nhất",
                    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cout << \"Nhap so luong sinh vien: \";\n    cin >> n;\n    \n    double diem[100]; \/\/ Mang chua toi da 100 sinh vien\n    cout << \"Nhap diem cua \" << n << \" sinh vien: \";\n    for (int i = 0; i < n; i++) {\n        cin >> diem[i];\n    }\n    \n    double tong = 0;\n    double diemMax = diem[0];\n    \n    for (int i = 0; i < n; i++) {\n        tong += diem[i];\n        if (diem[i] > diemMax) {\n            diemMax = diem[i];\n        }\n    }\n    \n    cout << \"Diem trung binh ca lop: \" << (tong \/ n) << endl;\n    cout << \"Diem cao nhat lop: \" << diemMax << endl;\n    return 0;\n}",
                    "input": "4\n8.5 9.0 7.5 10.0",
                    "output": "Nhap so luong sinh vien: Nhap diem cua 4 sinh vien: Diem trung binh ca lop: 8.75\nDiem cao nhat lop: 10",
                    "explanation": "Vòng lặp for thứ nhất nhập các phần tử vào mảng. Vòng lặp thứ hai vừa cộng dồn tổng vừa so sánh tìm giá trị max."
                }
            ],
            "real_world_application": "Danh sách bài hát trong danh sách phát (Playlist) của Spotify; danh sách pixel ảnh trên một hàng ngang của màn hình; danh sách các gói tin chờ xử lý trong bộ định tuyến router.",
            "common_pitfalls": [
                {
                    "mistake": "Truy cập mảng ngoài phạm vi (Array Index Out of Bounds), ví dụ mảng a[10] nhưng truy xuất a[10].",
                    "reason": "Mảng a[10] chỉ có các chỉ số từ a[0] đến a[9]. a[10] là vùng nhớ của biến khác.",
                    "fix": "Luôn nhớ điều kiện lặp i < n (không dùng i <= n)."
                },
                {
                    "mistake": "Gán cả mảng trực tiếp: int a[5] = {1, 2, 3}; int b[5]; b = a;",
                    "reason": "Trong C++, tên mảng a đóng vai trò như con trỏ hằng trỏ vào phần tử đầu tiên, không thể gán trực tiếp b = a.",
                    "fix": "Dùng vòng lặp for sao chép từng phần tử, hoặc dùng hàm std::copy \/ memcpy."
                }
            ],
            "order_num": "8",
            "quiz": {
                "id": "8",
                "lesson_id": "8",
                "title": "Kiểm tra trắc nghiệm: Mảng một chiều",
                "time_limit_mins": "12",
                "pass_score": "5.0",
                "questions": [
                    {
                        "id": "71",
                        "quiz_id": "8",
                        "question_text": "Chỉ số (index) của phần tử đầu tiên trong mảng C++ luôn là:",
                        "code_snippet": null,
                        "option_a": "1",
                        "option_b": "0",
                        "option_c": "-1",
                        "option_d": "Tùy thuộc vào lập trình viên khai báo",
                        "correct_option": "B",
                        "explanation": "C++ sử dụng quy ước chỉ số bắt đầu từ 0 (Zero-based indexing).",
                        "concept_tag": "array_indexing",
                        "order_num": "1"
                    },
                    {
                        "id": "72",
                        "quiz_id": "8",
                        "question_text": "Nếu một mảng được khai báo là \"int arr[10];\", phần tử cuối cùng của mảng là:",
                        "code_snippet": null,
                        "option_a": "arr[10]",
                        "option_b": "arr[9]",
                        "option_c": "arr[11]",
                        "option_d": "arr[last]",
                        "correct_option": "B",
                        "explanation": "Mảng 10 phần tử có các chỉ số từ arr[0] đến arr[9]. Do đó arr[9] là phần tử cuối cùng.",
                        "concept_tag": "array_bounds",
                        "order_num": "2"
                    },
                    {
                        "id": "73",
                        "quiz_id": "8",
                        "question_text": "Điều gì xảy ra khi bạn truy xuất phần tử ngoài biên của mảng trong C++ (ví dụ arr[10] của mảng int arr[5])?",
                        "code_snippet": null,
                        "option_a": "Chương trình tự động mở rộng mảng thêm phần tử mới",
                        "option_b": "Hành vi không xác định (Undefined Behavior) - có thể đọc giá trị rác hoặc gây lỗi Segment Fault sập chương trình",
                        "option_c": "Trình biên dịch luôn chặn lại và báo lỗi ngay khi gõ mã",
                        "option_d": "Tự động trả về giá trị 0",
                        "correct_option": "B",
                        "explanation": "C++ không tự động kiểm tra biên mảng (bound checking) khi chạy để tối ưu tốc độ, do đó truy cập ngoài biên gây Undefined Behavior.",
                        "concept_tag": "undefined_behavior",
                        "order_num": "3"
                    },
                    {
                        "id": "74",
                        "quiz_id": "8",
                        "question_text": "Khi khai báo: int a[5] = {1, 2}; Giá trị của các phần tử a[2], a[3], a[4] sẽ là gì?",
                        "code_snippet": null,
                        "option_a": "Giá trị rác ngẫu nhiên",
                        "option_b": "Đều tự động được gán bằng 0",
                        "option_c": "Bằng giá trị 2",
                        "option_d": "Báo lỗi biên dịch vì thiếu phần tử",
                        "correct_option": "B",
                        "explanation": "Trong C++, nếu mảng được khởi tạo với số phần tử ít hơn kích thước khai báo, các phần tử còn lại tự động nhận giá trị mặc định là 0.",
                        "concept_tag": "array_initialization",
                        "order_num": "4"
                    },
                    {
                        "id": "75",
                        "quiz_id": "8",
                        "question_text": "Cho đoạn code: int a[] = {3, 5, 7, 9}; cout << sizeof(a) \/ sizeof(a[0]); Kết quả in ra là:",
                        "code_snippet": null,
                        "option_a": "4",
                        "option_b": "16",
                        "option_c": "8",
                        "option_d": "2",
                        "correct_option": "A",
                        "explanation": "sizeof(a) là 16 byte (4 phần tử * 4 byte). sizeof(a[0]) là 4 byte. 16 \/ 4 = 4 (công thức tính số phần tử của mảng tĩnh).",
                        "concept_tag": "sizeof_array",
                        "order_num": "5"
                    },
                    {
                        "id": "76",
                        "quiz_id": "8",
                        "question_text": "Các phần tử trong một mảng được bố trí trong bộ nhớ RAM như thế nào?",
                        "code_snippet": null,
                        "option_a": "Rải rác ở các ô nhớ ngẫu nhiên",
                        "option_b": "Nằm liên tiếp nhau trong một vùng nhớ liên tục",
                        "option_c": "Theo dạng cây nhị phân",
                        "option_d": "Tùy thuộc vào thời gian nạp dữ liệu",
                        "correct_option": "B",
                        "explanation": "Đặc tính quan trọng nhất của mảng là các phần tử nằm trong các ô nhớ kế tiếp nhau liên tục (contiguous memory).",
                        "concept_tag": "memory_layout",
                        "order_num": "6"
                    },
                    {
                        "id": "77",
                        "quiz_id": "8",
                        "question_text": "Cách nào sau đây để duyệt qua tất cả các phần tử của mảng int a[n] từ đầu đến cuối?",
                        "code_snippet": null,
                        "option_a": "for (int i = 1; i <= n; i++)",
                        "option_b": "for (int i = 0; i <= n; i++)",
                        "option_c": "for (int i = 0; i < n; i++)",
                        "option_d": "for (int i = 1; i < n; i++)",
                        "correct_option": "C",
                        "explanation": "Chỉ số mảng chạy từ 0 đến n-1, do đó vòng lặp chuẩn là for (int i = 0; i < n; i++).",
                        "concept_tag": "loop_pattern",
                        "order_num": "7"
                    },
                    {
                        "id": "78",
                        "quiz_id": "8",
                        "question_text": "Vòng lặp Range-based for loop (chuẩn C++11 trở lên) nào sau đây in ra các phần tử của mảng arr?",
                        "code_snippet": null,
                        "option_a": "for (int x in arr) cout << x;",
                        "option_b": "for (int x : arr) cout << x << \" \";",
                        "option_c": "foreach (x in arr) cout << x;",
                        "option_d": "for (each x of arr) cout << x;",
                        "correct_option": "B",
                        "explanation": "Cú pháp range-based for trong C++11 là: for (type var : collection). Dấu hai chấm (:) biểu thị duyệt qua từng phần tử.",
                        "concept_tag": "cpp11_features",
                        "order_num": "8"
                    },
                    {
                        "id": "79",
                        "quiz_id": "8",
                        "question_text": "Tại sao câu lệnh \"int arr1[5] = {1, 2, 3, 4, 5}; int arr2[5]; arr2 = arr1;\" bị lỗi biên dịch?",
                        "code_snippet": null,
                        "option_a": "Vì hai mảng không cùng số lượng phần tử",
                        "option_b": "Vì tên mảng trong C++ là một con trỏ hằng (constant pointer), không thể gán trực tiếp",
                        "option_c": "Vì mảng chỉ cho phép gán số nguyên",
                        "option_d": "Vì chưa nạp thư viện <array>",
                        "correct_option": "B",
                        "explanation": "Tên mảng biểu thị địa chỉ đầu tiên của mảng và là hằng số địa chỉ không thể thay đổi, do đó không thể gán mảng này cho mảng khác bằng toán tử =.",
                        "concept_tag": "array_assignment",
                        "order_num": "9"
                    },
                    {
                        "id": "80",
                        "quiz_id": "8",
                        "question_text": "Độ phức tạp thời gian (Time Complexity) của thuật toán tìm kiếm tuyến tính (Linear Search) một phần tử trong mảng n phần tử là bao nhiêu?",
                        "code_snippet": null,
                        "option_a": "O(1)",
                        "option_b": "O(log n)",
                        "option_c": "O(n)",
                        "option_d": "O(n^2)",
                        "correct_option": "C",
                        "explanation": "Trong trường hợp xấu nhất, tìm kiếm tuyến tính phải duyệt qua toàn bộ n phần tử của mảng nên có độ phức tạp là O(n).",
                        "concept_tag": "algorithms",
                        "order_num": "10"
                    }
                ]
            }
        },
        {
            "id": "9",
            "chapter": "5",
            "chapter_title": "Chương 5: Cấu Trúc Dữ Liệu Cơ Bản",
            "title": "Mảng hai chiều",
            "slug": "mang-hai-chieu",
            "description": "Mô hình hóa ma trận toán học, bảng dữ liệu hàng và cột, cách duyệt mảng bằng 2 vòng for lồng nhau, thao tác trên đường chéo chính.",
            "duration_mins": "40",
            "objectives": [
                "Hiểu mảng 2 chiều như một bảng gồm các hàng (Rows) và cột (Columns).",
                "Thành thạo cú pháp khai báo `a[rows][cols]` và quy ước chỉ số hàng trước, cột sau.",
                "Sử dụng 2 vòng lặp lồng nhau (Nested loops) để nhập và xuất ma trận.",
                "Thực hiện các bài toán ma trận kinh điển: cộng ma trận, tính tổng đường chéo chính\/phụ."
            ],
            "theory_content": "### 1. Khái niệm Mảng hai chiều (Ma trận)\nMảng hai chiều (2D Array) là một tập hợp các phần tử được tổ chức dưới dạng bảng gồm **Hàng (Row)** và **Cột (Column)**.\nTrong toán học, nó tương đương với một **Ma trận (Matrix)** cấp $M \\times N$.\n\n### 2. Cú pháp khai báo và khởi tạo\n```cpp\n\/\/ Khai báo ma trận 3 hàng, 4 cột\nint a[3][4];\n\n\/\/ Khởi tạo trực tiếp giá trị\nint matrix[2][3] = {\n    {1, 2, 3},   \/\/ Hàng 0\n    {4, 5, 6}    \/\/ Hàng 1\n};\n```\n* **Quy ước chỉ số:** `a[hang][cot]`. Hàng chạy từ `0` đến `so_hang - 1`, cột chạy từ `0` đến `so_cot - 1`.\n* `matrix[0][2]` có giá trị là `3`.\n* `matrix[1][0]` có giá trị là `4`.\n\n### 3. Cách thức lưu trữ trong bộ nhớ RAM\nDù bạn nhìn mảng 2 chiều dưới dạng bảng 2D, nhưng bộ nhớ RAM máy tính chỉ là một dải ô nhớ tuyến tính 1 chiều. C++ lưu trữ mảng 2 chiều theo thứ tự **Ưu tiên hàng (Row-Major Order)**: lưu hết tất cả các cột của hàng 0, rồi đến hàng 1, hàng 2...\n\n### 4. Thuật toán duyệt ma trận\nĐể duyệt qua tất cả các ô của ma trận, ta dùng 2 vòng lặp `for` lồng nhau:\n```cpp\nfor (int i = 0; i < soHang; i++) {\n    for (int j = 0; j < soCot; j++) {\n        cout << a[i][j] << \" \";\n    }\n    cout << endl; \/\/ Xuống dòng khi hết một hàng\n}\n```",
            "code_examples": [
                {
                    "title": "Tính tổng các phần tử trên đường chéo chính của ma trận vuông",
                    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cout << \"Nhap cap cua ma tran vuong (n x n): \";\n    cin >> n;\n    \n    int a[100][100];\n    cout << \"Nhap cac phan tu cua ma tran:\" << endl;\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n; j++) {\n            cin >> a[i][j];\n        }\n    }\n    \n    int tongCheoChinh = 0;\n    for (int i = 0; i < n; i++) {\n        tongCheoChinh += a[i][i]; \/\/ Duong cheo chinh co chi so hang = cot (i == j)\n    }\n    \n    cout << \"Tong cac phan tu tren duong cheo chinh = \" << tongCheoChinh << endl;\n    return 0;\n}",
                    "input": "3\n1 2 3\n4 5 6\n7 8 9",
                    "output": "Nhap cap cua ma tran vuong (n x n): Nhap cac phan tu cua ma tran:\nTong cac phan tu tren duong cheo chinh = 15",
                    "explanation": "Đường chéo chính của ma trận vuông là tập hợp các phần tử có chỉ số hàng bằng chỉ số cột (i == j), ví dụ a[0][0], a[1][1], a[2][2]. Tổng là 1 + 5 + 9 = 15."
                }
            ],
            "real_world_application": "Bàn cờ vua 8x8 hoặc cờ caro; xử lý ảnh kỹ thuật số (ảnh xám là ma trận điểm ảnh với mỗi pixel có giá trị từ 0 đến 255); bảng tính Excel; bản đồ trong game 2D (Tilemap).",
            "common_pitfalls": [
                {
                    "mistake": "Nhầm lẫn thứ tự chỉ số a[cot][hang] thay vì a[hang][cot].",
                    "reason": "Trong C++, chỉ số thứ nhất luôn luôn là chỉ số HÀNG, chỉ số thứ hai là CỘT.",
                    "fix": "Ghi nhớ công thức: a[ROW][COL]."
                }
            ],
            "order_num": "9",
            "quiz": {
                "id": "9",
                "lesson_id": "9",
                "title": "Kiểm tra trắc nghiệm: Mảng hai chiều",
                "time_limit_mins": "12",
                "pass_score": "5.0",
                "questions": [
                    {
                        "id": "81",
                        "quiz_id": "9",
                        "question_text": "Trong khai báo mảng hai chiều: int arr[4][6]; mảng này có bao nhiêu hàng và bao nhiêu cột?",
                        "code_snippet": null,
                        "option_a": "4 cột và 6 hàng",
                        "option_b": "4 hàng và 6 cột",
                        "option_c": "24 hàng và 1 cột",
                        "option_d": "Tùy ý",
                        "correct_option": "B",
                        "explanation": "Quy ước C++: arr[ROWS][COLS], do đó 4 là số hàng và 6 là số cột.",
                        "concept_tag": "dimensions",
                        "order_num": "1"
                    },
                    {
                        "id": "82",
                        "quiz_id": "9",
                        "question_text": "Mảng int a[3][4] có tổng cộng bao nhiêu phần tử?",
                        "code_snippet": null,
                        "option_a": "7 phần tử",
                        "option_b": "12 phần tử",
                        "option_c": "34 phần tử",
                        "option_d": "14 phần tử",
                        "correct_option": "B",
                        "explanation": "Tổng số phần tử của mảng 2 chiều bằng số hàng nhân số cột: 3 * 4 = 12 phần tử.",
                        "concept_tag": "size",
                        "order_num": "2"
                    },
                    {
                        "id": "83",
                        "quiz_id": "9",
                        "question_text": "Phần tử ở góc trên cùng bên trái của ma trận hai chiều có chỉ số là:",
                        "code_snippet": null,
                        "option_a": "a[1][1]",
                        "option_b": "a[0][0]",
                        "option_c": "a[0][1]",
                        "option_d": "a[1][0]",
                        "correct_option": "B",
                        "explanation": "Vì mảng C++ bắt đầu từ chỉ số 0, ô góc trên cùng bên trái tương ứng với hàng 0, cột 0 là a[0][0].",
                        "concept_tag": "indexing",
                        "order_num": "3"
                    },
                    {
                        "id": "84",
                        "quiz_id": "9",
                        "question_text": "Trong bộ nhớ máy tính, mảng 2 chiều được C++ sắp xếp theo cơ chế nào?",
                        "code_snippet": null,
                        "option_a": "Row-major order (Ưu tiên lưu từng hàng liên tục)",
                        "option_b": "Column-major order (Ưu tiên lưu từng cột liên tục)",
                        "option_c": "Lưu theo hình xoắn ốc",
                        "option_d": "Lưu ngẫu nhiên",
                        "correct_option": "A",
                        "explanation": "C và C++ sử dụng cơ chế Row-major order (hàng nối tiếp hàng), trong khi Fortran hay MATLAB dùng Column-major order.",
                        "concept_tag": "memory_layout",
                        "order_num": "4"
                    },
                    {
                        "id": "85",
                        "quiz_id": "9",
                        "question_text": "Trong một ma trận vuông cấp n, các phần tử nằm trên đường chéo chính thỏa mãn điều kiện chỉ số nào?",
                        "code_snippet": null,
                        "option_a": "i + j == n - 1",
                        "option_b": "i == j (chỉ số hàng bằng chỉ số cột)",
                        "option_c": "i > j",
                        "option_d": "i < j",
                        "correct_option": "B",
                        "explanation": "Đường chéo chính gồm các ô (0,0), (1,1), (2,2)... tức là chỉ số hàng i bằng chỉ số cột j (i == j).",
                        "concept_tag": "matrix_diagonal",
                        "order_num": "5"
                    },
                    {
                        "id": "86",
                        "quiz_id": "9",
                        "question_text": "Trong ma trận vuông cấp n (chỉ số từ 0 đến n-1), các phần tử nằm trên đường chéo phụ thỏa mãn điều kiện gì?",
                        "code_snippet": null,
                        "option_a": "i == j",
                        "option_b": "i + j == n - 1",
                        "option_c": "i * j == 0",
                        "option_d": "i - j == 1",
                        "correct_option": "B",
                        "explanation": "Đường chéo phụ chạy từ góc trên phải xuống dưới trái, tổng chỉ số hàng và cột luôn cố định là i + j == n - 1.",
                        "concept_tag": "matrix_diagonal",
                        "order_num": "6"
                    },
                    {
                        "id": "87",
                        "quiz_id": "9",
                        "question_text": "Cho đoạn code: int m[2][2] = {{1, 2}, {3, 4}}; cout << m[1][0]; Kết quả in ra là:",
                        "code_snippet": null,
                        "option_a": "1",
                        "option_b": "2",
                        "option_c": "3",
                        "option_d": "4",
                        "correct_option": "C",
                        "explanation": "m[1][0] là phần tử ở hàng 1 (hàng thứ hai {3, 4}), cột 0 (cột đầu tiên) có giá trị là 3.",
                        "concept_tag": "output_tracing",
                        "order_num": "7"
                    },
                    {
                        "id": "88",
                        "quiz_id": "9",
                        "question_text": "Khi truyền một mảng hai chiều vào hàm trong C++, thông số nào BẮT BUỘC phải chỉ định kích thước?",
                        "code_snippet": null,
                        "option_a": "Số hàng (ví dụ: int a[5][])",
                        "option_b": "Số cột (ví dụ: int a[][10])",
                        "option_c": "Cả số hàng và số cột đều không cần chỉ định",
                        "option_d": "Không thể truyền mảng 2 chiều vào hàm",
                        "correct_option": "B",
                        "explanation": "Compiler cần biết số lượng cột để tính toán địa chỉ nhảy ô nhớ: address = base + (i * COLS + j) * sizeof(type). Do đó số cột bắt buộc phải có.",
                        "concept_tag": "function_parameters",
                        "order_num": "8"
                    },
                    {
                        "id": "89",
                        "quiz_id": "9",
                        "question_text": "Để khởi tạo toàn bộ các phần tử của mảng 2 chiều int a[10][10] bằng số 0, cách viết ngắn gọn nào sau đây là hợp lệ?",
                        "code_snippet": null,
                        "option_a": "int a[10][10] = {0};",
                        "option_b": "int a[10][10] = 0;",
                        "option_c": "int a[10][10] = {all 0};",
                        "option_d": "int a[10][10]();",
                        "correct_option": "A",
                        "explanation": "Cú pháp = {0}; sẽ khởi tạo phần tử đầu tiên bằng 0 và tất cả các phần tử còn lại tự động bằng 0.",
                        "concept_tag": "initialization",
                        "order_num": "9"
                    },
                    {
                        "id": "90",
                        "quiz_id": "9",
                        "question_text": "Phép chuyển vị ma trận (Transpose Matrix) biến đổi ma trận $A$ kích thước $M \\times N$ thành ma trận $A^T$ kích thước bao nhiêu?",
                        "code_snippet": null,
                        "option_a": "M x N",
                        "option_b": "N x M",
                        "option_c": "M x M",
                        "option_d": "N x N",
                        "correct_option": "B",
                        "explanation": "Ma trận chuyển vị đổi hàng thành cột và cột thành hàng, biến ma trận kích thước M x N thành N x M.",
                        "concept_tag": "linear_algebra",
                        "order_num": "10"
                    }
                ]
            }
        },
        {
            "id": "10",
            "chapter": "6",
            "chapter_title": "Chương 6: Hàm & Module Hóa Mã Nguồn",
            "title": "Hàm trong C++",
            "slug": "ham-trong-cpp",
            "description": "Chia nhỏ chương trình lớn thành các hàm độc lập, tái sử dụng mã nguồn (DRY), truyền tham trị vs truyền tham chiếu bằng dấu &.",
            "duration_mins": "40",
            "objectives": [
                "Hiểu rõ nguyên lý chia để trị và tái sử dụng mã nguồn (Don't Repeat Yourself - DRY).",
                "Nắm vững cấu trúc định nghĩa hàm: Kiểu trả về, Tên hàm, Danh sách tham số, Thân hàm.",
                "Phân biệt tuyệt đối giữa Truyền tham trị (Pass by Value) và Truyền tham chiếu (Pass by Reference).",
                "Biết cách viết nguyên mẫu hàm (Function Prototype) để gọi hàm trước khi định nghĩa."
            ],
            "theory_content": "### 1. Tại sao phải sử dụng Hàm (Function)?\nNếu một chương trình dài hàng nghìn dòng viết toàn bộ trong `main()`, mã sẽ cực kỳ rối rắm (Spaghetti code) và khi có một đoạn tính toán lặp lại nhiều lần, bạn phải copy-paste liên tục. Hàm cho phép:\n* **Chia để trị (Divide and Conquer):** Tách một bài toán lớn thành các tác vụ con độc lập.\n* **Tái sử dụng:** Viết một lần, gọi dùng ở bất kỳ đâu.\n* **Dễ bảo trì và gỡ lỗi (Debugging).**\n\n### 2. Cú pháp định nghĩa hàm\n```cpp\nkiểu_trả_về tên_hàm(danh_sách_tham_số) {\n    \/\/ Khối lệnh\n    return giá_trị; \/\/ Nếu kiểu trả về là void thì không cần return giá trị\n}\n```\n\n### 3. Phân biệt Truyền tham trị vs Truyền tham chiếu\nĐây là câu hỏi trọng tâm xuất hiện trong mọi đề thi học phần và phỏng vấn C++:\n* **Truyền tham trị (Pass by Value):** Hàm tạo ra một **bản sao (copy)** của biến truyền vào. Mọi thay đổi giá trị của biến bên trong hàm **hoàn toàn KHÔNG ảnh hưởng** đến biến gốc ở ngoài hàm `main`.\n* **Truyền tham chiếu (Pass by Reference - dùng dấu `&`):** Hàm nhận chính **địa chỉ\/bí danh** của biến gốc. Mọi thay đổi bên trong hàm sẽ **trực tiếp thay đổi biến gốc** ngoài hàm `main`.",
            "code_examples": [
                {
                    "title": "Hàm hoán vị (Swap) hai số nguyên sử dụng truyền tham chiếu",
                    "code": "#include <iostream>\nusing namespace std;\n\n\/\/ Truyen tham chieu voi dau &\nvoid hoanVi(int &x, int &y) {\n    int temp = x;\n    x = y;\n    y = temp;\n}\n\nint main() {\n    int a = 5, b = 10;\n    cout << \"Truoc khi hoan vi: a = \" << a << \", b = \" << b << endl;\n    \n    hoanVi(a, b);\n    \n    cout << \"Sau khi hoan vi: a = \" << a << \", b = \" << b << endl;\n    return 0;\n}",
                    "input": "Không có",
                    "output": "Truoc khi hoan vi: a = 5, b = 10\nSau khi hoan vi: a = 10, b = 5",
                    "explanation": "Nhờ có dấu & ở tham số int &x, int &y, hàm hoanVi tác động trực tiếp vào vùng nhớ của hai biến a và b trong main, giúp hoán đổi thành công."
                }
            ],
            "real_world_application": "Hàm tính tiền cước chuyến đi trong ứng dụng Grab\/Be; hàm tính toán trọng lực và va chạm trong Unreal Engine; hàm băm mật khẩu bảo mật (SHA-256) trong hệ thống xác thực người dùng.",
            "common_pitfalls": [
                {
                    "mistake": "Quên dấu & khi viết hàm cần thay đổi giá trị biến (như hàm hoán vị swap).",
                    "reason": "Không có &, hàm chỉ nhận bản sao, kết thúc hàm biến gốc vẫn giữ nguyên giá trị cũ.",
                    "fix": "Thêm dấu & vào kiểu dữ liệu của tham số: void swap(int &a, int &b)."
                }
            ],
            "order_num": "10",
            "quiz": {
                "id": "10",
                "lesson_id": "10",
                "title": "Kiểm tra trắc nghiệm: Hàm trong C++",
                "time_limit_mins": "12",
                "pass_score": "5.0",
                "questions": [
                    {
                        "id": "91",
                        "quiz_id": "10",
                        "question_text": "Kiểu dữ liệu trả về nào được sử dụng khi một hàm chỉ thực hiện tác vụ in ấn hoặc xử lý mà không cần trả về bất kỳ giá trị nào?",
                        "code_snippet": null,
                        "option_a": "null",
                        "option_b": "empty",
                        "option_c": "void",
                        "option_d": "int",
                        "correct_option": "C",
                        "explanation": "Từ khóa void được dùng để biểu thị hàm không có giá trị trả về.",
                        "concept_tag": "void_functions",
                        "order_num": "1"
                    },
                    {
                        "id": "92",
                        "quiz_id": "10",
                        "question_text": "Cho đoạn code sau, kết quả in ra màn hình là gì?\\nvoid tang(int x) {\\n    x = x + 10;\\n}\\nint main() {\\n    int n = 5;\\n    tang(n);\\n    cout << n;\\n    return 0;\\n}",
                        "code_snippet": null,
                        "option_a": "15",
                        "option_b": "5",
                        "option_c": "10",
                        "option_d": "Báo lỗi biên dịch",
                        "correct_option": "B",
                        "explanation": "Hàm tang(int x) sử dụng truyền tham trị (pass by value), x chỉ là bản sao, nên n trong hàm main vẫn giữ nguyên giá trị ban đầu là 5.",
                        "concept_tag": "pass_by_value",
                        "order_num": "2"
                    },
                    {
                        "id": "93",
                        "quiz_id": "10",
                        "question_text": "Ký tự nào được đặt sau kiểu dữ liệu trong danh sách tham số để biểu thị truyền tham chiếu (Pass by Reference)?",
                        "code_snippet": null,
                        "option_a": "*",
                        "option_b": "&",
                        "option_c": "$",
                        "option_d": "@",
                        "correct_option": "B",
                        "explanation": "Dấu & (ví dụ: int &x) biểu thị tham số là một tham chiếu (reference), trỏ trực tiếp đến biến truyền vào.",
                        "concept_tag": "pass_by_reference",
                        "order_num": "3"
                    },
                    {
                        "id": "94",
                        "quiz_id": "10",
                        "question_text": "Nguyên mẫu hàm (Function Prototype) có vai trò gì trong C++?",
                        "code_snippet": null,
                        "option_a": "Bắt buộc hàm phải chạy nhanh hơn gấp 2 lần",
                        "option_b": "Khai báo trước cho trình biên dịch biết tên, kiểu trả về và danh sách tham số của hàm trước khi hàm được định nghĩa chi tiết",
                        "option_c": "Tự động tạo ra mã nguồn C++ tương ứng",
                        "option_d": "Để bảo mật mã nguồn không bị xem trộm",
                        "correct_option": "B",
                        "explanation": "Function prototype khai báo trước chữ ký của hàm (signature), giúp gọi hàm trước khi viết phần định nghĩa chi tiết ở phía dưới.",
                        "concept_tag": "prototypes",
                        "order_num": "4"
                    },
                    {
                        "id": "95",
                        "quiz_id": "10",
                        "question_text": "Nạp chồng hàm (Function Overloading) trong C++ là gì?",
                        "code_snippet": null,
                        "option_a": "Gọi một hàm quá nhiều lần làm tràn bộ nhớ",
                        "option_b": "Nhiều hàm có cùng tên nhưng khác nhau về danh sách tham số (số lượng hoặc kiểu dữ liệu của tham số)",
                        "option_c": "Định nghĩa lại hàm của hệ điều hành",
                        "option_d": "Hai hàm có cùng tên và cùng tham số nhưng khác kiểu trả về",
                        "correct_option": "B",
                        "explanation": "Function Overloading cho phép định nghĩa các hàm cùng tên nhưng khác nhau về danh sách tham số (khác số lượng hoặc khác kiểu tham số).",
                        "concept_tag": "overloading",
                        "order_num": "5"
                    },
                    {
                        "id": "96",
                        "quiz_id": "10",
                        "question_text": "Hai hàm có cùng tên và danh sách tham số giống hệt nhau, nhưng chỉ khác nhau về kiểu trả về (ví dụ int tinh() và double tinh()), có thể nạp chồng (overload) được không?",
                        "code_snippet": null,
                        "option_a": "Được, C++ tự động phân biệt khi gọi",
                        "option_b": "Không được, trình biên dịch sẽ báo lỗi xung đột định danh (ambiguous call)",
                        "option_c": "Chỉ được nếu là hàm thành viên trong class",
                        "option_d": "Được nếu thêm từ khóa virtual",
                        "correct_option": "B",
                        "explanation": "C++ không cho phép nạp chồng hàm chỉ dựa trên kiểu trả về vì trình biên dịch không thể xác định lập trình viên muốn gọi hàm nào.",
                        "concept_tag": "overloading_rules",
                        "order_num": "6"
                    },
                    {
                        "id": "97",
                        "quiz_id": "10",
                        "question_text": "Tham số mặc định (Default Argument) trong hàm C++ (ví dụ: void in(int a, int b = 10)) có quy tắc nào sau đây?",
                        "code_snippet": null,
                        "option_a": "Phải được đặt ở các tham số ngoài cùng bên phải của danh sách",
                        "option_b": "Phải được đặt ở tham số đầu tiên bên trái",
                        "option_c": "Có thể đặt ở bất kỳ vị trí nào tùy ý",
                        "option_d": "C++ không hỗ trợ tham số mặc định",
                        "correct_option": "A",
                        "explanation": "Tất cả các tham số có giá trị mặc định phải nằm liên tục về phía bên phải cùng của danh sách tham số.",
                        "concept_tag": "default_arguments",
                        "order_num": "7"
                    },
                    {
                        "id": "98",
                        "quiz_id": "10",
                        "question_text": "Từ khóa \"inline\" trước định nghĩa một hàm nhỏ mang ý nghĩa gì?",
                        "code_snippet": null,
                        "option_a": "Yêu cầu hàm chạy song song trên nhiều luồng CPU",
                        "option_b": "Gợi ý trình biên dịch thay thế lời gọi hàm bằng toàn bộ thân mã của hàm đó để giảm chi phí gọi hàm (Function Call Overhead)",
                        "option_c": "Bắt buộc hàm không được dùng vòng lặp",
                        "option_d": "Khóa hàm lại không cho chỉnh sửa",
                        "correct_option": "B",
                        "explanation": "Từ khóa inline đề xuất compiler chèn trực tiếp mã hàm vào nơi gọi thay vì thực hiện bước nhảy call stack, tăng tốc cho các hàm rất ngắn.",
                        "concept_tag": "inline_functions",
                        "order_num": "8"
                    },
                    {
                        "id": "99",
                        "quiz_id": "10",
                        "question_text": "Biến được khai báo bên trong một hàm (Local Variable) có phạm vi hoạt động (Scope) và vòng đời như thế nào?",
                        "code_snippet": null,
                        "option_a": "Tồn tại vĩnh viễn suốt quá trình chạy chương trình",
                        "option_b": "Chỉ có thể truy cập được bên trong hàm đó và bị hủy khi hàm kết thúc thực thi",
                        "option_c": "Có thể truy cập được từ mọi file trong dự án",
                        "option_d": "Tồn tại trong toàn bộ thư mục chứa file",
                        "correct_option": "B",
                        "explanation": "Biến cục bộ (local variable) sinh ra khi hàm được gọi và được tự động giải phóng khỏi ngăn xếp (stack) khi hàm kết thúc.",
                        "concept_tag": "variable_scope",
                        "order_num": "9"
                    },
                    {
                        "id": "100",
                        "quiz_id": "10",
                        "question_text": "Khi truyền một mảng một chiều vào hàm (ví dụ: void xuLy(int a[], int n)), bản chất thực sự là C++ đang truyền cái gì?",
                        "code_snippet": null,
                        "option_a": "Sao chép toàn bộ các phần tử của mảng sang một vùng nhớ mới",
                        "option_b": "Truyền địa chỉ của phần tử đầu tiên của mảng (tương đương truyền con trỏ int*)",
                        "option_c": "Truyền kích thước byte của mảng",
                        "option_d": "Không thể truyền mảng vào hàm",
                        "correct_option": "B",
                        "explanation": "Trong C++, mảng suy biến thành con trỏ (decay to pointer) khi truyền vào hàm, do đó việc thay đổi phần tử mảng bên trong hàm sẽ làm thay đổi mảng gốc.",
                        "concept_tag": "array_decay",
                        "order_num": "10"
                    }
                ]
            }
        },
        {
            "id": "11",
            "chapter": "6",
            "chapter_title": "Chương 6: Hàm & Module Hóa Mã Nguồn",
            "title": "Đệ quy",
            "slug": "de-quy",
            "description": "Khái niệm hàm tự gọi lại chính nó, hai thành phần sống còn: Điều kiện dừng (Base Case) và Bước đệ quy (Recursive Step), mô hình Call Stack và hiểm họa Stack Overflow.",
            "duration_mins": "45",
            "objectives": [
                "Hiểu bản chất tư duy đệ quy: Giải bài toán thông qua nghiệm của bài toán con cùng dạng có kích thước nhỏ hơn.",
                "Xác định chính xác 2 thành phần: Điểm neo \/ Điều kiện dừng (Base Case) và Công thức truy hồi.",
                "Hình dung cách cơ chế ngăn xếp cuộc gọi (Call Stack) lưu giữ trạng thái các hàm đệ quy.",
                "Hiểu nguyên nhân và cách phòng tránh lỗi tràn ngăn xếp (Stack Overflow)."
            ],
            "theory_content": "### 1. Đệ quy (Recursion) là gì?\nMột hàm được gọi là **đệ quy** nếu trong thân hàm có lời gọi lại chính hàm đó.\nHãy liên tưởng đến hình ảnh hai chiếc gương đối diện nhau tạo ra vô số hình ảnh phản chiếu, hoặc búp bê Nga Matryoshka (mỗi con búp bê mở ra lại chứa một con búp bê nhỏ hơn bên trong).\n\n### 2. Hai thành phần bắt buộc của một hàm đệ quy\nMọi hàm đệ quy đúng đắn bắt buộc phải có đủ 2 phần:\n1. **Điều kiện dừng (Base Case):** Trường hợp đơn giản nhất mà bài toán đã biết rõ kết quả ngay, không cần gọi đệ quy nữa. Đây là \"chiếc phanh\" dừng đệ quy.\n2. **Bước đệ quy (Recursive Step):** Chia bài toán kích thước $N$ thành bài toán con kích thước nhỏ hơn (ví dụ $N-1$) để gọi lại chính nó, từng bước tiến dần về điều kiện dừng.\n\n> **NGUY CƠ CHẾT NGƯỜI: TRÀN NGĂN XẾP (STACK OVERFLOW)**\n> Nếu bạn quên điều kiện dừng hoặc điều kiện dừng không bao giờ chạm tới, hàm sẽ gọi chính nó vô tận. Mỗi lời gọi hàm chiếm dụng bộ nhớ trên Call Stack, cho đến khi bộ nhớ stack cạn kiệt, hệ điều hành sẽ cưỡng chế đóng ứng dụng ngay lập tức (Crash).",
            "code_examples": [
                {
                    "title": "Tính giai thừa N! bằng phương pháp đệ quy",
                    "code": "#include <iostream>\nusing namespace std;\n\n\/\/ Dinh nghia toan hoc:\n\/\/ 0! = 1 (Dieu kien dung)\n\/\/ N! = N * (N - 1)! (Buoc de quy)\nlong long giaiThua(int n) {\n    if (n == 0 || n == 1) {\n        return 1; \/\/ Base case\n    }\n    return n * giaiThua(n - 1); \/\/ Recursive step\n}\n\nint main() {\n    int n;\n    cout << \"Nhap so nguyen duong n: \";\n    cin >> n;\n    \n    cout << n << \"! = \" << giaiThua(n) << endl;\n    return 0;\n}",
                    "input": "5",
                    "output": "Nhap so nguyen duong n: 5! = 120",
                    "explanation": "Khi gọi giaiThua(5): hàm chờ giaiThua(4), giaiThua(4) chờ giaiThua(3)... đến giaiThua(1) chạm điều kiện dừng trả về 1, các kết quả được cuộn ngược lại: 1 -> 2 -> 6 -> 24 -> 120."
                }
            ],
            "real_world_application": "Duyệt cây thư mục trên máy tính (Folder bên trong Folder); thuật toán sắp xếp nhanh QuickSort và MergeSort; thuật toán duyệt đồ thị DFS trong mạng xã hội tìm bạn bè chung; trí tuệ nhân tạo giải Sudoku hoặc cờ vua (Minimax Algorithm).",
            "common_pitfalls": [
                {
                    "mistake": "Quên điều kiện dừng (Base Case), dẫn đến lỗi Segmentation Fault \/ Stack Overflow.",
                    "reason": "Không có điểm neo dừng khiến hàm gọi vô hạn làm tràn bộ nhớ Call Stack.",
                    "fix": "Luôn luôn viết khối kiểm tra if (base_case) return ... ngay ở dòng đầu tiên của hàm đệ quy."
                }
            ],
            "order_num": "11",
            "quiz": {
                "id": "11",
                "lesson_id": "11",
                "title": "Kiểm tra trắc nghiệm: Đệ quy",
                "time_limit_mins": "12",
                "pass_score": "5.0",
                "questions": [
                    {
                        "id": "101",
                        "quiz_id": "11",
                        "question_text": "Thành phần nào là điều kiện tiên quyết trong hàm đệ quy để ngăn chặn vòng lặp vô tận làm treo chương trình?",
                        "code_snippet": null,
                        "option_a": "Vòng lặp for",
                        "option_b": "Điểm neo \/ Điều kiện dừng (Base Case)",
                        "option_c": "Lệnh break",
                        "option_d": "Từ khóa const",
                        "correct_option": "B",
                        "explanation": "Base case là điểm dừng giúp hàm trả về giá trị xác định mà không tiếp tục gọi thêm đệ quy.",
                        "concept_tag": "base_case",
                        "order_num": "1"
                    },
                    {
                        "id": "102",
                        "quiz_id": "11",
                        "question_text": "Cấu trúc dữ liệu nào trong bộ nhớ hệ thống được sử dụng để quản lý các lời gọi hàm đệ quy?",
                        "code_snippet": null,
                        "option_a": "Queue (Hàng đợi - FIFO)",
                        "option_b": "Call Stack (Ngăn xếp - LIFO)",
                        "option_c": "Heap (Bộ nhớ cấp phát động)",
                        "option_d": "Bảng băm (Hash Table)",
                        "correct_option": "B",
                        "explanation": "Call Stack hoạt động theo nguyên lý vào sau ra trước (LIFO), mỗi lời gọi hàm được đẩy một Stack Frame lên đỉnh.",
                        "concept_tag": "call_stack",
                        "order_num": "2"
                    },
                    {
                        "id": "103",
                        "quiz_id": "11",
                        "question_text": "Lỗi tràn ngăn xếp bộ nhớ do đệ quy vô tận gây ra có tên gọi kỹ thuật là gì?",
                        "code_snippet": null,
                        "option_a": "Buffer Overflow",
                        "option_b": "Stack Overflow",
                        "option_c": "Memory Leak",
                        "option_d": "Null Pointer Exception",
                        "correct_option": "B",
                        "explanation": "Stack Overflow xảy ra khi kích thước bộ nhớ ngăn xếp dành cho tiến trình bị sử dụng vượt quá giới hạn.",
                        "concept_tag": "stack_overflow",
                        "order_num": "3"
                    },
                    {
                        "id": "104",
                        "quiz_id": "11",
                        "question_text": "Cho hàm đệ quy: int f(int n) { if (n <= 1) return 1; return n + f(n - 1); } Giá trị của f(4) là bao nhiêu?",
                        "code_snippet": null,
                        "option_a": "4",
                        "option_b": "10",
                        "option_c": "24",
                        "option_d": "7",
                        "correct_option": "B",
                        "explanation": "f(4) = 4 + f(3) = 4 + 3 + f(2) = 4 + 3 + 2 + f(1) = 4 + 3 + 2 + 1 = 10.",
                        "concept_tag": "recursion_tracing",
                        "order_num": "4"
                    },
                    {
                        "id": "105",
                        "quiz_id": "11",
                        "question_text": "Hàm đệ quy tính số Fibonacci: int fib(int n) { if (n <= 1) return n; return fib(n-1) + fib(n-2); } có độ phức tạp thời gian xấp xỉ là bao nhiêu nếu không tối ưu nhớ?",
                        "code_snippet": null,
                        "option_a": "O(n)",
                        "option_b": "O(n^2)",
                        "option_c": "O(2^n) - Cấp số mũ rất chậm",
                        "option_d": "O(log n)",
                        "correct_option": "C",
                        "explanation": "Mỗi lời gọi tách thành 2 nhánh con tạo cây nhị phân, dẫn đến độ phức tạp hàm mũ O(2^n), tính với n=50 có thể mất hàng ngày.",
                        "concept_tag": "complexity",
                        "order_num": "5"
                    },
                    {
                        "id": "106",
                        "quiz_id": "11",
                        "question_text": "Đệ quy đuôi (Tail Recursion) là dạng đệ quy có đặc điểm gì đặc biệt?",
                        "code_snippet": null,
                        "option_a": "Lời gọi đệ quy là thao tác cuối cùng được thực hiện trong hàm trước khi trả về",
                        "option_b": "Hàm gọi đệ quy ở ngay dòng đầu tiên",
                        "option_c": "Hàm có 2 điều kiện dừng",
                        "option_d": "Hàm không có tham số",
                        "correct_option": "A",
                        "explanation": "Tail recursion có lời gọi đệ quy là hành động cuối cùng, cho phép compiler tối ưu thành vòng lặp không tiêu tốn bộ nhớ stack (Tail Call Optimization).",
                        "concept_tag": "tail_recursion",
                        "order_num": "6"
                    },
                    {
                        "id": "107",
                        "quiz_id": "11",
                        "question_text": "So sánh giữa Đệ quy (Recursion) và Vòng lặp (Iteration), phát biểu nào sau đây là ĐÚNG?",
                        "code_snippet": null,
                        "option_a": "Đệ quy luôn luôn chạy nhanh hơn và tốn ít bộ nhớ hơn vòng lặp",
                        "option_b": "Vòng lặp thường có hiệu năng thực thi tốt hơn và không có nguy cơ tràn stack như đệ quy",
                        "option_c": "Mọi bài toán giải bằng đệ quy đều không thể giải bằng vòng lặp",
                        "option_d": "Đệ quy không thể biểu diễn thuật toán sắp xếp",
                        "correct_option": "B",
                        "explanation": "Vòng lặp không phải tạo stack frame cho mỗi lần lặp nên chạy nhanh hơn và an toàn về bộ nhớ hơn đệ quy thông thường.",
                        "concept_tag": "recursion_vs_iteration",
                        "order_num": "7"
                    },
                    {
                        "id": "108",
                        "quiz_id": "11",
                        "question_text": "Điều gì xảy ra với hàm sau khi gọi print(3)?\\nvoid print(int n) {\\n    cout << n << \" \";\\n    print(n - 1);\\n}",
                        "code_snippet": null,
                        "option_a": "In 3 2 1 0 rồi dừng",
                        "option_b": "In 3 2 1 0 -1 -2 ... liên tục cho đến khi sập vì lỗi Stack Overflow",
                        "option_c": "Lỗi biên dịch",
                        "option_d": "Không in gì cả",
                        "correct_option": "B",
                        "explanation": "Hàm không hề có điều kiện dừng if, n tiếp tục giảm xuống âm vô cùng cho đến khi cạn kiệt bộ nhớ stack.",
                        "concept_tag": "pitfalls",
                        "order_num": "8"
                    },
                    {
                        "id": "109",
                        "quiz_id": "11",
                        "question_text": "Thuật toán Tháp Hà Nội (Tower of Hanoi) với n đĩa cần tối thiểu bao nhiêu bước di chuyển giải theo đệ quy?",
                        "code_snippet": null,
                        "option_a": "2n",
                        "option_b": "n^2",
                        "option_c": "2^n - 1",
                        "option_d": "n!",
                        "correct_option": "C",
                        "explanation": "Số bước tối thiểu để giải bài toán Tháp Hà Nội n đĩa là 2^n - 1 bước.",
                        "concept_tag": "classic_algorithms",
                        "order_num": "9"
                    },
                    {
                        "id": "110",
                        "quiz_id": "11",
                        "question_text": "Kỹ thuật lưu lại kết quả của các bài toán con đã giải trong đệ quy để tránh tính toán trùng lặp được gọi là gì?",
                        "code_snippet": null,
                        "option_a": "Backtracking (Quay lui)",
                        "option_b": "Memoization (Ghi nhớ \/ Quy hoạch động)",
                        "option_c": "Garbage Collection",
                        "option_d": "Refactoring",
                        "correct_option": "B",
                        "explanation": "Memoization (lưu kết quả vào mảng\/bảng băm) biến bài toán Fibonacci từ độ phức tạp mũ O(2^n) xuống tuyến tính O(n).",
                        "concept_tag": "dynamic_programming",
                        "order_num": "10"
                    }
                ]
            }
        },
        {
            "id": "12",
            "chapter": "7",
            "chapter_title": "Chương 7: Quản Lý Bộ Nhớ & Con Trỏ",
            "title": "Con trỏ",
            "slug": "con-tro",
            "description": "Vũ khí mạnh nhất của C++: Toán tử lấy địa chỉ &, biến con trỏ *, giải tham chiếu, số học con trỏ, cấp phát động new\/delete và phòng tránh Memory Leak.",
            "duration_mins": "50",
            "objectives": [
                "Hiểu rõ con trỏ là biến lưu trữ ĐỊA CHỈ Ô NHỚ trong RAM thay vì lưu giá trị.",
                "Phân biệt tuyệt đối giữa toán tử lấy địa chỉ `&` và toán tử giải tham chiếu `*`.",
                "Thành thạo cấp phát động trên vùng nhớ Heap bằng toán tử `new` và giải phóng bằng `delete`.",
                "Nhận biết và phòng ngừa rò rỉ bộ nhớ (Memory Leak) và con trỏ lửng (Dangling Pointer)."
            ],
            "theory_content": "### 1. Con trỏ (Pointer) là gì?\nCon trỏ là khái niệm làm nên sức mạnh vượt trội nhưng cũng là nỗi sợ lớn nhất của người mới học C++.\n* Một biến thông thường lưu **giá trị** (ví dụ: `int x = 10;`).\n* Một **biến con trỏ** lưu **địa chỉ ô nhớ** của biến khác trong RAM.\n\nHãy tưởng tượng: Bạn không giữ bức thư trong tay, mà bạn chỉ cầm một mảnh giấy ghi *\"Hộp thư số 123 đường Giải Phóng\"*. Mảnh giấy ghi địa chỉ đó chính là con trỏ!\n\n### 2. Hai toán tử sống còn\n* **`&` (Address-of operator):** Lấy địa chỉ ô nhớ của một biến. Ví dụ: `&x` cho biết `x` đang nằm ở địa chỉ nào trong RAM.\n* **`*` (Dereference operator - Giải tham chiếu):** Đi đến địa chỉ mà con trỏ đang nắm giữ để lấy hoặc sửa đổi giá trị bên trong ô nhớ đó.\n\n```cpp\nint x = 42;\nint* ptr = &x; \/\/ ptr luu dia chi cua x\n\ncout << \"Gia tri cua x: \" << x << endl;        \/\/ In 42\ncout << \"Dia chi cua x: \" << ptr << endl;      \/\/ In dia chi hex (vd: 0x7ffd5e)\ncout << \"Giai tham chieu: \" << *ptr << endl;  \/\/ In 42 (toi dia chi do lay gia tri)\n\n*ptr = 99; \/\/ Sua doi truc tiep gia tri cua x qua con tro!\ncout << \"Gia tri moi cua x: \" << x << endl;    \/\/ In 99\n```\n\n### 3. Cấp phát bộ nhớ động (Dynamic Memory Allocation)\nBiến thông thường được tạo trên vùng nhớ **Stack** (kích thước cố định). Khi cần tạo mảng với kích thước tùy ý lúc chương trình đang chạy, ta xin cấp phát trên vùng nhớ **Heap**:\n* Cấp phát biến đơn: `int* p = new int;` -> Giải phóng: `delete p;`\n* Cấp phát mảng: `int* arr = new int[n];` -> Giải phóng: `delete[] arr;`\n\n> **QUY TẮC BẤT DI BẤT DỊCH TRONG C++:**\n> Cứ mỗi lệnh `new` bắt buộc phải có một lệnh `delete` tương ứng khi dùng xong. Nếu quên `delete`, vùng nhớ sẽ bị chiếm dụng vĩnh viễn gây ra hiện tượng **Rò rỉ bộ nhớ (Memory Leak)**!",
            "code_examples": [
                {
                    "title": "Cấp phát mảng động và giải phóng bộ nhớ an toàn",
                    "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cout << \"Nhap so luong phan tu can cap phat: \";\n    cin >> n;\n    \n    \/\/ Xin he dieu hanh cap phat n o nho tren vung Heap\n    int* p = new int[n];\n    \n    for (int i = 0; i < n; i++) {\n        p[i] = (i + 1) * 10;\n    }\n    \n    cout << \"Cac phan tu trong mang dong: \";\n    for (int i = 0; i < n; i++) {\n        cout << *(p + i) << \" \"; \/\/ Su dung so hoc con tro\n    }\n    cout << endl;\n    \n    \/\/ Giai phong bo nho bat buoc\n    delete[] p;\n    p = nullptr; \/\/ Tranh con tro lung (Dangling pointer)\n    \n    cout << \"Da giai phong bo nho an toan!\" << endl;\n    return 0;\n}",
                    "input": "4",
                    "output": "Nhap so luong phan tu can cap phat: Cac phan tu trong mang dong: 10 20 30 40 \nDa giai phong bo nho an toan!",
                    "explanation": "Sử dụng new int[n] để cấp phát động theo kích thước người dùng nhập lúc runtime, và delete[] p để thu hồi bộ nhớ sau khi hoàn thành."
                }
            ],
            "real_world_application": "Trình duyệt Google Chrome dùng con trỏ để quản lý bộ nhớ của hàng chục tab đang mở; hệ điều hành Windows quản lý trình điều khiển thiết bị (Device Driver); các cấu trúc dữ liệu kinh điển như Danh sách liên kết (Linked List), Cây (Tree), Đồ thị (Graph) đều được xây dựng dựa trên con trỏ.",
            "common_pitfalls": [
                {
                    "mistake": "Sử dụng con trỏ chưa khởi tạo hoặc con trỏ trỏ vào NULL\/nullptr: int* p; *p = 10;",
                    "reason": "Con trỏ chứa địa chỉ rác, ghi đè vào địa chỉ ngẫu nhiên làm hệ điều hành lập tức báo lỗi Crash (Segmentation Fault).",
                    "fix": "Luôn khởi tạo con trỏ: int* p = nullptr;"
                },
                {
                    "mistake": "Quên lệnh delete[] khi cấp phát mảng bằng new int[n].",
                    "reason": "Gây rò rỉ bộ nhớ (Memory Leak), máy chủ chạy lâu ngày sẽ hết sạch RAM và sập.",
                    "fix": "Nhớ cặp đôi song hành: new [] đi với delete []."
                }
            ],
            "order_num": "12",
            "quiz": {
                "id": "12",
                "lesson_id": "12",
                "title": "Kiểm tra trắc nghiệm: Con trỏ",
                "time_limit_mins": "15",
                "pass_score": "5.0",
                "questions": [
                    {
                        "id": "111",
                        "quiz_id": "12",
                        "question_text": "Một biến con trỏ trong C++ thực chất lưu trữ giá trị gì?",
                        "code_snippet": null,
                        "option_a": "Giá trị số nguyên của biến",
                        "option_b": "Địa chỉ ô nhớ của một biến khác trong bộ nhớ RAM",
                        "option_c": "Tên của biến",
                        "option_d": "Kích thước byte của biến",
                        "correct_option": "B",
                        "explanation": "Bản chất của con trỏ là biến dùng để lưu địa chỉ ô nhớ trong bộ nhớ RAM.",
                        "concept_tag": "pointer_concept",
                        "order_num": "1"
                    },
                    {
                        "id": "112",
                        "quiz_id": "12",
                        "question_text": "Toán tử nào được dùng để lấy địa chỉ ô nhớ của một biến trong C++?",
                        "code_snippet": null,
                        "option_a": "*",
                        "option_b": "& (Address-of)",
                        "option_c": "->",
                        "option_d": "%",
                        "correct_option": "B",
                        "explanation": "Toán tử & đặt trước tên biến (ví dụ &x) trả về địa chỉ ô nhớ nơi biến x được lưu.",
                        "concept_tag": "address_of",
                        "order_num": "2"
                    },
                    {
                        "id": "113",
                        "quiz_id": "12",
                        "question_text": "Khi con trỏ ptr trỏ tới biến a, thao tác *ptr = 20; có tác dụng gì?",
                        "code_snippet": null,
                        "option_a": "Đổi địa chỉ của con trỏ ptr thành 20",
                        "option_b": "Giải tham chiếu: thay đổi giá trị của biến a thành 20",
                        "option_c": "Nhân giá trị của a với 20",
                        "option_d": "Báo lỗi biên dịch",
                        "correct_option": "B",
                        "explanation": "Toán tử * là giải tham chiếu, truy cập trực tiếp vào ô nhớ mà con trỏ đang trỏ tới để gán giá trị mới.",
                        "concept_tag": "dereference",
                        "order_num": "3"
                    },
                    {
                        "id": "114",
                        "quiz_id": "12",
                        "question_text": "Từ khóa nào trong chuẩn C++ hiện đại (C++11 trở lên) được khuyến khích sử dụng để biểu thị một con trỏ rỗng không trỏ vào đâu?",
                        "code_snippet": null,
                        "option_a": "NULL",
                        "option_b": "nil",
                        "option_c": "nullptr",
                        "option_d": "0",
                        "correct_option": "C",
                        "explanation": "nullptr trong C++11 an toàn hơn kiểu số nguyên 0 \/ NULL cũ vì nó có kiểu dữ liệu riêng std::nullptr_t.",
                        "concept_tag": "nullptr",
                        "order_num": "4"
                    },
                    {
                        "id": "115",
                        "quiz_id": "12",
                        "question_text": "Toán tử nào được sử dụng để thu hồi bộ nhớ của mảng được cấp phát động bằng lệnh: int* arr = new int[50];?",
                        "code_snippet": null,
                        "option_a": "delete arr;",
                        "option_b": "free(arr);",
                        "option_c": "delete[] arr;",
                        "option_d": "clear arr;",
                        "correct_option": "C",
                        "explanation": "Khi cấp phát mảng bằng new[], bắt buộc phải giải phóng bằng toán tử delete[] arr; để gọi đầy đủ destructor và tránh rò rỉ.",
                        "concept_tag": "memory_deallocation",
                        "order_num": "5"
                    },
                    {
                        "id": "116",
                        "quiz_id": "12",
                        "question_text": "Hiện tượng \"Rò rỉ bộ nhớ\" (Memory Leak) xảy ra khi nào?",
                        "code_snippet": null,
                        "option_a": "Khi chương trình ghi dữ liệu tràn ra ngoài biên mảng",
                        "option_b": "Khi bộ nhớ được cấp phát động bằng new nhưng không bao giờ được giải phóng bằng delete",
                        "option_c": "Khi máy tính bị mất điện đột ngột",
                        "option_d": "Khi ép kiểu từ double sang int",
                        "correct_option": "B",
                        "explanation": "Memory Leak là tình trạng vùng nhớ đã cấp phát không còn con trỏ nào quản lý nhưng chưa được giải phóng trả lại cho hệ điều hành.",
                        "concept_tag": "memory_leak",
                        "order_num": "6"
                    },
                    {
                        "id": "117",
                        "quiz_id": "12",
                        "question_text": "Hiện tượng \"Con trỏ lửng\" (Dangling Pointer) là gì?",
                        "code_snippet": null,
                        "option_a": "Con trỏ trỏ vào vùng nhớ đã bị giải phóng (delete)",
                        "option_b": "Con trỏ có giá trị nullptr",
                        "option_c": "Con trỏ trỏ vào biến hằng const",
                        "option_d": "Con trỏ có kích thước 0 byte",
                        "correct_option": "A",
                        "explanation": "Dangling pointer là con trỏ vẫn còn giữ địa chỉ của ô nhớ cũ đã bị hệ điều hành thu hồi, truy cập vào nó sẽ gây lỗi Crash bất định.",
                        "concept_tag": "dangling_pointer",
                        "order_num": "7"
                    },
                    {
                        "id": "118",
                        "quiz_id": "12",
                        "question_text": "Cho đoạn code: int a[5] = {10, 20, 30, 40, 50}; int* p = a; cout << *(p + 2); Kết quả in ra là:",
                        "code_snippet": null,
                        "option_a": "10",
                        "option_b": "20",
                        "option_c": "30",
                        "option_d": "12",
                        "correct_option": "C",
                        "explanation": "Theo số học con trỏ, p + 2 trỏ tới ô a[2]. Giải tham chiếu *(p + 2) tương đương a[2] cho giá trị 30.",
                        "concept_tag": "pointer_arithmetic",
                        "order_num": "8"
                    },
                    {
                        "id": "119",
                        "quiz_id": "12",
                        "question_text": "Kích thước của một biến con trỏ (ví dụ: sizeof(int*) hoặc sizeof(char*)) trên hệ điều hành 64-bit là bao nhiêu?",
                        "code_snippet": null,
                        "option_a": "Tùy thuộc vào kiểu dữ liệu: char* là 1 byte, int* là 4 byte",
                        "option_b": "Luôn cố định là 8 byte (độ dài địa chỉ 64 bit)",
                        "option_c": "Luôn là 4 byte",
                        "option_d": "16 byte",
                        "correct_option": "B",
                        "explanation": "Mọi con trỏ trên hệ điều hành 64-bit đều có kích thước 8 byte để lưu trữ địa chỉ 64-bit, không phân biệt trỏ tới kiểu dữ liệu nào.",
                        "concept_tag": "pointer_size",
                        "order_num": "9"
                    },
                    {
                        "id": "120",
                        "quiz_id": "12",
                        "question_text": "Vùng nhớ nào được hệ điều hành cấp phát khi sử dụng toán tử \"new\"?",
                        "code_snippet": null,
                        "option_a": "Vùng nhớ Stack",
                        "option_b": "Vùng nhớ Heap (Free Store)",
                        "option_c": "Vùng nhớ Text\/Code segment",
                        "option_d": "Vùng nhớ Read-Only Data",
                        "correct_option": "B",
                        "explanation": "Biến cục bộ nằm trên Stack, trong khi toán tử new xin cấp phát bộ nhớ động trên vùng nhớ Heap.",
                        "concept_tag": "memory_architecture",
                        "order_num": "10"
                    }
                ]
            }
        },
        {
            "id": "13",
            "chapter": "8",
            "chapter_title": "Chương 8: Xử Lý Xâu Ký Tự & Cấu Trúc",
            "title": "Chuỗi ký tự",
            "slug": "chuoi-ky-tu",
            "description": "Phân biệt xâu cổ điển C-string kết thúc bằng null '\\0' và lớp đối tượng hiện đại std::string, kỹ thuật getline(cin, s) chống trôi lệnh và các hàm tiện ích.",
            "duration_mins": "35",
            "objectives": [
                "Phân biệt rõ C-string (`char[]`) kết thúc bằng ký tự null `'\\0'` và `std::string`.",
                "Khắc phục triệt để lỗi kinh điển trôi lệnh khi dùng `cin >>` kết hợp `getline()`.",
                "Sử dụng thành thạo các phương thức của `std::string`: `.length()`, `.substr()`, `.find()`, `.append()`.",
                "Cài đặt các bài toán xâu kinh điển: Kiểm tra xâu đối xứng (Palindrome), chuẩn hóa họ tên."
            ],
            "theory_content": "### 1. Sự tiến hóa từ C-String sang std::string\nTrong C cổ điển, chuỗi là một mảng các ký tự (`char s[50]`) và bắt buộc phải kết thúc bằng ký tự đặc biệt **Null Terminator (`'\\0'`)** có mã ASCII bằng 0 để đánh dấu điểm dừng.\nC++ hiện đại mang đến lớp đối tượng **`std::string`** nằm trong thư viện `<string>`:\n* Tự động co giãn bộ nhớ thông minh (không lo tràn mảng).\n* Hỗ trợ toán tử nối chuỗi `+` và so sánh trực tiếp `==`, `<`, `>`.\n\n### 2. Bẫy trôi lệnh khi nhập chuỗi có khoảng trắng\nLệnh `cin >> s;` chỉ đọc từ đầu tiên và dừng lại ngay khi gặp dấu cách (Space) hoặc xuống dòng.\nĐể nhập cả một câu đầy đủ (ví dụ: *\"Nguyen Van An\"*), ta dùng:\n```cpp\ngetline(cin, s);\n```\n> **BẪY KINH ĐIỂN - TRÔI LỆNH NHẬP:**\n> Nếu trước đó bạn nhập một số bằng `cin >> tuoi;`, ký tự phím Enter (`'\\n'`) vẫn còn kẹt lại trong bộ đệm bàn phím. Khi chạy đến `getline(cin, hoTen);`, nó sẽ lập tức \"nuốt\" ký tự Enter đó và kết thúc nhập ngay lập tức!\n> **CÁCH KHẮC PHỤC:** Thêm dòng `cin.ignore();` ngay sau lệnh `cin >>` để xóa ký tự thừa.",
            "code_examples": [
                {
                    "title": "Kiểm tra một từ có phải là xâu đối xứng (Palindrome) hay không",
                    "code": "#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    string s;\n    cout << \"Nhap mot tu can kiem tra: \";\n    cin >> s;\n    \n    string daoNguoc = s;\n    reverse(daoNguoc.begin(), daoNguoc.end());\n    \n    if (s == daoNguoc) {\n        cout << \"\\\"\" << s << \"\\\" la xau doi xung (Palindrome)!\" << endl;\n    } else {\n        cout << \"\\\"\" << s << \"\\\" khong phai la xau doi xung.\" << endl;\n    }\n    return 0;\n}",
                    "input": "radar",
                    "output": "Nhap mot tu can kiem tra: \"radar\" la xau doi xung (Palindrome)!",
                    "explanation": "Sử dụng hàm reverse() từ thư viện <algorithm> để đảo ngược chuỗi s và so sánh bằng toán tử ==."
                }
            ],
            "real_world_application": "Xử lý ngôn ngữ tự nhiên (NLP) trong chatbot AI; công cụ tìm kiếm Google tìm từ khóa trong văn bản; hệ thống kiểm tra và mã hóa định dạng email, mật khẩu khi người dùng đăng ký tài khoản.",
            "common_pitfalls": [
                {
                    "mistake": "Không dùng cin.ignore() dẫn đến lệnh getline() bị bỏ qua.",
                    "reason": "Ký tự xuống dòng newline còn sót lại trong bộ đệm luồng cin.",
                    "fix": "Gọi cin.ignore(); trước khi gọi getline(cin, str);"
                }
            ],
            "order_num": "13",
            "quiz": {
                "id": "13",
                "lesson_id": "13",
                "title": "Kiểm tra trắc nghiệm: Chuỗi ký tự",
                "time_limit_mins": "12",
                "pass_score": "5.0",
                "questions": [
                    {
                        "id": "121",
                        "quiz_id": "13",
                        "question_text": "Ký tự đặc biệt nào dùng để đánh dấu điểm kết thúc của một chuỗi C-string cổ điển?",
                        "code_snippet": null,
                        "option_a": "'\\n'",
                        "option_b": "'\\0' (Null character)",
                        "option_c": "'\\t'",
                        "option_d": "EOF",
                        "correct_option": "B",
                        "explanation": "Ký tự null '\\0' (có mã ASCII = 0) là dấu hiệu kết thúc của C-style string.",
                        "concept_tag": "c_string",
                        "order_num": "1"
                    },
                    {
                        "id": "122",
                        "quiz_id": "13",
                        "question_text": "Hàm nào sau đây được dùng để nhập cả một dòng văn bản bao gồm cả các dấu khoảng trắng vào biến std::string?",
                        "code_snippet": null,
                        "option_a": "cin >> s;",
                        "option_b": "cin.get(s);",
                        "option_c": "getline(cin, s);",
                        "option_d": "scanf(\"%s\", s);",
                        "correct_option": "C",
                        "explanation": "getline(cin, s) đọc toàn bộ dòng cho đến khi gặp ký tự xuống dòng Enter.",
                        "concept_tag": "string_input",
                        "order_num": "2"
                    },
                    {
                        "id": "123",
                        "quiz_id": "13",
                        "question_text": "Phương thức nào trả về số lượng ký tự thực tế có trong một đối tượng std::string s?",
                        "code_snippet": null,
                        "option_a": "s.count()",
                        "option_b": "s.length() hoặc s.size()",
                        "option_c": "s.capacity()",
                        "option_d": "sizeof(s)",
                        "correct_option": "B",
                        "explanation": "Cả s.length() và s.size() đều trả về độ dài thực của chuỗi std::string.",
                        "concept_tag": "string_methods",
                        "order_num": "3"
                    },
                    {
                        "id": "124",
                        "quiz_id": "13",
                        "question_text": "Cho string a = \"Lap trinh \"; string b = \"C++\"; string c = a + b; Biến c chứa giá trị gì?",
                        "code_snippet": null,
                        "option_a": "Lỗi biên dịch vì chuỗi không cộng được",
                        "option_b": "Lap trinh C++",
                        "option_c": "C++ Lap trinh",
                        "option_d": "Lap trinh",
                        "correct_option": "B",
                        "explanation": "std::string nạp chồng toán tử + để nối hai chuỗi lại với nhau tạo ra \"Lap trinh C++\".",
                        "concept_tag": "concatenation",
                        "order_num": "4"
                    },
                    {
                        "id": "125",
                        "quiz_id": "13",
                        "question_text": "Tại sao sau lệnh \"cin >> age;\" nếu gọi ngay \"getline(cin, name);\" thì biến name thường bị rỗng?",
                        "code_snippet": null,
                        "option_a": "Do biến name bị lỗi bộ nhớ",
                        "option_b": "Do ký tự Enter ('\\n') sau khi gõ số tuổi vẫn kẹt trong luồng cin và getline đọc phải nó ngay lập tức",
                        "option_c": "Do C++ không cho phép nhập số trước chuỗi",
                        "option_d": "Do thiếu thư viện <cmath>",
                        "correct_option": "B",
                        "explanation": "Toán tử >> bỏ lại ký tự newline trong bộ đệm cin, do đó getline lập tức kết thúc vì tưởng người dùng bấm Enter rỗng.",
                        "concept_tag": "buffer_trap",
                        "order_num": "5"
                    },
                    {
                        "id": "126",
                        "quiz_id": "13",
                        "question_text": "Phương thức nào của std::string được dùng để trích xuất một chuỗi con từ vị trí pos với độ dài len ký tự?",
                        "code_snippet": null,
                        "option_a": "s.slice(pos, len)",
                        "option_b": "s.substr(pos, len)",
                        "option_c": "s.sub(pos, len)",
                        "option_d": "s.split(pos, len)",
                        "correct_option": "B",
                        "explanation": "s.substr(pos, len) trích xuất xâu con bắt đầu từ pos có độ dài len.",
                        "concept_tag": "substr",
                        "order_num": "6"
                    },
                    {
                        "id": "127",
                        "quiz_id": "13",
                        "question_text": "Cho string s = \"Hello World\"; int pos = s.find(\"World\"); Giá trị của pos là:",
                        "code_snippet": null,
                        "option_a": "0",
                        "option_b": "5",
                        "option_c": "6",
                        "option_d": "-1",
                        "correct_option": "C",
                        "explanation": "Từ \"World\" bắt đầu từ chỉ số 6 (H=0, e=1, l=2, l=3, o=4, ' '=5, W=6).",
                        "concept_tag": "find_method",
                        "order_num": "7"
                    },
                    {
                        "id": "128",
                        "quiz_id": "13",
                        "question_text": "Nếu phương thức s.find() không tìm thấy chuỗi con cần tìm, nó sẽ trả về giá trị đặc biệt nào?",
                        "code_snippet": null,
                        "option_a": "-1",
                        "option_b": "0",
                        "option_c": "string::npos",
                        "option_d": "false",
                        "correct_option": "C",
                        "explanation": "Khi không tìm thấy, find() trả về hằng số std::string::npos (giá trị số nguyên không dấu lớn nhất).",
                        "concept_tag": "npos",
                        "order_num": "8"
                    },
                    {
                        "id": "129",
                        "quiz_id": "13",
                        "question_text": "Để truy cập ký tự tại vị trí index có kiểm tra an toàn ngoài biên (ném ra ngoại lệ std::out_of_range nếu sai), ta dùng phương thức nào?",
                        "code_snippet": null,
                        "option_a": "s[index]",
                        "option_b": "s.at(index)",
                        "option_c": "s.get(index)",
                        "option_d": "s.char(index)",
                        "correct_option": "B",
                        "explanation": "s.at(index) có kiểm tra biên giới hạn an toàn, trong khi toán tử ngoặc vuông s[index] không kiểm tra.",
                        "concept_tag": "safe_access",
                        "order_num": "9"
                    },
                    {
                        "id": "130",
                        "quiz_id": "13",
                        "question_text": "Một xâu Palindrome là xâu có đặc điểm gì?",
                        "code_snippet": null,
                        "option_a": "Toàn bộ các ký tự là chữ in hoa",
                        "option_b": "Đọc xuôi hay đọc ngược đều giống hệt nhau (ví dụ: \"madam\", \"racecar\")",
                        "option_c": "Độ dài của xâu là một số nguyên tố",
                        "option_d": "Không chứa bất kỳ dấu cách nào",
                        "correct_option": "B",
                        "explanation": "Xâu đối xứng (Palindrome) là xâu đọc từ trái sang phải cũng giống hệt đọc từ phải sang trái.",
                        "concept_tag": "palindrome",
                        "order_num": "10"
                    }
                ]
            }
        },
        {
            "id": "14",
            "chapter": "8",
            "chapter_title": "Chương 8: Xử Lý Xâu Ký Tự & Cấu Trúc",
            "title": "Struct",
            "slug": "struct",
            "description": "Tự định nghĩa kiểu dữ liệu mới gom nhóm nhiều thông tin có kiểu khác nhau: cấu trúc SinhVien, mảng các struct, toán tử chấm . và mũi tên ->.",
            "duration_mins": "45",
            "objectives": [
                "Hiểu rõ sự cần thiết của struct trong việc mô hình hóa thực thể đời thực.",
                "Định nghĩa cấu trúc bằng từ khóa `struct` và khai báo các trường thuộc tính (Fields\/Members).",
                "Truy xuất thuộc tính bằng toán tử dấu chấm `.` trên biến thường và toán tử mũi tên `->` trên con trỏ struct.",
                "Quản lý danh sách đối tượng bằng mảng các struct và sắp xếp theo tiêu chí điểm số."
            ],
            "theory_content": "### 1. Tại sao cần Struct?\nMảng chỉ lưu được các phần tử **cùng kiểu dữ liệu**. Nhưng một sinh viên thì có:\n* Mã sinh viên: chuỗi `string`\n* Họ tên: chuỗi `string`\n* Tuổi: số nguyên `int`\n* Điểm GPA: số thực `double`\n\n`struct` (Structure) cho phép lập trình viên tự tạo ra một **kiểu dữ liệu mới**, gom nhiều biến thuộc các kiểu dữ liệu khác nhau lại thành một thực thể duy nhất.\n\n### 2. Định nghĩa và truy xuất Struct\n```cpp\nstruct SinhVien {\n    string msv;\n    string hoTen;\n    int tuoi;\n    double gpa;\n}; \/\/ LƯU Ý BẮT BUỘC: PHẢI CÓ DẤU CHẤM PHẨY Ở CUỐI STRUCT!\n\nint main() {\n    SinhVien sv1;\n    sv1.msv = \"2301001\";\n    sv1.hoTen = \"Nguyen Van An\";\n    sv1.tuoi = 19;\n    sv1.gpa = 3.65;\n    \n    \/\/ Truy xuat qua con tro struct dung toan tu mui ten ->\n    SinhVien* ptr = &sv1;\n    cout << ptr->hoTen << \" dat GPA: \" << ptr->gpa << endl;\n}\n```\n\n### 3. Phân biệt toán tử `.` và `->`\n* Biến thường: `sv1.hoTen` (dùng dấu chấm)\n* Con trỏ struct: `ptr->hoTen` (dùng mũi tên, tương đương `(*ptr).hoTen`)",
            "code_examples": [
                {
                    "title": "Quản lý danh sách sinh viên và tìm sinh viên thủ khoa",
                    "code": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nstruct SinhVien {\n    string hoTen;\n    double gpa;\n};\n\nint main() {\n    SinhVien ds[3] = {\n        {\"Tran Van Binh\", 3.2},\n        {\"Le Thi Mai\", 3.85},\n        {\"Nguyen Hoang Nam\", 3.5}\n    };\n    \n    int thuKhoaIdx = 0;\n    for (int i = 1; i < 3; i++) {\n        if (ds[i].gpa > ds[thuKhoaIdx].gpa) {\n            thuKhoaIdx = i;\n        }\n    }\n    \n    cout << \"Thu khoa khoa CNTT: \" << ds[thuKhoaIdx].hoTen << endl;\n    cout << \"Diem GPA: \" << ds[thuKhoaIdx].gpa << endl;\n    return 0;\n}",
                    "input": "Không có",
                    "output": "Thu khoa khoa CNTT: Le Thi Mai\nDiem GPA: 3.85",
                    "explanation": "Tạo mảng 3 sinh viên và duyệt qua mảng để so sánh thuộc tính gpa, tìm ra sinh viên có điểm số cao nhất."
                }
            ],
            "real_world_application": "Cơ sở dữ liệu quản lý hồ sơ nhân sự công ty; gói tin giao thức mạng TCP\/IP header chứa IP nguồn, IP đích, cổng port, checksum; thông tin nhân vật RPG trong game gồm máu HP, giáp Armor, cấp Level.",
            "common_pitfalls": [
                {
                    "mistake": "Quên dấu chấm phẩy ; ở cuối định nghĩa struct: struct SinhVien { ... }",
                    "reason": "Trình biên dịch C++ bắt buộc phải có dấu chấm phẩy kết thúc định nghĩa kiểu dữ liệu struct.",
                    "fix": "Luôn viết dấu ; ngay sau dấu đóng ngoặc nhọn } của struct."
                }
            ],
            "order_num": "14",
            "quiz": {
                "id": "14",
                "lesson_id": "14",
                "title": "Kiểm tra trắc nghiệm: Struct",
                "time_limit_mins": "12",
                "pass_score": "5.0",
                "questions": [
                    {
                        "id": "131",
                        "quiz_id": "14",
                        "question_text": "Ký tự nào bắt buộc phải có ngay sau dấu đóng ngoặc nhọn kết thúc định nghĩa struct trong C++?",
                        "code_snippet": null,
                        "option_a": "Dấu hai chấm :",
                        "option_b": "Dấu chấm phẩy ;",
                        "option_c": "Dấu ngoặc đơn ()",
                        "option_d": "Không cần ký tự nào",
                        "correct_option": "B",
                        "explanation": "Định nghĩa struct trong C++ bắt buộc kết thúc bằng dấu chấm phẩy (;).",
                        "concept_tag": "syntax",
                        "order_num": "1"
                    },
                    {
                        "id": "132",
                        "quiz_id": "14",
                        "question_text": "Để truy cập vào một thành viên của biến struct thông thường (không phải con trỏ), ta sử dụng toán tử nào?",
                        "code_snippet": null,
                        "option_a": "Toán tử mũi tên (->)",
                        "option_b": "Toán tử dấu chấm (.)",
                        "option_c": "Toán tử hai dấu hai chấm (::)",
                        "option_d": "Toán tử &",
                        "correct_option": "B",
                        "explanation": "Toán tử dấu chấm (.) được dùng để truy xuất thành viên của đối tượng struct thông thường (ví dụ: sv.hoTen).",
                        "concept_tag": "dot_operator",
                        "order_num": "2"
                    },
                    {
                        "id": "133",
                        "quiz_id": "14",
                        "question_text": "Khi có một con trỏ trỏ tới struct (ví dụ: SinhVien* ptr = &sv;), toán tử nào sau đây dùng để truy cập thành viên của struct ngắn gọn nhất?",
                        "code_snippet": null,
                        "option_a": "ptr.hoTen",
                        "option_b": "ptr->hoTen",
                        "option_c": "ptr::hoTen",
                        "option_d": "ptr&hoTen",
                        "correct_option": "B",
                        "explanation": "Toán tử mũi tên -> (arrow operator) là cú pháp viết tắt của (*ptr).hoTen khi thao tác với con trỏ struct.",
                        "concept_tag": "arrow_operator",
                        "order_num": "3"
                    },
                    {
                        "id": "134",
                        "quiz_id": "14",
                        "question_text": "Một struct trong C++ có thể chứa một struct khác bên trong nó (Nested struct) được không?",
                        "code_snippet": null,
                        "option_a": "Được, hoàn toàn hợp lệ (ví dụ struct NgaySinh bên trong struct SinhVien)",
                        "option_b": "Không được, C++ cấm struct lồng nhau",
                        "option_c": "Chỉ được nếu hai struct cùng tên",
                        "option_d": "Chỉ được trong môi trường 64-bit",
                        "correct_option": "A",
                        "explanation": "C++ cho phép struct lồng nhau để mô hình hóa các thực thể phân cấp phức tạp.",
                        "concept_tag": "nested_struct",
                        "order_num": "4"
                    },
                    {
                        "id": "135",
                        "quiz_id": "14",
                        "question_text": "Mặc định trong C++, quyền truy cập (Access Specifier) của các thành viên bên trong một struct là gì?",
                        "code_snippet": null,
                        "option_a": "private",
                        "option_b": "public",
                        "option_c": "protected",
                        "option_d": "internal",
                        "correct_option": "B",
                        "explanation": "Điểm khác biệt quan trọng giữa struct và class trong C++ là: mọi thành viên trong struct mặc định là public, còn trong class mặc định là private.",
                        "concept_tag": "access_specifiers",
                        "order_num": "5"
                    },
                    {
                        "id": "136",
                        "quiz_id": "14",
                        "question_text": "Khai báo nào sau đây tạo ra một mảng gồm 50 đối tượng SinhVien?",
                        "code_snippet": null,
                        "option_a": "SinhVien ds = [50];",
                        "option_b": "SinhVien ds[50];",
                        "option_c": "array<SinhVien> ds(50);",
                        "option_d": "ds[50] of SinhVien;",
                        "correct_option": "B",
                        "explanation": "SinhVien là kiểu dữ liệu, do đó khai báo mảng SinhVien ds[50]; tương tự như int a[50];.",
                        "concept_tag": "struct_array",
                        "order_num": "6"
                    },
                    {
                        "id": "137",
                        "quiz_id": "14",
                        "question_text": "Biểu thức ptr->age tương đương với biểu thức nào sau đây?",
                        "code_snippet": null,
                        "option_a": "*(ptr.age)",
                        "option_b": "(*ptr).age",
                        "option_c": "&ptr.age",
                        "option_d": "ptr.(*age)",
                        "correct_option": "B",
                        "explanation": "ptr->age chính là cách viết thuận tiện và dễ đọc của (*ptr).age.",
                        "concept_tag": "syntax_equivalence",
                        "order_num": "7"
                    },
                    {
                        "id": "138",
                        "quiz_id": "14",
                        "question_text": "Khi truyền một biến struct có kích thước lớn vào hàm, cách truyền nào giúp tối ưu tốc độ thực thi và tiết kiệm bộ nhớ nhất mà vẫn an toàn không bị sửa đổi dữ liệu?",
                        "code_snippet": null,
                        "option_a": "Truyền tham trị thông thường: void in(SinhVien sv)",
                        "option_b": "Truyền tham chiếu hằng: void in(const SinhVien &sv)",
                        "option_c": "Ép kiểu sang int",
                        "option_d": "Lưu struct ra file rồi đọc lại trong hàm",
                        "correct_option": "B",
                        "explanation": "Truyền tham chiếu hằng const SinhVien &sv tránh việc copy toàn bộ dữ liệu (tốc độ cao) đồng thời từ khóa const ngăn chặn việc hàm vô tình sửa đổi dữ liệu.",
                        "concept_tag": "best_practices",
                        "order_num": "8"
                    },
                    {
                        "id": "139",
                        "quiz_id": "14",
                        "question_text": "Có thể viết các hàm (hàm thành viên - member functions) bên trong một struct của C++ hay không?",
                        "code_snippet": null,
                        "option_a": "Không thể, chỉ có class mới có hàm",
                        "option_b": "Có thể, trong C++ struct gần như giống hệt class ngoại trừ quyền truy cập mặc định",
                        "option_c": "Chỉ được có hàm main",
                        "option_d": "Chỉ được nếu là hàm ảo",
                        "correct_option": "B",
                        "explanation": "Khác với ngôn ngữ C cũ, trong C++ struct hoàn toàn có thể chứa phương thức, hàm khởi tạo (constructor) như một class.",
                        "concept_tag": "cpp_vs_c_struct",
                        "order_num": "9"
                    },
                    {
                        "id": "140",
                        "quiz_id": "14",
                        "question_text": "Kích thước của một struct trong bộ nhớ (sizeof(struct)) có luôn bằng tổng chính xác kích thước của từng thành viên cộng lại không?",
                        "code_snippet": null,
                        "option_a": "Luôn luôn bằng chính xác 100%",
                        "option_b": "Không nhất thiết, vì trình biên dịch có thể chèn thêm các byte đệm (Memory Alignment \/ Padding) để tối ưu truy xuất phần cứng",
                        "option_c": "Luôn nhỏ hơn tổng",
                        "option_d": "Bằng 0",
                        "correct_option": "B",
                        "explanation": "Hiện tượng đệm bộ nhớ (Memory Alignment Padding) giúp CPU 32\/64-bit truy xuất dữ liệu nhanh hơn, khiến sizeof(struct) thường lớn hơn tổng các trường.",
                        "concept_tag": "memory_alignment",
                        "order_num": "10"
                    }
                ]
            }
        },
        {
            "id": "15",
            "chapter": "9",
            "chapter_title": "Chương 9: Lập Trình Hướng Đối Tượng",
            "title": "Lập trình hướng đối tượng",
            "slug": "lap-trinh-huong-doi-tuong",
            "description": "Mô hình lập trình mạnh mẽ nhất hiện đại: Class và Object, 4 trụ cột cốt lõi (Đóng gói, Kế thừa, Đa hình, Trừu tượng), Constructor, Destructor và phạm vi truy cập.",
            "duration_mins": "50",
            "objectives": [
                "Hiểu rõ sự khác biệt giữa Lớp (Class - Bản thiết kế) và Đối tượng (Object - Thực thể cụ thể).",
                "Nắm vững 3 phạm vi truy cập: `private`, `public`, `protected`.",
                "Sử dụng Hàm khởi tạo (Constructor) và Hàm hủy (Destructor).",
                "Hiểu 4 tính chất trụ cột của OOP: Đóng gói (Encapsulation), Kế thừa (Inheritance), Đa hình (Polymorphism) và Trừu tượng (Abstraction)."
            ],
            "theory_content": "### 1. Cuộc cách mạng Lập trình hướng đối tượng (OOP)\nTrong lập trình cấu trúc truyền thống, Dữ liệu (Data) và Hàm (Function) bị tách rời. OOP giải quyết bài toán này bằng cách gom nhóm dữ liệu và các hành vi xử lý dữ liệu đó vào chung một thực thể gọi là **Đối tượng (Object)**.\n* **Lớp (Class):** Là bản vẽ thiết kế (Blueprint), ví dụ: Bản vẽ kỹ thuật chiếc xe hơi.\n* **Đối tượng (Object):** Là sản phẩm cụ thể được tạo ra từ bản vẽ đó, ví dụ: Chiếc xe Toyota Camry biển số 30A-12345 đỗ ở sân.\n\n### 2. Ba phạm vi truy cập (Access Specifiers)\n* **`public`:** Bất kỳ ai, ở đâu cũng có thể truy cập được.\n* **`private`:** Chỉ có các hàm thành viên bên trong chính class đó mới được truy cập (Bảo vệ tính toàn vẹn của dữ liệu).\n* **`protected`:** Chỉ class này và các class con kế thừa nó mới được truy cập.\n\n### 3. Bốn tính chất trụ cột của OOP\n1. **Đóng gói (Encapsulation):** Giấu kín dữ liệu (`private`) và chỉ cung cấp các hàm Getter\/Setter công khai (`public`) để tương tác an toàn.\n2. **Kế thừa (Inheritance):** Class con (`SinhVien`) tái sử dụng toàn bộ thuộc tính của Class cha (`Nguoi`), giúp mở rộng mã mà không phải viết lại từ đầu.\n3. **Đa hình (Polymorphism):** Cùng một tên phương thức nhưng các đối tượng khác nhau sẽ có hành vi xử lý khác nhau (thông qua từ khóa `virtual` và `override`).\n4. **Trừu tượng (Abstraction):** Chỉ hiển thị các tính năng cốt lõi cho người dùng và ẩn đi sự phức tạp cài đặt bên dưới.",
            "code_examples": [
                {
                    "title": "Cài đặt Class SinhVien có tính đóng gói và hàm khởi tạo Constructor",
                    "code": "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass SinhVien {\nprivate:\n    string hoTen;\n    double gpa;\n\npublic:\n    \/\/ Constructor (Ham khoi tao)\n    SinhVien(string ten, double diem) {\n        hoTen = ten;\n        setGpa(diem); \/\/ Su dung setter de kiem soat tinh hop le\n    }\n\n    \/\/ Setter co kiem tra hop le\n    void setGpa(double diem) {\n        if (diem >= 0.0 && diem <= 4.0) {\n            gpa = diem;\n        } else {\n            gpa = 0.0;\n            cout << \"Canh bao: Diem GPA khong hop le!\" << endl;\n        }\n    }\n\n    \/\/ Getter\n    double getGpa() const { return gpa; }\n    string getHoTen() const { return hoTen; }\n\n    void xuatThongTin() const {\n        cout << \"Sinh vien: \" << hoTen << \" | GPA: \" << gpa << endl;\n    }\n};\n\nint main() {\n    SinhVien sv(\"Nguyen Van An\", 3.75);\n    sv.xuatThongTin();\n    \n    \/\/ sv.gpa = 10; \/\/ LOI BIEN DICH: gpa la private, khong the sua truc tiep!\n    return 0;\n}",
                    "input": "Không có",
                    "output": "Sinh vien: Nguyen Van An | GPA: 3.75",
                    "explanation": "Thuộc tính hoTen và gpa được bảo vệ trong private. Người ngoài chỉ có thể tương tác qua Constructor và Getter\/Setter public."
                }
            ],
            "real_world_application": "Hệ thống tài khoản ngân hàng (số dư balance là private, chỉ được cộng\/trừ tiền qua hàm rutTien() có kiểm tra mật khẩu); thiết kế nhân vật trong game (Class Player kế thừa Class Entity, có các phương thức diChuyen(), tanCong()).",
            "common_pitfalls": [
                {
                    "mistake": "Cố tình truy cập biến private từ bên ngoài class: sv.gpa = 4.0;",
                    "reason": "Trình biên dịch chặn lại vì vi phạm nguyên lý đóng gói.",
                    "fix": "Tạo hàm Setter công khai trong public: sv.setGpa(4.0);"
                },
                {
                    "mistake": "Quên dấu chấm phẩy ở cuối khai báo class: class Nguoi { ... };",
                    "reason": "Cú pháp class tương tự struct bắt buộc phải có dấu chấm phẩy ở cuối.",
                    "fix": "Thêm dấu ; sau dấu ngoặc nhọn đóng của class."
                }
            ],
            "order_num": "15",
            "quiz": {
                "id": "15",
                "lesson_id": "15",
                "title": "Kiểm tra trắc nghiệm: Lập trình hướng đối tượng (OOP)",
                "time_limit_mins": "15",
                "pass_score": "5.0",
                "questions": [
                    {
                        "id": "141",
                        "quiz_id": "15",
                        "question_text": "Mặc định trong một class của C++, các thuộc tính và phương thức nếu không ghi rõ phạm vi truy cập sẽ mang quyền gì?",
                        "code_snippet": null,
                        "option_a": "public",
                        "option_b": "private",
                        "option_c": "protected",
                        "option_d": "global",
                        "correct_option": "B",
                        "explanation": "Khác với struct (mặc định public), mọi thành phần trong class của C++ mặc định là private.",
                        "concept_tag": "class_access",
                        "order_num": "1"
                    },
                    {
                        "id": "142",
                        "quiz_id": "15",
                        "question_text": "Hàm đặc biệt nào tự động được gọi khi một đối tượng được tạo ra để khởi tạo giá trị ban đầu cho các thuộc tính?",
                        "code_snippet": null,
                        "option_a": "Destructor (Hàm hủy)",
                        "option_b": "Constructor (Hàm khởi tạo)",
                        "option_c": "Init function",
                        "option_d": "Main function",
                        "correct_option": "B",
                        "explanation": "Constructor có tên trùng khớp với tên class và không có kiểu trả về, tự động chạy khi đối tượng được khởi tạo.",
                        "concept_tag": "constructor",
                        "order_num": "2"
                    },
                    {
                        "id": "143",
                        "quiz_id": "15",
                        "question_text": "Hàm hủy (Destructor) trong C++ có ký hiệu đặc biệt nào đứng ngay trước tên hàm?",
                        "code_snippet": null,
                        "option_a": "Dấu chấm than !",
                        "option_b": "Dấu ngã ~",
                        "option_c": "Dấu thăng #",
                        "option_d": "Dấu sao *",
                        "correct_option": "B",
                        "explanation": "Destructor được đặt tên là ~TenClass(), tự động chạy khi đối tượng bị hủy để giải phóng tài nguyên.",
                        "concept_tag": "destructor",
                        "order_num": "3"
                    },
                    {
                        "id": "144",
                        "quiz_id": "15",
                        "question_text": "Tính chất nào của OOP cho phép che giấu thông tin nội bộ của đối tượng và chỉ cho phép truy xuất qua các phương thức công khai hợp lệ?",
                        "code_snippet": null,
                        "option_a": "Inheritance (Kế thừa)",
                        "option_b": "Encapsulation (Đóng gói)",
                        "option_c": "Polymorphism (Đa hình)",
                        "option_d": "Overloading",
                        "correct_option": "B",
                        "explanation": "Encapsulation (Tính đóng gói) gom nhóm dữ liệu và ngăn chặn truy cập trực tiếp từ bên ngoài bằng phạm vi private.",
                        "concept_tag": "encapsulation",
                        "order_num": "4"
                    },
                    {
                        "id": "145",
                        "quiz_id": "15",
                        "question_text": "Cú pháp nào sau đây thể hiện class SinhVien kế thừa công khai từ class Nguoi trong C++?",
                        "code_snippet": null,
                        "option_a": "class SinhVien extends Nguoi",
                        "option_b": "class SinhVien : public Nguoi",
                        "option_c": "class SinhVien inherits Nguoi",
                        "option_d": "class SinhVien(Nguoi)",
                        "correct_option": "B",
                        "explanation": "Cú pháp kế thừa trong C++ sử dụng dấu hai chấm: class Con : public Cha.",
                        "concept_tag": "inheritance",
                        "order_num": "5"
                    },
                    {
                        "id": "146",
                        "quiz_id": "15",
                        "question_text": "Từ khóa nào trong C++ được đặt trước khai báo phương thức của class cha để cho phép class con ghi đè (override) hành vi, hiện thực hóa tính Đa hình (Polymorphism)?",
                        "code_snippet": null,
                        "option_a": "static",
                        "option_b": "virtual",
                        "option_c": "friend",
                        "option_d": "abstract",
                        "correct_option": "B",
                        "explanation": "Từ khóa virtual biến phương thức thành phương thức ảo, cho phép cơ chế liên kết động (Dynamic Binding) lúc runtime.",
                        "concept_tag": "virtual_functions",
                        "order_num": "6"
                    },
                    {
                        "id": "147",
                        "quiz_id": "15",
                        "question_text": "Con trỏ \"this\" bên trong một phương thức của class trỏ tới đối tượng nào?",
                        "code_snippet": null,
                        "option_a": "Trỏ tới class cha",
                        "option_b": "Trỏ tới chính đối tượng hiện tại đang gọi phương thức đó",
                        "option_c": "Trỏ tới hàm main",
                        "option_d": "Trỏ tới đối tượng kế tiếp",
                        "correct_option": "B",
                        "explanation": "this là con trỏ hằng đặc biệt trỏ đến chính thể hiện đối tượng hiện hành đang thực thi hàm thành viên.",
                        "concept_tag": "this_pointer",
                        "order_num": "7"
                    },
                    {
                        "id": "148",
                        "quiz_id": "15",
                        "question_text": "Thành viên tĩnh (static member variable) của một class có đặc điểm gì nổi bật?",
                        "code_snippet": null,
                        "option_a": "Mỗi đối tượng có một bản sao riêng biệt",
                        "option_b": "Được chia sẻ chung duy nhất cho tất cả các đối tượng của class đó",
                        "option_c": "Không thể thay đổi giá trị",
                        "option_d": "Tự hủy sau khi gọi hàm",
                        "correct_option": "B",
                        "explanation": "Biến static thuộc về phạm vi toàn class chứ không thuộc về riêng bất kỳ đối tượng nào, mọi object đều dùng chung một biến đó.",
                        "concept_tag": "static_members",
                        "order_num": "8"
                    },
                    {
                        "id": "149",
                        "quiz_id": "15",
                        "question_text": "Một lớp thuần ảo (Pure Abstract Class) trong C++ là lớp có chứa ít nhất một phương thức ảo thuần túy có dạng:",
                        "code_snippet": null,
                        "option_a": "virtual void draw() = 0;",
                        "option_b": "abstract void draw();",
                        "option_c": "virtual void draw() {}",
                        "option_d": "pure void draw();",
                        "correct_option": "A",
                        "explanation": "Phương thức ảo thuần túy trong C++ có cú pháp: virtual void func() = 0;. Lớp chứa nó là lớp trừu tượng và không thể tạo đối tượng trực tiếp.",
                        "concept_tag": "abstract_class",
                        "order_num": "9"
                    },
                    {
                        "id": "150",
                        "quiz_id": "15",
                        "question_text": "Phạm vi truy cập \"protected\" khác với \"private\" ở điểm mấu chốt nào?",
                        "code_snippet": null,
                        "option_a": "protected có thể truy cập tự do từ hàm main",
                        "option_b": "protected cho phép các lớp con kế thừa truy cập được, trong khi private thì lớp con cũng không được phép truy cập trực tiếp",
                        "option_c": "protected chỉ áp dụng cho số thực",
                        "option_d": "Không có sự khác biệt",
                        "correct_option": "B",
                        "explanation": "Các thuộc tính protected được bảo vệ khỏi bên ngoài nhưng class con (derived classes) vẫn có quyền truy cập trực tiếp.",
                        "concept_tag": "protected_access",
                        "order_num": "10"
                    }
                ]
            }
        }
    ],
    "badges": [
        {
            "id": "1",
            "code": "first_step",
            "name": "Bước Chân Đầu Tiên",
            "description": "Hoàn thành bài học và bài kiểm tra đầu tiên về C++.",
            "icon": "fas fa-rocket",
            "criteria": "Hoàn thành bài học số 1"
        },
        {
            "id": "2",
            "code": "quiz_master",
            "name": "Chiến Binh Điểm 10",
            "description": "Đạt điểm tuyệt đối 10.0 trong bài kiểm tra trắc nghiệm.",
            "icon": "fas fa-crown",
            "criteria": "Đạt 10 điểm trong bất kỳ bài quiz nào"
        },
        {
            "id": "3",
            "code": "loop_master",
            "name": "Bậc Thầy Vòng Lặp",
            "description": "Chinh phục hoàn toàn các vòng lặp For, While, Do-While.",
            "icon": "fas fa-sync-alt",
            "criteria": "Hoàn thành bài 7 với điểm >= 8"
        },
        {
            "id": "4",
            "code": "array_sorter",
            "name": "Chuyên Gia Mảng & Ma Trận",
            "description": "Nắm vững kỹ thuật xử lý mảng 1 chiều và 2 chiều.",
            "icon": "fas fa-th-large",
            "criteria": "Hoàn thành bài 8 và bài 9"
        },
        {
            "id": "5",
            "code": "recursion_wizard",
            "name": "Phù Thủy Đệ Quy",
            "description": "Hiểu thấu đáo về đệ quy và quản lý Call Stack.",
            "icon": "fas fa-layer-group",
            "criteria": "Hoàn thành bài 11 với điểm >= 8"
        },
        {
            "id": "6",
            "code": "pointer_ninja",
            "name": "Ninja Con Trỏ",
            "description": "Vượt qua nỗi sợ con trỏ và quản lý bộ nhớ động an toàn.",
            "icon": "fas fa-magic",
            "criteria": "Hoàn thành bài 12 với điểm >= 8"
        },
        {
            "id": "7",
            "code": "oop_architect",
            "name": "Kiến Trúc Sư OOP",
            "description": "Thành thạo 4 tính chất cốt lõi của lập trình hướng đối tượng.",
            "icon": "fas fa-cube",
            "criteria": "Hoàn thành bài 15"
        },
        {
            "id": "8",
            "code": "cpp_graduate",
            "name": "Thạc Sĩ C++ Cơ Bản",
            "description": "Hoàn thành xuất sắc toàn bộ 15 bài học trên nền tảng.",
            "icon": "fas fa-graduation-cap",
            "criteria": "Hoàn thành tất cả 15 bài học"
        }
    ]
};
