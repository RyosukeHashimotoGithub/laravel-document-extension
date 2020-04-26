const version = location.pathname.match(/\d\.(\d|x)/);
const here = location.pathname.replace(/\/laravel\/\d\.(\d|x)/, '/laravel/7.x');
const redirect = () => location.href = here;

version && version[0] !== '7.x' && redirect();