# 🚀 PromptHub - Thư Viện Prompt Chuyên Nghiệp

PromptHub là một thư viện prompt chuyên nghiệp với giao diện hiện đại, giúp bạn quản lý và sử dụng các prompt cho ChatGPT, Claude, Midjourney và các AI tools khác một cách hiệu quả.

![PromptHub](https://img.shields.io/badge/Status-Active-success)
![License](https://img.shields.io/badge/License-MIT-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Tính Năng

### 🎯 Core Features
- ✅ **500+ Prompts** - Thư viện prompt phong phú và đa dạng
- 🔍 **Search & Filter** - Tìm kiếm và lọc prompt theo danh mục
- 📋 **Copy to Clipboard** - Copy prompt nhanh chóng chỉ với 1 click
- 📱 **Responsive Design** - Hoạt động mượt mà trên mọi thiết bị
- 🎨 **Modern UI/UX** - Giao diện đẹp mắt, dễ sử dụng
- ⚡ **Fast Performance** - Tải nhanh, không cần server

### 🏷️ Danh Mục Prompt
- 🤖 **ChatGPT Prompts** - Prompts cho ChatGPT
- 🔬 **Claude Prompts** - Prompts cho Claude AI
- 🎨 **Midjourney Prompts** - Prompts tạo hình ảnh
- 💻 **Coding Prompts** - Prompts lập trình
- ✍️ **Writing Prompts** - Prompts viết lách
- 📊 **Business Prompts** - Prompts kinh doanh

### 🎭 UI Components
- Navigation với smooth scroll
- Hero section với gradient animation
- Service cards với hover effects
- Prompts grid layout
- Modal chi tiết prompt
- Contributors infinite ticker
- FAQ accordion
- Contact form
- Footer với social links

## 🚀 Demo

[Live Demo](https://givhvy.github.io/p/) *(Sẽ khả dụng sau khi deploy)*

## 📦 Cài Đặt & Sử Dụng

### Cách 1: Chạy Trực Tiếp
```bash
# Clone repository
git clone https://github.com/givhvy/p.git

# Mở file index.html trong browser
# Hoặc sử dụng Live Server nếu dùng VS Code
```

### Cách 2: Deploy lên GitHub Pages
1. Fork repository này
2. Vào Settings → Pages
3. Chọn branch `main` và folder `/root`
4. Website sẽ tự động deploy

### Cách 3: Chạy với Local Server
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

Sau đó truy cập: `http://localhost:8000`

## 📁 Cấu Trúc Project

```
promptmanager/
├── index.html           # Trang chính
├── styles.css          # CSS với design system
├── script.js           # JavaScript logic
├── prompts-data.js     # Database prompts
├── README.md           # Documentation
├── .gitignore          # Git ignore file
└── website-example/    # Template tham khảo
```

## 🎨 Customization

### Thêm Prompt Mới

Mở file `prompts-data.js` và thêm object mới vào array `promptsData`:

```javascript
{
    id: 16,
    title: "Tên Prompt",
    category: "chatgpt", // chatgpt, claude, midjourney, coding, writing, business
    description: "Mô tả ngắn gọn",
    icon: "🎯",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    rating: 4.9,
    views: 1500,
    prompt: `Nội dung prompt chi tiết ở đây...`
}
```

### Thay Đổi Màu Sắc

Sửa CSS variables trong file `styles.css`:

```css
:root {
    --color-primary: #F7C547;    /* Màu chủ đạo */
    --color-secondary: #66FC75;   /* Màu phụ */
    --color-dark: #2C2C2C;       /* Màu text */
}
```

### Thêm Category Mới

1. Thêm option vào `index.html`:
```html
<option value="new-category">New Category</option>
```

2. Thêm info vào `prompts-data.js`:
```javascript
"new-category": {
    name: "New Category",
    color: "#3B82F6",
    icon: "🎯"
}
```

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling với CSS Variables
- **Vanilla JavaScript** - Không dependencies
- **Google Fonts** - Inter font family
- **SVG** - Icons và graphics

## 📱 Responsive Breakpoints

- **Desktop**: ≥1280px
- **Tablet**: 810px - 1279px
- **Mobile**: ≤809px

## 🎯 Roadmap

- [ ] Dark mode toggle
- [ ] User authentication
- [ ] Save favorite prompts
- [ ] Export prompts to file
- [ ] Prompt version history
- [ ] Advanced search with tags
- [ ] Multi-language support
- [ ] API endpoint
- [ ] Backend integration
- [ ] Rating system

## 🤝 Contributing

Contributions are welcome! Để đóng góp:

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

### Đóng Góp Prompt

Bạn có thể đóng góp prompt mới bằng cách:
1. Sử dụng Contact Form trên website
2. Tạo Pull Request với prompt mới trong `prompts-data.js`
3. Mở Issue với nội dung prompt

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**givhvy**
- GitHub: [@givhvy](https://github.com/givhvy)

## 🙏 Acknowledgments

- Design inspiration from VistaHaven template
- Font: Inter by Google Fonts
- Icons: Emoji & SVG
- Community contributors

## 📞 Contact & Support

- 📧 Email: contact@prompthub.com
- 🐛 Issues: [GitHub Issues](https://github.com/givhvy/p/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/givhvy/p/discussions)

## ⭐ Star History

Nếu project này hữu ích, hãy cho một ⭐ để ủng hộ nhé!

---

**Made with ❤️ by givhvy**
