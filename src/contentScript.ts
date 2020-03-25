// location.href = location.pathname.replace(/\/laravel\/\d\.(\d|x)/, '6.x');
const version = location.pathname.match(/\d\.(\d|x)/);
const here = location.pathname.replace(/\/laravel\/\d\.(\d|x)/, '/laravel/6.x');
const redirect = () => location.href = here;

version && version[0] !== '6.x' && redirect();