
const params = new URLSearchParams(window.location.search);
const target = params.get('q'); 

const iframe = document.createElement('iframe');
iframe.style.width = '100%';
iframe.style.height = '100%';
iframe.style.border = 'none';

if (target) {
    iframe.src = `/active/uv/uv.handler.js?url=${encodeURIComponent(target)}`;
} else {
    iframe.src = 'about:blank';
}

document.body.appendChild(iframe);

