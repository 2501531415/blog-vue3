const baseUrl = import.meta.env.VITE_HTTP_LOCAL == 'company'?'http://blog.wmyy.fun':'http://localhost:3001'

const tagColor = ['#7eb93b','#5b31b0','#ff8800','#f1372a']

export {
    baseUrl,tagColor
}