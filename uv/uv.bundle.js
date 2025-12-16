
const query = new URLSearchParams(window.location.search).get('q');
const iframe = document.createElement('iframe');

iframe.style.width = '100%';
iframe.style.height = '100%';
iframe.style.border = 'none';

if (query) {
  
    iframe.src = `/uv.sw.js?url=${encodeURIComponent(query)}`;
} else {
    iframe.src = 'about:blank';
}

document.body.appendChild(iframe);
