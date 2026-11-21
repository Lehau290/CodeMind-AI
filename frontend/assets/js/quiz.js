// assets/js/quiz.js - Interactive Quiz Runner, Auto-Grading & AI Evaluation Renderer

const QuizView = {
    currentQuiz: null,
    questions: [],
    userAnswers: {}, // { [question_id]: "A" | "B" | "C" | "D" }
    currentQuestionIndex: 0,
    timerInterval: null,
    timeLimitSeconds: 0,
    timeRemainingSeconds: 0,
    timeSpentSeconds: 0,

    async render(container, lessonId) {
        clearInterval(this.timerInterval);
        this.userAnswers = {};
        this.currentQuestionIndex = 0;

        container.innerHTML = `
            <div class="container py-5 text-center">
                <i class="fas fa-spinner fa-spin fa-2x text-primary"></i>
                <p class="text-secondary mt-2">Đang tải câu hỏi bài kiểm tra...</p>
            </div>
        `;

        const res = await Utils.fetchAPI(`api/quiz.php?lesson_id=${lessonId}`);
        if (!res.success) {
            container.innerHTML = `
                <div class="container py-5 text-center">
                    <h2 class="text-danger mb-3">Không thể tải bài kiểm tra!</h2>
                    <p class="text-secondary mb-4">${res.message}</p>
                    <button class="btn btn-primary" onclick="AppRouter.navigate('#lesson?id=${lessonId}')">Quay lại bài học</button>
                </div>
            `;
            return;
        }

        this.currentQuiz = res.quiz;
        this.questions = res.questions || [];
        this.timeLimitSeconds = (this.currentQuiz.time_limit_mins || 15) * 60;
        this.timeRemainingSeconds = this.timeLimitSeconds;
        this.timeSpentSeconds = 0;

        // Render Quiz Screen
        this.renderQuizUI(container);
        this.startTimer();
    },

    renderQuizUI(container) {
        const q = this.questions[this.currentQuestionIndex];
        const total = this.questions.length;
        const currentNum = this.currentQuestionIndex + 1;
        const qid = q.id;
        const chosen = this.userAnswers[qid] || null;

        container.innerHTML = `
            <div class="container py-4">
                <!-- QUIZ HEADER -->
                <div class="card p-4 mb-4" style="background: var(--bg-tertiary);">
                    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                        <div>
                            <span class="badge badge-purple mb-1">Kiểm tra trắc nghiệm • Bài ${this.currentQuiz.lesson_id}</span>
                            <h2 style="font-size: 1.45rem; font-weight: 800;">${this.currentQuiz.title}</h2>
                            <span class="text-muted" style="font-size: 0.85rem;">Đạt từ ${this.currentQuiz.pass_score}/10 điểm để được công nhận hoàn thành bài học</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 1.25rem;">
                            <!-- TIMER -->
                            <div id="quiz-timer" style="display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; border-radius: var(--radius-md); background: var(--bg-primary); border: 1.5px solid var(--border-accent); font-family: var(--font-mono); font-size: 1.15rem; font-weight: 700; color: var(--primary);">
                                <i class="fas fa-stopwatch"></i>
                                <span id="timer-display">${Utils.formatTime(this.timeRemainingSeconds)}</span>
                            </div>
                            <!-- SUBMIT BUTTON -->
                            <button class="btn btn-primary btn-glow" onclick="QuizView.confirmSubmit()">
                                <i class="fas fa-paper-plane"></i> Nộp bài
                            </button>
                        </div>
                    </div>
                </div>

                <!-- MAIN QUIZ LAYOUT: QUESTION (LEFT) + NAVIGATOR (RIGHT) -->
                <div style="display: grid; grid-template-columns: 1fr 300px; gap: 1.5rem; align-items: start;">
                    <!-- QUESTION CARD -->
                    <div class="card p-4 anim-fade-in" id="current-question-card">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border-color);">
                            <span class="badge badge-primary" style="font-size: 0.85rem;">Câu hỏi ${currentNum} / ${total}</span>
                            <span class="text-muted" style="font-size: 0.813rem;">Chuyên đề: <strong>${q.concept_tag}</strong></span>
                        </div>

                        <h3 style="font-size: 1.15rem; font-weight: 600; line-height: 1.6; margin-bottom: 1.25rem;">
                            ${Utils.escapeHtml(q.question_text)}
                        </h3>

                        ${q.code_snippet ? `
                            <div class="code-box mb-4">
                                <div class="code-header">
                                    <span><i class="fas fa-terminal"></i> Đoạn mã C++</span>
                                    <button class="copy-btn" onclick="Utils.copyCode(\`${Utils.escapeHtml(q.code_snippet)}\`, this)">
                                        <i class="fas fa-copy"></i> Copy
                                    </button>
                                </div>
                                <pre class="code-content"><code>${Utils.escapeHtml(q.code_snippet)}</code></pre>
                            </div>
                        ` : ''}

                        <!-- 4 OPTIONS: A, B, C, D -->
                        <div class="quiz-options-list" style="margin-top: 1.5rem;">
                            ${['A', 'B', 'C', 'D'].map(opt => {
                                const text = q[`option_${opt.toLowerCase()}`];
                                const isSelected = (chosen === opt);
                                return `
                                    <div class="quiz-option-card ${isSelected ? 'selected' : ''}" onclick="QuizView.selectAnswer(${qid}, '${opt}')">
                                        <div class="option-letter">${opt}</div>
                                        <div style="font-size: 0.95rem; line-height: 1.5; padding-top: 3px;">${Utils.escapeHtml(text)}</div>
                                    </div>
                                `;
                            }).join('')}
                        </div>

                        <!-- NAVIGATION BUTTONS -->
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 2rem; padding-top: 1.25rem; border-top: 1px solid var(--border-color);">
                            <button class="btn btn-secondary" onclick="QuizView.prevQuestion()" ${this.currentQuestionIndex === 0 ? 'disabled style="opacity: 0.4;"' : ''}>
                                <i class="fas fa-arrow-left"></i> Câu trước
                            </button>
                            <span class="text-muted" style="font-size: 0.85rem;">
                                Đã trả lời: <strong class="text-primary">${Object.keys(this.userAnswers).length}</strong> / ${total} câu
                            </span>
                            <button class="btn btn-secondary" onclick="QuizView.nextQuestion()" ${this.currentQuestionIndex === total - 1 ? 'disabled style="opacity: 0.4;"' : ''}>
                                Câu sau <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>

                    <!-- SIDEBAR: QUESTION MATRIX NAVIGATOR -->
                    <div class="card p-4">
                        <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                            <i class="fas fa-grip"></i> Bảng tiến trình câu hỏi
                        </h4>
                        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.5rem; margin-bottom: 1.5rem;">
                            ${this.questions.map((ques, idx) => {
                                const isAnswered = Boolean(this.userAnswers[ques.id]);
                                const isCurrent = (idx === this.currentQuestionIndex);
                                let bubbleClass = 'q-bubble';
                                if (isCurrent) bubbleClass += ' active';
                                else if (isAnswered) bubbleClass += ' answered';

                                return `
                                    <div class="${bubbleClass}" onclick="QuizView.jumpToQuestion(${idx})">
                                        ${idx + 1}
                                    </div>
                                `;
                            }).join('')}
                        </div>

                        <div style="font-size: 0.8rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 0.4rem; padding-top: 1rem; border-top: 1px solid var(--border-color);">
                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                <span style="width: 12px; height: 12px; border-radius: 3px; background: var(--primary);"></span>
                                <span>Đang làm hiện tại</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                <span style="width: 12px; height: 12px; border-radius: 3px; background: var(--primary-light); border: 1px solid var(--primary);"></span>
                                <span>Đã chọn đáp án</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                <span style="width: 12px; height: 12px; border-radius: 3px; background: var(--bg-tertiary); border: 1px solid var(--border-color);"></span>
                                <span>Chưa chọn đáp án</span>
                            </div>
                        </div>

                        <div style="margin-top: 1.5rem;">
                            <button class="btn btn-primary btn-glow" style="width: 100%;" onclick="QuizView.confirmSubmit()">
                                <i class="fas fa-check-circle"></i> Nộp bài kiểm tra
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    selectAnswer(qid, option) {
        this.userAnswers[qid] = option;
        // Refresh question view
        const container = document.getElementById('app-main');
        this.renderQuizUI(container);
    },

    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.renderQuizUI(document.getElementById('app-main'));
        }
    },

    prevQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.renderQuizUI(document.getElementById('app-main'));
        }
    },

    jumpToQuestion(index) {
        this.currentQuestionIndex = index;
        this.renderQuizUI(document.getElementById('app-main'));
    },

    startTimer() {
        this.timerInterval = setInterval(() => {
            this.timeSpentSeconds++;
            this.timeRemainingSeconds--;

            const timerEl = document.getElementById('timer-display');
            if (timerEl) {
                timerEl.textContent = Utils.formatTime(this.timeRemainingSeconds);
                // Warning color under 2 minutes
                if (this.timeRemainingSeconds <= 120) {
                    const box = document.getElementById('quiz-timer');
                    if (box) {
                        box.style.borderColor = 'var(--danger)';
                        box.style.color = 'var(--danger)';
                    }
                }
            }

            if (this.timeRemainingSeconds <= 0) {
                clearInterval(this.timerInterval);
                Toast.warning('Đã hết thời gian làm bài! Hệ thống tự động nộp bài.');
                this.submitQuiz();
            }
        }, 1000);
    },

    confirmSubmit() {
        const answeredCount = Object.keys(this.userAnswers).length;
        const total = this.questions.length;
        const unanswered = total - answeredCount;

        const modal = document.createElement('div');
        modal.className = 'modal-overlay active';
        modal.innerHTML = `
            <div class="modal-content anim-slide-up" style="max-width: 440px;">
                <div class="modal-header">
                    <h3 style="font-size: 1.15rem; font-weight: 700;"><i class="fas fa-circle-question text-primary"></i> Xác nhận nộp bài</h3>
                    <button class="modal-close-btn" onclick="this.closest('.modal-overlay').remove()"><i class="fas fa-times"></i></button>
                </div>
                <div class="modal-body py-4 text-center">
                    <div style="font-size: 1rem; line-height: 1.6; margin-bottom: 1.25rem;">
                        Bạn đã trả lời <strong class="text-primary">${answeredCount}/${total}</strong> câu hỏi.
                        ${unanswered > 0 ? `<br><span class="text-warning"><i class="fas fa-triangle-exclamation"></i> Vẫn còn <strong>${unanswered}</strong> câu chưa chọn đáp án!</span>` : '<br><span class="text-success"><i class="fas fa-check-circle"></i> Bạn đã hoàn thành tất cả các câu hỏi!</span>'}
                    </div>
                    <p class="text-secondary" style="font-size: 0.875rem;">
                        Sau khi nộp, hệ thống sẽ tự động chấm điểm và kích hoạt <strong>trí tuệ nhân tạo (AI)</strong> để phân tích chuyên sâu năng lực của bạn.
                    </p>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" onclick="this.closest('.modal-overlay').remove()">Tiếp tục làm bài</button>
                    <button class="btn btn-primary" onclick="this.closest('.modal-overlay').remove(); QuizView.submitQuiz();">
                        <i class="fas fa-paper-plane"></i> Đồng ý nộp bài
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    },

    async submitQuiz() {
        clearInterval(this.timerInterval);

        const container = document.getElementById('app-main');
        container.innerHTML = `
            <div class="container py-5 text-center">
                <div class="anim-pulse" style="width: 80px; height: 80px; border-radius: 50%; background: var(--primary-light); color: var(--primary); display: flex; align-items: center; justify-content: center; font-size: 2.2rem; margin: 0 auto 1.5rem;">
                    <i class="fas fa-brain"></i>
                </div>
                <h2 style="font-size: 1.8rem; font-weight: 800; margin-bottom: 0.5rem;">Đang chấm điểm &amp; AI phân tích...</h2>
                <p class="text-secondary">Trí tuệ nhân tạo đang mổ xẻ kết quả làm bài để đưa ra lộ trình cá nhân hóa cho bạn.</p>
            </div>
        `;

        const res = await Utils.fetchAPI('api/quiz.php?action=submit', {
            method: 'POST',
            body: {
                lesson_id: this.currentQuiz.lesson_id,
                time_spent_seconds: this.timeSpentSeconds,
                answers: this.userAnswers
            }
        });

        if (!res.success) {
            Toast.error(res.message);
            container.innerHTML = `<div class="container py-5 text-center text-danger">${res.message}</div>`;
            return;
        }

        // Render Graded Result + Comprehensive AI Evaluation Card
        this.renderResultUI(container, res.result);
    },

    renderResultUI(container, res) {
        const score = res.score;
        const passed = res.passed;
        const ai = res.ai_evaluation || {};
        const graded = res.graded_questions || [];

        // Tier color & badge
        let scoreColor = 'var(--success)';
        if (score < 5.0) scoreColor = 'var(--danger)';
        else if (score < 7.0) scoreColor = 'var(--warning)';
        else if (score < 9.0) scoreColor = 'var(--primary)';

        container.innerHTML = `
            <div class="container py-5">
                <!-- TOP RESULT HERO CARD -->
                <div class="card p-5 mb-5 text-center anim-slide-up" style="border-top: 6px solid ${scoreColor}; background: radial-gradient(circle at 50% 0%, ${passed ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)'} 0%, rgba(18,24,38,0.95) 100%);">
                    <span class="badge ${passed ? 'badge-success' : 'badge-danger'}" style="font-size: 0.9rem; padding: 0.4rem 1rem; margin-bottom: 1rem;">
                        ${passed ? '<i class="fas fa-check-circle"></i> ĐÃ ĐẠT TIÊU CHUẨN ĐẦU RA' : '<i class="fas fa-xmark-circle"></i> CHƯA ĐẠT CHUẨN (CẦN ÔN TẬP)'}
                    </span>
                    
                    <div style="font-size: 4.5rem; font-weight: 900; color: ${scoreColor}; line-height: 1; margin-bottom: 0.5rem;">
                        ${score} <span style="font-size: 2rem; color: var(--text-muted);">/ 10</span>
                    </div>

                    <p style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-bottom: 1.5rem;">
                        ${ai.tier_title || (passed ? 'Hoàn thành bài kiểm tra' : 'Cần ôn tập lại')}
                    </p>

                    <!-- QUICK STATS ROW -->
                    <div style="display: flex; justify-content: center; gap: 2.5rem; flex-wrap: wrap; padding-top: 1.5rem; border-top: 1px solid var(--border-color); max-width: 700px; margin: 0 auto 1.5rem;">
                        <div>
                            <div class="text-muted" style="font-size: 0.813rem;">Tổng số câu</div>
                            <div style="font-size: 1.35rem; font-weight: 700;">${res.total_questions}</div>
                        </div>
                        <div>
                            <div class="text-muted" style="font-size: 0.813rem;">Số câu đúng</div>
                            <div style="font-size: 1.35rem; font-weight: 700; color: var(--success);">${res.correct_answers}</div>
                        </div>
                        <div>
                            <div class="text-muted" style="font-size: 0.813rem;">Số câu sai</div>
                            <div style="font-size: 1.35rem; font-weight: 700; color: var(--danger);">${res.wrong_answers}</div>
                        </div>
                        <div>
                            <div class="text-muted" style="font-size: 0.813rem;">Tỷ lệ chính xác</div>
                            <div style="font-size: 1.35rem; font-weight: 700;">${res.percentage}%</div>
                        </div>
                        <div>
                            <div class="text-muted" style="font-size: 0.813rem;">Thời gian làm</div>
                            <div style="font-size: 1.35rem; font-weight: 700;">${Utils.formatTime(res.time_spent_seconds)}</div>
                        </div>
                    </div>

                    <!-- ACTION BUTTONS -->
                    <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
                        <button class="btn btn-primary" onclick="AppRouter.navigate('#quiz?lesson_id=${res.lesson_id}')">
                            <i class="fas fa-rotate-right"></i> Làm lại bài kiểm tra
                        </button>
                        ${passed ? `
                            <button class="btn btn-success" onclick="LessonView.handleMarkComplete(${res.lesson_id}, true, false)">
                                <i class="fas fa-check-double"></i> Đánh dấu hoàn thành bài học
                            </button>
                        ` : ''}
                        <button class="btn btn-secondary" onclick="AppRouter.navigate('#lesson?id=${res.lesson_id}')">
                            <i class="fas fa-book"></i> Xem lại lý thuyết bài học
                        </button>
                    </div>
                </div>

                <!-- 🌟 AI COMPREHENSIVE EVALUATION CARD 🌟 -->
                <div class="card p-5 mb-5" style="border: 2px solid var(--border-accent); background: linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(18,24,38,0.9) 100%);">
                    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
                        <div style="width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, #6366f1, #a855f7); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">
                            <i class="fas fa-brain"></i>
                        </div>
                        <div>
                            <h2 style="font-size: 1.45rem; font-weight: 800; letter-spacing: -0.01em;">Báo Cáo Phân Tích Đánh Giá Từ Trí Tuệ Nhân Tạo (AI)</h2>
                            <p class="text-muted" style="font-size: 0.85rem;">Được sinh tự động dựa trên phân tích thực tế từng câu hỏi bạn đã làm</p>
                        </div>
                    </div>

                    <!-- OVERVIEW AI FEEDBACK -->
                    <div class="card p-4 mb-4" style="background: var(--bg-tertiary); border-left: 4px solid var(--primary);">
                        <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-primary);"><i class="fas fa-comment-dots text-primary"></i> Nhận xét tổng quan của AI:</h4>
                        <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-primary);">
                            ${ai.overview_feedback || ''}
                        </p>
                        <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.75rem; font-style: italic;">
                            <i class="fas fa-gauge-high"></i> ${ai.speed_assessment || ''}
                        </div>
                    </div>

                    <!-- STRONG & WEAK TOPICS BREAKDOWN -->
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
                        <!-- STRONG TOPICS -->
                        <div class="card p-4" style="border-left: 4px solid var(--success); background: rgba(16,185,129,0.04);">
                            <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--success); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                                <i class="fas fa-circle-check"></i> Kiến thức bạn đã nắm vững (${(ai.strong_topics || []).length})
                            </h4>
                            ${(ai.strong_topics && ai.strong_topics.length > 0) ? `
                                <div style="display: flex; flex-direction: column; gap: 0.6rem;">
                                    ${ai.strong_topics.map(s => `
                                        <div style="padding: 0.6rem 0.85rem; border-radius: var(--radius-sm); background: var(--bg-primary); border: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
                                            <span style="font-weight: 600; font-size: 0.875rem;">${s.name}</span>
                                            <span class="badge badge-success">${s.accuracy}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            ` : '<p class="text-muted" style="font-size: 0.875rem;">Chưa có chuyên đề đạt trên 75% độ chính xác.</p>'}
                        </div>

                        <!-- WEAK TOPICS -->
                        <div class="card p-4" style="border-left: 4px solid var(--danger); background: rgba(239,68,68,0.04);">
                            <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--danger); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                                <i class="fas fa-triangle-exclamation"></i> Kiến thức cần cải thiện (${(ai.weak_topics || []).length})
                            </h4>
                            ${(ai.weak_topics && ai.weak_topics.length > 0) ? `
                                <div style="display: flex; flex-direction: column; gap: 0.6rem;">
                                    ${ai.weak_topics.map(w => `
                                        <div style="padding: 0.6rem 0.85rem; border-radius: var(--radius-sm); background: var(--bg-primary); border: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
                                            <span style="font-weight: 600; font-size: 0.875rem;">${w.name}</span>
                                            <span class="badge badge-danger">${w.accuracy}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            ` : '<p class="text-success" style="font-size: 0.875rem;"><i class="fas fa-check"></i> Tuyệt vời! Bạn không có chuyên đề nào dưới 75%.</p>'}
                        </div>
                    </div>

                    <!-- TAILORED PRACTICE & ROADMAP -->
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                        <!-- ACTIONABLE ADVICE & PRACTICE -->
                        <div class="card p-4">
                            <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                                <i class="fas fa-dumbbell text-primary"></i> Bài tập luyện tập AI đề xuất
                            </h4>
                            <div style="display: flex; flex-direction: column; gap: 0.85rem;">
                                ${(ai.tailored_practice || []).map(tp => `
                                    <div style="padding: 0.85rem; border-radius: var(--radius-md); background: var(--bg-tertiary); border: 1px solid var(--border-color);">
                                        <div style="font-weight: 700; font-size: 0.9rem; color: var(--primary); margin-bottom: 0.35rem;">${tp.title}</div>
                                        <p style="font-size: 0.85rem; line-height: 1.5; color: var(--text-secondary); margin-bottom: 0.35rem;">${tp.description}</p>
                                        <div style="font-size: 0.78rem; color: var(--text-muted); font-style: italic;">💡 ${tp.hint}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <!-- NEXT ROADMAP -->
                        <div class="card p-4">
                            <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                                <i class="fas fa-route text-secondary"></i> Lộ trình hành động tiếp theo
                            </h4>
                            <div style="display: flex; flex-direction: column; gap: 0.85rem;">
                                ${(ai.roadmap || []).map(r => `
                                    <div style="display: flex; align-items: flex-start; gap: 0.75rem; padding: 0.75rem; border-radius: var(--radius-md); background: var(--bg-tertiary);">
                                        <div style="width: 26px; height: 26px; border-radius: 50%; background: ${r.status === 'done' ? 'var(--success)' : (r.status === 'current' ? 'var(--primary)' : 'var(--bg-card)')}; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 700; flex-shrink: 0;">
                                            ${r.order}
                                        </div>
                                        <div>
                                            <div style="font-weight: 700; font-size: 0.875rem;">${r.action}</div>
                                            <div class="text-secondary" style="font-size: 0.813rem; line-height: 1.4;">${r.description}</div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- QUESTION BY QUESTION REVIEW (ĐÁP ÁN VÀ GIẢI THÍCH CHI TIẾT) -->
                <div class="mb-5">
                    <h3 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.6rem;">
                        <i class="fas fa-list-check text-primary"></i> Chi tiết bài làm &amp; Giải thích từng câu
                    </h3>

                    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                        ${graded.map((g, idx) => {
                            const isCorrect = g.is_correct;
                            return `
                                <div class="card p-4" style="border-left: 4px solid ${isCorrect ? 'var(--success)' : 'var(--danger)'};">
                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem;">
                                        <span class="badge ${isCorrect ? 'badge-success' : 'badge-danger'}">
                                            ${isCorrect ? '<i class="fas fa-check"></i> Câu ' + (idx + 1) + ': Chính xác' : '<i class="fas fa-xmark"></i> Câu ' + (idx + 1) + ': Chưa chính xác'}
                                        </span>
                                        <span class="text-muted" style="font-size: 0.813rem;">Chuyên đề: <strong>${g.concept_tag}</strong></span>
                                    </div>

                                    <h4 style="font-size: 1.05rem; font-weight: 600; line-height: 1.5; margin-bottom: 1rem;">
                                        ${Utils.escapeHtml(g.question_text)}
                                    </h4>

                                    ${g.code_snippet ? `
                                        <div class="code-box mb-3">
                                            <pre class="code-content" style="margin: 0; padding: 1rem; font-size: 0.813rem;"><code>${Utils.escapeHtml(g.code_snippet)}</code></pre>
                                        </div>
                                    ` : ''}

                                    <!-- OPTIONS GRID -->
                                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.65rem; margin-bottom: 1rem;">
                                        ${['A', 'B', 'C', 'D'].map(opt => {
                                            const text = g[`option_${opt.toLowerCase()}`];
                                            const isSelected = (g.user_choice === opt);
                                            const isRightOpt = (g.correct_option === opt);
                                            
                                            let optStyle = 'background: var(--bg-tertiary); border: 1px solid var(--border-color);';
                                            if (isRightOpt) {
                                                optStyle = 'background: var(--success-light); border: 1.5px solid var(--success); color: var(--success); font-weight: 600;';
                                            } else if (isSelected && !isRightOpt) {
                                                optStyle = 'background: var(--danger-light); border: 1.5px solid var(--danger); color: var(--danger); font-weight: 600;';
                                            }

                                            return `
                                                <div style="padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); font-size: 0.875rem; ${optStyle}">
                                                    <strong>${opt}.</strong> ${Utils.escapeHtml(text)}
                                                    ${isRightOpt ? ' <i class="fas fa-check text-success"></i> (Đáp án đúng)' : ''}
                                                    ${isSelected && !isRightOpt ? ' <i class="fas fa-xmark text-danger"></i> (Bạn đã chọn)' : ''}
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>

                                    <!-- EXPLANATION -->
                                    <div style="padding: 0.85rem 1rem; border-radius: var(--radius-md); background: var(--bg-primary); border: 1px solid var(--border-color); font-size: 0.875rem; line-height: 1.6;">
                                        <strong class="text-primary"><i class="fas fa-lightbulb"></i> Giải thích sư phạm:</strong>
                                        <span class="text-secondary" style="margin-left: 0.35rem;">${g.explanation}</span>
                                    </div>

                                    <div style="margin-top: 0.75rem; text-align: right;">
                                        <button class="btn btn-sm btn-outline" onclick="AITutor.askAboutQuestion(\`${Utils.escapeHtml(g.question_text)}\`, '${g.correct_option}', '${g.user_choice}', \`${Utils.escapeHtml(g.explanation)}\`)">
                                            <i class="fas fa-robot text-primary"></i> Nhờ AI Mentor giải thích sâu hơn
                                        </button>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
        `;
    }
};

window.QuizView = QuizView;
