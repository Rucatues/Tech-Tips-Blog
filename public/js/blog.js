const newPostHandler = async (event) => {
    event.preventDefault();

    var title = document.querySelector('#title-input').value;
    var description = document.querySelector('#description-input').value;
    if (title && description) {
        const response = await fetch('/api/blog', {
            method: 'POST',
            body: JSON.stringify({ title, description }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to create new post');
        }
    }
}

document
    .querySelector('.create-form')
    .addEventListener('submit', newPostHandler);