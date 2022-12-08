export const cardTemplate = ({webformatURL,tags,likes,views,comments,downloads}) => `
    <div class="photo-card">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" width="320" />
        <div class="info">
            <ul class="list">    
                <li class="info-item">
                    <p><b>Likes</b></p>
                    <p>${likes}</p>
                </li>
                <li class="info-item">
                    <p><b>Views</b></p>
                    <p>${views}</p>
                </li>
                <li class="info-item">
                    <p><b>Comments</b></p>
                    <p>${comments}</p>
                </li>
                <li class="info-item">
                    <p><b>Downloads</b></p>
                    <p>${downloads}</p>
                </li>
            </ul>
        </div>
    </div>`;