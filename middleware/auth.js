export default function (ctx) {
  const token = ctx.$cookies.get('token')
  if (!token && ctx.route.path !== '/') {
    return ctx.redirect('/')
  } else if(token && ctx.route.path === '/') {
    return ctx.redirect('/home')
  }

}
