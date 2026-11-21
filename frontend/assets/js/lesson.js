// assets/js/lesson.js - Lessons Catalog and Single Lesson Detail Controller

const LessonView = {
    // 1. RENDER CATALOG (All 15 Lessons)
    async renderCatalog(container) {
        container.innerHTML = `
            <div class="container py-5 text-center">
                <i class="fas fa-spinner fa-spin fa-2x text-primary"></i>
                <p class="text-secondary mt-2">Đang tải danh mục bài học...</p>
            </div>
        `;

        const res = await Utils.fetchAPI('api/lessons.php');
        if (!res.success) {
            container.innerHTML = `<div class="container py-5 text-center text-danger">${res.message}</div>`;
            return;
        }

        const lessons = res.lessons || [];

        // Group by chapter
        const chapters = {};
        lessons.forEach(l => {
            if (!chapters[l.chapter]) {
                chapters[l.chapter] = {
                    title: l.chapter_title,
                    lessons: []
                };
            }
            chapters[l.chapter].lessons.push(l);
        });

        container.innerHTML = `
            <div class="container py-5">
                <!-- CATALOG HEADER -->
                <div style="margin-bottom: 2.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1rem;">
                        <div>
                            <span class="badge badge-primary mb-2"><i class="fas fa-graduation-cap"></i> Khung Chương Trình Chuẩn</span>
                            <h1 style="font-size: 2.4rem; font-weight: 800; letter-spacing: -0.02em;">Lộ Trình 15 Bài Học C++</h1>
                            <p class="text-secondary" style="font-size: 1rem; margin-top: 0.35rem;">
                                Hệ thống kiến thức từ nhập môn cơ bản đến tư duy Hướng đối tượng nâng cao, tích hợp bài kiểm tra và AI đánh giá sau mỗi bài.
                            </p>
                        </div>
                        <div style="min-width: 280px;">
                            <input type="text" id="lesson-search-input" class="form-control" placeholder="🔍 Tìm kiếm bài học (ví dụ: con trỏ, vòng lặp...)" oninput="LessonView.filterLessons(this.value)">
                        </div>
                    </div>
                </div>

                <!-- CHAPTERS AND LESSONS LIST -->
                <div id="chapters-list">
                    ${Object.keys(chapters).map(chId => {
                        const ch = chapters[chId];
                        return `
                            <div class="chapter-block mb-5" data-chapter="${chId}">
                                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border-color);">
                                    <span class="badge badge-purple" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">Chương ${chId}</span>
                                    <h2 style="font-size: 1.35rem; font-weight: 700;">${ch.title}</h2>
                                </div>
                                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 1.5rem;">
                                    ${ch.lessons.map(l => {
                                        const isDone = l.is_completed;
                                        const quiz = l.quiz_info || {};
                                        let statusBadge = `<span class="badge badge-secondary"><i class="fas fa-circle-dot"></i> Chưa học</span>`;
                                        if (isDone) {
                                            statusBadge = `<span class="badge badge-success"><i class="fas fa-check-circle"></i> Đã hoàn thành</span>`;
                                        } else if (quiz.has_passed) {
                                            statusBadge = `<span class="badge badge-warning"><i class="fas fa-award"></i> Đã pass Test (${quiz.best_score}đ)</span>`;
                                        }

                                        return `
                                            <div class="card p-4 lesson-card" data-title="${l.title.toLowerCase()}" data-desc="${l.description.toLowerCase()}" style="display: flex; flex-direction: column; justify-content: space-between; border-left: ${isDone ? '4px solid var(--success)' : '1px solid var(--border-color)'};">
                                                <div>
                                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem;">
                                                        <span style="font-size: 0.813rem; font-weight: 700; color: var(--primary);">BÀI ${l.id}</span>
                                                        ${statusBadge}
                                                    </div>
                                                    <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.5rem; line-height: 1.4;">${l.title}</h3>
                                                    <p class="text-secondary" style="font-size: 0.875rem; line-height: 1.5; margin-bottom: 1.25rem;">
                                                        ${l.description}
                                                    </p>
                                                </div>
                                                <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-color); padding-top: 1rem; font-size: 0.813rem;">
                                                    <span class="text-muted"><i class="fas fa-clock"></i> ${l.duration_mins} phút • 10 câu test</span>
                                                    <button class="btn btn-sm ${isDone ? 'btn-secondary' : 'btn-primary'}" onclick="AppRouter.navigate('#lesson?id=${l.id}')">
                                                        ${isDone ? 'Xem lại bài' : 'Vào học ngay'} <i class="fas fa-arrow-right"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        `;
                                    }).join('')}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    },

    filterLessons(query) {
        const q = query.trim().toLowerCase();
        const cards = document.querySelectorAll('.lesson-card');
        cards.forEach(card => {
            const title = card.getAttribute('data-title');
            const desc = card.getAttribute('data-desc');
            if (!q || title.includes(q) || desc.includes(q)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    },

    // 2. RENDER SINGLE LESSON DETAIL
    async renderDetail(container, lessonId) {
        container.innerHTML = `
            <div class="container py-5 text-center">
                <i class="fas fa-spinner fa-spin fa-2x text-primary"></i>
                <p class="text-secondary mt-2">Đang tải nội dung bài học...</p>
            </div>
        `;

        const res = await Utils.fetchAPI(`api/lessons.php?id=${lessonId}`);
        if (!res.success) {
            container.innerHTML = `
                <div class="container py-5 text-center">
                    <h2 class="text-danger mb-3">Không tìm thấy bài học!</h2>
                    <p class="text-secondary mb-4">${res.message}</p>
                    <button class="btn btn-primary" onclick="AppRouter.navigate('#lessons')">Quay lại danh mục</button>
                </div>
            `;
            return;
        }

        const l = res.lesson;

        // Theory markdown rendering helper
        const formattedTheory = this.renderMarkdownContent(l.theory_content);

        container.innerHTML = `
            <div class="container py-4">
                <!-- BREADCRUMB & NAV -->
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 0.75rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem;">
                        <a href="#lessons" class="text-secondary hover-primary"><i class="fas fa-book"></i> Danh mục bài học</a>
                        <span class="text-muted">/</span>
                        <span class="text-muted">${l.chapter_title}</span>
                        <span class="text-muted">/</span>
                        <span style="font-weight: 600; color: var(--text-primary);">Bài ${l.id}</span>
                    </div>
                    <div style="display: flex; gap: 0.5rem;">
                        ${l.prev_lesson ? `
                            <button class="btn btn-sm btn-secondary" onclick="AppRouter.navigate('#lesson?id=${l.prev_lesson.id}')" title="${l.prev_lesson.title}">
                                <i class="fas fa-chevron-left"></i> Bài trước
                            </button>
                        ` : ''}
                        ${l.next_lesson ? `
                            <button class="btn btn-sm btn-secondary" onclick="AppRouter.navigate('#lesson?id=${l.next_lesson.id}')" title="${l.next_lesson.title}">
                                Bài sau <i class="fas fa-chevron-right"></i>
                            </button>
                        ` : ''}
                    </div>
                </div>

                <!-- LESSON HEADER CARD -->
                <div class="card p-4 mb-4" style="border-left: 4px solid var(--primary);">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
                        <div>
                            <span class="badge badge-purple mb-2">Bài ${l.id} • ${l.chapter_title}</span>
                            <h1 style="font-size: 2.1rem; font-weight: 800; line-height: 1.25; margin-bottom: 0.5rem;">${l.title}</h1>
                            <p class="text-secondary" style="font-size: 1rem; max-width: 800px;">${l.description}</p>
                        </div>
                        <div style="text-align: right; display: flex; flex-direction: column; align-items: flex-end; gap: 0.5rem;">
                            <span class="badge ${l.is_completed ? 'badge-success' : (l.has_passed_quiz ? 'badge-warning' : 'badge-secondary')}" style="font-size: 0.85rem; padding: 0.4rem 0.85rem;">
                                ${l.is_completed ? '<i class="fas fa-check-double"></i> Đã hoàn thành' : (l.has_passed_quiz ? `<i class="fas fa-award"></i> Đã đạt Test (${l.best_score}đ)` : '<i class="fas fa-hourglass-start"></i> Chưa hoàn thành')}
                            </span>
                            <span class="text-muted" style="font-size: 0.8rem;"><i class="fas fa-clock"></i> Thời lượng dự kiến: ${l.duration_mins} phút</span>
                        </div>
                    </div>
                </div>

                <!-- TABS BAR -->
                <div style="display: flex; gap: 0.75rem; border-bottom: 1px solid var(--border-color); margin-bottom: 2rem;">
                    <button class="btn btn-outline active-tab" id="tab-btn-theory" onclick="LessonView.switchTab('theory')" style="border-bottom: 3px solid var(--primary); border-radius: 0; font-weight: 700; color: var(--primary);">
                        <i class="fas fa-book-open"></i> Nội dung lý thuyết &amp; Ví dụ
                    </button>
                    <button class="btn btn-outline" id="tab-btn-quiz" onclick="AppRouter.navigate('#quiz?lesson_id=${l.id}')" style="border-bottom: 3px solid transparent; border-radius: 0;">
                        <i class="fas fa-clipboard-question"></i> Bài kiểm tra trắc nghiệm (10 câu)
                    </button>
                </div>

                <!-- TAB CONTENT: THEORY -->
                <div id="lesson-tab-theory" class="anim-fade-in">
                    <!-- OBJECTIVES -->
                    <div class="card p-4 mb-4" style="background: rgba(99, 102, 241, 0.05); border-color: rgba(99, 102, 241, 0.25);">
                        <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.85rem; color: var(--primary); display: flex; align-items: center; gap: 0.5rem;">
                            <i class="fas fa-bullseye"></i> Mục tiêu cần đạt của bài học
                        </h3>
                        <ul style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.65rem;">
                            ${(l.objectives || []).map(obj => `
                                <li style="display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.9rem;">
                                    <i class="fas fa-check text-success" style="margin-top: 4px;"></i>
                                    <span>${obj}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>

                    <!-- DETAILED THEORY CONTENT -->
                    <div class="card p-4 mb-4 theory-markdown" style="font-size: 0.95rem; line-height: 1.8;">
                        ${formattedTheory}
                    </div>

                    <!-- CODE EXAMPLES SECTION -->
                    <div class="card p-4 mb-4">
                        <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
                            <i class="fas fa-code text-primary"></i> Ví dụ minh họa bằng code C++
                        </h3>
                        ${(l.code_examples || []).map((ex, idx) => `
                            <div class="mb-4" style="border: 1px solid var(--border-color); border-radius: var(--radius-md); overflow: hidden;">
                                <div style="padding: 0.85rem 1.25rem; background: var(--bg-tertiary); font-weight: 600; display: flex; justify-content: space-between; align-items: center;">
                                    <span>Ví dụ ${idx + 1}: ${ex.title}</span>
                                    <button class="copy-btn" onclick="Utils.copyCode(\`${Utils.escapeHtml(ex.code)}\`, this)">
                                        <i class="fas fa-copy"></i> Sao chép code
                                    </button>
                                </div>
                                <div class="code-box" style="margin: 0; border: none; border-radius: 0;">
                                    <pre class="code-content" style="margin: 0;"><code>${Utils.escapeHtml(ex.code)}</code></pre>
                                </div>
                                <div style="padding: 1rem 1.25rem; background: var(--bg-card); font-size: 0.875rem; border-top: 1px solid var(--border-color);">
                                    <div style="margin-bottom: 0.5rem;"><strong>Dữ liệu vào (Input):</strong> <code>${ex.input || 'Không có'}</code></div>
                                    <div style="margin-bottom: 0.5rem;"><strong>Kết quả ra (Output):</strong> <pre style="background: var(--bg-primary); padding: 0.5rem; border-radius: 4px; margin-top: 4px; font-family: var(--font-mono);">${Utils.escapeHtml(ex.output)}</pre></div>
                                    <div style="color: var(--text-secondary); margin-top: 0.5rem;"><strong>Giải thích từng đoạn:</strong> ${ex.explanation}</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <!-- REAL-WORLD APPLICATION -->
                    <div class="card p-4 mb-4" style="border-left: 4px solid var(--secondary); background: rgba(6, 182, 212, 0.05);">
                        <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--secondary); display: flex; align-items: center; gap: 0.5rem;">
                            <i class="fas fa-earth-americas"></i> Ứng dụng thực tế trong công nghệ &amp; phần mềm
                        </h3>
                        <p class="text-secondary" style="font-size: 0.925rem; line-height: 1.7;">
                            ${l.real_world_application || 'Đang cập nhật'}
                        </p>
                    </div>

                    <!-- COMMON PITFALLS (NHỮNG LỖI THƯỜNG GẶP) -->
                    <div class="card p-4 mb-5" style="border-left: 4px solid var(--danger); background: rgba(239, 68, 68, 0.04);">
                        <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 1rem; color: var(--danger); display: flex; align-items: center; gap: 0.5rem;">
                            <i class="fas fa-triangle-exclamation"></i> Những lỗi thường gặp &amp; Cách khắc phục chuẩn
                        </h3>
                        <div style="display: flex; flex-direction: column; gap: 1rem;">
                            ${(l.common_pitfalls || []).map((p, idx) => `
                                <div style="padding: 1rem; border-radius: var(--radius-md); background: var(--bg-primary); border: 1px solid var(--border-color);">
                                    <div style="color: var(--danger); font-weight: 700; margin-bottom: 0.35rem;">
                                        <i class="fas fa-xmark"></i> Lỗi ${idx + 1}: ${p.mistake}
                                    </div>
                                    <div class="text-secondary" style="font-size: 0.875rem; margin-bottom: 0.4rem;">
                                        <strong>Nguyên nhân:</strong> ${p.reason}
                                    </div>
                                    <div style="color: var(--success); font-size: 0.875rem; font-weight: 600;">
                                        <i class="fas fa-check"></i> <strong>Cách sửa đúng:</strong> ${p.fix}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- BOTTOM ACTIONS BAR -->
                    <div class="card p-4" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; background: var(--bg-tertiary);">
                        <div>
                            <button class="btn btn-primary btn-lg" onclick="AppRouter.navigate('#quiz?lesson_id=${l.id}')">
                                <i class="fas fa-pen-to-square"></i> Làm bài kiểm tra trắc nghiệm (${l.id}/15)
                            </button>
                        </div>
                        <div style="display: flex; gap: 0.75rem;">
                            <button class="btn ${l.is_completed ? 'btn-secondary' : 'btn-success'}" id="mark-complete-btn" onclick="LessonView.handleMarkComplete(${l.id}, ${l.can_mark_complete}, ${l.is_completed})">
                                <i class="fas ${l.is_completed ? 'fa-rotate-left' : 'fa-check'}"></i>
                                ${l.is_completed ? 'Hủy đánh dấu hoàn thành' : 'Đánh dấu hoàn thành bài học'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    // Convert Markdown text to formatted HTML
    renderMarkdownContent(md) {
        if (!md) return '';
        let html = md;

        // Headings
        html = html.replace(/^### (.*$)/gim, '<h3 style="font-size: 1.25rem; font-weight: 700; margin: 1.5rem 0 0.75rem; color: var(--text-primary);">$1</h3>');
        html = html.replace(/^## (.*$)/gim, '<h2 style="font-size: 1.45rem; font-weight: 800; margin: 2rem 0 1rem; color: var(--text-primary);">$1</h2>');

        // Blockquotes
        html = html.replace(/^\> (.*$)/gim, '<blockquote style="border-left: 4px solid var(--warning); padding: 0.75rem 1rem; margin: 1rem 0; background: var(--warning-light); border-radius: 0 var(--radius-md) var(--radius-md) 0; font-size: 0.9rem;">$1</blockquote>');

        // Code blocks
        html = html.replace(/```cpp([\s\S]*?)```/gim, function(match, code) {
            return `
                <div class="code-box">
                    <div class="code-header">
                        <span style="font-weight: 600;"><i class="fas fa-file-code"></i> C++ Example</span>
                        <button class="copy-btn" onclick="Utils.copyCode(\`${Utils.escapeHtml(code.trim())}\`, this)">
                            <i class="fas fa-copy"></i> Copy
                        </button>
                    </div>
                    <pre class="code-content"><code>${Utils.escapeHtml(code.trim())}</code></pre>
                </div>
            `;
        });

        // Inline code
        html = html.replace(/`([^`]+)`/g, '<code style="background: var(--bg-tertiary); padding: 0.15rem 0.4rem; border-radius: 4px; font-family: var(--font-mono); font-size: 0.85em; color: #38bdf8;">$1</code>');

        // Bold
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

        // Lists
        html = html.replace(/^\* (.*$)/gim, '<li style="margin-left: 1.5rem; list-style-type: disc;">$1</li>');

        // Tables: simple markdown table support
        html = html.replace(/\|(.+)\|/gim, function(row) {
            if (row.includes('---')) return ''; // separator row
            const cells = row.split('|').filter(c => c.trim().length > 0);
            return '<tr style="border-bottom: 1px solid var(--border-color);">' + cells.map(c => `<td style="padding: 0.6rem 0.85rem;">${c.trim()}</td>`).join('') + '</tr>';
        });

        // Wrap rows in table if needed
        if (html.includes('<tr>')) {
            html = html.replace(/(<tr[\s\S]*?<\/tr>)+/gim, '<div style="overflow-x: auto; margin: 1.25rem 0;"><table style="width: 100%; border-collapse: collapse; font-size: 0.875rem;">$0</table></div>');
        }

        // Paragraphs
        html = html.replace(/\n\n/g, '<br><br>');

        return html;
    },

    // Handle Mark Complete with Quiz Enforcement
    async handleMarkComplete(lessonId, canMarkComplete, isAlreadyCompleted) {
        if (isAlreadyCompleted) {
            // Unmark
            const res = await Utils.fetchAPI('api/lessons.php?action=unmark_complete', {
                method: 'POST',
                body: { lesson_id: lessonId }
            });
            if (res.success) {
                Toast.info('Đã hủy trạng thái hoàn thành bài học.');
                this.renderDetail(document.getElementById('app-main'), lessonId);
            }
            return;
        }

        // REQUIREMENT: Must have passed the quiz with score >= 5.0!
        if (!canMarkComplete) {
            this.showQuizRequiredModal(lessonId);
            return;
        }

        // Send mark complete request
        const res = await Utils.fetchAPI('api/lessons.php?action=mark_complete', {
            method: 'POST',
            body: { lesson_id: lessonId }
        });

        if (res.success) {
            Toast.success('Chúc mừng bạn đã hoàn thành bài học xuất sắc!');
            this.renderDetail(document.getElementById('app-main'), lessonId);

            // If there's a next lesson, prompt the user
            if (res.next_lesson_id) {
                setTimeout(() => {
                    if (confirm(`Bạn đã hoàn thành Bài ${lessonId}! Bạn có muốn chuyển ngay sang Bài ${res.next_lesson_id} để tiếp tục lộ trình không?`)) {
                        AppRouter.navigate(`#lesson?id=${res.next_lesson_id}`);
                    }
                }, 800);
            }
        } else {
            Toast.error(res.message);
        }
    },

    // Show educational modal when user tries to mark complete without passing quiz
    showQuizRequiredModal(lessonId) {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay active';
        modal.innerHTML = `
            <div class="modal-content anim-slide-up" style="max-width: 460px;">
                <div class="modal-header" style="border-bottom-color: rgba(239, 68, 68, 0.2);">
                    <div style="display: flex; align-items: center; gap: 0.6rem; color: var(--danger);">
                        <i class="fas fa-lock fa-lg"></i>
                        <h3 style="font-size: 1.15rem; font-weight: 700;">Chưa Đủ Điều Kiện Hoàn Thành</h3>
                    </div>
                    <button class="modal-close-btn" onclick="this.closest('.modal-overlay').remove()"><i class="fas fa-times"></i></button>
                </div>
                <div class="modal-body text-center py-4">
                    <div style="width: 64px; height: 64px; border-radius: 50%; background: var(--warning-light); color: var(--warning); display: flex; align-items: center; justify-content: center; font-size: 1.8rem; margin: 0 auto 1.25rem;">
                        <i class="fas fa-clipboard-check"></i>
                    </div>
                    <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.75rem;">Yêu Cầu Làm Bài Kiểm Tra Trắc Nghiệm</h4>
                    <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.6; margin-bottom: 1.25rem;">
                        Theo quy định chuẩn đầu ra của khóa học, bạn bắt buộc phải làm bài kiểm tra trắc nghiệm 10 câu và đạt <strong>tối thiểu từ 5.0/10 điểm trở lên</strong> thì mới được hệ thống công nhận hoàn thành bài học này!
                    </p>
                    <div style="display: flex; flex-direction: column; gap: 0.6rem;">
                        <button class="btn btn-primary btn-lg" onclick="this.closest('.modal-overlay').remove(); AppRouter.navigate('#quiz?lesson_id=${lessonId}');">
                            <i class="fas fa-pen-nib"></i> Vào làm bài kiểm tra ngay
                        </button>
                        <button class="btn btn-secondary" onclick="this.closest('.modal-overlay').remove()">
                            Tiếp tục đọc lại lý thuyết
                        </button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }
};

window.LessonView = LessonView;
