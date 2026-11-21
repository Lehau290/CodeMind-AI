// assets/js/utils.js - Utilities, API client (Dual Mode: Backend + Native Client), Toasts & Theme

const Utils = {
    // API Fetcher: Routes directly to ClientAPI for pure HTML, CSS, JavaScript execution
    async fetchAPI(url, options = {}) {
        return this.routeToClientAPI(url, options);
    },

    // Bridge requests to Client-side Engine
    async routeToClientAPI(url, options = {}) {
        if (!window.ClientAPI) {
            return { success: false, message: 'Client API Engine chưa được nạp.' };
        }

        const [path, qs] = url.split('?');
        const params = new URLSearchParams(qs || '');
        const body = (typeof options.body === 'string') ? JSON.parse(options.body || '{}') : (options.body || {});

        // AUTH
        if (path.includes('auth.php')) {
            const action = params.get('action') || body.action;
            if (action === 'me') {
                const u = ClientAPI.getCurrentUser();
                return { success: Boolean(u), user: u };
            }
            if (action === 'login') {
                return ClientAPI.login(body.login, body.password, body.remember);
            }
            if (action === 'register') {
                return ClientAPI.register(body.fullname, body.username, body.email, body.password);
            }
            if (action === 'logout') {
                return ClientAPI.logout();
            }
            if (action === 'update_profile') {
                return ClientAPI.updateProfile(body.fullname, body.bio);
            }
            if (action === 'change_password') {
                return ClientAPI.changePassword(body.current_password, body.new_password);
            }
        }

        // LESSONS
        if (path.includes('lessons.php')) {
            const action = params.get('action') || body.action;
            if (action === 'mark_complete') {
                return ClientAPI.markLessonComplete(parseInt(body.lesson_id));
            }
            if (action === 'unmark_complete') {
                return ClientAPI.unmarkLessonComplete(parseInt(body.lesson_id));
            }
            if (params.get('id')) {
                return ClientAPI.getLessonDetail(parseInt(params.get('id')));
            }
            return ClientAPI.getLessons();
        }

        // QUIZ
        if (path.includes('quiz.php')) {
            const action = params.get('action') || body.action;
            if (action === 'submit') {
                return ClientAPI.submitQuiz(parseInt(body.lesson_id), body.answers || {}, parseInt(body.time_spent_seconds || 0));
            }
            if (params.get('lesson_id')) {
                return ClientAPI.getQuiz(parseInt(params.get('lesson_id')));
            }
        }

        // PROFILE
        if (path.includes('profile.php')) {
            return ClientAPI.getProfile();
        }

        // STATS
        if (path.includes('stats.php')) {
            return ClientAPI.getStats();
        }

        // AI CHAT
        if (path.includes('ai_chat.php')) {
            return ClientAPI.askChatbot(body.message || '', parseInt(body.lesson_id || 0));
        }

        return { success: false, message: 'Yêu cầu không hợp lệ trong chế độ Client.' };
    },

    // HTML sanitizer
    escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    },

    // Format Seconds to MM:SS
    formatTime(sec) {
        const m = Math.floor(sec / 60);
        const s = sec % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    },

    // C++ Syntax Highlighting Engine (Linear/VSCode style)
    highlightCpp(rawCode) {
        if (!rawCode) return '';
        let code = this.escapeHtml(rawCode);

        // Preprocessor and Directives
        code = code.replace(/(&lt;iostream&gt;|&lt;string&gt;|&lt;vector&gt;|&lt;cmath&gt;|&lt;iomanip&gt;|&lt;algorithm&gt;|&lt;cstring&gt;)/g, '<span class="tok-string">$1</span>');
        code = code.replace(/(#include|#define|#ifndef|#endif|#pragma)/g, '<span class="tok-preproc">$1</span>');
        code = code.replace(/(using\s+namespace\s+std;)/g, '<span class="tok-preproc">$1</span>');

        // String literals & char literals
        code = code.replace(/(&quot;[\s\S]*?&quot;)/g, '<span class="tok-string">$1</span>');
        code = code.replace(/(&#039;[\s\S]*?&#039;)/g, '<span class="tok-string">$1</span>');

        // Single line and multi-line comments
        code = code.replace(/(\/\/[^\n]*)/g, '<span class="tok-comment">$1</span>');
        code = code.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="tok-comment">$1</span>');

        // Types
        const types = ['int', 'float', 'double', 'char', 'bool', 'void', 'string', 'auto', 'long', 'short', 'unsigned', 'size_t', 'struct', 'class'];
        const typeRegex = new RegExp(`\\b(${types.join('|')})\\b`, 'g');
        code = code.replace(typeRegex, '<span class="tok-type">$1</span>');

        // Control Keywords
        const keywords = ['return', 'if', 'else', 'switch', 'case', 'default', 'break', 'continue', 'for', 'while', 'do', 'new', 'delete', 'nullptr', 'sizeof', 'public', 'private', 'protected', 'true', 'false', 'const'];
        const kwRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
        code = code.replace(kwRegex, '<span class="tok-kw">$1</span>');

        // Standard I/O and common identifiers
        const funcs = ['cout', 'cin', 'endl', 'main', 'vector', 'printf', 'scanf', 'std'];
        const funcRegex = new RegExp(`\\b(${funcs.join('|')})\\b`, 'g');
        code = code.replace(funcRegex, '<span class="tok-ident">$1</span>');

        // Numbers
        code = code.replace(/\b(\d+(\.\d+)?f?)\b/g, '<span class="tok-num">$1</span>');

        return code;
    },

    // One-click code copy
    async copyCode(text, btn) {
        try {
            await navigator.clipboard.writeText(text);
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> Đã sao chép!';
            btn.style.color = 'var(--success)';
            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.style.color = '';
            }, 2000);
        } catch (err) {
            Toast.error('Không thể sao chép tự động.');
        }
    }
};

// Toast Notification Manager
const Toast = {
    container: null,

    init() {
        if (!this.container) {
            this.container = document.createElement('div');
            this.container.id = 'toast-container';
            document.body.appendChild(this.container);
        }
    },

    show(message, type = 'info', duration = 3500) {
        this.init();
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;

        const iconMap = {
            success: 'fa-check-circle text-success',
            error: 'fa-exclamation-circle text-danger',
            warning: 'fa-exclamation-triangle text-warning',
            info: 'fa-info-circle text-primary'
        };

        toast.innerHTML = `
            <i class="fas ${iconMap[type] || iconMap.info}"></i>
            <span style="flex: 1;">${Utils.escapeHtml(message)}</span>
        `;

        this.container.appendChild(toast);
        requestAnimationFrame(() => toast.classList.add('show'));

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 350);
        }, duration);
    },

    success(msg) { this.show(msg, 'success'); },
    error(msg) { this.show(msg, 'error'); },
    info(msg) { this.show(msg, 'info'); },
    warning(msg) { this.show(msg, 'warning'); }
};

// Dark / Light Theme Manager
const ThemeManager = {
    init() {
        const saved = localStorage.getItem('cpp_theme') || 'dark';
        this.applyTheme(saved);

        const btn = document.getElementById('theme-toggle');
        if (btn) {
            btn.addEventListener('click', () => {
                const current = document.documentElement.getAttribute('data-theme') || 'dark';
                const next = current === 'dark' ? 'light' : 'dark';
                this.applyTheme(next);
            });
        }
    },

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('cpp_theme', theme);
        const btn = document.getElementById('theme-toggle');
        if (btn) {
            btn.innerHTML = theme === 'dark' 
                ? '<i class="fas fa-sun"></i>' 
                : '<i class="fas fa-moon"></i>';
            btn.title = theme === 'dark' ? 'Chuyển sang chế độ Sáng' : 'Chuyển sang chế độ Tối';
        }
    }
};

window.Utils = Utils;
window.Toast = Toast;
window.ThemeManager = ThemeManager;
