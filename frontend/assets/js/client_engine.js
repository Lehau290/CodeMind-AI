// assets/js/client_engine.js - Full Client-side Data & AI Evaluation Engine (HTML, CSS, JS Native)

const ClientAPI = {
    // 1. INITIALIZE LOCAL STORAGE DATA IF EMPTY
    initStorage() {
        if (!localStorage.getItem('cpp_users')) {
            const initialUsers = [
                {
                    id: 1,
                    username: 'student',
                    email: 'student@university.edu.vn',
                    password: '123456',
                    fullname: 'Nguyễn Văn An (K72 CNTT)',
                    role: 'student',
                    bio: 'Sinh viên năm nhất ngành CNTT - Đang chăm chỉ học C++ nhập môn lập trình.',
                    avatar: 'default_avatar.png',
                    created_at: new Date().toISOString()
                },
                {
                    id: 2,
                    username: 'teacher',
                    email: 'giangvien@sptin.edu.vn',
                    password: '123456',
                    fullname: 'ThS. Trần Thị Mai (Khoa Sư Phạm Tin)',
                    role: 'teacher',
                    bio: 'Giảng viên môn Kỹ thuật lập trình C/C++ & Phương pháp giảng dạy Tin học.',
                    avatar: 'default_avatar.png',
                    created_at: new Date().toISOString()
                },
                {
                    id: 3,
                    username: 'admin',
                    email: 'admin@cppedu.vn',
                    password: 'admin123',
                    fullname: 'Quản Trị Viên Hệ Thống',
                    role: 'admin',
                    bio: 'Quản trị nền tảng học C++ tích hợp AI.',
                    avatar: 'default_avatar.png',
                    created_at: new Date().toISOString()
                }
            ];
            localStorage.setItem('cpp_users', JSON.stringify(initialUsers));
        }

        if (!localStorage.getItem('cpp_progress')) {
            localStorage.setItem('cpp_progress', JSON.stringify({})); // { [userId_lessonId]: { is_completed: true, completed_at: '...' } }
        }

        if (!localStorage.getItem('cpp_attempts')) {
            localStorage.setItem('cpp_attempts', JSON.stringify([]));
        }

        if (!localStorage.getItem('cpp_user_badges')) {
            localStorage.setItem('cpp_user_badges', JSON.stringify([])); // [ { user_id: 1, badge_code: 'first_step', earned_at: '...' } ]
        }

        if (!localStorage.getItem('cpp_chat_history')) {
            localStorage.setItem('cpp_chat_history', JSON.stringify([]));
        }
    },

    // Current logged in user
    getCurrentUser() {
        this.initStorage();
        const json = localStorage.getItem('cpp_current_user');
        if (!json) return null;
        try {
            return JSON.parse(json);
        } catch {
            return null;
        }
    },

    setCurrentUser(user) {
        if (user) {
            const clean = { ...user };
            delete clean.password;
            localStorage.setItem('cpp_current_user', JSON.stringify(clean));
        } else {
            localStorage.removeItem('cpp_current_user');
        }
    },

    // 2. AUTHENTICATION
    async login(loginIdentifier, password, remember = true) {
        this.initStorage();
        const users = JSON.parse(localStorage.getItem('cpp_users') || '[]');
        const user = users.find(u => (u.username.toLowerCase() === loginIdentifier.toLowerCase() || u.email.toLowerCase() === loginIdentifier.toLowerCase()));

        if (!user || user.password !== password) {
            return { success: false, message: 'Tên đăng nhập hoặc mật khẩu không chính xác.' };
        }

        this.setCurrentUser(user);
        return { success: true, message: 'Đăng nhập thành công!', user: this.getCurrentUser() };
    },

    async register(fullname, username, email, password) {
        this.initStorage();
        const users = JSON.parse(localStorage.getItem('cpp_users') || '[]');

        if (users.find(u => u.username.toLowerCase() === username.toLowerCase())) {
            return { success: false, message: 'Tên đăng nhập đã tồn tại trong hệ thống.' };
        }
        if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
            return { success: false, message: 'Địa chỉ Email đã tồn tại trong hệ thống.' };
        }

        const newUser = {
            id: users.length + 1,
            username,
            email,
            password,
            fullname,
            role: 'student',
            bio: 'Sinh viên mới tham gia khóa học C++.',
            avatar: 'default_avatar.png',
            created_at: new Date().toISOString()
        };

        users.push(newUser);
        localStorage.setItem('cpp_users', JSON.stringify(users));
        this.setCurrentUser(newUser);

        return { success: true, message: 'Đăng ký tài khoản thành công!', user: this.getCurrentUser() };
    },

    async logout() {
        this.setCurrentUser(null);
        return { success: true, message: 'Đã đăng xuất thành công.' };
    },

    async updateProfile(fullname, bio) {
        const user = this.getCurrentUser();
        if (!user) return { success: false, message: 'Chưa đăng nhập.' };

        const users = JSON.parse(localStorage.getItem('cpp_users') || '[]');
        const idx = users.findIndex(u => u.id === user.id);
        if (idx !== -1) {
            users[idx].fullname = fullname;
            users[idx].bio = bio;
            localStorage.setItem('cpp_users', JSON.stringify(users));
            this.setCurrentUser(users[idx]);
            return { success: true, message: 'Cập nhật thông tin thành công!', user: this.getCurrentUser() };
        }
        return { success: false, message: 'Không tìm thấy người dùng.' };
    },

    async changePassword(currentPass, newPass) {
        const user = this.getCurrentUser();
        if (!user) return { success: false, message: 'Chưa đăng nhập.' };

        const users = JSON.parse(localStorage.getItem('cpp_users') || '[]');
        const idx = users.findIndex(u => u.id === user.id);
        if (idx !== -1) {
            if (users[idx].password !== currentPass) {
                return { success: false, message: 'Mật khẩu hiện tại không chính xác.' };
            }
            users[idx].password = newPass;
            localStorage.setItem('cpp_users', JSON.stringify(users));
            return { success: true, message: 'Đổi mật khẩu thành công!' };
        }
        return { success: false, message: 'Không tìm thấy người dùng.' };
    },

    // 3. LESSONS
    async getLessons() {
        this.initStorage();
        const data = window.CPP_DATA || { lessons: [], badges: [] };
        const rawLessons = data.lessons || [];
        const user = this.getCurrentUser();
        const userId = user ? user.id : 1;

        const progressMap = JSON.parse(localStorage.getItem('cpp_progress') || '{}');
        const attempts = JSON.parse(localStorage.getItem('cpp_attempts') || '[]');

        const lessons = rawLessons.map(l => {
            const key = `${userId}_${l.id}`;
            const isCompleted = progressMap[key] ? Boolean(progressMap[key].is_completed) : false;

            // Quiz attempts on this lesson
            const userAttempts = attempts.filter(a => a.user_id === userId && a.lesson_id === l.id);
            const passedAttempt = userAttempts.find(a => a.passed);
            const bestScore = userAttempts.length > 0 ? Math.max(...userAttempts.map(a => a.score)) : null;

            return {
                id: l.id,
                chapter: l.chapter,
                chapter_title: l.chapter_title,
                title: l.title,
                slug: l.slug,
                description: l.description,
                duration_mins: l.duration_mins,
                order_num: l.order_num,
                is_completed: isCompleted,
                quiz_info: {
                    best_score: bestScore,
                    has_passed: Boolean(passedAttempt)
                }
            };
        });

        return { success: true, lessons };
    },

    async getLessonDetail(lessonId) {
        this.initStorage();
        const data = window.CPP_DATA || { lessons: [], badges: [] };
        const rawLessons = data.lessons || [];
        const l = rawLessons.find(item => item.id === lessonId);

        if (!l) {
            return { success: false, message: 'Không tìm thấy bài học.' };
        }

        const user = this.getCurrentUser();
        const userId = user ? user.id : 1;

        const progressMap = JSON.parse(localStorage.getItem('cpp_progress') || '{}');
        const key = `${userId}_${l.id}`;
        const isCompleted = progressMap[key] ? Boolean(progressMap[key].is_completed) : false;

        const attempts = JSON.parse(localStorage.getItem('cpp_attempts') || '[]');
        const userAttempts = attempts.filter(a => a.user_id === userId && a.lesson_id === l.id);
        const passedAttempt = userAttempts.find(a => a.passed);
        const bestScore = userAttempts.length > 0 ? Math.max(...userAttempts.map(a => a.score)) : null;

        const prevLesson = rawLessons.find(item => item.order_num === l.order_num - 1) || null;
        const nextLesson = rawLessons.find(item => item.order_num === l.order_num + 1) || null;

        return {
            success: true,
            lesson: {
                ...l,
                is_completed: isCompleted,
                best_score: bestScore,
                has_passed_quiz: Boolean(passedAttempt),
                can_mark_complete: Boolean(passedAttempt),
                prev_lesson: prevLesson ? { id: prevLesson.id, title: prevLesson.title, slug: prevLesson.slug } : null,
                next_lesson: nextLesson ? { id: nextLesson.id, title: nextLesson.title, slug: nextLesson.slug } : null
            }
        };
    },

    async markLessonComplete(lessonId) {
        this.initStorage();
        const user = this.getCurrentUser();
        const userId = user ? user.id : 1;

        // REQUIREMENT: Must have passed quiz with score >= 5.0!
        const attempts = JSON.parse(localStorage.getItem('cpp_attempts') || '[]');
        const passedAttempt = attempts.find(a => a.user_id === userId && a.lesson_id === lessonId && a.passed);

        if (!passedAttempt) {
            return {
                success: false,
                can_complete: false,
                message: 'Bạn chưa thể đánh dấu hoàn thành bài học này! Quy định: Bạn bắt buộc phải làm và vượt qua bài kiểm tra trắc nghiệm (đạt từ 5.0 điểm trở lên) để được công nhận hoàn thành.'
            };
        }

        const progressMap = JSON.parse(localStorage.getItem('cpp_progress') || '{}');
        const key = `${userId}_${lessonId}`;
        progressMap[key] = {
            is_completed: true,
            completed_at: new Date().toISOString()
        };
        localStorage.setItem('cpp_progress', JSON.stringify(progressMap));

        // Check if all lessons completed for graduate badge
        const completedCount = Object.keys(progressMap).filter(k => k.startsWith(`${userId}_`) && progressMap[k].is_completed).length;
        if (completedCount >= 15) {
            this.awardBadge(userId, 'cpp_graduate');
        }

        const nextId = (lessonId < 15) ? lessonId + 1 : null;
        return {
            success: true,
            message: 'Chúc mừng! Bạn đã hoàn thành bài học này thành công.',
            is_completed: true,
            next_lesson_id: nextId
        };
    },

    async unmarkLessonComplete(lessonId) {
        this.initStorage();
        const user = this.getCurrentUser();
        const userId = user ? user.id : 1;

        const progressMap = JSON.parse(localStorage.getItem('cpp_progress') || '{}');
        const key = `${userId}_${lessonId}`;
        if (progressMap[key]) {
            progressMap[key].is_completed = false;
            localStorage.setItem('cpp_progress', JSON.stringify(progressMap));
        }

        return { success: true, message: 'Đã hủy hoàn thành bài học.', is_completed: false };
    },

    // 4. QUIZ & AI EVALUATION
    async getQuiz(lessonId) {
        this.initStorage();
        const data = window.CPP_DATA || { lessons: [], badges: [] };
        const l = (data.lessons || []).find(item => item.id === lessonId);
        if (!l || !l.quiz) {
            return { success: false, message: 'Không tìm thấy bài kiểm tra.' };
        }

        // Questions without revealing correct_option and explanation
        const safeQuestions = (l.quiz.questions || []).map(q => ({
            id: q.id,
            quiz_id: q.quiz_id,
            question_text: q.question_text,
            code_snippet: q.code_snippet,
            option_a: q.option_a,
            option_b: q.option_b,
            option_c: q.option_c,
            option_d: q.option_d,
            concept_tag: q.concept_tag,
            order_num: q.order_num
        }));

        return {
            success: true,
            quiz: {
                id: l.quiz.id,
                lesson_id: l.id,
                title: l.quiz.title,
                time_limit_mins: l.quiz.time_limit_mins,
                pass_score: l.quiz.pass_score,
                total_questions: safeQuestions.length
            },
            questions: safeQuestions
        };
    },

    async submitQuiz(lessonId, userAnswers, timeSpentSeconds) {
        this.initStorage();
        const data = window.CPP_DATA || { lessons: [], badges: [] };
        const l = (data.lessons || []).find(item => item.id === lessonId);
        if (!l || !l.quiz) {
            return { success: false, message: 'Không tìm thấy bài kiểm tra.' };
        }

        const questions = l.quiz.questions || [];
        const total = questions.length;
        let correctCount = 0;
        const graded = [];
        const conceptStats = {};

        questions.forEach(q => {
            const qid = q.id;
            const chosen = userAnswers[qid] ? String(userAnswers[qid]).toUpperCase() : '';
            const correctOpt = String(q.correct_option).toUpperCase();
            const isCorrect = (chosen !== '' && chosen === correctOpt);
            const tag = q.concept_tag || 'general';

            if (!conceptStats[tag]) {
                conceptStats[tag] = { total: 0, correct: 0, tag };
            }
            conceptStats[tag].total++;

            if (isCorrect) {
                correctCount++;
                conceptStats[tag].correct++;
            }

            graded.push({
                id: q.id,
                order_num: q.order_num,
                question_text: q.question_text,
                code_snippet: q.code_snippet,
                option_a: q.option_a,
                option_b: q.option_b,
                option_c: q.option_c,
                option_d: q.option_d,
                user_choice: chosen,
                correct_option: correctOpt,
                is_correct: isCorrect,
                explanation: q.explanation,
                concept_tag: q.concept_tag
            });
        });

        const score = Math.round((correctCount / total) * 100) / 10;
        const wrongCount = total - correctCount;
        const passed = score >= (l.quiz.pass_score || 5.0);

        // Run Client AI Evaluation
        const aiEvaluation = this.runAIEvaluation(l, questions, conceptStats, score, timeSpentSeconds);

        const user = this.getCurrentUser();
        const userId = user ? user.id : 1;

        // Save attempt
        const attempts = JSON.parse(localStorage.getItem('cpp_attempts') || '[]');
        const newAttempt = {
            id: attempts.length + 1,
            user_id: userId,
            quiz_id: l.quiz.id,
            lesson_id: lessonId,
            lesson_title: l.title,
            total_questions: total,
            correct_answers: correctCount,
            wrong_answers: wrongCount,
            score,
            time_spent_seconds: timeSpentSeconds,
            answers_data: graded,
            ai_evaluation: aiEvaluation,
            passed: Boolean(passed),
            created_at: new Date().toISOString()
        };
        attempts.unshift(newAttempt);
        localStorage.setItem('cpp_attempts', JSON.stringify(attempts));

        // Award Badges
        const newBadges = this.checkBadges(userId, lessonId, score, passed, attempts);

        return {
            success: true,
            message: 'Nộp bài và chấm điểm thành công!',
            result: {
                attempt_id: newAttempt.id,
                lesson_id: lessonId,
                score,
                passed: Boolean(passed),
                pass_score: l.quiz.pass_score || 5.0,
                total_questions: total,
                correct_answers: correctCount,
                wrong_answers: wrongCount,
                percentage: Math.round((correctCount / total) * 1000) / 10,
                time_spent_seconds: timeSpentSeconds,
                ai_evaluation: aiEvaluation,
                graded_questions: graded,
                new_badges: newBadges
            }
        };
    },

    runAIEvaluation(lesson, questions, conceptStats, score, timeSpent) {
        const strongTopics = [];
        const weakTopics = [];

        Object.keys(conceptStats).forEach(tag => {
            const stat = conceptStats[tag];
            const ratio = stat.correct / stat.total;
            const friendlyName = this.getFriendlyTagName(tag);
            const wrongCount = stat.total - stat.correct;

            if (ratio >= 0.75) {
                strongTopics[] = {
                    tag,
                    name: friendlyName,
                    accuracy: Math.round(ratio * 100) + '%',
                    detail: `Nắm vững ${stat.correct}/${stat.total} câu về ${friendlyName}`
                };
            } else {
                weakTopics.push({
                    tag,
                    name: friendlyName,
                    accuracy: Math.round(ratio * 100) + '%',
                    detail: `Còn nhầm lẫn ở ${wrongCount}/${stat.total} câu (${friendlyName})`
                });
            }
        });

        // Tier classification
        let tier = 'needs_review';
        let tierTitle = 'Chưa đạt - Cần ôn tập nghiêm túc';
        let overviewFeedback = 'Bạn cần xem lại kỹ nội dung bài học và luyện tập thêm trước khi chuyển sang bài tiếp theo. Đừng nản lòng, việc vấp ngã ở những bài đầu là điều rất bình thường với người mới học lập trình!';

        if (score >= 9.0) {
            tier = 'master';
            tierTitle = 'Xuất sắc - Nắm vững toàn diện';
            overviewFeedback = 'Bạn đã nắm rất tốt kiến thức của bài học. Tư duy logic và khả năng phân tích cú pháp C++ của bạn rất sắc bén. Bạn hoàn toàn đủ năng lực để tiếp tục với những bài học khó hơn.';
        } else if (score >= 7.0) {
            tier = 'proficient';
            tierTitle = 'Khá - Nắm vững phần lớn';
            overviewFeedback = 'Bạn đã hiểu phần lớn nội dung lý thuyết và vận dụng tốt. Tuy nhiên, vẫn còn một số bẫy cú pháp hoặc trường hợp biên mà bạn cần ôn tập thêm để đạt độ chuẩn xác tuyệt đối.';
        } else if (score >= 5.0) {
            tier = 'developing';
            tierTitle = 'Trung bình - Đạt chuẩn cơ bản';
            overviewFeedback = 'Bạn đã có kiến thức cơ bản về chủ đề này nhưng vẫn còn một số phần chưa hiểu rõ, đặc biệt là các câu hỏi suy luận code. Hãy cẩn trọng hơn với các quy tắc ngôn ngữ.';
        }

        // Speed analysis
        const avgSec = questions.length > 0 ? Math.round(timeSpent / questions.length) : 0;
        let speedAssessment = 'Tốc độ làm bài ổn định, phân bổ thời gian hợp lý cho từng câu.';
        if (avgSec < 15) speedAssessment = 'Tốc độ làm bài rất nhanh. Chú ý đọc kỹ đề để không mắc các bẫy tinh vi.';
        else if (avgSec > 45) speedAssessment = 'Bạn dành khá nhiều thời gian suy nghĩ. Hãy luyện tập thêm để phản xạ phân tích code nhạy bén hơn.';

        // Practice questions tailored
        const tailoredPractice = [];
        if (weakTopics.length === 0) {
            tailoredPractice.push({
                title: 'Bài tập thử thách nâng cao',
                description: `Viết một chương trình C++ hoàn chỉnh kết hợp kiến thức bài ${lesson.id} để giải quyết một bài toán thực tế có độ phức tạp cao hơn.`,
                hint: 'Chú ý tính tối ưu về bộ nhớ và thời gian thực thi của thuật toán.'
            });
        } else {
            weakTopics.slice(0, 2).forEach(w => {
                tailoredPractice.push({
                    title: `Luyện tập củng cố: ${w.name}`,
                    description: `Tự viết một đoạn code C++ ngắn minh họa và kiểm tra lại khái niệm ${w.name}. Thử nghiệm các trường hợp biên để thấy rõ cơ chế hoạt động.`,
                    hint: `Xem lại ví dụ mẫu và mục 'Những lỗi thường gặp' trong bài ${lesson.title}.`
                });
            });
        }

        // Roadmap
        const roadmap = [];
        if (score < 5.0) {
            roadmap.push({ order: 1, action: 'Ôn tập lại', description: `Đọc kỹ lại phần lý thuyết và ví dụ code của Bài ${lesson.id}.`, status: 'current' });
            roadmap.push({ order: 2, action: 'Luyện tập Chatbot AI', description: 'Mở hộp thoại "C++ AI Mentor" để yêu cầu AI giải thích các khái niệm bạn còn thắc mắc.', status: 'pending' });
            roadmap.push({ order: 3, action: 'Làm lại bài kiểm tra', description: 'Thực hiện lại bài kiểm tra để đạt số điểm trên 5.0 và mở khóa đánh dấu hoàn thành bài học.', status: 'pending' });
        } else {
            roadmap.push({ order: 1, action: 'Đánh dấu hoàn thành', description: `Bạn đã đạt ${score}/10 điểm! Hãy bấm nút 'Đánh dấu hoàn thành bài học'.`, status: 'done' });
            if (lesson.id < 15) {
                roadmap.push({ order: 2, action: `Bắt đầu Bài ${lesson.id + 1}`, description: 'Tiến tới bài học kế tiếp trong lộ trình học C++.', status: 'current' });
            } else {
                roadmap.push({ order: 2, action: 'Chúc mừng tốt nghiệp', description: 'Bạn đã hoàn thành xuất sắc toàn bộ khóa học C++! Hãy ghé thăm trang Hồ sơ cá nhân để ngắm nhìn toàn bộ huy hiệu bạn đạt được.', status: 'done' });
            }
        }

        return {
            score,
            correct_count: Math.round(score * questions.length / 10),
            total_questions: questions.length,
            percentage: Math.round(score * 10),
            tier,
            tier_title: tierTitle,
            overview_feedback: overviewFeedback,
            speed_assessment: speedAssessment,
            time_spent_seconds: timeSpent,
            strong_topics: strongTopics,
            weak_topics: weakTopics,
            tailored_practice: tailoredPractice,
            roadmap
        };
    },

    getFriendlyTagName(tag) {
        const map = {
            history: 'Lịch sử & Nguồn gốc C++',
            concept: 'Khái niệm lập trình cơ bản',
            compilation: 'Quy trình biên dịch (Compiler/Linker)',
            syntax: 'Cú pháp chuẩn C++',
            tooling: 'Công cụ & Trình biên dịch',
            headers: 'Thư viện & Tiền xử lý',
            namespaces: 'Không gian tên (Namespaces)',
            io_streams: 'Luồng nhập xuất (cin/cout)',
            output_tracing: 'Đọc hiểu & Dự đoán kết quả code',
            compiler_errors: 'Phát hiện & Sửa lỗi biên dịch',
            naming_rules: 'Quy tắc đặt tên biến',
            memory_size: 'Kích thước kiểu dữ liệu trong RAM',
            overflow: 'Tràn số nguyên (Integer Overflow)',
            data_types: 'Các kiểu dữ liệu cơ bản',
            constants: 'Hằng số với từ khóa const',
            memory: 'Quản lý ô nhớ & Vùng nhớ Stack/Heap',
            operators: 'Toán tử số học & Logic',
            ascii: 'Bảng mã ký tự ASCII',
            integer_division: 'Phép chia nguyên và ép kiểu',
            modulo: 'Toán tử chia lấy dư (%)',
            increment_operators: 'Tiền tố (++a) vs Hậu tố (a++)',
            relational_operators: 'Toán tử so sánh & Quan hệ',
            operator_precedence: 'Thứ tự ưu tiên toán tử',
            compound_assignment: 'Toán tử gán thu gọn',
            short_circuit: 'Nguyên tắc đoản mạch trong logic',
            type_casting: 'Ép kiểu dữ liệu (Type Casting)',
            logical_operators: 'Toán tử logic (&&, ||, !)',
            control_flow: 'Cấu trúc điều khiển rẽ nhánh If-Else',
            pitfalls: 'Bẫy cú pháp & Lỗi thường gặp',
            ternary_operator: 'Toán tử điều kiện ba ngôi (? :)',
            dangling_else: 'Hiện tượng Dangling Else lửng lơ',
            logic: 'Tư duy logic điều kiện',
            types: 'Kiểu dữ liệu trong điều khiển',
            keywords: 'Các từ khóa điều khiển (break, continue)',
            fallthrough: 'Hiện tượng trôi dòng (Fall-through)',
            technique: 'Kỹ thuật tối ưu hóa mã nguồn',
            char_switch: 'Switch-case trên ký tự',
            optimization: 'Tối ưu hóa Bảng nhảy (Jump Table)',
            loop_types: 'Phân biệt vòng lặp For, While, Do-While',
            continue_keyword: 'Lệnh continue trong vòng lặp',
            break_keyword: 'Lệnh break trong vòng lặp',
            infinite_loop: 'Vòng lặp vô tận & Cách phòng ngừa',
            while_loop: 'Vòng lặp While kiểm tra trước',
            for_execution_flow: 'Luồng thực thi của vòng lặp For',
            tracing: 'Duyệt từng bước vòng lặp',
            nested_loops: 'Vòng lặp lồng nhau',
            array_indexing: 'Đánh chỉ số mảng từ 0',
            array_bounds: 'Biên mảng & Kiểm tra an toàn',
            undefined_behavior: 'Hành vi không xác định (Undefined Behavior)',
            array_initialization: 'Khởi tạo giá trị mảng',
            sizeof_array: 'Đo kích thước mảng với sizeof',
            memory_layout: 'Bố cục mảng liên tục trong RAM',
            loop_pattern: 'Duyệt mảng bằng vòng lặp',
            cpp11_features: 'Tính năng hiện đại C++11 Range-for',
            array_assignment: 'Quy tắc gán mảng trong C++',
            algorithms: 'Thuật toán tìm kiếm & Thao tác',
            dimensions: 'Kích thước hàng và cột ma trận',
            size: 'Số lượng phần tử ma trận',
            indexing: 'Chỉ số hàng và cột ma trận',
            matrix_diagonal: 'Đường chéo chính & Đường chéo phụ',
            function_parameters: 'Truyền mảng 2 chiều vào hàm',
            initialization: 'Khởi tạo ma trận bằng 0',
            linear_algebra: 'Đại số tuyến tính & Ma trận chuyển vị',
            void_functions: 'Hàm kiểu void không trả về',
            pass_by_value: 'Truyền tham trị (Pass by Value)',
            pass_by_reference: 'Truyền tham chiếu bằng dấu &',
            prototypes: 'Nguyên mẫu hàm (Function Prototype)',
            overloading: 'Nạp chồng hàm (Function Overloading)',
            overloading_rules: 'Quy tắc nạp chồng hàm chuẩn C++',
            default_arguments: 'Tham số có giá trị mặc định',
            inline_functions: 'Hàm nội tuyến (Inline Functions)',
            variable_scope: 'Phạm vi & Vòng đời biến cục bộ',
            array_decay: 'Sự suy biến của mảng thành con trỏ',
            base_case: 'Điều kiện dừng của hàm đệ quy',
            call_stack: 'Ngăn xếp cuộc gọi (Call Stack)',
            stack_overflow: 'Tràn ngăn xếp (Stack Overflow)',
            recursion_tracing: 'Truy vết đệ quy từng bước',
            complexity: 'Độ phức tạp thuật toán đệ quy',
            tail_recursion: 'Đệ quy đuôi (Tail Recursion)',
            recursion_vs_iteration: 'So sánh Đệ quy và Vòng lặp',
            classic_algorithms: 'Thuật toán kinh điển (Tháp Hà Nội)',
            dynamic_programming: 'Kỹ thuật ghi nhớ (Memoization)',
            pointer_concept: 'Bản chất con trỏ & Địa chỉ RAM',
            address_of: 'Toán tử lấy địa chỉ (&)',
            dereference: 'Toán tử giải tham chiếu (*)',
            nullptr: 'Con trỏ rỗng an toàn nullptr',
            memory_deallocation: 'Giải phóng bộ nhớ động với delete[]',
            memory_leak: 'Rò rỉ bộ nhớ (Memory Leak)',
            dangling_pointer: 'Con trỏ lửng (Dangling Pointer)',
            pointer_arithmetic: 'Số học con trỏ (Pointer Arithmetic)',
            pointer_size: 'Kích thước con trỏ trên hệ điều hành',
            memory_architecture: 'Kiến trúc vùng nhớ Heap vs Stack',
            c_string: 'Xâu C-string & Ký tự kết thúc \\0',
            string_input: 'Nhập chuỗi có khoảng trắng với getline',
            string_methods: 'Các phương thức độ dài chuỗi',
            concatenation: 'Toán tử nối chuỗi (+)',
            buffer_trap: 'Bẫy trôi lệnh cin >> và getline',
            substr: 'Trích xuất chuỗi con substr()',
            find_method: 'Tìm kiếm từ khóa trong chuỗi',
            npos: 'Hằng số không tìm thấy string::npos',
            safe_access: 'Truy xuất ký tự an toàn với .at()',
            palindrome: 'Thuật toán xâu đối xứng Palindrome',
            dot_operator: 'Toán tử dấu chấm (.) truy xuất struct',
            arrow_operator: 'Toán tử mũi tên (->) truy xuất con trỏ struct',
            nested_struct: 'Cấu trúc struct lồng nhau',
            access_specifiers: 'Phạm vi truy cập trong struct và class',
            struct_array: 'Mảng các đối tượng struct',
            syntax_equivalence: 'Sự tương đương cú pháp (*ptr).field và ptr->field',
            best_practices: 'Thực hành tối ưu truyền tham chiếu const',
            cpp_vs_c_struct: 'Struct trong C++ vs Struct trong C',
            memory_alignment: 'Hiện tượng đệm bộ nhớ (Memory Alignment)',
            class_access: 'Quyền truy cập mặc định trong Class',
            constructor: 'Hàm khởi tạo (Constructor)',
            destructor: 'Hàm hủy (Destructor)',
            encapsulation: 'Tính đóng gói (Encapsulation)',
            inheritance: 'Tính kế thừa (Inheritance)',
            virtual_functions: 'Phương thức ảo & Đa hình (Polymorphism)',
            this_pointer: 'Con trỏ this đại diện đối tượng hiện hành',
            static_members: 'Thành viên dữ liệu tĩnh (static)',
            abstract_class: 'Lớp trừu tượng thuần ảo (Pure Virtual)'
        };
        return map[tag] || tag;
    },

    checkBadges(userId, lessonId, score, passed, attempts) {
        const userBadges = JSON.parse(localStorage.getItem('cpp_user_badges') || '[]');
        const awarded = [];

        const tryAward = (code) => {
            if (!userBadges.find(b => b.user_id === userId && b.badge_code === code)) {
                userBadges.push({ user_id: userId, badge_code: code, earned_at: new Date().toISOString() });
                const bMeta = (window.CPP_DATA.badges || []).find(b => b.code === code);
                if (bMeta) awarded.push(bMeta);
            }
        };

        if (lessonId === 1 && passed) tryAward('first_step');
        if (score >= 10.0) tryAward('quiz_master');
        if (lessonId === 7 && score >= 8.0) tryAward('loop_master');

        const passedLessonIds = [...new Set(attempts.filter(a => a.user_id === userId && a.passed).map(a => a.lesson_id))];
        if (passedLessonIds.includes(8) && passedLessonIds.includes(9)) tryAward('array_sorter');
        if (lessonId === 11 && score >= 8.0) tryAward('recursion_wizard');
        if (lessonId === 12 && score >= 8.0) tryAward('pointer_ninja');
        if (lessonId === 15 && passed) tryAward('oop_architect');
        if (passedLessonIds.length >= 15) tryAward('cpp_graduate');

        localStorage.setItem('cpp_user_badges', JSON.stringify(userBadges));
        return awarded;
    },

    awardBadge(userId, code) {
        const userBadges = JSON.parse(localStorage.getItem('cpp_user_badges') || '[]');
        if (!userBadges.find(b => b.user_id === userId && b.badge_code === code)) {
            userBadges.push({ user_id: userId, badge_code: code, earned_at: new Date().toISOString() });
            localStorage.setItem('cpp_user_badges', JSON.stringify(userBadges));
        }
    },

    // 5. PROFILE DASHBOARD DATA
    async getProfile() {
        this.initStorage();
        const user = this.getCurrentUser();
        const userId = user ? user.id : 1;

        const data = window.CPP_DATA || { lessons: [], badges: [] };
        const totalLessons = (data.lessons || []).length || 15;

        const progressMap = JSON.parse(localStorage.getItem('cpp_progress') || '{}');
        const completedLessons = Object.keys(progressMap).filter(k => k.startsWith(`${userId}_`) && progressMap[k].is_completed).length;
        const progressPercentage = Math.round((completedLessons / totalLessons) * 1000) / 10;

        const attempts = JSON.parse(localStorage.getItem('cpp_attempts') || '[]').filter(a => a.user_id === userId);
        const totalQuizzes = attempts.length;
        const passedQuizzes = attempts.filter(a => a.passed).length;
        const avgScore = totalQuizzes > 0 ? Math.round((attempts.reduce((acc, a) => acc + a.score, 0) / totalQuizzes) * 10) / 10 : 0;
        const highestScore = totalQuizzes > 0 ? Math.max(...attempts.map(a => a.score)) : 0;

        // Current lesson
        const uncompleted = (data.lessons || []).find(l => {
            const key = `${userId}_${l.id}`;
            return !progressMap[key] || !progressMap[key].is_completed;
        });
        const currentLesson = uncompleted ? { id: uncompleted.id, title: uncompleted.title, slug: uncompleted.slug } : { id: 15, title: 'Lập trình hướng đối tượng' };

        // Chart data
        const recent10 = [...attempts].reverse().slice(-10);
        const chartLabels = recent10.map(a => `Bài ${a.lesson_id} (${new Date(a.created_at).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' })})`);
        const chartScores = recent10.map(a => a.score);

        // Badges
        const userBadges = JSON.parse(localStorage.getItem('cpp_user_badges') || '[]').filter(b => b.user_id === userId);
        const badges = (data.badges || []).map(b => {
            const ub = userBadges.find(u => u.badge_code === b.code);
            return {
                ...b,
                is_earned: Boolean(ub),
                earned_at: ub ? ub.earned_at : null
            };
        });

        return {
            success: true,
            user: user || { fullname: 'Khách tham quan', role: 'student', username: 'guest', email: 'guest@university.edu.vn', created_at: new Date().toISOString() },
            stats: {
                total_lessons: totalLessons,
                completed_lessons: completedLessons,
                progress_percentage: progressPercentage,
                total_quizzes_taken: totalQuizzes,
                quizzes_passed: passedQuizzes,
                average_score: avgScore,
                highest_score: highestScore,
                current_lesson: currentLesson
            },
            chart_data: {
                labels: chartLabels,
                scores: chartScores
            },
            recent_attempts: attempts.slice(0, 15).map(a => ({
                id: a.id,
                lesson_id: a.lesson_id,
                lesson_title: a.lesson_title,
                score: a.score,
                passed: a.passed,
                correct_answers: a.correct_answers,
                wrong_answers: a.wrong_answers,
                total_questions: a.total_questions,
                created_at: a.created_at,
                ai_tier_title: a.ai_evaluation?.tier_title || 'Đã làm bài',
                ai_overview: a.ai_evaluation?.overview_feedback || ''
            })),
            badges
        };
    },

    // 6. STATS FOR HOME PAGE
    async getStats() {
        this.initStorage();
        const data = window.CPP_DATA || { lessons: [], badges: [] };
        const featured = (data.lessons || []).filter(l => [1, 3, 7, 10, 12, 15].includes(l.id));

        return {
            success: true,
            stats: {
                total_lessons: 15,
                total_students: 350,
                total_quizzes_taken: 1250,
                total_completions: 820,
                satisfaction_rate: '99.4%'
            },
            featured_lessons: featured
        };
    },

    // 7. CHATBOT AI MENTOR IN JAVASCRIPT
    async askChatbot(prompt, lessonId) {
        const lower = prompt.toLowerCase();
        let lessonContext = '';
        if (lessonId) {
            const data = window.CPP_DATA || { lessons: [] };
            const l = (data.lessons || []).find(item => item.id === lessonId);
            if (l) lessonContext = `Đang hỗ trợ trong bài: **${l.title}** (${l.chapter_title}).\n\n`;
        }

        // Check if user has custom Gemini API Key
        const apiKey = localStorage.getItem('cpp_gemini_api_key');
        if (apiKey) {
            try {
                const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{
                            role: 'user',
                            parts: [{ text: `Bạn là C++ AI Mentor cho sinh viên năm nhất CNTT & Sư phạm Tin. Hãy trả lời ngắn gọn, sư phạm, chuẩn xác bằng Markdown:\n${prompt}` }]
                        }]
                    })
                });
                const json = await res.json();
                const text = json.candidates?.[0]?.content?.parts?.[0]?.text;
                if (text) return { success: true, reply: text };
            } catch (err) {
                console.warn('Gemini API call failed, falling back to local C++ engine:', err);
            }
        }

        // High-Precision Intelligent C++ Mentor Engine in JavaScript
        if (lower.includes('con trỏ') || lower.includes('pointer') || lower.includes('*ptr') || lower.includes('địa chỉ')) {
            return {
                success: true,
                reply: lessonContext + `Chào bạn! **Con trỏ (Pointer)** là vũ khí mạnh nhất của C++.\n\n### 1. Bản chất cốt lõi:\n* Biến thông thường: Lưu **giá trị** (\`int x = 10;\`).\n* Biến con trỏ: Lưu **địa chỉ ô nhớ** của biến khác trong RAM (\`int* ptr = &x;\`).\n\n### 2. Hai toán tử cần nhớ:\n* \`&x\`: Lấy địa chỉ của \`x\`.\n* \`*ptr\`: Giải tham chiếu - Đọc/ghi giá trị tại ô nhớ con trỏ đang nắm giữ.\n\n\`\`\`cpp\nint a = 42;\nint* p = &a;\n*p = 100; // Thay đổi trực tiếp a qua con trỏ!\ncout << a; // In ra 100\n\`\`\`\n\n> ⚠️ **Lưu ý:** Luôn giải phóng bằng \`delete\` hoặc \`delete[]\` sau khi dùng \`new\` để tránh **Memory Leak**!`
            };
        }

        if (lower.includes('segmentation fault') || lower.includes('crash') || lower.includes('lỗi sập')) {
            return {
                success: true,
                reply: lessonContext + `Lỗi **Segmentation Fault** xảy ra khi chương trình truy cập vào vùng nhớ trái phép!\n\n### Các nguyên nhân kinh điển:\n1. **Giải tham chiếu con trỏ nullptr hoặc rác:**\n   \`\`\`cpp\n   int* p = nullptr;\n   *p = 10; // Sập ngay lập tức!\n   \`\`\`\n2. **Truy cập ngoài biên mảng (Out of bounds):**\n   \`int a[5]; a[100] = 1;\`\n3. **Tràn ngăn xếp do đệ quy vô tận (Stack Overflow):** Thiếu điều kiện dừng Base case.\n\n### Cách sửa: Luôn kiểm tra \`if (p != nullptr)\` và đảm bảo chỉ số \`0 <= i < N\`.`
            };
        }

        if (lower.includes('đệ quy') || lower.includes('recursion') || lower.includes('giai thừa') || lower.includes('fibonacci')) {
            return {
                success: true,
                reply: lessonContext + `**Đệ quy (Recursion)** là kỹ thuật hàm tự gọi lại chính nó.\n\n### 2 Thành phần bắt buộc:\n1. **Điều kiện dừng (Base Case):** Giúp hàm dừng lại khi chạm bài toán cơ bản nhất.\n2. **Bước đệ quy (Recursive Step):** Thu nhỏ kích thước bài toán và gọi lại chính nó.\n\n\`\`\`cpp\nlong long giaiThua(int n) {\n    if (n <= 1) return 1; // Base case\n    return n * giaiThua(n - 1); // Bước đệ quy\n}\n\`\`\``
            };
        }

        if (lower.includes('tham trị') || lower.includes('tham chiếu') || lower.includes('pass by value') || lower.includes('swap')) {
            return {
                success: true,
                reply: lessonContext + `### Phân biệt Tham trị vs Tham chiếu:\n* **Truyền tham trị (\`void f(int x)\`):** Tạo ra bản sao (copy). Mọi thay đổi trong hàm **KHÔNG** ảnh hưởng biến gốc.\n* **Truyền tham chiếu (\`void f(int &x)\` - có dấu \`&\`):** Truyền chính bí danh ô nhớ. Thay đổi trong hàm sẽ **trực tiếp thay đổi biến gốc**!\n\n\`\`\`cpp\nvoid hoanVi(int &a, int &b) { // Bắt buộc có dấu &\n    int temp = a;\n    a = b;\n    b = temp;\n}\n\`\`\``
            };
        }

        if (lower.includes('oop') || lower.includes('hướng đối tượng') || lower.includes('class') || lower.includes('kế thừa') || lower.includes('đa hình')) {
            return {
                success: true,
                reply: lessonContext + `### 4 Trụ Cột Cốt Lõi Của OOP Trong C++:\n1. **Đóng gói (Encapsulation):** Gom thuộc tính và phương thức vào Class, dùng \`private\` giấu dữ liệu và mở \`getter/setter\` trong \`public\`.\n2. **Kế thừa (Inheritance):** \`class SinhVien : public Nguoi { ... };\`\n3. **Đa hình (Polymorphism):** Dùng phương thức ảo \`virtual\` và \`override\` để các class con có hành vi riêng.\n4. **Trừu tượng (Abstraction):** Ẩn chi tiết phức tạp bằng lớp trừu tượng (Pure virtual \`= 0\`).`
            };
        }

        if (lower.includes('bài tập') || lower.includes('luyện tập') || lower.includes('thực hành')) {
            return {
                success: true,
                reply: lessonContext + `### 🎯 Bài tập thử thách: "Tìm kiếm và Sắp xếp Mảng C++"\n**Yêu cầu:**\n1. Nhập mảng gồm $N$ số nguyên ($N \\le 100$).\n2. Viết hàm tìm số chẵn lớn nhất trong mảng.\n3. Sắp xếp các số lẻ tăng dần và số chẵn giảm dần.\n\n\`\`\`cpp\n#include <iostream>\nusing namespace std;\n\nvoid nhapMang(int a[], int n);\nint timChanMax(const int a[], int n);\n\nint main() {\n    // Hãy hoàn thiện code tại đây!\n    return 0;\n}\n\`\`\`\n*Bạn hãy code thử và gửi tôi xem lỗi nhé!*`
            };
        }

        return {
            success: true,
            reply: lessonContext + `Chào bạn! Tôi là **C++ AI Mentor**.\n\nTôi có thể hỗ trợ bạn:\n* 🔍 **Giải thích code:** Dán code C++ vào đây để tôi phân tích.\n* 🐛 **Gỡ lỗi (Debug):** Gửi thông báo lỗi Compiler hoặc runtime.\n* 💡 **Giải đáp trắc nghiệm:** Giải thích vì sao một đáp án đúng/sai.\n* 📚 **Tư vấn kiến thức:** Con trỏ, đệ quy, mảng 2D, struct, class OOP.\n* 📝 **Tạo bài tập:** Thiết kế bài tập theo đúng trình độ hiện tại của bạn.\n\n*Bạn đang băn khoăn phần nào trong C++?*`
        };
    }
};

window.ClientAPI = ClientAPI;
