// assets/js/home.js - Home Page Controller

const HomeView = {
    async render(container) {
        // Fetch platform statistics
        const statsRes = await Utils.fetchAPI('api/stats.php');
        const stats = statsRes.success ? statsRes.stats : {
            total_lessons: 15,
            total_students: 350,
            total_quizzes_taken: 1250,
            total_completions: 820,
            satisfaction_rate: '99.4%'
        };
        const featuredLessons = statsRes.featured_lessons || [];

        // Check auth user
        const user = AppState.user;

        // Fetch user progress overview if logged in
        let userProgressHtml = '';
        if (user) {
            const profileRes = await Utils.fetchAPI('api/profile.php');
            if (profileRes.success && profileRes.stats) {
                const pStats = profileRes.stats;
                const cur = pStats.current_lesson || { id: 1, title: 'Giới thiệu về ngôn ngữ lập trình C++' };
                userProgressHtml = `
                    <div class="card p-4 mb-5 anim-slide-up" style="border-left: 4px solid var(--primary); background: linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(18,24,38,0.8) 100%);">
                        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                            <div>
                                <span class="badge badge-primary mb-2"><i class="fas fa-user-graduate"></i> Tiến độ cá nhân của bạn</span>
                                <h3 style="font-size: 1.25rem; font-weight: 700;">Đang học: Bài ${cur.id} - ${cur.title}</h3>
                                <p class="text-secondary" style="font-size: 0.9rem; margin-top: 0.35rem;">
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
                                    <i class="fas fa-play"></i> Tiếp tục học
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }
        }

        container.innerHTML = `
            <div class="container py-5">
                <!-- HERO SECTION -->
                <div class="row align-items-center mb-5" style="display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 3.5rem; align-items: center;">
                    <div class="anim-slide-up">
                        <div style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.35rem 0.85rem; border-radius: var(--radius-full); background: var(--primary-light); border: 1px solid var(--border-accent); margin-bottom: 1.5rem;">
                            <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--primary); display: inline-block;"></span>
                            <span style="font-size: 0.813rem; font-weight: 600; color: var(--primary);">Nền tảng C++ Chuẩn Đại Học • Tích hợp Trợ Lý AI</span>
                        </div>
                        <h1 style="font-size: 3.1rem; font-weight: 800; line-height: 1.15; letter-spacing: -0.03em; margin-bottom: 1.25rem;">
                            Chinh Phục Lập Trình <br>
                            <span class="gradient-text">C++ Toàn Diện</span> Cùng AI
                        </h1>
                        <p class="text-secondary" style="font-size: 1.125rem; line-height: 1.7; margin-bottom: 2rem; max-width: 580px;">
                            Khóa học thiết kế chuyên sâu dành cho <strong>sinh viên năm nhất ngành Công nghệ thông tin</strong> và <strong>Sư phạm Tin học</strong>. Học lý thuyết bài bản, thực hành tương tác, làm bài test trắc nghiệm và nhận phân tích đánh giá năng lực từ AI thông minh.
                        </p>
                        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                            <button class="btn btn-primary btn-lg btn-glow" onclick="AppRouter.navigate('#lessons')">
                                <i class="fas fa-book-open"></i> Bắt đầu học ngay
                            </button>
                            <button class="btn btn-secondary btn-lg" onclick="AppRouter.navigate('#lessons')">
                                <i class="fas fa-list-check"></i> Xem danh mục 15 bài học
                            </button>
                        </div>
                    </div>

                    <!-- HERO INTERACTIVE CODE PREVIEW -->
                    <div class="card anim-fade-in" style="padding: 0; overflow: hidden; box-shadow: var(--shadow-glow); border-color: var(--border-accent);">
                        <div class="code-header">
                            <div class="code-header-left">
                                <div class="code-dots">
                                    <span class="code-dot dot-red"></span>
                                    <span class="code-dot dot-yellow"></span>
                                    <span class="code-dot dot-green"></span>
                                </div>
                                <span style="font-weight: 600; color: var(--text-primary); margin-left: 0.5rem;"><i class="fas fa-terminal"></i> main.cpp</span>
                            </div>
                            <span class="badge badge-primary">C++20 ISO</span>
                        </div>
                        <div class="code-content" style="padding: 1.25rem; font-size: 0.85rem; background: #090e17;">
<pre style="margin: 0; color: #cbd5e1;"><code><span style="color: #f43f5e;">#include</span> <span style="color: #38bdf8;">&lt;iostream&gt;</span>
<span style="color: #f43f5e;">#include</span> <span style="color: #38bdf8;">&lt;string&gt;</span>
<span style="color: #818cf8;">using namespace</span> std;

<span style="color: #fbbf24;">int</span> <span style="color: #60a5fa;">main</span>() {
    string sinhVien = <span style="color: #a7f3d0;">"K72 CNTT &amp; SP Tin"</span>;
    cout &lt;&lt; <span style="color: #a7f3d0;">"Chao mung: "</span> &lt;&lt; sinhVien &lt;&lt; endl;
    cout &lt;&lt; <span style="color: #a7f3d0;">"Khoi dau hanh trinh tro thanh Lap trinh vien!"</span> &lt;&lt; endl;
    <span style="color: #818cf8;">return</span> <span style="color: #f59e0b;">0</span>;
}</code></pre>
                        </div>
                        <div style="background: rgba(0,0,0,0.3); padding: 0.85rem 1.25rem; border-top: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 0.8rem; color: var(--text-muted);"><i class="fas fa-check-circle text-success"></i> Biên dịch thành công (0 warning)</span>
                            <button class="btn btn-sm btn-outline" id="hero-run-btn" onclick="HomeView.simulateRunCode(this)">
                                <i class="fas fa-play text-success"></i> Chạy thử nghiệm
                            </button>
                        </div>
                        <div id="hero-run-output" style="display: none; padding: 0.85rem 1.25rem; background: #040810; font-family: var(--font-mono); font-size: 0.8rem; color: #4ade80; border-top: 1px dashed var(--border-color);">
                            &gt; Chao mung: K72 CNTT &amp; SP Tin<br>
                            &gt; Khoi dau hanh trinh tro thanh Lap trinh vien!<br>
                            &gt; Program exited with code: 0 (0.002s)
                        </div>
                    </div>
                </div>

                <!-- USER PROGRESS SECTION (IF LOGGED IN) -->
                ${userProgressHtml}

                <!-- PLATFORM STATISTICS COUNTERS -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 5rem;">
                    <div class="card" style="padding: 1.75rem; text-align: center;">
                        <div style="font-size: 2.5rem; font-weight: 800; color: var(--primary); line-height: 1;">${stats.total_lessons}</div>
                        <div style="font-size: 0.9rem; font-weight: 600; margin-top: 0.5rem;">Bài học chuẩn C++</div>
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

                <!-- FEATURED LESSONS SECTION -->
                <div class="mb-5">
                    <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem;">
                        <div>
                            <span class="badge badge-primary mb-2"><i class="fas fa-layer-group"></i> Lộ Trình Nổi Bật</span>
                            <h2 style="font-size: 2rem; font-weight: 800;">Các Bài Học Trọng Tâm</h2>
                        </div>
                        <button class="btn btn-outline" onclick="AppRouter.navigate('#lessons')">
                            Xem tất cả 15 bài học <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.75rem;">
                        ${featuredLessons.map(l => `
                            <div class="card p-4" style="display: flex; flex-direction: column; justify-content: space-between;">
                                <div>
                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                                        <span class="badge badge-secondary" style="font-size: 0.75rem;">Bài ${l.id}</span>
                                        <span class="text-muted" style="font-size: 0.8rem;"><i class="fas fa-clock"></i> ${l.duration_mins} phút</span>
                                    </div>
                                    <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-primary);">${l.title}</h3>
                                    <p class="text-secondary" style="font-size: 0.875rem; line-height: 1.5; margin-bottom: 1.25rem;">
                                        ${l.description}
                                    </p>
                                </div>
                                <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-color); padding-top: 1rem;">
                                    <span style="font-size: 0.813rem; color: var(--text-muted);"><i class="fas fa-file-lines"></i> 10 câu trắc nghiệm</span>
                                    <button class="btn btn-sm btn-outline" onclick="AppRouter.navigate('#lesson?id=${l.id}')">
                                        Học bài <i class="fas fa-chevron-right"></i>
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- CALL TO ACTION BANNER -->
                <div class="card p-5 text-center anim-fade-in" style="background: radial-gradient(circle at 50% 50%, rgba(99,102,241,0.18) 0%, rgba(18,24,38,0.95) 100%); border-color: var(--border-accent);">
                    <h2 style="font-size: 2.25rem; font-weight: 800; margin-bottom: 1rem;">Sẵn sàng bứt phá điểm số C++ kỳ này?</h2>
                    <p class="text-secondary" style="font-size: 1.05rem; max-width: 600px; margin: 0 auto 2rem;">
                        Tham gia ngay hôm nay để trải nghiệm hệ thống học tập thông minh, vượt qua nỗi sợ con trỏ và chinh phục điểm A môn Lập trình C++!
                    </p>
                    <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
                        <button class="btn btn-primary btn-lg" onclick="AppRouter.navigate('#lessons')">
                            <i class="fas fa-rocket"></i> Bắt đầu ngay - Hoàn toàn miễn phí
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    simulateRunCode(btn) {
        const out = document.getElementById('hero-run-output');
        if (!out) return;
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang chạy...';
        setTimeout(() => {
            out.style.display = 'block';
            btn.innerHTML = '<i class="fas fa-check text-success"></i> Đã hoàn thành';
            btn.disabled = false;
        }, 600);
    }
};

window.HomeView = HomeView;
