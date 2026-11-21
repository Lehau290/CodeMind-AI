// assets/js/profile.js - Profile Dashboard, Chart.js learning curve, Badges & History

const ProfileView = {
    chartInstance: null,

    async render(container) {
        container.innerHTML = `
            <div class="container py-5 text-center">
                <i class="fas fa-spinner fa-spin fa-2x text-primary"></i>
                <p class="text-secondary mt-2">Đang tải dữ liệu hồ sơ cá nhân...</p>
            </div>
        `;

        const res = await Utils.fetchAPI('api/profile.php');
        if (!res.success) {
            container.innerHTML = `
                <div class="container py-5 text-center">
                    <h2 class="text-danger mb-3">Vui lòng đăng nhập</h2>
                    <p class="text-secondary mb-4">${res.message}</p>
                    <button class="btn btn-primary" onclick="AppAuth.showLoginModal()">Đăng nhập ngay</button>
                </div>
            `;
            return;
        }

        const user = res.user;
        const stats = res.stats;
        const chartData = res.chart_data;
        const recentAttempts = res.recent_attempts || [];
        const badges = res.badges || [];

        const curLesson = stats.current_lesson || { id: 1, title: 'Giới thiệu về ngôn ngữ lập trình C++' };

        container.innerHTML = `
            <div class="container py-5">
                <!-- USER INFO HEADER CARD -->
                <div class="card p-5 mb-5 anim-slide-up" style="border-left: 5px solid var(--primary); background: linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(18,24,38,0.9) 100%);">
                    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 2rem;">
                        <div style="display: flex; align-items: center; gap: 1.5rem;">
                            <!-- AVATAR -->
                            <div style="width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, #6366f1, #a855f7); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 2.2rem; font-weight: 700; box-shadow: 0 8px 25px rgba(99,102,241,0.5); flex-shrink: 0;">
                                ${user.fullname ? user.fullname.charAt(0).toUpperCase() : 'U'}
                            </div>
                            <div>
                                <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.25rem;">
                                    <h1 style="font-size: 1.75rem; font-weight: 800;">${Utils.escapeHtml(user.fullname)}</h1>
                                    <span class="badge ${user.role === 'admin' ? 'badge-danger' : (user.role === 'teacher' ? 'badge-warning' : 'badge-primary')}">
                                        ${user.role === 'admin' ? 'Quản trị viên' : (user.role === 'teacher' ? 'Giảng viên' : 'Sinh viên')}
                                    </span>
                                </div>
                                <div style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
                                    <span><i class="fas fa-at"></i> ${user.username}</span> • 
                                    <span><i class="fas fa-envelope"></i> ${user.email}</span> • 
                                    <span><i class="fas fa-calendar-alt"></i> Tham gia: ${new Date(user.created_at).toLocaleDateString('vi-VN')}</span>
                                </div>
                                <p style="font-size: 0.875rem; color: var(--text-muted); font-style: italic; max-width: 600px;">
                                    "${Utils.escapeHtml(user.bio || 'Chưa có tiểu sử giới thiệu.')}"
                                </p>
                            </div>
                        </div>

                        <!-- EDIT PROFILE & PASSWORD BUTTONS -->
                        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                            <button class="btn btn-outline" onclick="ProfileView.showEditModal('${Utils.escapeHtml(user.fullname)}', '${Utils.escapeHtml(user.bio || '')}')">
                                <i class="fas fa-pen-to-square"></i> Chỉnh sửa thông tin
                            </button>
                            <button class="btn btn-secondary" onclick="ProfileView.showPasswordModal()">
                                <i class="fas fa-key"></i> Đổi mật khẩu
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 📊 LEARNING KPI STATISTICS CARDS 📊 -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem; margin-bottom: 3rem;">
                    <!-- COMPLETED LESSONS -->
                    <div class="card p-4">
                        <div class="text-muted" style="font-size: 0.813rem; margin-bottom: 0.4rem;"><i class="fas fa-check-circle text-success"></i> Bài học hoàn thành</div>
                        <div style="font-size: 2.2rem; font-weight: 800; color: var(--success); line-height: 1.1;">
                            ${stats.completed_lessons} <span style="font-size: 1.1rem; color: var(--text-muted);">/ ${stats.total_lessons}</span>
                        </div>
                        <div class="progress-bar-container mt-3">
                            <div class="progress-bar-fill" style="width: ${stats.progress_percentage}%;"></div>
                        </div>
                        <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px; text-align: right;">${stats.progress_percentage}% Khóa học</div>
                    </div>

                    <!-- QUIZZES TAKEN -->
                    <div class="card p-4">
                        <div class="text-muted" style="font-size: 0.813rem; margin-bottom: 0.4rem;"><i class="fas fa-pen-nib text-primary"></i> Bài kiểm tra đã làm</div>
                        <div style="font-size: 2.2rem; font-weight: 800; color: var(--primary); line-height: 1.1;">
                            ${stats.total_quizzes_taken}
                        </div>
                        <div style="font-size: 0.813rem; color: var(--text-secondary); margin-top: 0.75rem;">
                            Đã vượt qua: <strong class="text-success">${stats.quizzes_passed}</strong> bài (${stats.total_quizzes_taken > 0 ? Math.round((stats.quizzes_passed / stats.total_quizzes_taken) * 100) : 0}%)
                        </div>
                    </div>

                    <!-- AVERAGE SCORE -->
                    <div class="card p-4">
                        <div class="text-muted" style="font-size: 0.813rem; margin-bottom: 0.4rem;"><i class="fas fa-chart-line text-warning"></i> Điểm trung bình</div>
                        <div style="font-size: 2.2rem; font-weight: 800; color: var(--warning); line-height: 1.1;">
                            ${stats.average_score} <span style="font-size: 1rem; color: var(--text-muted);">/ 10</span>
                        </div>
                        <div style="font-size: 0.813rem; color: var(--text-secondary); margin-top: 0.75rem;">
                            Điểm cao nhất: <strong class="text-primary">${stats.highest_score}đ</strong>
                        </div>
                    </div>

                    <!-- CURRENT ACTIVE LESSON -->
                    <div class="card p-4" style="background: rgba(99,102,241,0.06);">
                        <div class="text-muted" style="font-size: 0.813rem; margin-bottom: 0.4rem;"><i class="fas fa-play text-primary"></i> Bài học đang học</div>
                        <div style="font-size: 1.1rem; font-weight: 700; line-height: 1.3; margin-top: 0.25rem;">
                            Bài ${curLesson.id}: ${curLesson.title}
                        </div>
                        <button class="btn btn-sm btn-primary mt-3" style="width: 100%;" onclick="AppRouter.navigate('#lesson?id=${curLesson.id}')">
                            Tiếp tục học <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>

                <!-- 📈 LEARNING CURVE CHART (CHART.JS) 📈 -->
                <div class="card p-5 mb-5">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 0.5rem;">
                        <div>
                            <h3 style="font-size: 1.35rem; font-weight: 800;"><i class="fas fa-chart-line text-primary"></i> Biểu Đồ Diễn Biến Kết Quả Học Tập Theo Thời Gian</h3>
                            <p class="text-muted" style="font-size: 0.85rem;">Điểm số các lần làm bài kiểm tra trắc nghiệm gần nhất</p>
                        </div>
                        <span class="badge badge-primary"><i class="fas fa-chart-simple"></i> Chart.js Realtime</span>
                    </div>

                    <div style="position: relative; height: 320px; width: 100%;">
                        ${chartData.labels && chartData.labels.length > 0 ? `
                            <canvas id="learning-curve-chart"></canvas>
                        ` : `
                            <div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--text-muted);">
                                <i class="fas fa-chart-area fa-3x mb-2" style="opacity: 0.4;"></i>
                                <p>Bạn chưa có lịch sử làm bài kiểm tra nào. Hãy hoàn thành ít nhất 1 bài quiz để hiển thị biểu đồ kết quả!</p>
                            </div>
                        `}
                    </div>
                </div>

                <!-- 🏆 BADGES & ACHIEVEMENTS SHELF 🏆 -->
                <div class="card p-5 mb-5">
                    <div style="margin-bottom: 1.5rem;">
                        <h3 style="font-size: 1.35rem; font-weight: 800;"><i class="fas fa-trophy text-warning"></i> Bộ Sưu Tập Huy Hiệu &amp; Thành Tích</h3>
                        <p class="text-muted" style="font-size: 0.85rem;">Ghi nhận các cột mốc quan trọng trong quá trình làm chủ ngôn ngữ C++</p>
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.25rem;">
                        ${badges.map(b => {
                            const isEarned = b.is_earned;
                            return `
                                <div class="card p-4 ${isEarned ? 'anim-badge-pop' : ''}" style="border-color: ${isEarned ? 'var(--primary)' : 'var(--border-color)'}; background: ${isEarned ? 'rgba(99,102,241,0.06)' : 'var(--bg-tertiary)'}; opacity: ${isEarned ? '1' : '0.55'};">
                                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.75rem;">
                                        <div style="width: 50px; height: 50px; border-radius: var(--radius-md); background: ${isEarned ? 'linear-gradient(135deg, #f59e0b, #d97706)' : 'var(--bg-primary)'}; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; box-shadow: ${isEarned ? '0 4px 15px rgba(245, 158, 11, 0.4)' : 'none'};">
                                            <i class="${b.icon}"></i>
                                        </div>
                                        <div>
                                            <h4 style="font-size: 1rem; font-weight: 700; color: ${isEarned ? 'var(--text-primary)' : 'var(--text-muted)'};">${b.name}</h4>
                                            <span class="badge ${isEarned ? 'badge-success' : 'badge-secondary'}" style="font-size: 0.7rem;">
                                                ${isEarned ? '<i class="fas fa-check"></i> ĐÃ ĐẠT ĐƯỢC' : '<i class="fas fa-lock"></i> CHƯA MỞ KHÓA'}
                                            </span>
                                        </div>
                                    </div>
                                    <p class="text-secondary" style="font-size: 0.813rem; line-height: 1.5; margin-bottom: 0.5rem;">
                                        ${b.description}
                                    </p>
                                    <div style="font-size: 0.75rem; color: var(--text-muted); border-top: 1px solid var(--border-color); padding-top: 0.5rem;">
                                        <strong>Điều kiện:</strong> ${b.criteria}
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>

                <!-- 📜 RECENT QUIZ ATTEMPTS HISTORY 📜 -->
                <div class="card p-5">
                    <div style="margin-bottom: 1.5rem;">
                        <h3 style="font-size: 1.35rem; font-weight: 800;"><i class="fas fa-history text-secondary"></i> Lịch Sử Làm Bài Kiểm Tra Gần Đây</h3>
                        <p class="text-muted" style="font-size: 0.85rem;">Chi tiết các lần làm bài, điểm số và nhận xét từ AI</p>
                    </div>

                    ${recentAttempts.length > 0 ? `
                        <div style="overflow-x: auto;">
                            <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                                <thead>
                                    <tr style="border-bottom: 2px solid var(--border-color); text-align: left; color: var(--text-muted); font-size: 0.813rem;">
                                        <th style="padding: 0.75rem 1rem;">Bài học</th>
                                        <th style="padding: 0.75rem 1rem;">Thời gian</th>
                                        <th style="padding: 0.75rem 1rem;">Số câu đúng</th>
                                        <th style="padding: 0.75rem 1rem;">Điểm số</th>
                                        <th style="padding: 0.75rem 1rem;">Trạng thái</th>
                                        <th style="padding: 0.75rem 1rem;">Đánh giá AI</th>
                                        <th style="padding: 0.75rem 1rem; text-align: right;">Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${recentAttempts.map(h => `
                                        <tr style="border-bottom: 1px solid var(--border-color);">
                                            <td style="padding: 0.85rem 1rem; font-weight: 600;">
                                                Bài ${h.lesson_id}: ${h.lesson_title}
                                            </td>
                                            <td style="padding: 0.85rem 1rem; color: var(--text-secondary); font-size: 0.813rem;">
                                                ${new Date(h.created_at).toLocaleString('vi-VN')}
                                            </td>
                                            <td style="padding: 0.85rem 1rem;">
                                                <span class="text-success">${h.correct_answers}</span> / ${h.total_questions}
                                            </td>
                                            <td style="padding: 0.85rem 1rem; font-weight: 800; font-size: 1.05rem; color: ${h.passed ? 'var(--success)' : 'var(--danger)'};">
                                                ${h.score}đ
                                            </td>
                                            <td style="padding: 0.85rem 1rem;">
                                                <span class="badge ${h.passed ? 'badge-success' : 'badge-danger'}">
                                                    ${h.passed ? 'Đạt' : 'Chưa đạt'}
                                                </span>
                                            </td>
                                            <td style="padding: 0.85rem 1rem; font-size: 0.813rem; color: var(--text-secondary); max-width: 250px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                                                ${h.ai_overview || h.ai_tier_title}
                                            </td>
                                            <td style="padding: 0.85rem 1rem; text-align: right;">
                                                <button class="btn btn-sm btn-outline" onclick="AppRouter.navigate('#quiz?lesson_id=${h.lesson_id}')">
                                                    Làm lại
                                                </button>
                                            </td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    ` : `
                        <div class="text-center py-4 text-muted">
                            <i class="fas fa-folder-open fa-2x mb-2"></i>
                            <p>Chưa có lịch sử làm bài kiểm tra nào.</p>
                        </div>
                    `}
                </div>
            </div>
        `;

        // Initialize Chart.js
        if (chartData.labels && chartData.labels.length > 0) {
            this.initChart(chartData);
        }
    },

    initChart(chartData) {
        const ctx = document.getElementById('learning-curve-chart');
        if (!ctx) return;

        if (this.chartInstance) {
            this.chartInstance.destroy();
        }

        const isDark = (document.documentElement.getAttribute('data-theme') || 'dark') === 'dark';
        const gridColor = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)';
        const textColor = isDark ? '#94a3b8' : '#475569';

        this.chartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: chartData.labels,
                datasets: [{
                    label: 'Điểm kiểm tra (Thang 10)',
                    data: chartData.scores,
                    borderColor: '#6366f1',
                    backgroundColor: 'rgba(99, 102, 241, 0.15)',
                    fill: true,
                    tension: 0.35,
                    borderWidth: 3,
                    pointBackgroundColor: '#6366f1',
                    pointBorderColor: '#fff',
                    pointRadius: 5,
                    pointHoverRadius: 7
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        min: 0,
                        max: 10,
                        grid: { color: gridColor },
                        ticks: { color: textColor, stepSize: 2 }
                    },
                    x: {
                        grid: { color: gridColor },
                        ticks: { color: textColor }
                    }
                },
                plugins: {
                    legend: {
                        labels: { color: textColor, font: { weight: '600' } }
                    },
                    tooltip: {
                        backgroundColor: isDark ? '#1e293b' : '#ffffff',
                        titleColor: isDark ? '#f8fafc' : '#0f172a',
                        bodyColor: isDark ? '#cbd5e1' : '#334155',
                        borderColor: 'rgba(99, 102, 241, 0.4)',
                        borderWidth: 1,
                        padding: 10,
                        displayColors: false
                    }
                }
            }
        });
    },

    showEditModal(currentName, currentBio) {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay active';
        modal.innerHTML = `
            <div class="modal-content anim-slide-up" style="max-width: 460px;">
                <div class="modal-header">
                    <h3 style="font-size: 1.15rem; font-weight: 700;"><i class="fas fa-user-pen text-primary"></i> Chỉnh sửa thông tin cá nhân</h3>
                    <button class="modal-close-btn" onclick="this.closest('.modal-overlay').remove()"><i class="fas fa-times"></i></button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label class="form-label">Họ và tên sinh viên / giảng viên:</label>
                        <input type="text" id="edit-fullname" class="form-control" value="${currentName}" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Tiểu sử ngắn / Mục tiêu học tập:</label>
                        <textarea id="edit-bio" class="form-control" rows="3" placeholder="Ví dụ: Sinh viên K72 ngành CNTT đang nỗ lực đạt A môn C++...">${currentBio}</textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" onclick="this.closest('.modal-overlay').remove()">Hủy bỏ</button>
                    <button class="btn btn-primary" onclick="ProfileView.saveProfile(this)">Lưu thay đổi</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    },

    async saveProfile(btn) {
        const fullname = document.getElementById('edit-fullname').value.trim();
        const bio = document.getElementById('edit-bio').value.trim();

        if (!fullname) {
            Toast.error('Họ tên không được để trống.');
            return;
        }

        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang lưu...';

        const res = await Utils.fetchAPI('api/auth.php?action=update_profile', {
            method: 'POST',
            body: { fullname, bio }
        });

        if (res.success) {
            Toast.success('Cập nhật thông tin thành công!');
            AppState.user = res.user;
            AppRouter.updateNavUser();
            btn.closest('.modal-overlay').remove();
            this.render(document.getElementById('app-main'));
        } else {
            Toast.error(res.message);
            btn.disabled = false;
            btn.innerHTML = 'Lưu thay đổi';
        }
    },

    showPasswordModal() {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay active';
        modal.innerHTML = `
            <div class="modal-content anim-slide-up" style="max-width: 440px;">
                <div class="modal-header">
                    <h3 style="font-size: 1.15rem; font-weight: 700;"><i class="fas fa-lock text-primary"></i> Đổi mật khẩu tài khoản</h3>
                    <button class="modal-close-btn" onclick="this.closest('.modal-overlay').remove()"><i class="fas fa-times"></i></button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label class="form-label">Mật khẩu hiện tại:</label>
                        <input type="password" id="current-pass" class="form-control" required placeholder="Nhập mật khẩu cũ">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Mật khẩu mới (tối thiểu 6 ký tự):</label>
                        <input type="password" id="new-pass" class="form-control" required placeholder="Nhập mật khẩu mới">
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" onclick="this.closest('.modal-overlay').remove()">Hủy bỏ</button>
                    <button class="btn btn-primary" onclick="ProfileView.savePassword(this)">Đổi mật khẩu</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    },

    async savePassword(btn) {
        const current_password = document.getElementById('current-pass').value;
        const new_password = document.getElementById('new-pass').value;

        if (!current_password || !new_password) {
            Toast.error('Vui lòng điền đủ mật khẩu cũ và mới.');
            return;
        }

        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang xử lý...';

        const res = await Utils.fetchAPI('api/auth.php?action=change_password', {
            method: 'POST',
            body: { current_password, new_password }
        });

        if (res.success) {
            Toast.success('Đổi mật khẩu thành công!');
            btn.closest('.modal-overlay').remove();
        } else {
            Toast.error(res.message);
            btn.disabled = false;
            btn.innerHTML = 'Đổi mật khẩu';
        }
    }
};

window.ProfileView = ProfileView;
