document.addEventListener('DOMContentLoaded', () => {
    const articleContainer = document.getElementById('article-container');

    const articles = [
        {
            image: 'Image/article_1.jpg',
            title: 'Article Title 1',
            text: 'This is a brief description of the article content 1.',
            username: 'Author123',
            reactions: '100 Reactions'
        },
        {
            image: 'Image/article_2.jpg',
            title: 'Article Title 2',
            text: 'This is a brief description of the article content 2.',
            username: 'Author456',
            reactions: '200 Reactions'
        },
        // Add more articles here
    ];

    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.className = 'article-box';

        articleElement.innerHTML = `
            <div class="article-left">
                <img src="${article.image}" alt="Article Image" style="width:100%; height:100%;">
            </div>
            <div class="article-right">
                <div class="article-title">${article.title}</div>
                <div class="article-text">${article.text}</div>
                <div class="article-footer">
                    <span class="username">Posted by ${article.username}</span>
                    <span class="reactions">${article.reactions}</span>
                </div>
            </div>
        `;

        articleContainer.appendChild(articleElement);
    });
});