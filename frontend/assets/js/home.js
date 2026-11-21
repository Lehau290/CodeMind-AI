// assets/js/home.js - Home Page Controller with Instant Course Access & Modern Visuals

const HomeView = {
    allLessons: [],

    async render(container) {
        // Fetch platform statistics & full lessons list
        const [statsRes, lessonsRes] = await Promise.all([
            Utils.fetchAPI('api/stats.php'),
            Utils.fetchAPI('api/lessons.php')
        ]);

        const stats = statsRes.success ? statsRes.stats : {
            total_lessons: 15,
            total_students: 350,
            total_quizzes_taken: 1250,
            total_completions: 820,
            satisfaction_rate: '99.4%'
        };

        this.allLessons = lessonsRes.success ? lessonsRes.lessons : [];
        const user = AppState.user;

        // Fetch user progress overview if logged in
        let userProgressHtml = '';
        if (user) {
            const profileRes = await Utils.fetchAPI('api/profile.php');
            if (profileRes.success && profileRes.stats) {
                const pStats = profileRes.stats;
                const cur = pStats.current_lesson || { id: 1, title: 'Giới thiệu về ngôn ngữ lập trình C++' };
                userProgressHtml = `
                    <div class="user-progress-banner anim-slide-up">
                        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                            <div>
                                <span class="badge badge-primary mb-2"><i class="fas fa-user-graduate"></i> Tiến độ học tập của bạn</span>
                                <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.35rem;">Đang học: Bài ${cur.id} - ${cur.title}</h3>
                                <p class="text-secondary" style="font-size: 0.9rem;">
                                    Đã hoàn thành <strong class="text-primary">${pStats.completed_lessons}/${pStats.total_lessons}</strong> bài học (${pStats.progress_percentage}%)
                                </p>
                            </div>
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div style="width: 140px;">
                                    <div class="progress-bar-container">
                                        <div class="progress-bar-fill" style="width: ${pStats.progress_percentage}%;"></div>
                                    </div>
                                    <div style="text-align: right; font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">
                                        ${pStats.progress_percentage}% Hoàn thành
                                    </div>
                                </div>
                                <button class="btn btn-primary" onclick="AppRouter.navigate('#lesson?id=${cur.id}')">
                                    <i class="fas fa-play"></i> Tiếp tục học Bài ${cur.id}
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }
        }

        container.innerHTML = `
            <div class="container py-4">
                <!-- HERO SECTION -->
                <div class="hero-grid">
                    <div class="anim-slide-up">
                        <div style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.4rem 0.95rem; border-radius: var(--radius-full); background: var(--primary-light); border: 1px solid var(--border-accent); margin-bottom: 1.5rem;">
                            <span style="width: 8px; height: 8px; border-radius: 50%; background: #22c55e; display: inline-block; box-shadow: 0 0 10px #22c55e;"></span>
                            <span style="font-size: 0.813rem; font-weight: 600; color: var(--primary);">Nền tảng C++ Chuẩn Đại Học • Kèm Cặp Bởi AI</span>
                        </div>
                        <h1 style="font-size: 3.2rem; font-weight: 800; line-height: 1.15; letter-spacing: -0.03em; margin-bottom: 1.25rem;">
                            Chinh Phục Lập Trình <br>
                            <span class="gradient-text">C++ Toàn Diện</span> Cùng AI
                        </h1>
                        <p class="text-secondary" style="font-size: 1.125rem; line-height: 1.7; margin-bottom: 2rem; max-width: 580px;">
                            Khóa học thiết kế chuyên sâu dành cho <strong>sinh viên năm nhất ngành Công nghệ thông tin</strong> và <strong>Sư phạm Tin học</strong>. Học lý thuyết bài bản, thực hành tương tác, làm bài test trắc nghiệm và nhận phân tích đánh giá năng lực từ AI thông minh.
                        </p>
                        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                            <button class="btn btn-primary btn-lg btn-glow" onclick="AppRouter.navigate('#lesson?id=1')" style="font-weight: 700;">
                                <i class="fas fa-rocket"></i> Vào học Bài 1 ngay
                            </button>
                            <button class="btn btn-secondary btn-lg" onclick="document.getElementById('all-lessons-section').scrollIntoView({behavior:'smooth'})">
                                <i class="fas fa-book-bookmark"></i> Xem trọn bộ 15 bài học
                            </button>
                        </div>
                    </div>

                    <!-- HERO INTERACTIVE CODE PREVIEW -->
                    <div class="card hero-terminal-card anim-fade-in" style="padding: 0;">
                        <div class="code-header">
                            <div class="code-header-left">
                                <div class="code-dots">
                                    <span class="code-dot dot-red"></span>
                                    <span class="code-dot dot-yellow"></span>
                                    <span class="code-dot dot-green"></span>
                                </div>
                                <span style="font-weight: 600; margin-left: 0.5rem; font-family: var(--font-mono);"><i class="fas fa-terminal"></i> main.cpp</span>
                            </div>
                            <span class="badge badge-primary">C++20 ISO</span>
                        </div>
                        <div class="code-content" style="padding: 1.25rem; font-size: 0.85rem;">
<pre style="margin: 0; color: #cbd5e1;"><code><span style="color: #f43f5e; font-weight: 600;">#include</span> <span style="color: #34d399;">&lt;iostream&gt;</span>
<span style="color: #f43f5e; font-weight: 600;">#include</span> <span style="color: #34d399;">&lt;string&gt;</span>
<span style="color: #f43f5e; font-weight: 600;">using namespace</span> std;

<span style="color: #fbbf24; font-weight: 600;">int</span> <span style="color: #38bdf8; font-weight: 600;">main</span>() {
    string chaoMung = <span style="color: #34d399;">"Xin chao Sinh vien CNTT &amp; Su pham Tin!"</span>;
    cout &lt;&lt; chaoMung &lt;&lt; endl;
    cout &lt;&lt; <span style="color: #34d399;">"Bat dau hanh trinh tro thanh Lap trinh vien C++ dinh cao!"</span> &lt;&lt; endl;
    <span style="color: #a78bfa; font-weight: 600;">return</span> <span style="color: #fb923c;">0</span>;
}</code></pre>
                        </div>
                        <div class="terminal-footer" style="padding: 0.85rem 1.25rem; display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 0.8rem;"><i class="fas fa-check-circle text-success"></i> Biên dịch C++20 sẵn sàng</span>
                            <button class="btn btn-sm btn-success" id="hero-run-btn" onclick="HomeView.simulateRunCode(this)">
                                <i class="fas fa-play"></i> Chạy thử nghiệm ngay
                            </button>
                        </div>
                        <div id="hero-run-output" style="display: none; padding: 0.85rem 1.25rem; background: #040810; font-family: var(--font-mono); font-size: 0.8rem; color: #4ade80; border-top: 1px dashed rgba(255,255,255,0.1);">
                            &gt; Xin chao Sinh vien CNTT &amp; Su pham Tin!<br>
                            &gt; Bat dau hanh trinh tro thanh Lap trinh vien C++ dinh cao!<br>
                            <span style="color: #8b949e;">&gt; [Process exited with code 0 in 0.002s]</span>
                        </div>
                    </div>
                </div>

                <!-- USER PROGRESS SECTION (IF LOGGED IN) -->
                ${userProgressHtml}

                <!-- PLATFORM STATISTICS COUNTERS -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 5rem;">
                    <div class="card" style="padding: 1.75rem; text-align: center;">
                        <div style="font-size: 2.5rem; font-weight: 800; color: var(--primary); line-height: 1;">15</div>
                        <div style="font-size: 0.9rem; font-weight: 600; margin-top: 0.5rem;">Bài học C++ Chuẩn</div>
                        <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem;">Từ cơ bản đến hướng đối tượng</div>
                    </div>
                    <div class="card" style="padding: 1.75rem; text-align: center;">
                        <div style="font-size: 2.5rem; font-weight: 800; color: var(--secondary); line-height: 1;">150+</div>
                        <div style="font-size: 0.9rem; font-weight: 600; margin-top: 0.5rem;">Câu hỏi trắc nghiệm</div>
                        <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem;">Kèm giải thích cặn kẽ từng câu</div>
                    </div>
                    <div class="card" style="padding: 1.75rem; text-align: center;">
                        <div style="font-size: 2.5rem; font-weight: 800; color: var(--success); line-height: 1;">${stats.total_students}+</div>
                        <div style="font-size: 0.9rem; font-weight: 600; margin-top: 0.5rem;">Sinh viên tham gia</div>
                        <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem;">CNTT &amp; Sư phạm Tin toàn quốc</div>
                    </div>
                    <div class="card" style="padding: 1.75rem; text-align: center;">
                        <div style="font-size: 2.5rem; font-weight: 800; color: var(--warning); line-height: 1;">${stats.satisfaction_rate}</div>
                        <div style="font-size: 0.9rem; font-weight: 600; margin-top: 0.5rem;">Hài lòng &amp; Hiểu bài</div>
                        <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem;">AI đánh giá &amp; kèm cặp 24/7</div>
                    </div>
                </div>

                <!-- DIRECT 15-LESSONS SHOWCASE (HỌC NGAY TẠI TRANG CHỦ) -->
                <div id="all-lessons-section" class="mb-5" style="scroll-margin-top: 90px;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem;">
                        <div>
                            <span class="badge badge-primary mb-2"><i class="fas fa-layer-group"></i> Chương Trình 15 Bài Học C++</span>
                            <h2 style="font-size: 2.2rem; font-weight: 800; letter-spacing: -0.02em;">Chọn Bài Học Để Vào Học Ngay</h2>
                            <p class="text-secondary" style="margin-top: 0.35rem;">
                                Toàn bộ 15 bài học đã sẵn sàng kèm lý thuyết chi tiết, code mẫu C++, lỗi thường gặp và bài kiểm tra trắc nghiệm AI.
                            </p>
                        </div>
                        <button class="btn btn-outline" onclick="AppRouter.navigate('#lessons')">
                            Xem lộ trình dạng chương <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>

                    <!-- CHAPTER FILTER TABS -->
                    <div style="display: flex; gap: 0.5rem; overflow-x: auto; padding-bottom: 1rem; margin-bottom: 1.75rem;">
                        <button class="btn btn-sm btn-primary filter-tab active" onclick="HomeView.filterByChapter('all', this)">
                            Tất cả 15 bài
                        </button>
                        <button class="btn btn-sm btn-secondary filter-tab" onclick="HomeView.filterByChapter(1, this)">
                            Chương 1: Cơ bản (Bài 1-4)
                        </button>
                        <button class="btn btn-sm btn-secondary filter-tab" onclick="HomeView.filterByChapter(2, this)">
                            Chương 2: Rẽ nhánh &amp; Vòng lặp (Bài 5-7)
                        </button>
                        <button class="btn btn-sm btn-secondary filter-tab" onclick="HomeView.filterByChapter(3, this)">
                            Chương 3: Mảng &amp; Chuỗi (Bài 8, 9, 13)
                        </button>
                        <button class="btn btn-sm btn-secondary filter-tab" onclick="HomeView.filterByChapter(4, this)">
                            Chương 4: Hàm &amp; Con trỏ (Bài 10-12)
                        </button>
                        <button class="btn btn-sm btn-secondary filter-tab" onclick="HomeView.filterByChapter(5, this)">
                            Chương 5: Struct &amp; OOP (Bài 14-15)
                        </button>
                    </div>

                    <!-- 15 LESSONS GRID -->
                    <div id="home-lessons-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 1.5rem;">
                        ${this.renderLessonCards(this.allLessons)}
                    </div>
                </div>

                <!-- GOALS & BENEFITS SECTION -->
                <div class="mb-5">
                    <div style="text-align: center; max-width: 700px; margin: 0 auto 3rem;">
                        <span class="badge badge-purple mb-2"><i class="fas fa-compass"></i> Mục Tiêu &amp; Lợi Ích</span>
                        <h2 style="font-size: 2.25rem; font-weight: 800; letter-spacing: -0.02em;">
                            Tại sao nền tảng này là bệ phóng hoàn hảo cho bạn?
                        </h2>
                        <p class="text-secondary" style="margin-top: 0.75rem; font-size: 1rem;">
                            Được xây dựng dựa trên giáo trình chuẩn các trường đại học hàng đầu và phương pháp sư phạm Tin học hiện đại.
                        </p>
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.75rem;">
                        <div class="card p-4">
                            <div style="width: 48px; height: 48px; border-radius: var(--radius-md); background: var(--primary-light); color: var(--primary); display: flex; align-items: center; justify-content: center; font-size: 1.4rem; margin-bottom: 1.25rem;">
                                <i class="fas fa-graduation-cap"></i>
                            </div>
                            <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.5rem;">Nền tảng đại học vững chắc</h3>
                            <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6;">
                                Nắm trọn vẹn tư duy lập trình cấu trúc, cách thức máy tính cấp phát bộ nhớ RAM, con trỏ, mảng 2 chiều và các tính chất lập trình hướng đối tượng OOP.
                            </p>
                        </div>

                        <div class="card p-4">
                            <div style="width: 48px; height: 48px; border-radius: var(--radius-md); background: var(--secondary-light); color: var(--secondary); display: flex; align-items: center; justify-content: center; font-size: 1.4rem; margin-bottom: 1.25rem;">
                                <i class="fas fa-robot"></i>
                            </div>
                            <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.5rem;">AI Đánh giá cá nhân hóa</h3>
                            <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6;">
                                Không chỉ chấm điểm đơn thuần, AI phân tích sâu từng câu bạn làm sai, chỉ ra chính xác lỗ hổng kiến thức và đề xuất bài tập khắc phục tức thì.
                            </p>
                        </div>

                        <div class="card p-4">
                            <div style="width: 48px; height: 48px; border-radius: var(--radius-md); background: var(--success-light); color: var(--success); display: flex; align-items: center; justify-content: center; font-size: 1.4rem; margin-bottom: 1.25rem;">
                                <i class="fas fa-chalkboard-teacher"></i>
                            </div>
                            <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.5rem;">Chuẩn phương pháp Sư phạm Tin</h3>
                            <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6;">
                                Sinh viên Sư phạm Tin học học được phương pháp giảng giải trực quan, ví dụ thực tế và cách hướng dẫn học sinh phổ thông tránh các bẫy cú pháp kinh điển.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- CALL TO ACTION BANNER -->
                <div class="card p-5 text-center anim-fade-in" style="background: radial-gradient(circle at 50% 50%, rgba(99,102,241,0.2) 0%, rgba(18,24,38,0.95) 100%); border-color: var(--border-accent);">
                    <h2 style="font-size: 2.25rem; font-weight: 800; margin-bottom: 1rem;">Sẵn sàng bứt phá điểm số C++ kỳ này?</h2>
                    <p class="text-secondary" style="font-size: 1.05rem; max-width: 600px; margin: 0 auto 2rem;">
                        Tham gia ngay hôm nay để trải nghiệm hệ thống học tập thông minh, vượt qua nỗi sợ con trỏ và chinh phục điểm A môn Lập trình C++!
                    </p>
                    <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
                        <button class="btn btn-primary btn-lg btn-glow" onclick="AppRouter.navigate('#lesson?id=1')">
                            <i class="fas fa-rocket"></i> Bắt đầu Bài 1 ngay - Miễn phí
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    renderLessonCards(lessons) {
        if (!lessons || lessons.length === 0) {
            return `<div class="p-5 text-center text-muted" style="grid-column: 1 / -1;">Đang tải danh sách bài học...</div>`;
        }

        return lessons.map(l => {
            const isDone = l.is_completed;
            const quiz = l.quiz_info || {};
            let statusBadge = `<span class="badge badge-secondary"><i class="fas fa-circle-dot"></i> Sẵn sàng học</span>`;
            if (isDone) {
                statusBadge = `<span class="badge badge-success"><i class="fas fa-check-circle"></i> Đã hoàn thành</span>`;
            } else if (quiz.has_passed) {
                statusBadge = `<span class="badge badge-warning"><i class="fas fa-award"></i> Đã đạt Test (${quiz.best_score}đ)</span>`;
            }

            return `
                <div class="card p-4 lesson-card" data-chapter="${l.chapter}" style="display: flex; flex-direction: column; justify-content: space-between; border-left: ${isDone ? '4px solid var(--success)' : '1px solid var(--border-color)'}; transition: var(--transition);">
                    <div>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem;">
                            <span style="font-size: 0.813rem; font-weight: 700; color: var(--primary);"><i class="fas fa-bookmark"></i> BÀI ${l.id}</span>
                            ${statusBadge}
                        </div>
                        <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.5rem; line-height: 1.4;">${l.title}</h3>
                        <p class="text-secondary" style="font-size: 0.875rem; line-height: 1.5; margin-bottom: 1.25rem;">
                            ${l.description}
                        </p>
                    </div>
                    <div>
                        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-color); padding-top: 1rem; margin-bottom: 0.75rem; font-size: 0.813rem;">
                            <span class="text-muted"><i class="fas fa-clock"></i> ${l.duration_mins} phút</span>
                            <span class="text-muted"><i class="fas fa-clipboard-check"></i> 10 câu trắc nghiệm</span>
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
                            <button class="btn btn-sm btn-primary" onclick="AppRouter.navigate('#lesson?id=${l.id}')">
                                <i class="fas fa-book-open"></i> Vào học bài
                            </button>
                            <button class="btn btn-sm btn-secondary" onclick="AppRouter.navigate('#quiz?lesson_id=${l.id}')" title="Làm bài kiểm tra trắc nghiệm">
                                <i class="fas fa-pen-to-square"></i> Làm Test
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    },

    filterByChapter(chapter, btn) {
        document.querySelectorAll('.filter-tab').forEach(b => {
            b.classList.remove('btn-primary', 'active');
            b.classList.add('btn-secondary');
        });
        btn.classList.add('btn-primary', 'active');
        btn.classList.remove('btn-secondary');

        const cards = document.querySelectorAll('#home-lessons-grid .lesson-card');
        cards.forEach(card => {
            const ch = card.getAttribute('data-chapter');
            if (chapter === 'all' || ch == chapter) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    },

    simulateRunCode(btn) {
        const out = document.getElementById('hero-run-output');
        if (!out) return;
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang chạy C++20...';
        setTimeout(() => {
            out.style.display = 'block';
            btn.innerHTML = '<i class="fas fa-check text-success"></i> Đã hoàn thành (0s)';
            btn.disabled = false;
        }, 500);
    }
};

window.HomeView = HomeView;
