// assets/js/app.js - Main Application Coordinator, Router & Authentication System

const AppState = {
    user: null,
    currentRoute: ''
};

const AppRouter = {
    routes: {
        '': () => HomeView.render(document.getElementById('app-main')),
        'home': () => HomeView.render(document.getElementById('app-main')),
        'lessons': () => LessonView.renderCatalog(document.getElementById('app-main')),
        'lesson': (params) => {
            const id = parseInt(params.get('id') || '1');
            LessonView.renderDetail(document.getElementById('app-main'), id);
            if (window.AITutor) window.AITutor.currentLessonId = id;
        },
        'quiz': (params) => {
            const lessonId = parseInt(params.get('lesson_id') || '1');
            QuizView.render(document.getElementById('app-main'), lessonId);
            if (window.AITutor) window.AITutor.currentLessonId = lessonId;
        },
        'profile': () => ProfileView.render(document.getElementById('app-main'))
    },

    init() {
        window.addEventListener('hashchange', () => this.handleRoute());
        this.handleRoute();
    },

    navigate(hash) {
        window.location.hash = hash;
    },

    handleRoute() {
        const rawHash = window.location.hash.slice(1) || 'home';
        const [path, queryString] = rawHash.split('?');
        const params = new URLSearchParams(queryString || '');

        AppState.currentRoute = path;
        this.updateNavLinks(path);

        const handler = this.routes[path];
        if (handler) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            handler(params);
        } else {
            HomeView.render(document.getElementById('app-main'));
        }
    },

    updateNavLinks(path) {
        document.querySelectorAll('.nav-link').forEach(link => {
            const href = link.getAttribute('href') || '';
            const linkPath = href.replace('#', '').split('?')[0];
            if (linkPath === path || (linkPath === 'home' && path === '')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    },

    updateNavUser() {
        const container = document.getElementById('nav-user-container');
        if (!container) return;

        if (AppState.user) {
            const u = AppState.user;
            container.innerHTML = `
                <div class="user-menu-pill" onclick="AppRouter.navigate('#profile')">
                    <div class="user-avatar-sm">
                        ${u.fullname ? u.fullname.charAt(0).toUpperCase() : 'U'}
                    </div>
                    <span class="user-name-label">${Utils.escapeHtml(u.fullname)}</span>
                    <button class="btn btn-sm btn-outline" style="border: none; padding: 0.2rem 0.4rem; color: var(--text-muted);" title="Đăng xuất" onclick="event.stopPropagation(); AppAuth.logout();">
                        <i class="fas fa-right-from-bracket"></i>
                    </button>
                </div>
            `;
        } else {
            container.innerHTML = `
                <button class="btn btn-sm btn-outline" onclick="AppAuth.showLoginModal()">
                    <i class="fas fa-right-to-bracket"></i> Đăng nhập
                </button>
                <button class="btn btn-sm btn-primary" onclick="AppAuth.showRegisterModal()">
                    Đăng ký
                </button>
            `;
        }
    }
};

const AppAuth = {
    async checkSession() {
        const res = await Utils.fetchAPI('api/auth.php?action=me');
        if (res.success && res.user) {
            AppState.user = res.user;
        } else {
            AppState.user = null;
        }
        AppRouter.updateNavUser();
    },

    showLoginModal() {
        const existing = document.getElementById('auth-modal');
        if (existing) existing.remove();

        const modal = document.createElement('div');
        modal.id = 'auth-modal';
        modal.className = 'modal-overlay active';
        modal.innerHTML = `
            <div class="modal-content anim-slide-up" style="max-width: 440px;">
                <div class="modal-header">
                    <h3 style="font-size: 1.2rem; font-weight: 700;"><i class="fas fa-right-to-bracket text-primary"></i> Đăng nhập tài khoản</h3>
                    <button class="modal-close-btn" onclick="this.closest('.modal-overlay').remove()"><i class="fas fa-times"></i></button>
                </div>
                <div class="modal-body">
                    <!-- ONE-CLICK DEMO TEST ACCOUNTS -->
                    <div style="background: rgba(99,102,241,0.08); border: 1px dashed var(--border-accent); border-radius: var(--radius-md); padding: 0.85rem; margin-bottom: 1.25rem;">
                        <span style="font-size: 0.78rem; font-weight: 700; color: var(--primary); text-transform: uppercase; display: block; margin-bottom: 0.4rem;">
                            🚀 Đăng nhập nhanh tài khoản mẫu (1-Click Demo):
                        </span>
                        <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
                            <button class="btn btn-sm btn-secondary" style="font-size: 0.75rem; padding: 0.25rem 0.5rem;" onclick="AppAuth.fillDemo('student', '123456')">
                                <i class="fas fa-user-graduate"></i> SV CNTT
                            </button>
                            <button class="btn btn-sm btn-secondary" style="font-size: 0.75rem; padding: 0.25rem 0.5rem;" onclick="AppAuth.fillDemo('teacher', '123456')">
                                <i class="fas fa-chalkboard-user"></i> Giảng viên SP
                            </button>
                            <button class="btn btn-sm btn-secondary" style="font-size: 0.75rem; padding: 0.25rem 0.5rem;" onclick="AppAuth.fillDemo('admin', 'admin123')">
                                <i class="fas fa-shield"></i> Admin
                            </button>
                        </div>
                    </div>

                    <form id="login-form" onsubmit="event.preventDefault(); AppAuth.handleLogin(this);">
                        <div class="form-group">
                            <label class="form-label">Tên đăng nhập hoặc Email:</label>
                            <input type="text" id="login-identifier" class="form-control" required placeholder="student@university.edu.vn hoặc student">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Mật khẩu:</label>
                            <input type="password" id="login-password" class="form-control" required placeholder="••••••">
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; font-size: 0.85rem;">
                            <label style="display: flex; align-items: center; gap: 0.4rem; cursor: pointer;">
                                <input type="checkbox" id="login-remember" checked> Ghi nhớ đăng nhập
                            </label>
                            <a href="javascript:void(0)" onclick="Toast.info('Vui lòng liên hệ quản trị viên qua email admin@cppedu.vn để cấp lại mật khẩu.')" style="color: var(--primary);">Quên mật khẩu?</a>
                        </div>
                        <button type="submit" class="btn btn-primary" style="width: 100%;">
                            <i class="fas fa-arrow-right-to-bracket"></i> Đăng nhập ngay
                        </button>
                    </form>
                </div>
                <div class="modal-footer" style="justify-content: center; font-size: 0.875rem;">
                    Chưa có tài khoản? <a href="javascript:void(0)" onclick="AppAuth.showRegisterModal()" style="color: var(--primary); font-weight: 600; margin-left: 0.35rem;">Đăng ký miễn phí</a>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    },

    fillDemo(user, pass) {
        const idEl = document.getElementById('login-identifier');
        const passEl = document.getElementById('login-password');
        if (idEl && passEl) {
            idEl.value = user;
            passEl.value = pass;
        }
    },

    showRegisterModal() {
        const existing = document.getElementById('auth-modal');
        if (existing) existing.remove();

        const modal = document.createElement('div');
        modal.id = 'auth-modal';
        modal.className = 'modal-overlay active';
        modal.innerHTML = `
            <div class="modal-content anim-slide-up" style="max-width: 440px;">
                <div class="modal-header">
                    <h3 style="font-size: 1.2rem; font-weight: 700;"><i class="fas fa-user-plus text-primary"></i> Đăng ký tài khoản học tập</h3>
                    <button class="modal-close-btn" onclick="this.closest('.modal-overlay').remove()"><i class="fas fa-times"></i></button>
                </div>
                <div class="modal-body">
                    <form id="register-form" onsubmit="event.preventDefault(); AppAuth.handleRegister(this);">
                        <div class="form-group">
                            <label class="form-label">Họ và tên sinh viên:</label>
                            <input type="text" id="reg-fullname" class="form-control" required placeholder="Ví dụ: Nguyễn Văn An">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Tên đăng nhập (username):</label>
                            <input type="text" id="reg-username" class="form-control" required placeholder="nguyenvanan_k72">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Địa chỉ Email:</label>
                            <input type="email" id="reg-email" class="form-control" required placeholder="an.nguyen@daihoc.edu.vn">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Mật khẩu (ít nhất 6 ký tự):</label>
                            <input type="password" id="reg-password" class="form-control" required placeholder="••••••••">
                        </div>
                        <button type="submit" class="btn btn-primary" style="width: 100%;">
                            <i class="fas fa-user-check"></i> Tạo tài khoản ngay
                        </button>
                    </form>
                </div>
                <div class="modal-footer" style="justify-content: center; font-size: 0.875rem;">
                    Đã có tài khoản? <a href="javascript:void(0)" onclick="AppAuth.showLoginModal()" style="color: var(--primary); font-weight: 600; margin-left: 0.35rem;">Đăng nhập</a>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    },

    async handleLogin(form) {
        const login = document.getElementById('login-identifier').value.trim();
        const password = document.getElementById('login-password').value;
        const remember = document.getElementById('login-remember').checked;

        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang đăng nhập...';

        const res = await Utils.fetchAPI('api/auth.php?action=login', {
            method: 'POST',
            body: { login, password, remember }
        });

        if (res.success) {
            Toast.success('Đăng nhập thành công! Chào mừng bạn trở lại.');
            AppState.user = res.user;
            AppRouter.updateNavUser();
            document.getElementById('auth-modal')?.remove();
            AppRouter.handleRoute(); // re-render current view with logged-in user state
        } else {
            Toast.error(res.message);
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-arrow-right-to-bracket"></i> Đăng nhập ngay';
        }
    },

    async handleRegister(form) {
        const fullname = document.getElementById('reg-fullname').value.trim();
        const username = document.getElementById('reg-username').value.trim();
        const email = document.getElementById('reg-email').value.trim();
        const password = document.getElementById('reg-password').value;

        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang tạo tài khoản...';

        const res = await Utils.fetchAPI('api/auth.php?action=register', {
            method: 'POST',
            body: { fullname, username, email, password }
        });

        if (res.success) {
            Toast.success('Đăng ký tài khoản thành công!');
            AppState.user = res.user;
            AppRouter.updateNavUser();
            document.getElementById('auth-modal')?.remove();
            AppRouter.handleRoute();
        } else {
            Toast.error(res.message);
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-user-check"></i> Tạo tài khoản ngay';
        }
    },

    async logout() {
        if (!confirm('Bạn có chắc chắn muốn đăng xuất không?')) return;
        const res = await Utils.fetchAPI('api/auth.php?action=logout');
        if (res.success) {
            AppState.user = null;
            AppRouter.updateNavUser();
            Toast.info('Đã đăng xuất thành công.');
            AppRouter.navigate('#home');
        }
    }
};

// Application Bootstrap
document.addEventListener('DOMContentLoaded', async () => {
    ThemeManager.init();
    await AppAuth.checkSession();
    AppRouter.init();
    AITutor.init();

    // Mobile nav toggle
    const toggle = document.getElementById('mobile-toggle');
    const links = document.getElementById('nav-links');
    if (toggle && links) {
        toggle.addEventListener('click', () => {
            links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
            if (links.style.display === 'flex') {
                links.style.flexDirection = 'column';
                links.style.position = 'absolute';
                links.style.top = '70px';
                links.style.left = '0';
                links.style.width = '100%';
                links.style.background = 'var(--bg-secondary)';
                links.style.padding = '1rem 1.5rem';
                links.style.boxShadow = 'var(--shadow-lg)';
            }
        });
    }
});

window.AppState = AppState;
window.AppRouter = AppRouter;
window.AppAuth = AppAuth;
