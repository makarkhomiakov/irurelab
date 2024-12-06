const HrefEvent = 'linkClicked';
let type = 'linkClicked';
let a = {
    href: 'https://www.example.com'
};

if (type === HrefEvent && a && a.href) {
    console.log('HrefEvent detected and a.href is:', a.href);
}
