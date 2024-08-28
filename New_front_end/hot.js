document.addEventListener('DOMContentLoaded', () => {
    const boxContainer = document.getElementById('box-container');

//mày sẽ call hàm get hot search có thể là dựa trên react để lấy top 4 bài chảngư hạn, và để nó vào  tuple, sau đó 
//vòng lặp bên dưới sẽ hiển thị ra
    
    const boxes = [
        {
            image: 'Image/hot_search_1.jpg',
            title: 'Title of the Post 1',
            text: 'This is a brief description of the content 1.',
            username: 'User123',
            reactions: '123 Reactions'
        },
        {
            image: 'Image/hot_search_2.jpg',
            title: 'Title of the Post 2',
            text: 'This is a brief description of the content 2.',
            username: 'User456',
            reactions: '456 Reactions'
        },
        {
            image: 'Image/hot_search_3.jpg',
            title: 'Title of the Post 2',
            text: 'This is a brief description of the content 2.',
            username: 'User456',
            reactions: '456 Reactions'
        },
        {
            image: 'Image/hot_search_4.jpg',
            title: 'Title of the Post 2',
            text: 'This is a brief description of the content 2.',
            username: 'User456',
            reactions: '456 Reactions'
        },
    ];

    boxes.forEach(box => {
        const boxElement = document.createElement('div');
        boxElement.className = 'small-box';
        
        boxElement.innerHTML = `
            <div class="image-gallery">
                <img src="${box.image}" alt="Image" style="width:100%;">
            </div>
            <div class="box-title">${box.title}</div>
            <div class="box-text">${box.text}</div>
            <div class="box-footer">
                <span class="username">Posted by ${box.username}</span>
                <span class="reactions">${box.reactions}</span>
            </div>
        `;
        
        boxContainer.appendChild(boxElement);
    });
});
