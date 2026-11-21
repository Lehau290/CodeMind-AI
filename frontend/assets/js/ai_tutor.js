// assets/js/ai_tutor.js - Floating AI Mentor Chatbot Widget Controller

const AITutor = {
    isOpen: false,
    drawerEl: null,
    messagesEl: null,
    inputEl: null,
    currentLessonId: null,

    init() {
        this.renderWidget();
    },

    renderWidget() {
        // Floating action button
        const dockBtn = document.createElement('div');
        dockBtn.className = 'ai-chat-dock-btn anim-pulse';
        dockBtn.id = 'ai-dock-btn';
        dockBtn.title = 'Trò chuyện cùng C++ AI Mentor';
        dockBtn.innerHTML = '<i class="fas fa-robot"></i>';
        dockBtn.onclick = () => this.toggle();
        document.body.appendChild(dockBtn);

        // Chat drawer
        const drawer = document.createElement('div');
        drawer.className = 'ai-chat-drawer';
        drawer.id = 'ai-chat-drawer';
        drawer.innerHTML = `
            <!-- HEADER -->
            <div class="chat-header">
                <div class="chat-header-user">
                    <span class="chat-status-dot"></span>
                    <div>
                        <div style="font-weight: 700; font-size: 0.95rem; color: var(--text-primary); display: flex; align-items: center; gap: 0.4rem;">
                            C++ AI Mentor <span class="badge badge-primary" style="font-size: 0.65rem;">PRO</span>
                        </div>
                        <div style="font-size: 0.75rem; color: var(--text-muted);">Trợ lý gia sư lập trình C++ 24/7</div>
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 0.4rem;">
                    <button class="btn btn-sm btn-outline" style="padding: 0.2rem 0.5rem;" title="Cài đặt API Key" onclick="AITutor.showConfigModal()">
                        <i class="fas fa-gear"></i>
                    </button>
                    <button class="btn btn-sm btn-outline" style="padding: 0.2rem 0.5rem;" title="Xóa lịch sử" onclick="AITutor.clearHistory()">
                        <i class="fas fa-trash-can"></i>
                    </button>
                    <button class="modal-close-btn" onclick="AITutor.toggle()"><i class="fas fa-times"></i></button>
                </div>
            </div>

            <!-- MESSAGES CONTAINER -->
            <div class="chat-messages" id="chat-messages">
                <div class="chat-bubble bubble-assistant">
                    <strong>Xin chào bạn!</strong> 👋 Tôi là <strong>C++ AI Mentor</strong>.
                    <br><br>
                    Tôi có thể giúp bạn:
                    <ul style="margin-top: 0.4rem; padding-left: 1.2rem; font-size: 0.825rem; line-height: 1.5;">
                        <li>Giải thích chi tiết các đoạn code C++ khó hiểu.</li>
                        <li>Chỉ ra nguyên nhân và cách sửa lỗi Compiler / Segmentation Fault.</li>
                        <li>Giải thích cặn kẽ vì sao một đáp án trắc nghiệm đúng hoặc sai.</li>
                        <li>Tạo bài tập thực hành theo yêu cầu của bạn.</li>
                    </ul>
                </div>
            </div>

            <!-- PROMPT CHIPS -->
            <div class="chat-chips">
                <button class="chip-btn" onclick="AITutor.sendPrompt('Giải thích bản chất của Con trỏ và Cấp phát động trong C++')">
                    📌 Giải thích Con trỏ
                </button>
                <button class="chip-btn" onclick="AITutor.sendPrompt('Phân biệt Truyền tham trị (Pass by Value) và Truyền tham chiếu (&)?')">
                    🔄 Tham trị vs Tham chiếu
                </button>
                <button class="chip-btn" onclick="AITutor.sendPrompt('Tại sao code của tôi bị lỗi Segmentation Fault? Làm sao để sửa?')">
                    ⚠️ Lỗi Segmentation Fault
                </button>
                <button class="chip-btn" onclick="AITutor.sendPrompt('Hãy tạo cho tôi một bài tập thực hành về Mảng 2 chiều có lời giải')">
                    📝 Tạo bài tập Mảng 2D
                </button>
                <button class="chip-btn" onclick="AITutor.sendPrompt('Giải thích 4 tính chất trụ cột của OOP trong C++ kèm ví dụ ngắn gọn')">
                    🏛️ 4 Trụ cột OOP
                </button>
            </div>

            <!-- INPUT BAR -->
            <form class="chat-input-bar" onsubmit="event.preventDefault(); AITutor.handleUserSubmit();">
                <input type="text" id="chat-user-input" class="chat-input" placeholder="Hỏi AI về code C++, lỗi biên dịch..." autocomplete="off">
                <button type="submit" class="chat-send-btn">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </form>
        `;
        document.body.appendChild(drawer);

        this.drawerEl = drawer;
        this.messagesEl = document.getElementById('chat-messages');
        this.inputEl = document.getElementById('chat-user-input');
    },

    toggle() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.drawerEl.classList.add('open');
            setTimeout(() => this.inputEl && this.inputEl.focus(), 200);
        } else {
            this.drawerEl.classList.remove('open');
        }
    },

    open() {
        if (!this.isOpen) this.toggle();
    },

    sendPrompt(text) {
        if (!this.isOpen) this.open();
        if (this.inputEl) {
            this.inputEl.value = text;
            this.handleUserSubmit();
        }
    },

    async handleUserSubmit() {
        const text = this.inputEl.value.trim();
        if (!text) return;

        this.inputEl.value = '';

        // Add user bubble
        this.appendMessage('user', text);

        // Add typing indicator
        const typingEl = document.createElement('div');
        typingEl.className = 'chat-bubble bubble-assistant typing-indicator';
        typingEl.id = 'ai-typing-indicator';
        typingEl.innerHTML = `
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
        `;
        this.messagesEl.appendChild(typingEl);
        this.scrollToBottom();

        // Get saved custom Gemini API key if user configured one
        const customApiKey = localStorage.getItem('cpp_gemini_api_key') || '';

        const res = await Utils.fetchAPI('api/ai_chat.php', {
            method: 'POST',
            body: {
                message: text,
                lesson_id: this.currentLessonId,
                api_key: customApiKey
            }
        });

        // Remove typing indicator
        const typing = document.getElementById('ai-typing-indicator');
        if (typing) typing.remove();

        if (res.success && res.reply) {
            this.appendMessage('assistant', res.reply);
        } else {
            this.appendMessage('assistant', '⚠️ Xin lỗi, đã có lỗi kết nối đến trí tuệ nhân tạo. Vui lòng thử lại sau.');
        }
    },

    appendMessage(role, text) {
        const bubble = document.createElement('div');
        bubble.className = `chat-bubble bubble-${role} anim-fade-in`;

        if (role === 'assistant') {
            bubble.innerHTML = this.formatMarkdown(text);
        } else {
            bubble.textContent = text;
        }

        this.messagesEl.appendChild(bubble);
        this.scrollToBottom();
    },

    scrollToBottom() {
        if (this.messagesEl) {
            this.messagesEl.scrollTop = this.messagesEl.scrollHeight;
        }
    },

    formatMarkdown(text) {
        let html = Utils.escapeHtml(text);

        // Code blocks
        html = html.replace(/```cpp([\s\S]*?)```/g, function(match, code) {
            return `<div class="code-box my-2"><pre class="code-content" style="padding: 0.75rem; margin: 0; font-size: 0.8rem;"><code>${code.trim()}</code></pre></div>`;
        });
        html = html.replace(/```([\s\S]*?)```/g, function(match, code) {
            return `<div class="code-box my-2"><pre class="code-content" style="padding: 0.75rem; margin: 0; font-size: 0.8rem;"><code>${code.trim()}</code></pre></div>`;
        });

        // Inline code
        html = html.replace(/`([^`]+)`/g, '<code style="background: rgba(0,0,0,0.25); padding: 2px 5px; border-radius: 4px; font-family: var(--font-mono); font-size: 0.85em; color: #38bdf8;">$1</code>');

        // Bold
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        // Lists
        html = html.replace(/^\* (.*$)/gim, '<li style="margin-left: 1rem; list-style-type: disc;">$1</li>');

        // Headings
        html = html.replace(/^### (.*$)/gim, '<h4 style="font-size: 0.95rem; font-weight: 700; margin: 0.75rem 0 0.35rem; color: var(--primary);">$1</h4>');

        // Paragraphs
        html = html.replace(/\n\n/g, '<br><br>');
        html = html.replace(/\n/g, '<br>');

        return html;
    },

    // Shortcut called from quiz result review: "Hỏi AI giải thích sâu hơn về câu này"
    askAboutQuestion(qText, correctOpt, userChoice, explanation) {
        this.open();
        const prompt = `Tôi vừa làm bài kiểm tra trắc nghiệm C++. Hãy phân tích sâu giúp tôi câu hỏi sau:\nĐề bài: "${qText}"\nĐáp án đúng là ${correctOpt}.\nLựa chọn của tôi: ${userChoice || 'Bỏ trống'}.\nGiải thích tóm tắt: "${explanation}".\n👉 Tại sao đáp án ${correctOpt} lại đúng và bản chất kiến thức C++ ở đây là gì?`;
        this.sendPrompt(prompt);
    },

    async clearHistory() {
        if (!confirm('Bạn có chắc muốn xóa lịch sử trò chuyện cùng AI không?')) return;
        await Utils.fetchAPI('api/ai_chat.php', {
            method: 'POST',
            body: { action: 'clear' }
        });
        this.messagesEl.innerHTML = `
            <div class="chat-bubble bubble-assistant">
                Lịch sử trò chuyện đã được xóa. Tôi sẵn sàng giải đáp bất kỳ câu hỏi C++ mới nào của bạn!
            </div>
        `;
        Toast.info('Đã xóa lịch sử trò chuyện.');
    },

    showConfigModal() {
        const savedKey = localStorage.getItem('cpp_gemini_api_key') || '';
        const modal = document.createElement('div');
        modal.className = 'modal-overlay active';
        modal.innerHTML = `
            <div class="modal-content anim-slide-up" style="max-width: 440px;">
                <div class="modal-header">
                    <h3 style="font-size: 1.15rem; font-weight: 700;"><i class="fas fa-key text-primary"></i> Cấu hình API Trí tuệ nhân tạo</h3>
                    <button class="modal-close-btn" onclick="this.closest('.modal-overlay').remove()"><i class="fas fa-times"></i></button>
                </div>
                <div class="modal-body py-3">
                    <p class="text-secondary" style="font-size: 0.875rem; line-height: 1.6; margin-bottom: 1rem;">
                        Hệ thống mặc định sử dụng <strong>C++ Knowledge Reasoning Engine</strong> tích hợp sẵn không cần cấu hình. Nếu muốn sử dụng trực tiếp mô hình Google Gemini Live, bạn có thể điền Gemini API Key tại đây:
                    </p>
                    <div class="form-group">
                        <label class="form-label">Google Gemini API Key (Tùy chọn):</label>
                        <input type="password" id="gemini-key-input" class="form-control" value="${savedKey}" placeholder="AIzaSy...">
                        <span class="text-muted" style="font-size: 0.75rem;">Để trống để sử dụng AI Engine cục bộ có sẵn.</span>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" onclick="this.closest('.modal-overlay').remove()">Đóng</button>
                    <button class="btn btn-primary" onclick="AITutor.saveApiKey(this)">Lưu cấu hình</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    },

    saveApiKey(btn) {
        const input = document.getElementById('gemini-key-input');
        if (input) {
            const val = input.value.trim();
            if (val) {
                localStorage.setItem('cpp_gemini_api_key', val);
                Toast.success('Đã lưu cấu hình Gemini API Key thành công!');
            } else {
                localStorage.removeItem('cpp_gemini_api_key');
                Toast.info('Đã chuyển về sử dụng C++ AI Engine cục bộ.');
            }
        }
        btn.closest('.modal-overlay').remove();
    }
};

window.AITutor = AITutor;
